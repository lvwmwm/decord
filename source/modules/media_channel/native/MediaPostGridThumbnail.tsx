// Module ID: 11135
// Function ID: 86653
// Name: MediaPostGridThumbnailAndroid
// Dependencies: [31, 27, 33, 11133, 5085, 477, 2]
// Exports: default

// Module 11135 (MediaPostGridThumbnailAndroid)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function MediaPostGridThumbnailAndroid(arg0) {
  let androidStyle;
  let backgroundImagesource;
  let blurTheme;
  let shouldSpoiler;
  let source;
  ({ shouldSpoiler, blurTheme, source, androidStyle, backgroundImagesource } = arg0);
  if (null == backgroundImagesource) {
    let obj = { style: androidStyle, source };
    let num = 0;
    if (shouldSpoiler) {
      num = 10;
    }
    obj.blurRadius = num;
    obj.resizeMode = "cover";
    obj = { shouldSpoiler, blurTheme };
    obj.children = callback(require(11133) /* ForumPostMediaAndroid */.ForumPostMediaSpoiler, obj);
    let tmp2Result = callback(closure_3, obj);
    const tmp2 = callback;
    const tmp3 = closure_3;
  } else {
    obj = { style: androidStyle, source: backgroundImagesource, resizeMode: "cover" };
    const obj1 = { opacity: 0.2 };
    obj.imageStyle = obj1;
    const obj2 = { style: closure_4.absoluteFill, source, resizeMode: tmp };
    const items = [callback(importDefault(5085), obj2), ];
    const obj3 = { shouldSpoiler, blurTheme };
    items[1] = callback(require(11133) /* ForumPostMediaAndroid */.ForumPostMediaSpoiler, obj3);
    obj.children = items;
    tmp2Result = callback2(closure_3, obj);
  }
  return tmp2Result;
}
function MediaPostGridThumbnailIOS(arg0) {
  let backgroundImagesource;
  let blurTheme;
  let iosStyle;
  let resizeMode;
  let shouldSpoiler;
  let source;
  ({ shouldSpoiler, blurTheme, source, iosStyle, backgroundImagesource, resizeMode } = arg0);
  if (null == backgroundImagesource) {
    let obj = {};
    obj = { style: iosStyle, source, resizeMode };
    const items = [callback(importDefault(5085), obj), ];
    obj = { shouldSpoiler, blurTheme };
    items[1] = callback(require(11133) /* ForumPostMediaAndroid */.ForumPostMediaSpoiler, obj);
    obj.children = items;
    let obj1 = obj;
  } else {
    obj1 = {};
    const obj2 = {};
    const items1 = [closure_4.absoluteFill, ];
    const obj3 = { opacity: 0.2 };
    items1[1] = obj3;
    obj2.style = items1;
    obj2.source = backgroundImagesource;
    obj2.resizeMode = "cover";
    const items2 = [callback(importDefault(5085), obj2), , ];
    const obj4 = { style: iosStyle, source, resizeMode };
    items2[1] = callback(importDefault(5085), obj4);
    const obj5 = { shouldSpoiler, blurTheme };
    items2[2] = callback(require(11133) /* ForumPostMediaAndroid */.ForumPostMediaSpoiler, obj5);
    obj1.children = items2;
  }
  return closure_6(closure_7, obj1);
}
({ ImageBackground: closure_3, StyleSheet: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/media_channel/native/MediaPostGridThumbnail.tsx");

export default function MediaPostGridThumbnail(isPortrait) {
  let tmp = true === isPortrait.isPortrait;
  if (tmp) {
    tmp = false === isPortrait.shouldSpoiler;
  }
  let str = "cover";
  let source;
  if (tmp) {
    source = isPortrait.source;
    str = "contain";
  }
  let obj = {};
  const merged = Object.assign(isPortrait);
  obj["backgroundImagesource"] = source;
  obj["resizeMode"] = str;
  if (obj2.isAndroid()) {
    obj = {};
    const merged1 = Object.assign(obj);
    let tmp4Result = tmp4(MediaPostGridThumbnailAndroid, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(obj);
    tmp4Result = tmp4(MediaPostGridThumbnailIOS, obj);
  }
  return tmp4Result;
};
