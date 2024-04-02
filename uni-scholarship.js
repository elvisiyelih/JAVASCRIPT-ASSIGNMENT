let GPA = 3.7;
let ExtracurricularActivities = "exceptional";
let AcademicRecord = "strong";
let FinancialNeed = true;

if (GPA > 3.8 && ExtracurricularActivities === "exceptional"){
    console.log("Full scholarship")
}
else if (GPA >= 3.5 && GPA <= 3.8 && AcademicRecord === "strong"){
    console.log("Partial scholarship")
}
else if (GPA >= 3.0 && GPA < 3.5 && FinancialNeed){
    console.log("Consider for financial aid")
}
else {
    console.log("Scholarship rejected")
}