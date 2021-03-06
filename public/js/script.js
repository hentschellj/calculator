(function() {
  'use strict';

  let displayValue = 0;

  $('#calc .btn').click(function() {
    const btnValue = $(this).data('value');
    if (btnValue === '=') {
      updateDisplay(processEquation(), true);
    } else if (btnValue === 'reset') {
      updateDisplay('0', true);
    } else {
      if (btnValue === '+' ||
          btnValue === '-' ||
          btnValue === '*' ||
          btnValue === '/') {
        if ((displayValue[displayValue.length-1] === '+') ||
            (displayValue[displayValue.length-1] === '-') ||
            (displayValue[displayValue.length-1] === '*') || 
            (displayValue[displayValue.length-1] === '/')) {
          displayValue = displayValue.substr(0, displayValue.length-1)
        }
      }
      updateDisplay(btnValue, false);
    }
  });

  const processEquation = function() {
    try {
      let result = eval(displayValue);
      return result;
    } catch(e) {
      console.log(e);
      return 'ERROR';
    }
  }

  const updateDisplay = function(value, overwrite) {
    displayValue = displayValue.toString();

    if (overwrite === true) {
      displayValue = value;
    } else {
      if (displayValue === '0' ||
          displayValue === '+' ||
          displayValue === '*' ||
          displayValue === '/' ||
          displayValue === 'ERROR' ||
          displayValue === 'Infinity') {
        displayValue = value;
      } else {
        displayValue += value;
      }
    }
    $('#calc .display').text(displayValue);
  }
})();