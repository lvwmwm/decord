// Module ID: 12514
// Function ID: 12515
// Name: NotificationSettingsMessageUnreadChannelActionSheet
// Dependencies: [19, 5071, 1085, 5072, 1095, 21, 558, 576, 9851, 1126, 6614, 9852, 6609, 12513, 2]

// Module 12514 (NotificationSettingsMessageUnreadChannelActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import ReadStateConstants from "ReadStateConstants" /* 5072 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6614 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 9852 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 12513 */;
import react from "react" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp4;
const NotificationSettingsUtils = tmp4(6609);
const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
let closure_6 = UserSettingsConstants.ChannelNotificationSettingsFlags;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let notification;
  let tmp5;
  let unread;
  _require = channel;
  let obj = require("react");
  const cResult = obj.c(9);
  const obj2 = require("notficationSettingsChannelFlagUtils");
  const channelPresetSettings = obj2.useChannelPresetSettings(channel.channel);
  ({ unread, notification } = channelPresetSettings);
  if (cResult[0] !== notification) {
    let stringResult;
    if (notification === UserNotificationSettings.ALL_MESSAGES) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.eP8yWU);
    }
    cResult[0] = notification;
    cResult[1] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === channel.channel.guild_id) {
    let tmp8;
    if (cResult[3] === channel.channel.id) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp8) {
        let tmp9;
        if (cResult[7] === unread) {
          tmp9 = cResult[8];
        }
        return tmp9;
      }
    }
    const tmp12 = jsx(NotificationSettingsMessageUnreadActionSheetDefault, { value: unread, disabledMentionOnlyWithReason: tmp5, onChange: tmp8 });
    cResult[5] = tmp5;
    cResult[6] = tmp8;
    cResult[7] = unread;
    cResult[8] = tmp12;
    tmp9 = tmp12;
  }
  const fn = function c(toggleExpandedHistory) {
    let NotificationLabel;
    let UNREADS_ONLY_MENTIONS;
    let withChannelUnreadFlags;
    const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id);
    const obj = { guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: { flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) }, label: NotificationLabel.unreads(toggleExpandedHistory) };
    const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
    NotificationSettingsModalActionCreatorsDefault;
    withChannelUnreadFlags = notificationSettingsFlagUtils.withChannelUnreadFlags;
    notificationSettingsFlagUtils;
    if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
      UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
    } else {
      UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
    }
    ({ flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) });
    NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = updateChannelOverrideSettings(obj);
  };
  cResult[2] = channel.channel.guild_id;
  cResult[3] = channel.channel.id;
  cResult[4] = fn;
  tmp8 = fn;
}) : ((channel) => {
  let notification;
  let stringResult;
  let unread;
  _require = channel;
  let obj = require("notficationSettingsChannelFlagUtils");
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  ({ unread, notification } = channelPresetSettings);
  let tmp4 = jsx;
  const obj2 = {
    value: unread,
    disabledMentionOnlyWithReason: stringResult,
    onChange(toggleExpandedHistory) {
      let NotificationLabel;
      let UNREADS_ONLY_MENTIONS;
      let withChannelUnreadFlags;
      const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id);
      const obj = { guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: { flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) }, label: NotificationLabel.unreads(toggleExpandedHistory) };
      const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
      NotificationSettingsModalActionCreatorsDefault;
      withChannelUnreadFlags = notificationSettingsFlagUtils.withChannelUnreadFlags;
      notificationSettingsFlagUtils;
      if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
        UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
      }
      ({ flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) });
      NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateChannelOverrideSettings(obj);
    }
  };
  stringResult = undefined;
  const tmp5 = NotificationSettingsMessageUnreadActionSheetDefault;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t.eP8yWU);
  }
  return tmp4(tmp5, obj2);
});
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx");

export default tmp3;
