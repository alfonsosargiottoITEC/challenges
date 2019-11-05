const getView = (property) => `
  <h2>Detalle de la propiedad</h2>
  <div class="propiedades">
    <h1>${property.description} [${property.type}]</h1>
    <p>${property.currency}  ${property.price}</p>
    <p><em>Sector:</em> ${property.sector ? property.sector : '-'}</p>
    <img src="${property.photo}" alt="casita">
    
  </div>
`;

module.exports = { getView };