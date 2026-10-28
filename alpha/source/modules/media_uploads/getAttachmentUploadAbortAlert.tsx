// Module ID: 14290
// Function ID: 14291
// Name: getAttachmentUploadAbortAlert
// Dependencies: [1084, 1125, 8178, 2]
// Exports: getAttachmentUploadAbortAlertContent

// Module 14290 (getAttachmentUploadAbortAlert)
import Constants from "Constants" /* 1084 */;
import intl5 from "intl" /* 1125 */;
import UploadUtils from "UploadUtils" /* 8178 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/media_uploads/getAttachmentUploadAbortAlert.tsx");

export const getAttachmentUploadAbortAlertContent = function getAttachmentUploadAbortAlertContent(code) {
  let DYFPg2;
  let formatToPlainString;
  let intl2;
  let intl3;
  let obj3;
  const intl = intl5.intl;
  const stringResult = intl.string(intl5.t.B3vFdU);
  if (AbortCodes.TOTAL_ATTACHMENT_SIZE_TOO_LARGE === code) {
    const obj2 = { title: stringResult, body: formatToPlainString(DYFPg2, obj3) };
    const intl4 = tmp(1125).intl;
    formatToPlainString = intl4.formatToPlainString;
    obj3 = { maxSizeMb: UploadUtils.MAX_TOTAL_ATTACHMENT_SIZE_MB };
    DYFPg2 = tmp(1125).t.DYFPg2;
    return obj2;
  } else if (AbortCodes.CLOUD_UPLOAD_NOT_FOUND === code) {
    const obj4 = { title: stringResult, body: intl3.string(intl5.t.bQldfH) };
    intl3 = tmp(1125).intl;
    return obj4;
  } else if (AbortCodes.INVALID_PERMISSIONS === code) {
    const obj = { title: stringResult, body: intl2.string(intl5.t.zl4Weq) };
    intl2 = tmp(1125).intl;
    return obj;
  } else {
    return null;
  }
};
