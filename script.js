let ultimaFrase = null;

const FRASI = [
  { testo: "fg7ft", img: null, vid: null },
  { testo: "trct", img: null, vid: null },
  { testo: "yytfyfytf", img: null, vid: null },
  { testo: "tdftrddtyd", img: null, vid: null },
  { testo: "tftyfyucf", img: null, vid: null },
  { testo: "yfutctc", img: null, vid: null },
  { testo: "fcrjjctjrx", img: null, vid: null },
  { testo: "dyyrdytc", img: null, vid: null },
  { testo: "tvcytcy", img: null, vid: null },
  { testo: "gcytctyc", img: null, vid: null },
  { testo: "tctctycity", img: null, vid: null },
  { testo: "fxrtuteu", img: null, vid: null },
  { testo: "tcdtictrrix", img: null, vid: null },
  { testo: "hvyuvtco", img: null, vid: null },
  { testo: "cytcyitcrtx", img: null, vid: null },
  { testo: "cyrcyrxr", img: null, vid: null },
  { testo: "yftcfogtycx", img: null, vid: null },
  { testo: "utcticitx", img: null, vid: null },
  { testo: "ctkyckytciyr", img: null, vid: null },
  { testo: "cutcoytciyr", img: null, vid: null },
  { testo: "tftcot", img: null, vid: null },
  { testo: "gcgxkhytxkytx", img: null, vid: null },
  { testo: "gxfxrtxjetzs", img: null, vid: null },
  { testo: "hvyuvotuct", img: null, vid: null },
  { testo: "vlgcvlugt", img: null, vid: null },
  { testo: "cytckyrxkryx", img: null, vid: null },
  { testo: "rsgvuy", img: null, vid: null },
  { testo: "ftfytctyc", img: null, vid: null },
  { testo: "rtxtuexgf", img: null, vid: null },
  { testo: "vyutvtyuc", img: null, vid: null },
  { testo: "tcrtrdxr", img: null, vid: null },
  { testo: "hvutfktuc", img: null, vid: null },
  { testo: "cyrjxj", img: null, vid: null }
];


// 🔁 Frases mezcladas y ciclo sin repetición
let tutteLeFrasi = [];

function mescolaFrasi() {
  tutteLeFrasi = [...FRASI];
  for (let i = tutteLeFrasi.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tutteLeFrasi[i], tutteLeFrasi[j]] = [tutteLeFrasi[j], tutteLeFrasi[i]];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("calmButton");
  const popup = document.getElementById("popup");
  const cerrar = document.getElementById("closePopup");
  const fraseElemento = document.getElementById("frase");
  const immagineElemento = document.getElementById("immagine");
  const videoElemento = document.getElementById("videoPopup");
  const videoSource = document.getElementById("videoSource");

  mescolaFrasi(); // Mezclar frases al iniciar

  boton.addEventListener("click", () => {
    if (tutteLeFrasi.length === 0) mescolaFrasi();
    const nuovaFrase = tutteLeFrasi.shift();

    fraseElemento.textContent = nuovaFrase.testo;

    // Imagen
    if (nuovaFrase.img) {
      immagineElemento.src = nuovaFrase.img;
      immagineElemento.classList.remove("hidden");
    } else {
      immagineElemento.classList.add("hidden");
      immagineElemento.src = "";
    }

    // Video
    if (nuovaFrase.vid) {
      videoSource.src = nuovaFrase.vid;
      videoElemento.load();
      videoElemento.classList.remove("hidden");
    } else {
      videoElemento.pause();
      videoSource.src = "";
      videoElemento.classList.add("hidden");
    }

    popup.classList.remove("hidden");
  });

  cerrar.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
});
