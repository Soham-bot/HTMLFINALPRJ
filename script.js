document.getElementById('referBtn').addEventListener('click', () => {
  const referralLink = 'https://isu.ac.in/btech-cse/refer/';
  alert('Your referral link: ' + referralLink);
});

document.getElementById('referralForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const relationship = document.getElementById('relationship').value;

  if (!name || !mobile || !relationship) {
    alert('Please fill in all the fields.');
    return;
  }

  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(mobile)) {
    alert('Please enter a valid 10-digit mobile number.');
    return;
  }

  const successMessage = document.getElementById('successMessage');
  successMessage.style.display = 'block';

  e.target.reset();

  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 5000);
});
document.getElementById('referBtn').addEventListener('click', () => {
  const referralLink = 'https://isu.ac.in/btech-cse/refer/';
  const input = document.getElementById('referralLinkInput');
  const copyBtn = document.getElementById('copyBtn');

  input.value = referralLink;
  copyBtn.style.display = 'inline-block';

  alert('Your referral link has been generated!');
});

document.getElementById('copyBtn').addEventListener('click', () => {
  const input = document.getElementById('referralLinkInput');
  input.select();
  input.setSelectionRange(0, 99999); // for mobile support

  document.execCommand('copy');
  alert('Referral link copied to clipboard!');
});
