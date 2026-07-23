// Module ID: 1918
// Function ID: 21705
// Name: DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY
// Dependencies: [57, 1919, 587, 622, 682, 677, 3743, 2]
// Exports: clearCommunicationDisabledNotice, useCommunicationDisabledNoticeStore

// Module 1918 (DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY)
import _slicedToArray from "_slicedToArray";
import { DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY } from "getFriendlyDurationString";
import keys from "keys";
import { Storage } from "Storage";

const require = arg1;
let closure_4 = keys.createStore((arg0, arg1) => {
  const _require = arg0;
  const dependencyMap = arg1;
  let obj = {};
  let Storage = _require(587).Storage;
  let items = Storage.get(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY);
  if (null == items) {
    items = [];
  }
  obj.notificationDismissedInGuilds = new Set(items);
  obj.dismissNotification = function dismissNotification(arg0) {
    const notificationDismissedInGuilds = dependencyMap().notificationDismissedInGuilds;
    notificationDismissedInGuilds.add(arg0);
    const Storage = callback(587).Storage;
    const result = Storage.set(outer1_3, notificationDismissedInGuilds);
    callback(682).batchUpdates(() => notificationDismissedInGuilds({ notificationDismissedInGuilds }));
  };
  obj.resetNotification = function resetNotification(arg0) {
    const notificationDismissedInGuilds = dependencyMap().notificationDismissedInGuilds;
    if (notificationDismissedInGuilds.has(arg0)) {
      notificationDismissedInGuilds.delete(arg0);
      const Storage = callback(587).Storage;
      const result = Storage.set(outer1_3, notificationDismissedInGuilds);
      callback(682).batchUpdates(() => notificationDismissedInGuilds({ notificationDismissedInGuilds }));
      const obj = callback(682);
    }
  };
  return obj;
});
Storage.asyncGet(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, (arg0) => {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    const obj = { notificationDismissedInGuilds: new Set(closure_0) };
    return outer1_4.setState(obj);
  });
});
let result = require("Storage").fileFinishedImporting("modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx");

export const useCommunicationDisabledNoticeStore = function useCommunicationDisabledNoticeStore(arg0) {
  const tmp = callback(require(677) /* useStoreWithEqualityFn */.useStoreWithEqualityFn(closure_4, (arg0) => {
    const items = [, ];
    ({ notificationDismissedInGuilds: arr[0], dismissNotification: arr[1] } = arg0);
    return items;
  }, require(3743) /* isIterable */.shallow), 2);
  const first = tmp[0];
  let items = [!first.has(arg0), tmp[1]];
  return items;
};
export const clearCommunicationDisabledNotice = function clearCommunicationDisabledNotice(arg0) {
  state = state.getState();
  return state.resetNotification(arg0);
};
