// Module ID: 8339
// Function ID: 8340
// Name: ThreadUtils
// Dependencies: [109, 6836, 6769, 4943, 1113, 1072, 1114, 7671, 5755, 1253, 8328, 7277, 1397, 504, 11, 2044, 2]
// Exports: getTimestampAccessibilityLabel, trackActiveThreadsPopoutOpened, trackThreadBrowserOpened, trackThreadBrowserTab, trackThreadNotificationSettingsUpdated, useLastMessageTimestamp

// Module 8339 (ThreadUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ThreadConstants from "ThreadConstants" /* 1113 */;
import intl2 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import _modDef2044 from "module_2044" /* 2044 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5755 */;
import getTimestampStringDefault from "getTimestampString" /* 7671 */;
import ThreadAnalyticsUtils from "ThreadAnalyticsUtils" /* 8328 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4943 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let tmp;
const NotificationSettingsUtils = tmp(7277);
function getAccessibilityLabelFormatter() {
  let intl;
  const time = { minutes: intl2.t["1Rcf/h"], hours: intl2.t.vgnx51, days: intl2.t.fNvE50, month: intl.string(intl2.t.P7Gygz) };
  intl = intl2.intl;
  return time;
}
let closure_3 = ["can_send_message", "parent_channel_type"];
const ThreadMemberFlags = ThreadConstants.ThreadMemberFlags;
({ AnalyticEvents: c9, UserNotificationSettings: c10 } = Constants);
let result = size.fileFinishedImporting("modules/threads/ThreadUtils.tsx");

export const getTimestampString = getTimestampStringDefault;
export function getTimestampAccessibilityLabel(extractTimestampResult) {
  return getTimestampStringDefault(extractTimestampResult, getAccessibilityLabelFormatter);
}
export function trackThreadBrowserTab() {
  const obj = AppAnalyticsUtils;
  obj.trackWithMetadata(constants.THREAD_BROWSER_TAB_CHANGED);
}
export function trackThreadBrowserOpened() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "Modal";
  }
  const obj = AppAnalyticsUtils;
  obj.trackWithMetadata(constants.OPEN_MODAL, { type: "Thread Browser", location_section: str });
}
export function trackActiveThreadsPopoutOpened() {
  const obj = AnalyticsUtilsDefault;
  obj.track(constants.OPEN_POPOUT, { type: "Active Threads Popout" });
}
export function trackThreadNotificationSettingsUpdated(getGuildId, flags) {
  let can_send_message;
  let constants2;
  let muted;
  let parent_channel_type;
  const tmp = require;
  const tmp2 = dependencyMap;
  let obj = ThreadAnalyticsUtils;
  const result = obj.collectThreadMetadata(getGuildId);
  if (null != result) {
    const guildId = getGuildId.getGuildId();
    const parent_id = getGuildId.parent_id;
    let tmpResult = NotificationSettingsUtils;
    const currentChannelSettings = tmpResult.getCurrentChannelSettings(guildId, parent_id);
    let num = JoinedThreadsStore.flags(getGuildId.id);
    if (num == null) {
      num = 0;
    }
    function getNotificationAnalyticsString(flags) {
      let tmp6;
      const obj = require("FlagUtils");
      if (obj.hasFlag(flags, constants.ALL_MESSAGES)) {
        tmp6 = tmp(tmp2[11]).MessageNotificationSettings[constants2.ALL_MESSAGES];
      } else {
        const tmpResult = require("FlagUtils");
        if (tmpResult.hasFlag(flags, constants.ONLY_MENTIONS)) {
          tmp6 = tmp(tmp2[11]).MessageNotificationSettings[constants2.ONLY_MENTIONS];
        } else {
          const tmpResult2 = require("FlagUtils");
          const hasFlagResult = tmpResult2.hasFlag(flags, constants.NO_MESSAGES);
          const MessageNotificationSettings = tmp(tmp2[11]).MessageNotificationSettings;
          if (hasFlagResult) {
            tmp6 = MessageNotificationSettings[tmp5.NO_MESSAGES];
          } else {
            tmp6 = MessageNotificationSettings[tmp5.NULL];
          }
        }
      }
      return tmp6;
    }
    let notificationAnalyticsString = getNotificationAnalyticsString(num);
    const isMutedResult = JoinedThreadsStore.isMuted(getGuildId.id);
    const tmpResult3 = NotificationSettingsUtils;
    let result1 = tmpResult3.muteConfigToTimestamp(obj7.getMuteConfig(getGuildId.id));
    ({ can_send_message, parent_channel_type } = result);
    const obj2 = { channel_id: getGuildId.id, guild_id: guildId, parent_id, channel_type: getGuildId.type, has_interacted_with_thread: num & ThreadMemberFlags.HAS_INTERACTED, parent_is_muted: UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(guildId, parent_id), old_thread_notification_setting: notificationAnalyticsString, new_thread_notification_setting: notificationAnalyticsString, parent_notification_setting: currentChannelSettings.channel_message_notification_settings, old_thread_is_muted: isMutedResult, new_thread_is_muted: muted, old_thread_muted_until: result1, new_thread_muted_until: result1 };
    const merged = Object.assign(_objectWithoutProperties(result, closure_3));
    if (null != flags.flags) {
      notificationAnalyticsString = getNotificationAnalyticsString(flags.flags);
    }
    muted = flags.muted;
    if (muted == null) {
      muted = isMutedResult;
    }
    if (null != flags.mute_config) {
      const tmpResult4 = NotificationSettingsUtils;
      result1 = tmpResult4.muteConfigToTimestamp(flags.mute_config);
    }
    const obj5 = AnalyticsUtilsDefault;
    obj5.track(constants.THREAD_NOTIFICATION_SETTINGS_UPDATED, obj2);
  }
}
export function useLastMessageTimestamp(thread) {
  _require = thread;
  const items = [ReadStateStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ReadStateStore.lastMessageId(thread.id));
  let extractTimestampResult = null;
  if (null != stateFromStores) {
    const obj2 = SnowflakeUtilsDefault;
    extractTimestampResult = obj2.extractTimestamp(stateFromStores);
  }
  const threadMetadata = thread.threadMetadata;
  let createTimestamp;
  if (threadMetadata != null) {
    createTimestamp = threadMetadata.createTimestamp;
  }
  let valueOfResult = null;
  if (null != createTimestamp) {
    const obj3 = _modDef2044(createTimestamp);
    valueOfResult = obj3.valueOf();
  }
  if (extractTimestampResult == null) {
    extractTimestampResult = valueOfResult;
  }
  if (extractTimestampResult == null) {
    const obj4 = SnowflakeUtilsDefault;
    extractTimestampResult = obj4.extractTimestamp(thread.id);
  }
  return extractTimestampResult;
}
