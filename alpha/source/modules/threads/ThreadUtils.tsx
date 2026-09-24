// Module ID: 8110
// Function ID: 8111
// Name: ThreadUtils
// Dependencies: [109, 4844, 5010, 4466, 1114, 1074, 1115, 7829, 5009, 1241, 8103, 7447, 1385, 504, 11, 4416, 2]
// Exports: getTimestampAccessibilityLabel, trackActiveThreadsPopoutOpened, trackThreadBrowserOpened, trackThreadBrowserTab, trackThreadNotificationSettingsUpdated, useLastMessageTimestamp

// Module 8110 (ThreadUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import _modDef4416 from "module_4416" /* 4416 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5009 */;
import threads_getTimestampStringDefault from "threads/getTimestampString" /* 7829 */;
import ThreadAnalyticsUtils from "ThreadAnalyticsUtils" /* 8103 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ReadStateStore from "ReadStateStore" /* 4844 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5010 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4466 */;

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

export const getTimestampString = threads_getTimestampStringDefault;
export const getTimestampAccessibilityLabel = function getTimestampAccessibilityLabel(extractTimestampResult) {
  return threads_getTimestampStringDefault(extractTimestampResult, getAccessibilityLabelFormatter);
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
    const currentChannelSettings = tmp(7447).getCurrentChannelSettings(guildId, parent_id);
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
    let tmpResult = tmp(7447);
    let result1 = tmp(7447).muteConfigToTimestamp(obj7.getMuteConfig(getGuildId.id));
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
      result1 = tmp(7447).muteConfigToTimestamp(flags.mute_config);
      const tmpResult4 = tmp(7447);
    }
    obj2.new_thread_muted_until = result1;
    const tmpResult3 = tmp(7447);
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
    valueOfResult = _modDef4416(createTimestamp).valueOf();
    const obj3 = _modDef4416(createTimestamp);
  }
  if (extractTimestampResult == null) {
    extractTimestampResult = valueOfResult;
  }
  if (extractTimestampResult == null) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(thread.id);
  }
  return extractTimestampResult;
};
