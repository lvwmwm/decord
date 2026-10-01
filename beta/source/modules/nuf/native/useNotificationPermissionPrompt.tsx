// Module ID: 16162
// Function ID: 16163
// Name: useNotificationPermissionPrompt
// Dependencies: [19, 2036, 5589, 2037, 11902, 504, 2041, 11911, 16163, 16167, 2]
// Exports: default

// Module 16162 (useNotificationPermissionPrompt)
import NotificationUtilsDefault from "NotificationUtils" /* 11911 */;
import react from "react" /* 19 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 2036 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2037 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 11902 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/nuf/native/useNotificationPermissionPrompt.tsx");

export default function useNotificationPermissionPrompt() {
  let connected;
  let stateFromStores;
  const items = [GatewayConnectionStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
  const items1 = [UserRequiredActionStore, LoginRequiredActionStore];
  const obj2 = stateFromStores(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => stateFromStores1(dependencyMap[6])(LoginRequiredActionStore, UserRequiredActionStore));
  const items2 = [stateFromStores, stateFromStores1];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      const tmp2 = stateFromStores1;
      if (!tmp2) {
        const tmp6 = NotificationUtilsDefault.shouldRequestNotification && !PushNotificationPermissionStore.promptSeen;
        if (tmp6) {
          const tmp4Result = NotificationUtilsDefault;
          const permission = tmp4Result.requestPermission();
          NotificationUtilsDefault.shouldRequestNotification = false;
        }
      }
    }
  }, items2);
  const obj3 = stateFromStores(16163);
  const guildOpenNudge = obj3.useGuildOpenNudge();
  const obj4 = stateFromStores(16167);
  const postCallDisconnectNudge = obj4.usePostCallDisconnectNudge();
};
