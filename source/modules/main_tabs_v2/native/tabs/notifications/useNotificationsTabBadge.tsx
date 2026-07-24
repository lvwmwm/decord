// Module ID: 15168
// Function ID: 115488
// Name: useNotificationsTabBadge
// Dependencies: [31, 6881, 566, 6882, 2]
// Exports: default

// Module 15168 (useNotificationsTabBadge)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx");

export default function useNotificationsTabBadge() {
  let obj = stateFromStores(566);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_3.localItems);
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => stateFromStores.filter((type) => {
    let tmp = type.type === stateFromStores(outer2_1[3]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
    if (!tmp) {
      tmp = type.type === stateFromStores(outer2_1[3]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
    }
    if (!tmp) {
      tmp = type.type === stateFromStores(outer2_1[3]).NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
    }
    return tmp;
  }).length, items1);
  obj = { value: memo, showDot: memo > 0 };
  return obj;
};
