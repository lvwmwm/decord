// Module ID: 12210
// Function ID: 95436
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 12211, 566, 686, 2]

// Module 12210 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import CustomActivityLinkRecord from "CustomActivityLinkRecord";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = {};
let tmp2 = ((Store) => {
  class CustomActivityLinksStore {
    constructor() {
      self = this;
      tmp = CustomActivityLinksStore(this, CustomActivityLinksStore);
      obj = outer1_3(CustomActivityLinksStore);
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
  callback2(CustomActivityLinksStore, Store);
  const items = [
    {
      key: "getOne",
      value(arg0, arg1) {
        if (null != outer1_6[arg0]) {
          return outer1_6[arg0][arg1];
        }
      }
    }
  ];
  return callback(CustomActivityLinksStore, items);
})(require("initialize").Store);
tmp2.displayName = "CustomActivityLinksStore";
tmp2 = new tmp2(require("dispatcher"), {
  CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let applicationId;
    let link;
    ({ applicationId, link } = arg0);
    if (null == dependencyMap[applicationId]) {
      const _Object = Object;
      dependencyMap[applicationId] = Object.create(null);
    }
    dependencyMap[applicationId][link.link_id] = new CustomActivityLinkRecord(link);
  },
  LOGOUT: function handleLogout() {
    let closure_6 = {};
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/activities/stores/CustomActivityLinksStore.tsx");

export default tmp2;
