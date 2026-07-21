// Module ID: 15980
// Function ID: 122646
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15980 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let tmp2 = (arg0) => {
  class MessageQueueManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, MessageQueueManager);
      items1 = [...items];
      obj = closure_5(MessageQueueManager);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { LOGOUT: tmp2Result.handleLogout };
      return tmp2Result;
    }
  }
  const importDefault = MessageQueueManager;
  callback2(MessageQueueManager, arg0);
  const items = [
    {
      key: "handleLogout",
      value() {
        MessageQueueManager(closure_1[5]).clear();
      }
    }
  ];
  return callback(MessageQueueManager, items);
}(importDefault(dependencyMap[6]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/messages/MessageQueueManager.tsx");

export default tmp2;
