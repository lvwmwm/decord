// Module ID: 13295
// Function ID: 13296
// Name: ExplicitMediaRedactionActionCreators
// Dependencies: [1072, 1282, 2]
// Exports: reportFailedSendFalsePositive, reportFalsePositive, sendMessagesForScanning, sendMultiChannelMessagesForScanning

// Module 13295 (ExplicitMediaRedactionActionCreators)
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionActionCreators.tsx");

export function reportFalsePositive(channel_id, message_id, attachment_ids, embed_ids) {
  let obj;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE, body: obj, rejectWithError: false };
  obj = { channel_id, message_id, attachment_ids, embed_ids };
  return HTTP.post(request);
}
export function reportFailedSendFalsePositive(channelId, messageId, attachment_ids, filenames) {
  let obj;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE, body: obj, rejectWithError: false };
  obj = { channel_id: channelId, message_id: messageId, attachment_ids, filenames };
  return HTTP.post(request);
}
export function sendMessagesForScanning(channel_id, message_ids) {
  let obj;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(channel_id), body: obj, rejectWithError: false };
  obj = { message_ids };
  return HTTP.patch(request);
}
export function sendMultiChannelMessagesForScanning(found) {
  const mapped = found.map((channel_id) => ({ channel_id: channel_id.channel_id, message_id: channel_id.id }));
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES, body: { messages: mapped }, rejectWithError: false };
  return HTTP.patch(request);
}
