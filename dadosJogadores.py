from mwrogue.esports_client import EsportsClient

site = EsportsClient("lol")
response = site.cargo_client.query(
    tables="ScoreboardGames=SG, ScoreboardPlayers=SP, Tournaments=T",
    join_on="SG.GameId=SP.GameId, SG.OverviewPage=T.OverviewPage",
    fields="T.Name=Tournament, SG.DateTime_UTC, SP.Name, SP.Kills, SP.P, SP.Deaths, SP.Assists, SP.CS",
    where="T.Name='CBLOL 2024 Split 1' AND SG.DateTime_UTC >= '2024-01-20' AND SP.Name='SuperCleber'",
    group_by="SG.GameId",
    order_by="SG.DateTime_UTC",
)

print(response)

