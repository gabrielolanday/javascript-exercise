function pokemon(num){
  if (num == 1){
    return "u got bulbasaur";
  }else if(num == 2){
    return "u got squirtle";
  }else if(num == 3){
    return "u got charmander";
  }else{
    return "i said 1-3...";
  }
}

console.log(pokemon(prompt("enter a number 1-3 only")));
