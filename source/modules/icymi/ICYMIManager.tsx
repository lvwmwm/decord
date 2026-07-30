// Module ID: 13593
// Function ID: 13594
// Name: _initialize
// Dependencies: [8182, 687, 4368, 709, 8183, 2]

// Module 13593 (_initialize)
import "initialize";

const require = arg1;
let c3 = null;
class ICYMIManager extends tmp2 {
}
const prototype = ICYMIManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = importDefault(709).subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  importDefault(709).unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  let obj = require(8183) /* apexExperiment */;
  if (obj.getICYMIEnabled("ICYMIManager")) {
    obj = { isInitialLoad: null };
    obj[0] = true;
    const dehydrated = importDefault(8182).fetchDehydrated(obj);
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
    }
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      let dehydrated = callback(table[0]).fetchDehydrated({ isInitialLoad: false });
      if (null != timeout) {
        let _clearTimeout = clearTimeout;
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        let dehydrated = callback(table[0]).fetchDehydrated({ isInitialLoad: false });
        if (null != timeout) {
          let _clearTimeout = clearTimeout;
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          let dehydrated = callback(table[0]).fetchDehydrated({ isInitialLoad: false });
          if (null != timeout) {
            let _clearTimeout = clearTimeout;
            clearTimeout(timeout);
          }
          timeout = setTimeout(() => {
            let dehydrated = callback(table[0]).fetchDehydrated({ isInitialLoad: false });
            if (null != timeout) {
              let _clearTimeout = clearTimeout;
              clearTimeout(timeout);
            }
            timeout = setTimeout(() => { ... }, 15 * callback(table[1]).Millis.MINUTE);
          }, 15 * callback(table[1]).Millis.MINUTE);
        }, 15 * callback(table[1]).Millis.MINUTE);
      }, 15 * callback(table[1]).Millis.MINUTE);
    }, 15 * tmp2(687).Millis.MINUTE);
    let tmp2Result = tmp2(8182);
    const guildChannelScores = tmp2Result.getGuildChannelScores();
    tmp2Result = tmp2(8182);
    const recommendedGuilds = tmp2Result.getRecommendedGuilds();
    const obj2 = importDefault(8182);
  }
};
const iCYMIManager = new ICYMIManager();
const result = require("initialize").fileFinishedImporting("modules/icymi/ICYMIManager.tsx");

export default iCYMIManager;
