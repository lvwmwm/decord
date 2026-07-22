// Module ID: 15271
// Function ID: 115276
// Name: SearchFetchPendingManager
// Dependencies: []
// Exports: useSearchFetchPendingManager

// Module 15271 (SearchFetchPendingManager)
let closure_2 = importDefault(dependencyMap[1]);
let closure_3 = importAll(dependencyMap[2]);
class SearchFetchPendingManager {
  constructor() {
    importDefault = this;
    tmp = closure_2(this, SearchFetchPendingManager);
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
        const obj = self(closure_1[3]);
      }
    };
    this.reset = () => {
      self.pending = new Set();
    };
    return;
  }
}
let closure_4 = importDefault(dependencyMap[0])(SearchFetchPendingManager);
const importDefaultResult = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchFetchPendingManager.tsx");

export const useSearchFetchPendingManager = function useSearchFetchPendingManager(searchContext) {
  const importDefault = searchContext;
  const tmp = importDefault(dependencyMap[4])(() => new closure_4());
  const dependencyMap = tmp;
  const items = [searchContext, tmp];
  const effect = React.useEffect(() => arg0(tmp[3]).subscribeTextInputValue(arg0, (arg0, arg1) => {
    if (arg1 !== arg0) {
      navigation.reset();
    }
  }), items);
  return tmp;
};
