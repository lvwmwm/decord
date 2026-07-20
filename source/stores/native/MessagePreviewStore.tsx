// Module ID: 8319
// Function ID: 65962
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8319 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = null;
let closure_9 = null;
let tmp2 = (Store) => {
  class MessagePreviewStore {
    constructor() {
      self = this;
      tmp = closure_3(this, MessagePreviewStore);
      obj = closure_6(MessagePreviewStore);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = MessagePreviewStore;
  callback2(MessagePreviewStore, Store);
  let obj = {
    key: "messages",
    get() {
      return closure_8;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "jumpTargetId",
    get() {
      return closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessage",
    value(arg0) {
      const MessagePreviewStore = arg0;
      return callback(closure_2[6]).find(closure_8, (id) => {
        let tmp2 = id.id === id;
        if (!tmp2) {
          tmp2 = tmp === id;
        }
        return tmp2;
      });
    }
  };
  items[2] = obj;
  return callback(MessagePreviewStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "MessagePreviewStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  LOAD_MESSAGES_AROUND_SUCCESS: function handleLoadMessagesAroundSuccess(messages) {
    messages = messages.messages;
    let closure_8 = [];
    const item = messages.forEach((message) => {
      if (null != arr) {
        const arr = arr.unshift(callback(closure_2[5]).createMessageRecord(message));
        const obj = callback(closure_2[5]);
      }
    });
    const around = messages.around;
  },
  CLEAR_MESSAGES_AROUND_SUCCESS: function handleClearMessagesAround() {
    let closure_8 = null;
    let closure_9 = null;
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/native/MessagePreviewStore.tsx");

export default tmp2;
