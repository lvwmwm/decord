// Module ID: 20390
// Function ID: 20391
// Name: SearchTokensManager
// Dependencies: [2190, 7882, 14747, 2]

// Module 20390 (SearchTokensManager)
import IntlLoaderStore from "IntlLoaderStore" /* 2190 */;
import SearchUtils from "SearchUtils" /* 14747 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7882 */;
import size from "module_2" /* 2 */;

const React2 = IntlLoaderStore.subscribeToIntlLoadingSuccess;
class SearchTokensManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { USER_SETTINGS_PROTO_UPDATE: SearchUtils.refreshSearchTokens, POST_CONNECTION_OPEN: SearchUtils.refreshSearchTokens };
    ({ USER_SETTINGS_PROTO_UPDATE: SearchUtils.refreshSearchTokens, POST_CONNECTION_OPEN: SearchUtils.refreshSearchTokens });
    return applyArgumentsResult;
  }
  _initialize() {
    this._unsubscribeIntlLoadingStore = closure_2(SearchUtils.refreshSearchTokens);
  }
  _terminate() {
    const _unsubscribeIntlLoadingStore = this._unsubscribeIntlLoadingStore;
    if (_unsubscribeIntlLoadingStore != null) {
      const result = _unsubscribeIntlLoadingStore();
    }
  }
}
const prototype = SearchTokensManager.prototype;
const searchTokensManager = new SearchTokensManager();
let result = size.fileFinishedImporting("modules/search/managers/SearchTokensManager.tsx");

export default searchTokensManager;
