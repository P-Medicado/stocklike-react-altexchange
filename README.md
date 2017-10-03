# Gemini Charts ### PrettySights & LeasJ

### Setup and run
command line (from project directory):
```
npm install

npm start #
```

Make changes in ```src/```
Page style changes in ``` public/index.html ```

### src/
    +   **Chart Design, Features** - Chart.js
    +   **Data, Parsing** - utils.js
    +   **Live updating settings** - updatingDataWrapper.js

### Active 
Data stored as javascript literal string in ```src/utils.js``` in tsv (tab separated values) format. This needs to be moved to the Gemini API tracking live prices. The ```getData``` function uses ```promiseMSFT2``` for the data. We want to move to modifying ```promiseMSFT``` to ```promiseMSFT3``` with the third version Gemini API capable. (We will need to change the parsing functions from tsv format and swap for built in JSON formats)

### Bugs
None as of 2017-10-3