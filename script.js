let currentDate = new Date();

function renderCalendar() {
    const monthYearElement = document.getElementById('month-year');
    const datesElement = document.getElementById('calendar-dates');
    datesElement.innerHTML = '';

    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    // Always display month names and year in English
    monthYearElement.textContent = currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDayOfPrevMonth = new Date(year, month, 0).getDate();

    // Add dates from the previous month in light grey
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        const prevMonthDateElement = document.createElement('div');
        prevMonthDateElement.textContent = lastDayOfPrevMonth - i;
        prevMonthDateElement.classList.add('calendar-date', 'other-month');
        datesElement.appendChild(prevMonthDateElement);
    }

    // Create date elements for the current month
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

    // Add dates from the next month in light grey
    const totalSlots = firstDayOfMonth + lastDateOfMonth;
    const remainingSlots = 42 - totalSlots; // To fill a complete 6-row calendar
    for (let i = 1; i <= remainingSlots; i++) {
        const nextMonthDateElement = document.createElement('div');
        nextMonthDateElement.textContent = i;
        nextMonthDateElement.classList.add('calendar-date', 'other-month');
        datesElement.appendChild(nextMonthDateElement);
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
