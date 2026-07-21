// Module ID: 15870
// Function ID: 121492
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15870 (_isNativeReflectConstruct)
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
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let tmp2 = (arg0) => {
  class BackgroundSyncManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, BackgroundSyncManager);
      items1 = [...items];
      obj = closure_5(BackgroundSyncManager);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { MESSAGE_CREATE: tmp2Result.handleMessageCreate, POST_CONNECTION_OPEN: tmp2Result.handlePostConnectionOpen };
      return tmp2Result;
    }
  }
  const arg1 = BackgroundSyncManager;
  callback2(BackgroundSyncManager, arg0);
  let obj = {
    key: "handleMessageCreate",
    value(message) {
      message = message.message;
      if (!message.optimistic) {
        let isStaffResult = null != message.author;
        if (isStaffResult) {
          isStaffResult = message.author.id === id.getId();
        }
        if (isStaffResult) {
          const currentUser = currentUser.getCurrentUser();
          isStaffResult = null != currentUser;
          let obj = currentUser;
        }
        if (isStaffResult) {
          isStaffResult = obj.isStaff();
        }
        if (isStaffResult) {
          isStaffResult = "run bg sync" === message.content;
        }
        if (isStaffResult) {
          obj = { force: true };
          BackgroundSyncManager(closure_1[7]).backgroundSync(obj);
          const obj2 = BackgroundSyncManager(closure_1[7]);
        }
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "handlePostConnectionOpen",
    value() {
      BackgroundSyncManager(closure_1[7]).backgroundSync({ 0: "hidden", 0: "all", 9223372036854775807: true });
    }
  };
  items[1] = obj;
  return callback(BackgroundSyncManager, items);
}(importDefault(dependencyMap[8]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/app_database/background_sync/native/BackgroundSyncManager.tsx");

export default tmp2;
