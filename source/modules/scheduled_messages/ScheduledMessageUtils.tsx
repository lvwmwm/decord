// Module ID: 11442
// Function ID: 11443
// Name: scheduledMessageLogger
// Dependencies: [32, 3999, 1922, 676, 3, 7189, 1403, 589, 11443, 3943, 2]
// Exports: canUseScheduledMessages, convertServerScheduledMessage, convertServerScheduledMessageSend, parseContentAndFlagsForSilentMessage, unparseContentAndFlagsForSilentMessage, useCanUseScheduledMessages

// Module 11442 (scheduledMessageLogger)
import _slicedToArray from "_slicedToArray";
import hasFlag from "hasFlag";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MessageFlags } from "ME";

const require = arg1;
let tmp2 = new require("ME")("Scheduled Messages");
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/scheduled_messages/ScheduledMessageUtils.tsx");

export const scheduledMessageLogger = tmp2;
export const parseContentAndFlagsForSilentMessage = function parseContentAndFlagsForSilentMessage(arg0) {
  let content;
  let flags;
  ({ content, flags } = arg0);
  const tmp2 = callback(importDefault(7189)(content), 2);
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
    combined = "" + require(7189) /* regExp */.SILENT_SENTINEL + " " + content;
  }
  return combined;
};
export const useCanUseScheduledMessages = function useCanUseScheduledMessages() {
  const items = [mergeGuildAvatar];
  let stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const obj = require(589) /* initialize */;
  if (!stateFromStores) {
    stateFromStores = obj2.useConfig({ location: "useCanUseScheduledMessages" });
  }
  return stateFromStores;
};
export const canUseScheduledMessages = function canUseScheduledMessages(arg0) {
  const currentUser = authStore.getCurrentUser();
  let flag;
  if (currentUser != null) {
    flag = currentUser.isStaff();
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    const obj = { location: null };
    obj[0] = arg0;
    flag = importDefault(11443).getConfig(obj);
    const obj2 = importDefault(11443);
  }
  return flag;
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
