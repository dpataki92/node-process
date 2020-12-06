process.stdin.setEncoding('utf8')

process.stdin.on('readable', function() {
  var chunk = process.stdin.read()
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`)
  }
  if (chunk) {
    process.stdout.write(`Length of output: ${chunk.length}`);
  }
})

process.stdin.on('end', () => {
  process.stdout.write('end')
})
