require('dotenv').config();
const sdk = require('api')('@eraser/v1.0#fc5xxr2vljt81n3s');
const fs = require('fs');

// convert file to string
const file = fs.readFileSync('./prompt.txt');
const fileString = file.toString('base64');

sdk.auth('vPGolFMvsWZvpOWor8oP');
sdk.generateDiagramFromPrompt({
  diagramType: 'cloud-architecture-diagram',
  background: false,
  theme: 'light',
  scale: '2',
  returnFile: false,
  text: fileString
})
  .then(({ data }) => {
        console.log(data)
    })
  .catch(err => console.error(err));