// Module ID: 8055
// Function ID: 8056
// Name: ThreadUtils
// Dependencies: [109, 4803, 4969, 4429, 1114, 1074, 1115, 7773, 4968, 1241, 8048, 7391, 1385, 504, 11, 4380, 2]
// Exports: getTimestampAccessibilityLabel, trackActiveThreadsPopoutOpened, trackThreadBrowserOpened, trackThreadBrowserTab, trackThreadNotificationSettingsUpdated, useLastMessageTimestamp

// Module 8055 (ThreadUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import _modDef4380 from "module_4380" /* 4380 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4968 */;
import getTimestampStringDefault from "getTimestampString" /* 7773 */;
import ThreadAnalyticsUtils from "ThreadAnalyticsUtils" /* 8048 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ReadStateStore from "ReadStateStore" /* 4803 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4969 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4429 */;

const require = globalThis.__r;

require = fn;
function getAccessibilityLabelFormatter() {
  const time = { minutes: util.t["1Rcf/h"], hours: util.t.vgnx51, days: util.t.fNvE50, month: null };
  const intl = util.intl;
  time.month = intl.string(util.t.P7Gygz);
  return time;
}
let closure_3 = ["can_send_message", "parent_channel_type"];
const ThreadMemberFlags = fn(1114).ThreadMemberFlags;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, UserNotificationSettings: c10 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/ThreadUtils.tsx");

export const getTimestampString = getTimestampStringDefault;
export const getTimestampAccessibilityLabel = function getTimestampAccessibilityLabel(extractTimestampResult) {
  return getTimestampStringDefault(extractTimestampResult, getAccessibilityLabelFormatter);
};
export const trackThreadBrowserTab = function trackThreadBrowserTab() {
  AppAnalyticsUtils.trackWithMetadata(constants.THREAD_BROWSER_TAB_CHANGED);
};
export const trackThreadBrowserOpened = function trackThreadBrowserOpened() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "Modal";
  }
  AppAnalyticsUtils.trackWithMetadata(constants.OPEN_MODAL, { type: "Thread Browser", location_section: str });
};
export const trackActiveThreadsPopoutOpened = function trackActiveThreadsPopoutOpened() {
  AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, { type: "Active Threads Popout" });
};
export const trackThreadNotificationSettingsUpdated = function trackThreadNotificationSettingsUpdated(getGuildId, flags) {
  const result = ThreadAnalyticsUtils.collectThreadMetadata(getGuildId);
  if (null != result) {
    const guildId = getGuildId.getGuildId();
    const parent_id = getGuildId.parent_id;
    const currentChannelSettings = tmp(7391).getCurrentChannelSettings(guildId, parent_id);
    let num = JoinedThreadsStore.flags(getGuildId.id);
    if (num == null) {
      num = 0;
    }
    function getNotificationAnalyticsString(flags) {
      if (obj.hasFlag(flags, constants.ALL_MESSAGES)) {
        let tmp6 = tmp(tmp2[11]).MessageNotificationSettings[constants2.ALL_MESSAGES];
      } else {
        if (tmpResult.hasFlag(flags, tmp3.ONLY_MENTIONS)) {
          tmp6 = tmp(tmp2[11]).MessageNotificationSettings[constants2.ONLY_MENTIONS];
        } else {
          const tmpResult2 = tmp(tmp2[12]);
          const MessageNotificationSettings = tmp(tmp2[11]).MessageNotificationSettings;
          if (hasFlagResult) {
            tmp6 = MessageNotificationSettings[tmp5.NO_MESSAGES];
          } else {
            tmp6 = MessageNotificationSettings[tmp5.NULL];
          }
          hasFlagResult = tmp(tmp2[12]).hasFlag(flags, tmp3.NO_MESSAGES);
        }
        tmpResult = tmp(tmp2[12]);
      }
      return tmp6;
    }
    let notificationAnalyticsString = getNotificationAnalyticsString(num);
    const isMutedResult = JoinedThreadsStore.isMuted(getGuildId.id);
    let tmpResult = tmp(7391);
    let result1 = tmp(7391).muteConfigToTimestamp(obj7.getMuteConfig(getGuildId.id));
    ({ can_send_message, parent_channel_type } = result);
    const obj2 = {};
    const merged = Object.assign(_objectWithoutProperties(result, closure_3));
    obj2.channel_id = getGuildId.id;
    obj2.guild_id = guildId;
    obj2.parent_id = parent_id;
    obj2.channel_type = getGuildId.type;
    obj2.has_interacted_with_thread = num & ThreadMemberFlags.HAS_INTERACTED;
    obj2.parent_is_muted = UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(guildId, parent_id);
    obj2.old_thread_notification_setting = notificationAnalyticsString;
    if (null != flags.flags) {
      notificationAnalyticsString = getNotificationAnalyticsString(flags.flags);
    }
    obj2.new_thread_notification_setting = notificationAnalyticsString;
    obj2.parent_notification_setting = currentChannelSettings.channel_message_notification_settings;
    obj2.old_thread_is_muted = isMutedResult;
    let muted = flags.muted;
    if (muted == null) {
      muted = isMutedResult;
    }
    obj2.new_thread_is_muted = muted;
    obj2.old_thread_muted_until = result1;
    if (null != flags.mute_config) {
      result1 = tmp(7391).muteConfigToTimestamp(flags.mute_config);
      const tmpResult4 = tmp(7391);
    }
    obj2.new_thread_muted_until = result1;
    const tmpResult3 = tmp(7391);
    AnalyticsUtilsDefault.track(constants.THREAD_NOTIFICATION_SETTINGS_UPDATED, obj2);
  }
};
export const useLastMessageTimestamp = function useLastMessageTimestamp(thread) {
  _require = thread;
  const items = [ReadStateStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ReadStateStore.lastMessageId(thread.id));
  let extractTimestampResult = null;
  if (null != stateFromStores) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(stateFromStores);
  }
  const threadMetadata = thread.threadMetadata;
  let createTimestamp;
  if (threadMetadata != null) {
    createTimestamp = threadMetadata.createTimestamp;
  }
  let valueOfResult = null;
  if (null != createTimestamp) {
    valueOfResult = _modDef4380(createTimestamp).valueOf();
    const obj3 = _modDef4380(createTimestamp);
  }
  if (extractTimestampResult == null) {
    extractTimestampResult = valueOfResult;
  }
  if (extractTimestampResult == null) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(thread.id);
  }
  return extractTimestampResult;
};
