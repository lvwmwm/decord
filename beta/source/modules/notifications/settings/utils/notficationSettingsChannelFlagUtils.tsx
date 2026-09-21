// Module ID: 10420
// Function ID: 10421
// Name: notficationSettingsChannelFlagUtils
// Dependencies: [32, 2045, 4939, 1078, 4940, 1088, 558, 568, 565, 4942, 10418, 7366, 10421, 7361, 2]
// Exports: updateChannelNotificationSetting, updateChannelPreset, updateChannelToGuildDefault, updateChannelUnreadSetting

// Module 10420 (notficationSettingsChannelFlagUtils)
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 4942 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7361 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7366 */;
import notifications_NotificationUtils from "notifications/NotificationUtils" /* 10418 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10421 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4939 */;

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1078).UserNotificationSettings;
const UnreadSetting = fn(4940).UnreadSetting;
const constants = fn(1088).ChannelNotificationSettingsFlags;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return UserGuildSettingsStore.resolveUnreadSetting(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserGuildSettingsStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function u() {
      return UserGuildSettingsStore.resolvedMessageNotifications(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp8, tmp10);
  if (cResult[6] === stateFromStores1) {
    if (cResult[7] === stateFromStores) {
      let tmp12 = cResult[8];
    }
    if (cResult[9] === stateFromStores1) {
      if (cResult[10] === tmp12) {
        if (cResult[11] === stateFromStores) {
          let tmp14 = cResult[12];
        }
        return tmp14;
      }
    }
    const obj2 = { unread: stateFromStores, notification: stateFromStores1, preset: tmp12 };
    cResult[9] = stateFromStores1;
    cResult[10] = tmp12;
    cResult[11] = stateFromStores;
    cResult[12] = obj2;
    tmp14 = obj2;
  }
  const tmpResult3 = require("useStateFromStores");
  const presetFromSettingsResult = require("notificationSettingsPresetUtils").presetFromSettings(stateFromStores, stateFromStores1);
  cResult[6] = stateFromStores1;
  cResult[7] = stateFromStores;
  cResult[8] = presetFromSettingsResult;
  tmp12 = presetFromSettingsResult;
}) : ((arg0) => {
  _require = arg0;
  const items = [UserGuildSettingsStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => UserGuildSettingsStore.resolveUnreadSetting(closure_0));
  const obj = require("useStateFromStores");
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => UserGuildSettingsStore.resolvedMessageNotifications(closure_0));
  const obj3 = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = require("useStateFromStores");
  obj3.preset = require("notificationSettingsPresetUtils").presetFromSettings(stateFromStores, stateFromStores1);
  return obj3;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx");

export const useChannelPresetSettings = tmp2;
export const useChannelPresetInheritance = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id) => {
  _require = guild_id;
  const cResult = require("c").c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserGuildSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id.guild_id) {
    class S {
      constructor() {
        obj = closure_0(closure_2[10]);
        return obj.filterOverrides(closure_5.getChannelOverrides(closure_0.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false });
      }
    }
    cResult[1] = guild_id.guild_id;
    cResult[2] = S;
    const tmp6 = S;
  } else {
    class S {
      constructor() {
        obj = closure_0(closure_2[10]);
        return obj.filterOverrides(closure_5.getChannelOverrides(closure_0.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false });
      }
    }
  }
  let obj = require("c");
  const stateFromStoresArray = require("useStateFromStores").useStateFromStoresArray(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        obj = closure_0(closure_2[10]);
        return obj.filterOverrides(closure_5.getChannelOverrides(closure_0.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false });
      }
    }
    let items1 = [UserGuildSettingsStore, ChannelStore];
    cResult[3] = items1;
  } else {
    class S {
      constructor() {
        obj = closure_0(closure_2[10]);
        return obj.filterOverrides(closure_5.getChannelOverrides(closure_0.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false });
      }
    }
  }
  if (cResult[4] === guild_id.guild_id) {
    class S {
      constructor() {
        obj = closure_0(closure_2[10]);
        return obj.filterOverrides(closure_5.getChannelOverrides(closure_0.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false });
      }
    }
  }
  const fn = function f() {
    const channel = ChannelStore.getChannel(guild_id.parent_id);
    if (null != channel) {
      if (stateFromStoresArray.includes(channel.id)) {
        const obj3 = notificationSettingsPresetUtils;
        const unreadSetting = UserGuildSettingsStore.resolveUnreadSetting(channel);
        const items = ["parent", obj3.presetName(notificationSettingsPresetUtils.presetFromSettings(unreadSetting, UserGuildSettingsStore.resolvedMessageNotifications(channel)))];
        let items1 = items;
      }
      return items1;
    }
    const obj = notificationSettingsPresetUtils;
    const guildUnreadSetting = UserGuildSettingsStore.getGuildUnreadSetting(tmp.guild_id);
    items1 = ["guild", obj.presetName(notificationSettingsPresetUtils.presetFromSettings(guildUnreadSetting, UserGuildSettingsStore.getMessageNotifications(guild_id.guild_id)))];
  };
  const items2 = [, , ];
  ({ guild_id: arr3[0], parent_id: arr3[1] } = guild_id);
  items2[2] = stateFromStoresArray;
  cResult[4] = guild_id.guild_id;
  cResult[5] = guild_id.parent_id;
  cResult[6] = stateFromStoresArray;
  cResult[7] = fn;
  cResult[8] = items2;
}) : ((id) => {
  _require = id;
  let items = [UserGuildSettingsStore];
  const stateFromStoresArray = require("useStateFromStores").useStateFromStoresArray(items, () => notifications_NotificationUtils.filterOverrides(UserGuildSettingsStore.getChannelOverrides(id.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false }));
  let obj = require("useStateFromStores");
  let items1 = [UserGuildSettingsStore, ChannelStore];
  const items2 = [, , ];
  ({ guild_id: arr3[0], parent_id: arr3[1] } = id);
  items2[2] = stateFromStoresArray;
  let obj3 = require("useStateFromStores");
  const tmp = _slicedToArray(require("useStateFromStores").useStateFromStoresArray(items1, () => {
    const channel = ChannelStore.getChannel(id.parent_id);
    if (null != channel) {
      if (stateFromStoresArray.includes(channel.id)) {
        const obj3 = notificationSettingsPresetUtils;
        const unreadSetting = UserGuildSettingsStore.resolveUnreadSetting(channel);
        const items = ["parent", obj3.presetName(notificationSettingsPresetUtils.presetFromSettings(unreadSetting, UserGuildSettingsStore.resolvedMessageNotifications(channel)))];
        let items1 = items;
      }
      return items1;
    }
    const obj = notificationSettingsPresetUtils;
    const guildUnreadSetting = UserGuildSettingsStore.getGuildUnreadSetting(tmp.guild_id);
    items1 = ["guild", obj.presetName(notificationSettingsPresetUtils.presetFromSettings(guildUnreadSetting, UserGuildSettingsStore.getMessageNotifications(id.guild_id)))];
  }, items2), 2);
  [tmp2, tmp3] = tmp;
  return { inherited: !stateFromStoresArray.includes(id.id), inheritedFrom: tmp2, inheritedPreset: tmp3 };
});
export const updateChannelPreset = function updateChannelPreset(guild_id, id, arg2) {
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
  if (arg2 === notificationSettingsPresetUtils.Presets.ALL_MESSAGES) {
    const obj4 = NotificationSettingsModalActionCreatorsDefault;
    const obj2 = { message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: tmp2(10421).withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES) };
    const result = obj4.updateChannelOverrideSettings(guild_id, id, obj2, tmp2(7361).NotificationLabels.PresetAll);
    const tmp2Result = tmp2(10421);
  } else if (arg2 === tmp2(4942).Presets.MENTIONS) {
    const obj = NotificationSettingsModalActionCreatorsDefault;
    const obj3 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: tmp2(10421).withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS) };
    const result1 = obj.updateChannelOverrideSettings(guild_id, id, obj3, tmp2(7361).NotificationLabels.PresetMentions);
    const tmp2Result3 = tmp2(10421);
  } else if (arg2 === tmp2(4942).Presets.NOTHING) {
    const obj7 = NotificationSettingsModalActionCreatorsDefault;
    const obj5 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: tmp2(10421).withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS) };
    const result2 = obj7.updateChannelOverrideSettings(guild_id, id, obj5, tmp2(7361).NotificationLabels.PresetNothing);
    const tmp2Result4 = tmp2(10421);
  }
};
export const updateChannelToGuildDefault = function updateChannelToGuildDefault(guild_id, id) {
  const obj2 = { message_notifications: UserNotificationSettings.NULL, flags: null };
  const obj = NotificationSettingsModalActionCreatorsDefault;
  obj2.flags = notificationSettingsFlagUtils.resetChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(guild_id, id));
  const result = obj.updateChannelOverrideSettings(guild_id, id, obj2, NotificationSettingsUtils.NotificationLabels.PresetDefault);
};
export const updateChannelUnreadSetting = function updateChannelUnreadSetting(guild_id, id, ALL_MESSAGES) {
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
  const obj = NotificationSettingsModalActionCreatorsDefault;
  if (ALL_MESSAGES === UnreadSetting.ALL_MESSAGES) {
    let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
  } else {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
  }
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  const result = obj.updateChannelOverrideSettings(guild_id, id, { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) }, NotificationLabel.unreads(ALL_MESSAGES));
};
export const updateChannelNotificationSetting = function updateChannelNotificationSetting(guild_id, id, message_notifications) {
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(guild_id, id, { message_notifications }, NotificationLabel.notifications(message_notifications));
};
