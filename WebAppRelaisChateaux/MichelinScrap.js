var request = require('request');
var cheerio = require('cheerio');

const fs = require('fs');
const writeStream = fs.createWriteStream('post.txt');
writeStream.setDefaultEncoding('UTF-8');

request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin', function(err, resp, html) {
	if (!err){
		const $ = cheerio.load(html);
          const item = $('div.poi_card-display-title');
          var str = item.text().replace(/\s\s+/g,"; ")
          writeStream.write(str);

  
      }
});

for (var i = 2; i<36; i++)
{
	request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-'+i, function(err, resp, html) {
	if (!err){
		const $ = cheerio.load(html);
          const item = $('div.poi_card-display-title');
          var str = item.text().replace(/\s\s+/g,"; ")
          writeStream.write(str);

  
      }
});
}