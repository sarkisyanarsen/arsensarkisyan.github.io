let total = 0
totall.innerHTML = total
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    //   console.log(json);
    json.forEach((elm) => {
      let parent = document.createElement("div");
      let div = document.createElement("div");
      let img = document.createElement("img");
      let name = document.createElement("p");
      let price = document.createElement("p");
      let countLeft = document.createElement("button");
      let countCenter = document.createElement("input");
      let countRight = document.createElement("button");
      let cart = document.createElement("button");

      parent.classList.add("parent");
      parent.classList.add("col-md-4");
      img.classList.add("img");
      name.classList.add("imya");
      price.classList.add("price");
      countLeft.classList.add("left");
      countLeft.classList.add("btn");
      countLeft.classList.add("btn-outline-dark");
      countCenter.classList.add("center");
      countRight.classList.add("right");
      countRight.classList.add("btn");
      countRight.classList.add("btn-outline-dark");
      cart.classList.add("cart");
      cart.classList.add("btn");
      cart.classList.add("btn-danger");
      cart.style.display = "block"

      img.setAttribute("src", elm.image);
      if(elm.title.length > 20){
        name.innerHTML = elm.title.slice(0,20) + "..."
      }else{
        name.innerHTML = elm.title
      }
      name.setAttribute("title", elm.title)
      // debugger
      price.innerHTML = elm.price + "$";
      price.style.color = "red"

      countCenter.value = 1;
      countCenter.style.paddingLeft = "20px";
      countCenter.setAttribute("disabled", "");
      countLeft.innerHTML = "-";
      countRight.innerHTML = "+";
      countLeft.addEventListener("click", () => {
        if (countCenter.value > 1) {
          countCenter.value--;
        }
      });
      countRight.addEventListener("click", () => {
        countCenter.value++;
      });


      cart.innerHTML = "Add to cart"

      cart.addEventListener("click",()=>{
        totall.innerHTML = +totall.innerHTML + +countCenter.value;
      })

      parent.appendChild(img);
      parent.appendChild(name);
      parent.appendChild(price);
      div.appendChild(countLeft);
      div.appendChild(countCenter);
      div.appendChild(countRight);
      parent.appendChild(div)
      parent.appendChild(cart);

      contaner.appendChild(parent);
    });
  });