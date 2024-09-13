const {readFile, writeFile, appendFile, stat} = require('fs')

readFile('./textfiles/third.txt', 'utf8',(err, result) =>
{
    if(err){
        console.log(err)
        return
    }
    const first = result
    console.log(first)
    readFile('./textfiles/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        console.log(second)
        writeFile('./textfiles/fourth.txt', `Here is the result: ${first}, ${second}`, (err, result) =>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
}
)
