// Module ID: 11686
// Function ID: 11687
// Name: MediaPostGridThumbnail
// Dependencies: [19, 17, 21, 558, 576, 6156, 11684, 1382, 2]

// Module 11686 (MediaPostGridThumbnail)
import react2 from "react" /* 576 */;
import FastImageDefault from "FastImage" /* 6156 */;
import ForumPostMedia from "ForumPostMedia" /* 11684 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
const PlatformUtils = tmp(1382);
({ View: c3, StyleSheet: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function MediaPostGridThumbnailAndroid(arg0) {
  let androidStyle;
  let backgroundImagesource;
  let blurTheme;
  let height;
  let items;
  let items2;
  let resizeMode;
  let shouldSpoiler;
  let source;
  let tmp21;
  let tmp4;
  let width;
  const obj = react2;
  const cResult = obj.c(33);
  ({ shouldSpoiler, blurTheme, source, androidStyle, backgroundImagesource, resizeMode } = arg0);
  let num = 0;
  if (shouldSpoiler) {
    num = 10;
  }
  if (cResult[0] !== androidStyle) {
    let flattenResult = React3.flatten(androidStyle);
    if (flattenResult == null) {
      flattenResult = {};
    }
    cResult[0] = androidStyle;
    cResult[1] = flattenResult;
    tmp4 = flattenResult;
  } else {
    tmp4 = cResult[1];
  }
  ({ width, height } = tmp4);
  if (null == backgroundImagesource) {
    if (cResult[2] === height) {
      let tmp25;
      if (cResult[3] === width) {
        tmp25 = cResult[4];
      }
      if (cResult[5] === num) {
        if (cResult[6] === source) {
          let tmp27;
          if (cResult[7] === tmp25) {
            tmp27 = cResult[8];
          }
          if (cResult[9] === blurTheme) {
            let tmp31;
            if (cResult[10] === shouldSpoiler) {
              tmp31 = cResult[11];
            }
            if (cResult[12] === androidStyle) {
              if (cResult[13] === tmp27) {
                let tmp34;
                if (cResult[14] === tmp31) {
                  tmp34 = cResult[15];
                }
                tmp21 = tmp34;
              }
            }
            const obj2 = { style: androidStyle, children: items };
            items = [tmp27, tmp31];
            const tmp37 = metroRequire(_false, obj2);
            cResult[12] = androidStyle;
            cResult[13] = tmp27;
            cResult[14] = tmp31;
            cResult[15] = tmp37;
            tmp34 = tmp37;
          }
          const obj3 = { shouldSpoiler, blurTheme };
          const tmp33 = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj3);
          cResult[9] = blurTheme;
          cResult[10] = shouldSpoiler;
          cResult[11] = tmp33;
          tmp31 = tmp33;
        }
      }
      const obj4 = { style: tmp25, source, blurRadius: num, resizeMode: "cover" };
      const tmp30 = hasOwnProperty(FastImageDefault, obj4);
      cResult[5] = num;
      cResult[6] = source;
      cResult[7] = tmp25;
      cResult[8] = tmp30;
      tmp27 = tmp30;
    }
    const items1 = [React3.absoluteFill, ];
    size = { width, height };
    items1[1] = size;
    cResult[2] = height;
    cResult[3] = width;
    cResult[4] = items1;
    tmp25 = items1;
  } else {
    if (cResult[16] === height) {
      let tmp7;
      if (cResult[17] === width) {
        tmp7 = cResult[18];
      }
      if (cResult[19] === backgroundImagesource) {
        let tmp9;
        if (cResult[20] === tmp7) {
          tmp9 = cResult[21];
        }
        if (cResult[22] === resizeMode) {
          let tmp13;
          if (cResult[23] === source) {
            tmp13 = cResult[24];
          }
          if (cResult[25] === blurTheme) {
            let tmp18;
            if (cResult[26] === shouldSpoiler) {
              tmp18 = cResult[27];
            }
            if (cResult[28] === androidStyle) {
              if (cResult[29] === tmp9) {
                if (cResult[30] === tmp13) {
                  if (cResult[31] === tmp18) {
                    tmp21 = cResult[32];
                  }
                }
              }
            }
            const obj5 = { style: androidStyle, children: items2 };
            items2 = [tmp9, tmp13, tmp18];
            const tmp24 = metroRequire(_false, obj5);
            cResult[28] = androidStyle;
            cResult[29] = tmp9;
            cResult[30] = tmp13;
            cResult[31] = tmp18;
            cResult[32] = tmp24;
            tmp21 = tmp24;
          }
          const obj6 = { shouldSpoiler, blurTheme };
          const tmp20 = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj6);
          cResult[25] = blurTheme;
          cResult[26] = shouldSpoiler;
          cResult[27] = tmp20;
          tmp18 = tmp20;
        }
        const obj7 = { style: React3.absoluteFill, source, resizeMode };
        const tmp17 = hasOwnProperty(FastImageDefault, obj7);
        cResult[22] = resizeMode;
        cResult[23] = source;
        cResult[24] = tmp17;
        tmp13 = tmp17;
      }
      const obj8 = { style: tmp7, source: backgroundImagesource, resizeMode: "cover" };
      const tmp12 = hasOwnProperty(FastImageDefault, obj8);
      cResult[19] = backgroundImagesource;
      cResult[20] = tmp7;
      cResult[21] = tmp12;
      tmp9 = tmp12;
    }
    const items3 = [React3.absoluteFill, ];
    const size1 = { width, height, opacity: 0.2 };
    items3[1] = size1;
    cResult[16] = height;
    cResult[17] = width;
    cResult[18] = items3;
    tmp7 = items3;
  }
  return tmp21;
}) : (function MediaPostGridThumbnailAndroid(resizeMode) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function MediaPostGridThumbnailIOS(arg0) {
  let backgroundImagesource;
  let blurTheme;
  let iosStyle;
  let items;
  let items2;
  let resizeMode;
  let shouldSpoiler;
  let source;
  let tmp17;
  const obj = react2;
  const cResult = obj.c(24);
  ({ shouldSpoiler, blurTheme, source, iosStyle, backgroundImagesource, resizeMode } = arg0);
  if (null == backgroundImagesource) {
    if (cResult[0] === iosStyle) {
      if (cResult[1] === resizeMode) {
        let tmp21;
        if (cResult[2] === source) {
          tmp21 = cResult[3];
        }
        if (cResult[4] === blurTheme) {
          let tmp25;
          if (cResult[5] === shouldSpoiler) {
            tmp25 = cResult[6];
          }
          if (cResult[7] === tmp21) {
            let tmp28;
            if (cResult[8] === tmp25) {
              tmp28 = cResult[9];
            }
            tmp17 = tmp28;
          }
          const obj2 = { children: items };
          items = [tmp21, tmp25];
          const tmp31 = metroRequire(metroImportDefault, obj2);
          cResult[7] = tmp21;
          cResult[8] = tmp25;
          cResult[9] = tmp31;
          tmp28 = tmp31;
        }
        const obj3 = { shouldSpoiler, blurTheme };
        const tmp27 = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj3);
        cResult[4] = blurTheme;
        cResult[5] = shouldSpoiler;
        cResult[6] = tmp27;
        tmp25 = tmp27;
      }
    }
    const obj4 = { style: iosStyle, source, resizeMode };
    const tmp24 = hasOwnProperty(FastImageDefault, obj4);
    cResult[0] = iosStyle;
    cResult[1] = resizeMode;
    cResult[2] = source;
    cResult[3] = tmp24;
    tmp21 = tmp24;
  } else {
    let tmp4;
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [React3.absoluteFill, { opacity: 0.2 }];
      cResult[10] = items1;
      tmp4 = items1;
    } else {
      tmp4 = cResult[10];
    }
    if (cResult[11] !== backgroundImagesource) {
      const obj5 = { style: tmp4, source: backgroundImagesource, resizeMode: "cover" };
      const tmp9 = hasOwnProperty(FastImageDefault, obj5);
      cResult[11] = backgroundImagesource;
      cResult[12] = tmp9;
      tmp6 = tmp9;
    } else {
      tmp6 = cResult[12];
    }
    if (cResult[13] === iosStyle) {
      if (cResult[14] === resizeMode) {
        let tmp10;
        if (cResult[15] === source) {
          tmp10 = cResult[16];
        }
        if (cResult[17] === blurTheme) {
          let tmp14;
          if (cResult[18] === shouldSpoiler) {
            tmp14 = cResult[19];
          }
          if (cResult[20] === tmp6) {
            if (cResult[21] === tmp10) {
              if (cResult[22] === tmp14) {
                tmp17 = cResult[23];
              }
            }
          }
          const obj6 = { children: items2 };
          items2 = [tmp6, tmp10, tmp14];
          const tmp20 = metroRequire(metroImportDefault, obj6);
          cResult[20] = tmp6;
          cResult[21] = tmp10;
          cResult[22] = tmp14;
          cResult[23] = tmp20;
          tmp17 = tmp20;
        }
        const obj7 = { shouldSpoiler, blurTheme };
        const tmp16 = hasOwnProperty(ForumPostMedia.ForumPostMediaSpoiler, obj7);
        cResult[17] = blurTheme;
        cResult[18] = shouldSpoiler;
        cResult[19] = tmp16;
        tmp14 = tmp16;
      }
    }
    const obj8 = { style: iosStyle, source, resizeMode };
    const tmp13 = hasOwnProperty(FastImageDefault, obj8);
    cResult[13] = iosStyle;
    cResult[14] = resizeMode;
    cResult[15] = source;
    cResult[16] = tmp13;
    tmp10 = tmp13;
  }
  return tmp17;
}) : (function MediaPostGridThumbnailIOS(arg0) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function MediaPostGridThumbnail(isPortrait) {
  let tmp8Result;
  const obj = react2;
  const cResult = obj.c(4);
  let tmp4 = true === isPortrait.isPortrait;
  if (tmp4) {
    tmp4 = false === isPortrait.shouldSpoiler;
  }
  let str = "cover";
  let source;
  if (tmp4) {
    source = isPortrait.source;
    str = "contain";
  }
  if (cResult[0] === source) {
    if (cResult[1] === isPortrait) {
      let tmp6;
      if (cResult[2] === str) {
        tmp6 = cResult[3];
      }
      return tmp6;
    }
  }
  const obj2 = { backgroundImagesource: source, resizeMode: str };
  const merged = Object.assign(isPortrait);
  const tmpResult = PlatformUtils;
  if (tmpResult.isAndroid()) {
    const obj3 = {};
    const merged1 = Object.assign(obj2);
    tmp8Result = tmp8(closure_8, obj3);
  } else {
    const obj4 = {};
    const merged2 = Object.assign(obj2);
    tmp8Result = tmp8(closure_9, obj4);
  }
  cResult[0] = source;
  cResult[1] = isPortrait;
  cResult[2] = str;
  cResult[3] = tmp8Result;
  tmp6 = tmp8Result;
}) : (function MediaPostGridThumbnail(isPortrait) {
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
    tmp4Result = tmp4(closure_8, obj3);
  } else {
    const obj4 = {};
    const merged2 = Object.assign(obj);
    tmp4Result = tmp4(closure_9, obj4);
  }
  return tmp4Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/media_channel/native/MediaPostGridThumbnail.tsx");

export default tmp5;
