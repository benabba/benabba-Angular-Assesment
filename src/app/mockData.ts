import { Playlist } from './models/Playlist';

const preview = "https://source.unsplash.com/random";

const randomNumber = (max: number): number => {
    return Math.floor(Math.random() * Math.floor(max));
}

export const PLAYLISTS: Playlist[] = [
    {
        name: "Algemeen", slides: [
            { title: "Title Algem 1", preview, durationInSeconds: randomNumber(222) },
            { title: "Title Algem 2", preview, durationInSeconds: randomNumber(222) },
            { title: "Title Algem 3", preview, durationInSeconds: randomNumber(222) },
            { title: "Title Algem 4", preview, durationInSeconds: randomNumber(222) },
            { title: "Title Algem 5", preview, durationInSeconds: randomNumber(222) },
            { title: "Title Algem 6", preview, durationInSeconds: randomNumber(222) },
            { title: "Title Algem 7", preview, durationInSeconds: randomNumber(222) },
        ]
    },
    {
        name: "Cardiologie", slides: [
            { title: "Title Cardi 1", preview, durationInSeconds: randomNumber(222) },
            { title: "Title Cardi 2", preview, durationInSeconds: randomNumber(222) },
            { title: "Title Cardi 3", preview, durationInSeconds: randomNumber(222) },
            { title: "Title Cardi 4", preview, durationInSeconds: randomNumber(222) },

        ]
    }
]