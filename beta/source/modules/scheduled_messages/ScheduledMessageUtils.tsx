// Module ID: 8093
// Function ID: 8094
// Name: ScheduledMessageUtils
// Dependencies: [32, 4399, 1376, 1078, 1378, 8094, 3, 38, 1438, 7925, 1389, 1245, 558, 568, 504, 4352, 1119, 11, 1973, 4980, 8095, 1374, 2]
// Exports: canSendScheduledMessagesInChannel, canUseScheduledMessages, convertServerScheduledMessageCreateArgs, convertServerScheduledMessageSend, getDefaultScheduledTime, getEarliestScheduledTime, getLatestScheduledTime, getMessageForState, getPresetScheduledTimes, getScheduledMessagesLimit, getScheduledTimeError, parseContentAndFlagsForSilentMessage, trackScheduledMessageTimePickerOpened, unparseContentAndFlagsForSilentMessage

// Module 8093 (ScheduledMessageUtils)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import FlagUtils from "FlagUtils" /* 1389 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1973 */;
import _modDef4352 from "module_4352" /* 4352 */;
import MessageRecordUtils from "MessageRecordUtils" /* 4980 */;
import parseContentForSuppressNotifications from "parseContentForSuppressNotifications" /* 7925 */;
import ScheduledMessageTypes from "ScheduledMessageTypes" /* 8095 */;
import _slicedToArray from "module_32" /* 32 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;
const parseContentForSuppressNotificationsDefault = parseContentForSuppressNotifications;

require = fn;
const Constants = fn(1078);
({ AnalyticEvents: metroRequire, MessageFlags: closure_7, Permissions: closure_8 } = Constants);
const PremiumTypes = fn(1378).PremiumTypes;
const ScheduledMessagesConstants = fn(8094);
({ MAX_SCHEDULE_TIME_AFTER_CREATION_SECONDS: c10, MAX_SCHEDULE_TIME_INTO_FUTURE_SECONDS: closure_11, MAX_SCHEDULED_MESSAGES_PER_USER: closure_12, MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS: map1 } = ScheduledMessagesConstants);
class ScheduledMessagesConfig {
  constructor(arg0, arg1) {
    merged = Object.assign({ enabled: false, limit: 0 });
    tmp2 = closure_1(closure_2[7])(null != fn.limit, "Config is missing scheduled message limit");
    merged.enabled = global;
    merged.limit = fn.limit;
    return merged;
  }
}
const ApexExperiment = fn(1438);
let obj2 = { name: "2026-08-scheduled-messages", kind: "user", defaultConfig: null, variations: null };
let merged = Object.assign({ enabled: false, limit: 0 });
_modDef38(true, "Config is missing scheduled message limit");
merged.enabled = false;
merged.limit = 0;
obj2.defaultConfig = merged;
let obj3 = {
  1: null,
  2: (arg0) => {
    const parsed = JSON.parse(arg0);
    if (typeof ScheduledMessagesConfig === "function") {
      const merged = Object.assign({ enabled: false, limit: 0 });
      _modDef38(null != parsed.limit, "Config is missing scheduled message limit");
      merged.enabled = true;
      merged.limit = parsed.limit;
      return merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};
obj3[2] = (arg0) => {
  const parsed = JSON.parse(arg0);
  if (typeof ScheduledMessagesConfig === "function") {
    const merged = Object.assign({ enabled: false, limit: 0 });
    _modDef38(null != parsed.limit, "Config is missing scheduled message limit");
    merged.enabled = true;
    merged.limit = parsed.limit;
    return merged;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
obj2.variations = obj3;
let closure_15 = ApexExperiment.createApexExperiment(obj2);
let ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "useCanUseScheduledMessages" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  return closure_15.useConfig(first).enabled;
}) : (() => closure_15.useConfig({ location: "useCanUseScheduledMessages" }).enabled);
let closure_16 = tmp7;
fn(558);
let tmp4 = new LoggerDefault("Scheduled Messages");
ReactCompilerGating = fn(558);
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  let stateFromStores = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let tmp = null != closure_0;
      if (tmp) {
        let canResult = obj.isPrivate();
        if (!canResult) {
          canResult = PermissionStore.can(constants3.SEND_MESSAGES, obj);
        }
        tmp = canResult;
      }
      return tmp;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  if (stateFromStores) {
    stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  }
  return stateFromStores;
}) : ((arg0) => {
  _require = arg0;
  let stateFromStores = closure_16();
  const items = [PermissionStore];
  if (stateFromStores) {
    stateFromStores = obj.useStateFromStores(items, () => {
      let tmp = null != closure_0;
      if (tmp) {
        let canResult = obj.isPrivate();
        if (!canResult) {
          canResult = PermissionStore.can(constants3.SEND_MESSAGES, obj);
        }
        tmp = canResult;
      }
      return tmp;
    });
  }
  return stateFromStores;
});
function canUseScheduledMessages(location) {
  return closure_15.getConfig({ location }).enabled;
}
function getEarliestScheduledTime() {
  return _modDef4352().add(__initData2, "seconds");
}
function getLatestScheduledTime(arg0) {
  const addResult = _modDef4352().add(closure_1_11, "seconds");
  if (null == arg0) {
    return addResult;
  } else {
    const tmpResult = tmp(4352);
    const tmpResult3 = tmp(11);
    const tmpResultResult = tmpResult(tmp(11).extractTimestamp(arg0));
    return tmp(4352).min(addResult, tmpResultResult.add(v65535, "seconds"));
  }
  const obj = _modDef4352();
}
function convertServerScheduledMessageCreateArgs(channelId) {
  return { channelId: channelId.channel_id, content: channelId.content, type: channelId.type, flags: channelId.flags, messageReference: channelId.message_reference };
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageUtils.tsx");

export const scheduledMessageLogger = tmp4;
export const parseContentAndFlagsForSilentMessage = function parseContentAndFlagsForSilentMessage(arg0) {
  ({ content, flags } = arg0);
  const tmp2 = _slicedToArray(parseContentForSuppressNotificationsDefault(content), 2);
  const items = [, ];
  if (tmp2[0]) {
    items[0] = tmp2[1];
    if (flags == null) {
      flags = 0;
    }
    items[1] = FlagUtils.addFlag(flags, constants2.SUPPRESS_NOTIFICATIONS);
    let tmp4 = items;
  } else {
    items[0] = content;
    let num = flags;
    if (flags == null) {
      num = 0;
    }
    items[1] = num;
    tmp4 = items;
  }
  return tmp4;
};
export const unparseContentAndFlagsForSilentMessage = function unparseContentAndFlagsForSilentMessage(createArgs) {
  ({ content, flags } = createArgs);
  if (flags == null) {
    flags = 0;
  }
  let combined = content;
  if (obj.hasFlag(flags, constants2.SUPPRESS_NOTIFICATIONS)) {
    const _HermesInternal = HermesInternal;
    combined = "" + parseContentForSuppressNotifications.SILENT_SENTINEL + " " + content;
  }
  return combined;
};
export const trackScheduledMessageTimePickerOpened = function trackScheduledMessageTimePickerOpened(arg0) {
  ({ entryPoint, isEditing, channelId } = arg0);
  AnalyticsUtilsDefault.track(constants.SCHEDULED_MESSAGE_TIME_PICKER_OPENED, { entry_point: entryPoint, is_editing: isEditing, channel_id: channelId });
};
export const useCanUseScheduledMessages = tmp7;
export const useCanSendScheduledMessagesInChannel = tmp8;
export { canUseScheduledMessages };
export const canSendScheduledMessagesInChannel = function canSendScheduledMessagesInChannel(isPrivate, location) {
  let enabled = closure_15.getConfig({ location }).enabled;
  if (enabled) {
    let canResult = isPrivate.isPrivate();
    if (!canResult) {
      canResult = PermissionStore.can(constants3.SEND_MESSAGES, isPrivate);
    }
    enabled = canResult;
  }
  return enabled;
};
export const getPresetScheduledTimes = function getPresetScheduledTimes() {
  const addResult = _modDef4352().add(__initData2, "seconds");
  const obj = _modDef4352();
  const obj2 = _modDef4352();
  const result = _modDef4352().startOf("day").set("hours", 9);
  const startOfResult = _modDef4352().startOf("day");
  const obj5 = _modDef4352();
  const result1 = _modDef4352().startOf("day").set("hours", 13);
  const obj3 = { label: null, value: null };
  const startOfResult1 = _modDef4352().startOf("day");
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (isAfterResult) {
    obj3.label = string(t["qINKo/"]);
    obj3.value = result;
    let tmp6 = tmp5;
    let tmp7 = obj3;
  } else {
    obj3.label = string(t.tjIn9i);
    obj3.value = result.add(1, "day");
    tmp6 = tmp5;
    tmp7 = obj3;
  }
  const items = [tmp7, , ];
  const obj4 = { label: null, value: null };
  isAfterResult = result.isAfter(addResult);
  const intl2 = tmp6(1119).intl;
  const string2 = intl2.string;
  const t2 = tmp6(1119).t;
  if (isAfterResult1) {
    obj4.label = string2(t2.qT6LjY);
    obj4.value = result1;
    let tmp9 = obj4;
  } else {
    obj4.label = string2(t2.EMRZyS);
    obj4.value = result1.add(1, "day");
    tmp9 = obj4;
  }
  items[1] = tmp9;
  const obj6 = { label: null, value: null };
  const intl3 = tmp6(1119).intl;
  obj6.label = intl3.string(tmp6(1119).t["+P5MmK"]);
  isAfterResult1 = result1.isAfter(addResult);
  const obj11 = _modDef4352();
  const startOfResult2 = _modDef4352().startOf("isoWeek");
  obj6.value = _modDef4352().startOf("isoWeek").add(1, "week").set("hours", 9);
  items[2] = obj6;
  return items;
};
export const getDefaultScheduledTime = function getDefaultScheduledTime() {
  const obj = _modDef4352();
  const addResult = _modDef4352().startOf("hour").add(1, "hour");
  const startOfResult = _modDef4352().startOf("hour");
  let addResult1 = addResult;
  if (addResult.isBefore(obj4.add(__initData2, "seconds"))) {
    addResult1 = addResult.add(1, "hour");
  }
  return addResult1;
};
export const getScheduledTimeError = function getScheduledTimeError(isBefore, arg1) {
  if (isBefore.isBefore(obj.add(__initData2, "seconds"))) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["w/fgvh"]);
  } else {
    const addResult = tmp(4352)().add(closure_1_11, "seconds");
    let minResult = addResult;
    if (null != arg1) {
      const tmpResult = tmp(4352);
      const tmpResult3 = tmp(11);
      const tmpResultResult = tmpResult(tmp(11).extractTimestamp(arg1));
      minResult = tmp(4352).min(addResult, tmpResultResult.add(v65535, "seconds"));
      const tmpResult4 = tmp(4352);
    }
    stringResult = null;
    if (isBefore.isAfter(minResult)) {
      const intl = util.intl;
      stringResult = intl.string(util.t.Nt0tz7);
    }
    const obj2 = tmp(4352)();
  }
  return stringResult;
};
export { getEarliestScheduledTime };
export { getLatestScheduledTime };
export const getScheduledMessagesLimit = function getScheduledMessagesLimit(ScheduledMessagesCreateRoadblock) {
  const obj2 = { location: ScheduledMessagesCreateRoadblock };
  const config = closure_15.getConfig(obj2);
  if (config.enabled) {
    if (isPremiumResult) {
      const obj3 = { limit, isUpgradable: false };
    } else {
      const obj4 = { limit: config.limit, isUpgradable: true };
    }
  } else {
    return { limit: 0, isUpgradable: false };
  }
};
export const useScheduledMessagesLimit = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(7);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const config = closure_15.useConfig(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return require("PremiumTypeUtils").isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2);
    };
    cResult[2] = items;
    cResult[3] = fn;
    let tmp7 = fn;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
  if (cResult[4] === config) {
    if (cResult[5] === stateFromStores) {
      return cResult[6];
    }
  }
  if (!config.enabled) {
    const obj3 = { limit: 0, isUpgradable: false };
    cResult[4] = config;
    cResult[5] = stateFromStores;
    cResult[6] = obj3;
  }
  if (stateFromStores) {
    const obj4 = { limit, isUpgradable: false };
  } else {
    const obj5 = { limit: config.limit, isUpgradable: true };
  }
}) : ((location) => {
  const config = closure_15.useConfig({ location });
  const items = [UserStore];
  if (config.enabled) {
    if (obj2.useStateFromStores(items, () => require("PremiumTypeUtils").isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2))) {
      const obj3 = { limit, isUpgradable: false };
    } else {
      const obj4 = { limit: config.limit, isUpgradable: true };
    }
  } else {
    return { limit: 0, isUpgradable: false };
  }
});
export const convertServerScheduledMessageSend = function convertServerScheduledMessageSend(body) {
  const obj = { userId: body.user_id, scheduledMessageId: body.scheduled_message_id, sendAtTimestamp: body.send_at_timestamp, createArgs: null, state: body.state, attachmentUploads: null, record: null };
  const create_args = body.create_args;
  obj.createArgs = { channelId: create_args.channel_id, content: create_args.content, type: create_args.type, flags: create_args.flags, messageReference: create_args.message_reference };
  let attachment_uploads = body.attachment_uploads;
  if (attachment_uploads == null) {
    attachment_uploads = [];
  }
  obj.attachmentUploads = attachment_uploads.map((filename) => ({ filename: filename.filename, uploadedFilename: filename.uploaded_filename, description: filename.description, title: filename.title }));
  const obj3 = {};
  const merged = Object.assign(body.message_preview);
  obj3.timestamp = body.send_at_timestamp;
  obj.record = MessageRecordUtils.createMessageRecord(obj3);
  return obj;
};
export const getMessageForState = function getMessageForState(state) {
  if (ScheduledMessageTypes.ScheduledMessageSendState.SCHEDULED === state) {
    const obj = { isError: false, stateMessage: null };
    const intl6 = tmp(1119).intl;
    obj.stateMessage = intl6.string(tmp(1119).t.Fn6Odn);
    return obj;
  } else if (tmp(8095).ScheduledMessageSendState.ERROR_CHANNEL_NOT_FOUND === state) {
    const obj2 = { isError: true, stateMessage: null };
    const intl5 = tmp(1119).intl;
    obj2.stateMessage = intl5.string(tmp(1119).t.v5O2dK);
    return obj2;
  } else if (tmp(8095).ScheduledMessageSendState.ERROR_USER_NOT_FOUND === state) {
    const obj3 = { isError: true, stateMessage: null };
    const intl4 = tmp(1119).intl;
    obj3.stateMessage = intl4.string(tmp(1119).t.j8uIfG);
    return obj3;
  } else if (tmp(8095).ScheduledMessageSendState.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES === state) {
    const obj4 = { isError: true, stateMessage: null };
    const intl3 = tmp(1119).intl;
    obj4.stateMessage = intl3.string(tmp(1119).t["w6zHX/"]);
    return obj4;
  } else if (tmp(8095).ScheduledMessageSendState.ERROR_SEND_FAILED === state) {
    const obj5 = { isError: true, stateMessage: null };
    const intl2 = tmp(1119).intl;
    obj5.stateMessage = intl2.string(tmp(1119).t.pflV7z);
    return obj5;
  } else if (tmp(8095).ScheduledMessageSendState.ERROR_SCHEDULED_MESSAGES_DISABLED === state) {
    const obj6 = { isError: true, stateMessage: null };
    const intl = tmp(1119).intl;
    obj6.stateMessage = intl.string(tmp(1119).t.j8uIfG);
    return obj6;
  } else {
    tmp(1374).assertNever(state);
  }
};
export { convertServerScheduledMessageCreateArgs };
