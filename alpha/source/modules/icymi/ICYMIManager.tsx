// Module ID: 15991
// Function ID: 15992
// Name: ICYMIManager
// Dependencies: [8921, 8923, 1088, 2122, 572, 8926, 2]

// Module 15991 (ICYMIManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import DurationsDefault from "Durations" /* 1088 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8923 */;
import ICYMIExperiment from "ICYMIExperiment" /* 8926 */;
import LifecycleManager from "LifecycleManager" /* 2122 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const WaterwheelsDiscoverExperiment = tmp(8921);
let closure_3 = null;
class ICYMIManager extends LifecycleManager {
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
  }
  handlePostConnectionOpen() {
    let timeout;
    const f109361 = () => {
      let timeout;
      const obj = WaterwheelsDiscoverExperiment;
      if (!obj.getWaterwheelsDiscoverEnabled("ICYMIManager")) {
        const obj3 = { isInitialLoad: false };
        const obj2 = ICYMIActionCreatorsDefault;
        const dehydrated = obj2.fetchDehydrated(obj3);
      }
      if (null != timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
      }
      timeout = setTimeout(f109361, 15 * require("Durations").Millis.MINUTE);
    };
    const tmp = require;
    let obj = ICYMIExperiment;
    if (obj.getICYMIEnabled("ICYMIManager")) {
      const tmpResult = WaterwheelsDiscoverExperiment;
      if (!tmpResult.getWaterwheelsDiscoverEnabled("ICYMIManager")) {
        let obj3 = ICYMIActionCreatorsDefault;
        let obj2 = { isInitialLoad: true };
        let dehydrated = obj3.fetchDehydrated(obj2);
      }
      if (null != timeout) {
        let _clearTimeout = clearTimeout;
        clearTimeout(timeout);
      }
      const _setTimeout = setTimeout;
      timeout = setTimeout(f109361, 15 * DurationsDefault.Millis.MINUTE);
      const obj5 = ICYMIActionCreatorsDefault;
      const guildChannelScores = obj5.getGuildChannelScores();
      const obj6 = ICYMIActionCreatorsDefault;
      const recommendedGuilds = obj6.getRecommendedGuilds();
    }
  }
}
const prototype = ICYMIManager.prototype;
const iCYMIManager = new ICYMIManager();
const result = size.fileFinishedImporting("modules/icymi/ICYMIManager.tsx");

export default iCYMIManager;
