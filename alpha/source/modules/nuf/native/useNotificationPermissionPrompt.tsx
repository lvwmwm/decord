// Module ID: 16338
// Function ID: 16339
// Name: useNotificationPermissionPrompt
// Dependencies: [19, 2036, 5756, 2037, 12073, 504, 2041, 12082, 16339, 16343, 2]
// Exports: default

// Module 16338 (useNotificationPermissionPrompt)
import NotificationUtilsDefault from "NotificationUtils" /* 12082 */;
import noop from "module_19" /* 19 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 2036 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5756 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2037 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12073 */;

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
          const permission = tmp3(12082).requestPermission();
          tmp3(12082).shouldRequestNotification = false;
          const tmp3Result = tmp3(12082);
        }
        tmp5 = NotificationUtilsDefault.shouldRequestNotification && !PushNotificationPermissionStore.promptSeen;
      }
    }
  }, items2);
  const obj2 = stateFromStores(504);
  const guildOpenNudge = stateFromStores(16339).useGuildOpenNudge();
  const obj3 = stateFromStores(16339);
  const postCallDisconnectNudge = stateFromStores(16343).usePostCallDisconnectNudge();
};
