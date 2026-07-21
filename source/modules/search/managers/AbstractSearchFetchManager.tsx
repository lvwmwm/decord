// Module ID: 10079
// Function ID: 78039
// Name: AbstractSearchFetchManager
// Dependencies: []

// Module 10079 (AbstractSearchFetchManager)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class AbstractSearchFetchManager {
    constructor() {
      tmp = AbstractSearchFetchManager(this, AbstractSearchFetchManager);
      map = new Map();
      this.searchFetchers = map;
      return;
    }
  }
  let closure_0 = AbstractSearchFetchManager;
  let obj = {
    key: "cleanUp",
    value(arg0) {
      this.cancel(arg0);
      this.delete(arg0);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "cancel",
    value(arg0) {
      const searchFetchers = this.searchFetchers;
      const value = searchFetchers.get(arg0);
      if (null != value) {
        value.cancel();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "delete",
    value(arg0) {
      const searchFetchers = this.searchFetchers;
      searchFetchers.delete(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "get",
    value(arg0) {
      const searchFetchers = this.searchFetchers;
      return searchFetchers.get(arg0);
    }
  };
  items[4] = {
    key: "set",
    value(arg0, arg1) {
      const searchFetchers = this.searchFetchers;
      const result = searchFetchers.set(arg0, arg1);
    }
  };
  return callback(AbstractSearchFetchManager, items);
}();
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/search/managers/AbstractSearchFetchManager.tsx");

export const AbstractSearchFetchManager = tmp2;
