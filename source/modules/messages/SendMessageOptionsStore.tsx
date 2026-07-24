// Module ID: 9579
// Function ID: 74544
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4123, 566, 686, 2]

// Module 9579 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

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
  class SendMessageOptionsStore {
    constructor() {
      self = this;
      tmp = SendMessageOptionsStore(this, SendMessageOptionsStore);
      obj = outer1_3(SendMessageOptionsStore);
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
  callback2(SendMessageOptionsStore, Store);
  const items = [
    {
      key: "getOptions",
      value(arg0) {
        return outer1_6[arg0];
      }
    }
  ];
  return callback(SendMessageOptionsStore, items);
})(require("initialize").Store);
tmp2.displayName = "SendMessageOptionsStore";
tmp2 = new tmp2(require("dispatcher"), {
  MESSAGE_CREATE: function handleMessageCreate(arg0) {
    let message;
    let sendMessageOptions;
    ({ message, sendMessageOptions } = arg0);
    if (null != sendMessageOptions) {
      const obj = {};
      const merged = Object.assign(sendMessageOptions);
      let OTHER = sendMessageOptions.location;
      if (null == OTHER) {
        OTHER = MessageSendLocation.OTHER;
      }
      obj["location"] = OTHER;
      closure_6[message.id] = obj;
      const tmp3 = closure_6;
    }
    let tmp8 = null != message.nonce && message.nonce !== message.id;
    if (tmp8) {
      tmp8 = message.nonce in closure_6;
    }
    if (tmp8) {
      const nonce = message.nonce;
      delete tmp2[tmp];
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/messages/SendMessageOptionsStore.tsx");

export default tmp2;
