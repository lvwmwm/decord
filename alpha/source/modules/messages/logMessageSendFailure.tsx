// Module ID: 9503
// Function ID: 9504
// Name: logMessageSendFailure
// Dependencies: [1087, 5168, 2]
// Exports: getAttachmentMimeTypes, logMessageSendFailure

// Module 9503 (logMessageSendFailure)
import Constants from "Constants" /* 1087 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5168 */;
import size from "module_2" /* 2 */;

const f102097 = (mimeType) => {
  let str = mimeType.mimeType;
  if (str == null) {
    str = "unknown";
  }
  return str;
};
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/messages/logMessageSendFailure.tsx");

export const logMessageSendFailure = function logMessageSendFailure(fileItems) {
  let mapped;
  if (null != fileItems.fileItems) {
    fileItems = fileItems.fileItems;
    mapped = fileItems.map(f102097);
  } else {
    mapped = [];
  }
  const errorMessage = fileItems.errorMessage;
  const failureCode = fileItems.failureCode;
  const obj = AppAnalyticsUtils;
  obj.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, { failure_code: failureCode, error_message: errorMessage, attachment_mimetypes: mapped });
};
export const getAttachmentMimeTypes = function getAttachmentMimeTypes(items) {
  return items.map(f102097);
};
