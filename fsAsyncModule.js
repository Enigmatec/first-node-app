const file = require('fs');

file.readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) console.log('error')
    const first = result;

    file.readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err) console.log('error')
        const second = result;

        file.writeFile('./content/result.txt', `Thia result: ${first}, ${second}`, (err, result) => {
            if(err) console.log('error writing file');
        })
    })
})