// Module ID: 14354
// Function ID: 109778
// Name: Row
// Dependencies: [31, 1838, 4970, 4325, 653, 33, 5079, 5073, 566, 5515, 5504, 7495, 2]
// Exports: default

// Module 14354 (Row)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { HighlightSettings } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function Row(guildId) {
  let guild;
  let isEnd;
  let isStart;
  let muted;
  guildId = guildId.guildId;
  const items = [guildId];
  ({ isStart, isEnd } = guildId);
  const callback = React.useCallback((arg0) => {
    let obj = outer1_1(outer1_2[6]);
    obj = { notify_highlights: arg0 ? tmp2.ENABLED : tmp2.DISABLED };
    const NotificationLabel = guildId(outer1_2[7]).NotificationLabel;
    const result = obj.updateGuildNotificationSettings(guildId, obj, NotificationLabel.highlights(!arg0));
  }, items);
  let obj = guildId(566);
  const items1 = [closure_6, _createForOfIteratorHelperLoose];
  const items2 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => ({ guild: outer1_4.getGuild(guildId), muted: outer1_6.isMuted(guildId), notifyHighlights: outer1_6.getNotifyHighlights(guildId) }), items2);
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
    obj.icon = jsx(importDefault(5515), { label: guild.name });
    obj.value = !muted;
    obj.onValueChange = callback;
    obj.start = isStart;
    obj.end = isEnd;
    return jsx(guildId(5504).TableSwitchRow, { label: guild.name });
  }
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsHighlightNotifications.tsx");

export default function UserSettingsHighlightNotifications() {
  let obj = stateFromStoresArray(566);
  const items = [_isNativeReflectConstruct];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => outer1_5.getFlattenedGuildIds());
  [][0] = stateFromStoresArray;
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { children: tmp };
    tmp2 = jsx(stateFromStoresArray(7495).Form, { children: tmp });
  }
  return tmp2;
};
