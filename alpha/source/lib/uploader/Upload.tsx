// Module ID: 8126
// Function ID: 8127
// Name: Upload
// Dependencies: [568, 8127, 8128, 12, 8132, 1269, 2]
// Exports: isResolvedUpload

// Module 8126 (Upload)
import _modDef12 from "module_12" /* 12 */;
import _mod568 from "module_568" /* 568 */;
import v1 from "v1" /* 1269 */;
import UploadPlatform from "UploadPlatform" /* 8127 */;
import UploadUtils from "UploadUtils" /* 8128 */;
import FileUtilsAll from "FileUtils" /* 8132 */;
import size from "module_2" /* 2 */;

const EventEmitter = _mod568.EventEmitter;
class Upload extends EventEmitter {
  constructor(item) {
    const tmp5 = new Upload(tmp4, tmp3, tmp2, tmp);
    tmp5.isPreparing = false;
    tmp5.allowOptimization = true;
    tmp5.item = item;
    if (item.platform === UploadPlatform.UploadPlatform.REACT_NATIVE) {
      let uri = item.id;
      if (uri == null) {
        uri = item.uri;
      }
      tmp5.id = uri;
      const obj3 = { uri: null, overrideFilename: null, overrideType: null };
      ({ uri: obj4.uri, filename: obj4.overrideFilename, mimeType: obj4.overrideType } = item);
      const tmp6Result = UploadUtils;
      const file = tmp6Result.getFile(obj3);
      ({ filename: tmp5.filename, isImage: tmp5.isImage, isVideo: tmp5.isVideo, type: tmp5.mimeType } = file);
      ({ origin: tmp5.origin, durationSecs: tmp5.durationSecs, waveform: tmp5.waveform } = item);
    } else {
      let id = item.id;
      if (id == null) {
        const obj = _modDef12;
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
    const tmp6Result2 = v1;
    tmp5.uniqueId = tmp6Result2.v4();
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
export function isResolvedUpload(file) {
  return undefined !== file.isVideo && undefined !== file.isImage;
}
export const UploadOrigin = { FILE_ATTACHMENT: 0, [0]: "FILE_ATTACHMENT", IMAGE_PICKER: 1, [1]: "IMAGE_PICKER", IMAGE_EDITOR: 2, [2]: "IMAGE_EDITOR" };
