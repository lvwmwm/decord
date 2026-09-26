// Module ID: 16866
// Function ID: 16867
// Name: useNotificationPermissionPrompt
// Dependencies: [19, 2034, 5526, 2035, 12692, 504, 2037, 12701, 16867, 16869, 2]
// Exports: default

// Module 16866 (useNotificationPermissionPrompt)
import NotificationUtilsDefault from "NotificationUtils" /* 12701 */;
import noop from "module_19" /* 19 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 2034 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5526 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2035 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12692 */;

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
          const permission = tmp3(12701).requestPermission();
          tmp3(12701).shouldRequestNotification = false;
          const tmp3Result = tmp3(12701);
        }
        tmp5 = NotificationUtilsDefault.shouldRequestNotification && !PushNotificationPermissionStore.promptSeen;
      }
    }
  }, items2);
  const obj2 = stateFromStores(504);
  const guildOpenNudge = stateFromStores(16867).useGuildOpenNudge();
  const obj3 = stateFromStores(16867);
  const postCallDisconnectNudge = stateFromStores(16869).usePostCallDisconnectNudge();
};
