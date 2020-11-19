(function() {
  'use strict';

  const displayValue = 0;

  $('#calc .btn').click(function() {
    const btnValue = $(this).data('value');
    if (btnValue === '=') {
      processEquation();
    } else {
      updateDisplay(btnValue);
    }
  });

  const processEquation = function() {
    // return result;
  }

  const updateDisplay = function(value) {
    $('#calc .display').text(value);
  }
})();