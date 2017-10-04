# Gemini Charts 
#### PrettySights & LeasJ

### Setup and run
command line (from project directory):
```
npm install

npm start #
```

Make changes in ```src/```
Page style changes in ``` public/index.html ```

### src/
+   **Chart Design, Features** - CandleStickChartWithMACDIndicator.js
+   **Data, Parsing** - utils.js
+   **Live updating settings** - updatingDataWrapper.js

### Active
Data live from https://api.gemini.com/v1/trades/btcusd in json format. This pulls once on load 
needs more work to display more intuitive information edit (``` CandleStickChartWithMACDIndicator.js ```).  

### Previous
Data stored as javascript literal string in ```src/utils.js``` in tsv (tab separated values) format. This needs to be moved to the Gemini API tracking live prices. The ```getData``` function uses ```promiseMSFT2``` for the data. We want to move to modifying ```promiseMSFT``` to ```promiseMSFT3``` with the third version Gemini API capable. (We will need to change the parsing functions from tsv format and swap for built in JSON formats)

### Bugs
Data loads 50 records on load but does not continue to request new data 2017-10-3


#### PrettySights & LeasJ