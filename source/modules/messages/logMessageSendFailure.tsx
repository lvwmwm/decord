// Module ID: 7075
// Function ID: 56682
// Name: getAttachmentMimeTypes
// Dependencies: []
// Exports: logMessageSendFailure

// Module 7075 (getAttachmentMimeTypes)
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
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/messages/logMessageSendFailure.tsx");

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
  let obj = require(dependencyMap[1]);
  obj = { failure_code: tmp3, error_message: tmp2, attachment_mimetypes: items };
  obj.trackWithMetadata(AnalyticEvents.SEND_MESSAGE_FAILURE, obj);
};
export { getAttachmentMimeTypes };
