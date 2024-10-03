export default class Song{
    constructor(k_song,v_song,c_song){
        this.element = document.querySelector(k_song)
        this.audio = new Audio(v_song);
        this.album = document.querySelector(c_song);
    }

}

export function play_song(song){
    const vinil = song.element.querySelector('.vinyl')
    song.element.onclick =()=>{
        if (song.audio.paused){
            song.audio.play()
            vinil.classList.add("open")
            vinil.classList.remove('close')

        }
        else{
            song.audio.pause()
            vinil.classList.add('close')
            vinil.classList.remove('open')
        }
    }
}