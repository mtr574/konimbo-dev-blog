var fs = require('fs'),
    copyTheseToPublic = ['./index.html', './templates', './style', './script'];
for (var i = 0; i < copyTheseToPublic.length; i++) {
    var read = fs.createReadStream(copyTheseToPublic[i]);
    read.on('error', (err)=>{
      console.log(err);
    });
    var write = fs.createWriteStream('./public/' + copyTheseToPublic[i].substr(2));
    write.on('error', (err)=>{
      console.log(err);
    });
    read.pipe(write);
}