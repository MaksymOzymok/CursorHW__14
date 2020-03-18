export default function (array, className) {
    let menu = document.createElement("ul");
    menu.className = className;
    let listItems = '';
    array.forEach(function(item) {
        listItems += `
            <ul>
            <li> ${item} </li>
            </ul>
        `;
    });
    menu.innerHTML = listItems;
    return menu;
}