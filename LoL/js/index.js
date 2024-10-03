var allChampions=[] 

const startChampions = async () => {
fetch('https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json')
.then (response => response.json())
.then (data=>{
    const champions = data.data
    
    Object.values(champions).forEach(
        championName => {
            allChampions.push(championName)
            console.log(championName.name, ':', championName.blurb);
            
        });
    })
}
startChampions()

/* console.log(allChampions.values().length); */
