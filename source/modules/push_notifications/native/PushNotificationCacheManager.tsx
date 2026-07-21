// Module ID: 16028
// Function ID: 123065
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16028 (_isNativeReflectConstruct)
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
  class PushNotificationCacheManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, PushNotificationCacheManager);
      items1 = [...items];
      obj = closure_5(PushNotificationCacheManager);
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
      PushNotificationCacheManager = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.handleUserUpdate();
            },
        CURRENT_USER_UPDATE() {
              return tmp2Result.handleUserUpdate();
            },
        LOGOUT() {
              return tmp2Result.handleLogout();
            }
      };
      items2 = [, ];
      items2[0] = closure_7;
      items2[1] = () => tmp2Result.syncMultiAccountUsers();
      items3 = [];
      items3[0] = items2;
      map = new Map(items3);
      tmp2Result.stores = map;
      tmp2Result.handleUserUpdate = () => {
        const currentUser = currentUser.getCurrentUser();
        if (null != currentUser) {
          tmp2Result(closure_1[8]).setCurrentUser(currentUser.username, currentUser.id);
          const obj2 = tmp2Result(closure_1[8]);
        } else {
          tmp2Result(closure_1[8]).setCurrentUser(null, null);
          const obj = tmp2Result(closure_1[8]);
        }
      };
      tmp2Result.syncMultiAccountUsers = () => {
        tmp2Result(closure_1[8]).setMultiAccountUsers(function buildMultiAccountUsers() {
          if (validUsers.canUseMultiAccountNotifications) {
            const validUsers = validUsers.getValidUsers();
            if (validUsers.length < 2) {
              return {};
            } else {
              const obj = {};
              const item = validUsers.forEach((id) => {
                const obj = obj(closure_1[7]);
                obj[id.id] = obj.getUserTag(id, { identifiable: "always" });
              });
              return obj;
            }
          } else {
            return {};
          }
        }());
      };
      tmp2Result.handleLogout = () => {
        const result = tmp2Result(closure_1[8]).clearPushNotificationLogs();
        tmp2Result.handleUserUpdate();
      };
      return tmp2Result;
    }
  }
  const importDefault = PushNotificationCacheManager;
  callback2(PushNotificationCacheManager, arg0);
  return callback(PushNotificationCacheManager);
}(importDefault(dependencyMap[9]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/push_notifications/native/PushNotificationCacheManager.tsx");

export default tmp2;
