let currentDate = new Date();

function renderCalendar() {
    const monthYearElement = document.getElementById('month-year');
    const datesElement = document.getElementById('calendar-dates');
    datesElement.innerHTML = '';

    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

    monthYearElement.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

    // Create empty slots for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptySlot = document.createElement('div');
        datesElement.appendChild(emptySlot);
    }

    // Create date elements
    for (let date = 1; date <= lastDateOfMonth; date++) {
        const dateElement = document.createElement('div');
        dateElement.textContent = date;
        dateElement.classList.add('calendar-date');

        const today = new Date();
        if (
            date === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dateElement.classList.add('today');
        }

        datesElement.appendChild(dateElement);
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

document.addEventListener('DOMContentLoaded', renderCalendar);
