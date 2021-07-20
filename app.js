    const notesArea = document.getElementById('notes');
	const button = document.getElementById('add-button');
	var titleTxt;
	var subtitleTxt;
	var date;
	var time;
	var newNote;
	var newDiv;

	function Note(title,subtitle) {
		this.title = title;
		this.subtitle = subtitle;
	};

	function addNote() {
		titleTxt = document.getElementById('title-input').value;
		subtitleTxt = document.getElementById('subtitle-input').value;
		date = new Date().toJSON().slice(0,10);
    	time = new Date().toJSON().slice(11,19);

			newNote = new Note(titleTxt, subtitleTxt);

			var sampleNote = document.createElement('div');
			var header = document.createElement('div');
			var deleteButton = document.createElement('a');
			var titleArea = document.createElement('span');
			var dateArea = document.createElement('span');
			var subtitleArea = document.createElement('span');
			
			deleteButton.innerHTML = "Delete";
			titleArea.innerHTML = newNote.title;
			dateArea.innerHTML = date + " " + time;
			subtitleArea.innerHTML = newNote.subtitle;

			notesArea.appendChild(sampleNote);
			sampleNote.appendChild(deleteButton);
			sampleNote.appendChild(header);
			header.appendChild(titleArea);
			header.appendChild(dateArea);
			sampleNote.appendChild(subtitleArea);

			sampleNote.classList.add('sample-note');
			header.classList.add('header');
			deleteButton.classList.add('delete');
			titleArea.classList.add('titles-added');
			dateArea.classList.add('date-added');
			subtitleArea.classList.add('subtitles-added');

			function deleteNote() {
				sampleNote.remove();
			}
		
		deleteButton.addEventListener("click", deleteNote, true);
	}

	button.addEventListener("click", addNote, true);