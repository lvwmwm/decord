// Module ID: 16027
// Function ID: 123086
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16027 (_isNativeReflectConstruct)
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
let tmp2 = (arg0) => {
  class SavedMessagesManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, SavedMessagesManager);
      items1 = [...items];
      obj = closure_6(SavedMessagesManager);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      SavedMessagesManager = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.handlePostConnectionOpen();
            }
      };
      tmp2Result.handlePostConnectionOpen = () => {
        if (obj.getConfig({ location: "saved_messages_manager" }).enabled) {
          const andUpdateSavedMessages = tmp2Result(closure_2[6]).fetchAndUpdateSavedMessages();
          const obj2 = tmp2Result(closure_2[6]);
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = SavedMessagesManager;
  callback2(SavedMessagesManager, arg0);
  return callback(SavedMessagesManager);
}(importDefault(dependencyMap[7]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/saved_messages/SavedMessagesManager.tsx");

export default tmp2;
