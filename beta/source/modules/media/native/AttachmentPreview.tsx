// Module ID: 9657
// Function ID: 9658
// Name: AttachmentPreview
// Dependencies: [19, 17, 21, 4836, 576, 9658, 9659, 9660, 9661, 9662, 9663, 9664, 9665, 9666, 9667, 9668, 9669, 9670, 9671, 5446, 4832, 1364, 5899, 1177, 8176, 7755, 2]
// Exports: default

// Module 9657 (AttachmentPreview)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import Text_Text from "Text/Text" /* 4832 */;
import FileUtils from "FileUtils" /* 5446 */;
import FastImageDefault from "FastImage" /* 5899 */;
import common_Video from "common/Video" /* 7755 */;
import AssetRegistryDefault from "AssetRegistry" /* 9658 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9659 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9660 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9661 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 9662 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 9663 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 9664 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 9665 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 9666 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 9667 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 9668 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 9669 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 9670 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 9671 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
class AttachmentIcon {
  constructor(fileName) {
    fileName = fileName.fileName;
    const items = [fileName];
    const tmp = closure_8();
    const obj = {
      style: tmp.attachmentFileIcon,
      source: react.useMemo(() => {
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
      }, items)
    };
    return closure_6(closure_4, obj);
  }
}
function FilenameText(fileName) {
  let str3;
  fileName = fileName.fileName;
  const tmp = closure_8();
  let str = fileName;
  const exec = /(?:\.([^.]+))?$/.exec;
  if (fileName == null) {
    str = "";
  }
  const match = exec(str);
  let tmp6 = null != fileName;
  const tmp4 = metroImportDefault;
  const tmp5 = hasOwnProperty;
  if (tmp6) {
    tmp6 = "" !== fileName;
  }
  if (tmp6) {
    const obj = { style: tmp.attachmentFileName, ellipsizeMode: "middle", lineClamp: 1, variant: "text-xs/medium", color: "mobile-text-heading-primary", children: fileName };
    tmp6 = metroRequire(Text_Text.Text, obj);
  }
  const items = [tmp6, ];
  const obj2 = { style: tmp.attachmentFileName, lineClamp: 1, variant: "text-xs/medium", color: "text-muted", children: str3 };
  str3 = "UNKNOWN";
  const Text = Text_Text.Text;
  const tmp10 = metroRequire;
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
  items = [closure_8().fileInfoAttachmentPreviewFile, { maxWidth: maxFileWidth, borderRadius }];
  items1 = [metroRequire(AttachmentIcon, { fileName }), metroRequire(FilenameText, { fileName })];
  return metroImportDefault(hasOwnProperty, obj);
}
({ Image: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { fileInfoAttachmentPreviewFile: obj2, attachmentFileIcon: { height: 32, width: 24 }, attachmentFileName: { paddingRight: 4, paddingLeft: 4, maxWidth: 136 }, videoIcon: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" } };
obj2 = { flexDirection: "row", alignItems: "center", overflow: "hidden", borderRadius: nativeDefault.radii.sm, height: 75, padding: 12, flex: 1, gap: nativeDefault.space.PX_8 };
const metroImportAll = createStyles.createStyles(obj);
let obj3 = { archive: AssetRegistryDefault, acrobat: AssetRegistryDefault2, ae: AssetRegistryDefault3, ai: AssetRegistryDefault4, audio: AssetRegistryDefault5, code: AssetRegistryDefault6, document: AssetRegistryDefault7, image: AssetRegistryDefault8, photoshop: AssetRegistryDefault9, sketch: AssetRegistryDefault10, spreadsheet: AssetRegistryDefault11, unknown: AssetRegistryDefault12, video: AssetRegistryDefault13, webcode: AssetRegistryDefault14 };
let closure_13 = react.memo((borderRadius) => {
  let fileName;
  let height;
  let items;
  let items1;
  let items2;
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
      const tmp2Result = tmp2(1364);
      isIOSResult = tmp2Result.isAndroid() && uri.startsWith("content://");
      const isAndroidResult = tmp2Result.isAndroid() && uri.startsWith("content://");
    }
    isMatch = isIOSResult;
  }
  const obj = { style: items, children: null };
  items = [size1, style, { overflow: "hidden" }];
  const tmp7 = hasOwnProperty;
  if (isMatch) {
    const obj2 = { style: items1, source: size, resizeMode: "cover", enableAnimation: true };
    items1 = [size1, style];
    obj.children = metroRequire(FastImageDefault, obj2);
    tmp10 = obj;
  } else {
    const obj5 = { style: items2, source: size, localImageSource: size };
    items2 = [size1, style];
    obj.children = metroRequire(native.ThumbnailImage, obj5);
    tmp10 = obj;
  }
  return metroRequire(tmp7, tmp10);
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
    defaultPreview = metroRequire(DefaultAttachmentPreview, obj);
  }
  const style = isImage.style;
  if (isImage) {
    size = { uri, width, height: num, borderRadius, style, fileName };
    tmp11 = metroRequire(closure_13, size);
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
          const obj4 = { style, children: metroRequire(common_Video.VideoComponent, obj5) };
          obj5 = { style: size1, source: obj6, muted: true, paused: true, resizeMode: "cover", preventsDisplaySleepDuringVideoPlayback: false };
          size1 = { height: num, width };
          obj6 = { uri };
          tmp11 = metroRequire(hasOwnProperty, obj4);
        }
      }
    } else {
      tmp8 = require;
      PlatformUtils;
    }
    if (flag) {
      const size2 = { uri, width, height: num, borderRadius, style, fileName };
      const obj7 = { style, children: items };
      items = [metroRequire(closure_13, size2), ];
      const obj8 = { style: tmp5.videoIcon, children: metroRequire(tmp8(8176).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }) };
      items[1] = metroRequire(hasOwnProperty, obj8);
      tmp16 = metroImportDefault(hasOwnProperty, obj7);
    } else {
      const size3 = { uri, width, height: num, borderRadius, style, fileName };
      tmp16 = metroRequire(closure_13, size3);
    }
    tmp11 = tmp16;
  }
  return tmp11;
};
export { AttachmentIcon };
