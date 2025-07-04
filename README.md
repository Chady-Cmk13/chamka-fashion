# Chamka-Fashion

Chamka-Fashion est un site e-commerce simple pour la vente de vêtements, accessoires et produits électroniques. Il propose une expérience utilisateur moderne et dynamique, avec gestion du panier via le navigateur.

## Fonctionnalités

- **Catalogue de produits** : Présentation de produits populaires, vêtements, accessoires et électroniques avec images, prix, badges de nouveauté ou de promotion.
- **Ajout au panier dynamique** : Les utilisateurs peuvent ajouter des produits au panier depuis toutes les pages produits. Le panier est stocké dans le `localStorage` du navigateur.
- **Compteur de panier** : Le nombre d'articles dans le panier est affiché en temps réel dans l'en-tête.
- **Page Panier** : Affichage du contenu du panier, modification des quantités, suppression d'articles, calcul automatique du total.
- **Commande via WhatsApp** : Un bouton permet de passer la commande en envoyant le récapitulatif du panier directement sur WhatsApp.
- **Navigation fluide** : Barre de navigation cohérente sur toutes les pages.
- **Responsive** : Utilisation de Bootstrap pour une compatibilité mobile/tablette/desktop.

## Structure des fichiers

- `Index.html` : Page d'accueil (non fournie ici).
- `Produits.html` : Liste des produits populaires.
- `Accessoire.html` : Catalogue des accessoires.
- `Electronique.html` : Catalogue des produits électroniques.
- `panier.html` : Page de gestion du panier et passage de commande.
- `css/` : Dossier contenant les feuilles de style CSS.
- `image/` : Dossier contenant les images des produits.

## Technologies utilisées

- **HTML5**
- **CSS3** (personnalisé + Bootstrap 5)
- **JavaScript** (gestion du panier et de l'interaction utilisateur)
- **FontAwesome** (icônes)
- **Bootstrap** (mise en page responsive)

## Fonctionnement du panier

- Lorsqu'un utilisateur clique sur "Ajouter au panier", le produit est ajouté dans le `localStorage` avec sa quantité.
- Le panier est accessible depuis toutes les pages via l'icône en haut à droite.
- Sur la page `panier.html`, l'utilisateur peut :
  - Modifier la quantité de chaque produit.
  - Supprimer un produit du panier.
  - Voir le total de la commande.
  - Cliquer sur "Passer la commande sur WhatsApp" pour envoyer le détail de la commande au vendeur.

## Personnalisation

- Pour changer le numéro WhatsApp de réception des commandes, modifiez la variable `whatsappNumber` dans le script de `panier.html`.
- Les produits peuvent être modifiés directement dans les fichiers HTML correspondants.

## Installation & utilisation

1. Clonez ou téléchargez ce dépôt.
2. Placez vos images dans le dossier `image/`.
3. Ouvrez `Index.html` ou une autre page dans votre navigateur pour commencer à naviguer sur la boutique.

## Limitations

- Ce projet ne possède pas de backend : toutes les données sont stockées côté client (localStorage).
- La validation de commande se fait uniquement via WhatsApp.
- Pas de gestion d'utilisateurs ni de paiement en ligne.

## Auteur

Projet réalisé pour démonstration d'une boutique en ligne simple avec panier dynamique en JavaScript.

---
