// Module ID: 7933
// Function ID: 63352
// Name: handleUploadMessageAttachmentsErrors
// Dependencies: []
// Exports: handleUploadMessageAttachmentsErrors

// Module 7933 (handleUploadMessageAttachmentsErrors)
const _module = require(dependencyMap[0]);
({ AbortCodes: closure_3, MAX_UPLOAD_COUNT: closure_4 } = _module);
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/media_uploads/handleUploadAttachmentErrors.native.tsx");

export const handleUploadMessageAttachmentsErrors = function handleUploadMessageAttachmentsErrors(arg0) {
  let code;
  let reason;
  ({ code, reason } = arg0);
  if (undefined === code) {
    return false;
  } else if (code === constants.ENTITY_TOO_LARGE) {
    let obj = { location: "native.handleUploadMessageAttachmentsErrors" };
    const kestrelConfig = require(dependencyMap[1]).getKestrelConfig(obj);
    obj = { file: tmp };
    const obj10 = require(dependencyMap[1]);
    const tmp28 = importDefault(dependencyMap[2]);
    const obj13 = require(dependencyMap[1]);
    obj.maxSize = obj13.getEffectiveKestrelLimit(kestrelConfig, require(dependencyMap[3]).maxFileSize(tmp2));
    obj.analyticsLocations = tmp3;
    let type;
    if (null != reason) {
      type = reason.type;
    }
    obj.errorReason = type;
    tmp28(obj);
    return true;
  } else if (code === constants.TOO_MANY_ATTACHMENTS) {
    let obj1 = {};
    const intl5 = require(dependencyMap[5]).intl;
    obj1.title = intl5.string(require(dependencyMap[5]).t.wOr6hB);
    const intl6 = require(dependencyMap[5]).intl;
    let obj2 = { limit: closure_4 };
    obj1.body = intl6.formatToPlainString(require(dependencyMap[5]).t.qqyp/e, obj2);
    importDefault(dependencyMap[4]).show(obj1);
    return true;
  } else if (code === constants.ENTITY_EMPTY) {
    let obj4 = importDefault(dependencyMap[4]);
    const obj3 = {};
    const intl3 = require(dependencyMap[5]).intl;
    obj3.title = intl3.string(require(dependencyMap[5]).t.B3vFdU);
    const intl4 = require(dependencyMap[5]).intl;
    obj3.body = intl4.string(require(dependencyMap[5]).t.9ZpT2C);
    obj4.show(obj3);
    return true;
  } else if (code === constants.INVALID_FILE_ASSET) {
    obj2 = importDefault(dependencyMap[4]);
    obj4 = {};
    const intl = require(dependencyMap[5]).intl;
    obj4.title = intl.string(require(dependencyMap[5]).t.B3vFdU);
    const intl2 = require(dependencyMap[5]).intl;
    obj4.body = intl2.string(require(dependencyMap[5]).t.zMEjJg);
    obj2.show(obj4);
    return true;
  } else {
    obj = require(dependencyMap[6]);
    const attachmentUploadAbortAlertContent = obj.getAttachmentUploadAbortAlertContent(code);
    let flag = null != attachmentUploadAbortAlertContent;
    if (flag) {
      obj1 = importDefault(dependencyMap[4]);
      obj1.show(attachmentUploadAbortAlertContent);
      flag = true;
    }
    return flag;
  }
};
