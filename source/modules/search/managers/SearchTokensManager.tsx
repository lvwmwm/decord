// Module ID: 16699
// Function ID: 16700
// Name: _initialize
// Dependencies: [1995, 5038, 11511, 2]

// Module 16699 (_initialize)
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
  this._unsubscribeIntlLoadingStore = callback(require(11511) /* SearchTokenTypes */.refreshSearchTokens);
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
