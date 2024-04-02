let password = "jhjhg2";

if (password.length < 6){
    console.log("Password is too weak")
}
else if (/^\d+$/.test(password) || /^[a-zA-Z]+$/.test(password)){
    console.log("Password is weak")
}
else{
    console.log("Password is strong")
}