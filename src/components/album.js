import { getInfo } from '../api';
import { createCardMarkup } from '../markup';
import { helpAddMarkup } from '../helpers';
import { albumEl } from '../refs';

const searchParams = new URLSearchParams(location.search);
const albumId = searchParams.get('albumId');

window.addEventListener('load', albumLoad);

function albumLoad() {
  getInfo(`photos?albumId=${albumId}`)
    .then(data => {
      const albumPosition = createCardMarkup(data);
      helpAddMarkup(albumEl, albumPosition);
    })
    .catch(err => console.log(err.message));
}
