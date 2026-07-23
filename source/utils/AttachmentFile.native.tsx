// Module ID: 4673
// Function ID: 40630
// Name: _getAttachmentFile
// Dependencies: [5, 3, 44, 4665, 4674, 4666, 2]
// Exports: cancelGetAttachmentFile, fileIsInAppDir, getAttachmentFile

// Module 4673 (_getAttachmentFile)
import items from "items";
import importDefaultResult from "_isNativeReflectConstruct";

const require = arg1;
async function _getAttachmentFile(arg0, arg1, arg2) {
  outer2_1(outer2_2[2])(arg0.item.platform === outer2_0(outer2_2[3]).UploadPlatform.REACT_NATIVE, "Upload must be in the React Native format");
  let obj = outer2_0(outer2_2[4]);
  const tmp4 = yield obj.getFileInfo(arg0, arg1);
  const tmp = arg0;
  const tmp2 = outer2_1(outer2_2[2]);
  const attachmentPayload = outer2_0(outer2_2[5]).getAttachmentPayload(tmp, arg1, tmp4.name);
  const obj2 = outer2_0(outer2_2[5]);
  const obj3 = outer2_0(outer2_2[4]);
  while (true) {
    obj = { file: tmp4, uri: tmp4.uri };
    let filename = attachmentPayload.filename;
    let tmp7 = filename;
    let tmp8 = null;
    let str = "";
    if (null == filename) {
      break;
    } else {
      str = filename;
      break;
    }
    obj.name = str;
    obj.fileSize = tmp6;
    return obj;
  }
}
async function _cancelGetAttachmentFile(arg0, arg1) {
  yield outer2_0(outer2_2[4]).cancelGetFileInfo(arg0);
}
importDefaultResult = new importDefaultResult("AttachmentFile");
const result = require("invariant").fileFinishedImporting("utils/AttachmentFile.native.tsx");

export const getAttachmentFile = function getAttachmentFile(arg0, arg1) {
  return _getAttachmentFile(...arguments);
};
export const cancelGetAttachmentFile = function cancelGetAttachmentFile(found) {
  return _cancelGetAttachmentFile(...arguments);
};
export const fileIsInAppDir = function fileIsInAppDir(uri) {
  const replaced = uri.replace(/^file:\/\//, "");
  const tmp = "" !== require(4674) /* openImagePickerUnhandled */.getAppDir();
  let startsWithResult = tmp;
  if (tmp) {
    startsWithResult = replaced.startsWith(require(4674) /* openImagePickerUnhandled */.getAppDir());
    const obj3 = require(4674) /* openImagePickerUnhandled */;
  }
  return startsWithResult;
};
