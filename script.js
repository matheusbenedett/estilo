document.addEventListener("DOMContentLoaded", function(event){
  const orderBumps = document.querySelectorAll('.bump-details')
  
  orderBumps.forEach(item => {
    item.addEventListener('click', () => {
      const input = item.querySelector('input');
      if (input) {
        input.click();
      }
    });
  });
});


