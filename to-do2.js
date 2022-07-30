let team1 = {[]
name: 'team1',
members:[],
starter: false,
} ;
let team2 = {
    name:'team2',
    members:[],
    stater:false,
};

const UIclass = ui();
object.freeze(UIclass)

const resetteams = () => {
    selects.foreach(select =>((select.disable = false), (select.value = '0')));

    [team1, team2].forEach(team => (team.starter = false));

    UIclass.restart();
};

const selectwinner = winner => {
    UIclass.showmessage(
        ´${offense.name} attacks with ${offense.powerattack} power to ${defense.name}´
        'subtitle',
        offenseteam
    );
};

const starbattles = () => {
    const fight = figth(team1, team2);
    const [team10rganized, team20rganized] = fight.organizeteams();

    team10rganized.members.forEach((member, position)) => {
        const opponent = team20rganized.members[position];
        fight.courrentfight(position)

        while (true) {
            if(!fight.arestillfighting()) {
                break;
            }

            fight.f1vsf2(team10rnized.name);
            setmessage(member, team10rganized.name, opponent);

            if(!fight.arestillfighting()) {
                break;
            }

            fight.f1vsf2(team20rganized.name);
            setMessage(opponent, team20rganized.name,member);
            if(!fight.arestillfighting()) {
                break;
            };
        };

        renderwinner(
        member.isAlive()? member.name : opponent.name,
        member.isAlive()? opponent.name : member.name
        );
    };

    selectwinner(fight.selectwinner());
    };

    const startfight = () => {
        const isReady = validateteams();

        if (!isReady) {
            return;
        }

        team1.members = team1.members.map(pokemon => pokemon(pokemon));
        team2.members = team2.members.map(pokemon => pokemon(pokemon));


        const selectstarter = math.round(math.random());
        const starter = [team1, team2].filter(
            (_, index) => index === select starter
        )[0].name;
        [team1, team2][selectstarter].starter = true;

        UIclass.clearcountainer();
        UIclass.showMessage (´${starter} will start the fight!´, 'title');

        starbattles();
    };

