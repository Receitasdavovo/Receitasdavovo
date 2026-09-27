const codigosValidos = [
    "PF-2026-001",
    "PF-2026-002",
    "PF-2026-003",
    "PF-2026-004",
    "PF-2026-005",
    "0001998",
    "0001999",
    "0002000",

    
];

const form = document.getElementById("accessForm");
const input = document.getElementById("codigo");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const codigo = input.value.trim().toUpperCase();

    if (codigo === "") {

        mensagem.textContent = "Digite o código de acesso.";
        mensagem.className = "mensagem erro";

        return;
    }

    if (codigosValidos.includes(codigo)) {

        localStorage.setItem("ebookAcesso", "autorizado");
        localStorage.setItem("ebookCodigo", codigo);

        mensagem.textContent =
            "Código válido! Liberando suas receitas...";

        mensagem.className = "mensagem sucesso";

        setTimeout(function() {

            window.location.href = "receitas.html";

        }, 800);

    } else {

        mensagem.textContent =
            "Código inválido. Verifique o código recebido.";

        mensagem.className = "mensagem erro";

    }

});