// Module ID: 15631
// Function ID: 15632
// Name: CollectiblesMarketingManager
// Dependencies: [5198, 2004, 584, 15632, 7598, 7643, 2]

// Module 15631 (CollectiblesMarketingManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7598 */;
import CollectiblesMarketingCacheExperiment from "CollectiblesMarketingCacheExperiment" /* 15632 */;
import DevSettingsStore from "DevSettingsStore" /* 5198 */;
import LifecycleManager from "LifecycleManager" /* 2004 */;
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
