class Anak {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  ultah(usia) {
    this.umur += usia;
    return `HBD ${this.umur} tahun cuok, ojok lali ${PU} ne,` + " Malu dah gede," + ` ${mirai}`;
  }
  hariBiasa() {
    this.umur += 0;
    return `Mabar ${game} cuy!`;
  }
}
let anak = new Anak("Namamu", 15);

let mirai = "Ingat Masa Depan!";
let game = "ML";
let PU = "PU";

var hariUltah = new Date();
const tanggal = hariUltah.getDate();
const bulan = hariUltah.getMonth() + 1;
const tahun = hariUltah.getFullYear();

if (tanggal == 28 && bulan == 10 && tahun == 2021) {
  alert(anak.ultah(1));
} else {
  alert(anak.hariBiasa());
}
