/* ---------- CONFIG ---------- */
// Booking partner links. Change these if the partner URLs change.
const REDBUS_BASE = "https://www.redbus.in/bus-tickets/";
const REDBUS_HOME = "https://www.redbus.in/";
const RAILONE_URL = "https://www.irctc.co.in/nget/train-search"; // Indian Railways booking service

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

/* ---------- DATA ----------
   months = best months to visit (1-12), budget: 1 low, 2 medium, 3 high
   gateway = nearest city used for bus/train booking */
const PLACES = [
  { name: "Manali", state: "Himachal Pradesh", category: "Mountain", months: [3,4,5,6,10,11,12], budget: 2, gateway: "Manali",
    desc: "Snow-capped peaks, Solang Valley and Rohtang Pass.", things: ["Solang Valley adventure sports","Hadimba Temple","Old Manali cafes"] },
  { name: "Shimla", state: "Himachal Pradesh", category: "Mountain", months: [3,4,5,6,12], budget: 2, gateway: "Shimla",
    desc: "Colonial-era hill station with the Mall Road and toy train.", things: ["Kalka-Shimla toy train","The Ridge","Jakhu Temple"] },
  { name: "Leh-Ladakh", state: "Ladakh", category: "Mountain", months: [6,7,8,9], budget: 3, gateway: "Leh",
    desc: "High-altitude desert, monasteries and Pangong Lake.", things: ["Pangong Lake","Nubra Valley","Thiksey Monastery"] },
  { name: "Darjeeling", state: "West Bengal", category: "Mountain", months: [3,4,5,10,11], budget: 2, gateway: "Darjeeling",
    desc: "Tea gardens and sunrise views of Kanchenjunga.", things: ["Tiger Hill sunrise","Darjeeling Himalayan Railway","Tea estate visit"] },
  { name: "Munnar", state: "Kerala", category: "Mountain", months: [9,10,11,12,1,2,3], budget: 2, gateway: "Munnar",
    desc: "Rolling tea plantations and misty hills in the Western Ghats.", things: ["Eravikulam National Park","Tea Museum","Mattupetty Dam"] },
  { name: "Goa Beaches", state: "Goa", category: "Beach", months: [11,12,1,2], budget: 2, gateway: "Goa",
    desc: "Famous for Baga, Calangute and quiet South Goa shores.", things: ["Baga Beach","Fort Aguada","Water sports"] },
  { name: "Varkala", state: "Kerala", category: "Beach", months: [11,12,1,2,3], budget: 2, gateway: "Varkala",
    desc: "Cliff-top beach with cafes and a calm, spiritual feel.", things: ["Varkala Cliff","Papanasam Beach","Janardhana Temple"] },
  { name: "Gokarna", state: "Karnataka", category: "Beach", months: [10,11,12,1,2,3], budget: 1, gateway: "Gokarna",
    desc: "Quiet, budget-friendly beaches with a temple town.", things: ["Om Beach","Kudle Beach","Mahabaleshwar Temple"] },
  { name: "Andaman Islands", state: "Andaman and Nicobar", category: "Beach", months: [11,12,1,2,3,4], budget: 3, gateway: "Port Blair",
    desc: "Crystal clear water, coral reefs and scuba diving.", things: ["Radhanagar Beach","Scuba diving","Cellular Jail"] },
  { name: "Puri", state: "Odisha", category: "Beach", months: [10,11,12,1,2,3], budget: 1, gateway: "Puri",
    desc: "Sacred beach town beside the Jagannath Temple.", things: ["Puri Beach","Jagannath Temple","Konark Sun Temple"] },
  { name: "Varanasi", state: "Uttar Pradesh", category: "Temple", months: [10,11,12,1,2,3], budget: 1, gateway: "Varanasi",
    desc: "One of the oldest living cities with evening Ganga Aarti.", things: ["Kashi Vishwanath Temple","Ganga Aarti at Dashashwamedh Ghat","Sarnath"] },
  { name: "Tirupati", state: "Andhra Pradesh", category: "Temple", months: [9,10,11,12,1,2,3], budget: 1, gateway: "Tirupati",
    desc: "Home to the Sri Venkateswara Temple on Tirumala hills.", things: ["Tirumala Temple","Sri Padmavathi Temple","Kapila Theertham"] },
  { name: "Madurai", state: "Tamil Nadu", category: "Temple", months: [10,11,12,1,2,3], budget: 1, gateway: "Madurai",
    desc: "Meenakshi Amman Temple and its towering gopurams.", things: ["Meenakshi Amman Temple","Thirumalai Nayak Palace","Gandhi Museum"] },
  { name: "Amritsar", state: "Punjab", category: "Temple", months: [10,11,12,1,2,3], budget: 1, gateway: "Amritsar",
    desc: "The Golden Temple, langar and the Wagah Border ceremony.", things: ["Golden Temple","Jallianwala Bagh","Wagah Border"] },
  { name: "Rishikesh", state: "Uttarakhand", category: "Temple", months: [2,3,4,9,10,11], budget: 1, gateway: "Rishikesh",
    desc: "Yoga capital by the Ganga with ashrams and river rafting.", things: ["Laxman Jhula","Ganga Aarti at Triveni Ghat","River rafting"] },
  { name: "Jaipur", state: "Rajasthan", category: "Heritage", months: [10,11,12,1,2,3], budget: 2, gateway: "Jaipur",
    desc: "The Pink City with forts, palaces and bazaars.", things: ["Amber Fort","Hawa Mahal","City Palace"] },
  { name: "Agra", state: "Uttar Pradesh", category: "Heritage", months: [10,11,12,1,2,3], budget: 1, gateway: "Agra",
    desc: "Home to the Taj Mahal and Mughal-era monuments.", things: ["Taj Mahal","Agra Fort","Fatehpur Sikri"] },
  { name: "Hampi", state: "Karnataka", category: "Heritage", months: [10,11,12,1,2], budget: 1, gateway: "Hospet",
    desc: "UNESCO ruins of the Vijayanagara empire among boulders.", things: ["Virupaksha Temple","Vittala Temple","Hampi Bazaar"] },
  { name: "Udaipur", state: "Rajasthan", category: "Heritage", months: [9,10,11,12,1,2,3], budget: 2, gateway: "Udaipur",
    desc: "The City of Lakes with palaces and sunset boat rides.", things: ["City Palace","Lake Pichola boat ride","Saheliyon Ki Bari"] },
  { name: "Kaziranga", state: "Assam", category: "Nature", months: [11,12,1,2,3,4], budget: 2, gateway: "Guwahati",
    desc: "Home of the one-horned rhinoceros, a UNESCO World Heritage Site.", things: ["Jeep safari","Elephant safari","Bird watching"] },
  { name: "Alleppey Backwaters", state: "Kerala", category: "Nature", months: [10,11,12,1,2,3], budget: 2, gateway: "Alappuzha",
    desc: "Houseboat cruises through calm palm-lined canals.", things: ["Houseboat stay","Vembanad Lake","Kuttanad village life"] },
  { name: "Jim Corbett", state: "Uttarakhand", category: "Nature", months: [11,12,1,2,3,4,5,6], budget: 2, gateway: "Ramnagar",
    desc: "India's oldest national park, known for tiger safaris.", things: ["Jeep safari","Corbett Falls","Garjia Temple"] },
  { name: "Valley of Flowers", state: "Uttarakhand", category: "Nature", months: [7,8,9], budget: 2, gateway: "Joshimath",
    desc: "Alpine meadows blooming in the monsoon, a trekker's delight.", things: ["Valley trek","Hemkund Sahib","Ghangaria village"] }
];

