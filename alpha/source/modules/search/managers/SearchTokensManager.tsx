// Module ID: 19697
// Function ID: 19698
// Name: SearchTokensManager
// Dependencies: [2189, 7349, 13118, 2]

// Module 19697 (SearchTokensManager)
import IntlLoaderStore from "IntlLoaderStore" /* 2189 */;
import SearchUtils from "SearchUtils" /* 13118 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7349 */;
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
