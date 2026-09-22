// Module ID: 16620
// Function ID: 16621
// Name: useNotificationPermissionPrompt
// Dependencies: [19, 1950, 5358, 1951, 12542, 504, 1953, 12551, 16621, 16623, 2]
// Exports: default

// Module 16620 (useNotificationPermissionPrompt)
import NotificationUtilsDefault from "NotificationUtils" /* 12551 */;
import noop from "module_19" /* 19 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 1950 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5358 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 1951 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12542 */;

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
          const permission = tmp3(12551).requestPermission();
          tmp3(12551).shouldRequestNotification = false;
          const tmp3Result = tmp3(12551);
        }
        tmp5 = NotificationUtilsDefault.shouldRequestNotification && !PushNotificationPermissionStore.promptSeen;
      }
    }
  }, items2);
  const obj2 = stateFromStores(504);
  const guildOpenNudge = stateFromStores(16621).useGuildOpenNudge();
  const obj3 = stateFromStores(16621);
  const postCallDisconnectNudge = stateFromStores(16623).usePostCallDisconnectNudge();
};
