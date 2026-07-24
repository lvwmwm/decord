// Module ID: 10317
// Function ID: 79655
// Name: useChannelPresetSettings
// Dependencies: [57, 1348, 4325, 653, 4326, 662, 624, 4328, 10315, 5079, 10318, 5073, 2]
// Exports: updateChannelNotificationSetting, updateChannelPreset, updateChannelToGuildDefault, updateChannelUnreadSetting, useChannelPresetInheritance, useChannelPresetSettings

// Module 10317 (useChannelPresetSettings)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { UserNotificationSettings } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { ChannelNotificationSettingsFlags as closure_8 } from "MAX_FAVORITES";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx");

export const useChannelPresetSettings = function useChannelPresetSettings(channel) {
  const _require = channel;
  let obj = _require(624);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.resolveUnreadSetting(closure_0));
  const items1 = [closure_5];
  const stateFromStores1 = _require(624).useStateFromStores(items1, () => outer1_5.resolvedMessageNotifications(closure_0));
  obj = { unread: stateFromStores, notification: stateFromStores1 };
  const obj2 = _require(624);
  obj.preset = _require(4328).presetFromSettings(stateFromStores, stateFromStores1);
  return obj;
};
export const useChannelPresetInheritance = function useChannelPresetInheritance(channel) {
  let tmp2;
  let tmp3;
  const _require = channel;
  let obj = _require(624);
  let items = [closure_5];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => channel(outer1_2[8]).filterOverrides(outer1_5.getChannelOverrides(channel.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false }));
  let items1 = [closure_5, _isNativeReflectConstruct];
  const items2 = [, , ];
  ({ guild_id: arr3[0], parent_id: arr3[1] } = channel);
  items2[2] = stateFromStoresArray;
  let obj3 = _require(624);
  obj = { inherited: !stateFromStoresArray.includes(channel.id), inheritedFrom: tmp2, inheritedPreset: tmp3 };
  [tmp2, tmp3] = callback(_require(624).useStateFromStoresArray(items1, () => {
    channel = outer1_4.getChannel(channel.parent_id);
    if (null != channel) {
      if (stateFromStoresArray.includes(channel.id)) {
        const obj3 = channel(outer1_2[7]);
        const unreadSetting = outer1_5.resolveUnreadSetting(channel);
        const items = ["parent", obj3.presetName(channel(outer1_2[7]).presetFromSettings(unreadSetting, outer1_5.resolvedMessageNotifications(channel)))];
        let items1 = items;
        const obj4 = channel(outer1_2[7]);
      }
      return items1;
    }
    const obj = channel(outer1_2[7]);
    const guildUnreadSetting = outer1_5.getGuildUnreadSetting(channel.guild_id);
    items1 = ["guild", obj.presetName(channel(outer1_2[7]).presetFromSettings(guildUnreadSetting, outer1_5.getMessageNotifications(channel.guild_id)))];
  }, items2), 2);
  return obj;
};
export const updateChannelPreset = function updateChannelPreset(guild_id, id, arg2) {
  const channelIdFlags = store.getChannelIdFlags(guild_id, id);
  if (arg2 === require(4328) /* Presets */.Presets.ALL_MESSAGES) {
    const obj4 = importDefault(5079);
    let obj = { message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: require(10318) /* resetGuildUnreadFlags */.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES) };
    const result = obj4.updateChannelOverrideSettings(guild_id, id, obj, require(5073) /* differ */.NotificationLabels.PresetAll);
    const obj6 = require(10318) /* resetGuildUnreadFlags */;
  } else if (arg2 === require(4328) /* Presets */.Presets.MENTIONS) {
    obj = importDefault(5079);
    obj = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: require(10318) /* resetGuildUnreadFlags */.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS) };
    const result1 = obj.updateChannelOverrideSettings(guild_id, id, obj, require(5073) /* differ */.NotificationLabels.PresetMentions);
    const obj3 = require(10318) /* resetGuildUnreadFlags */;
  } else if (arg2 === require(4328) /* Presets */.Presets.NOTHING) {
    const obj7 = importDefault(5079);
    const obj1 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: require(10318) /* resetGuildUnreadFlags */.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS) };
    const result2 = obj7.updateChannelOverrideSettings(guild_id, id, obj1, require(5073) /* differ */.NotificationLabels.PresetNothing);
    const obj9 = require(10318) /* resetGuildUnreadFlags */;
  }
};
export const updateChannelToGuildDefault = function updateChannelToGuildDefault(guild_id, id) {
  let obj = importDefault(5079);
  obj = { message_notifications: UserNotificationSettings.NULL, flags: require(10318) /* resetGuildUnreadFlags */.resetChannelUnreadFlags(store.getChannelIdFlags(guild_id, id)) };
  const result = obj.updateChannelOverrideSettings(guild_id, id, obj, require(5073) /* differ */.NotificationLabels.PresetDefault);
};
export const updateChannelUnreadSetting = function updateChannelUnreadSetting(guild_id, id, ALL_MESSAGES) {
  const channelIdFlags = store.getChannelIdFlags(guild_id, id);
  let obj = importDefault(5079);
  obj = {};
  if (ALL_MESSAGES === UnreadSetting.ALL_MESSAGES) {
    let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
  } else {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
  }
  obj.flags = require(10318) /* resetGuildUnreadFlags */.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS);
  const NotificationLabel = require(5073) /* differ */.NotificationLabel;
  const result = obj.updateChannelOverrideSettings(guild_id, id, obj, NotificationLabel.unreads(ALL_MESSAGES));
};
export const updateChannelNotificationSetting = function updateChannelNotificationSetting(guildId, id, message_notifications) {
  let obj = importDefault(5079);
  obj = { message_notifications };
  const NotificationLabel = require(5073) /* differ */.NotificationLabel;
  const result = obj.updateChannelOverrideSettings(guildId, id, obj, NotificationLabel.notifications(message_notifications));
};
