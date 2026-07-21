// Module ID: 14229
// Function ID: 107547
// Name: Row
// Dependencies: []
// Exports: default

// Module 14229 (Row)
function Row(guildId) {
  let guild;
  let isEnd;
  let isStart;
  let muted;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const items = [guildId];
  ({ isStart, isEnd } = guildId);
  const callback = React.useCallback((arg0) => {
    let obj = callback(closure_2[6]);
    obj = { notify_highlights: arg0 ? tmp2.ENABLED : tmp2.DISABLED };
    const NotificationLabel = guildId(closure_2[7]).NotificationLabel;
    const result = obj.updateGuildNotificationSettings(guildId, obj, NotificationLabel.highlights(!arg0));
  }, items);
  let obj = arg1(dependencyMap[8]);
  const items1 = [closure_6, closure_4];
  const items2 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => ({ guild: guild.getGuild(guildId), muted: closure_6.isMuted(guildId), notifyHighlights: closure_6.getNotifyHighlights(guildId) }), items2);
  ({ guild, muted } = stateFromStoresObject);
  let name;
  if (null != guild) {
    name = guild.name;
  }
  if (null == name) {
    return null;
  } else {
    if (!muted) {
      muted = stateFromStoresObject.notifyHighlights === HighlightSettings.DISABLED;
    }
    obj = { guild };
    obj = { label: guild.name };
    obj.icon = jsx(importDefault(dependencyMap[9]), obj);
    obj.value = !muted;
    obj.onValueChange = callback;
    obj.start = isStart;
    obj.end = isEnd;
    return jsx(arg1(dependencyMap[10]).TableSwitchRow, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const HighlightSettings = arg1(dependencyMap[4]).HighlightSettings;
const jsx = arg1(dependencyMap[5]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsHighlightNotifications.tsx");

export default function UserSettingsHighlightNotifications() {
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const arg1 = stateFromStoresArray;
  [][0] = stateFromStoresArray;
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { children: tmp };
    tmp2 = jsx(arg1(dependencyMap[11]).Form, obj);
  }
  return tmp2;
};
