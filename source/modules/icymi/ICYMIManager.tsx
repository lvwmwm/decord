// Module ID: 13816
// Function ID: 13817
// Name: _initialize
// Dependencies: [8919, 687, 4482, 709, 8920, 2]

// Module 13816 (_initialize)
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
  let obj = require(8920) /* apexExperiment */;
  if (obj.getICYMIEnabled("ICYMIManager")) {
    obj = { isInitialLoad: null };
    obj[0] = true;
    const dehydrated = importDefault(8919).fetchDehydrated(obj);
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
    let tmp2Result = tmp2(8919);
    const guildChannelScores = tmp2Result.getGuildChannelScores();
    tmp2Result = tmp2(8919);
    const recommendedGuilds = tmp2Result.getRecommendedGuilds();
    const obj2 = importDefault(8919);
  }
};
const iCYMIManager = new ICYMIManager();
const result = require("initialize").fileFinishedImporting("modules/icymi/ICYMIManager.tsx");

export default iCYMIManager;
