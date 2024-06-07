function addToCart(productName, price) {
    // Retrieve the cart container
    var cartContainer = document.querySelector('.cart-container');

    // Create a new cart item element
    var cartItem = document.createElement('div');
    cartItem.classList.add('col-lg-4', 'mb-4', 'cart-item');
    cartItem.innerHTML = `
      <div class="card">
        <img src="static/images/${productName}.jpg" class="card-img-top" alt="${productName}">
        <div class="card-body">
          <h5 class="card-title">${productName}</h5>
          <p class="card-text">Price: ₹${price}</p>
          <button class="btn btn-danger btn-remove" onclick="removeFromCart(this)">Remove</button>
        </div>
      </div>
    `;

    // Append the cart item to the cart container
    cartContainer.appendChild(cartItem);
  }

  // Function to remove item from cart
  function removeFromCart(button) {
    // Retrieve the parent element of the button (card-body)
    var cardBody = button.parentElement;

    // Retrieve the parent element of the card-body (card)
    var card = cardBody.parentElement;

    // Retrieve the parent element of the card (cart-item)
    var cartItem = card.parentElement;

    // Remove the cart item from the cart container
    cartItem.remove();
  }