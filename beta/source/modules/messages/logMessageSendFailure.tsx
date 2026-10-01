// Module ID: 7263
// Function ID: 7264
// Name: logMessageSendFailure
// Dependencies: [1074, 5016, 2]
// Exports: getAttachmentMimeTypes, logMessageSendFailure

// Module 7263 (logMessageSendFailure)
import Constants from "Constants" /* 1074 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import size from "module_2" /* 2 */;

const f84203 = (mimeType) => {
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
    mapped = fileItems.map(f84203);
  } else {
    mapped = [];
  }
  const errorMessage = fileItems.errorMessage;
  const failureCode = fileItems.failureCode;
  const obj = AppAnalyticsUtils;
  obj.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, { failure_code: failureCode, error_message: errorMessage, attachment_mimetypes: mapped });
};
export const getAttachmentMimeTypes = function getAttachmentMimeTypes(items) {
  return items.map(f84203);
};
