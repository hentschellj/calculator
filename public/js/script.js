(function() {
  'use strict';

  let displayValue = 0;

  $('#calc .btn').click(function() {
    const btnValue = $(this).data('value');
    if (btnValue === '=') {
      processEquation();
    } else {
      if ((displayValue[displayValue.length-1] === '+') ||
          (displayValue[displayValue.length-1] === '-') ||
          (displayValue[displayValue.length-1] === '*') || 
          (displayValue[displayValue.length-1] === '/')) {
        displayValue = displayValue.substr(0, displayValue.length-1)
      }
      updateDisplay(btnValue, false);
    }
  });

  const processEquation = function() {
    // return result;
  }

  const updateDisplay = function(value, overwrite) {
    if (overwrite === true) {
      displayValue = value;
    } else {
      displayValue += value;
    }
    $('#calc .display').text(displayValue);
  }
})();