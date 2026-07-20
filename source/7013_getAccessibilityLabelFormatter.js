// Module ID: 7013
// Function ID: 56310
// Name: getAccessibilityLabelFormatter
// Dependencies: []
// Exports: getTimestampAccessibilityLabel, trackActiveThreadsPopoutOpened, trackThreadBrowserOpened, trackThreadBrowserTab, trackThreadNotificationSettingsUpdated, useLastMessageTimestamp

// Module 7013 (getAccessibilityLabelFormatter)
function getAccessibilityLabelFormatter() {
  const obj = { minutes: arg1(dependencyMap[6]).t.1Rcf/h, hours: arg1(dependencyMap[6]).t.vgnx51, days: arg1(dependencyMap[6]).t.fNvE50 };
  const intl = arg1(dependencyMap[6]).intl;
  obj.month = intl.string(arg1(dependencyMap[6]).t.P7Gygz);
  return obj;
}
let closure_3 = [true, true];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const ThreadMemberFlags = arg1(dependencyMap[4]).ThreadMemberFlags;
({ AnalyticEvents: closure_9, UserNotificationSettings: closure_10 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/threads/ThreadUtils.tsx");

export const getTimestampString = importDefault(dependencyMap[7]);
export const getTimestampAccessibilityLabel = function getTimestampAccessibilityLabel(extractTimestampResult) {
  return importDefault(dependencyMap[7])(extractTimestampResult, getAccessibilityLabelFormatter);
};
export const trackThreadBrowserTab = function trackThreadBrowserTab() {
  arg1(dependencyMap[8]).trackWithMetadata(constants.THREAD_BROWSER_TAB_CHANGED);
};
export const trackThreadBrowserOpened = function trackThreadBrowserOpened() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "Modal";
  }
  let obj = arg1(dependencyMap[8]);
  obj = { type: "Thread Browser", location_section: str };
  obj.trackWithMetadata(constants.OPEN_MODAL, obj);
};
export const trackActiveThreadsPopoutOpened = function trackActiveThreadsPopoutOpened() {
  importDefault(dependencyMap[9]).track(constants.OPEN_POPOUT, { type: "Active Threads Popout" });
};
export const trackThreadNotificationSettingsUpdated = function trackThreadNotificationSettingsUpdated(closure_0, closure_1) {
  let can_send_message;
  let parent_channel_type;
  function getNotificationAnalyticsString(flags) {
    if (obj.hasFlag(flags, constants.ALL_MESSAGES)) {
      let tmp11 = tmp(tmp2[11]).MessageNotificationSettings[closure_10.ALL_MESSAGES];
    } else {
      if (tmpResult.hasFlag(flags, constants.ONLY_MENTIONS)) {
        tmp11 = tmp4(tmp5[11]).MessageNotificationSettings[closure_10.ONLY_MENTIONS];
      } else {
        const tmp4Result = tmp4(tmp5[12]);
        const MessageNotificationSettings = callback(closure_2[11]).MessageNotificationSettings;
        if (hasFlagResult) {
          tmp11 = MessageNotificationSettings[tmp10.NO_MESSAGES];
        } else {
          tmp11 = MessageNotificationSettings[tmp10.NULL];
        }
        const hasFlagResult = tmp4(tmp5[12]).hasFlag(flags, constants.NO_MESSAGES);
      }
      const tmpResult = tmp(tmp2[12]);
    }
    return tmp11;
  }
  let obj = closure_1(dependencyMap[10]);
  const result = obj.collectThreadMetadata(closure_0);
  if (null != result) {
    const guildId = closure_0.getGuildId();
    const parent_id = closure_0.parent_id;
    const currentChannelSettings = closure_1(dependencyMap[11]).getCurrentChannelSettings(guildId, parent_id);
    const flagsResult = closure_7.flags(closure_0.id);
    let num = 0;
    if (null != flagsResult) {
      num = flagsResult;
    }
    let notificationAnalyticsString = getNotificationAnalyticsString(num);
    let isMutedResult = closure_7.isMuted(closure_0.id);
    const obj6 = closure_1(dependencyMap[11]);
    let result1 = closure_1(dependencyMap[11]).muteConfigToTimestamp(closure_7.getMuteConfig(closure_0.id));
    ({ can_send_message, parent_channel_type } = result);
    obj = {};
    const merged = Object.assign(callback(result, closure_3));
    obj["channel_id"] = closure_0.id;
    obj["guild_id"] = guildId;
    obj["parent_id"] = parent_id;
    obj["channel_type"] = closure_0.type;
    obj["has_interacted_with_thread"] = num & ThreadMemberFlags.HAS_INTERACTED;
    obj["parent_is_muted"] = guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(guildId, parent_id);
    obj["old_thread_notification_setting"] = notificationAnalyticsString;
    if (null != closure_1.flags) {
      notificationAnalyticsString = getNotificationAnalyticsString(closure_1.flags);
    }
    obj["new_thread_notification_setting"] = notificationAnalyticsString;
    obj["parent_notification_setting"] = currentChannelSettings.channel_message_notification_settings;
    obj["old_thread_is_muted"] = isMutedResult;
    const muted = closure_1.muted;
    if (null != muted) {
      isMutedResult = muted;
    }
    obj["new_thread_is_muted"] = isMutedResult;
    obj["old_thread_muted_until"] = result1;
    if (null != closure_1.mute_config) {
      result1 = closure_1(dependencyMap[11]).muteConfigToTimestamp(closure_1.mute_config);
      const obj4 = closure_1(dependencyMap[11]);
    }
    obj["new_thread_muted_until"] = result1;
    const obj2 = closure_1(dependencyMap[11]);
    importDefault(dependencyMap[9]).track(constants.THREAD_NOTIFICATION_SETTINGS_UPDATED, obj);
    const obj5 = importDefault(dependencyMap[9]);
  }
};
export const useLastMessageTimestamp = function useLastMessageTimestamp(thread) {
  const arg1 = thread;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[13]).useStateFromStores(items, () => closure_5.lastMessageId(arg0.id));
  let extractTimestampResult = null;
  if (null != stateFromStores) {
    extractTimestampResult = importDefault(dependencyMap[14]).extractTimestamp(stateFromStores);
    const obj2 = importDefault(dependencyMap[14]);
  }
  const threadMetadata = thread.threadMetadata;
  let createTimestamp;
  if (null != threadMetadata) {
    createTimestamp = threadMetadata.createTimestamp;
  }
  extractTimestampResult = null;
  if (null != createTimestamp) {
    extractTimestampResult = importDefault(dependencyMap[15])(createTimestamp).valueOf();
    const obj3 = importDefault(dependencyMap[15])(createTimestamp);
  }
  if (null == extractTimestampResult) {
    extractTimestampResult = importDefault(dependencyMap[14]).extractTimestamp(thread.id);
    const obj4 = importDefault(dependencyMap[14]);
  }
  return extractTimestampResult;
};
