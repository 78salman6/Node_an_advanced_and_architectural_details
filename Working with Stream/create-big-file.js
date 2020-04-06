const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for(let i=0; i<=5e6; i++) {
    file.write('Salman Kashif just focus on your career. You have a good job respect that. Just focus on career, money and your family. All other things are temporary. Only your family has true love for you.')
}

file.end();