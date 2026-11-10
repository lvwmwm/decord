// Module ID: 20045
// Function ID: 20046
// Name: SearchTokensManager
// Dependencies: [2187, 7353, 14153, 2]

// Module 20045 (SearchTokensManager)
import IntlLoaderStore from "IntlLoaderStore" /* 2187 */;
import SearchUtils from "SearchUtils" /* 14153 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7353 */;
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
