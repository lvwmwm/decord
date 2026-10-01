// Module ID: 15073
// Function ID: 15074
// Name: UserSettingsHighlightNotifications
// Dependencies: [19, 2067, 5750, 5017, 1074, 21, 6540, 6535, 504, 5896, 6621, 8053, 2]
// Exports: default

// Module 15073 (UserSettingsHighlightNotifications)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import GuildIconDefault from "GuildIcon" /* 5896 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6535 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import size from "module_2" /* 2 */;

function Row(guildId) {
  let guild;
  let isEnd;
  let isStart;
  let muted;
  guildId = guildId.guildId;
  const items = [guildId];
  ({ isStart, isEnd } = guildId);
  const callback = react.useCallback((arg0) => {
    const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
    const obj = { notify_highlights: arg0 ? HighlightSettings.ENABLED : HighlightSettings.DISABLED };
    NotificationSettingsModalActionCreatorsDefault;
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.highlights(!arg0));
  }, items);
  const tmp2 = guildId;
  let obj = guildId(504);
  const items1 = [UserGuildSettingsStore, GuildStore];
  const items2 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => {
    const obj = { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
    return obj;
  }, items2);
  ({ guild, muted } = stateFromStoresObject);
  let name1;
  const notifyHighlights = stateFromStoresObject.notifyHighlights;
  if (guild != null) {
    name1 = guild.name;
  }
  if (null == name1) {
    return null;
  } else {
    const name = guild.name;
    if (!muted) {
      muted = notifyHighlights === HighlightSettings.DISABLED;
    }
    const tmp7 = !muted;
    jsx(GuildIconDefault, { guild });
    return jsx(tmp2(6621).TableSwitchRow, { label: name, icon: jsx(GuildIconDefault, { guild }), value: tmp7, onValueChange: callback, start: isStart, end: isEnd });
  }
}
const HighlightSettings = Constants.HighlightSettings;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsHighlightNotifications.tsx");

export default function UserSettingsHighlightNotifications() {
  let flattenedGuildIds;
  let stateFromStoresArray;
  const items = [SortedGuildStore];
  const obj = stateFromStoresArray(504);
  const tmp = stateFromStoresArray;
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => flattenedGuildIds.getFlattenedGuildIds());
  [][0] = stateFromStoresArray;
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    tmp4 = jsx(tmp(8053).Form, { children: tmp3 });
  }
  return tmp4;
};
