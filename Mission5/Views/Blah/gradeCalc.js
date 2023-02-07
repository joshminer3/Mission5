//Javascript page to calculate the grade

//This gets each input, assigns the value to a variable, and multiplies it by its weight
$("#submitGrades").click(function () {
    var asg = $("#asg").val() * 0.5;
    var gp = $("#gp").val() * 0.1;
    var qz = $("#qz").val() * 0.1;
    var me = $("#me").val() * 0.1;
    var fe = $("#fe").val() * 0.1;
    var intex = $("#intex").val() * 0.1;

    //This parses each input and adds them to a total grade
    var totalGrade = (parseInt(asg) + parseInt(gp) + parseInt(qz) + parseInt(me) + parseInt(fe) + parseInt(intex));

    //Variable for the letter
    var sLetterGrade;

    console.log(totalGrade);

    //If statements to determine letter grade based on requirements
    if (totalGrade >= 94) {
        sSetterGrade = "A"
    }
    else if (totalGrade >= 90) {
        sLetterGrade = "A-"
    }
    else if (totalGrade >= 87) {
        sLetterGrade = "B+"
    }
    else if (totalGrade >= 84) {
        sLetterGrade = "B"
    }
    else if (totalGrade >= 80) {
        sLetterGrade = "B-"
    }
    else if (totalGrade >= 77) {
        sLetterGrade = "C+"
    }
    else if (totalGrade >= 74) {
        sLetterGrade = "C"
    }
    else if (totalGrade >= 70) {
        sLetterGrade = "C-"
    }
    else if (totalGrade >= 67) {
        sLetterGrade = "D+"
    }
    else if (totalGrade >= 64) {
        sLetterGrade = "D"
    }
    else if (totalGrade >= 60) {
        sLetterGrade = "D-"
    }
    else {
        sLetterGrade = "E"
    }

    //This assigns the string to a variable
    var sGradePerc = ("Your final grade is " + sLetterGrade + ", with a total of " + totalGrade + "%");

    //This will assign an H6 tag the sGradePerc string
    $("#sGradePerc").html(sGradePerc);

});