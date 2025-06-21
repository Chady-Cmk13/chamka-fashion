 // ouvrir et fermr le menu mobile 
 const menubtn = document.querySelector( 'menu-btn' );
 const navMenu = document.querySelector( 'nav-menu' );
 menubtn.addEventListener( 'click', )
 {
    navMenu.classList.toggle( 'active' );
 };
 //Gérer l'ajout au panier 
 const addToCartButtons = document.querySelectorAll( '.add-to-cart' )
 const cartCount = document.querySelector( '#cart-count');
 let count = 0;
 addToCartButtons.forEach(button) {
    button.addEventListener( 'click' )
    {
        count++;
        cartCount.textContent = count;alert ( 'Produit ajouté au panier ! ')
    };
 };
