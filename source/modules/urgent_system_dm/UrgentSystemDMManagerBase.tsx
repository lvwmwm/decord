// Module ID: 16059
// Function ID: 123362
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16059 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function maybeShowUrgentMessageModal(arg0) {
  const currentUser = authStore2.getCurrentUser();
  if (null != currentUser) {
    const channelId = channelId.getChannelId();
    const dMFromUserId = authStore.getDMFromUserId(SYSTEM_USER);
    if (currentUser.hasUrgentMessages()) {
      if (dMFromUserId !== channelId) {
        if (!closure_12) {
          closure_12 = true;
          arg0();
        }
      }
    }
    const obj = { channelId };
    maybeClearUrgentMessage(obj);
  }
}
function maybeClearUrgentMessage(channelId) {
  const currentUser = authStore2.getCurrentUser();
  let hasUrgentMessagesResult = null != currentUser;
  if (hasUrgentMessagesResult) {
    hasUrgentMessagesResult = currentUser.hasUrgentMessages();
  }
  if (hasUrgentMessagesResult) {
    hasUrgentMessagesResult = tmp;
  }
  if (hasUrgentMessagesResult) {
    let closure_12 = false;
    importAll(dependencyMap[10]).setFlag(UserFlags.HAS_UNREAD_URGENT_MESSAGES, false);
    const obj2 = importAll(dependencyMap[10]);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
const SYSTEM_USER = arg1(dependencyMap[8]).SYSTEM_USER;
const UserFlags = arg1(dependencyMap[9]).UserFlags;
let closure_12 = false;
const tmp2 = (arg0) => {
  class UrgentSystemDMManagerBase {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, UrgentSystemDMManagerBase);
      obj = closure_5(UrgentSystemDMManagerBase);
      tmp2 = closure_4;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, [], closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      UrgentSystemDMManagerBase = tmp2Result;
      tmp2Result.handleShowUrgentMessageAlert = arg0;
      obj = {
        POST_CONNECTION_OPEN() {
              callback(tmp2Result.handleShowUrgentMessageAlert);
            },
        MESSAGE_CREATE() {
              callback(tmp2Result.handleShowUrgentMessageAlert);
            },
        CHANNEL_SELECT: closure_15
      };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const importAll = UrgentSystemDMManagerBase;
  callback2(UrgentSystemDMManagerBase, arg0);
  return callback(UrgentSystemDMManagerBase);
}(importDefault(dependencyMap[11]));
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/urgent_system_dm/UrgentSystemDMManagerBase.tsx");

export default tmp2;
