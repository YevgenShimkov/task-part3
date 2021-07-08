function DataTable(config, data) {
    let tablePlace = document.getElementById('usersTable'),
        table = document.createElement('table'),
        tableHead = createTableHead(config),
        tableBody = createTableBody(config, data);

    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    tablePlace.appendChild(table);
}

const config1 = {
    parent: '#usersTable',
    columns: [
        { title: 'Имя', field: 'name' },
        { title: 'Фамилия', field: 'surname' },
        { title: 'Возраст', field: 'age' },
    ]
};

const users = [
    { id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
    { id: 30051, name: 'Вася', surname: 'Васечкин', age: 15 },
];

DataTable(config1, users);


/**
 *  draw the columns. We take the quantity from the parameter. We take only the title. 
 * @param {*} config 
 */
function createTableHead(config) {
    let thead = document.createElement('thead'),
        tr_tHead = document.createElement('tr');
    thead.style.backgroundColor = 'rgb(235, 235, 231)';

    thead.appendChild(tr_tHead);
    tr_tHead.insertAdjacentElement('beforeend', addingCell('head', '№'));

    config.columns.map(c => {
        tr_tHead.insertAdjacentElement('beforeend', addingCell('head', c.title));
    })
    return thead;
}

/**
 * draw the body table.
 * from the date we take the number of lines and their content
 */
function createTableBody(config, data) {
    let tbody = document.createElement('tbody'),
        index = 0;

    data.map(d => {
        let tr_tBody = document.createElement('tr');

        tbody.appendChild(tr_tBody);
        tr_tBody.insertAdjacentElement('beforeend', addingCell('body', ++index));
        config.columns.map(c => {
            tr_tBody.insertAdjacentElement('beforeend', addingCell('body', d[c.field]));
        })
    })
    return tbody;
}

function addingCell(text) {
    let td_tBody = document.createElement('td');
    td_tBody.textContent = text;
    return td_tBody;
}

/**
 * Add a cell. We accept at the entrance where to insert and what text 
 * @param {*} place body or head
 * @param {*} text  cell text 
 * @returns  table element 
 */
function addingCell(place, text) {
    if (place === 'head') {
        let th_tHead = document.createElement('th');
        th_tHead.textContent = text;
        return th_tHead;
    } else {
        let td_tBody = document.createElement('td');
        td_tBody.textContent = text;
        return td_tBody;
    }
}



//import Tabulator from 'tabulator-tables';


//create Tabulator on DOM element with id "example-table"
let table = new Tabulator("#example-table", {
    data:users, //assign data to table
    columns: config1.columns,
    layout:"fitColumns", //fit columns to width of table (optional)

});

    table.addColumn({title: '№', field: 'number', formatter: 'rownum'}, true);






