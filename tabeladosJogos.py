from mwrogue.esports_client import EsportsClient

site = EsportsClient("lol")
response = site.cargo_client.query(
    tables="ScoreboardGames=SG, ScoreboardPlayers=SP, Tournaments=T",
    join_on="SG.GameId=SP.GameId, SG.OverviewPage=T.OverviewPage",
    fields="SG.GameId, SG.DateTime_UTC, SG.Team1, SG.Team2, SG.Team1Score, SG.Team2Score, SG.Patch",
    where="T.Name='CBLOL 2024 Split 1' AND SG.DateTime_UTC >= '2024-01-20'",
    group_by="SG.GameId",
    order_by="SG.DateTime_UTC",  # Adicionando ORDER BY para ordenar pelos horários
    limit=5
)

print(response)

response2 = site.cargo_client.query(
    tables="ScoreboardGames=SG, ScoreboardPlayers=SP, Tournaments=T",
    join_on="SG.GameId=SP.GameId, SG.OverviewPage=T.OverviewPage",
    fields="SG.GameId, SG.DateTime_UTC, SG.Team1, SG.Team2, SG.Team1Score, SG.Team2Score,SG.Patch",
    where="T.Name='CBLOL 2024 Split 1' AND SG.DateTime_UTC >= '2024-01-21'",
    group_by="SG.GameId", # Adicionando GROUP BY para agrupar por GameId
    order_by="SG.DateTime_UTC", 
    limit=5
)

print(response)
print('\n')
print(response2)
