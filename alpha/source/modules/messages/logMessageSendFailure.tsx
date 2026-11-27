// Module ID: 10067
// Function ID: 10068
// Name: logMessageSendFailure
// Dependencies: [1071, 6013, 2]
// Exports: getAttachmentMimeTypes, logMessageSendFailure

// Module 10067 (logMessageSendFailure)
import Constants from "Constants" /* 1071 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 6013 */;
import size from "module_2" /* 2 */;

const f97273 = (mimeType) => {
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
    mapped = fileItems.map(f97273);
  } else {
    mapped = [];
  }
  const errorMessage = fileItems.errorMessage;
  const failureCode = fileItems.failureCode;
  const obj = AppAnalyticsUtils;
  obj.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, { failure_code: failureCode, error_message: errorMessage, attachment_mimetypes: mapped });
}
export function getAttachmentMimeTypes(items) {
  return items.map(f97273);
}
