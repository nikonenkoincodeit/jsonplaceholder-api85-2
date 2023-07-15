import { getInfo } from "../api";
import { murkupByUserId, createListAlbum } from "../markup";
import { helpAddMarkup } from "../helpers";
import { tUserIdEl, listUserAlbum } from "../refs";


const searchParams = new URLSearchParams(location.search);
const userId = searchParams.get('userid');
console.log(userId);

window.addEventListener('load', start);
window.addEventListener('load', loadAlbum)


function start() {
    getInfo(`users/${userId}`).then((data) => {
        const markupUserId = murkupByUserId(data)
        helpAddMarkup(tUserIdEl, markupUserId);
        console.log(data);
    }).catch((err) => console.log(err.message))
}

function loadAlbum() {
    getInfo(`albums?userId=${userId}`)
        .then((data) => {
            helpAddMarkup(listUserAlbum, createListAlbum(data))
        })
        .catch((err) => console.log(err.message))
}



