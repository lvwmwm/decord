// Module ID: 13032
// Function ID: 13033
// Name: NotificationSettingsMessageUnreadGuildActionSheet
// Dependencies: [19, 4971, 1078, 4972, 1088, 21, 558, 568, 13022, 1119, 7398, 10460, 7393, 13033, 2]

// Module 13032 (NotificationSettingsMessageUnreadGuildActionSheet)
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7398 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10460 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 13033 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4971 */;

const require = globalThis.__r;

const NotificationSettingsUtils = tmp3(7393);
require = fn;
const UserNotificationSettings = fn(1078).UserNotificationSettings;
const UnreadSetting = fn(4972).UnreadSetting;
const constants = fn(1088).GuildNotificationSettingsFlags;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  _require = guildId;
  const cResult = require("c").c(8);
  let obj = require("c");
  const guildPresetSettings = require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  if (cResult[0] !== notification) {
    let stringResult;
    if (notification === UserNotificationSettings.ALL_MESSAGES) {
      const intl = tmp(1119).intl;
      stringResult = intl.string(tmp(1119).t.eP8yWU);
    }
    cResult[0] = notification;
    cResult[1] = stringResult;
    let tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== guildId.guildId) {
    class E {
      constructor(arg0) {
        guildFlags = closure_3.getGuildFlags(closure_0.guildId);
        tmp2 = closure_2;
        obj = closure_1(closure_2[10]);
        tmp3 = closure_0;
        obj2 = closure_0(closure_2[11]);
        if (guildId === UnreadSetting.ALL_MESSAGES) {
          tmp5 = closure_6;
          UNREADS_ONLY_MENTIONS = closure_6.UNREADS_ALL_MESSAGES;
        } else {
          tmp4 = closure_6;
          UNREADS_ONLY_MENTIONS = closure_6.UNREADS_ONLY_MENTIONS;
        }
        obj1 = { flags: obj2.withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
        NotificationLabel = tmp3(tmp2[12]).NotificationLabel;
        result = obj.updateGuildNotificationSettings(closure_0.guildId, obj1, NotificationLabel.unreads(guildId));
        return;
      }
    }
    cResult[2] = guildId.guildId;
    cResult[3] = E;
  } else {
    class E {
      constructor(arg0) {
        guildFlags = closure_3.getGuildFlags(closure_0.guildId);
        tmp2 = closure_2;
        obj = closure_1(closure_2[10]);
        tmp3 = closure_0;
        obj2 = closure_0(closure_2[11]);
        if (guildId === UnreadSetting.ALL_MESSAGES) {
          tmp5 = closure_6;
          UNREADS_ONLY_MENTIONS = closure_6.UNREADS_ALL_MESSAGES;
        } else {
          tmp4 = closure_6;
          UNREADS_ONLY_MENTIONS = closure_6.UNREADS_ONLY_MENTIONS;
        }
        obj1 = { flags: obj2.withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
        NotificationLabel = tmp3(tmp2[12]).NotificationLabel;
        result = obj.updateGuildNotificationSettings(closure_0.guildId, obj1, NotificationLabel.unreads(guildId));
        return;
      }
    }
  }
  if (cResult[4] === tmp5) {
    class E {
      constructor(arg0) {
        guildFlags = closure_3.getGuildFlags(closure_0.guildId);
        tmp2 = closure_2;
        obj = closure_1(closure_2[10]);
        tmp3 = closure_0;
        obj2 = closure_0(closure_2[11]);
        if (guildId === UnreadSetting.ALL_MESSAGES) {
          tmp5 = closure_6;
          UNREADS_ONLY_MENTIONS = closure_6.UNREADS_ALL_MESSAGES;
        } else {
          tmp4 = closure_6;
          UNREADS_ONLY_MENTIONS = closure_6.UNREADS_ONLY_MENTIONS;
        }
        obj1 = { flags: obj2.withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
        NotificationLabel = tmp3(tmp2[12]).NotificationLabel;
        result = obj.updateGuildNotificationSettings(closure_0.guildId, obj1, NotificationLabel.unreads(guildId));
        return;
      }
    }
  }
  let obj2 = require("notificationSettingsGuildFlagUtils");
  cResult[4] = tmp5;
  cResult[5] = tmp8;
  cResult[6] = unread;
  cResult[7] = jsx(NotificationSettingsMessageUnreadActionSheetDefault, { disabledMentionOnlyWithReason: tmp5, value: unread, onChange: tmp8 });
}) : ((guildId) => {
  _require = guildId;
  const guildPresetSettings = require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  let stringResult;
  let obj = require("notificationSettingsGuildFlagUtils");
  const tmp4 = jsx;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1119).intl;
    stringResult = intl.string(tmp(1119).t.eP8yWU);
  }
  return tmp4(NotificationSettingsMessageUnreadActionSheetDefault, {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(toggleExpandedHistory) {
      const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId.guildId);
      const obj = NotificationSettingsModalActionCreatorsDefault;
      if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
      }
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, { flags: notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) }, NotificationLabel.unreads(toggleExpandedHistory));
    }
  });
});
