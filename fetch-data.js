const fetchDataButton = document.getElementById('fetchData');
const dataDiv = document.getElementById('data');

fetchDataButton.addEventListener('click', fetchData);

function fetchData() {
  const apiUrl = '(link unavailable)'; // Replace with your API URL

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const dataHtml = data.map(post => `<p>${post.title}</p>`).join('');
      dataDiv.innerHTML = dataHtml;
    })
    .catch(error => {
      dataDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

