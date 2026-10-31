// Module ID: 18584
// Function ID: 18585
// Name: useNotificationPermissionPrompt
// Dependencies: [19, 4856, 6568, 4857, 13958, 504, 4859, 13967, 18585, 18587, 2]
// Exports: default

// Module 18584 (useNotificationPermissionPrompt)
import NotificationUtilsDefault from "NotificationUtils" /* 13967 */;
import react from "react" /* 19 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 4856 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6568 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4857 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13958 */;
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
  const obj3 = stateFromStores(18585);
  const guildOpenNudge = obj3.useGuildOpenNudge();
  const obj4 = stateFromStores(18587);
  const postCallDisconnectNudge = obj4.usePostCallDisconnectNudge();
};
