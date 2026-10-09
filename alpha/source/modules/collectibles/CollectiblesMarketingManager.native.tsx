// Module ID: 14737
// Function ID: 14738
// Name: CollectiblesMarketingManager
// Dependencies: [5090, 2002, 584, 7256, 7304, 2]

// Module 14737 (CollectiblesMarketingManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7256 */;
import CollectiblesMarketingReleaseType2 from "CollectiblesMarketingReleaseType" /* 7304 */;
import DevSettingsStore from "DevSettingsStore" /* 5090 */;
import LifecycleManager from "LifecycleManager" /* 2002 */;
import size from "module_2" /* 2 */;

class CollectiblesMarketingManager extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      const value = DevSettingsStore.get("shop_include_unpublished");
      const fetchCollectiblesMarketings = CollectiblesActionCreators.fetchCollectiblesMarketings;
      CollectiblesActionCreators;
      const CollectiblesMarketingReleaseType = CollectiblesMarketingReleaseType2.CollectiblesMarketingReleaseType;
      const obj = { release: value ? CollectiblesMarketingReleaseType.BETA : CollectiblesMarketingReleaseType.PROD };
      const collectiblesMarketings = fetchCollectiblesMarketings(obj);
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
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesMarketingManager.native.tsx");

export default collectiblesMarketingManager;
