// Module ID: 7587
// Function ID: 7588
// Name: logMessageSendFailure
// Dependencies: [676, 5042, 2]
// Exports: getAttachmentMimeTypes, logMessageSendFailure

// Module 7587 (logMessageSendFailure)
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
  require(5042) /* collectGuildAnalyticsMetadata */.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, { failure_code: failureCode, error_message: errorMessage, attachment_mimetypes: mapped });
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
