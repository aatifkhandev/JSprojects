searchBtn.addEventListener("click", function() {
    const searchTerm = searchInput.value.toLowerCase();
    for (let product of products) {
      const productName = product.querySelector(".product-name").textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    }
  });