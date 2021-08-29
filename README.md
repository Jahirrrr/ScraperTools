# ScraperTools
Official ScraperTools NPM Package


## Get Started

Via NPM:
```bash
$ npm install scraper-tools
```

## Cara Menggunakan

```js
const scrapertools = require('scraper-tools');

/*
scraperbox.jenis-modul.nama-modul(params)
.then(res => console.log(res))
.catch(err => console.log(err))
*/
```

### Film

```js
//Contoh!
scrapertools.film.bioskopcomingsoon()
.then(res => console.log(res))
.catch(err => console.log(err))
```

Output :
```
{
  status: 200,
  createdBy: 'ZSofttt',
  hasil: [
    {
      url: 'https://jadwalnonton.com/film/2021/old/',
      title: 'OLD',
      img: 'https://www.jadwalnonton.com/data/images/movies/2021/old-21011500_300x450.jpg'
    },
    {
      url: 'https://jadwalnonton.com/film/2021/snake-eyes/',
      title: 'SNAKE EYES',
      img: 'https://www.jadwalnonton.com/data/images/movies/2021/snake-eyes-21011400_300x450.jpg'
    },
    {
      url: 'https://jadwalnonton.com/film/2021/hard-hit/',
      title: 'HARD HIT',
      img: 'https://www.jadwalnonton.com/data/images/movies/2021/hard-hit-21011200_300x450.jpg'
    },
    {
      url: 'https://jadwalnonton.com/film/2021/the-boss-baby-family-business/',
      title: 'THE BOSS BABY: FAMILY BUSINESS',
      img: 'https://www.jadwalnonton.com/data/images/movies/2021/the-boss-baby-family-business-21010900_300x450.jpg'
    },
    {
      url: 'https://jadwalnonton.com/film/2021/escape-room-tournament-of-champions/',
      title: 'ESCAPE ROOM: TOURNAMENT OF CHAMPIONS',
      img: 'https://www.jadwalnonton.com/data/images/movies/2021/escape-room-tournament-of-champions-21011100_300x450.jpg'
    },
    {
      url: 'https://jadwalnonton.com/film/2021/space-jam-a-new-legacy/',
      title: 'SPACE JAM: A NEW LEGACY',
      img: 'https://www.jadwalnonton.com/data/images/movies/2021/space-jam-a-new-legacy-21sjan_300x450.jpg'
    },
    {
      url: 'https://jadwalnonton.com/film/2021/stillwater/',
      title: 'STILLWATER',
      img: 'https://www.jadwalnonton.com/data/images/movies/2021/stillwater-21010700_300x450.jpg'
    },
    {
      url: 'https://jadwalnonton.com/film/2021/the-hitmans-wifes-bodyguard/',
      title: "THE HITMAN'S WIFE'S BODYGUARD",
      img: 'https://www.jadwalnonton.com/data/images/movies/2021/the-hitmans-wifes-bodyguard-18hbo2_300x450.jpg'
    }
  ]
}
```
<details>
  <summary><b>List dari modul di atas (jenis-modul = film)</b> (tekan untuk melihat)</summary>

| nama modul | params | response | description |
| :--- | :---------- | :--- | :--- |
| bioskopcomingsoon | - | JSON | Mencari data film bioskop yang akan hadir |

</details>

### Bmkg

```js
//Contoh!
scrapertools.bmkg.gempaterkini()
.then(res => console.log(res))
.catch(err => console.log(err))
```

Output :
```
{
  status: 200,
  createdBy: 'ZSofttt',
  hasil: [
    {
      waktu: '29 Agustus 2021, 07:37:30 WIB',
      magnitudo: '4.2',
      kedalaman: '10 km',
      lokasi: '3.92 LS - 122.90 BT'
    }
  ]
}
```

<details>
  <summary><b>List dari modul di atas (jenis-modul = bmkg)</b> (tekan untuk melihat)</summary>

| nama modul | params | response | description |
| :--- | :---------- | :--- | :--- |
| gempaterkini | - | JSON | Mencari data gempa terkini di Indonesia |

</details>

### Wallpaper

```js
//Contoh!
scrapertools.wallpaper.search('anime', '4')
.then(res => console.log(res))
.catch(err => console.log(err))
```

