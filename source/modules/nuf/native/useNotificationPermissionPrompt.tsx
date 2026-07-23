// Module ID: 15250
// Function ID: 116371
// Name: useNotificationPermissionPrompt
// Dependencies: [31, 1341, 4808, 1342, 11448, 566, 1344, 11457, 15251, 15253, 2]
// Exports: default

// Module 15250 (useNotificationPermissionPrompt)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/nuf/native/useNotificationPermissionPrompt.tsx");

export default function useNotificationPermissionPrompt() {
  const items = [closure_5];
  stateFromStores = stateFromStores(566).useStateFromStores(items, () => outer1_5.isConnected());
  let obj = stateFromStores(566);
  const items1 = [closure_6, _isNativeReflectConstruct];
  const stateFromStores1 = stateFromStores(566).useStateFromStores(items1, () => stateFromStores1(outer1_2[6])(outer1_4, outer1_6));
  const items2 = [stateFromStores, stateFromStores1];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      if (!stateFromStores1) {
        if (tmp5) {
          const permission = stateFromStores1(outer1_2[7]).requestPermission();
          stateFromStores1(outer1_2[7]).shouldRequestNotification = false;
          const obj = stateFromStores1(outer1_2[7]);
        }
        tmp5 = stateFromStores1(outer1_2[7]).shouldRequestNotification && !outer1_7.promptSeen;
      }
    }
  }, items2);
  const obj2 = stateFromStores(566);
  const guildOpenNudge = stateFromStores(15251).useGuildOpenNudge();
  const obj3 = stateFromStores(15251);
  const postCallDisconnectNudge = stateFromStores(15253).usePostCallDisconnectNudge();
};
