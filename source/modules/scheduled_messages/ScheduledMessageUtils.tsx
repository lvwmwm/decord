// Module ID: 11460
// Function ID: 11461
// Name: ScheduledMessagesConfig
// Dependencies: [32, 3999, 1922, 676, 1924, 11457, 3, 38, 1471, 7211, 1403, 3943, 1945, 589, 2]
// Exports: canUseScheduledMessages, convertServerScheduledMessage, convertServerScheduledMessageSend, getDefaultScheduledTime, getScheduledMessagesLimit, parseContentAndFlagsForSilentMessage, unparseContentAndFlagsForSilentMessage, useCanUseScheduledMessages, useScheduledMessagesLimit

// Module 11460 (ScheduledMessagesConfig)
import _slicedToArray from "_slicedToArray";
import hasFlag from "hasFlag";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MessageFlags } from "ME";
import { PremiumTypes } from "GuildFeatures";
import MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS from "MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS";
import ApexExperiment from "ApexExperiment";

let c9;
let metroImportAll;
const require = arg1;
({ MAX_SCHEDULED_MESSAGES_PER_USER: metroImportAll, MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS: c9 } = MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS);
class ScheduledMessagesConfig {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    tmp2 = require("module_38")(null != arg1.limit, "Config is missing scheduled message limit");
    obj.enabled = global;
    obj.limit = arg1.limit;
    return obj;
  }
}
ApexExperiment = { name: "2026-08-scheduled-messages", kind: "user", defaultConfig: null, variations: null };
ApexExperiment = Object.create(ScheduledMessagesConfig.prototype);
require("module_38")(true, "Config is missing scheduled message limit");
ApexExperiment.enabled = false;
ApexExperiment.limit = 0;
ApexExperiment[2] = ApexExperiment;
const obj1 = {
  1: null,
  2: (arg0) => {
    const parsed = JSON.parse(arg0);
    if (typeof ScheduledMessagesConfig !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(ScheduledMessagesConfig.prototype);
    importDefault(38)(null != parsed.limit, "Config is missing scheduled message limit");
    obj.enabled = true;
    obj.limit = parsed.limit;
    return obj;
  }
};
obj1[2] = (arg0) => {
  const parsed = JSON.parse(arg0);
  if (typeof ScheduledMessagesConfig !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(ScheduledMessagesConfig.prototype);
  importDefault(38)(null != parsed.limit, "Config is missing scheduled message limit");
  obj.enabled = true;
  obj.limit = parsed.limit;
  return obj;
};
ApexExperiment[3] = obj1;
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const tmp3 = new require("ME")("Scheduled Messages");
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/scheduled_messages/ScheduledMessageUtils.tsx");

export const scheduledMessageLogger = tmp3;
export const parseContentAndFlagsForSilentMessage = function parseContentAndFlagsForSilentMessage(arg0) {
  let content;
  let flags;
  ({ content, flags } = arg0);
  const tmp2 = callback(importDefault(7211)(content), 2);
  const items = [, ];
  if (tmp2[0]) {
    items[0] = tmp2[1];
    if (flags == null) {
      flags = 0;
    }
    items[1] = require(1403) /* hasFlag */.addFlag(flags, MessageFlags.SUPPRESS_NOTIFICATIONS);
    let tmp4 = items;
    const obj = require(1403) /* hasFlag */;
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
export const unparseContentAndFlagsForSilentMessage = function unparseContentAndFlagsForSilentMessage(arg0) {
  let content;
  let flags;
  ({ content, flags } = arg0);
  if (flags == null) {
    flags = 0;
  }
  let combined = content;
  if (obj.hasFlag(flags, MessageFlags.SUPPRESS_NOTIFICATIONS)) {
    const _HermesInternal = HermesInternal;
    combined = "" + require(7211) /* regExp */.SILENT_SENTINEL + " " + content;
  }
  return combined;
};
export const useCanUseScheduledMessages = function useCanUseScheduledMessages() {
  return ApexExperiment.useConfig({ location: "useCanUseScheduledMessages" }).enabled;
};
export const canUseScheduledMessages = function canUseScheduledMessages(location) {
  return ApexExperiment.getConfig({ location }).enabled;
};
export const getDefaultScheduledTime = function getDefaultScheduledTime() {
  const obj = importDefault(3943)();
  const addResult = importDefault(3943)().add(closure_9, "seconds");
  const obj2 = importDefault(3943)();
  const addResult1 = importDefault(3943)().startOf("hour").add(1, "hour");
  let addResult2 = addResult1;
  if (addResult1.isBefore(addResult)) {
    addResult2 = addResult1.add(1, "hour");
  }
  return addResult2;
};
export const getScheduledMessagesLimit = function getScheduledMessagesLimit(location) {
  let obj = require(1945) /* isPremiumAtLeast */;
  obj = { location };
  const config = ApexExperiment.getConfig(obj);
  if (!config.enabled) {
    return 0;
  }
};
export const useScheduledMessagesLimit = function useScheduledMessagesLimit(location) {
  const config = ApexExperiment.useConfig({ location });
  require(589) /* initialize */;
  [][0] = mergeGuildAvatar;
  if (!config.enabled) {
    return 0;
  }
};
export const convertServerScheduledMessageSend = function convertServerScheduledMessageSend(body) {
  obj = { userId: body.user_id, scheduledMessageId: body.scheduled_message_id, sendAtTimestamp: body.send_at_timestamp, scheduledMessage: obj, state: body.state, attachmentUploads: null, record: null };
  const scheduled_message = body.scheduled_message;
  obj = { channelId: scheduled_message.channel_id, content: scheduled_message.content, type: scheduled_message.type, flags: scheduled_message.flags, messageReference: scheduled_message.message_reference };
  let attachment_uploads = body.attachment_uploads;
  if (attachment_uploads == null) {
    attachment_uploads = [];
  }
  obj[5] = attachment_uploads.map((filename) => ({ filename: filename.filename, uploadedFilename: filename.uploaded_filename, description: filename.description, title: filename.title }));
  obj = { id: body.scheduled_message_id, content: body.scheduled_message.content, author: authStore.getUser(body.user_id), timestamp: null, channel_id: null };
  obj[3] = importDefault(3943)(body.send_at_timestamp).toDate();
  obj[4] = body.scheduled_message.channel_id;
  const obj4 = importDefault(3943)(body.send_at_timestamp);
  obj[6] = new hasFlag(obj);
  return obj;
};
export const convertServerScheduledMessage = function convertServerScheduledMessage(channelId) {
  return { channelId: channelId.channel_id, content: channelId.content, type: channelId.type, flags: channelId.flags, messageReference: channelId.message_reference };
};
