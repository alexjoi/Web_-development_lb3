const form = document.getElementById("employeeForm");
const result = document.getElementById("result");
const employeeResults = document.getElementById("employeeResults");
const averageResult = document.getElementById("averageResult");

function calculateExperience(hireDate) {
    const today = new Date();
    const startDate = new Date(hireDate + "T00:00:00");

    let years = today.getFullYear() - startDate.getFullYear();

    if (
        today.getMonth() < startDate.getMonth() ||
        (today.getMonth() === startDate.getMonth() &&
        today.getDate() < startDate.getDate())
    ) {
        years--;
    }

    return years;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const employees = [];
    let totalExperience = 0;

    for (let i = 1; i <= 5; i++) {
        const surname = document.getElementById("surname" + i).value.trim();
        const hireDate = document.getElementById("date" + i).value;
        const date = new Date(hireDate + "T00:00:00");

        if (date > today) {
            alert("Дата прийому на роботу не може бути майбутньою.");
            return;
        }

        const experience = calculateExperience(hireDate);

        employees.push({
            surname: surname,
            experience: experience
        });

        totalExperience += experience;
    }

    employeeResults.innerHTML = "";

    employees.forEach(function(employee) {
        const item = document.createElement("div");
        item.className = "employee-result";
        item.textContent = employee.surname + " – стаж роботи: " + employee.experience + " років";
        employeeResults.appendChild(item);
    });

    const average = Math.round(totalExperience / 5);

    averageResult.textContent = "Середній стаж роботи: " + average + " років";

    result.hidden = false;
});
const aboutButton = document.getElementById("aboutButton");
const aboutWindow = document.getElementById("aboutWindow");
const closeAbout = document.getElementById("closeAbout");

aboutButton.addEventListener("click", function() {
    aboutWindow.hidden = false;
});

closeAbout.addEventListener("click", function() {
    aboutWindow.hidden = true;
});
