

const noteText = document.getElementById("note-text");
const noteColor = document.getElementById("note-color");
const addNoteBtn = document.getElementById("add-note");
const noteList = document.getElementById("note-list");
const noteFilter = document.getElementById("note-filter");

let notes = [];

addNoteBtn.addEventListener("click", () => {
    const noteContent = noteText.value.trim();
    const noteColorValue = noteColor.value;

    if (noteContent) {
        const note = {
            content: noteContent,
            color: noteColorValue,
        };

        notes.push(note);
        displayNotes();
        noteText.value = "";
        noteColor.value = "#ff6347";
    }
});

function displayNotes() {
    noteList.innerHTML = "";
    const filterText = noteFilter.value.toLowerCase();

    notes.forEach((note) => {
        if (note.content.toLowerCase().includes(filterText)) {
            const listItem = document.createElement("li");
            listItem.classList.add("note-item");
            listItem.style.backgroundColor = note.color;
            listItem.textContent = note.content;

            noteList.appendChild(listItem);
        }
    });
}

noteFilter.addEventListener("input", () => {
    displayNotes();
});
