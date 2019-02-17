const request = require('request')
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('HotelRestaurant.txt');
writeStream.setDefaultEncoding('UTF-8');

var url = 'https://www.relaischateaux.com/us/site-map/etablissements';

request(url,function(err, resp,html) {
    if (!err&&resp.statusCode==200){   
        var $ = cheerio.load(html);
        const relais=$('#countryF');
        const list = relais.next().first().children().next();
        list.children().children().each(function(i,element)
        {
        	var a =$(this);
        	if (a.next().text().includes('Chef'))
        	{
         		var title=a.text();
         		var url=a.attr('href');
         		var str = title.replace(/\s\s+/g," ")
         		writeStream.write(url+";"); 	
        	}
        })
    }
})



