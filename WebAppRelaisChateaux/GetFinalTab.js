const request = require('request')
const cheerio = require('cheerio');
const fs = require('fs');

var stringSimilarity = require('string-similarity');
var ListUrls =fs.readFileSync('HotelRestaurant.txt').toString().split(";");
var Resto =fs.readFileSync('post.txt').toString().split(";");
const writeStream = fs.createWriteStream('Final.json');
writeStream.setDefaultEncoding('UTF-8');

function CreerJSON()
{
   writeStream.write("{\"table\":[");
  for(var i=0; i<ListUrls.length; i++)
{
  request(ListUrls[i],function(err, resp,html){
    if(!err&&resp.statusCode==200)
    {
      const $ = cheerio.load(html);
       
      const Sub=$('ul.jsSecondNavSub');
      var tempresto=Sub.children().first().text();
      var str = tempresto.replace(/\s\s+/g," ");
      for(var j=0; j<Resto.length;j++)
      {
        if(str!=''&&stringSimilarity.compareTwoStrings(str,Resto[j])>0.7)
        {
          
          var nom = $('h3.mainTitle2').text();
          var nom2=nom.replace(/\s\s+/g," ");
          var prix =$('span.price').text();
          writeStream.write("\n{\n"+"\t\"Nom\": \""+nom2+"\",\n\t\"Restaurant\": \""+str+"\",\n\t\"Prix\": \""+prix+"$\""+"\n},");  
          //console.log("\n{\n"+"\t\"Nom\": \""+nom2+"\",\n\t\"Restaurant\": \""+str+"\",\n\t\"Prix\": \""+prix+"$\""+",\n}");
        }
      }
    }
  })
}
}
CreerJSON();
setTimeout(function corriger(){
writeStream.write("\n{\n"+"\t\"Nom\": \""+"\",\n\t\"Restaurant\": \""+"\",\n\t\"Prix\": \""+"$\""+"\n},"+"]}");

},45000);




