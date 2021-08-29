const axios = require('axios')
const cheerio = require('cheerio')

module.exports.search = function Search(nominal, page) {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.wallpaperflare.com/search?wallpaper=${nominal}&page=${page}`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let title = []
     let img = []
 	$('#gallery > li > figure > a > img').get().map((rest) => {
         img.push($(rest).attr('data-src'))
         })
         $('#gallery > li > figure > a > img').get().map((rest) => {
        	title.push($(rest).attr('title'))
         })
     let result = []
     for (let i = 0; i < img.length; i++) {
          result.push({
               	image: img[i],
               	judul: title[i]
          })
     }
            
        const res = {
            status: 200,
            createdBy: 'ZSofttt',
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}