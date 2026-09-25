// Module ID: 15047
// Function ID: 15048
// Name: UserSettingsHighlightNotifications
// Dependencies: [19, 2066, 5745, 5010, 1074, 21, 6535, 6530, 504, 5891, 6616, 8045, 2]
// Exports: default

// Module 15047 (UserSettingsHighlightNotifications)
import GuildIconDefault from "GuildIcon" /* 5891 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6530 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6535 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2066 */;
import SortedGuildStore from "SortedGuildStore" /* 5745 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5010 */;

require = fn;
function Row(guildId) {
  guildId = guildId.guildId;
  const items = [guildId];
  ({ isStart, isEnd } = guildId);
  const callback = noop.useCallback((arg0) => {
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guildId, { notify_highlights: arg0 ? HighlightSettings.ENABLED : HighlightSettings.DISABLED }, NotificationLabel.highlights(!arg0));
  }, items);
  const items1 = [UserGuildSettingsStore, GuildStore];
  const items2 = [guildId];
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(items1, () => ({ guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) }), items2);
  ({ guild, muted } = stateFromStoresObject);
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (null == name) {
    return null;
  } else {
    if (!muted) {
      muted = stateFromStoresObject.notifyHighlights === HighlightSettings.DISABLED;
    }
    const obj2 = { guild };
    const obj3 = { label: guild.name, icon: jsx(GuildIconDefault, { guild }), value: !muted, onValueChange: callback, start: isStart, end: isEnd };
    return jsx(tmp2(6616).TableSwitchRow, { label: guild.name, icon: jsx(GuildIconDefault, { guild }), value: !muted, onValueChange: callback, start: isStart, end: isEnd });
  }
  const obj = guildId(504);
  tmp2 = guildId;
}
const HighlightSettings = fn(1074).HighlightSettings;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsHighlightNotifications.tsx");

export default function UserSettingsHighlightNotifications() {
  const items = [SortedGuildStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => flattenedGuildIds.getFlattenedGuildIds());
  [][0] = stateFromStoresArray;
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = { children: tmp3 };
    tmp4 = jsx(stateFromStoresArray(8045).Form, { children: tmp3 });
  }
  return tmp4;
};
