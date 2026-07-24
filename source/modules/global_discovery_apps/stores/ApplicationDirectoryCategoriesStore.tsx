// Module ID: 11222
// Function ID: 87355
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 11222 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let closure_5 = [];
let c6 = null;
let tmp2 = ((Store) => {
  class ApplicationDirectoryCategoriesStore {
    constructor() {
      self = this;
      tmp = ApplicationDirectoryCategoriesStore(this, ApplicationDirectoryCategoriesStore);
      obj = outer1_3(ApplicationDirectoryCategoriesStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ApplicationDirectoryCategoriesStore, Store);
  let obj = {
    key: "getLastFetchTimeMs",
    value() {
      return outer1_6;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getCategories",
    value() {
      return outer1_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCategory",
    value(arg0) {
      let dispatcher = arg0;
      return outer1_5.find((id) => id.id === dispatcher);
    }
  };
  items[2] = obj;
  return callback(ApplicationDirectoryCategoriesStore, items);
})(require("initialize").Store);
tmp2.displayName = "ApplicationDirectoryCategoriesStore";
tmp2 = new tmp2(require("dispatcher"), {
  APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function handleFetchAppDirectoryCategoriesSuccess(categories) {
    categories = categories.categories;
    let closure_6 = Date.now();
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectoryCategoriesStore.tsx");

export default tmp2;