const CATEGORY_STYLE = {
  Mountain: { emoji: "⛰️", color: "linear-gradient(135deg,#475569,#0ea5e9)" },
  Beach:    { emoji: "🏖️", color: "linear-gradient(135deg,#0891b2,#38bdf8)" },
  Temple:   { emoji: "🛕", color: "linear-gradient(135deg,#c2410c,#f59e0b)" },
  Heritage: { emoji: "🏰", color: "linear-gradient(135deg,#9a3412,#d97706)" },
  Nature:   { emoji: "🌿", color: "linear-gradient(135deg,#15803d,#65a30d)" }
};
const BUDGET_LABEL = { 1: "Low budget", 2: "Medium budget", 3: "High budget" };

/* ---------- HELPERS ---------- */
const $ = (id) => document.getElementById(id);
const slug = (s) => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function cardHTML(p, extra = "") {
  const st = CATEGORY_STYLE[p.category];
  return `
    <div class="card" data-name="${p.name}">
      <div class="card-top" style="background:${st.color}">${st.emoji}</div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <span class="tag">${p.state}</span><span class="tag">${p.category}</span>
        <p>${p.desc}</p>
        ${extra}
      </div>
    </div>`;
}

function bindCards(container) {
  container.querySelectorAll(".card").forEach((c) =>
    c.addEventListener("click", () => openModal(c.dataset.name))
  );
}

/* ---------- EXPLORE ---------- */
let activeCategory = "";

