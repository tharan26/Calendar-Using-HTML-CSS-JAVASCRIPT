const calendarDays = document.getElementById("calendar-days");
const monthYear = document.getElementById("month-year");
let currentDate = new Date();

function renderCalendar() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    monthYear.innerHTML = `${months[month]} ${year}`;
    calendarDays.innerHTML = "";

    // Empty divs for days before the 1st of the current month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("empty-date");
        calendarDays.appendChild(emptyDiv);
    }

    // Current month's days
    for (let i = 1; i <= lastDateOfMonth; i++) {
        const day = document.createElement("div");
        if (i === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()) {
            day.classList.add("today");
        }
        day.textContent = i;
        calendarDays.appendChild(day);
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

document.getElementById("prev").addEventListener("click", prevMonth);
document.getElementById("next").addEventListener("click", nextMonth);

renderCalendar();
