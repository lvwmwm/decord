// Module ID: 14829
// Function ID: 14830
// Name: CollectiblesMarketingManager
// Dependencies: [4757, 1986, 577, 7788, 7837, 2]

// Module 14829 (CollectiblesMarketingManager)
import DispatcherDefault from "Dispatcher" /* 577 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7788 */;
import CollectiblesMarketingReleaseType2 from "CollectiblesMarketingReleaseType" /* 7837 */;
import DevSettingsStore from "DevSettingsStore" /* 4757 */;
import LifecycleManager from "LifecycleManager" /* 1986 */;

require = fn;
class CollectiblesMarketingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      value = DevSettingsStore.get("shop_include_unpublished");
      const CollectiblesMarketingReleaseType = CollectiblesMarketingReleaseType2.CollectiblesMarketingReleaseType;
      const collectiblesMarketings = CollectiblesActionCreators.fetchCollectiblesMarketings({ release: value ? CollectiblesMarketingReleaseType.BETA : CollectiblesMarketingReleaseType.PROD });
    };
    return applyArgumentsResult;
  }
}
const prototype = CollectiblesMarketingManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = DispatcherDefault.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
const collectiblesMarketingManager = new CollectiblesMarketingManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesMarketingManager.native.tsx");

export default collectiblesMarketingManager;
