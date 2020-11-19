const express = require('express'),
      app     = express();
      path    = require('path');
      PORT    = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`The app is running on http://localhost:${PORT}`);
})
