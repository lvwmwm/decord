// Module ID: 6154
// Function ID: 6155
// Name: logMessageSendFailure
// Dependencies: [676, 4384, 2]
// Exports: getAttachmentMimeTypes, logMessageSendFailure

// Module 6154 (logMessageSendFailure)
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
  require(4384) /* collectGuildAnalyticsMetadata */.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, { failure_code: failureCode, error_message: errorMessage, attachment_mimetypes: mapped });
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
