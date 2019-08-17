let prodcuts=[

    {pid:1,name:'rice',price:2000},

    {pid:2,name:'wheat',price:1000},

    {pid:3,name:'milk',price:200},

    {pid:4,name:'sugar',price:100}

];

let renderProducts=function(products){

    let tabEl=document.querySelector('#pt');

    prodcuts.forEach(function(product){

        let trEl=document.createElement("tr");

        let tdEl1=document.createElement('td');

        tdEl1.textContent=product.pid;

        trEl.appendChild(tdEl1);


        let tdEl2=document.createElement('td');

        tdEl2.textContent=product.name;

        trEl.appendChild(tdEl2);


        let tdEl3=document.createElement('td');

        tdEl3.textContent=product.price;

        trEl.appendChild(tdEl3);


        let tdEl4=document.createElement('td');

        let editLink=document.createElement('a');

        editLink.href="#";

        editLink.textContent="Edit";

        editLink.setAttribute('id','link'+product.pid);

        tdEl4.appendChild(editLink);

        trEl.appendChild(tdEl4);

        tabEl.appendChild(trEl);

        document.querySelector('#link'+product.pid).addEventListener('click',function(){

            //console.log(product);

            let frm=document.querySelector('#frm');

            let formEl=document.createElement('form');

            let label1=document.createElement('label');

            label1.textContent="pid"

            let pidText=document.createElement('input');

            pidText.value=product.pid;

            pidText.setAttribute('id','pid');

            formEl.appendChild(label1);

            formEl.appendChild(pidText);

            


            let label2=document.createElement('label');

            label2.textContent='pname'

            let pnameText=document.createElement('input');

            pnameText.setAttribute('id','pname');

            pnameText.value=product.name;

            formEl.appendChild(label2);

            formEl.appendChild(pnameText);


            let label3=document.createElement('label');

            label3.textContent="price"

            let priceText=document.createElement('input');

            priceText.setAttribute('id','price');

            priceText.value=product.price;

            formEl.appendChild(label3);

            formEl.appendChild(priceText);

            let sb=document.createElement('button');

            sb.setAttribute('id','subBtn');

            sb.textContent="Update";

            formEl.appendChild(sb);

            frm.appendChild(formEl);


        })

    })

}
renderProducts(prodcuts);