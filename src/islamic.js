const axios = require('axios')
const cheerio = require('cheerio')

module.exports.datamasjid = function dataMasjid(propinsi, page) {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.dream.co.id/sim/${propinsi}/index${page}.html`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let masjid = []
     let urutan = []
     let link = []
     let tahun = []
     let jalan = []
     let kotaa = []
     let camat = []
     let prov = []
     let macam = []
     let statuss = []
 	$('body > div.drm-container > div > div.drm-artikel-masjid > div.daftar-masjid > table > tbody > tr > td.no').get().map((rest) => {
         urutan.push($(rest).text())
         })
         $('body > div.drm-container > div > div.drm-artikel-masjid > div.daftar-masjid > table > tbody > tr > td.nama-masjid > a').get().map((rest) => {
        	masjid.push($(rest).text())
         })
         $('body > div.drm-container > div > div.drm-artikel-masjid > div.daftar-masjid > table > tbody > tr > td.nama-masjid > a').get().map((rest) => {
        	link.push($(rest).attr('href'))
         })
         $('body > div.drm-container > div > div.drm-artikel-masjid > div.daftar-masjid > table > tbody > tr > td.thn-berdiri').get().map((rest) => {
        	tahun.push($(rest).text())
         })
         $('body > div.drm-container > div > div.drm-artikel-masjid > div.daftar-masjid > table > tbody > tr > td.alamat').get().map((rest) => {
        	jalan.push($(rest).text())
         })
         $('body > div.drm-container > div > div.drm-artikel-masjid > div.daftar-masjid > table > tbody > tr > td.kota').get().map((rest) => {
        	kotaa.push($(rest).text())
         })
         $('body > div.drm-container > div > div.drm-artikel-masjid > div.daftar-masjid > table > tbody > tr > td.kecamatan').get().map((rest) => {
        	camat.push($(rest).text())
         })
         $('body > div.drm-container > div > div.drm-artikel-masjid > div.daftar-masjid > table > tbody > tr > td.provinsi').get().map((rest) => {
        	prov.push($(rest).text())
         })
         $('body > div.drm-container > div > div.drm-artikel-masjid > div.daftar-masjid > table > tbody > tr > td.jenis').get().map((rest) => {
        	macam.push($(rest).text())
         })
         $('body > div.drm-container > div > div.drm-artikel-masjid > div.daftar-masjid > table > tbody > tr > td.status').get().map((rest) => {
        	statuss.push($(rest).text())
         })
     let result = []
     for (let i = 0; i < urutan.length; i++) {
          result.push({
               	nomer: urutan[i],
               	nama: masjid[i],
               	url: link[i],
                 tahunBerdiri: tahun[i],
                 alamat: jalan[i],
                 kota: kotaa[i],
                 kecamatan: camat[i],
                 provinsi: prov[i],
                 jenis: macam[i],
                 status: statuss[i]
          })
     }
            
        const res = {
			createdBy: 'ZSofttt',
            status: 200,
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}


module.exports.listkota = function ListKota() {
	return new Promise((resolve, reject) => {
	  axios.get(`https://www.dream.co.id/sim`)
		.then(({
		  data
		}) => {
		  const $ = cheerio.load(data)
		  let daftar = []
	   $('#province > option').get().map((rest) => {
		   daftar.push($(rest).text())
		   })
	   let result = []
	   for (let i = 0; i < daftar.length; i++) {
			result.push({
				provinsi: daftar[i]
			})
	   }
			  
		  const res = {
			  status: 200,
			  hasil: result
			}
			resolve(res)
		})
		.catch(reject)
	})
  }