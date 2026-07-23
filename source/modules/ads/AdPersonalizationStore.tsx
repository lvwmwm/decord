// Module ID: 12610
// Function ID: 97902
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 12610 (_isNativeReflectConstruct)
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
function reset() {
  let c5 = false;
}
let c5 = false;
let tmp2 = ((Store) => {
  class AdPersonalizationStore {
    constructor() {
      self = this;
      tmp = AdPersonalizationStore(this, AdPersonalizationStore);
      obj = outer1_3(AdPersonalizationStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
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
  callback2(AdPersonalizationStore, Store);
  const items = [
    {
      key: "isTogglesDisabled",
      value() {
        return outer1_5;
      }
    }
  ];
  return callback(AdPersonalizationStore, items);
})(require("initialize").Store);
tmp2 = new tmp2(require("dispatcher"), {
  AD_PERSONALIZATION_TOGGLES_RESTRICTED: function handleAdPersonalizationTogglesRestricted(disabled) {
    disabled = disabled.disabled;
    let closure_5 = null != disabled && disabled;
  },
  CONNECTION_OPEN: reset,
  LOGOUT: reset
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/ads/AdPersonalizationStore.tsx");

export default tmp2;
