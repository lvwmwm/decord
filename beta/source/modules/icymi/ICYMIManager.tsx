// Module ID: 14386
// Function ID: 14387
// Name: ICYMIManager
// Dependencies: [8029, 1102, 1989, 584, 8030, 2]

// Module 14386 (ICYMIManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8029 */;
import ICYMIExperiment from "ICYMIExperiment" /* 8030 */;
import LifecycleManager from "LifecycleManager" /* 1989 */;
import size from "module_2" /* 2 */;

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
    const f116543 = () => {
      let timeout;
      const obj = ICYMIActionCreatorsDefault;
      const dehydrated = obj.fetchDehydrated({ isInitialLoad: false });
      const tmp = importDefault;
      const tmp2 = dependencyMap;
      if (null != timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
      }
      timeout = setTimeout(f116543, 15 * tmp(tmp2[1]).Millis.MINUTE);
    };
    let tmp = dependencyMap;
    let obj = ICYMIExperiment;
    if (obj.getICYMIEnabled("ICYMIManager")) {
      let tmp2 = importDefault;
      const obj3 = { isInitialLoad: true };
      const obj2 = ICYMIActionCreatorsDefault;
      let dehydrated = obj2.fetchDehydrated(obj3);
      if (null != timeout) {
        let _clearTimeout = clearTimeout;
        clearTimeout(timeout);
      }
      const _setTimeout = setTimeout;
      timeout = setTimeout(f116543, 15 * tmp2(1102).Millis.MINUTE);
      const tmp2Result = tmp2(8029);
      const guildChannelScores = tmp2Result.getGuildChannelScores();
      const tmp2Result2 = tmp2(8029);
      const recommendedGuilds = tmp2Result2.getRecommendedGuilds();
    }
  }
}
const prototype = ICYMIManager.prototype;
const iCYMIManager = new ICYMIManager();
const result = size.fileFinishedImporting("modules/icymi/ICYMIManager.tsx");

export default iCYMIManager;
