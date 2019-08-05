const products = [

    {
        pid: 1, name:
            'sugar', price: 500
    },

    {
        pid: 2, name:
            'rice', price: 5000
    },

    {
        pid: 3, name:
            'wheat', price: 1500
    },

    {
        pid: 4, name:
            'milk', price: 200
    }


];

const renderProducts = function (products) {

    products.forEach(function (product) {

        let table = document.querySelector('#tab');

        let tr = document.createElement('tr');

        let td1 = document.createElement('td');

        td1.textContent = product.pid


        let td2 = document.createElement('td');

        td2.textContent = product.name


        let td3 = document.createElement('td');

        td3.textContent = product.price


        let td4 = document.createElement('td');

        let a = document.createElement('a');

        a.href = "editItem.html?id=" + product.pid +
            "&name=" + product.name +
            "&price=" + product.price;

        a.textContent = "Edit";

        td4.appendChild(a);

        tr.appendChild(td1);

        tr.appendChild(td2)

        tr.appendChild(td3);

        tr.appendChild(td4);

        table.appendChild(tr);

    });

}

renderProducts(products);

