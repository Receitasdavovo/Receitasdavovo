/* =========================================================
   BANCO LOCAL DE CÓDIGOS
========================================================= */

let codigosAdmin =
    JSON.parse(
        localStorage.getItem("codigosAdmin")
    ) || [];


/* =========================================================
   GERAR CÓDIGO
========================================================= */

function gerarCodigo() {

    const parte1 =
        Math.random()
            .toString(36)
            .substring(2, 6)
            .toUpperCase();

    const parte2 =
        Math.random()
            .toString(36)
            .substring(2, 6)
            .toUpperCase();

    const codigo =
        `PF-${parte1}-${parte2}`;


    codigosAdmin.push({

        codigo: codigo,

        usado: false,

        criadoEm:
            new Date().toLocaleString("pt-BR")

    });


    salvar();

    document.getElementById(
        "novoCodigo"
    ).innerHTML = `

        Novo código:

        <strong>
            ${codigo}
        </strong>

    `;

}


/* =========================================================
   SALVAR
========================================================= */

function salvar() {

    localStorage.setItem(
        "codigosAdmin",
        JSON.stringify(codigosAdmin)
    );

    renderizar();

}


/* =========================================================
   COPIAR
========================================================= */

function copiarCodigo(codigo) {

    navigator.clipboard.writeText(codigo)
        .then(function() {

            alert(
                "Código copiado!"
            );

        });

}


/* =========================================================
   MARCAR COMO USADO
========================================================= */

function marcarUsado(index) {

    codigosAdmin[index].usado = true;

    salvar();

}


/* =========================================================
   EXCLUIR
========================================================= */

function excluirCodigo(index) {

    const confirmar =
        confirm(
            "Excluir este código?"
        );

    if (!confirmar) {
        return;
    }

    codigosAdmin.splice(index, 1);

    salvar();

}


/* =========================================================
   LIMPAR TODOS
========================================================= */

function limparCodigos() {

    const confirmar =
        confirm(
            "ATENÇÃO!\n\nTodos os códigos serão apagados.\n\nDeseja continuar?"
        );

    if (!confirmar) {
        return;
    }

    codigosAdmin = [];

    salvar();

}


/* =========================================================
   RENDERIZAR
========================================================= */

function renderizar() {

    const lista =
        document.getElementById(
            "codesList"
        );

    const total =
        codigosAdmin.length;

    const usados =
        codigosAdmin.filter(
            item => item.usado
        ).length;

    const disponiveis =
        total - usados;


    document.getElementById(
        "totalCodigos"
    ).textContent = total;

    document.getElementById(
        "usados"
    ).textContent = usados;

    document.getElementById(
        "disponiveis"
    ).textContent = disponiveis;


    if (total === 0) {

        lista.innerHTML = `

            <div class="empty">

                Nenhum código criado ainda.

                <br><br>

                Clique em
                <strong>
                    "Gerar novo código"
                </strong>.

            </div>

        `;

        return;

    }


    lista.innerHTML = "";


    codigosAdmin
        .slice()
        .reverse()
        .forEach(function(item, reverseIndex) {

            const index =
                codigosAdmin.length -
                1 -
                reverseIndex;


            const status =
                item.usado
                    ? "USADO"
                    : "DISPONÍVEL";


            const classe =
                item.usado
                    ? "status-usado"
                    : "status-disponivel";


            const div =
                document.createElement("div");

            div.className =
                "code-item";


            div.innerHTML = `

                <div>

                    <div class="code-value">
                        ${item.codigo}
                    </div>

                    <div class="code-status ${classe}">
                        ${status}
                        • Criado em ${item.criadoEm}
                    </div>

                </div>

                <div class="code-actions">

                    <button
                        class="copy"
                        onclick="copiarCodigo('${item.codigo}')">

                        Copiar

                    </button>

                    ${
                        !item.usado
                        ?
                        `
                        <button
                            onclick="marcarUsado(${index})">

                            Marcar usado

                        </button>
                        `
                        :
                        ""
                    }

                    <button
                        class="delete"
                        onclick="excluirCodigo(${index})">

                        Excluir

                    </button>

                </div>

            `;


            lista.appendChild(div);

        });

}


/* =========================================================
   INICIAR
========================================================= */

renderizar();