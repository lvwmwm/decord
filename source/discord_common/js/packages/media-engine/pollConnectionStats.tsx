// Module ID: 4235
// Function ID: 37131
// Name: pollConnectionStats
// Dependencies: [5, 4227, 4236, 2]
// Exports: default

// Module 4235 (pollConnectionStats)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
const result = require("STATS_INTERVAL").fileFinishedImporting("../discord_common/js/packages/media-engine/pollConnectionStats.tsx");

export default function pollConnectionStats(on) {
  const _require = on;
  function pollStats(arg0) {
    return _pollStats(...arguments);
  }
  async function _pollStats() {
    let items;
    if (!outer2_1) {
      items = [];
      outer2_0.eachConnection((connection) => items.push({ connection, stats: connection.emitStats() }));
      const items1 = [];
      let num = 0;
      if (0 < items.length) {
        const tmp5 = yield items[num].stats;
        do {
          if (null != tmp5) {
            let obj = { connection: tmp4.connection, stats: tmp5 };
            let arr = items1.push(obj);
          }
          num = num + 1;
        } while (num < items.length);
      }
      outer2_0.emit(callback(4227).MediaEngineEvent.ConnectionStats, items1);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(outer2_2, callback(4236).STATS_INTERVAL);
    }
  }
  const dependencyMap = false;
  on.on(_require(4227).MediaEngineEvent.Destroy, () => {
    let c1 = true;
    return true;
  });
  let timerId = setTimeout(pollStats, _require(4236).STATS_INTERVAL);
};
