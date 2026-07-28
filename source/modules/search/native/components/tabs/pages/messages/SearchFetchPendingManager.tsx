// Module ID: 15497
// Function ID: 118105
// Name: SearchFetchPendingManager
// Dependencies: [7, 6, 31, 11428, 5485, 2]
// Exports: useSearchFetchPendingManager

// Module 15497 (SearchFetchPendingManager)
import _classCallCheck from "_classCallCheck";
import result from "result";
import importDefaultResult from "_defineProperties";

class SearchFetchPendingManager {
  constructor() {
    self = this;
    tmp = c2(this, SearchFetchPendingManager);
    set = new Set();
    this.pending = set;
    this.add = (arg0) => {
      const pending = self.pending;
      pending.add(arg0);
    };
    this.remove = (arg0) => {
      const pending = self.pending;
      pending.delete(arg0);
    };
    this.has = (arg0) => {
      const pending = self.pending;
      return pending.has(arg0);
    };
    this.flush = (searchContext, tab) => {
      if (self.has(tab)) {
        if (obj.fetchNextMessages(searchContext, tab)) {
          self.remove(tab);
        }
        obj = self(outer1_1[3]);
      }
    };
    this.reset = () => {
      self.pending = new Set();
    };
    return;
  }
}
let closure_4 = require("_defineProperties")(SearchFetchPendingManager);
const result = require("result").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchFetchPendingManager.tsx");

export const useSearchFetchPendingManager = function useSearchFetchPendingManager(searchContext) {
  const importDefault = searchContext;
  const tmp = importDefault(5485)(() => new outer1_4());
  const dependencyMap = tmp;
  const items = [searchContext, tmp];
  const effect = React.useEffect(() => searchContext(tmp[3]).subscribeTextInputValue(searchContext, (arg0, arg1) => {
    if (arg1 !== arg0) {
      outer1_1.reset();
    }
  }), items);
  return tmp;
};
