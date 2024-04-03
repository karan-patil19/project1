function validation() {
    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
    alert("hello " + name + " from " + location);
}

function calculatemarks() {
    var maths = parseFloat(document.getElementById("maths").value);
    var english = parseFloat(document.getElementById("eng").value);
    var science = parseFloat(document.getElementById("sci").value);
    var totalMarks = maths + english + science;
    var p = ((totalMarks) * 100) / 300;
    document.getElementById("Total").innerHTML = totalMarks;
    document.getElementById("per").innerHTML = p;
}

function fun1() {
    alert("Great Job")

}

function fun2() {
    var salary = document.getElementById("sal").value;
    var s = Number(salary);
    var performance = document.getElementById("per").value;
    if (performance === 'a') {
        var bonus = (s * 30) / 100;
        var totalSalary = s + bonus;
        document.getElementById("bonus").innerHTML = bonus;
        document.getElementById("salary").innerHTML = totalSalary;
        // alert("Bonus is 30% incremented. Total Salary: " + totalSalary);
    } else if (performance === 'b') {
        var bonus = (s * 10) / 100;

        var totalSalary = s + bonus;

        document.getElementById("bonus").innerHTML = bonus;
        document.getElementById("salary").innerHTML = totalSalary;
    } else {
        document.getElementById("bonus").innerHTML = '';
        document.getElementById("totalSalary").innerHTML = '';
        // alert("Bonus is not applicable for this performance rating.");
    }
}

function fun3() {
    let r1 = document.getElementById('static').checked;
    let r2 = document.getElementById('dynamic-js').checked;
    let score = 0;

    if (r1 && r2) {
        score += 4;
    } else if (r1 || r2) {
        score += 2;
    }

    alert("You got" + " " + score + " " +
        "marks!");
}