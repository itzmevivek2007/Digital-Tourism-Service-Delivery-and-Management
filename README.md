# YatraHub - Digital Tourism Service Delivery and Management

A college web project that helps tourists discover destinations in India, get personalised suggestions, and move directly to booking bus and train tickets through partner platforms.

## Features

- **Explore places** - browse 23 destinations and filter them by state, by category (Mountain, Beach, Temple, Heritage, Nature), or by searching a place or state name.
- **Place details** - click any place to see its description, best months to visit, budget level and top things to do.
- **Suggest Me** - choose what you love (e.g. mountains), the month of travel and your budget. The site ranks matching places by season and budget fit and explains why each was picked.
- **Book Travel** - enter From and To cities (or click "Plan travel here" on a place to auto-fill the destination).
  - **Bus:** opens the RedBus route page for the chosen cities.
  - **Train:** opens the Indian Railways booking service (RailOne/IRCTC) in a new tab.
- Responsive layout that works on desktop and mobile.

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, CSS variables)
- JavaScript (vanilla, no frameworks or libraries)

No backend, database or installation is required.

## Project Structure

```
yatrahub/
├── index.html   # Page structure and sections
├── style.css    # Styling and responsive layout
├── script.js    # Place data, filtering, suggestion logic, booking links
└── README.md    # Project documentation
```

## How to Run

1. Download or copy `index.html`, `style.css` and `script.js` into one folder.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox).

## How It Works

- **Data:** all destinations are stored in the `PLACES` array in `script.js`. Each entry has a name, state, category, best months, budget level (1 low, 2 medium, 3 high), nearest gateway city and a short description.
- **Filtering:** the Explore section re-renders the cards whenever the search text, state dropdown or category chip changes.
- **Suggestion logic:** places in the chosen category are scored. A place gets 2 points if the selected month is in its best months and 1 point if its budget level fits the user's budget. The top 4 are shown.
- **Booking:** city names are converted to URL-friendly text (e.g. "New Delhi" becomes `new-delhi`) and used to build the RedBus route link. Train booking opens the official railway site because the route cannot be prefilled there.

## Customisation

- **Add a place:** add a new object to the `PLACES` array in `script.js`.
- **Change booking links:** edit `REDBUS_BASE` and `RAILONE_URL` at the top of `script.js`.

## Limitations and Future Scope

- Booking is handled by partner websites; this project only redirects to them and does not process tickets or payments.
- Place data is static. A future version could use a database and an admin panel.
- Possible additions: photos and maps for each place, user login, saved/favourite places, hotel booking, weather information, and multi-language support.

## Note

This is an academic project. Booking services belong to their respective owners (RedBus, Indian Railways/IRCTC), and this project is not affiliated with them.
