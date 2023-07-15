import { getInfo } from '../api';
import { markupUsers } from '../markup';
import { tBodyEl, loaderEl } from '../refs';
import { helpAddMarkup } from '../helpers';
import { toggleLoader } from '../helpers';

window.addEventListener('load', start);

function start() {
    toggleLoader(loaderEl)
  getInfo('users')
    .then(data => {
      const markup = markupUsers(data);
      helpAddMarkup(tBodyEl, markup);
    })
    .catch(err => console.log(err.message)).finally(()=>toggleLoader(loaderEl))
}

tBodyEl.addEventListener('click', onClick);

function onClick(evt) {
  const userId = evt.target.closest('tr').dataset.userid;
  location.href = `user.html?userid=${userId}`;
}
