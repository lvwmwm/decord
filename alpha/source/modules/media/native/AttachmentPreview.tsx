// Module ID: 11865
// Function ID: 11866
// Name: AttachmentPreview
// Dependencies: [19, 17, 21, 5092, 587, 11866, 11867, 11868, 11869, 11870, 11871, 11872, 11873, 11874, 11875, 11876, 11877, 11878, 11879, 558, 576, 7764, 6156, 5088, 1382, 1200, 8929, 8425, 2]
// Exports: default

// Module 11865 (AttachmentPreview)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import FileUtils from "FileUtils" /* 7764 */;
import common_Video from "common/Video" /* 8425 */;
import AssetRegistryDefault from "AssetRegistry" /* 11866 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11867 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11868 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11869 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11870 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11871 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11872 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11873 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 11874 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 11875 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 11876 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 11877 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 11878 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 11879 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { fileInfoAttachmentPreviewFile: obj2, attachmentFileIcon: { height: 32, width: 24 }, attachmentFileName: { paddingRight: 4, paddingLeft: 4, maxWidth: 136 }, videoIcon: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" } };
obj2 = { flexDirection: "row", alignItems: "center", overflow: "hidden", borderRadius: nativeDefault.radii.sm, height: 75, padding: 12, flex: 1, gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
let obj3 = { archive: AssetRegistryDefault, acrobat: AssetRegistryDefault2, ae: AssetRegistryDefault3, ai: AssetRegistryDefault4, audio: AssetRegistryDefault5, code: AssetRegistryDefault6, document: AssetRegistryDefault7, image: AssetRegistryDefault8, photoshop: AssetRegistryDefault9, sketch: AssetRegistryDefault10, spreadsheet: AssetRegistryDefault11, unknown: AssetRegistryDefault12, video: AssetRegistryDefault13, webcode: AssetRegistryDefault14 };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function AttachmentIcon(fileName) {
  const obj = react2;
  const cResult = obj.c(3);
  let str = fileName.fileName;
  const tmp3 = closure_7();
  const tmp4 = FileUtils;
  const classifyFileName = tmp4.classifyFileName;
  if (str == null) {
    str = "";
  }
  let tmp5 = obj3[classifyFileName(tmp4, str)];
  if (tmp5 == null) {
    tmp5 = AssetRegistryDefault12;
  }
  if (cResult[0] === tmp5) {
    let tmp7;
    if (cResult[1] === tmp3.attachmentFileIcon) {
      tmp7 = cResult[2];
    }
    return tmp7;
  }
  const obj2 = { style: tmp3.attachmentFileIcon, source: tmp5 };
  const tmp8 = hasOwnProperty(FastImageDefault, obj2);
  cResult[0] = tmp5;
  cResult[1] = tmp3.attachmentFileIcon;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : (function AttachmentIcon(fileName) {
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
});
let closure_9 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function FilenameText(fileName) {
  let items;
  const obj = react2;
  const cResult = obj.c(21);
  fileName = fileName.fileName;
  const tmp4 = closure_7();
  if (cResult[0] === fileName) {
    let tmp5;
    let tmp6;
    let tmp7;
    let num;
    let str;
    let str2;
    let tmp8;
    let tmp9;
    if (cResult[1] === tmp4.attachmentFileName) {
      tmp5 = cResult[2];
      tmp6 = cResult[3];
      tmp7 = cResult[4];
      num = cResult[5];
      str = cResult[6];
      str2 = cResult[7];
      tmp8 = cResult[8];
      tmp9 = cResult[9];
    }
    if (cResult[10] === tmp5) {
      if (cResult[11] === tmp7) {
        if (cResult[12] === num) {
          if (cResult[13] === str) {
            if (cResult[14] === str2) {
              let tmp15;
              if (cResult[15] === tmp8) {
                tmp15 = cResult[16];
              }
              if (cResult[17] === tmp6) {
                if (cResult[18] === tmp9) {
                  let tmp18;
                  if (cResult[19] === tmp15) {
                    tmp18 = cResult[20];
                  }
                  return tmp18;
                }
              }
              const obj2 = { children: items };
              items = [tmp9, tmp15];
              const tmp20 = metroRequire(tmp6, obj2);
              cResult[17] = tmp6;
              cResult[18] = tmp9;
              cResult[19] = tmp15;
              cResult[20] = tmp20;
              tmp18 = tmp20;
            }
          }
        }
      }
    }
    obj3 = { style: tmp7, lineClamp: num, variant: str, color: str2, children: tmp8 };
    const tmp17 = hasOwnProperty(tmp5, obj3);
    cResult[10] = tmp5;
    cResult[11] = tmp7;
    cResult[12] = num;
    cResult[13] = str;
    cResult[14] = str2;
    cResult[15] = tmp8;
    cResult[16] = tmp17;
    tmp15 = tmp17;
  }
  let str3 = fileName;
  const exec = /(?:\.([^.]+))?$/.exec;
  if (fileName == null) {
    str3 = "";
  }
  const match = exec(str3);
  let tmp13 = null != fileName && "" !== fileName;
  if (tmp13) {
    const obj4 = { style: tmp4.attachmentFileName, ellipsizeMode: "middle", lineClamp: 1, variant: "text-xs/medium", color: "mobile-text-heading-primary", children: fileName };
    tmp13 = hasOwnProperty(tmp(5088).Text, obj4);
  }
  const Text = tmp(5088).Text;
  const attachmentFileName = tmp4.attachmentFileName;
  let str5 = "UNKNOWN";
  if (null != match) {
    str5 = "UNKNOWN";
    if (null != match[1]) {
      const str6 = match[1];
      str5 = str6.toUpperCase();
    }
  }
  cResult[0] = fileName;
  cResult[1] = tmp4.attachmentFileName;
  cResult[2] = Text;
  cResult[3] = View;
  cResult[4] = attachmentFileName;
  cResult[5] = 1;
  cResult[6] = "text-xs/medium";
  cResult[7] = "text-muted";
  cResult[8] = str5;
  cResult[9] = tmp13;
  tmp8 = str5;
  tmp9 = tmp13;
  str2 = "text-muted";
  str = "text-xs/medium";
  num = 1;
  tmp7 = attachmentFileName;
  tmp6 = tmp12;
  tmp5 = Text;
}) : (function FilenameText(fileName) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function DefaultAttachmentPreview(arg0) {
  let borderRadius;
  let fileName;
  let items;
  let maxFileWidth;
  const obj = react2;
  const cResult = obj.c(13);
  ({ fileName, maxFileWidth, borderRadius } = arg0);
  const tmp2 = closure_7();
  if (cResult[0] === borderRadius) {
    let tmp3;
    if (cResult[1] === maxFileWidth) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === tmp2.fileInfoAttachmentPreviewFile) {
      let tmp4;
      let tmp6;
      let tmp5;
      if (cResult[4] === tmp3) {
        tmp4 = cResult[5];
      }
      if (cResult[6] !== fileName) {
        const obj2 = { fileName };
        const tmp9 = hasOwnProperty(closure_9, obj2);
        obj3 = { fileName };
        const tmp11 = hasOwnProperty(closure_10, obj3);
        cResult[6] = fileName;
        cResult[7] = tmp9;
        cResult[8] = tmp11;
        tmp6 = tmp11;
        tmp5 = tmp9;
      } else {
        tmp5 = cResult[7];
        tmp6 = cResult[8];
      }
      if (cResult[9] === tmp4) {
        if (cResult[10] === tmp5) {
          let tmp12;
          if (cResult[11] === tmp6) {
            tmp12 = cResult[12];
          }
          return tmp12;
        }
      }
      const obj4 = { style: tmp4, children: items };
      items = [tmp5, tmp6];
      const tmp15 = metroRequire(View, obj4);
      cResult[9] = tmp4;
      cResult[10] = tmp5;
      cResult[11] = tmp6;
      cResult[12] = tmp15;
      tmp12 = tmp15;
    }
    const items1 = [tmp2.fileInfoAttachmentPreviewFile, tmp3];
    cResult[3] = tmp2.fileInfoAttachmentPreviewFile;
    cResult[4] = tmp3;
    cResult[5] = items1;
    tmp4 = items1;
  }
  const obj5 = { maxWidth: maxFileWidth, borderRadius };
  cResult[0] = borderRadius;
  cResult[1] = maxFileWidth;
  cResult[2] = obj5;
  tmp3 = obj5;
}) : (function DefaultAttachmentPreview(fileName) {
  let borderRadius;
  let items;
  let items1;
  let maxFileWidth;
  fileName = fileName.fileName;
  ({ maxFileWidth, borderRadius } = fileName);
  const obj = { style: items, children: items1 };
  items = [closure_7().fileInfoAttachmentPreviewFile, { maxWidth: maxFileWidth, borderRadius }];
  items1 = [hasOwnProperty(closure_9, { fileName }), hasOwnProperty(closure_10, { fileName })];
  return metroRequire(View, obj);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ImageThumbnail(arg0) {
  let borderRadius;
  let fileName;
  let height;
  let style;
  let tmp15;
  let uri;
  let width;
  const obj = react2;
  const cResult = obj.c(36);
  ({ uri, width, height, borderRadius, style, fileName } = arg0);
  if (cResult[0] === height) {
    if (cResult[1] === uri) {
      let tmp4;
      if (cResult[2] === width) {
        tmp4 = cResult[3];
      }
      if (cResult[4] === borderRadius) {
        if (cResult[5] === height) {
          let tmp5;
          let tmp9;
          if (cResult[6] === width) {
            tmp5 = cResult[7];
          }
          let isMatch = null != fileName && "" !== fileName;
          if (isMatch) {
            const obj4 = /\.gif$/i;
            isMatch = obj4.test(fileName);
          }
          if (isMatch) {
            let tmp20;
            const tmpResult = PlatformUtils;
            if (!tmpResult.isIOS()) {
              const tmpResult2 = PlatformUtils;
              if (tmpResult2.isAndroid()) {
                return tmp15;
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { overflow: "hidden" };
              cResult[8] = obj2;
              tmp20 = obj2;
            } else {
              tmp20 = cResult[8];
            }
            if (cResult[9] === style) {
              let tmp21;
              if (cResult[10] === tmp5) {
                tmp21 = cResult[11];
              }
              if (cResult[12] === style) {
                let tmp22;
                let tmp23;
                if (cResult[13] === tmp5) {
                  tmp22 = cResult[14];
                }
                if (cResult[15] !== uri) {
                  obj3 = { uri };
                  cResult[15] = uri;
                  cResult[16] = obj3;
                  tmp23 = obj3;
                } else {
                  tmp23 = cResult[16];
                }
                if (cResult[17] === tmp22) {
                  let tmp24;
                  if (cResult[18] === tmp23) {
                    tmp24 = cResult[19];
                  }
                  if (cResult[20] === tmp21) {
                    let tmp28;
                    if (cResult[21] === tmp24) {
                      tmp28 = cResult[22];
                    }
                    tmp15 = tmp28;
                  }
                  const obj5 = { style: tmp21, children: tmp24 };
                  const tmp31 = hasOwnProperty(View, obj5);
                  cResult[20] = tmp21;
                  cResult[21] = tmp24;
                  cResult[22] = tmp31;
                  tmp28 = tmp31;
                }
                const obj6 = { style: tmp22, source: tmp23, resizeMode: "cover", enableAnimation: true };
                const tmp27 = hasOwnProperty(FastImageDefault, obj6);
                cResult[17] = tmp22;
                cResult[18] = tmp23;
                cResult[19] = tmp27;
                tmp24 = tmp27;
              }
              const items = [tmp5, style];
              cResult[12] = style;
              cResult[13] = tmp5;
              cResult[14] = items;
              tmp22 = items;
            }
            const items1 = [tmp5, style, tmp20];
            cResult[9] = style;
            cResult[10] = tmp5;
            cResult[11] = items1;
            tmp21 = items1;
          }
          const _Symbol = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { overflow: "hidden" };
            cResult[23] = obj7;
            tmp9 = obj7;
          } else {
            tmp9 = cResult[23];
          }
          if (cResult[24] === style) {
            let tmp10;
            if (cResult[25] === tmp5) {
              tmp10 = cResult[26];
            }
            if (cResult[27] === style) {
              let tmp11;
              if (cResult[28] === tmp5) {
                tmp11 = cResult[29];
              }
              if (cResult[30] === tmp4) {
                let tmp12;
                if (cResult[31] === tmp11) {
                  tmp12 = cResult[32];
                }
                if (cResult[33] === tmp10) {
                  if (cResult[34] === tmp12) {
                    tmp15 = cResult[35];
                  }
                }
                const obj8 = { style: tmp10, children: tmp12 };
                const tmp18 = hasOwnProperty(View, obj8);
                cResult[33] = tmp10;
                cResult[34] = tmp12;
                cResult[35] = tmp18;
                tmp15 = tmp18;
              }
              const obj9 = { style: tmp11, source: tmp4, localImageSource: tmp4 };
              const tmp14 = hasOwnProperty(native.ThumbnailImage, obj9);
              cResult[30] = tmp4;
              cResult[31] = tmp11;
              cResult[32] = tmp14;
              tmp12 = tmp14;
            }
            const items2 = [tmp5, style];
            cResult[27] = style;
            cResult[28] = tmp5;
            cResult[29] = items2;
            tmp11 = items2;
          }
          const items3 = [tmp5, style, tmp9];
          cResult[24] = style;
          cResult[25] = tmp5;
          cResult[26] = items3;
          tmp10 = items3;
        }
      }
      size = { width, height, borderRadius };
      cResult[4] = borderRadius;
      cResult[5] = height;
      cResult[6] = width;
      cResult[7] = size;
      tmp5 = size;
    }
  }
  const size1 = { uri, width, height };
  cResult[0] = height;
  cResult[1] = uri;
  cResult[2] = width;
  cResult[3] = size1;
  tmp4 = size1;
}) : (function ImageThumbnail(borderRadius) {
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
      const tmp2Result = tmp2(1382);
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
}));
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
    defaultPreview = hasOwnProperty(closure_11, obj);
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
      const obj8 = { style: tmp5.videoIcon, children: hasOwnProperty(tmp8(8929).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }) };
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
export const AttachmentIcon = tmp4;
