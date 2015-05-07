function zero(){
  return [];
}

function succ(a){
  a.push(true);
  return a;
}

function n(){
  var a = zero();
  var i = 0;
  while(i < n){
    a = succ(a);
    i = i + 1;
  }
  return a;
}



function n(x){
  var a = zero();
  var i = 0;
  while(i < x){
    a = succ(a);
    i = i + 1;
  }
  return a;
}




function n(x){
  if(x < 0){
    return null;
  }
  var a = zero();
  var i = 0;
  while(i < x){
    a = succ(a);
    i = i + 1;
  }
  return a;
}
