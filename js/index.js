// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  console.log('Calculating subtotal, yey!');
  const quantity = product.querySelector(`.quantity input`).value;
  const subtotal = product.querySelector(`.subtotal span`);
  const subtotalValue = price*quantity;
  console.log(subtotalValue);
  subtotal.innerText = subtotalValue;
  return subtotalValue;
  //... your code goes here

}

function calculateAll() {
  /* // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test */

  // ITERATION 2
  //... your code goes here
  const productList = [...document.querySelectorAll(".product")];
  let sum = 0;
  for (i=0;i<productList.length;i++) {
  updateSubtotal(productList[i]);
  sum = sum + updateSubtotal(productList[i]);
} 
  // ITERATION 3
  //... your code goes here
  console.log(sum);
 const total = document.querySelector("#total-value span"); //getELement would only give me the html code
  total.innerText = sum;
  return total;
  

}

// ITERATION 4



function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  target.parentNode.parentNode.remove(); //two classes above two parent nodes

  //... your code goes here

}


// ITERATION 5

function createProduct(productName) {
  //... your code goes here
  const target = productName.currentTarget;
  console.log('The target to add  is:', target);
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const removeButtons = [...document.getElementsByClassName("btn-remove")];

  removeButtons.forEach((button)=>{ button.addEventListener("click", removeProduct)})

  const createProd = [...document.getElementsByClassName(`create-product`)];
  createProd.forEach((button)=>{ button.addEventListener("click", createProduct)});
});