function renderPlaces() {
  const q = $("searchBox").value.toLowerCase().trim();
  const state = $("stateSelect").value;
  const list = PLACES.filter((p) =>
    (!activeCategory || p.category === activeCategory) &&
    (!state || p.state === state) &&
    (!q || p.name.toLowerCase().includes(q) || p.state.toLowerCase().includes(q))
  );
  $("resultCount").textContent = list.length + " place(s) found";
  $("placeGrid").innerHTML = list.length
    ? list.map((p) => cardHTML(p)).join("")
    : "<p>No places match your filters. Try a different state or category.</p>";
  bindCards($("placeGrid"));
}

function initExplore() {
  [...new Set(PLACES.map((p) => p.state))].sort().forEach((s) => {
    const o = document.createElement("option");
    o.value = o.textContent = s;
    $("stateSelect").appendChild(o);
  });
  $("stateSelect").addEventListener("change", renderPlaces);
  $("searchBox").addEventListener("input", renderPlaces);
  $("categoryChips").addEventListener("click", (e) => {
    if (!e.target.classList.contains("chip")) return;
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    e.target.classList.add("active");
    activeCategory = e.target.dataset.cat;
    renderPlaces();
  });
  renderPlaces();
}

/* ---------- SUGGEST ---------- */
function initSuggest() {
  MONTHS.forEach((m, i) => {
    const o = document.createElement("option");
    o.value = i + 1;
    o.textContent = m;
    $("sgMonth").appendChild(o);
  });
  $("sgMonth").value = new Date().getMonth() + 1;

  $("suggestForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const cat = $("sgCategory").value;
    const month = Number($("sgMonth").value);
    const budget = Number($("sgBudget").value);

    // Score each place: category match is required, then month and budget fit
    const scored = PLACES.filter((p) => p.category === cat).map((p) => {
      let score = 0;
      const reasons = [];
      if (p.months.includes(month)) { score += 2; reasons.push("good in " + MONTHS[month - 1]); }
      if (p.budget <= budget) { score += 1; reasons.push("fits your budget"); }
      return { p, score, reasons };
    }).sort((a, b) => b.score - a.score);

    const grid = $("suggestGrid");
    if (!scored.length) { grid.innerHTML = "<p>No suggestions found.</p>"; return; }
    grid.innerHTML = scored.slice(0, 4).map(({ p, reasons }) =>
      cardHTML(p, `<p class="why">${reasons.length ? "✔ " + reasons.join(" • ") : "Worth a visit, but not ideal for these choices"}</p>`)
    ).join("");
    bindCards(grid);
  });
}

/* ---------- MODAL ---------- */
function openModal(name) {
  const p = PLACES.find((x) => x.name === name);
  const best = p.months.map((m) => MONTHS[m - 1].slice(0, 3)).join(", ");
  $("modalBody").innerHTML = `
    <h2>${CATEGORY_STYLE[p.category].emoji} ${p.name}</h2>
    <span class="tag">${p.state}</span><span class="tag">${p.category}</span><span class="tag">${BUDGET_LABEL[p.budget]}</span>
    <p style="margin-top:12px">${p.desc}</p>
    <p><strong>Best time:</strong> ${best}</p>
    <p><strong>Top things to do:</strong></p>
    <ul>${p.things.map((t) => `<li>${t}</li>`).join("")}</ul>
    <div class="modal-actions">
      <button class="btn secondary" id="mBook">Plan travel here</button>
    </div>`;
  $("mBook").addEventListener("click", () => {
    $("toCity").value = p.gateway;
    closeModal();
    $("book").scrollIntoView();
    $("fromCity").focus();
  });
  $("modal").classList.remove("hidden");
}
function closeModal() { $("modal").classList.add("hidden"); }

/* ---------- BOOKING ---------- */
function initBooking() {
  const cities = [...new Set(["Delhi","Mumbai","Bengaluru","Chennai","Kolkata","Hyderabad","Pune","Lucknow","Jaipur","Chandigarh",
    ...PLACES.map((p) => p.gateway)])].sort();
  $("cityList").innerHTML = cities.map((c) => `<option value="${c}">`).join("");

  $("btnBus").addEventListener("click", () => {
    const from = $("fromCity").value, to = $("toCity").value;
    if (!from || !to) { alert("Please enter both From and To cities."); return; }
    // RedBus route URL format: /bus-tickets/from-to
    window.open(REDBUS_BASE + slug(from) + "-to-" + slug(to), "_blank");
  });

  $("btnTrain").addEventListener("click", () => {
    const from = $("fromCity").value, to = $("toCity").value;
    if (!from || !to) { alert("Please enter both From and To cities."); return; }
    window.open(RAILONE_URL, "_blank");
  });
}

/* ---------- INIT ---------- */
$("closeModal").addEventListener("click", closeModal);
$("modal").addEventListener("click", (e) => { if (e.target.id === "modal") closeModal(); });
initExplore();
initSuggest();
initBooking();
