// Module ID: 8102
// Function ID: 8103
// Name: ChangelogInlineImage
// Dependencies: [32, 19, 17, 21, 5090, 587, 558, 576, 1496, 2040, 8100, 6164, 1126, 8103, 2]

// Module 8102 (ChangelogInlineImage)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import UserSettings from "UserSettings" /* 2040 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
let tmp;
let tmp2;
let tmp5;
const FastImageDefault = tmp5(6164);
const ChangelogImageUtils = tmp(8100);
const GifTagDefault = tmp2(8103);
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 0.5625;
let createStyles = createStyles_mod;
let obj = { container: obj2, image: obj3, gifTag: rect };
obj2 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.xs };
rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChangelogInlineImage(arg0) {
  let alt;
  let closure_1;
  let closure_129_2;
  let closure_129_3;
  let height;
  let target;
  let title;
  let tmp10;
  let tmp12;
  let width;
  let tmp = require;
  let tmp2 = dependencyMap;
  const obj = react2;
  const cResult = obj.c(41);
  ({ target, alt, title } = arg0);
  let tmp4 = closure_10();
  ({ width, height } = useWindowDimensionsDefault());
  const tmp6 = useWindowDimensionsDefault();
  const GifAutoPlay = UserSettings.GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  [size, closure_1] = react.useState(null);
  [tmp10, closure_129_2] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp12, closure_129_3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (!tmp10) {
    const tmpResult = ChangelogImageUtils;
    if (tmpResult.isChangelogImageUrl(target)) {
      const diff = width - 36;
      const result = 0.5 * height;
      if (cResult[0] === size) {
        if (cResult[1] === diff) {
          let tmp15;
          if (cResult[2] === title) {
            tmp15 = cResult[3];
          }
          if (cResult[4] === result) {
            if (cResult[5] === diff) {
              let tmp19;
              if (cResult[6] === tmp15) {
                tmp19 = cResult[7];
              }
              if (cResult[8] === setting) {
                let tmp21;
                if (cResult[9] === target) {
                  tmp21 = cResult[10];
                }
                let height1;
                const tmp24 = null != tmp21 && !tmp12;
                const tmp25 = cResult[11];
                if (size != null) {
                  height1 = size.height;
                }
                if (tmp25 === height1) {
                  let tmp29;
                  let tmp32;
                  let width1;
                  const tmp27 = cResult[12];
                  if (size != null) {
                    width1 = size.width;
                  }
                  if (tmp27 === width1) {
                    tmp29 = cResult[13];
                  }
                  if (tmp24) {
                    target = tmp21;
                  }
                  if (cResult[14] !== target) {
                    const obj2 = { uri: target };
                    cResult[14] = target;
                    cResult[15] = obj2;
                    tmp32 = obj2;
                  } else {
                    tmp32 = cResult[15];
                  }
                  if (cResult[16] === tmp19) {
                    let tmp33;
                    let tmp37;
                    if (cResult[17] === tmp4.image) {
                      tmp33 = cResult[18];
                    }
                    let tmp35;
                    if (null == tmp21) {
                      tmp35 = alt;
                    }
                    const _Symbol = Symbol;
                    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                      class Y {
                        constructor() {
                          return closure_1_2(true);
                        }
                      }
                      cResult[19] = Y;
                      tmp37 = Y;
                    } else {
                      class Y {
                        constructor() {
                          return closure_1_2(true);
                        }
                      }
                    }
                    if (cResult[20] === tmp29) {
                      class Y {
                        constructor() {
                          return closure_1_2(true);
                        }
                      }
                    }
                    const obj3 = { source: tmp32, style: tmp33, resizeMode: "contain", accessible: !tmp23 && "" !== alt, accessibilityLabel: tmp35, onLoad: tmp29, onError: tmp37 };
                    cResult[20] = tmp29;
                    cResult[21] = tmp32;
                    cResult[22] = tmp33;
                    cResult[23] = !tmp23 && "" !== alt;
                    cResult[24] = tmp35;
                    cResult[25] = metroImportDefault(FastImageDefault, obj3);
                    const tmp40 = metroImportDefault(FastImageDefault, obj3);
                  }
                  const items = [tmp4.image, tmp19];
                  cResult[16] = tmp19;
                  cResult[17] = tmp4.image;
                  cResult[18] = items;
                  tmp33 = items;
                }
                if (size != null) {
                  class Y {
                    constructor() {
                      return closure_1_2(true);
                    }
                  }
                }
                cResult[11] = undefined;
                if (size != null) {
                  class Y {
                    constructor() {
                      return closure_1_2(true);
                    }
                  }
                }
                function handleLoad(nativeEvent) {
                  let height;
                  let width;
                  nativeEvent = nativeEvent.nativeEvent;
                  let source = nativeEvent;
                  if ("source" in nativeEvent) {
                    source = nativeEvent.source;
                  }
                  ({ width, height } = source);
                  let tmp = null;
                  if (width > 0) {
                    tmp = null;
                    if (height > 0) {
                      const size1 = { width, height };
                      tmp = size1;
                    }
                  }
                  let tmp2 = null == tmp;
                  if (!tmp2) {
                    let width1;
                    const width2 = tmp.width;
                    if (size != null) {
                      width1 = size.width;
                    }
                    let tmp4 = width2 === width1;
                    if (tmp4) {
                      let height1;
                      const height2 = tmp.height;
                      if (size != null) {
                        height1 = size.height;
                      }
                      tmp4 = height2 === height1;
                    }
                    tmp2 = tmp4;
                  }
                  if (!tmp2) {
                    closure_1(tmp);
                  }
                }
                cResult[12] = undefined;
                cResult[13] = handleLoad;
                tmp29 = handleLoad;
              }
              let changelogImageStillUrl = null;
              if (!setting) {
                class Y {
                  constructor() {
                    return closure_1_2(true);
                  }
                }
                changelogImageStillUrl = null;
                if (obj5.isAnimatedChangelogImage(target)) {
                  class Y {
                    constructor() {
                      return closure_1_2(true);
                    }
                  }
                  changelogImageStillUrl = obj6.getChangelogImageStillUrl(target);
                }
              }
              cResult[8] = setting;
              cResult[9] = target;
              cResult[10] = changelogImageStillUrl;
              tmp21 = changelogImageStillUrl;
            }
          }
          const tmpResult3 = ChangelogImageUtils;
          const fitChangelogImageResult = tmpResult3.fitChangelogImage(tmp15, diff, result);
          cResult[4] = result;
          cResult[5] = diff;
          cResult[6] = tmp15;
          cResult[7] = fitChangelogImageResult;
          tmp19 = fitChangelogImageResult;
        }
      }
      const tmpResult4 = ChangelogImageUtils;
      let result1 = tmpResult4.parseChangelogImageSize(title);
      if (result1 == null) {
        class Y {
          constructor() {
            return closure_1_2(true);
          }
        }
      }
      if (result1 == null) {
        class Y {
          constructor() {
            return closure_1_2(true);
          }
        }
        tmp17[0] = diff;
        tmp17[1] = diff * c9;
        result1 = tmp17;
      }
      cResult[0] = size;
      cResult[1] = diff;
      cResult[2] = title;
      cResult[3] = result1;
      tmp15 = result1;
    }
  }
  return null;
}) : (function ChangelogInlineImage(title) {
  let alt;
  let c2;
  let c3;
  let closure_1;
  let first;
  let height;
  let items;
  let items1;
  let obj2;
  let string;
  let t;
  let target;
  let tmp10;
  let tmp12;
  let tmp23;
  let tmp24;
  let width;
  ({ target, alt } = title);
  first = undefined;
  closure_1 = undefined;
  c2 = undefined;
  c3 = undefined;
  title = title.title;
  let tmp = closure_10();
  let tmp2 = importDefault;
  let tmp4 = useWindowDimensionsDefault();
  ({ width, height } = tmp4);
  const GifAutoPlay = UserSettings.GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  [first, closure_1] = react.useState(null);
  [tmp10, c2] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp12, c3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (!tmp10) {
    const tmp5Result = ChangelogImageUtils;
    if (tmp5Result.isChangelogImageUrl(target)) {
      let tmp20Result3;
      const diff = width - 36;
      const tmp5Result5 = ChangelogImageUtils;
      let result = tmp5Result5.parseChangelogImageSize(title);
      if (result == null) {
        result = first;
      }
      if (result == null) {
        size = { width: diff, height: diff * c9 };
        result = size;
      }
      let changelogImageStillUrl = null;
      const tmp5Result6 = ChangelogImageUtils;
      const fitChangelogImageResult = tmp5Result6.fitChangelogImage(result, diff, 0.5 * height);
      if (!setting) {
        changelogImageStillUrl = null;
        const tmp5Result7 = ChangelogImageUtils;
        if (tmp5Result7.isAnimatedChangelogImage(target)) {
          const tmp5Result8 = ChangelogImageUtils;
          changelogImageStillUrl = tmp5Result8.getChangelogImageStillUrl(target);
        }
      }
      let tmp22 = target;
      const tmp2Result = FastImageDefault;
      if (null != changelogImageStillUrl && !tmp12) {
        tmp22 = changelogImageStillUrl;
      }
      const obj = {
        source: obj2,
        style: items,
        resizeMode: "contain",
        accessible: tmp23,
        accessibilityLabel: tmp24,
        onLoad: function handleLoad(nativeEvent) {
              let height;
              let width;
              nativeEvent = nativeEvent.nativeEvent;
              let source = nativeEvent;
              if ("source" in nativeEvent) {
                source = nativeEvent.source;
              }
              ({ width, height } = source);
              let tmp = null;
              if (width > 0) {
                tmp = null;
                if (height > 0) {
                  const size1 = { width, height };
                  tmp = size1;
                }
              }
              let tmp2 = null == tmp;
              if (!tmp2) {
                size = first;
                let width1;
                const width2 = tmp.width;
                if (first != null) {
                  width1 = size.width;
                }
                let tmp4 = width2 === width1;
                if (tmp4) {
                  let height1;
                  const height2 = tmp.height;
                  if (size != null) {
                    height1 = size.height;
                  }
                  tmp4 = height2 === height1;
                }
                tmp2 = tmp4;
              }
              if (!tmp2) {
                closure_1(tmp);
              }
            },
        onError() {
              return _undefined(true);
            }
      };
      items = [tmp.image, fitChangelogImageResult];
      tmp24 = undefined;
      obj2 = { uri: tmp22 };
      tmp23 = !tmp18 && "" !== alt;
      if (null == changelogImageStillUrl) {
        tmp24 = alt;
      }
      const tmp20Result = metroImportDefault(tmp2Result, obj);
      if (null != changelogImageStillUrl) {
        const obj3 = {
          style: tmp.container,
          accessibilityRole: "button",
          accessibilityLabel: alt,
          accessibilityHint: string(tmp12 ? t.ZcgDJX : t.RscU7I),
          onPress() {
                  return _undefined2((arg0) => !arg0);
                },
          children: items1
        };
        const intl = tmp5(1126).intl;
        string = intl.string;
        t = tmp5(1126).t;
        items1 = [tmp20Result, ];
        let tmp20Result2 = null;
        const tmp28 = metroImportAll;
        const tmp29 = hasOwnProperty;
        if (null != changelogImageStillUrl && !tmp12) {
          const obj4 = { style: tmp.gifTag };
          tmp20Result2 = tmp20(GifTagDefault, obj4);
        }
        items1[1] = tmp20Result2;
        tmp20Result3 = tmp28(tmp29, obj3);
      } else {
        const obj5 = { style: tmp.container, children: tmp20Result };
        tmp20Result3 = tmp20(metroRequire, obj5);
      }
      return tmp20Result3;
    }
  }
  return null;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/changelog/native/ChangelogInlineImage.tsx");

export default tmp5;
