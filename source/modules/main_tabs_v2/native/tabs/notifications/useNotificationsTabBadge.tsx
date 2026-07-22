// Module ID: 15005
// Function ID: 112998
// Name: useNotificationsTabBadge
// Dependencies: []
// Exports: default

// Module 15005 (useNotificationsTabBadge)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx");

export default function useNotificationsTabBadge() {
  let obj = arg1(dependencyMap[2]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => localItems.localItems);
  const arg1 = stateFromStores;
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => stateFromStores.filter((type) => {
    let tmp = type.type === callback(closure_1[3]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
    if (!tmp) {
      tmp = type.type === callback(closure_1[3]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
    }
    if (!tmp) {
      tmp = type.type === callback(closure_1[3]).NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
    }
    return tmp;
  }).length, items1);
  obj = { value: memo, showDot: memo > 0 };
  return obj;
};
