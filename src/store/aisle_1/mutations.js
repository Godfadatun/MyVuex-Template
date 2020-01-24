export function increasePrice (state, data){

    state.products.forEach( produce => {
      produce.price += data
    });

}
