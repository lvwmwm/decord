// Module ID: 9530
// Function ID: 74253
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9530 (_isNativeReflectConstruct)
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
const MessageSendLocation = arg1(dependencyMap[5]).MessageSendLocation;
let closure_6 = {};
let tmp2 = (Store) => {
  class SendMessageOptionsStore {
    constructor() {
      self = this;
      tmp = SendMessageOptionsStore(this, SendMessageOptionsStore);
      obj = closure_3(SendMessageOptionsStore);
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
  let closure_0 = SendMessageOptionsStore;
  callback2(SendMessageOptionsStore, Store);
  const items = [
    {
      key: "getOptions",
      value(arg0) {
        return closure_6[arg0];
      }
    }
  ];
  return callback(SendMessageOptionsStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "SendMessageOptionsStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
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
      const tmp = closure_6;
    }
    let tmp6 = null != message.nonce && message.nonce !== message.id;
    if (tmp6) {
      tmp6 = message.nonce in closure_6;
    }
    if (tmp6) {
      const nonce = message.nonce;
      delete r1[r0];
    }
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/messages/SendMessageOptionsStore.tsx");

export default tmp2;
