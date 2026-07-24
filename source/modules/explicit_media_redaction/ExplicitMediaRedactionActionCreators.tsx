// Module ID: 6844
// Function ID: 54130
// Name: reportFalsePositive
// Dependencies: [653, 507, 2]
// Exports: reportFailedSendFalsePositive, reportFalsePositive, sendMessagesForScanning, sendMultiChannelMessagesForScanning

// Module 6844 (reportFalsePositive)
import { Endpoints } from "ME";

const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionActionCreators.tsx");

export const reportFalsePositive = function reportFalsePositive(channel_id, message_id, attachment_ids, embed_ids) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE, body: obj, rejectWithError: false };
  obj = { channel_id, message_id, attachment_ids, embed_ids };
  return HTTP.post(obj);
};
export const reportFailedSendFalsePositive = function reportFailedSendFalsePositive(channelId, messageId, closure_2, closure_3) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: Endpoints.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE, body: obj, rejectWithError: false };
  obj = { channel_id: channelId, message_id: messageId, attachment_ids: closure_2, filenames: closure_3 };
  return HTTP.post(obj);
};
export const sendMessagesForScanning = function sendMessagesForScanning(channel_id, message_ids) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(channel_id), body: obj, rejectWithError: false };
  obj = { message_ids };
  return HTTP.patch(obj);
};
export const sendMultiChannelMessagesForScanning = function sendMultiChannelMessagesForScanning(arr) {
  const mapped = arr.map((channel_id) => ({ channel_id: channel_id.channel_id, message_id: channel_id.id }));
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  return HTTP.patch({ url: Endpoints.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES, body: { messages: mapped }, rejectWithError: false });
};
