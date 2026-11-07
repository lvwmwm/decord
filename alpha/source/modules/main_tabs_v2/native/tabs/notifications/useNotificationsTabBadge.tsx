// Module ID: 16881
// Function ID: 16882
// Name: useNotificationsTabBadge
// Dependencies: [19, 6913, 504, 6914, 2]
// Exports: default

// Module 16881 (useNotificationsTabBadge)
import react from "react" /* 19 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 6913 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx");

export default function useNotificationsTabBadge() {
  let localItems;
  let stateFromStores;
  const items = [NotificationCenterItemsStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => localItems.localItems);
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => stateFromStores.filter((type) => {
    const tmp3 = type.type === stateFromStores(closure_1_1[3]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS || type.type === tmp(tmp2[3]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS || type.type === tmp(tmp2[3]).NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
    return tmp3;
  }).length, items1);
  return { value: memo, showDot: memo > 0 };
};
