// Module ID: 8060
// Function ID: 8061
// Name: ThreadUtils
// Dependencies: [109, 4805, 4971, 4433, 1118, 1078, 1119, 7778, 4970, 1245, 8053, 7393, 1389, 558, 568, 504, 11, 4384, 2]
// Exports: getTimestampAccessibilityLabel, trackActiveThreadsPopoutOpened, trackThreadBrowserOpened, trackThreadBrowserTab, trackThreadNotificationSettingsUpdated

// Module 8060 (ThreadUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1119 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import _modDef4384 from "module_4384" /* 4384 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4970 */;
import getTimestampStringDefault from "getTimestampString" /* 7778 */;
import ThreadAnalyticsUtils from "ThreadAnalyticsUtils" /* 8053 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ReadStateStore from "ReadStateStore" /* 4805 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4971 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4433 */;

const require = globalThis.__r;

require = fn;
function getAccessibilityLabelFormatter() {
  const time = { minutes: util.t["1Rcf/h"], hours: util.t.vgnx51, days: util.t.fNvE50, month: null };
  const intl = util.intl;
  time.month = intl.string(util.t.P7Gygz);
  return time;
}
let closure_3 = ["can_send_message", "parent_channel_type"];
const ThreadMemberFlags = fn(1118).ThreadMemberFlags;
const Constants = fn(1078);
({ AnalyticEvents: closure_9, UserNotificationSettings: c10 } = Constants);
const ReactCompilerGating = fn(558);
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
    const currentChannelSettings = tmp(7393).getCurrentChannelSettings(guildId, parent_id);
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
    let tmpResult = tmp(7393);
    let result1 = tmp(7393).muteConfigToTimestamp(obj7.getMuteConfig(getGuildId.id));
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
      result1 = tmp(7393).muteConfigToTimestamp(flags.mute_config);
      const tmpResult4 = tmp(7393);
    }
    obj2.new_thread_muted_until = result1;
    const tmpResult3 = tmp(7393);
    AnalyticsUtilsDefault.track(constants.THREAD_NOTIFICATION_SETTINGS_UPDATED, obj2);
  }
};
export const useLastMessageTimestamp = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  _require = id;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function o() {
      return ReadStateStore.lastMessageId(id.id);
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    let extractTimestampResult = null;
    if (null != stateFromStores) {
      extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(stateFromStores);
    }
    cResult[3] = stateFromStores;
    cResult[4] = extractTimestampResult;
    let tmp8 = extractTimestampResult;
  } else {
    tmp8 = cResult[4];
  }
  const threadMetadata = id.threadMetadata;
  let createTimestamp;
  if (threadMetadata != null) {
    createTimestamp = threadMetadata.createTimestamp;
  }
  if (cResult[5] !== createTimestamp) {
    let valueOfResult = null;
    if (null != createTimestamp) {
      valueOfResult = _modDef4384(createTimestamp).valueOf();
      const obj4 = _modDef4384(createTimestamp);
    }
    cResult[5] = createTimestamp;
    cResult[6] = valueOfResult;
    let tmp12 = valueOfResult;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] === id.id) {
    if (cResult[8] === tmp12) {
      if (cResult[9] === tmp8) {
        let tmp15 = cResult[10];
      }
      return tmp15;
    }
  }
  let extractTimestampResult1 = tmp8;
  if (tmp8 == null) {
    extractTimestampResult1 = tmp12;
  }
  if (extractTimestampResult1 == null) {
    extractTimestampResult1 = SnowflakeUtilsDefault.extractTimestamp(id.id);
  }
  cResult[7] = id.id;
  cResult[8] = tmp12;
  cResult[9] = tmp8;
  cResult[10] = extractTimestampResult1;
  tmp15 = extractTimestampResult1;
}) : ((threadMetadata) => {
  _require = threadMetadata;
  const items = [ReadStateStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ReadStateStore.lastMessageId(threadMetadata.id));
  let extractTimestampResult = null;
  if (null != stateFromStores) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(stateFromStores);
  }
  threadMetadata = threadMetadata.threadMetadata;
  let createTimestamp;
  if (threadMetadata != null) {
    createTimestamp = threadMetadata.createTimestamp;
  }
  let valueOfResult = null;
  if (null != createTimestamp) {
    valueOfResult = _modDef4384(createTimestamp).valueOf();
    const obj3 = _modDef4384(createTimestamp);
  }
  if (extractTimestampResult == null) {
    extractTimestampResult = valueOfResult;
  }
  if (extractTimestampResult == null) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(threadMetadata.id);
  }
  return extractTimestampResult;
});
