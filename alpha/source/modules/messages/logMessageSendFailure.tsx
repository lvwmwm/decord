// Module ID: 9761
// Function ID: 9762
// Name: logMessageSendFailure
// Dependencies: [1072, 5755, 2]
// Exports: getAttachmentMimeTypes, logMessageSendFailure

// Module 9761 (logMessageSendFailure)
import Constants from "Constants" /* 1072 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5755 */;
import size from "module_2" /* 2 */;

const f95328 = (mimeType) => {
  let str = mimeType.mimeType;
  if (str == null) {
    str = "unknown";
  }
  return str;
};
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/messages/logMessageSendFailure.tsx");

export function logMessageSendFailure(fileItems) {
  let mapped;
  if (null != fileItems.fileItems) {
    fileItems = fileItems.fileItems;
    mapped = fileItems.map(f95328);
  } else {
    mapped = [];
  }
  const errorMessage = fileItems.errorMessage;
  const failureCode = fileItems.failureCode;
  const obj = AppAnalyticsUtils;
  obj.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, { failure_code: failureCode, error_message: errorMessage, attachment_mimetypes: mapped });
}
export function getAttachmentMimeTypes(items) {
  return items.map(f95328);
}
