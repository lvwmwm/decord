// Module ID: 10121
// Function ID: 78305
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 10119, 10120, 2]

// Module 10121 (_isNativeReflectConstruct)
import AbstractSearchFetchManager from "AbstractSearchFetchManager";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let tmp2 = ((AbstractSearchFetchManager) => {
  class SearchFetchManager {
    constructor() {
      self = this;
      tmp = outer1_2(this, SearchFetchManager);
      obj = outer1_5(SearchFetchManager);
      tmp2 = outer1_4;
      if (outer1_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
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
        const searchFetcherImpl = new SearchFetchManager(outer1_1[5]).SearchFetcherImpl(id, searchType, searchQuery);
        const result = this.set(id, searchFetcherImpl);
        return searchFetcherImpl;
      }
    }
  ];
  return callback(SearchFetchManager, items);
})(require("AbstractSearchFetchManager").AbstractSearchFetchManager);
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/search/managers/SearchFetchManager.tsx");

export default tmp2;
