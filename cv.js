// const pdfContainer = document.getElementById('pdf-container');
const pdfUrl = './Aryan Kumar-CV-(20IM30033).pdf';


const pdfContainer = document.getElementById('pdf-container');
// const pdfUrl = 'path/to/your/pdf.pdf';

const embedElement = document.createElement('embed');
embedElement.src = pdfUrl;
embedElement.type = 'application/pdf';
embedElement.width = '100%';
embedElement.height = '100%';

pdfContainer.appendChild(embedElement);

const goBackButton=document.getElementById('goBackBtn');
const goForwardButton=document.getElementById('goForwardBtn');

goBackButton.addEventListener('click',() => {
  window.history.back(); // Go back one page
});

goForwardButton.addEventListener('click',() => {
  window.history.forward(); // Go forward one page
});