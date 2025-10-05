import fs from "fs";

const FILE = "index.html";

// Read the page
let html = fs.readFileSync(FILE, "utf8");

// Find the section to update
const rx = /(<!-- AUTO-SECTION:START -->)([\s\S]*?)(<!-- AUTO-SECTION:END -->)/;
const now = new Date().toISOString().replace("T", " ").slice(0, 16);

// Create the new content
const newBlock = `
<p id="auto-message">Last auto update: ${now} UTC</p>
<ul style="list-style:none;padding:0">
  <li>✨ Auto improvement check complete.</li>
  <li>⚡ Ready for future AI integration.</li>
</ul>
`.trim();

// Replace content between the tags
html = html.replace(rx, `$1\n  ${newBlock}\n  $3`);

fs.writeFileSync(FILE, html, "utf8");
console.log("✅ Auto-update done at", now);
