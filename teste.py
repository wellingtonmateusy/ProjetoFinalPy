from mwrogue.esports_client import EsportsClient

site = EsportsClient("lol")
response = site.cargo_client.query(
    tables="ScoreboardGames=SG, ScoreboardPlayers=SP, Tournaments=T",
    join_on="SG.GameId=SP.GameId, SG.OverviewPage=T.OverviewPage",
    fields="T.Name=Tournament, SG.DateTime_UTC, SP.Name,SP.Kills, SP.Deaths, SP.Assists, SP.CS",
    where="SG.DateTime_UTC >= '2023-01-21' AND T.Name='CBLOL 2023 Split 1' AND SP.Name='Titan'",
    limit=2
)
valor = int(response[0]["Kills"]) + int(response[1]["Kills"])
print(valor)
print(response)