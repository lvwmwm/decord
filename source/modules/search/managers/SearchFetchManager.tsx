// Module ID: 10074
// Function ID: 78029
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10074 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let tmp2 = (AbstractSearchFetchManager) => {
  class SearchFetchManager {
    constructor() {
      self = this;
      tmp = closure_2(this, SearchFetchManager);
      obj = closure_5(SearchFetchManager);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SearchFetchManager;
  callback2(SearchFetchManager, AbstractSearchFetchManager);
  const items = [
    {
      key: "create",
      value(arg0) {
        let id;
        let searchQuery;
        let searchType;
        ({ id, searchType, searchQuery } = arg0);
        this.cancel(id);
        const searchFetcherImpl = new SearchFetchManager(closure_1[5]).SearchFetcherImpl(id, searchType, searchQuery);
        const result = this.set(id, searchFetcherImpl);
        return searchFetcherImpl;
      }
    }
  ];
  return callback(SearchFetchManager, items);
}(arg1(dependencyMap[6]).AbstractSearchFetchManager);
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/search/managers/SearchFetchManager.tsx");

export default tmp2;
