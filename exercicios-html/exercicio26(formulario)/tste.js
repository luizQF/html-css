let array = [1, 4, 7]
function inlist(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true //o número está na lista
    }else{
        return false //o número não esta na lista
    }
}
if(!inlist(4, array)){
    console.log(`o numero não está na lista`)
}else{
    console.log(`o numero está na lista`)//falso. O número está na lista
}