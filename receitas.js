/* =========================================================
   PROTEÇÃO DE ACESSO
========================================================= */

const acesso =
    localStorage.getItem("ebookAcesso");

if (acesso !== "autorizado") {

    window.location.href =
        "acesso.html";

}


/* =========================================================
   40 RECEITAS
========================================================= */

const receitas = [

    {
        numero: 1,
        nome: "Panqueca de Banana e Aveia",
        tempo: "10 minutos",
        ingredientes: [
            "1 banana madura",
            "1 ovo",
            "3 colheres de aveia",
            "Canela a gosto"
        ],
        preparo:
            "Amasse a banana, misture o ovo e a aveia. Acrescente canela. Coloque pequenas porções em uma frigideira antiaderente e doure dos dois lados."
    },

    {
        numero: 2,
        nome: "Omelete de Legumes",
        tempo: "15 minutos",
        ingredientes: [
            "2 ovos",
            "Cenoura ralada",
            "Tomate picado",
            "Cebola picada",
            "Sal a gosto"
        ],
        preparo:
            "Bata os ovos, misture os legumes e tempere. Coloque em uma frigideira e cozinhe em fogo baixo até firmar."
    },

    {
        numero: 3,
        nome: "Salada Colorida com Frango",
        tempo: "20 minutos",
        ingredientes: [
            "Frango cozido desfiado",
            "Alface",
            "Tomate",
            "Cenoura",
            "Milho",
            "Azeite"
        ],
        preparo:
            "Higienize os vegetais, corte em pedaços e misture com o frango. Tempere com azeite e temperos de sua preferência."
    },

    {
        numero: 4,
        nome: "Crepioca Simples",
        tempo: "10 minutos",
        ingredientes: [
            "1 ovo",
            "2 colheres de tapioca",
            "Sal",
            "Queijo para rechear"
        ],
        preparo:
            "Misture o ovo com a tapioca. Despeje em frigideira antiaderente e cozinhe dos dois lados. Recheie com queijo."
    },

    {
        numero: 5,
        nome: "Arroz com Legumes",
        tempo: "25 minutos",
        ingredientes: [
            "2 xícaras de arroz cozido",
            "Cenoura",
            "Ervilha",
            "Milho",
            "Cebola"
        ],
        preparo:
            "Refogue a cebola, acrescente os legumes e depois o arroz. Misture bem e cozinhe por alguns minutos."
    },

    {
        numero: 6,
        nome: "Frango Grelhado",
        tempo: "20 minutos",
        ingredientes: [
            "Filé de frango",
            "Alho",
            "Limão",
            "Sal",
            "Ervas"
        ],
        preparo:
            "Tempere o frango com alho, limão, sal e ervas. Grelhe em frigideira quente até ficar completamente cozido."
    },

    {
        numero: 7,
        nome: "Salada de Atum",
        tempo: "10 minutos",
        ingredientes: [
            "1 lata de atum",
            "Alface",
            "Tomate",
            "Cebola",
            "Cenoura"
        ],
        preparo:
            "Misture todos os ingredientes em uma tigela e tempere com limão, azeite e ervas."
    },

    {
        numero: 8,
        nome: "Ovos Mexidos com Tomate",
        tempo: "8 minutos",
        ingredientes: [
            "2 ovos",
            "1 tomate",
            "Cebola",
            "Sal",
            "Orégano"
        ],
        preparo:
            "Refogue o tomate e a cebola. Acrescente os ovos batidos e mexa até atingir a consistência desejada."
    },

    {
        numero: 9,
        nome: "Iogurte com Frutas",
        tempo: "5 minutos",
        ingredientes: [
            "1 pote de iogurte natural",
            "Banana",
            "Morangos",
            "Aveia"
        ],
        preparo:
            "Coloque o iogurte em uma tigela, acrescente as frutas picadas e finalize com aveia."
    },

    {
        numero: 10,
        nome: "Sanduíche Natural de Frango",
        tempo: "15 minutos",
        ingredientes: [
            "2 fatias de pão",
            "Frango desfiado",
            "Cenoura ralada",
            "Alface",
            "Tomate"
        ],
        preparo:
            "Misture o frango com a cenoura. Monte o sanduíche com alface e tomate."
    },

    {
        numero: 11,
        nome: "Sopa de Legumes",
        tempo: "35 minutos",
        ingredientes: [
            "Batata",
            "Cenoura",
            "Abobrinha",
            "Chuchu",
            "Cebola",
            "Água"
        ],
        preparo:
            "Corte os legumes, coloque em uma panela com água e cozinhe até ficarem macios. Tempere a gosto."
    },

    {
        numero: 12,
        nome: "Purê de Batata",
        tempo: "25 minutos",
        ingredientes: [
            "Batatas",
            "Leite",
            "Manteiga",
            "Sal"
        ],
        preparo:
            "Cozinhe as batatas até ficarem macias. Amasse e misture com leite, manteiga e sal."
    },

    {
        numero: 13,
        nome: "Macarrão com Legumes",
        tempo: "25 minutos",
        ingredientes: [
            "Macarrão",
            "Cenoura",
            "Abobrinha",
            "Tomate",
            "Azeite"
        ],
        preparo:
            "Cozinhe o macarrão. Refogue os legumes e misture ao macarrão já cozido."
    },

    {
        numero: 14,
        nome: "Tapioca de Frango",
        tempo: "15 minutos",
        ingredientes: [
            "Goma de tapioca",
            "Frango desfiado",
            "Tomate",
            "Orégano"
        ],
        preparo:
            "Prepare a tapioca em uma frigideira. Acrescente o frango temperado e finalize com tomate e orégano."
    },

    {
        numero: 15,
        nome: "Vitamina de Banana",
        tempo: "5 minutos",
        ingredientes: [
            "1 banana",
            "1 copo de leite",
            "Aveia",
            "Canela"
        ],
        preparo:
            "Bata todos os ingredientes no liquidificador até obter uma bebida cremosa."
    },

    {
        numero: 16,
        nome: "Abobrinha Refogada",
        tempo: "15 minutos",
        ingredientes: [
            "2 abobrinhas",
            "Alho",
            "Cebola",
            "Azeite",
            "Sal"
        ],
        preparo:
            "Corte as abobrinhas. Refogue alho e cebola e acrescente a abobrinha. Cozinhe até ficar macia."
    },

    {
        numero: 17,
        nome: "Frango com Batata",
        tempo: "35 minutos",
        ingredientes: [
            "Frango",
            "Batatas",
            "Alho",
            "Cebola",
            "Temperos"
        ],
        preparo:
            "Tempere o frango. Doure em uma panela, acrescente as batatas e cozinhe até tudo ficar bem cozido."
    },

    {
        numero: 18,
        nome: "Salada de Grão-de-Bico",
        tempo: "15 minutos",
        ingredientes: [
            "Grão-de-bico cozido",
            "Tomate",
            "Cebola",
            "Salsinha",
            "Limão"
        ],
        preparo:
            "Misture todos os ingredientes e tempere com limão, azeite e ervas."
    },

    {
        numero: 19,
        nome: "Torta de Legumes",
        tempo: "40 minutos",
        ingredientes: [
            "2 ovos",
            "1 xícara de farinha",
            "Leite",
            "Cenoura",
            "Abobrinha",
            "Tomate"
        ],
        preparo:
            "Prepare uma massa misturando ovos, leite e farinha. Acrescente os legumes e leve ao forno até dourar."
    },

    {
        numero: 20,
        nome: "Bruschetta de Tomate",
        tempo: "15 minutos",
        ingredientes: [
            "Fatias de pão",
            "Tomate",
            "Manjericão",
            "Azeite",
            "Orégano"
        ],
        preparo:
            "Cubra as fatias de pão com tomate temperado, azeite e manjericão. Leve ao forno rapidamente."
    },

    {
        numero: 21,
        nome: "Cuscuz com Ovo",
        tempo: "15 minutos",
        ingredientes: [
            "Flocão de milho",
            "Água",
            "Sal",
            "1 ovo"
        ],
        preparo:
            "Prepare o cuscuz conforme as instruções da embalagem. Faça o ovo e sirva junto."
    },

    {
        numero: 22,
        nome: "Panqueca de Aveia",
        tempo: "15 minutos",
        ingredientes: [
            "Aveia",
            "Ovo",
            "Leite",
            "Canela"
        ],
        preparo:
            "Bata todos os ingredientes. Coloque pequenas porções em frigideira antiaderente e doure dos dois lados."
    },

    {
        numero: 23,
        nome: "Frango Desfiado Temperado",
        tempo: "30 minutos",
        ingredientes: [
            "Peito de frango",
            "Cebola",
            "Alho",
            "Tomate",
            "Cheiro-verde"
        ],
        preparo:
            "Cozinhe o frango, desfie e refogue com os temperos. Finalize com cheiro-verde."
    },

    {
        numero: 24,
        nome: "Salada de Pepino",
        tempo: "8 minutos",
        ingredientes: [
            "Pepino",
            "Tomate",
            "Cebola",
            "Limão",
            "Azeite"
        ],
        preparo:
            "Corte os ingredientes, misture e tempere com limão e azeite."
    },

    {
        numero: 25,
        nome: "Omelete de Queijo",
        tempo: "10 minutos",
        ingredientes: [
            "2 ovos",
            "Queijo",
            "Orégano",
            "Sal"
        ],
        preparo:
            "Bata os ovos, coloque na frigideira e acrescente o queijo. Dobre e cozinhe até firmar."
    },

    {
        numero: 26,
        nome: "Batata Assada com Ervas",
        tempo: "40 minutos",
        ingredientes: [
            "Batatas",
            "Azeite",
            "Orégano",
            "Alecrim",
            "Sal"
        ],
        preparo:
            "Corte as batatas, tempere com azeite e ervas. Leve ao forno até dourarem."
    },

    {
        numero: 27,
        nome: "Arroz de Frango",
        tempo: "30 minutos",
        ingredientes: [
            "Arroz cozido",
            "Frango desfiado",
            "Cenoura",
            "Milho",
            "Ervilha"
        ],
        preparo:
            "Misture o arroz com o frango e os legumes. Aqueça tudo em uma panela e ajuste os temperos."
    },

    {
        numero: 28,
        nome: "Salada de Ovo",
        tempo: "12 minutos",
        ingredientes: [
            "2 ovos cozidos",
            "Alface",
            "Tomate",
            "Cenoura",
            "Azeite"
        ],
        preparo:
            "Cozinhe os ovos, corte em pedaços e misture com os vegetais."
    },

    {
        numero: 29,
        nome: "Creme de Abóbora",
        tempo: "30 minutos",
        ingredientes: [
            "Abóbora",
            "Cebola",
            "Alho",
            "Água",
            "Sal"
        ],
        preparo:
            "Cozinhe a abóbora com os temperos. Bata no liquidificador e volte à panela para aquecer."
    },

    {
        numero: 30,
        nome: "Torrada com Abacate",
        tempo: "8 minutos",
        ingredientes: [
            "Pão integral",
            "Abacate",
            "Limão",
            "Sal"
        ],
        preparo:
            "Amasse o abacate com limão e sal. Espalhe sobre o pão torrado."
    },

    {
        numero: 31,
        nome: "Salada de Cenoura",
        tempo: "10 minutos",
        ingredientes: [
            "Cenoura",
            "Limão",
            "Azeite",
            "Salsinha"
        ],
        preparo:
            "Rale a cenoura e misture com limão, azeite e salsinha."
    },

    {
        numero: 32,
        nome: "Ovos Cozidos Temperados",
        tempo: "10 minutos",
        ingredientes: [
            "2 ovos",
            "Azeite",
            "Orégano",
            "Sal"
        ],
        preparo:
            "Cozinhe os ovos, corte ao meio e tempere com azeite, orégano e sal."
    },

    {
        numero: 33,
        nome: "Frango com Legumes",
        tempo: "30 minutos",
        ingredientes: [
            "Frango",
            "Cenoura",
            "Brócolis",
            "Abobrinha",
            "Cebola"
        ],
        preparo:
            "Corte o frango e os legumes. Refogue o frango e depois acrescente os legumes até ficarem cozidos."
    },

    {
        numero: 34,
        nome: "Salada de Repolho",
        tempo: "10 minutos",
        ingredientes: [
            "Repolho",
            "Cenoura",
            "Tomate",
            "Limão",
            "Azeite"
        ],
        preparo:
            "Fatie o repolho, rale a cenoura e misture com os demais ingredientes."
    },

    {
        numero: 35,
        nome: "Bolo de Banana e Aveia",
        tempo: "40 minutos",
        ingredientes: [
            "3 bananas",
            "2 ovos",
            "Aveia",
            "Canela",
            "Fermento"
        ],
        preparo:
            "Amasse as bananas, misture os ovos e a aveia. Acrescente canela e fermento. Leve ao forno até assar."
    },

    {
        numero: 36,
        nome: "Mingau de Aveia",
        tempo: "10 minutos",
        ingredientes: [
            "Aveia",
            "Leite",
            "Canela",
            "Banana"
        ],
        preparo:
            "Coloque aveia e leite em uma panela. Cozinhe mexendo até engrossar. Finalize com banana e canela."
    },

    {
        numero: 37,
        nome: "Wrap de Frango",
        tempo: "15 minutos",
        ingredientes: [
            "Massa para wrap",
            "Frango desfiado",
            "Alface",
            "Tomate",
            "Cenoura"
        ],
        preparo:
            "Aqueça a massa, coloque o frango e os vegetais. Enrole e sirva."
    },

    {
        numero: 38,
        nome: "Legumes Assados",
        tempo: "35 minutos",
        ingredientes: [
            "Cenoura",
            "Abobrinha",
            "Batata",
            "Cebola",
            "Azeite"
        ],
        preparo:
            "Corte os legumes, tempere com azeite e ervas. Leve ao forno até dourar."
    },

    {
        numero: 39,
        nome: "Iogurte com Banana e Canela",
        tempo: "5 minutos",
        ingredientes: [
            "Iogurte natural",
            "Banana",
            "Canela",
            "Aveia"
        ],
        preparo:
            "Coloque o iogurte em uma tigela. Acrescente banana, aveia e canela."
    },

    {
        numero: 40,
        nome: "Salada Completa",
        tempo: "15 minutos",
        ingredientes: [
            "Alface",
            "Tomate",
            "Cenoura",
            "Milho",
            "Ovo cozido",
            "Frango desfiado"
        ],
        preparo:
            "Higienize e corte os vegetais. Misture com o ovo e o frango. Tempere a gosto."
    }

];


