const axios = require('axios')
const cheerio = require('cheerio')

module.exports.gempaterkini = function gempaTerkini() {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.bmkg.go.id/`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let magnitudoo = []
     let jam = []
     let dalem = []
     let kejadian = []
 	$('#meteorologi-geofisika > div > div > div.col-md-4.md-margin-bottom-10 > div.gempabumi-home-bg.margin-top-13 > div > div.col-md-6.col-xs-6.gempabumi-detail.no-padding > ul > li:nth-child(1) > span').get().map((rest) => {
         jam.push($(rest).text())
         })
         $('#meteorologi-geofisika > div > div > div.col-md-4.md-margin-bottom-10 > div.gempabumi-home-bg.margin-top-13 > div > div.col-md-6.col-xs-6.gempabumi-detail.no-padding > ul > li:nth-child(2)').get().map((rest) => {
         magnitudoo.push($(rest).text())
         })
         $('#meteorologi-geofisika > div > div > div.col-md-4.md-margin-bottom-10 > div.gempabumi-home-bg.margin-top-13 > div > div.col-md-6.col-xs-6.gempabumi-detail.no-padding > ul > li:nth-child(3)').get().map((rest) => {
        	dalem.push($(rest).text())
         })
         $('#meteorologi-geofisika > div > div > div.col-md-4.md-margin-bottom-10 > div.gempabumi-home-bg.margin-top-13 > div > div.col-md-6.col-xs-6.gempabumi-detail.no-padding > ul > li:nth-child(4)').get().map((rest) => {
        	kejadian.push($(rest).text())
         })
     let result = []
     for (let i = 0; i < jam.length; i++) {
          result.push({
               	waktu: jam[i],
               	magnitudo: magnitudoo[i],
               	kedalaman: dalem[i],
                 lokasi: kejadian[i]
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


module.exports.cuacaterkini = function cuacaTerkini() {
  return new Promise((resolve, reject) => {
    axios.get(`https://bmkg.go.id`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let daerah = []
 	$('#meteorologi-geofisika > div > div > div.col-md-8.md-margin-bottom-20 > div.prakicu-kota-besar.no-space-carousel-block.owl-carousel-v1.margin-bottom-10.md-margin-bottom-20 > div.prakicu-kota-besar-bg > div > div.owl-wrapper-outer > div > div:nth-child(9) > div > div > div > h2.kota').get().map((rest) => {
         daerah.push($(rest).text())
         })
     let result = []
     for (let i = 0; i < daerah.length; i++) {
          result.push({
               	provinsi: daerah[i]
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