/* =========================================================
   CONFIGURAÇÕES
========================================================= */

// COLOQUE SEU WHATSAPP AQUI
const WHATSAPP = "5531998392353";

// SUA CHAVE PIX
const PIX = "31971705564";


/* =========================================================
   ELEMENTOS
========================================================= */

const pixModal = document.getElementById("pixModal");
const pixCode = document.getElementById("pixCode");
const whatsappPagamento =
    document.getElementById("whatsappPagamento");

const whatsappFloat =
    document.getElementById("whatsappFloat");


/* =========================================================
   ABRIR PIX
========================================================= */

function abrirPix() {

    pixModal.classList.add("active");

    atualizarWhatsApp();

}


/* =========================================================
   FECHAR PIX
========================================================= */

function fecharPix() {

    pixModal.classList.remove("active");

}


/* =========================================================
   COPIAR PIX
========================================================= */

function copiarPix() {

    const codigo = pixCode.value;

    navigator.clipboard.writeText(codigo)
        .then(() => {

            alert("Pix copiado com sucesso!");

        })
        .catch(() => {

            pixCode.select();

            document.execCommand("copy");

            alert("Pix copiado!");

        });

}


/* =========================================================
   WHATSAPP
========================================================= */

function atualizarWhatsApp() {

    const mensagem =
        "Olá! Quero adquirir o ebook 40 Receitas Fáceis e Práticas + Bônus. Estou enviando meu comprovante de pagamento.";

    const url =
        "https://wa.me/" +5531998392353
        WHATSAPP +
        "?text=" +
        encodeURIComponent(mensagem);

    whatsappPagamento.href = url;

    whatsappFloat.href = url;

}


/* =========================================================
   FECHAR MODAL CLICANDO FORA
========================================================= */

pixModal.addEventListener("click", function(event) {

    if (event.target === pixModal) {

        fecharPix();

    }

});


/* =========================================================
   ESC
========================================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        fecharPix();

    }

});


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    pixCode.value = PIX;

    atualizarWhatsApp();

});