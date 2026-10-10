const sharp = require('sharp');
sharp('assets/icon-only.png').resize(680, 680).extend({ top: 172, bottom: 172, left: 172, right: 172, background: { r: 22, g: 5, b: 39, alpha: 0 } }).toFile('assets/icon-foreground.png').then(function () { console.log('ok'); });
