// Module ID: 1337
// Function ID: 15708
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 1337 (_isNativeReflectConstruct)
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
let obj = { DC_SHOWN: 0, [0]: "DC_SHOWN", DC_SHOW_REQUEST: 1, [1]: "DC_SHOW_REQUEST", DC_DISMISSED: 2, [2]: "DC_DISMISSED" };
let closure_6 = [];
let tmp2 = ((Store) => {
  class DCFEventStore {
    constructor() {
      self = this;
      tmp = DCFEventStore(this, DCFEventStore);
      obj = outer1_3(DCFEventStore);
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
  callback2(DCFEventStore, Store);
  const items = [
    {
      key: "getDCFEvents",
      value() {
        return outer1_6;
      }
    }
  ];
  return callback(DCFEventStore, items);
})(require("initialize").Store);
tmp2.displayName = "DCFEventStore";
obj = {
  LOGOUT: function reset() {
    let closure_6 = [];
  },
  DCF_EVENT_LOGGED: function handleGenericEvent(arg0) {
    let dismissibleContent;
    let eventType;
    ({ eventType, dismissibleContent } = arg0);
  },
  DCF_HANDLE_DC_DISMISSED: function handleDCDismissed(arg0) {

  },
  DCF_HANDLE_DC_SHOWN: function handleDCShownToUser(arg0) {

  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/dismissible_content/DCFEventStore.tsx");

export default tmp2;
export const DCFEventTypes = obj;
