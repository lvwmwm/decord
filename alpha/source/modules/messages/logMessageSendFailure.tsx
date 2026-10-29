// Module ID: 9735
// Function ID: 9736
// Name: logMessageSendFailure
// Dependencies: [1084, 5749, 2]
// Exports: getAttachmentMimeTypes, logMessageSendFailure

// Module 9735 (logMessageSendFailure)
import Constants from "Constants" /* 1084 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5749 */;
import size from "module_2" /* 2 */;

const f106455 = (mimeType) => {
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
    mapped = fileItems.map(f106455);
  } else {
    mapped = [];
  }
  const errorMessage = fileItems.errorMessage;
  const failureCode = fileItems.failureCode;
  const obj = AppAnalyticsUtils;
  obj.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, { failure_code: failureCode, error_message: errorMessage, attachment_mimetypes: mapped });
}
export function getAttachmentMimeTypes(items) {
  return items.map(f106455);
}
