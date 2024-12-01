document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    // alert('in js file');
    const radios = document.querySelectorAll('input[name="pricing"]');
  
     // Attach a change event listener to each radio button
  radios.forEach(radio => {
    radio.addEventListener('change', (event) => {
      // Remove 'active' class from all dropdown-grid divs
      const allDropdownGrids = document.querySelectorAll('.dropdown-grid');
      allDropdownGrids.forEach(grid => grid.classList.remove('active'));

      // Find the closest .dropdown-grid div and add 'active' class
      const closestGrid = event.target.closest('.pricing-container').querySelector('.dropdown-grid');
      if (closestGrid) {
        closestGrid.classList.add('active');
      }
    });
  });

  
});