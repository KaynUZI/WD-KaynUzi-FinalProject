import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', function() {
  // Initialize popover
  var popoverButton = document.getElementById('popoverButton');
  new bootstrap.Popover(popoverButton);
});