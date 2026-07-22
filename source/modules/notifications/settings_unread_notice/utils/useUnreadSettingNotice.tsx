// Module ID: 10417
// Function ID: 80264
// Name: useUnreadSettingNotice
// Dependencies: []
// Exports: default

// Module 10417 (useUnreadSettingNotice)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx");

export default function useUnreadSettingNotice(id) {
  const arg1 = id;
  let obj = arg1(dependencyMap[3]);
  const shouldUseNewNotificationSystem = obj.useShouldUseNewNotificationSystem("useShouldRenderBanner");
  const importDefault = shouldUseNewNotificationSystem;
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  const callback = tmp2[1];
  const items = [id.id];
  const effect = React.useEffect(() => {
    callback("");
  }, items);
  const items1 = [importDefault(dependencyMap[5])];
  const items2 = [first, shouldUseNewNotificationSystem, arg1(dependencyMap[4]).useStateFromStores(items1, () => shouldUseNewNotificationSystem(first[5]).getLastActionTime(arg0.id)), id];
  const effect1 = React.useEffect((self) => {
    let hasItem = set.has(self.type);
    if (hasItem) {
      hasItem = first !== self.id;
    }
    if (hasItem) {
      hasItem = shouldUseNewNotificationSystem;
    }
    if (hasItem) {
      hasItem = shouldUseNewNotificationSystem(first[5]).maybeAutoUpgradeChannel(self.id);
      const obj = shouldUseNewNotificationSystem(first[5]);
    }
    if (hasItem) {
      callback(self.id);
    }
  }, items2);
  obj = { showUnreadsNotice: first === id.id, clearUnreadsNotice: React.useCallback(() => callback(""), []) };
  return obj;
};
