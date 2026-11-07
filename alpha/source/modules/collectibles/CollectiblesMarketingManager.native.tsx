// Module ID: 16712
// Function ID: 16713
// Name: CollectiblesMarketingManager
// Dependencies: [5754, 2120, 572, 16713, 7795, 7840, 2]

// Module 16712 (CollectiblesMarketingManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7795 */;
import CollectiblesMarketingCacheExperiment from "CollectiblesMarketingCacheExperiment" /* 16713 */;
import DevSettingsStore from "DevSettingsStore" /* 5754 */;
import LifecycleManager from "LifecycleManager" /* 2120 */;
import size from "module_2" /* 2 */;

class CollectiblesMarketingManager extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      const value = DevSettingsStore.get("shop_include_unpublished");
      const obj = CollectiblesMarketingCacheExperiment;
      const collectiblesMarketingCacheTTL = obj.getCollectiblesMarketingCacheTTL("CollectiblesMarketingManager");
      let result = null != collectiblesMarketingCacheTTL;
      if (result) {
        const obj2 = { ttlMs: collectiblesMarketingCacheTTL };
        const tmp2Result = CollectiblesActionCreators;
        result = tmp2Result.restoreCollectiblesMarketingsFromCache(obj2);
      }
      if (!result) {
        const fetchCollectiblesMarketings = CollectiblesActionCreators.fetchCollectiblesMarketings;
        CollectiblesActionCreators;
        const CollectiblesMarketingReleaseType = tmp2(tmp3[5]).CollectiblesMarketingReleaseType;
        const obj3 = { release: value ? CollectiblesMarketingReleaseType.BETA : CollectiblesMarketingReleaseType.PROD };
        const collectiblesMarketings = fetchCollectiblesMarketings(obj3);
      }
    };
    return applyArgumentsResult;
  }
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
  }
}
const prototype = CollectiblesMarketingManager.prototype;
const collectiblesMarketingManager = new CollectiblesMarketingManager();
let result = size.fileFinishedImporting("modules/collectibles/CollectiblesMarketingManager.native.tsx");

export default collectiblesMarketingManager;
