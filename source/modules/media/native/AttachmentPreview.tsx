// Module ID: 9829
// Function ID: 76234
// Name: AttachmentIcon
// Dependencies: []
// Exports: default

// Module 9829 (AttachmentIcon)
class AttachmentIcon {
  constructor(arg0) {
    fileName = global.fileName;
    arg1 = fileName;
    items = [];
    items[0] = fileName;
    tmp = closure_8();
    obj = {
      style: tmp.attachmentFileIcon,
      source: Object.useMemo(() => {
            const obj = fileName(closure_2[19]);
            let str = "";
            if (null != fileName) {
              str = fileName;
            }
            let tmp = closure_9[obj.classifyFileName(obj, str)];
            if (null == tmp) {
              tmp = callback(closure_2[16]);
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
    obj = { style: tmp.attachmentFileName, children: fileName };
    tmp5 = callback(arg1(dependencyMap[20]).Text, obj);
  }
  const items = [tmp5, ];
  const obj1 = { style: tmp.attachmentFileName };
  let str2 = "UNKNOWN";
  if (null != match) {
    str2 = "UNKNOWN";
    if (null != match[1]) {
      str2 = match[1].toUpperCase();
      const str3 = match[1];
    }
  }
  obj1.children = str2;
  items[1] = callback(arg1(dependencyMap[20]).Text, obj1);
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
const importAllResult = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = {};
obj = { 9223372036854775807: "<string:4178771970>", 0: "<string:4132503553>", 0: "<string:1262555629>", 9223372036854775807: "<string:1912602980>", 0: "toString", 9223372036854775807: "resolve", 0: "<string:1236288001>", borderRadius: importDefault(dependencyMap[4]).radii.sm, gap: importDefault(dependencyMap[4]).space.PX_8 };
obj.fileInfoAttachmentPreviewFile = obj;
obj.attachmentFileIcon = {};
obj.attachmentFileName = {};
obj.videoIcon = { "Null": false, "Null": false, "Null": false, "Null": false, "Null": false, "Null": false, "Null": false };
let closure_8 = obj1.createStyles(obj);
obj1 = { archive: importDefault(dependencyMap[5]), acrobat: importDefault(dependencyMap[6]), ae: importDefault(dependencyMap[7]), ai: importDefault(dependencyMap[8]), audio: importDefault(dependencyMap[9]), code: importDefault(dependencyMap[10]), document: importDefault(dependencyMap[11]), image: importDefault(dependencyMap[12]), photoshop: importDefault(dependencyMap[13]), sketch: importDefault(dependencyMap[14]), spreadsheet: importDefault(dependencyMap[15]), unknown: importDefault(dependencyMap[16]), video: importDefault(dependencyMap[17]), webcode: importDefault(dependencyMap[18]) };
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
    let isIOSResult = arg1(dependencyMap[21]).isIOS();
    if (isIOSResult) {
      isIOSResult = uri.startsWith("ph://");
    }
    if (!isIOSResult) {
      let isAndroidResult = arg1(dependencyMap[21]).isAndroid();
      if (isAndroidResult) {
        isAndroidResult = uri.startsWith("content://");
      }
      isIOSResult = isAndroidResult;
      const obj5 = arg1(dependencyMap[21]);
    }
    isMatch = isIOSResult;
    const obj4 = arg1(dependencyMap[21]);
  }
  obj = { style: items };
  const items = [obj, style, { overflow: "hidden" }];
  if (isMatch) {
    const obj1 = {};
    const items1 = [obj, style];
    obj1.style = items1;
    obj1.source = obj;
    obj1.resizeMode = "cover";
    obj1.enableAnimation = true;
    obj.children = tmp10(importDefault(dependencyMap[22]), obj1);
    let tmp13 = obj;
  } else {
    obj2 = {};
    const items2 = [obj, style];
    obj2.style = items2;
    obj2.source = obj;
    obj2.localImageSource = obj;
    obj.children = tmp10(arg1(dependencyMap[23]).ThumbnailImage, obj2);
    tmp13 = obj;
  }
  return closure_6(closure_5, tmp13);
});
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/media/native/AttachmentPreview.tsx");

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
    borderRadius = importDefault(dependencyMap[4]).radii.sm;
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
      let obj2 = arg1(dependencyMap[21]);
      tmp10 = defaultPreview;
      if (isVideo) {
        let obj3 = arg1(dependencyMap[21]);
        tmp10 = defaultPreview;
        if (obj3.isIOS()) {
          obj = { style };
          let obj1 = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
          obj2 = { height: num, width };
          obj1.style = obj2;
          obj3 = { uri };
          obj1.source = obj3;
          obj.children = callback(arg1(dependencyMap[25]).VideoComponent, obj1);
          tmp10 = callback(closure_5, obj);
        }
      }
    } else {
      obj1 = arg1(dependencyMap[21]);
    }
    if (flag) {
      const obj4 = { style };
      const obj5 = { uri, width, height: num, borderRadius, style, fileName };
      const items = [callback(closure_10, obj5), ];
      const obj6 = { style: tmp5.videoIcon };
      tmp5 = callback(arg1(dependencyMap[24]).CirclePlayIcon, {});
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
