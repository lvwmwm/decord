// Module ID: 6831
// Function ID: 53981
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 6831 (_isNativeReflectConstruct)
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
let c5 = true;
let tmp2 = ((DeviceSettingsStore) => {
  class ConversationVisibilityStore {
    constructor() {
      self = this;
      tmp = ConversationVisibilityStore(this, ConversationVisibilityStore);
      obj = outer1_3(ConversationVisibilityStore);
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
  callback2(ConversationVisibilityStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(highlightingEnabled) {
      highlightingEnabled = undefined;
      if (null != highlightingEnabled) {
        highlightingEnabled = highlightingEnabled.highlightingEnabled;
      }
      const outer1_5 = null == highlightingEnabled || highlightingEnabled;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isHighlightingEnabled",
    value() {
      return outer1_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { highlightingEnabled: outer1_5 };
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUserAgnosticState",
    value() {
      return { highlightingEnabled: outer1_5 };
    }
  };
  return callback(ConversationVisibilityStore, items);
})(require("initialize").DeviceSettingsStore);
tmp2.displayName = "ConversationVisibilityStore";
tmp2.persistKey = "ConversationVisibilityStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONVERSATIONS_TOGGLE_HIGHLIGHTING: function handleToggleHighlighting() {
    closure_5 = !closure_5;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/conversations/ConversationVisibilityStore.tsx");

export default tmp2;
