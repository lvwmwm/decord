// Module ID: 9523
// Function ID: 9524
// Name: getAttachmentUploadAbortAlert
// Dependencies: [1074, 1114, 5210, 2]
// Exports: getAttachmentUploadAbortAlertContent

// Module 9523 (getAttachmentUploadAbortAlert)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/media_uploads/getAttachmentUploadAbortAlert.tsx");

export const getAttachmentUploadAbortAlertContent = function getAttachmentUploadAbortAlertContent(code) {
  const intl = util.intl;
  const stringResult = intl.string(util.t.B3vFdU);
  if (AbortCodes.TOTAL_ATTACHMENT_SIZE_TOO_LARGE === code) {
    const obj2 = { title: stringResult, body: null };
    const intl4 = tmp(1114).intl;
    const obj3 = { maxSizeMb: tmp(5210).MAX_TOTAL_ATTACHMENT_SIZE_MB };
    obj2.body = intl4.formatToPlainString(tmp(1114).t.DYFPg2, obj3);
    return obj2;
  } else if (tmp4.CLOUD_UPLOAD_NOT_FOUND === code) {
    const obj4 = { title: stringResult, body: null };
    const intl3 = tmp(1114).intl;
    obj4.body = intl3.string(tmp(1114).t.bQldfH);
    return obj4;
  } else if (tmp4.INVALID_PERMISSIONS === code) {
    const obj = { title: stringResult, body: null };
    const intl2 = tmp(1114).intl;
    obj.body = intl2.string(tmp(1114).t.zl4Weq);
    return obj;
  } else {
    return null;
  }
};
