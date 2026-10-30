// Module ID: 13724
// Function ID: 13725
// Name: MediaPostGridThumbnail
// Dependencies: [19, 17, 21, 5712, 13722, 1376, 2]
// Exports: default

// Module 13724 (MediaPostGridThumbnail)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import FastImageDefault from "FastImage" /* 5712 */;
import ForumPostMedia from "ForumPostMedia" /* 13722 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function MediaPostGridThumbnailAndroid(resizeMode) {
  let androidStyle;
  let backgroundImagesource;
  let blurTheme;
  let height;
  let items;
  let items1;
  let items2;
  let items3;
  let obj4;
  let shouldSpoiler;
  let source;
  let width;
  ({ shouldSpoiler, blurTheme, source, androidStyle, backgroundImagesource } = resizeMode);
  let num = 0;
  resizeMode = resizeMode.resizeMode;
  if (shouldSpoiler) {
    num = 10;
  }
  let flattenResult = React3.flatten(androidStyle);
  if (flattenResult == null) {
    flattenResult = {};
  }
  ({ width, height } = flattenResult);
  const tmp2 = metroRequire;
  const tmp3 = _false;
  if (null == backgroundImagesource) {
    const obj2 = { style: items, source, blurRadius: num, resizeMode: "cover" };
    items = [React3.absoluteFill, ];
    size = { width, height };
    const obj = { style: androidStyle, children: items1 };
    items[1] = size;
    items1 = [hasOwnProperty(FastImageDefault, obj2), ];
    const obj3 = { shouldSpoiler, blurTheme };
    items1[1] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj3);
    obj4 = obj;
  } else {
    obj4 = { style: androidStyle, children: items3 };
    const obj5 = { style: items2, source: backgroundImagesource, resizeMode: "cover" };
    items2 = [React3.absoluteFill, ];
    const size1 = { width, height, opacity: 0.2 };
    items2[1] = size1;
    items3 = [hasOwnProperty(FastImageDefault, obj5), , ];
    const obj6 = { style: React3.absoluteFill, source, resizeMode };
    items3[1] = hasOwnProperty(FastImageDefault, obj6);
    const obj7 = { shouldSpoiler, blurTheme };
    items3[2] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj7);
  }
  return tmp2(tmp3, obj4);
}
function MediaPostGridThumbnailIOS(arg0) {
  let backgroundImagesource;
  let blurTheme;
  let iosStyle;
  let items;
  let items1;
  let items2;
  let obj4;
  let resizeMode;
  let shouldSpoiler;
  let source;
  ({ shouldSpoiler, blurTheme, source, iosStyle, backgroundImagesource, resizeMode } = arg0);
  const tmp = metroRequire;
  const tmp2 = metroImportDefault;
  if (null == backgroundImagesource) {
    const obj = { children: items };
    const obj2 = { style: iosStyle, source, resizeMode };
    items = [hasOwnProperty(FastImageDefault, obj2), ];
    const obj3 = { shouldSpoiler, blurTheme };
    items[1] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj3);
    obj4 = obj;
  } else {
    obj4 = { children: items2 };
    const obj5 = { style: items1, source: backgroundImagesource, resizeMode: "cover" };
    items1 = [React3.absoluteFill, { opacity: 0.2 }];
    items2 = [hasOwnProperty(FastImageDefault, obj5), , ];
    const obj6 = { style: iosStyle, source, resizeMode };
    items2[1] = hasOwnProperty(FastImageDefault, obj6);
    const obj7 = { shouldSpoiler, blurTheme };
    items2[2] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj7);
  }
  return tmp(tmp2, obj4);
}
({ View: c3, StyleSheet: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let size = size_mod;
const result = size.fileFinishedImporting("modules/media_channel/native/MediaPostGridThumbnail.tsx");

export default function MediaPostGridThumbnail(isPortrait) {
  let tmp4Result;
  let str = "cover";
  let source;
  const tmp = true === isPortrait.isPortrait && false === isPortrait.shouldSpoiler;
  if (tmp) {
    source = isPortrait.source;
    str = "contain";
  }
  const obj = { backgroundImagesource: source, resizeMode: str };
  const merged = Object.assign(isPortrait);
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    const obj3 = {};
    const merged1 = Object.assign(obj);
    tmp4Result = tmp4(MediaPostGridThumbnailAndroid, obj3);
  } else {
    const obj4 = {};
    const merged2 = Object.assign(obj);
    tmp4Result = tmp4(MediaPostGridThumbnailIOS, obj4);
  }
  return tmp4Result;
};
