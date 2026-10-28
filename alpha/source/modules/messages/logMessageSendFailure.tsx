// Module ID: 9703
// Function ID: 9704
// Name: logMessageSendFailure
// Dependencies: [1084, 5747, 2]
// Exports: getAttachmentMimeTypes, logMessageSendFailure

// Module 9703 (logMessageSendFailure)
import Constants from "Constants" /* 1084 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5747 */;
import size from "module_2" /* 2 */;

const f105267 = (mimeType) => {
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
    mapped = fileItems.map(f105267);
  } else {
    mapped = [];
  }
  const errorMessage = fileItems.errorMessage;
  const failureCode = fileItems.failureCode;
  const obj = AppAnalyticsUtils;
  obj.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, { failure_code: failureCode, error_message: errorMessage, attachment_mimetypes: mapped });
};
export const getAttachmentMimeTypes = function getAttachmentMimeTypes(items) {
  return items.map(f105267);
};
