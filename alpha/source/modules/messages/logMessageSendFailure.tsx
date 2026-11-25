// Module ID: 10024
// Function ID: 10025
// Name: logMessageSendFailure
// Dependencies: [1071, 5982, 2]
// Exports: getAttachmentMimeTypes, logMessageSendFailure

// Module 10024 (logMessageSendFailure)
import Constants from "Constants" /* 1071 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5982 */;
import size from "module_2" /* 2 */;

const f96754 = (mimeType) => {
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
    mapped = fileItems.map(f96754);
  } else {
    mapped = [];
  }
  const errorMessage = fileItems.errorMessage;
  const failureCode = fileItems.failureCode;
  const obj = AppAnalyticsUtils;
  obj.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, { failure_code: failureCode, error_message: errorMessage, attachment_mimetypes: mapped });
}
export function getAttachmentMimeTypes(items) {
  return items.map(f96754);
}
