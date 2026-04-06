// script.js

// Destination data with 3 countries, 3 beaches, 3 temples
const destinations = [
  // Countries
  { name: "France", type: "country", description: "Known for art, cuisine, and the Eiffel Tower.", image: "paris.jpg" },
  { name: "Brazil", type: "country", description: "Famous for carnival, beaches, and vibrant culture.", image: "brazil.jpg" },
  { name: "Japan", type: "country", description: "Land of tradition and technology, cherry blossoms, and sushi.", image: "tokyo.jpg" },

  // Beaches
  { name: "Bali", type: "beach", description: "Tropical paradise with temples and beaches.", image: "Beach1.jpg" },
  { name: "Savanna Beach", type: "beach", description: "Golden sands and crystal-clear waters.", image: "beach2.jpg" },
  { name: "Copacabana Beach", type: "beach", description: "Iconic Rio beach with vibrant atmosphere.", image: "bali.jpg" },

  // Temples
  { name: "Angkor Wat", type: "temple", description: "Largest religious monument in the world, Cambodia.", image: "temple3.jpg" },
  { name: "Taj Mahal", type: "temple", description: "Iconic symbol of love and Mughal architecture, India.", image: "temple6.jpg" },
  { name: "Kyoto Shrine", type: "temple", description: "Serene temple surrounded by cherry blossoms, Japan.", image: "temple4.jpg" }
];

// ===============================
// Search Functionality
// ===============================
function searchDestination() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<h2 class='results-title'>Search Results</h2>";

  // Filter destinations by name or type
  const filtered = destinations.filter(dest =>
    dest.name.toLowerCase().includes(query) || dest.type.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    resultsDiv.innerHTML += "<p>No destinations found.</p>";
    return;
  }

  // Display results
  filtered.forEach(dest => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${dest.name}</h3>
      <img src="${dest.image}" alt="${dest.name}" style="width:250px;height:150px;border-radius:8px;">
      <p>${dest.description}</p>
    `;
    resultsDiv.appendChild(card);
  });
}

// ===============================
// Clear Search Results
// ===============================
function clearSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("results").innerHTML = "";
}

// ===============================
// Handle Enter Key for Search
// ===============================
function handleKeyPress(event) {
  if (event.key === "Enter") {
    searchDestination();
  }
}



// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Thank you, ${name}! Your message has been sent.\nWe will reply to ${email} soon.`);
  
  // Reset form
  document.getElementById("contactForm").reset();
});
