import Song, {play_song} from './song.js'

export default class Player {
    constructor(map){
        Object.entries(map);
        let aux = 1;
        for (var [key,value] of Object.entries(map)){
            const s_cover = `.cover-${aux}`
            const song = new Song(key,value,s_cover)
            play_song(song)
            aux++;
        }
    }
}