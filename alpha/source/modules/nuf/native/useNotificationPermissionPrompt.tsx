// Module ID: 16926
// Function ID: 16927
// Name: useNotificationPermissionPrompt
// Dependencies: [19, 2035, 5580, 2036, 12749, 504, 2038, 12758, 16927, 16929, 2]
// Exports: default

// Module 16926 (useNotificationPermissionPrompt)
import NotificationUtilsDefault from "NotificationUtils" /* 12758 */;
import noop from "module_19" /* 19 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 2035 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5580 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2036 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12749 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/useNotificationPermissionPrompt.tsx");

export default function useNotificationPermissionPrompt() {
  const items = [GatewayConnectionStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => connected.isConnected());
  const obj = stateFromStores(504);
  const items1 = [UserRequiredActionStore, LoginRequiredActionStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => stateFromStores1(dependencyMap[6])(LoginRequiredActionStore, UserRequiredActionStore));
  const items2 = [stateFromStores, stateFromStores1];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      if (!stateFromStores1) {
        if (tmp5) {
          const permission = tmp3(12758).requestPermission();
          tmp3(12758).shouldRequestNotification = false;
          const tmp3Result = tmp3(12758);
        }
        tmp5 = NotificationUtilsDefault.shouldRequestNotification && !PushNotificationPermissionStore.promptSeen;
      }
    }
  }, items2);
  const obj2 = stateFromStores(504);
  const guildOpenNudge = stateFromStores(16927).useGuildOpenNudge();
  const obj3 = stateFromStores(16927);
  const postCallDisconnectNudge = stateFromStores(16929).usePostCallDisconnectNudge();
};
