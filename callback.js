let display= (something) =>{
    console.log(something)
}

let me = (Name,ID,callback) =>{
    var details = `My name is ${Name} and my id is ${ID}`
    callback(details);
}
me("Saif",105,display)