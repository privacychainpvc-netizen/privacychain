// Open modal when clicking "Read the Redacted Whitepaper"
document.getElementById('redacted-btn').addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('modal').classList.remove('hidden');
});

// Close modal
document.getElementById('close').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden');
});

// Easter Egg: type "pvc" on keyboard to unlock secret modal
let seq = '';
window.addEventListener('keydown', e => {
  seq += e.key.toLowerCase();
  
  if (seq.endsWith('pvc')) {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    
    // Change text for the easter egg
    modal.querySelector('h3').innerText = 'You tried. Well done.';
    modal.querySelector('p').innerText = 'Privacy cannot be reached. This is intended.';
    
    seq = '';
  }

  // Limit memory in the sequence
  if (seq.length > 10) seq = seq.slice(-10);
});
