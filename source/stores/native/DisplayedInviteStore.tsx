// Module ID: 8486
// Function ID: 67757
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 8486 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let c6 = null;
let c7 = null;
let tmp2 = ((Store) => {
  class DisplayedInviteStore {
    constructor() {
      self = this;
      tmp = outer1_1(this, DisplayedInviteStore);
      obj = outer1_4(DisplayedInviteStore);
      tmp2 = outer1_3;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(DisplayedInviteStore, Store);
  let obj = {
    key: "getDisplayedInviteCode",
    value() {
      return DisplayedInviteStore;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getDisplayedUsername",
    value() {
      return outer1_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "getDeeplinkAttemptId",
    value() {
      return outer1_7;
    }
  };
  items[2] = obj;
  return callback(DisplayedInviteStore, items);
})(require("initialize").Store);
tmp2.displayName = "DisplayedInviteStore";
tmp2 = new tmp2(require("dispatcher"), {
  DISPLAYED_INVITE_SHOW: function handleInviteShow(arg0) {
    let c6;
    let c7;
    let closure_0;
    ({ code: closure_0, username: c6, deeplinkAttemptId: c7 } = arg0);
  },
  DISPLAYED_INVITE_CLEAR: function handleClearDisplayedInvite() {
    let c0 = null;
    let c7 = null;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/native/DisplayedInviteStore.tsx");

export default tmp2;
