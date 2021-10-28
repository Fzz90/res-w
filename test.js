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

const mirai = "Ingat Masa Depan!";
const game = "ML";
const PU = "PU";

let hariUltah = "Hari ini";

if (hariUltah) {
  alert(anak.ultah(1));
} else {
  alert(anak.hariBiasa());
}