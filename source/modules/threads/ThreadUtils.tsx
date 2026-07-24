// Module ID: 7022
// Function ID: 56387
// Name: getAccessibilityLabelFormatter
// Dependencies: [29, 4142, 4325, 3760, 1211, 653, 1212, 6731, 4324, 675, 7015, 5073, 1360, 566, 21, 3712, 2]
// Exports: getTimestampAccessibilityLabel, trackActiveThreadsPopoutOpened, trackThreadBrowserOpened, trackThreadBrowserTab, trackThreadNotificationSettingsUpdated, useLastMessageTimestamp

// Module 7022 (getAccessibilityLabelFormatter)
import _objectWithoutProperties from "_objectWithoutProperties";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { ThreadMemberFlags } from "AbortCodes";
import ME from "ME";

let closure_10;
let closure_9;
const require = arg1;
function getAccessibilityLabelFormatter() {
  const obj = { minutes: require(1212) /* getSystemLocale */.t["1Rcf/h"], hours: require(1212) /* getSystemLocale */.t.vgnx51, days: require(1212) /* getSystemLocale */.t.fNvE50 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.month = intl.string(require(1212) /* getSystemLocale */.t.P7Gygz);
  return obj;
}
let closure_3 = ["can_send_message", "parent_channel_type"];
({ AnalyticEvents: closure_9, UserNotificationSettings: closure_10 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/threads/ThreadUtils.tsx");

export const getTimestampString = require("getTimestampString");
export const getTimestampAccessibilityLabel = function getTimestampAccessibilityLabel(extractTimestampResult) {
  return importDefault(6731)(extractTimestampResult, getAccessibilityLabelFormatter);
};
export const trackThreadBrowserTab = function trackThreadBrowserTab() {
  require(4324) /* _createForOfIteratorHelperLoose */.trackWithMetadata(constants.THREAD_BROWSER_TAB_CHANGED);
};
export const trackThreadBrowserOpened = function trackThreadBrowserOpened() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "Modal";
  }
  let obj = require(4324) /* _createForOfIteratorHelperLoose */;
  obj = { type: "Thread Browser", location_section: str };
  obj.trackWithMetadata(constants.OPEN_MODAL, obj);
};
export const trackActiveThreadsPopoutOpened = function trackActiveThreadsPopoutOpened() {
  importDefault(675).track(constants.OPEN_POPOUT, { type: "Active Threads Popout" });
};
export const trackThreadNotificationSettingsUpdated = function trackThreadNotificationSettingsUpdated(outer1_0, outer1_1) {
  let can_send_message;
  let parent_channel_type;
  function getNotificationAnalyticsString(flags) {
    if (obj.hasFlag(flags, outer1_8.ALL_MESSAGES)) {
      let tmp11 = tmp(tmp2[11]).MessageNotificationSettings[outer1_10.ALL_MESSAGES];
    } else {
      if (tmpResult.hasFlag(flags, outer1_8.ONLY_MENTIONS)) {
        tmp11 = tmp4(tmp5[11]).MessageNotificationSettings[outer1_10.ONLY_MENTIONS];
      } else {
        const tmp4Result = tmp4(tmp5[12]);
        const MessageNotificationSettings = outer1_0(outer1_2[11]).MessageNotificationSettings;
        if (hasFlagResult) {
          tmp11 = MessageNotificationSettings[tmp10.NO_MESSAGES];
        } else {
          tmp11 = MessageNotificationSettings[tmp10.NULL];
        }
        hasFlagResult = tmp4(tmp5[12]).hasFlag(flags, outer1_8.NO_MESSAGES);
      }
      tmpResult = tmp(tmp2[12]);
    }
    return tmp11;
  }
  let obj = require(7015) /* collectThreadMetadata */;
  const result = obj.collectThreadMetadata(outer1_0);
  if (null != result) {
    const guildId = outer1_0.getGuildId();
    const parent_id = outer1_0.parent_id;
    const currentChannelSettings = require(5073) /* differ */.getCurrentChannelSettings(guildId, parent_id);
    const flagsResult = closure_7.flags(outer1_0.id);
    let num = 0;
    if (null != flagsResult) {
      num = flagsResult;
    }
    let notificationAnalyticsString = getNotificationAnalyticsString(num);
    let isMutedResult = closure_7.isMuted(outer1_0.id);
    const obj6 = require(5073) /* differ */;
    let result1 = require(5073) /* differ */.muteConfigToTimestamp(closure_7.getMuteConfig(outer1_0.id));
    ({ can_send_message, parent_channel_type } = result);
    obj = {};
    const merged = Object.assign(callback(result, closure_3));
    obj["channel_id"] = outer1_0.id;
    obj["guild_id"] = guildId;
    obj["parent_id"] = parent_id;
    obj["channel_type"] = outer1_0.type;
    obj["has_interacted_with_thread"] = num & ThreadMemberFlags.HAS_INTERACTED;
    obj["parent_is_muted"] = guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(guildId, parent_id);
    obj["old_thread_notification_setting"] = notificationAnalyticsString;
    if (null != outer1_1.flags) {
      notificationAnalyticsString = getNotificationAnalyticsString(outer1_1.flags);
    }
    obj["new_thread_notification_setting"] = notificationAnalyticsString;
    obj["parent_notification_setting"] = currentChannelSettings.channel_message_notification_settings;
    obj["old_thread_is_muted"] = isMutedResult;
    const muted = outer1_1.muted;
    if (null != muted) {
      isMutedResult = muted;
    }
    obj["new_thread_is_muted"] = isMutedResult;
    obj["old_thread_muted_until"] = result1;
    if (null != outer1_1.mute_config) {
      result1 = require(5073) /* differ */.muteConfigToTimestamp(outer1_1.mute_config);
      const obj4 = require(5073) /* differ */;
    }
    obj["new_thread_muted_until"] = result1;
    const obj2 = require(5073) /* differ */;
    importDefault(675).track(constants.THREAD_NOTIFICATION_SETTINGS_UPDATED, obj);
    const obj5 = importDefault(675);
  }
};
export const useLastMessageTimestamp = function useLastMessageTimestamp(thread) {
  const _require = thread;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.lastMessageId(thread.id));
  let extractTimestampResult = null;
  if (null != stateFromStores) {
    extractTimestampResult = importDefault(21).extractTimestamp(stateFromStores);
    const obj2 = importDefault(21);
  }
  const threadMetadata = thread.threadMetadata;
  let createTimestamp;
  if (null != threadMetadata) {
    createTimestamp = threadMetadata.createTimestamp;
  }
  extractTimestampResult = null;
  if (null != createTimestamp) {
    extractTimestampResult = importDefault(3712)(createTimestamp).valueOf();
    const obj3 = importDefault(3712)(createTimestamp);
  }
  if (null == extractTimestampResult) {
    extractTimestampResult = importDefault(21).extractTimestamp(thread.id);
    const obj4 = importDefault(21);
  }
  return extractTimestampResult;
};
