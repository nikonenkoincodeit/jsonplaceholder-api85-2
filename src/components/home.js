import { getInfo } from '../api';
import { markupUsers } from '../markup';
import { tBodyEl } from '../refs';
import { helpAddMarkup } from '../helpers';

window.addEventListener('load', start);

function start() {
  getInfo('users')
    .then(data => {
      const markup = markupUsers(data);
      helpAddMarkup(tBodyEl, markup);
    })
    .catch(err => console.log(err.message));
}

tBodyEl.addEventListener('click', onClick);

function onClick(evt) {
  const userId = evt.target.closest('tr').dataset.userid;
  location.href = `user.html?userid=${userId}`;
}
