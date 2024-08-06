const produit = {
  id: 1,
  nomProduit: "Ordinateur Portable",
  prix: 1200,
};

// Utilise la destructuration pour extraire les propriétés et les renommer
const { id: productId, nomProduit: productName, prix: productPrice } = produit;

// Affiche les valeurs des variables
console.log(productId); // doit afficher 1
console.log(productName); // doit afficher 'Ordinateur Portable'
console.log(productPrice); // doit afficher 1200

export default function App() {
  return <></>;
}
