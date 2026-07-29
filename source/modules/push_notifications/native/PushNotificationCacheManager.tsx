// Module ID: 16305
// Function ID: 16306
// Name: prototype
// Dependencies: [11508, 1874, 4028, 5134, 10694, 2]

// Module 16305 (prototype)
import initialize from "initialize";
import mergeGuildAvatar from "mergeGuildAvatar";
import "initialize";

let prototype = function PushNotificationCacheManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const importDefault = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handleUserUpdate();
    },
    CURRENT_USER_UPDATE() {
      return applyArgumentsResult.handleUserUpdate();
    },
    LOGOUT() {
      return applyArgumentsResult.handleLogout();
    }
  };
  const items = [initialize, () => applyArgumentsResult.syncMultiAccountUsers()];
  const items1 = [items];
  applyArgumentsResult.stores = new Map(items1);
  applyArgumentsResult.handleUserUpdate = function handleUserUpdate() {
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      applyArgumentsResult(10694).setCurrentUser(currentUser.username, currentUser.id);
      const obj2 = applyArgumentsResult(10694);
    } else {
      applyArgumentsResult(10694).setCurrentUser(null, null);
      const obj = applyArgumentsResult(10694);
    }
  };
  applyArgumentsResult.syncMultiAccountUsers = function syncMultiAccountUsers() {
    obj = obj(10694);
    obj = undefined;
    if (obj.canUseMultiAccountNotifications) {
      const validUsers = obj.getValidUsers();
      if (validUsers.length < 2) {
        obj = {};
      } else {
        obj = {};
        const item = validUsers.forEach((id) => {
          obj = obj(outer1_1[2]);
          obj[id.id] = obj.getUserTag(id, { identifiable: "always" });
        });
      }
    } else {
      obj = {};
    }
    obj.setMultiAccountUsers(obj);
  };
  applyArgumentsResult.handleLogout = function handleLogout() {
    const result = applyArgumentsResult(outer1_1[4]).clearPushNotificationLogs();
    applyArgumentsResult.handleUserUpdate();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("nameFromUser").fileFinishedImporting("modules/push_notifications/native/PushNotificationCacheManager.tsx");

export default prototype;
