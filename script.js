// WARNING: This script simulates data ONLY. No real data fetched.
const targetNum = document.getElementById('targetNum');


function log(msg){ consoleArea.textContent += msg + '\n'; consoleArea.scrollTop = consoleArea.scrollHeight }


function renderChat(){
chatContainer.innerHTML = '';
sampleChat.forEach(c=>{
const el = document.createElement('div'); el.className='chat-item';
el.innerHTML = `<div class=from>${c.from} → ${c.to} <span class=muted style='float:right'>${c.time}</span></div>` +
`<div class=msg>${c.deleted?'<em>deleted message</em>':(c.viewOnce?'<strong>[ViewOnce]</strong> '+(c.media?(' '+c.media):'') : c.text)}</div>`;
chatContainer.appendChild(el);
})
}


function renderGallery(){
gallery.innerHTML = '';
sampleMedia.forEach(m=>{
const d = document.createElement('div'); d.className='thumb';
let label = m.label + '\n' + m.size;
if(m.viewOnce) label = label + ' • ViewOnce';
if(m.hidden) label = label + ' • Hidden';
d.textContent = label;
gallery.appendChild(d);
})
}


// Simulated "long" loader: shows progress quickly but displays "Estimated time: 1:00:00 (simulated)"
function startSimulation(){
resultsArea.style.display='none';
progressBar.style.width='0%'; percentLabel.textContent='0%';
consoleArea.textContent='';
statusText.textContent='Initializing...';
targetNum.textContent = numInput.value || 'unknown';


const steps = [
'Resolving number...','Querying public metadata...','Searching local gallery (simulated)...','Checking WhatsApp backups (simulated)...','Assembling results...'
];


let step=0;
let pct=0;
const interval = setInterval(()=>{
if(pct>=100){
clearInterval(interval);
statusText.textContent='Completed (simulated)';
log('Simulation complete. Displaying mock data.');
// Show results
renderChat(); renderGallery(); resultsArea.style.display='block';
} else {
pct += Math.floor(Math.random()*8)+6; if(pct>100) pct=100;
progressBar.style.width = pct+'%'; percentLabel.textContent = pct+'%';
// rotate messages
log(steps[step%steps.length]); step++;
statusText.textContent='Scanning — ' + (pct) + '%';
}
}, 900); // each tick ~0.9s -> total ~12-16s typical


// Show fake time label
timeLabel.textContent = 'Estimated time: 1:00:00 (simulated)';
}


btn.addEventListener('click', ()=>{
// refuse real hacking — this is a simulation only
const mode = document.getElementById('modeSelect').value;
consoleArea.textContent='[!] This is a har
