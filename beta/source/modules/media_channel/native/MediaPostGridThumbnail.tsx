// Module ID: 11493
// Function ID: 11494
// Name: MediaPostGridThumbnail
// Dependencies: [19, 17, 21, 11491, 5899, 1364, 2]
// Exports: default

// Module 11493 (MediaPostGridThumbnail)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import FastImageDefault from "FastImage" /* 5899 */;
import ForumPostMedia from "ForumPostMedia" /* 11491 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function MediaPostGridThumbnailAndroid(arg0) {
  let androidStyle;
  let backgroundImagesource;
  let blurTheme;
  let items;
  let num;
  let obj2;
  let shouldSpoiler;
  let source;
  let tmp2Result;
  ({ shouldSpoiler, blurTheme, source, androidStyle, backgroundImagesource } = arg0);
  if (null == backgroundImagesource) {
    const obj = { style: androidStyle, source, blurRadius: num, resizeMode: "cover", children: hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj2) };
    num = 0;
    const tmp3 = _false;
    if (shouldSpoiler) {
      num = 10;
    }
    obj2 = { shouldSpoiler, blurTheme };
    tmp2Result = tmp2(tmp3, obj);
  } else {
    const obj3 = { style: androidStyle, source: backgroundImagesource, resizeMode: "cover", imageStyle: { opacity: 0.2 }, children: items };
    const obj4 = { style: React3.absoluteFill, source, resizeMode: tmp };
    items = [hasOwnProperty(FastImageDefault, obj4), ];
    const obj5 = { shouldSpoiler, blurTheme };
    items[1] = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj5);
    tmp2Result = metroRequire(_false, obj3);
  }
  return tmp2Result;
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
({ ImageBackground: c3, StyleSheet: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
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
