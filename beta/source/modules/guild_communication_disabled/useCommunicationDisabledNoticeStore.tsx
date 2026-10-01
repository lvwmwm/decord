// Module ID: 2109
// Function ID: 2110
// Name: useCommunicationDisabledNoticeStore
// Dependencies: [32, 2110, 510, 561, 1248, 1243, 4452, 2]
// Exports: clearCommunicationDisabledNotice, useCommunicationDisabledNoticeStore

// Module 2109 (useCommunicationDisabledNoticeStore)
import Storage2 from "Storage" /* 510 */;
import _mod1243 from "module_1243" /* 1243 */;
import GuildDisableCommunicationConstants from "GuildDisableCommunicationConstants" /* 2110 */;
import _slicedToArray2 from "_slicedToArray" /* 4452 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import module_561 from "module_561" /* 561 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, setState;

const DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY = GuildDisableCommunicationConstants.DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY;
let state = module_561.createStore((arg0, arg1) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let Storage = require("Storage").Storage;
  let items = Storage.get(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY);
  if (items == null) {
    items = [];
  }
  let obj = {
    notificationDismissedInGuilds: new Set(items),
    dismissNotification(arg0) {
      const notificationDismissedInGuilds = closure_1().notificationDismissedInGuilds;
      notificationDismissedInGuilds.add(arg0);
      const Storage = notificationDismissedInGuilds(closure_1[2]).Storage;
      const result = Storage.set(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, notificationDismissedInGuilds);
      let obj = notificationDismissedInGuilds(closure_1[4]);
      obj.batchUpdates(() => {
        const obj = { notificationDismissedInGuilds };
        return notificationDismissedInGuilds(obj);
      });
    },
    resetNotification(arg0) {
      const notificationDismissedInGuilds = closure_1().notificationDismissedInGuilds;
      if (notificationDismissedInGuilds.has(arg0)) {
        notificationDismissedInGuilds.delete(arg0);
        const Storage = notificationDismissedInGuilds(closure_1[2]).Storage;
        const result = Storage.set(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, notificationDismissedInGuilds);
        let obj = notificationDismissedInGuilds(closure_1[4]);
        obj.batchUpdates(() => {
          const obj = { notificationDismissedInGuilds };
          return notificationDismissedInGuilds(obj);
        });
      }
    }
  };
  new Set(items);
  return obj;
});
let Storage = Storage2.Storage;
Storage.asyncGet(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, async (arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    setState = setState.setState;
    const obj = { notificationDismissedInGuilds: new Set(closure_0) };
    new Set(closure_0);
    return setState(obj);
  });
});
let result = size.fileFinishedImporting("modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx");

export const useCommunicationDisabledNoticeStore = function useCommunicationDisabledNoticeStore(arg0) {
  let first;
  let tmp2;
  const obj = _mod1243;
  [first, tmp2] = obj.useStoreWithEqualityFn(state, (arg0) => {
    const items = [, ];
    ({ notificationDismissedInGuilds: arr[0], dismissNotification: arr[1] } = arg0);
    return items;
  }, _slicedToArray2.shallow);
  let items = [, ];
  items[0] = !first.has(arg0);
  items[1] = tmp2;
  return items;
};
export const clearCommunicationDisabledNotice = function clearCommunicationDisabledNotice(arg0) {
  state = state.getState();
  return state.resetNotification(arg0);
};
