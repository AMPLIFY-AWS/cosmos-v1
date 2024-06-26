const childProcess = require('child_process');
const pythonProcess = childProcess.spawn('python', ['your_python_script.py']);
pythonProcess.stdout.on('data', (data) => {
 // Use the data in your JavaScript code
});
pythonProcess.stderr.on('data', (data) => {
 console.error(data);
});
pythonProcess.on('close', (code) => {
 if (code !== 0) {
   console.error(`Python process exited with code ${code}`);
 }
});