## Theory :

- What is `Emmet`?
Emmet helps you write HTML/CSS faster using simple shortcuts. Just type a small abbreviation and press Tab to expand.

- What is `CDN`? Why do we `use` it?
CDN stands for Content Delivery Network.
It is a network of servers located in different parts of the world that deliver content (like images, videos, CSS, JavaScript files) to users faster and more reliably.
We use a CDN to:

✅ Speed up website loading

Content is served from the server closest to the user, reducing load time.

✅ Reduce server load

Instead of all users hitting your main server, CDNs share the traffic.

✅ Improve availability

If one server goes down, another can serve the content.

✅ Save bandwidth

CDNs often compress files or cache them, saving data.

✅ Deliver static assets quickly

Like Bootstrap, jQuery, or fonts — we can link them via CDN instead of downloading locally.

- Why is `React known as React`?
React is called "React" because the UI reacts to changes in data automatically.
It focuses on building dynamic and responsive interfaces easily.

- What is `crossorigin in script tag`?
crossorigin in <script> tag tells the browser how to handle security and credentials when loading scripts from another domain.

- What is difference between `React and ReactDOM`?
🧱 React is the brain — it lets you build components, manage state, and structure UI.
🏗️ ReactDOM is the worker — it takes those components and renders them into the real DOM (browser screen).
🔹 React = Build your app
🔹 ReactDOM = Show your app in the browser

- What is difference between `react.development.js` and `react.production.js` files via CDN?
🧪 1. react.development.js
Used while building or developing the app

✅ Features:

Has helpful warnings, errors, and console messages

Easier to debug

Slower (because of extra checks)

🚀 2. react.production.js
Used when deploying to live website (production)

✅ Features:

No debug messages or warnings

Faster and optimized

Smaller file size