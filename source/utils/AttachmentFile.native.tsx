// Module ID: 4670
// Function ID: 40603
// Name: _getAttachmentFile
// Dependencies: []
// Exports: cancelGetAttachmentFile, fileIsInAppDir, getAttachmentFile

// Module 4670 (_getAttachmentFile)
async function _getAttachmentFile(item, arg1, arg2) {
  callback2(closure_2[2])(item.item.platform === callback(closure_2[3]).UploadPlatform.REACT_NATIVE, "Upload must be in the React Native format");
  let obj = callback(closure_2[4]);
  const tmp4 = yield obj.getFileInfo(item, arg1);
  const tmp = item;
  const tmp2 = callback2(closure_2[2]);
  const attachmentPayload = callback(closure_2[5]).getAttachmentPayload(tmp, arg1, tmp4.name);
  const obj2 = callback(closure_2[5]);
  const obj3 = callback(closure_2[4]);
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
      // break
    }
    obj.name = str;
    obj.fileSize = tmp6;
    return obj;
  }
}
async function _cancelGetAttachmentFile(item, arg1) {
  yield callback(closure_2[4]).cancelGetFileInfo(item);
}
let closure_3 = importDefault(dependencyMap[0]);
let importDefaultResult = importDefault(dependencyMap[1]);
importDefaultResult = new importDefaultResult("AttachmentFile");
const result = arg1(dependencyMap[6]).fileFinishedImporting("utils/AttachmentFile.native.tsx");

export const getAttachmentFile = function getAttachmentFile(arg0, arg1) {
  return _getAttachmentFile(...arguments);
};
export const cancelGetAttachmentFile = function cancelGetAttachmentFile(found) {
  return _cancelGetAttachmentFile(...arguments);
};
export const fileIsInAppDir = function fileIsInAppDir(uri) {
  const replaced = uri.replace(/^file:\/\//, "");
  const tmp = "" !== arg1(dependencyMap[4]).getAppDir();
  let startsWithResult = tmp;
  if (tmp) {
    startsWithResult = replaced.startsWith(arg1(dependencyMap[4]).getAppDir());
    const obj3 = arg1(dependencyMap[4]);
  }
  return startsWithResult;
};
