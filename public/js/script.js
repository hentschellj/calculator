(function() {
  'use strict';

  $('#calc .digit').click(function() {
    const btnValue = $(this).data('value');
    console.log(btnValue);
  });

  $('#calc .operator-group .btn').click(function() {
    console.log('Operator clicked');
  });
})();