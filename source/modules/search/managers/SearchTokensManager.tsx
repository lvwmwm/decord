// Module ID: 16313
// Function ID: 16314
// Name: _initialize
// Dependencies: [1947, 5134, 10103, 2]

// Module 16313 (_initialize)
import { subscribeToIntlLoadingSuccess as closure_2 } from "_setAppLocale";
import "initialize";

class SearchTokensManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { USER_SETTINGS_PROTO_UPDATE: require("SearchTokenTypes").refreshSearchTokens, POST_CONNECTION_OPEN: require("SearchTokenTypes").refreshSearchTokens };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const prototype = SearchTokensManager.prototype;
prototype["_initialize"] = function _initialize() {
  this._unsubscribeIntlLoadingStore = callback(require(10103) /* SearchTokenTypes */.refreshSearchTokens);
};
prototype["_terminate"] = function _terminate() {
  const _unsubscribeIntlLoadingStore = this._unsubscribeIntlLoadingStore;
  if (_unsubscribeIntlLoadingStore != null) {
    const result = _unsubscribeIntlLoadingStore();
  }
};
const searchTokensManager = new SearchTokensManager();
let result = require("SearchTokenTypes").fileFinishedImporting("modules/search/managers/SearchTokensManager.tsx");

export default searchTokensManager;
