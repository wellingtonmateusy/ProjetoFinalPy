from mwrogue.esports_client import EsportsClient
from datetime import datetime

site = EsportsClient("lol")
response = site.cargo_client.query(
    tables="ScoreboardGames=SG, ScoreboardPlayers=SP, Tournaments=T",
    join_on="SG.GameId=SP.GameId, SG.OverviewPage=T.OverviewPage",
    fields="SG.GameId, SG.DateTime_UTC, SG.Team1, SG.Team2, SG.Team1Score, SG.Team2Score, SG.Patch",
    where="T.Name='CBLOL 2024 Split 1' AND SG.DateTime_UTC >= '2024-01-20'",
    group_by="SG.GameId",
    order_by="SG.DateTime_UTC",  # Adicionando ORDER BY para ordenar pelos horários
)

for result in response:
    # Acesse a coluna team1 de cada resultado
    try:
        datetime_utc = datetime.strptime(result['DateTime UTC'], '%Y-%m-%d %H:%M:%S')
        print(datetime_utc.date())
    except KeyError:
        print("A coluna 'DateTime_UTC' não está presente no OrderedDict.")
    print(result['Team1'],result['Team1Score'],result['Team2Score'],result['Team2'])
print('\n')