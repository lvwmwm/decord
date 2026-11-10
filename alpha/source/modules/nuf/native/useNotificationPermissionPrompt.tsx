// Module ID: 18981
// Function ID: 18982
// Name: useNotificationPermissionPrompt
// Dependencies: [19, 4984, 6625, 4985, 14233, 504, 4987, 14242, 18982, 18984, 2]
// Exports: default

// Module 18981 (useNotificationPermissionPrompt)
import NotificationUtilsDefault from "NotificationUtils" /* 14242 */;
import react from "react" /* 19 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 4984 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6625 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4985 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14233 */;
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
  const obj3 = stateFromStores(18982);
  const guildOpenNudge = obj3.useGuildOpenNudge();
  const obj4 = stateFromStores(18984);
  const postCallDisconnectNudge = obj4.usePostCallDisconnectNudge();
};
