// Module ID: 11181
// Function ID: 87011
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11181 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = [];
let closure_6 = null;
let tmp2 = (Store) => {
  class ApplicationDirectoryCategoriesStore {
    constructor() {
      self = this;
      tmp = ApplicationDirectoryCategoriesStore(this, ApplicationDirectoryCategoriesStore);
      obj = closure_3(ApplicationDirectoryCategoriesStore);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = ApplicationDirectoryCategoriesStore;
  callback2(ApplicationDirectoryCategoriesStore, Store);
  let obj = {
    key: "getLastFetchTimeMs",
    value() {
      return closure_6;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getCategories",
    value() {
      return closure_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCategory",
    value(arg0) {
      const ApplicationDirectoryCategoriesStore = arg0;
      return closure_5.find((id) => id.id === id);
    }
  };
  items[2] = obj;
  return callback(ApplicationDirectoryCategoriesStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "ApplicationDirectoryCategoriesStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function handleFetchAppDirectoryCategoriesSuccess(categories) {
    categories = categories.categories;
    let closure_6 = Date.now();
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectoryCategoriesStore.tsx");

export default tmp2;
