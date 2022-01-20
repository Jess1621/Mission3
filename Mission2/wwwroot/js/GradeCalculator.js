// JQuery Form Function
$("#btnSend").click(function () {
    let fGradeAssignments = $("#iAssignments").val();
    let fGradeGroupProject = $("#iGroupProject").val();
    let fGradeQuizzes = $("#iQuizzes").val();
    let fGradeExams = $("#iExams").val();
    let fGradeIntex = $("#iIntex").val();

    let iGrades = parseFloat(fGradeAssignments) + parseFloat(fGradeGroupProject) +
        parseFloat(fGradeQuizzes) + parseFloat(fGradeExams) + parseFloat(fGradeIntex)

    // Loop to determine grade value
    if (iGrades >= 100 && iGrades >= 94) {
        sGradeLetter = "A"
    } else if (iGrades < 94 && iGrades >= 90) {
        sGradeLetter = "A-"
    } else if (iGrades < 90 && iGrades >= 87) {
        sGradeLetter = "B+"
    } else if (iGrades < 87 && iGrades >= 84) {
        sGradeLetter = "B"
    } else if (iGrades < 84 && iGrades >= 80) {
        sGradeLetter = "B-"
    } else if (iGrades < 80 && iGrades >= 77) {
        sGradeLetter = "C+"
    } else if (iGrades < 77 && iGrades >= 74) {
        sGradeLetter = "C"
    } else if (iGrades < 74 && iGrades >= 70) {
        sGradeLetter = "C-"
    } else if (iGrades < 70 && iGrades >= 67) {
        sGradeLetter = "D+"
    } else if (iGrades < 67 && iGrades >= 64) {
        sGradeLetter = "D"
    } else if (iGrades < 64 && iGrades >= 60) {
        sGradeLetter = "D-"
    } else sGradeLetter = "E"

    document.getElementById("formResults").innerHTML = "You got a(n) " + iGrades + "% which is a(n) " + sGradeLetter + "!";
})