const lotion = require('lotion');
const genesis = require.resolve("./genesis.json");

const app = lotion({
    initialState: {
        foods: [ {sensor: "DHT11", temp: "57.3", time: "12:48 PM"}]
    },
    devMode: true,
    peers: [],
    logTendermint: false,
    createEmptyBlocks: false,
    p2pPort: 46658,
    tendermintPort: 46657
});

app.use(function (state, tx) {
    if (typeof tx.sensor === 'string' && typeof tx.temp === 'string' && typeof tx.time === 'string') {
            state.foods.push({sensor: tx.sensor, temp: tx.temp, time: tx.time});
    }
});

app.listen(process.env.PORT || 3000).then(genesis => {
    console.log("BLOCKCHAIN STARTED. WAITING FOR DA FOOD");
   console.log(genesis.GCI, genesis.chain_id);
});
