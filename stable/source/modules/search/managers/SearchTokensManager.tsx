// Module ID: 17254
// Function ID: 17255
// Name: SearchTokensManager
// Dependencies: [2116, 6540, 11716, 2]

// Module 17254 (SearchTokensManager)
import IntlLoaderStore from "IntlLoaderStore" /* 2116 */;
import SearchUtils from "SearchUtils" /* 11716 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6540 */;
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