/* =========================================================
   RENDERIZAR RECEITAS
========================================================= */

const recipesList =
    document.getElementById("recipesList");


function renderizarReceitas() {

    recipesList.innerHTML = "";

    receitas.forEach(function(receita) {

        const card =
            document.createElement("article");

        card.className = "recipe";

        const ingredientes =
            receita.ingredientes
                .map(function(item) {

                    return `<li>${item}</li>`;

                })
                .join("");

        card.innerHTML = `

            <span class="recipe-number">
                RECEITA ${String(receita.numero).padStart(2, "0")}
            </span>

            <h2>
                ${receita.nome}
            </h2>

            <div class="recipe-time">
                ⏱️ ${receita.tempo}
            </div>

            <h3>
                Ingredientes
            </h3>

            <ul>
                ${ingredientes}
            </ul>

            <h3>
                Modo de preparo
            </h3>

            <p class="preparo">
                ${receita.preparo}
            </p>

        `;

        recipesList.appendChild(card);

    });

}


/* =========================================================
   SAIR
========================================================= */

function sair() {

    const confirmar =
        confirm(
            "Deseja sair do acesso às receitas?"
        );

    if (!confirmar) {
        return;
    }

    localStorage.removeItem(
        "ebookAcesso"
    );

    localStorage.removeItem(
        "ebookCodigo"
    );

    window.location.href =
        "index.html";

}


/* =========================================================
   INICIAR
========================================================= */

renderizarReceitas();