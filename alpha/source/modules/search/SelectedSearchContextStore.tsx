// Module ID: 12044
// Function ID: 12045
// Name: SelectedSearchContextStore
// Dependencies: [5202, 504, 584, 2]

// Module 12044 (SelectedSearchContextStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import isEqualDefault from "isEqual" /* 5202 */;
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
