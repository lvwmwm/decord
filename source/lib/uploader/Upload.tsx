// Module ID: 4661
// Function ID: 40417
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: isResolvedUpload

// Module 4661 (_isNativeReflectConstruct)
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";
import closure_7 from "result";
import closure_8 from "result";
import result from "result";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const obj = { REACT_NATIVE: 0, [0]: "REACT_NATIVE", WEB: 1, [1]: "WEB" };
result = result.fileFinishedImporting("lib/uploader/Upload.tsx");

export default (EventEmitter) => {
  class Upload {
    constructor(arg0) {
      self = this;
      tmp = closure_4(this, Upload);
      obj = closure_7(Upload);
      tmp2 = closure_6;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, [], closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.allowOptimization = true;
      tmp2Result.item = EventEmitter;
      if (EventEmitter.platform === closure_9.REACT_NATIVE) {
        uri = EventEmitter.id;
        tmp11 = null;
        if (null == uri) {
          uri = EventEmitter.uri;
        }
        tmp2Result.id = uri;
        tmp12 = Upload;
        tmp13 = closure_3;
        num3 = 5;
        obj4 = Upload(closure_3[5]);
        obj = {};
        ({ uri: obj5.uri, filename: obj5.overrideFilename, mimeType: obj5.overrideType } = EventEmitter);
        file = obj4.getFile(obj);
        ({ filename: tmp6.filename, isImage: tmp6.isImage, isVideo: tmp6.isVideo, type: tmp6.mimeType } = file);
        ({ origin: tmp6.origin, durationSecs: tmp6.durationSecs, waveform: tmp6.waveform } = EventEmitter);
      } else {
        id = EventEmitter.id;
        tmp15 = null;
        if (null == id) {
          tmp7 = closure_1;
          tmp8 = closure_3;
          num = 6;
          obj2 = closure_1(closure_3[6]);
          str = "upload";
          id = obj2.uniqueId("upload");
        }
        tmp2Result.id = id;
        tmp9 = closure_2;
        tmp10 = closure_3;
        num2 = 7;
        obj3 = closure_2(closure_3[7]);
        tmp2Result.classification = obj3.classifyFile(EventEmitter.file);
        str2 = "image";
        tmp2Result.isImage = "image" === tmp2Result.classification;
        str3 = "video";
        tmp2Result.isVideo = "video" === tmp2Result.classification;
        tmp2Result.filename = EventEmitter.file.name;
        tmp2Result.mimeType = EventEmitter.file.type;
        tmp2Result.origin = EventEmitter.origin;
      }
      ({ isThumbnail: tmp6.isThumbnail, clip: tmp6.clip } = EventEmitter);
      obj6 = Upload(closure_3[8]);
      tmp2Result.uniqueId = obj6.v4();
      tmp2Result.spoiler = false;
      tmp2Result.description = null;
      return tmp2Result;
    }
  }
  const arg1 = Upload;
  callback2(Upload, EventEmitter);
  let obj = {
    key: "cancel",
    value() {

    }
  };
  const items = [obj, ];
  obj = {
    key: "resetState",
    value() {
      return this;
    }
  };
  items[1] = obj;
  return callback(Upload, items);
}(require("result").EventEmitter);
export const UploadPlatform = obj;
export const isResolvedUpload = function isResolvedUpload(file) {
  return undefined !== file.isVideo && undefined !== file.isImage;
};
export const UploadOrigin = { FILE_ATTACHMENT: 0, [0]: "FILE_ATTACHMENT", IMAGE_PICKER: 1, [1]: "IMAGE_PICKER", IMAGE_EDITOR: 2, [2]: "IMAGE_EDITOR" };
