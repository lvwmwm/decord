// Module ID: 4227
// Function ID: 37035
// Name: pollConnectionStats
// Dependencies: []
// Exports: default

// Module 4227 (pollConnectionStats)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/packages/media-engine/pollConnectionStats.tsx");

export default function pollConnectionStats(on) {
  const arg1 = on;
  let closure_1 = false;
  on.on(arg1(closure_1[1]).MediaEngineEvent.Destroy, () => {
    let closure_1 = true;
    return true;
  });
  const tmp2 = () => {
    let closure_0 = tmp2(async () => {
      let items;
      if (!closure_1) {
        items = [];
        items.eachConnection((connection) => items.push({ connection, stats: connection.emitStats() }));
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
        items.emit(items(closure_1[1]).MediaEngineEvent.ConnectionStats, items1);
        const _setTimeout = setTimeout;
        const timerId = setTimeout(closure_2, items(closure_1[2]).STATS_INTERVAL);
      }
    });
    return function() {
      return callback(...arguments);
    };
  }();
  let closure_2 = tmp2;
  const timerId = setTimeout(tmp2, arg1(closure_1[2]).STATS_INTERVAL);
};
