// Module ID: 16528
// Function ID: 16529
// Name: SearchFetchPendingManager
// Dependencies: [19, 11821, 5910, 2]
// Exports: useSearchFetchPendingManager

// Module 16528 (SearchFetchPendingManager)
import reactDefault from "react" /* 5910 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11821 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, set;

function SearchFetchPendingManager() {
  const obj = Object.create(new.target.prototype);
  obj.pending = new Set();
  obj.add = function add(arg0) {
    const pending = obj.pending;
    pending.add(arg0);
  };
  obj.remove = function remove(arg0) {
    const pending = obj.pending;
    pending.delete(arg0);
  };
  obj.has = function has(arg0) {
    const pending = obj.pending;
    return pending.has(arg0);
  };
  obj.flush = function flush(searchContext, tab) {
    if (obj.has(tab)) {
      const obj2 = searchContext(closure_1[1]);
      if (obj2.fetchNextMessages(searchContext, tab)) {
        obj.remove(tab);
      }
    }
  };
  obj.reset = function reset() {
    obj.pending = new Set();
    new Set();
  };
  new Set();
  return obj;
}
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchFetchPendingManager.tsx");

export const useSearchFetchPendingManager = function useSearchFetchPendingManager(searchContext) {
  let closure_1;
  importDefault = searchContext;
  const tmp = reactDefault(function() {
    if (typeof closure_3 === "function") {
      const obj = Object.create(closure_3.prototype);
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      obj.pending = set;
      obj.add = function add(arg0) {
        const pending = obj.pending;
        pending.add(arg0);
      };
      obj.remove = function remove(arg0) {
        const pending = obj.pending;
        pending.delete(arg0);
      };
      obj.has = function has(arg0) {
        const pending = obj.pending;
        return pending.has(arg0);
      };
      obj.flush = function flush(searchContext, tab) {
        if (obj.has(tab)) {
          const obj2 = searchContext(closure_1[1]);
          if (obj2.fetchNextMessages(searchContext, tab)) {
            obj.remove(tab);
          }
        }
      };
      obj.reset = function reset() {
        obj.pending = new Set();
        new Set();
      };
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  dependencyMap = tmp;
  const items = [searchContext, tmp];
  const effect = react.useEffect(() => {
    const obj = SearchPlatformUtilsDefault;
    return obj.subscribeTextInputValue(searchContext, (arg0, arg1) => {
      if (arg1 !== arg0) {
        navigation.reset();
      }
    });
  }, items);
  return tmp;
};
