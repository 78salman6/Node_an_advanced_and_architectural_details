const dns = require('dns');

// dns.lookup('pluralsight.com', (err, addresss) => {
//     console.log(addresss);
// });

// dns.resolve4('pluralsight.com', (err, addresss) => {
//     console.log(addresss);
// });

// dns.resolve('pluralsight.com', 'A', (err, addresss) => {
//     console.log(addresss);
// });

// dns.resolveMx('pluralsight.com', (err, addresss) => {
//     console.log(addresss);
// });

dns.reverse('35.165.141.199', (err, hostnames) => {
    console.log(hostnames);
});