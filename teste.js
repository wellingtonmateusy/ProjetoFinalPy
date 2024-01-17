$(document).ready(function(){
    var jogadoresTop = [
        {"foto": "./lib/midias/Jogadores/Fluxo/1TOP.webp", "nome": "Kiari", "pais": "Brasil", "time": "Fluxo", "preco": 100},
        {"foto": "foto2.jpg", "nome": "Robo", "pais": "Brasil", "time": "Loud", "preco": 150},
        {"foto": "foto2.jpg", "nome": "Lonely", "pais": "Brasil", "time": "Kmb", "preco": 150}
    // Adicione mais jogadoresTop conforme necessário
    ];

    // Função para construir a tabela em HTML
    function construirTabela(jogadoresTop) {
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
            tabelaHTML += '<td class="col-2" id="jogador"><img src="' + jogadoresTop[i].foto + '" alt="' + jogadoresTop[i].nome + '" class="w-75"></td>';
            tabelaHTML += '<td class="text-center">' + jogadoresTop[i].nome + '</td>';
            tabelaHTML += '<td class="col-1"> <h6>' + jogadoresTop[i].pais + '</h6> </td>';
            tabelaHTML += '<td class="col-1"><h6>' + jogadoresTop[i].time + '</h6> </td>';
            tabelaHTML += '<td>' + jogadoresTop[i].preco + '</td>';
            tabelaHTML += '<td> <button type="submit" class="btn btn-success col-12 bg-dark">comprar</button></td>';
            tabelaHTML += '</tr>\n';
        }

        tabelaHTML += '</tbody>\n';

        tabelaHTML += '</table>';
        return tabelaHTML;
    }

    var jogadoresJG = [
        {"foto": "foto1.jpg", "nome": "Sting", "pais": "bandeira1.webp", "time": "logo1.webp", "preco": 100},
        {"foto": "foto2.jpg", "nome": "Ranger", "pais": "bandeira2.webp", "time": "logo2.webp", "preco": 150},
        // Adicione mais jogadoresTop conforme necessário
    ];

    function construirTabelaJG(jogadoresJG) {
        var tabelaHTML = '<table class="table table-bordered table-dark">\n';

        // Cabeçalho da tabela
        tabelaHTML += '<thead>';
        tabelaHTML += '<tr>';
        tabelaHTML += '<th>Foto</th>';
        tabelaHTML += '<th>Nome</th>';
        tabelaHTML += '<th>País</th>';
        tabelaHTML += '<th>Time</th>';
        tabelaHTML += '<th>Preço</th>';
        tabelaHTML += '</tr>';
        tabelaHTML += '</thead>\n';

        // Adiciona linhas para cada jogador
        tabelaHTML += '<tbody>\n';
        for (var i = 0; i < jogadoresJG.length; i++) {
            tabelaHTML += '<tr>';
            tabelaHTML += '<td><img src="' + jogadoresJG[i].foto + '" alt="' + jogadoresJG[i].nome + '" class="w-75"></td>';
            tabelaHTML += '<td>' + jogadoresJG[i].nome + '</td>';
            tabelaHTML += '<td><img src="' + jogadoresJG[i].pais + '" alt="" class="rounded w-100"></td>';
            tabelaHTML += '<td><img src="' + jogadoresJG[i].time + '" alt="" class="w-75"></td>';
            tabelaHTML += '<td>' + jogadoresJG[i].preco + '</td>';
            tabelaHTML += '</tr>\n';
        }

        tabelaHTML += '</tbody>\n';

        tabelaHTML += '</table>';
        return tabelaHTML;
    }

    // Adiciona a tabela ao corpo do modal
    document.getElementById('tabela-container').innerHTML = construirTabela(jogadoresTop);
    document.getElementById('tabela-top').innerHTML = construirTabelaJG(jogadoresJG);
})
