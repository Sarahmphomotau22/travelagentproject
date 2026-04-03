// Contact form validation
function validateForm(event) {
  event.preventDefault();
  const name = document.querySelector("input[name='name']").value.trim();
  const email = document.querySelector
  
  
  function searchDestination() {
  const input = document.querySelector(".search-bar input");
  const query = input.value.trim();
  if (query) {
    alert("Searching for: " + query);
  } else {
    alert("Please enter a destination or keyword.");
  }
}

function clearSearch() {
  document.querySelector(".search-bar input").value = "";
}

  
 