Output :
```
{
  status: 200,
  createdBy: 'ZSofttt',
  hasil: [
    {
      image: 'https://c4.wallpaperflare.com/wallpaper/450/718/555/anime-your-name-kimi-no-na-wa-wallpaper-preview.jpg',
      judul: 'anime, Your Name, Kimi no Na Wa HD wallpaper'
    },
    {
      image: 'https://c4.wallpaperflare.com/wallpaper/914/26/575/fate-series-fate-apocrypha-anime-girls-saber-of-red-wallpaper-preview.jpg',
      judul: 'yellow-haired anime character, Fate Series, Fate/Apocrypha, anime girls HD wallpaper'
    },
    {
      image: 'https://c4.wallpaperflare.com/wallpaper/45/141/247/studio-ghibli-spirited-away-chihiro-hayao-miyazaki-wallpaper-preview.jpg',
      judul: 'Studio Ghibli, Spirited Away, Chihiro, Hayao Miyazaki, anime HD wallpaper'
    },
    {
      image: 'https://c4.wallpaperflare.com/wallpaper/819/499/757/haikyuu-anime-boys-hinata-shouyou-kageyama-tobio-wallpaper-preview.jpg',
      judul: 'Haikyuu!!, anime boys, Hinata Shouyou, Kageyama Tobio HD wallpaper'
    },
    {
      image: 'https://c4.wallpaperflare.com/wallpaper/226/867/800/kimetsu-no-yaiba-kamado-tanjirō-anime-boys-hd-wallpaper-preview.jpg',
      judul: 'Kimetsu no Yaiba, Kamado Tanjirō, anime boys HD wallpaper'
    },
    {
      image: 'https://c4.wallpaperflare.com/wallpaper/259/163/824/jujutsu-kaisen-anime-tv-series-hd-wallpaper-preview.jpg',
      judul: 'Jujutsu Kaisen, anime tv series HD wallpaper'
    },
    {
      image: 'https://c4.wallpaperflare.com/wallpaper/894/346/573/shingeki-no-kyojin-mikasa-ackerman-anime-anime-girls-wallpaper-preview.jpg',
      judul: 'brown-haired female anime character wallpaper, Shingeki no Kyojin HD wallpaper'
    },
    {
      image: 'https://c4.wallpaperflare.com/wallpaper/508/596/918/anime-demon-slayer-kimetsu-no-yaiba-shinobu-kochou-hd-wallpaper-preview.jpg',
      judul: 'Anime, Demon Slayer: Kimetsu no Yaiba, Shinobu Kochou HD wallpaper'
    },
    {
      image: 'https://c4.wallpaperflare.com/wallpaper/1018/756/882/anime-neon-genesis-evangelion-wallpaper-preview.jpg',
      judul: 'anime, Neon Genesis Evangelion, night, astronomy, star - space HD wallpaper'
    },
    {
      image: 'https://c4.wallpaperflare.com/wallpaper/719/114/325/anime-naruto-itachi-uchiha-wallpaper-preview.jpg',
      judul: 'Anime, Naruto, Itachi Uchiha HD wallpaper'
    },
    {
      image: 'https://c4.wallpaperflare.com/wallpaper/280/611/595/anime-violet-evergarden-violet-evergarden-character-wallpaper-preview.jpg',
      judul: 'brown-haired female anime character, Violet Evergarden, Violet Evergarden (Character) HD wallpaper'
    }
  ]
}
```

<details>
  <summary><b>List dari modul di atas (jenis-modul = wallpaper)</b> (tekan untuk melihat)</summary>

| nama modul | params | response | description |
| :--- | :---------- | :--- | :--- |
| wallpaper | search &  page | JSON | Mencari gambar wallpaper dalam format JSON |

</details>

### Kemdikbud

```js
//Contoh!
scrapertools.kemdikbud.kbbi('mobil')
.then(res => console.log(res))
.catch(err => console.log(err))
```

Output :
```
{
  createdBy: 'ZSofttt',
  lema: 'mo.bil1 ',
  arti: [
    'kendaraan darat yang digerakkan oleh tenaga mesin, beroda empat atau lebih (selalu genap), biasanya menggunakan bahan bakar minyak untuk menghidupkan mesinnya; oto; otomobil',
    'mudah bergerak (berpindah) atau digerakkan (dipindah-pindahkan): ia sangat -- sehingga cocok untuk melakukan tugas luar'
  ]
}
```

<details>
  <summary><b>List dari modul di atas (jenis-modul = kemdikbud)</b> (tekan untuk melihat)</summary>

| nama modul | params | response | description |
| :--- | :---------- | :--- | :--- |
| kbbi | kata | JSON | Mencari arti kata di Kamus Besar Bahasa Indonesia |

</details>

### StayHalal

```js
//Contoh!
scrapertools.stayhalal.datamasjid('dki-jakarta', '8')
.then(res => console.log(res))
.catch(err => console.log(err))
```

Output :
```
{
  createdBy: 'ZSofttt',
  status: 200,
  hasil: [
    {
      nomer: '61',
      nama: 'Mushalla Al-Khairat',
      url: 'https://www.dream.co.id/sim/dki-jakarta-kota-adm-jakarta-barat-grogol-petamburan-mushalla-al-khairat-7hmrb.html',
      tahunBerdiri: '1975',
      alamat: 'Jl.Sosial Rt.04/02',
      kota: 'KOTA ADM. JAKARTA BARAT',
      kecamatan: 'Grogol Petamburan',
      provinsi: 'DKI JAKARTA',
      jenis: 'MUSHALLA PERUMAHAN',
      status: 'Wakaf'
    },
    {
      nomer: '62',
      nama: 'Mushalla Ad-darul ulum',
      url: 'https://www.dream.co.id/sim/dki-jakarta-kota-adm-jakarta-barat-grogol-petamburan-mushalla-ad-darul-ulum-sy0vj.html',
      tahunBerdiri: '1972',
      alamat: 'Jl.Karya barat Rw.03',
      kota: 'KOTA ADM. JAKARTA BARAT',
      kecamatan: 'Grogol Petamburan',
      provinsi: 'DKI JAKARTA',
      jenis: 'MUSHALLA DI TEMPAT PUBLIK',
      status: 'Wakaf'
    }
  ]
}
```

<details>
  <summary><b>List dari modul di atas (jenis-modul = stayhalal)</b> (tekan untuk melihat)</summary>

| nama modul | params | response | description |
| :--- | :---------- | :--- | :--- |
| datamasjid | provinsi & page | JSON | Menampilkan data masjid di Indonesia |

</details>

Note : untuk melihat listkota, gunakan ini :
```js
scrapertools.stayhalal.liskota()
.then(res => console.log(res))
.catch(err => console.log(err))
```

### Credits
- ZSofttt


### Link Packages

https://www.npmjs.com/package/scraper-tools
