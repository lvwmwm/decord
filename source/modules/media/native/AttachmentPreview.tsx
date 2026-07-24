// Module ID: 9868
// Function ID: 76469
// Name: AttachmentIcon
// Dependencies: [31, 27, 33, 4130, 689, 9869, 9870, 9871, 9872, 9873, 9874, 9875, 9876, 9877, 9878, 9879, 9880, 9881, 9882, 4670, 4126, 477, 5085, 1273, 9883, 8346, 2]
// Exports: default

// Module 9868 (AttachmentIcon)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
class AttachmentIcon {
  constructor(arg0) {
    fileName = global.fileName;
    items = [];
    items[0] = fileName;
    tmp = c8();
    obj = {
      style: tmp.attachmentFileIcon,
      source: Object.useMemo(() => {
            const obj = fileName(outer1_2[19]);
            let str = "";
            if (null != fileName) {
              str = fileName;
            }
            let tmp = outer1_9[obj.classifyFileName(obj, str)];
            if (null == tmp) {
              tmp = outer1_1(outer1_2[16]);
            }
            return tmp;
          }, items)
    };
    return jsx(Image, obj);
  }
}
function FilenameText(fileName) {
  fileName = fileName.fileName;
  const tmp = callback3();
  let obj = /(?:\.([^.]+))?$/;
  let str = "";
  if (null != fileName) {
    str = fileName;
  }
  const match = obj.exec(str);
  obj = {};
  let tmp5 = null != fileName;
  if (tmp5) {
    tmp5 = "" !== fileName;
  }
  if (tmp5) {
    obj = { style: tmp.attachmentFileName, ellipsizeMode: "middle", lineClamp: 1, variant: "text-xs/medium", color: "mobile-text-heading-primary", children: fileName };
    tmp5 = callback(require(4126) /* Text */.Text, obj);
  }
  const items = [tmp5, ];
  const obj1 = { style: tmp.attachmentFileName, lineClamp: 1, variant: "text-xs/medium", color: "text-muted" };
  let str2 = "UNKNOWN";
  if (null != match) {
    str2 = "UNKNOWN";
    if (null != match[1]) {
      str2 = match[1].toUpperCase();
      const str3 = match[1];
    }
  }
  obj1.children = str2;
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  return closure_7(closure_5, obj);
}
function DefaultAttachmentPreview(fileName) {
  let borderRadius;
  let maxFileWidth;
  fileName = fileName.fileName;
  ({ maxFileWidth, borderRadius } = fileName);
  const obj = {};
  const items = [callback3().fileInfoAttachmentPreviewFile, { maxWidth: maxFileWidth, borderRadius }];
  obj.style = items;
  const items1 = [callback(AttachmentIcon, { fileName }), callback(FilenameText, { fileName })];
  obj.children = items1;
  return callback2(closure_5, obj);
}
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = {};
obj = { flexDirection: "row", alignItems: "center", overflow: "hidden", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, height: 75, padding: 12, flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.fileInfoAttachmentPreviewFile = obj;
obj.attachmentFileIcon = { height: 32, width: 24 };
obj.attachmentFileName = { paddingRight: 4, paddingLeft: 4, maxWidth: 136 };
obj.videoIcon = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
_createForOfIteratorHelperLoose = { archive: require("registerAsset"), acrobat: require("registerAsset"), ae: require("registerAsset"), ai: require("registerAsset"), audio: require("registerAsset"), code: require("registerAsset"), document: require("registerAsset"), image: require("registerAsset"), photoshop: require("registerAsset"), sketch: require("registerAsset"), spreadsheet: require("registerAsset"), unknown: require("registerAsset"), video: require("registerAsset"), webcode: require("registerAsset") };
let closure_10 = importAllResult.memo((borderRadius) => {
  let fileName;
  let height;
  let style;
  let uri;
  let width;
  ({ uri, width, height, style, fileName } = borderRadius);
  let obj = { uri, width, height };
  obj = { width, height, borderRadius: borderRadius.borderRadius };
  let isMatch = null != fileName;
  if (isMatch) {
    isMatch = "" !== fileName;
  }
  if (isMatch) {
    let obj2 = /\.gif$/i;
    isMatch = obj2.test(fileName);
  }
  if (isMatch) {
    let isIOSResult = require(477) /* set */.isIOS();
    if (isIOSResult) {
      isIOSResult = uri.startsWith("ph://");
    }
    if (!isIOSResult) {
      let isAndroidResult = require(477) /* set */.isAndroid();
      if (isAndroidResult) {
        isAndroidResult = uri.startsWith("content://");
      }
      isIOSResult = isAndroidResult;
      const obj5 = require(477) /* set */;
    }
    isMatch = isIOSResult;
    const obj4 = require(477) /* set */;
  }
  obj = { style: items };
  items = [obj, style, { overflow: "hidden" }];
  if (isMatch) {
    const obj1 = {};
    const items1 = [obj, style];
    obj1.style = items1;
    obj1.source = obj;
    obj1.resizeMode = "cover";
    obj1.enableAnimation = true;
    obj.children = tmp10(importDefault(5085), obj1);
    let tmp13 = obj;
  } else {
    obj2 = {};
    const items2 = [obj, style];
    obj2.style = items2;
    obj2.source = obj;
    obj2.localImageSource = obj;
    obj.children = tmp10(require(1273) /* Button */.ThumbnailImage, obj2);
    tmp13 = obj;
  }
  return closure_6(closure_5, tmp13);
});
const result = require("jsxProd").fileFinishedImporting("modules/media/native/AttachmentPreview.tsx");

export default function AttachmentPreview(height) {
  let borderRadius;
  let fileName;
  let isVideo;
  let maxFileWidth;
  let uri;
  let width;
  ({ uri, isVideo, width } = height);
  if (width === undefined) {
    width = 75;
  }
  let num = height.height;
  if (num === undefined) {
    num = 75;
  }
  ({ fileName, borderRadius, maxFileWidth } = height);
  if (borderRadius === undefined) {
    borderRadius = importDefault(689).radii.sm;
  }
  let flag = height.showPlayOnVideoPreview;
  if (flag === undefined) {
    flag = false;
  }
  let defaultPreview = height.defaultPreview;
  if (defaultPreview === undefined) {
    let obj = { fileName, maxFileWidth, borderRadius };
    defaultPreview = callback(DefaultAttachmentPreview, obj);
  }
  const style = height.style;
  let tmp5 = callback3();
  if (height.isImage) {
    obj = { uri, width, height: num, borderRadius, style, fileName };
    let tmp10 = callback(closure_10, obj);
  } else {
    if (!isVideo) {
      let obj2 = require(477) /* set */;
      tmp10 = defaultPreview;
      if (isVideo) {
        let obj3 = require(477) /* set */;
        tmp10 = defaultPreview;
        if (obj3.isIOS()) {
          obj = { style };
          let obj1 = { style: null, source: null, muted: true, paused: true, resizeMode: "cover", preventsDisplaySleepDuringVideoPlayback: false };
          obj2 = { height: num, width };
          obj1.style = obj2;
          obj3 = { uri };
          obj1.source = obj3;
          obj.children = callback(require(8346) /* _isNativeReflectConstruct */.VideoComponent, obj1);
          tmp10 = callback(closure_5, obj);
        }
      }
    } else {
      obj1 = require(477) /* set */;
    }
    if (flag) {
      const obj4 = { style };
      const obj5 = { uri, width, height: num, borderRadius, style, fileName };
      const items = [callback(closure_10, obj5), ];
      const obj6 = { style: tmp5.videoIcon };
      tmp5 = callback(require(9883) /* CirclePlayIcon */.CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" });
      obj6.children = tmp5;
      items[1] = callback(closure_5, obj6);
      obj4.children = items;
      let tmp20 = callback2(closure_5, obj4);
    } else {
      const obj7 = { uri, width, height: num, borderRadius, style, fileName };
      tmp20 = callback(closure_10, obj7);
    }
  }
  return tmp10;
};
export { AttachmentIcon };
