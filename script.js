const imagens = [
  { src: "imagens/img1.jpg", frase: "Frase 1 inspiradora" },
  { src: "imagens/img2.jpg", frase: "Frase 2 tocante" },
  { src: "imagens/img3.jpg", frase: "Frase 3 emocionante" },
];

let i = 0;
const img = document.getElementById("slide-img");
const caption = document.getElementById("caption");

setInterval(() => {
  i = (i + 1) % imagens.length;
  img.src = imagens[i].src;
  caption.textContent = imagens[i].frase;
}, 4000);
