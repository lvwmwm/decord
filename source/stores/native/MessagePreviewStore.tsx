// Module ID: 8331
// Function ID: 66036
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4351, 22, 566, 686, 2]

// Module 8331 (_isNativeReflectConstruct)
import apply from "apply";
import initialize from "initialize";
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
let c8 = null;
let c9 = null;
let tmp2 = ((Store) => {
  class MessagePreviewStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, MessagePreviewStore);
      obj = outer1_6(MessagePreviewStore);
      tmp2 = outer1_5;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(MessagePreviewStore, Store);
  let obj = {
    key: "messages",
    get() {
      return outer1_8;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "jumpTargetId",
    get() {
      return outer1_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessage",
    value(arg0) {
      let closure_0 = arg0;
      return outer1_1(outer1_2[6]).find(outer1_8, (id) => {
        let tmp2 = id.id === closure_0;
        if (!tmp2) {
          tmp2 = tmp === closure_0;
        }
        return tmp2;
      });
    }
  };
  items[2] = obj;
  return callback(MessagePreviewStore, items);
})(require("initialize").Store);
tmp2.displayName = "MessagePreviewStore";
tmp2 = new tmp2(require("dispatcher"), {
  LOAD_MESSAGES_AROUND_SUCCESS: function handleLoadMessagesAroundSuccess(messages) {
    messages = messages.messages;
    let closure_8 = [];
    const item = messages.forEach((message) => {
      if (null != arr) {
        arr = arr.unshift(outer1_0(outer1_2[5]).createMessageRecord(message));
        const obj = outer1_0(outer1_2[5]);
      }
    });
    const around = messages.around;
  },
  CLEAR_MESSAGES_AROUND_SUCCESS: function handleClearMessagesAround() {
    let c8 = null;
    let c9 = null;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/native/MessagePreviewStore.tsx");

export default tmp2;
