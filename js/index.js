let number = 0;
// careate displayData function
function displayData(productName,productPrice,productQuantity,priceTotal){
    //table element append
    const container = document.getElementById('table-conatainer');
    const tr = document.createElement('tr');
    number ++;
    tr.innerHTML = `
    <td>${number}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td>
    `
    container.appendChild(tr);
}

//common function value set for HTML innerText elements
function buttonDisable(id){
    document.getElementById(id).setAttribute('disabled', true);
}

// for frist card 
document.getElementById('frist-card').addEventListener('click', function(){
   const productName = document.getElementById('frist-name').innerText;
   const productPrice = document.getElementById('frist-price').innerText;
   const productQuantity = document.getElementById('frist-quantity').innerText;
    // console.log(productName + ' ' + productPrice + ' ' + productQuantity);

    //convart string to number 
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    // console.log(priceTotal);

    // call displayData function 
    displayData(productName, productPrice, productQuantity, priceTotal);
    buttonDisable('frist-card');
 });

 //second card 
 document.getElementById('second-card').addEventListener('click', function(event){
    // console.log(event.target.parentNode.parentNode.children[0].innerText);
    const productName = event.target.parentNode.parentNode.children[0].innerText;
    // console.log(productName);
    const productPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    // console.log(productPrice);
    const productQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;
    // console.log(productQuantity);

    //convart string to number 
    const sumTotal = parseInt(productPrice) + parseInt(productQuantity);

    // call displayData function 
    displayData(productName, productPrice, productQuantity,sumTotal);
    buttonDisable('second-card');
 });

 //Thard card 
 document.getElementById('thard-card').addEventListener('click', function(){
    const productName = document.getElementById('thard-name').innerText;
    const productPrice = document.getElementById('thard-price').innerText;
    const productQuantity = document.getElementById('thard-quantity').innerText;
     // console.log(productName + ' ' + productPrice + ' ' + productQuantity);
 
     //convart string to number 
     const minusTotal = parseInt(productPrice) - parseInt(productQuantity);
     // console.log(priceTotal);
 
     // call displayData function 
     displayData(productName, productPrice, productQuantity,minusTotal);
     buttonDisable('thard-card');
  });

 //Four card 
 document.getElementById('fourth-card').addEventListener('click', function(event){
    // console.log(event.target.parentNode.parentNode.children[0].innerText);
    const productName = event.target.parentNode.parentNode.children[0].innerText;
    // console.log(productName);
    const productPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    // console.log(productPrice);
    const productQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;
    // console.log(productQuantity);

    //convart string to number 
    const modulusTotal = parseFloat(productPrice) / parseFloat(productQuantity).toFixed(2);

    // call displayData function 
    displayData(productName, productPrice, productQuantity,modulusTotal);
    
 });

 //fifth card 
 document.getElementById('last-card').addEventListener('click', function(e){
    const productName = document.getElementById('last-name').innerText;
    const productPrice = document.getElementById('last-price').value;
    const productQuantity = document.getElementById('last-quantity').value;
    if (isNaN(productPrice)) {
        return alert('Please enter number');
    }else if(isNaN(productQuantity)){
        return alert('Please enter number');
    }
    const modulusTotal = parseInt(productPrice) / parseInt(productQuantity).toFixed(2);
    displayData(productName, productPrice, productQuantity,modulusTotal);
 });