let ClearanceLevel = 4;
let VIP = false;

if (VIP){
    console.log("Access granted to Entry Points A, B, and C.")
}
else{
    let access = "";
    if(ClearanceLevel >= 3){
        access += "Entry Point A, ";
    }
    if(ClearanceLevel >= 4){
        access += "Entry Point B, ";
    }
    if(ClearanceLevel >= 5){
        access += "Entry Point C, ";
    }
    if(access === ""){
        console.log("Insufficient clearance for any entry point.")
    }
    else{
        console.log("Access granted to " + access)
    }
}