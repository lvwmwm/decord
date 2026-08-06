// Module ID: 13724
// Function ID: 13725
// Name: _initialize
// Dependencies: [4284, 4463, 709, 6921, 6971, 2]

// Module 13724 (_initialize)
import getUserAgnosticState from "getUserAgnosticState";
import "initialize";

const require = arg1;
class CollectiblesMarketingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      const value = getUserAgnosticState.get("shop_include_unpublished");
      let obj = callback(6921);
      const CollectiblesMarketingReleaseType = callback(6971).CollectiblesMarketingReleaseType;
      obj = { release: value ? CollectiblesMarketingReleaseType.BETA : CollectiblesMarketingReleaseType.PROD };
      const collectiblesMarketings = obj.fetchCollectiblesMarketings(obj);
    };
    return applyArgumentsResult;
  }
}
const prototype = CollectiblesMarketingManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = importDefault(709).subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  importDefault(709).unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
const collectiblesMarketingManager = new CollectiblesMarketingManager();
const result = require("dispatcher").fileFinishedImporting("modules/collectibles/CollectiblesMarketingManager.native.tsx");

export default collectiblesMarketingManager;
