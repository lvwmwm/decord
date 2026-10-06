// Module ID: 7267
// Function ID: 7268
// Name: logMessageSendFailure
// Dependencies: [1086, 5017, 2]
// Exports: getAttachmentMimeTypes, logMessageSendFailure

// Module 7267 (logMessageSendFailure)
import Constants from "Constants" /* 1086 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5017 */;
import size from "module_2" /* 2 */;

const f93858 = (mimeType) => {
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
    mapped = fileItems.map(f93858);
  } else {
    mapped = [];
  }
  const errorMessage = fileItems.errorMessage;
  const failureCode = fileItems.failureCode;
  const obj = AppAnalyticsUtils;
  obj.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, { failure_code: failureCode, error_message: errorMessage, attachment_mimetypes: mapped });
};
export const getAttachmentMimeTypes = function getAttachmentMimeTypes(items) {
  return items.map(f93858);
};
