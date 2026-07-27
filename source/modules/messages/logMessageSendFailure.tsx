// Module ID: 6102
// Function ID: 54572
// Name: getAttachmentMimeTypes
// Dependencies: [653, 4325, 2]
// Exports: logMessageSendFailure

// Module 6102 (getAttachmentMimeTypes)
import { AnalyticEvents } from "ME";

function getAttachmentMimeTypes(fileItems) {
  return fileItems.map((mimeType) => {
    mimeType = mimeType.mimeType;
    let str = "unknown";
    if (null != mimeType) {
      str = mimeType;
    }
    return str;
  });
}
const result = require("set").fileFinishedImporting("modules/messages/logMessageSendFailure.tsx");

export const logMessageSendFailure = function logMessageSendFailure(fileItems) {
  if (null != fileItems.fileItems) {
    let items = getAttachmentMimeTypes(fileItems.fileItems);
  } else {
    items = [];
  }
  const errorMessage = fileItems.errorMessage;
  let tmp2;
  if (null != errorMessage) {
    tmp2 = errorMessage;
  }
  const failureCode = fileItems.failureCode;
  let tmp3;
  if (null != failureCode) {
    tmp3 = failureCode;
  }
  let obj = require(4325) /* _createForOfIteratorHelperLoose */;
  obj = { failure_code: tmp3, error_message: tmp2, attachment_mimetypes: items };
  obj.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, obj);
};
export { getAttachmentMimeTypes };
