// Module ID: 1918
// Function ID: 21704
// Name: DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY
// Dependencies: []
// Exports: clearCommunicationDisabledNotice, useCommunicationDisabledNoticeStore

// Module 1918 (DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY)
let closure_2 = importDefault(dependencyMap[0]);
const DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY = arg1(dependencyMap[1]).DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY;
let closure_4 = arg1(dependencyMap[3]).createStore((arg0, arg1) => {
  arg1 = arg0;
  const dependencyMap = arg1;
  const obj = {};
  const Storage = arg1(dependencyMap[2]).Storage;
  let items = Storage.get(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY);
  if (null == items) {
    items = [];
  }
  obj.notificationDismissedInGuilds = new Set(items);
  obj.dismissNotification = function dismissNotification(arg0) {
    const notificationDismissedInGuilds = arg1().notificationDismissedInGuilds;
    arg0 = notificationDismissedInGuilds;
    notificationDismissedInGuilds.add(arg0);
    const Storage = arg0(arg1[2]).Storage;
    const result = Storage.set(closure_3, notificationDismissedInGuilds);
    arg0(arg1[4]).batchUpdates(() => notificationDismissedInGuilds({ notificationDismissedInGuilds }));
  };
  obj.resetNotification = function resetNotification(arg0) {
    const notificationDismissedInGuilds = arg1().notificationDismissedInGuilds;
    arg0 = notificationDismissedInGuilds;
    if (notificationDismissedInGuilds.has(arg0)) {
      notificationDismissedInGuilds.delete(arg0);
      const Storage = arg0(arg1[2]).Storage;
      const result = Storage.set(closure_3, notificationDismissedInGuilds);
      arg0(arg1[4]).batchUpdates(() => notificationDismissedInGuilds({ notificationDismissedInGuilds }));
      const obj = arg0(arg1[4]);
    }
  };
  return obj;
});
const Storage = arg1(dependencyMap[2]).Storage;
Storage.asyncGet(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, (arg0) => {
  const arg1 = arg0;
  arg1(dependencyMap[4]).batchUpdates(() => {
    const obj = { notificationDismissedInGuilds: new Set(arg0) };
    return state.setState(obj);
  });
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx");

export const useCommunicationDisabledNoticeStore = function useCommunicationDisabledNoticeStore(arg0) {
  const tmp = callback(arg1(dependencyMap[5]).useStoreWithEqualityFn(closure_4, (arg0) => {
    const items = [, ];
    ({ notificationDismissedInGuilds: arr[0], dismissNotification: arr[1] } = arg0);
    return items;
  }, arg1(dependencyMap[6]).shallow), 2);
  const first = tmp[0];
  const items = [!first.has(arg0), tmp[1]];
  return items;
};
export const clearCommunicationDisabledNotice = function clearCommunicationDisabledNotice(arg0) {
  const state = state.getState();
  return state.resetNotification(arg0);
};
