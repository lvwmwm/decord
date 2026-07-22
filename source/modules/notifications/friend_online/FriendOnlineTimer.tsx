// Module ID: 16385
// Function ID: 126500
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16385 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _reportSessionMeaningfullyOnline() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _reportSessionMeaningfullyOnline = obj;
  return obj(...arguments);
}
function isStatusEffectivelyOnline(arg0) {
  const items = [StatusTypes.ONLINE, StatusTypes.STREAMING];
  return items.includes(arg0);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const Endpoints = arg1(dependencyMap[8]).Endpoints;
const StatusTypes = arg1(dependencyMap[9]).StatusTypes;
let closure_13 = 5 * importDefault(dependencyMap[10]).Millis.MINUTE;
let tmp2 = (arg0) => {
  class FriendOnlineTimerManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, FriendOnlineTimerManager);
      items1 = [...items];
      obj = closure_6(FriendOnlineTimerManager);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      FriendOnlineTimerManager = tmp2Result;
      tmp2Result.timerId = null;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.start();
            },
        CONNECTION_RESUMED() {
              return tmp2Result.start();
            },
        CONNECTION_CLOSED() {
              return tmp2Result.clear();
            },
        CONNECTION_INTERRUPTED() {
              return tmp2Result.clear();
            },
        SELF_PRESENCE_STORE_UPDATE() {
              return tmp2Result.start();
            }
      };
      tmp2Result.start = () => {
        const NotifyFriendsOnComeOnline = tmp2Result(closure_2[14]).NotifyFriendsOnComeOnline;
        let setting = NotifyFriendsOnComeOnline.getSetting();
        if (setting) {
          setting = cooldownElapsed.isCooldownElapsed();
        }
        if (setting) {
          setting = null == tmp2Result.timerId;
        }
        if (setting) {
          setting = callback(status.getStatus());
        }
        if (setting) {
          const _setTimeout = setTimeout;
          tmp2Result.timerId = setTimeout(() => {
            closure_0.timerId = null;
            let isCooldownElapsedResult = callback(status.getStatus());
            if (isCooldownElapsedResult) {
              isCooldownElapsedResult = cooldownElapsed.isCooldownElapsed();
            }
            if (isCooldownElapsedResult) {
              function reportSessionMeaningfullyOnline() {
                return callback(...arguments);
              }();
            }
          }, closure_13);
        }
      };
      tmp2Result.clear = () => {
        if (null != tmp2Result.timerId) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp2Result.timerId);
          tmp2Result.timerId = null;
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = FriendOnlineTimerManager;
  callback2(FriendOnlineTimerManager, arg0);
  let obj = {
    key: "_initialize",
    value() {

    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      this.clear();
    }
  };
  items[1] = obj;
  return callback(FriendOnlineTimerManager, items);
}(importDefault(dependencyMap[15]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/notifications/friend_online/FriendOnlineTimer.tsx");

export default tmp2;
