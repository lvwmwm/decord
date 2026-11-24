// Module ID: 13121
// Function ID: 13122
// Name: SelectedSearchContextStore
// Dependencies: [5807, 504, 572, 2]

// Module 13121 (SelectedSearchContextStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import isEqualDefault from "isEqual" /* 5807 */;
import size from "module_2" /* 2 */;

function handleSearchContextUpdate(searchContext) {
  searchContext = searchContext.searchContext;
  if (isEqualDefault(c2, searchContext)) {
    return false;
  } else {
    c2 = searchContext;
  }
}
let c2 = null;
const Store = get_initializedDefault.Store;
class SelectedSearchContextStore extends Store {
  getSelectedSearchContext() {
    return c2;
  }
}
const prototype = SelectedSearchContextStore.prototype;
SelectedSearchContextStore.displayName = "SelectedSearchContextStore";
const obj = {
  SEARCH_AUTOCOMPLETE_INITIALIZE: handleSearchContextUpdate,
  SEARCH_AUTOCOMPLETE_QUERY_UPDATE: handleSearchContextUpdate,
  SEARCH_QUERY_TEXT_CLEAR: function handleSearchQueryTextClear() {
    c2 = null;
  }
};
const selectedSearchContextStore = new SelectedSearchContextStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/search/SelectedSearchContextStore.tsx");

export default selectedSearchContextStore;
