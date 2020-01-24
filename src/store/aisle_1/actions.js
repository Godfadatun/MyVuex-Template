export function increasePrice (context, data){
  setTimeout(function(){
    context.commit('increasePrice', data)
  }, 3000)

}
