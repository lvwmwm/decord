// Module ID: 11111
// Function ID: 11112
// Name: AttachmentPreview
// Dependencies: [19, 17, 21, 5014, 575, 11112, 11113, 11114, 11115, 11116, 11117, 11118, 11119, 11120, 11121, 11122, 11123, 11124, 11125, 8216, 5717, 5624, 1375, 1187, 9382, 8873, 2]
// Exports: default

// Module 11111 (AttachmentPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import FileUtils from "FileUtils" /* 8216 */;
import common_Video from "common/Video" /* 8873 */;
import AssetRegistryDefault from "AssetRegistry" /* 11112 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11113 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11114 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11115 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11116 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11117 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11118 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11119 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 11120 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 11121 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 11122 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 11123 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 11124 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 11125 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
class AttachmentIcon {
  constructor(fileName) {
    fileName = fileName.fileName;
    const items = [fileName];
    const tmp = closure_7();
    const memo = react.useMemo(() => {
      const tmp2 = FileUtils;
      let str = fileName;
      const classifyFileName = tmp2.classifyFileName;
      if (fileName == null) {
        str = "";
      }
      let tmp3 = obj3[classifyFileName(tmp2, str)];
      if (tmp3 == null) {
        tmp3 = AssetRegistryDefault12;
      }
      return tmp3;
    }, items);
    const obj = { style: tmp.attachmentFileIcon, source: memo };
    return closure_5(FastImageDefault, obj);
  }
}
function FilenameText(fileName) {
  let str3;
  fileName = fileName.fileName;
  const tmp = closure_7();
  let str = fileName;
  const exec = /(?:\.([^.]+))?$/.exec;
  if (fileName == null) {
    str = "";
  }
  const match = exec(str);
  let tmp6 = null != fileName;
  const tmp4 = metroRequire;
  const tmp5 = View;
  if (tmp6) {
    tmp6 = "" !== fileName;
  }
  if (tmp6) {
    const obj = { style: tmp.attachmentFileName, ellipsizeMode: "middle", lineClamp: 1, variant: "text-xs/medium", color: "mobile-text-heading-primary", children: fileName };
    tmp6 = hasOwnProperty(Text_Text.Text, obj);
  }
  const items = [tmp6, ];
  const obj2 = { style: tmp.attachmentFileName, lineClamp: 1, variant: "text-xs/medium", color: "text-muted", children: str3 };
  str3 = "UNKNOWN";
  const Text = Text_Text.Text;
  const tmp10 = hasOwnProperty;
  if (null != match) {
    str3 = "UNKNOWN";
    if (null != match[1]) {
      const str4 = match[1];
      str3 = str4.toUpperCase();
    }
  }
  obj3 = { children: items };
  items[1] = tmp10(Text, obj2);
  return tmp4(tmp5, obj3);
}
function DefaultAttachmentPreview(fileName) {
  let borderRadius;
  let items;
  let items1;
  let maxFileWidth;
  fileName = fileName.fileName;
  ({ maxFileWidth, borderRadius } = fileName);
  const obj = { style: items, children: items1 };
  items = [closure_7().fileInfoAttachmentPreviewFile, { maxWidth: maxFileWidth, borderRadius }];
  items1 = [hasOwnProperty(AttachmentIcon, { fileName }), hasOwnProperty(FilenameText, { fileName })];
  return metroRequire(View, obj);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { fileInfoAttachmentPreviewFile: obj2, attachmentFileIcon: { height: 32, width: 24 }, attachmentFileName: { paddingRight: 4, paddingLeft: 4, maxWidth: 136 }, videoIcon: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" } };
obj2 = { flexDirection: "row", alignItems: "center", overflow: "hidden", borderRadius: nativeDefault.radii.sm, height: 75, padding: 12, flex: 1, gap: nativeDefault.space.PX_8 };
const metroImportDefault = createStyles.createStyles(obj);
let obj3 = { archive: AssetRegistryDefault, acrobat: AssetRegistryDefault2, ae: AssetRegistryDefault3, ai: AssetRegistryDefault4, audio: AssetRegistryDefault5, code: AssetRegistryDefault6, document: AssetRegistryDefault7, image: AssetRegistryDefault8, photoshop: AssetRegistryDefault9, sketch: AssetRegistryDefault10, spreadsheet: AssetRegistryDefault11, unknown: AssetRegistryDefault12, video: AssetRegistryDefault13, webcode: AssetRegistryDefault14 };
let closure_12 = react.memo(function ImageThumbnail(borderRadius) {
  let fileName;
  let height;
  let items;
  let items1;
  let items2;
  let obj5;
  let style;
  let tmp10;
  let uri;
  let width;
  ({ uri, width, height, style, fileName } = borderRadius);
  size = { uri, width, height };
  const size1 = { width, height, borderRadius: borderRadius.borderRadius };
  let isMatch = null != fileName && "" !== fileName;
  if (isMatch) {
    obj3 = /\.gif$/i;
    isMatch = obj3.test(fileName);
  }
  if (isMatch) {
    const obj4 = PlatformUtils;
    let isIOSResult = obj4.isIOS();
    const tmp2 = require;
    if (isIOSResult) {
      isIOSResult = uri.startsWith("ph://");
    }
    if (!isIOSResult) {
      const tmp2Result = tmp2(1375);
      isIOSResult = tmp2Result.isAndroid() && uri.startsWith("content://");
      const isAndroidResult = tmp2Result.isAndroid() && uri.startsWith("content://");
    }
    isMatch = isIOSResult;
  }
  const obj = { style: items, children: null };
  items = [size1, style, { overflow: "hidden" }];
  const tmp7 = View;
  if (isMatch) {
    const obj2 = { style: items1, source: obj5, resizeMode: "cover", enableAnimation: true };
    items1 = [size1, style];
    obj5 = { uri };
    obj.children = hasOwnProperty(FastImageDefault, obj2);
    tmp10 = obj;
  } else {
    const obj6 = { style: items2, source: size, localImageSource: size };
    items2 = [size1, style];
    obj.children = hasOwnProperty(native.ThumbnailImage, obj6);
    tmp10 = obj;
  }
  return hasOwnProperty(tmp7, tmp10);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/media/native/AttachmentPreview.tsx");

export default function AttachmentPreview(isImage) {
  let borderRadius;
  let fileName;
  let isVideo;
  let items;
  let maxFileWidth;
  let obj5;
  let obj6;
  let size1;
  let tmp11;
  let uri;
  let width;
  ({ uri, isVideo, width } = isImage);
  isImage = isImage.isImage;
  if (width === undefined) {
    width = 75;
  }
  let num = isImage.height;
  if (num === undefined) {
    num = 75;
  }
  ({ fileName, borderRadius, maxFileWidth } = isImage);
  if (borderRadius === undefined) {
    borderRadius = nativeDefault.radii.sm;
  }
  let flag = isImage.showPlayOnVideoPreview;
  if (flag === undefined) {
    flag = false;
  }
  let defaultPreview = isImage.defaultPreview;
  if (defaultPreview === undefined) {
    const obj = { fileName, maxFileWidth, borderRadius };
    defaultPreview = hasOwnProperty(DefaultAttachmentPreview, obj);
  }
  const style = isImage.style;
  if (isImage) {
    size = { uri, width, height: num, borderRadius, style, fileName };
    tmp11 = hasOwnProperty(closure_12, size);
  } else {
    let tmp8;
    let tmp16;
    if (!isVideo) {
      obj3 = PlatformUtils;
      if (obj3.isIOS()) {
        tmp8 = tmp9;
      }
      tmp11 = defaultPreview;
      if (isVideo) {
        tmp11 = defaultPreview;
        const tmp9Result = PlatformUtils;
        if (tmp9Result.isIOS()) {
          const obj4 = { style, children: hasOwnProperty(common_Video.VideoComponent, obj5) };
          obj5 = { style: size1, source: obj6, muted: true, paused: true, resizeMode: "cover", preventsDisplaySleepDuringVideoPlayback: false };
          size1 = { height: num, width };
          obj6 = { uri };
          tmp11 = hasOwnProperty(View, obj4);
        }
      }
    } else {
      tmp8 = require;
      PlatformUtils;
    }
    if (flag) {
      const size2 = { uri, width, height: num, borderRadius, style, fileName };
      const obj7 = { style, children: items };
      items = [hasOwnProperty(closure_12, size2), ];
      const obj8 = { style: tmp5.videoIcon, children: hasOwnProperty(tmp8(9382).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }) };
      items[1] = hasOwnProperty(View, obj8);
      tmp16 = metroRequire(View, obj7);
    } else {
      const size3 = { uri, width, height: num, borderRadius, style, fileName };
      tmp16 = hasOwnProperty(closure_12, size3);
    }
    tmp11 = tmp16;
  }
  return tmp11;
};
export { AttachmentIcon };
