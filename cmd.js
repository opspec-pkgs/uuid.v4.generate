const uuidv4 = require('uuid/v4');
const fs = require('fs');

fs.writeFileSync('/uuid', uuidv4());