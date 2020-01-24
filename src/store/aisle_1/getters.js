export function saleProduce (state){
  var produce = state.products.map( produce => {
    return {
      name: 'Produce Name: ' + produce.name,
      price: produce.price/2
    }
  })
  return produce
}
