// Module ID: 10083
// Function ID: 78109
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10083 (_isNativeReflectConstruct)
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
let closure_7 = arg1(dependencyMap[5]).SEARCH_TAB_TO_ANALYTICS_SEARCH_TAB;
let tmp2 = (arg0) => {
  class SearchSessionAnalyticsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, SearchSessionAnalyticsManager);
      items1 = [...items];
      obj = closure_5(SearchSessionAnalyticsManager);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      map = new Map();
      tmp2Result.locations = map;
      map1 = new Map();
      tmp2Result.selectedTabs = map1;
      return tmp2Result;
    }
  }
  const arg1 = SearchSessionAnalyticsManager;
  callback2(SearchSessionAnalyticsManager, arg0);
  let obj = {
    key: "_initialize",
    value(searchContext) {
      const locations = this.locations;
      const result = locations.set(SearchSessionAnalyticsManager(closure_1[6]).getSearchContextId(searchContext), arg1);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "_terminate",
    value(searchContext) {
      const searchContextId = SearchSessionAnalyticsManager(closure_1[6]).getSearchContextId(searchContext);
      const locations = this.locations;
      locations.delete(searchContextId);
      const selectedTabs = this.selectedTabs;
      selectedTabs.delete(searchContextId);
    }
  };
  items[1] = obj;
  obj = {
    key: "_transferSession",
    value() {

    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLocation",
    value(searchContext) {
      const locations = this.locations;
      return locations.get(SearchSessionAnalyticsManager(closure_1[6]).getSearchContextId(searchContext));
    }
  };
  items[4] = {
    key: "getSelectedTab",
    value(searchContext) {
      const selectedTabs = this.selectedTabs;
      return selectedTabs.get(SearchSessionAnalyticsManager(closure_1[6]).getSearchContextId(searchContext));
    }
  };
  items[5] = {
    key: "setSelectedTab",
    value(searchContext) {
      const selectedTabs = this.selectedTabs;
      const result = selectedTabs.set(SearchSessionAnalyticsManager(closure_1[6]).getSearchContextId(searchContext), closure_7[arg1]);
    }
  };
  return callback(SearchSessionAnalyticsManager, items);
}(importDefault(dependencyMap[7]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/search/managers/native/SearchSessionAnalyticsManager.tsx");

export default tmp2;
