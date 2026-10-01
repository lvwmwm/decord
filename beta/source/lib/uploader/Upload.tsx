// Module ID: 5440
// Function ID: 5441
// Name: Upload
// Dependencies: [568, 5441, 12, 5446, 1255, 2]
// Exports: isResolvedUpload

// Module 5440 (Upload)
import _modDef12 from "module_12" /* 12 */;
import _mod568 from "module_568" /* 568 */;
import v1 from "v1" /* 1255 */;
import UploadUtils from "UploadUtils" /* 5441 */;
import FileUtilsAll from "FileUtils" /* 5446 */;
import size from "module_2" /* 2 */;

const UploadPlatform = { REACT_NATIVE: 0, [0]: "REACT_NATIVE", WEB: 1, [1]: "WEB" };
const EventEmitter = _mod568.EventEmitter;
class Upload extends EventEmitter {
  constructor(item) {
    let obj;
    const tmp5 = new Upload(tmp4, tmp3, tmp2, tmp);
    tmp5.allowOptimization = true;
    tmp5.item = item;
    if (item.platform === obj.REACT_NATIVE) {
      let uri = item.id;
      if (uri == null) {
        uri = item.uri;
      }
      tmp5.id = uri;
      const obj6 = { uri: null, overrideFilename: null, overrideType: null };
      ({ uri: obj4.uri, filename: obj4.overrideFilename, mimeType: obj4.overrideType } = item);
      const obj3 = UploadUtils;
      const file = obj3.getFile(obj6);
      ({ filename: tmp5.filename, isImage: tmp5.isImage, isVideo: tmp5.isVideo, type: tmp5.mimeType } = file);
      ({ origin: tmp5.origin, durationSecs: tmp5.durationSecs, waveform: tmp5.waveform } = item);
    } else {
      let id = item.id;
      if (id == null) {
        obj = _modDef12;
        id = obj.uniqueId("upload");
      }
      tmp5.id = id;
      const obj2 = FileUtilsAll;
      tmp5.classification = obj2.classifyFile(item.file);
      tmp5.isImage = "image" === tmp5.classification;
      tmp5.isVideo = "video" === tmp5.classification;
      tmp5.filename = item.file.name;
      tmp5.mimeType = item.file.type;
      tmp5.origin = item.origin;
    }
    ({ isThumbnail: tmp5.isThumbnail, clip: tmp5.clip } = item);
    const obj5 = v1;
    tmp5.uniqueId = obj5.v4();
    tmp5.spoiler = false;
    tmp5.description = null;
    return tmp5;
  }
  cancel() {

  }
  resetState() {
    return this;
  }
}
const prototype = Upload.prototype;
const result = size.fileFinishedImporting("lib/uploader/Upload.tsx");

export default Upload;
export { UploadPlatform };
export const isResolvedUpload = function isResolvedUpload(file) {
  return undefined !== file.isVideo && undefined !== file.isImage;
};
export const UploadOrigin = { FILE_ATTACHMENT: 0, [0]: "FILE_ATTACHMENT", IMAGE_PICKER: 1, [1]: "IMAGE_PICKER", IMAGE_EDITOR: 2, [2]: "IMAGE_EDITOR" };
