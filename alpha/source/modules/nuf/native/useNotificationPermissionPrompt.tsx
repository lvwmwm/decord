// Module ID: 16862
// Function ID: 16863
// Name: useNotificationPermissionPrompt
// Dependencies: [19, 2034, 5494, 2035, 12663, 504, 2037, 12672, 16863, 16865, 2]
// Exports: default

// Module 16862 (useNotificationPermissionPrompt)
import NotificationUtilsDefault from "NotificationUtils" /* 12672 */;
import noop from "module_19" /* 19 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 2034 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5494 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2035 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12663 */;

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
          const permission = tmp3(12672).requestPermission();
          tmp3(12672).shouldRequestNotification = false;
          const tmp3Result = tmp3(12672);
        }
        tmp5 = NotificationUtilsDefault.shouldRequestNotification && !PushNotificationPermissionStore.promptSeen;
      }
    }
  }, items2);
  const obj2 = stateFromStores(504);
  const guildOpenNudge = stateFromStores(16863).useGuildOpenNudge();
  const obj3 = stateFromStores(16863);
  const postCallDisconnectNudge = stateFromStores(16865).usePostCallDisconnectNudge();
};
