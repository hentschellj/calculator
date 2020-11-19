const express = require('express'),
      app     = express();
      path    = require('path');
      PORT    = process.env.PORT || 4000;

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(PORT, () => {
  console.log(`The app is running on http://localhost:${PORT}`);
})
