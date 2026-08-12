// Module ID: 7342
// Function ID: 7343
// Name: logMessageSendFailure
// Dependencies: [676, 4538, 2]
// Exports: getAttachmentMimeTypes, logMessageSendFailure

// Module 7342 (logMessageSendFailure)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/messages/logMessageSendFailure.tsx");

export const logMessageSendFailure = function logMessageSendFailure(fileItems) {
  if (null != fileItems.fileItems) {
    fileItems = fileItems.fileItems;
    let mapped = fileItems.map((mimeType) => {
      let str = mimeType.mimeType;
      if (str == null) {
        str = "unknown";
      }
      return str;
    });
  } else {
    mapped = [];
  }
  const errorMessage = fileItems.errorMessage;
  const failureCode = fileItems.failureCode;
  require(4538) /* collectGuildAnalyticsMetadata */.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, { failure_code: failureCode, error_message: errorMessage, attachment_mimetypes: mapped });
};
export const getAttachmentMimeTypes = function getAttachmentMimeTypes(items) {
  return items.map((mimeType) => {
    let str = mimeType.mimeType;
    if (str == null) {
      str = "unknown";
    }
    return str;
  });
};
