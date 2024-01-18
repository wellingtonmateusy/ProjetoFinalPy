$(document).ready(function(){
    var jogadoresTop = [
        {"foto": "./lib/midias/Jogadores/Fluxo/1TOP.webp", "nome": "Kiari", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/1TOP.webp", "nome": "Destroy", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/FURIA.png", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/1TOP.webp", "nome": "Tay", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/1TOP.webp", "nome": "Lonely", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/KaBum.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/1TOP.webp", "nome": "Makes", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/1TOP.webp", "nome": "SuperCleber", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Los.webp", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/1TOP.webp", "nome": "Robo", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/LOUD.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/1TOP.webp", "nome": "Wizer", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/PaiN.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/1TOP.webp", "nome": "fNb", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/1TOP.webp", "nome": "Guigo", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Vivo.webp", "preco": 150}
        // Jogadores Top Laners
    ];

    var jogadoresJg = [
        {"foto": "./lib/midias/Jogadores/Fluxo/2JG.webp", "nome": "Sting", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/2JG.webp", "nome": "Mir", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/FURIA.png", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/2JG.webp", "nome": "Yampi", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/2JG.webp", "nome": "Malrang", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/KaBum.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/2JG.webp", "nome": "Drakehero", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/2JG.webp", "nome": "Seize", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/Los.webp", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/2JG.webp", "nome": "Croc", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/LOUD.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/2JG.webp", "nome": "Cariok", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/PaiN.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/2JG.webp", "nome": "Aegis", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/2JG.webp", "nome": "Disamis", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Vivo.webp", "preco": 150}
        // Jogadores Caçadores
    ];

    var jogadoresMid = [
        {"foto": "./lib/midias/Jogadores/Fluxo/3MID.webp", "nome": "Fuuu", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/3MID.webp", "nome": "Tutsz", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/FURIA.png", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/3MID.webp", "nome": "Aithusa", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/3MID.webp", "nome": "Hauz", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/KaBum.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/3MID.webp", "nome": "Piloto", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/3MID.webp", "nome": "Envy", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Los.webp", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/3MID.webp", "nome": "tinowns", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/LOUD.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/3MID.webp", "nome": "dyNquedo", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/PaiN.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/3MID.webp", "nome": "Grevthar", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/3MID.webp", "nome": "toucouille", "pais": "./lib/midias/Bandeiras/França.webp", "time": "./lib/midias/LogosOrgs/Vivo.webp", "preco": 150}
        // Jogadores Mid Laners
    ];

    var jogadoresAdc = [
        {"foto": "./lib/midias/Jogadores/Fluxo/4ADC.webp", "nome": "Kojima", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/4ADC.webp", "nome": "Ayu", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/FURIA.png", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/4ADC.webp", "nome": "NinjaKiwi", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/4ADC.webp", "nome": "Netuno", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/KaBum.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/4ADC.webp", "nome": "micaO", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/4ADC.webp", "nome": "Celo", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Los.webp", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/4ADC.webp", "nome": "Route", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/LOUD.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/4ADC.webp", "nome": "TitaN", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/PaiN.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/4ADC.webp", "nome": "Brance", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/4ADC.webp", "nome": "SMILEY", "pais": "./lib/midias/Bandeiras/Suecia.PNG", "time": "./lib/midias/LogosOrgs/Vivo.webp", "preco": 150}
        // Jogadores Atiradores
    ];

    var jogadoresSup = [
        {"foto": "./lib/midias/Jogadores/Fluxo/5SUP.webp", "nome": "Scamber", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/5SUP.webp", "nome": "Zay", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/FURIA.png", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/5SUP.webp", "nome": "Damage", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/5SUP.webp", "nome": "Ceos", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/KaBum.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/5SUP.webp", "nome": "Cavalo", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/5SUP.webp", "nome": "kabbie", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/Los.webp", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/5SUP.webp", "nome": "RedBert", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/LOUD.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/5SUP.webp", "nome": "Kuri", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/PaiN.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/5SUP.webp", "nome": "Jojo", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/5SUP.webp", "nome": "ProDelta", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Vivo.webp", "preco": 150}
        // Jogadores Suportes
    ];

    var Coachs = [
        {"foto": "./lib/midias/Jogadores/Fluxo/6COACH.png", "nome": "ONMETA", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/6COACH.png", "nome": "Maestro", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/FURIA.png", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/6COACH.png", "nome": "Aoshi", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/7COACH.png", "nome": "Strazzi", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/6COACH.png", "nome": "ti0ben", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/KaBum.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Kabum/7COACH.png", "nome": "Von", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/KaBum.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/6COACH.png", "nome": "Turtle", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/6COACH.png", "nome": "Dionrray", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Los.webp", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/6COACH.webp", "nome": "Stardust", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/LOUD.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/6COACH.png", "nome": "Xero", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/PaiN.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/6COACH.png", "nome": "Kalec", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/6COACH.png", "nome": "SeeEl", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/Vivo.webp", "preco": 150}
        // Coachs
    ];

    // Função para construir a tabela de Top em HTML
    function construirTabelaTop(jogadoresTop) {
        var tabelaHTML = '<table class="table table-bordered table-hover table-dark">\n';

        // Cabeçalho da tabela
        tabelaHTML += '<thead>';
        tabelaHTML += '<tr>';
        tabelaHTML += '<th>Foto</th>';
        tabelaHTML += '<th>Nome</th>';
        tabelaHTML += '<th>País</th>';
        tabelaHTML += '<th>Time</th>';
        tabelaHTML += '<th>Preço</th>';
        tabelaHTML += '<th>Comprar</th>'
        tabelaHTML += '</tr>';
        tabelaHTML += '</thead>\n';

        // Adiciona linhas para cada jogador
        tabelaHTML += '<tbody>\n';
        for (var i = 0; i < jogadoresTop.length; i++) {
            tabelaHTML += '<tr>';
            tabelaHTML += '<td id="jogador"><img src="' + jogadoresTop[i].foto + '" alt="' + jogadoresTop[i].nome + '" class="w-75"></td>';
            tabelaHTML += '<td class="text-center">' + jogadoresTop[i].nome + '</td>';
            tabelaHTML += '<td><img src="' + jogadoresTop[i].pais + '" alt="" class="rounded w-100"></td>';
            tabelaHTML += '<td class="text-center"><img src="' + jogadoresTop[i].time + '" alt="" class="w-75"></td>';
            tabelaHTML += '<td class="text-center">' + jogadoresTop[i].preco + '</td>';
            tabelaHTML += '<td> <button type="submit" class="btn btn-success col-12 bg-dark"><i class="bi bi-plus-lg"></button></td>';
            tabelaHTML += '</tr>\n';
        }

        tabelaHTML += '</tbody>\n';

        tabelaHTML += '</table>';
        return tabelaHTML;
    }

    // Função para construir a tabela de Jungler em HTML
    function construirTabelaJg(jogadoresJg) {
        var tabelaHTML = '<table class="table table-bordered table-hover table-dark">\n';

        // Cabeçalho da tabela
        tabelaHTML += '<thead>';
        tabelaHTML += '<tr>';
        tabelaHTML += '<th>Foto</th>';
        tabelaHTML += '<th>Nome</th>';
        tabelaHTML += '<th>País</th>';
        tabelaHTML += '<th>Time</th>';
        tabelaHTML += '<th>Preço</th>';
        tabelaHTML += '<th>Comprar</th>'
        tabelaHTML += '</tr>';
        tabelaHTML += '</thead>\n';

        // Adiciona linhas para cada jogador
        tabelaHTML += '<tbody>\n';
        for (var i = 0; i < jogadoresJg.length; i++) {
            tabelaHTML += '<tr>';
            tabelaHTML += '<td id="jogador"><img src="' + jogadoresJg[i].foto + '" alt="' + jogadoresJg[i].nome + '" class="w-75"></td>';
            tabelaHTML += '<td class="text-center">' + jogadoresJg[i].nome + '</td>';
            tabelaHTML += '<td><img src="' + jogadoresJg[i].pais + '" alt="" class="rounded w-100"></td>';
            tabelaHTML += '<td class="text-center"><img src="' + jogadoresJg[i].time + '" alt="" class="w-75"></td>';
            tabelaHTML += '<td class="text-center">' + jogadoresJg[i].preco + '</td>';
            tabelaHTML += '<td> <button type="submit" class="btn btn-success col-12 bg-dark"><i class="bi bi-plus-lg"></button></td>';
            tabelaHTML += '</tr>\n';
        }

        tabelaHTML += '</tbody>\n';

        tabelaHTML += '</table>';
        return tabelaHTML;
    }

    // Função para construir a tabela de Mid em HTML
    function construirTabelaMid(jogadoresMid) {
        var tabelaHTML = '<table class="table table-bordered table-hover table-dark">\n';

        // Cabeçalho da tabela
        tabelaHTML += '<thead>';
        tabelaHTML += '<tr>';
        tabelaHTML += '<th>Foto</th>';
        tabelaHTML += '<th>Nome</th>';
        tabelaHTML += '<th>País</th>';
        tabelaHTML += '<th>Time</th>';
        tabelaHTML += '<th>Preço</th>';
        tabelaHTML += '<th>Comprar</th>'
        tabelaHTML += '</tr>';
        tabelaHTML += '</thead>\n';

        // Adiciona linhas para cada jogador
        tabelaHTML += '<tbody>\n';
        for (var i = 0; i < jogadoresMid.length; i++) {
            tabelaHTML += '<tr>';
            tabelaHTML += '<td id="jogador"><img src="' + jogadoresMid[i].foto + '" alt="' + jogadoresMid[i].nome + '" class="w-75"></td>';
            tabelaHTML += '<td class="text-center">' + jogadoresMid[i].nome + '</td>';
            tabelaHTML += '<td><img src="' + jogadoresMid[i].pais + '" alt="" class="rounded w-100"></td>';
            tabelaHTML += '<td class="text-center"><img src="' + jogadoresMid[i].time + '" alt="" class="w-75"></td>';
            tabelaHTML += '<td class="text-center">' + jogadoresMid[i].preco + '</td>';
            tabelaHTML += '<td> <button type="submit" class="btn btn-success col-12 bg-dark"><i class="bi bi-plus-lg"></button></td>';
            tabelaHTML += '</tr>\n';
        }

        tabelaHTML += '</tbody>\n';

        tabelaHTML += '</table>';
        return tabelaHTML;
    }

    // Função para construir a tabela de Adc em HTML
    function construirTabelaAdc(jogadoresAdc) {
        var tabelaHTML = '<table class="table table-bordered table-hover table-dark">\n';

        // Cabeçalho da tabela
        tabelaHTML += '<thead>';
        tabelaHTML += '<tr>';
        tabelaHTML += '<th>Foto</th>';
        tabelaHTML += '<th>Nome</th>';
        tabelaHTML += '<th>País</th>';
        tabelaHTML += '<th>Time</th>';
        tabelaHTML += '<th>Preço</th>';
        tabelaHTML += '<th>Comprar</th>'
        tabelaHTML += '</tr>';
        tabelaHTML += '</thead>\n';

        // Adiciona linhas para cada jogador
        tabelaHTML += '<tbody>\n';
        for (var i = 0; i < jogadoresAdc.length; i++) {
            tabelaHTML += '<tr>';
            tabelaHTML += '<td id="jogador"><img src="' + jogadoresAdc[i].foto + '" alt="' + jogadoresAdc[i].nome + '" class="w-75"></td>';
            tabelaHTML += '<td class="text-center">' + jogadoresAdc[i].nome + '</td>';
            tabelaHTML += '<td><img src="' + jogadoresAdc[i].pais + '" alt="" class="rounded w-100"></td>';
            tabelaHTML += '<td class="text-center"><img src="' + jogadoresAdc[i].time + '" alt="" class="w-75"></td>';
            tabelaHTML += '<td class="text-center">' + jogadoresAdc[i].preco + '</td>';
            tabelaHTML += '<td> <button type="submit" class="btn btn-success col-12 bg-dark"><i class="bi bi-plus-lg"></button></td>';
            tabelaHTML += '</tr>\n';
        }

        tabelaHTML += '</tbody>\n';

        tabelaHTML += '</table>';
        return tabelaHTML;
    }

    // Função para construir a tabela de Sup em HTML
    function construirTabelaSup(jogadoresSup) {
        var tabelaHTML = '<table class="table table-bordered table-hover table-dark">\n';

        // Cabeçalho da tabela
        tabelaHTML += '<thead>';
        tabelaHTML += '<tr>';
        tabelaHTML += '<th>Foto</th>';
        tabelaHTML += '<th>Nome</th>';
        tabelaHTML += '<th>País</th>';
        tabelaHTML += '<th>Time</th>';
        tabelaHTML += '<th>Preço</th>';
        tabelaHTML += '<th>Comprar</th>'
        tabelaHTML += '</tr>';
        tabelaHTML += '</thead>\n';

        // Adiciona linhas para cada jogador
        tabelaHTML += '<tbody>\n';
        for (var i = 0; i < jogadoresSup.length; i++) {
            tabelaHTML += '<tr>';
            tabelaHTML += '<td id="jogador"><img src="' + jogadoresSup[i].foto + '" alt="' + jogadoresSup[i].nome + '" class="w-75"></td>';
            tabelaHTML += '<td class="text-center">' + jogadoresSup[i].nome + '</td>';
            tabelaHTML += '<td><img src="' + jogadoresSup[i].pais + '" alt="" class="rounded w-100"></td>';
            tabelaHTML += '<td class="text-center"><img src="' + jogadoresSup[i].time + '" alt="" class="w-75"></td>';
            tabelaHTML += '<td class="text-center">' + jogadoresSup[i].preco + '</td>';
            tabelaHTML += '<td> <button type="submit" class="btn btn-success col-12 bg-dark"><i class="bi bi-plus-lg"></button></td>';
            tabelaHTML += '</tr>\n';
        }

        tabelaHTML += '</tbody>\n';

        tabelaHTML += '</table>';
        return tabelaHTML;
    }

    // Função para construir a tabela de Coach em HTML
    function construirTabelaCoach(Coachs) {
        var tabelaHTML = '<table class="table table-bordered table-hover table-dark">\n';

        // Cabeçalho da tabela
        tabelaHTML += '<thead>';
        tabelaHTML += '<tr>';
        tabelaHTML += '<th>Foto</th>';
        tabelaHTML += '<th>Nome</th>';
        tabelaHTML += '<th>País</th>';
        tabelaHTML += '<th>Time</th>';
        tabelaHTML += '<th>Preço</th>';
        tabelaHTML += '<th>Comprar</th>'
        tabelaHTML += '</tr>';
        tabelaHTML += '</thead>\n';

        // Adiciona linhas para cada jogador
        tabelaHTML += '<tbody>\n';
        for (var i = 0; i < Coachs.length; i++) {
            tabelaHTML += '<tr>';
            tabelaHTML += '<td id="jogador"><img src="' + Coachs[i].foto + '" alt="' + Coachs[i].nome + '" class="w-75"></td>';
            tabelaHTML += '<td class="text-center">' + Coachs[i].nome + '</td>';
            tabelaHTML += '<td><img src="' + Coachs[i].pais + '" alt="" class="rounded w-100"></td>';
            tabelaHTML += '<td class="text-center"><img src="' + Coachs[i].time + '" alt="" class="w-75"></td>';
            tabelaHTML += '<td class="text-center">' + Coachs[i].preco + '</td>';
            tabelaHTML += '<td> <button type="submit" class="btn btn-success col-12 bg-dark"><i class="bi bi-plus-lg"></button></td>';
            tabelaHTML += '</tr>\n';
        }

        tabelaHTML += '</tbody>\n';

        tabelaHTML += '</table>';
        return tabelaHTML;
    }

    // Adiciona a tabela ao corpo do modal
    document.getElementById('tabelaTop').innerHTML = construirTabelaTop(jogadoresTop);
    document.getElementById('tabelaJg').innerHTML = construirTabelaJg(jogadoresJg);
    document.getElementById('tabelaMid').innerHTML = construirTabelaMid(jogadoresMid);
    document.getElementById('tabelaAdc').innerHTML = construirTabelaAdc(jogadoresAdc);
    document.getElementById('tabelaSup').innerHTML = construirTabelaSup(jogadoresSup);
    document.getElementById('tabelaCoach').innerHTML = construirTabelaCoach(Coachs);
})
