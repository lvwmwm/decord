// Module ID: 8133
// Function ID: 64358
// Name: getAttachmentUploadAbortAlertContent
// Dependencies: []
// Exports: getAttachmentUploadAbortAlertContent

// Module 8133 (getAttachmentUploadAbortAlertContent)
const AbortCodes = require(dependencyMap[0]).AbortCodes;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/media_uploads/getAttachmentUploadAbortAlert.tsx");

export const getAttachmentUploadAbortAlertContent = function getAttachmentUploadAbortAlertContent(code) {
  const intl = require(dependencyMap[1]).intl;
  const stringResult = intl.string(require(dependencyMap[1]).t.B3vFdU);
  if (AbortCodes.TOTAL_ATTACHMENT_SIZE_TOO_LARGE === code) {
    let obj = { title: stringResult };
    const intl4 = require(dependencyMap[1]).intl;
    obj = { maxSizeMb: require(dependencyMap[2]).MAX_TOTAL_ATTACHMENT_SIZE_MB };
    obj.body = intl4.formatToPlainString(require(dependencyMap[1]).t.DYFPg2, obj);
    return obj;
  } else if (AbortCodes.CLOUD_UPLOAD_NOT_FOUND === code) {
    const obj1 = { title: stringResult };
    const intl3 = require(dependencyMap[1]).intl;
    obj1.body = intl3.string(require(dependencyMap[1]).t.bQldfH);
    return obj1;
  } else if (AbortCodes.INVALID_PERMISSIONS === code) {
    obj = { title: stringResult };
    const intl2 = require(dependencyMap[1]).intl;
    obj.body = intl2.string(require(dependencyMap[1]).t.zl4Weq);
    return obj;
  } else {
    return null;
  }
};
