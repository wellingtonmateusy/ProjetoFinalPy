$(document).ready(function(){
    var jogadoresTop = [
        {"foto": "./lib/midias/Jogadores/Fluxo/1TOP.webp", "nome": "Kiari", "posicao": "./lib/midias/Funções/Top.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "id": "submitTop0", "idreset": "resetTop0","preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/1TOP.webp", "nome": "Destroy", "posicao": "./lib/midias/Funções/Top.png", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/FURIA.png", "id": "submitTop1", "idreset": "resetTop1","preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/1TOP.webp", "nome": "Tay", "posicao": "./lib/midias/Funções/Top.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "id": "submitTop2", "idreset": "resetTop2","preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/1TOP.webp", "nome": "Lonely", "posicao": "./lib/midias/Funções/Top.png", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/KaBum.png", "id": "submitTop3", "idreset": "resetTop3","preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/1TOP.webp", "nome": "Makes", "posicao": "./lib/midias/Funções/Top.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "id": "submitTop4", "idreset": "resetTop4","preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/1TOP.webp", "nome": "SuperCleber", "posicao": "./lib/midias/Funções/Top.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Los.webp", "id": "submitTop5", "idreset": "resetTop5","preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/1TOP.webp", "nome": "Robo", "posicao": "./lib/midias/Funções/Top.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/LOUD.png", "id": "submitTop6", "idreset": "resetTop6","preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/1TOP.webp", "nome": "Wizer", "posicao": "./lib/midias/Funções/Top.png", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/PaiN.png", "id": "submitTop7", "idreset": "resetTop7","preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/1TOP.webp", "nome": "fNb", "posicao": "./lib/midias/Funções/Top.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "id": "submitTop8", "idreset": "resetTop8","preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/1TOP.webp", "nome": "Guigo", "posicao": "./lib/midias/Funções/Top.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Vivo.webp", "id": "submitTop9", "idreset": "resetTop9","preco": 150}
        // Jogadores Top Laners
    ];

    var jogadoresJg = [
        {"foto": "./lib/midias/Jogadores/Fluxo/2JG.webp", "nome": "Sting", "posicao": "./lib/midias/Funções/Jungler.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "id": "submitJg0", "idreset": "resetJg0", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/2JG.webp", "nome": "Mir", "posicao": "./lib/midias/Funções/Jungler.png", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/FURIA.png", "id": "submitJg1", "idreset": "resetJg1", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/2JG.webp", "nome": "Yampi", "posicao": "./lib/midias/Funções/Jungler.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "id": "submitJg2", "idreset": "resetJg2", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/2JG.webp", "nome": "Malrang", "posicao": "./lib/midias/Funções/Jungler.png", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/KaBum.png", "id": "submitJg3", "idreset": "resetJg3", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/2JG.webp", "nome": "Drakehero", "posicao": "./lib/midias/Funções/Jungler.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "id": "submitJg4", "idreset": "resetJg4", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/2JG.webp", "nome": "Seize", "posicao": "./lib/midias/Funções/Jungler.png", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/Los.webp", "id": "submitJg5", "idreset": "resetJg5", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/2JG.webp", "nome": "Croc", "posicao": "./lib/midias/Funções/Jungler.png", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/LOUD.png", "id": "submitJg6", "idreset": "resetJg6", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/2JG.webp", "nome": "Cariok", "posicao": "./lib/midias/Funções/Jungler.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/PaiN.png", "id": "submitJg7", "idreset": "resetJg7", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/2JG.webp", "nome": "Aegis", "posicao": "./lib/midias/Funções/Jungler.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "id": "submitJg8", "idreset": "resetJg8", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/2JG.webp", "nome": "Disamis", "posicao": "./lib/midias/Funções/Jungler.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Vivo.webp", "id": "submitJg9", "idreset": "resetJg9", "preco": 150}
        // Jogadores Caçadores
    ];

    var jogadoresMid = [
        {"foto": "./lib/midias/Jogadores/Fluxo/3MID.webp", "nome": "Fuuu", "posicao": "./lib/midias/Funções/Mid.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "id": "submitMid0", "idreset": "resetMid0", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/3MID.webp", "nome": "Tutsz", "posicao": "./lib/midias/Funções/Mid.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/FURIA.png", "id": "submitMid1", "idreset": "resetMid1", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/3MID.webp", "nome": "Aithusa", "posicao": "./lib/midias/Funções/Mid.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "id": "submitMid2", "idreset": "resetMid2", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/3MID.webp", "nome": "Hauz", "posicao": "./lib/midias/Funções/Mid.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/KaBum.png", "id": "submitMid3", "idreset": "resetMid3", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/3MID.webp", "nome": "Piloto", "posicao": "./lib/midias/Funções/Mid.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "id": "submitMid4", "idreset": "resetMid4", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/3MID.webp", "nome": "Envy", "posicao": "./lib/midias/Funções/Mid.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Los.webp", "id": "submitMid5", "idreset": "resetMid5", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/3MID.webp", "nome": "tinowns", "posicao": "./lib/midias/Funções/Mid.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/LOUD.png", "id": "submitMid6", "idreset": "resetMid6", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/3MID.webp", "nome": "dyNquedo", "posicao": "./lib/midias/Funções/Mid.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/PaiN.png", "id": "submitMid7", "idreset": "resetMid7", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/3MID.webp", "nome": "Grevthar", "posicao": "./lib/midias/Funções/Mid.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "id": "submitMid8", "idreset": "resetMid8", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/3MID.webp", "nome": "toucouille", "posicao": "./lib/midias/Funções/Mid.png", "pais": "./lib/midias/Bandeiras/França.webp", "time": "./lib/midias/LogosOrgs/Vivo.webp", "id": "submitMid9", "idreset": "resetMid9", "preco": 150}
        // Jogadores Mid Laners
    ];

    var jogadoresAdc = [
        {"foto": "./lib/midias/Jogadores/Fluxo/4ADC.webp", "nome": "Kojima", "posicao": "./lib/midias/Funções/BotAdc.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "id": "submitAdc0", "idreset": "resetAdc0", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/4ADC.webp", "nome": "Ayu", "posicao": "./lib/midias/Funções/BotAdc.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/FURIA.png", "id": "submitAdc1", "idreset": "resetAdc1", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/4ADC.webp", "nome": "NinjaKiwi", "posicao": "./lib/midias/Funções/BotAdc.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "id": "submitAdc2", "idreset": "resetAdc2", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/4ADC.webp", "nome": "Netuno", "posicao": "./lib/midias/Funções/BotAdc.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/KaBum.png", "id": "submitAdc3", "idreset": "resetAdc3", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/4ADC.webp", "nome": "micaO", "posicao": "./lib/midias/Funções/BotAdc.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "id": "submitAdc4", "idreset": "resetAdc4", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/4ADC.webp", "nome": "Celo", "posicao": "./lib/midias/Funções/BotAdc.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Los.webp", "id": "submitAdc5", "idreset": "resetAdc5", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/4ADC.webp", "nome": "Route", "posicao": "./lib/midias/Funções/BotAdc.png", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/LOUD.png", "id": "submitAdc6", "idreset": "resetAdc6", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/4ADC.webp", "nome": "TitaN", "posicao": "./lib/midias/Funções/BotAdc.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/PaiN.png", "id": "submitAdc7", "idreset": "resetAdc7", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/4ADC.webp", "nome": "Brance", "posicao": "./lib/midias/Funções/BotAdc.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "id": "submitAdc8", "idreset": "resetAdc8", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/4ADC.webp", "nome": "SMILEY", "posicao": "./lib/midias/Funções/BotAdc.png", "pais": "./lib/midias/Bandeiras/Suecia.PNG", "time": "./lib/midias/LogosOrgs/Vivo.webp", "id": "submitAdc9", "idreset": "resetAdc9", "preco": 150}
        // Jogadores Atiradores
    ];

    var jogadoresSup = [
        {"foto": "./lib/midias/Jogadores/Fluxo/5SUP.webp", "nome": "Scamber", "posicao": "./lib/midias/Funções/BotSuporte.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "id": "submitSup0", "idreset": "resetSup0", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/5SUP.webp", "nome": "Zay", "posicao": "./lib/midias/Funções/BotSuporte.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/FURIA.png", "id": "submitSup1", "idreset": "resetSup1", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/5SUP.webp", "nome": "Damage", "posicao": "./lib/midias/Funções/BotSuporte.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "id": "submitSup2", "idreset": "resetSup2", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/5SUP.webp", "nome": "Ceos", "posicao": "./lib/midias/Funções/BotSuporte.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/KaBum.png", "id": "submitSup3", "idreset": "resetSup3", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/5SUP.webp", "nome": "Cavalo", "posicao": "./lib/midias/Funções/BotSuporte.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "id": "submitSup4", "idreset": "resetSup4", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/5SUP.webp", "nome": "kabbie", "posicao": "./lib/midias/Funções/BotSuporte.png", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/Los.webp", "id": "submitSup5", "idreset": "resetSup5", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/5SUP.webp", "nome": "RedBert", "posicao": "./lib/midias/Funções/BotSuporte.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/LOUD.png", "id": "submitSup6", "idreset": "resetSup6", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/5SUP.webp", "nome": "Kuri", "posicao": "./lib/midias/Funções/BotSuporte.png", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/PaiN.png", "id": "submitSup7", "idreset": "resetSup7", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/5SUP.webp", "nome": "Jojo", "posicao": "./lib/midias/Funções/BotSuporte.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "id": "submitSup8", "idreset": "resetSup8", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/5SUP.webp", "nome": "ProDelta", "posicao": "./lib/midias/Funções/BotSuporte.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Vivo.webp", "id": "submitSup9", "idreset": "resetSup9", "preco": 150}
        // Jogadores Suportes
    ];

    var Coachs = [
        {"foto": "./lib/midias/Jogadores/Fluxo/6COACH.png", "nome": "ONMETA", "posicao": "./lib/midias/Funções/Coach.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "id": "submitCoach0", "idreset": "resetCoach0", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/6COACH.png", "nome": "Maestro", "posicao": "./lib/midias/Funções/Coach.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/FURIA.png", "id": "submitCoach1", "idreset": "resetCoach1", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/6COACH.png", "nome": "Aoshi", "posicao": "./lib/midias/Funções/Coach.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "id": "submitCoach2", "idreset": "resetCoach2", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/6COACH.png", "nome": "ti0ben", "posicao": "./lib/midias/Funções/Coach.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/KaBum.png", "id": "submitCoach3", "idreset": "resetCoach3", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/6COACH.png", "nome": "Turtle", "posicao": "./lib/midias/Funções/Coach.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "id": "submitCoach4", "idreset": "resetCoach4", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/6COACH.png", "nome": "Dionrray", "posicao": "./lib/midias/Funções/Coach.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Los.webp", "id": "submitCoach5", "idreset": "resetCoach5", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/6COACH.webp", "nome": "Stardust", "posicao": "./lib/midias/Funções/Coach.png", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/LOUD.png", "id": "submitCoach6", "idreset": "resetCoach6", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/6COACH.png", "nome": "Xero", "posicao": "./lib/midias/Funções/Coach.png", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/PaiN.png", "id": "submitCoach7", "idreset": "resetCoach7", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/6COACH.png", "nome": "Kalec", "posicao": "./lib/midias/Funções/Coach.png", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "id": "submitCoach8", "idreset": "resetCoach8", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/6COACH.png", "nome": "SeeEl", "posicao": "./lib/midias/Funções/Coach.png", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/Vivo.webp", "id": "submitCoach9", "idreset": "resetCoach9", "preco": 150}
        // Coachs
    ];

    var pos = {jogadoresTop, jogadoresJg, jogadoresMid, jogadoresAdc, jogadoresSup, Coachs};

    function construirTabela(elementos = pos) {
        let tabelaHTML = '';
    
        tabelaHTML += `
            <table class="table table-bordered table-hover table-dark">
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>País</th>
                        <th>Time</th>
                        <th>Preço</th>
                        <th>Comprar</th>
                    </tr>
                </thead>
                <tbody>
        `;
    
        for (let i = 0; i < elementos.length; i++) {
            tabelaHTML += `
                <tr>
                    <td id="jogador"><img src="${elementos[i].foto}" alt="${elementos[i].nome}" class="w-75"></td>
                    <td class="text-center">${elementos[i].nome}</td>
                    <td><img src="${elementos[i].pais}" alt="" class="rounded w-100"></td>
                    <td class="text-center"><img src="${elementos[i].time}" alt="" class="w-75"></td>
                    <td class="text-center">${elementos[i].preco}</td>
                    <td><button type="submit" class="btn btn-success col-12 bg-dark" id="${elementos[i].id}"><i class="bi bi-plus-lg"></i></button></td>
                </tr>
            `;
        }
    
        tabelaHTML += `
                </tbody>
            </table>
        `;
    
        return tabelaHTML;
    }

    const posicoes = ['Top', 'Jg', 'Mid', 'Adc', 'Sup', 'Coach'];
// Criar um objeto que mapeia as posições para os jogadores
    const jogadoresPorPosicao = {
        'Top': jogadoresTop,
        'Jg': jogadoresJg,
        'Mid': jogadoresMid,
        'Adc': jogadoresAdc,
        'Sup': jogadoresSup,
        'Coach': Coachs,
    };

    for (const posicao of posicoes) {
        const tabelaId = `tabela${posicao}`;
        const jogadoresDaPosicao = jogadoresPorPosicao[posicao];

        const tabelaElement = document.getElementById(tabelaId);

        if (tabelaElement && jogadoresDaPosicao) {
            tabelaElement.innerHTML = construirTabela(jogadoresDaPosicao);
        }
    }

//Função do button sumit do modal
    function adicionarEventoSubmit() {
        for (let i = 0; i < posicoes.length; i++) {
            const submitId = `#submitTop${i}`;
            const modalId = `#modal${posicoes[i]}`;
            const jogador = jogadoresTop[i];

            $(submitId).on('click', function () {
                const modal = $(modalId);

                modal.find(".pais").attr("src", jogador.pais);
                modal.find(".time").attr("src", jogador.time);
                modal.find("#imgJogador").attr("src", jogador.foto);
                modal.find("#funcao").attr("src", jogador.posicao);
                modal.find("h6").text(jogador.nome);
                modal.find(".btn-success").remove();
                modal.find(".btn-danger").css("display", "block");
            });
        }
    }


    //Criador do article com imgem do jogador quando é apertado o button sumit da tabela do modal
    // function construirArtigo(elementos = pos) {
    //     return `
    //         <article class="card-body" id="article">
    //             <img src="${elementos.pais || ''}" alt="" class="col-3 mb-2 rounded pais">
    //             <img src="${elementos.time || ''}" alt="" class="col-3 mb-2 time">
    //             <img src="${elementos.foto || ''}" alt="${elementos.nome || ''}" class="col-12" id="imgJogador">
    //             <div class="d-flex justify-content-center mb-2">
    //                 <img src="${elementos.posicao || ''}" alt="" class="col-5 mt-2" id="funcao">
    //                 <h6 class="Fnome">${elementos.nome || ''}</h6>
    //             </div>
    //             <button type="reset" class="btn btn-danger col-12 bg-dark" id="resetTop0"><i class="bi bi-dash-lg"></i></button>
    //         </article>
    //     `;
    // }

    

    document.querySelector("#limpar").addEventListener('click', function () {
        location.reload();
    });

})