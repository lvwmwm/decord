// Module ID: 8026
// Function ID: 63711
// Name: handleUploadMessageAttachmentsErrors
// Dependencies: [653, 4711, 8027, 4670, 4470, 1212, 8184, 2]
// Exports: handleUploadMessageAttachmentsErrors

// Module 8026 (handleUploadMessageAttachmentsErrors)
import ME from "ME";

let closure_3;
let closure_4;
({ AbortCodes: closure_3, MAX_UPLOAD_COUNT: closure_4 } = ME);
const result = require("showUploadFileSizeError").fileFinishedImporting("modules/media_uploads/handleUploadAttachmentErrors.native.tsx");

export const handleUploadMessageAttachmentsErrors = function handleUploadMessageAttachmentsErrors(arg0) {
  let code;
  let reason;
  ({ code, reason } = arg0);
  if (undefined === code) {
    return false;
  } else if (code === constants.ENTITY_TOO_LARGE) {
    let obj = { location: "native.handleUploadMessageAttachmentsErrors" };
    const kestrelConfig = require(4711) /* getKestrelConfig */.getKestrelConfig(obj);
    obj = { file: tmp };
    const obj10 = require(4711) /* getKestrelConfig */;
    const tmp28 = importDefault(8027);
    const obj13 = require(4711) /* getKestrelConfig */;
    obj.maxSize = obj13.getEffectiveKestrelLimit(kestrelConfig, require(4670) /* _createForOfIteratorHelperLoose */.maxFileSize(tmp2));
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
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj1.title = intl5.string(require(1212) /* getSystemLocale */.t.wOr6hB);
    const intl6 = require(1212) /* getSystemLocale */.intl;
    let obj2 = { limit: closure_4 };
    obj1.body = intl6.formatToPlainString(require(1212) /* getSystemLocale */.t["qqyp/e"], obj2);
    importDefault(4470).show(obj1);
    return true;
  } else if (code === constants.ENTITY_EMPTY) {
    let obj4 = importDefault(4470);
    const obj3 = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj3.title = intl3.string(require(1212) /* getSystemLocale */.t.B3vFdU);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj3.body = intl4.string(require(1212) /* getSystemLocale */.t["9ZpT2C"]);
    obj4.show(obj3);
    return true;
  } else if (code === constants.INVALID_FILE_ASSET) {
    obj2 = importDefault(4470);
    obj4 = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj4.title = intl.string(require(1212) /* getSystemLocale */.t.B3vFdU);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj4.body = intl2.string(require(1212) /* getSystemLocale */.t.zMEjJg);
    obj2.show(obj4);
    return true;
  } else {
    obj = require(8184) /* getAttachmentUploadAbortAlertContent */;
    const attachmentUploadAbortAlertContent = obj.getAttachmentUploadAbortAlertContent(code);
    let flag = null != attachmentUploadAbortAlertContent;
    if (flag) {
      obj1 = importDefault(4470);
      obj1.show(attachmentUploadAbortAlertContent);
      flag = true;
    }
    return flag;
  }
};
