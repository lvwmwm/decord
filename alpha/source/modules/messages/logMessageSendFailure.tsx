// Module ID: 9205
// Function ID: 9206
// Name: logMessageSendFailure
// Dependencies: [1085, 5105, 2]
// Exports: getAttachmentMimeTypes, logMessageSendFailure

// Module 9205 (logMessageSendFailure)
import Constants from "Constants" /* 1085 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5105 */;
import size from "module_2" /* 2 */;

const f100117 = (mimeType) => {
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
    mapped = fileItems.map(f100117);
  } else {
    mapped = [];
  }
  const errorMessage = fileItems.errorMessage;
  const failureCode = fileItems.failureCode;
  const obj = AppAnalyticsUtils;
  obj.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, { failure_code: failureCode, error_message: errorMessage, attachment_mimetypes: mapped });
};
export const getAttachmentMimeTypes = function getAttachmentMimeTypes(items) {
  return items.map(f100117);
};
