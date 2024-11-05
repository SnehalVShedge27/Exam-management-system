const examForm = document.getElementById('examForm');
const examNameInput = document.getElementById('examName');
const examDateInput = document.getElementById('examDate');
const examDurationInput = document.getElementById('examDuration');
const examTableBody = document.querySelector('#examTable tbody');

let examRecords = [];

examForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const examName = examNameInput.value.trim();
    const examDate = examDateInput.value;
    const examDuration = examDurationInput.value.trim();

    // Add record to examRecords array
    examRecords.push({ name: examName, date: examDate, duration: examDuration });

    // Update the exam table
    updateExamTable();

    // Clear input fields
    examNameInput.value = '';
    examDateInput.value = '';
    examDurationInput.value = '';
});

function updateExamTable() {
    // Clear existing table rows
    examTableBody.innerHTML = '';

    // Populate the table with exam records
    examRecords.forEach(record => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const dateCell = document.createElement('td');
        const durationCell = document.createElement('td');

        nameCell.textContent = record.name;
        dateCell.textContent = record.date;
        durationCell.textContent = record.duration;

        row.appendChild(nameCell);
        row.appendChild(dateCell);
        row.appendChild(durationCell);
        examTableBody.appendChild(row);
    });
}