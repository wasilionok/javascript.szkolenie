'use strict';

function ustawTlo() {
    for(var i = 0; i < document.getElementsByTagName('p').length; i++) {
        if (i % 2 == 0) {
            document.getElementsByTagName('p')[i].style.background = 'red';
        } else {
            document.getElementsByTagName('p')[i].style.background = 'yellow';
        }
    }
    document.getElementById('przycisk').value = 'Zeruj tło';

    document.getElementById('przycisk').removeEventListener('click', ustawTlo);
    document.getElementById('przycisk').addEventListener('click', zerujTlo);
}


function zerujTlo() {
    for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
        document.getElementsByTagName('p')[i].style.background = '';
    }
    document.getElementById('przycisk').value = 'Ustaw tło';

    document.getElementById('przycisk').removeEventListener('click', zerujTlo);
    document.getElementById('przycisk').addEventListener('click', ustawTlo);
}

document.getElementById('przycisk').addEventListener('click', ustawTlo);
