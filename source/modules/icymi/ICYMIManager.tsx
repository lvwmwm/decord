// Module ID: 13722
// Function ID: 13723
// Name: _initialize
// Dependencies: [8836, 687, 4463, 709, 8837, 2]

// Module 13722 (_initialize)
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
  let obj = require(8837) /* apexExperiment */;
  if (obj.getICYMIEnabled("ICYMIManager")) {
    obj = { isInitialLoad: null };
    obj[0] = true;
    const dehydrated = importDefault(8836).fetchDehydrated(obj);
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
    let tmp2Result = tmp2(8836);
    const guildChannelScores = tmp2Result.getGuildChannelScores();
    tmp2Result = tmp2(8836);
    const recommendedGuilds = tmp2Result.getRecommendedGuilds();
    const obj2 = importDefault(8836);
  }
};
const iCYMIManager = new ICYMIManager();
const result = require("initialize").fileFinishedImporting("modules/icymi/ICYMIManager.tsx");

export default iCYMIManager;
