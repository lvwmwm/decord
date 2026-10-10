// Module ID: 10961
// Function ID: 10962
// Name: EmbeddedActivityBackgroundImageWithOverlay
// Dependencies: [32, 19, 17, 21, 5092, 587, 558, 576, 10962, 6156, 2]

// Module 10961 (EmbeddedActivityBackgroundImageWithOverlay)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 10962 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp8;
const FastImageDefault = tmp8(6156);
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { overlay: obj2 };
obj2 = { flex: 1, opacity: 0.6, backgroundColor: nativeDefault.colors.BLACK };
let closure_9 = createStyles.createStyles(obj);
const names = ["embedded_background"];
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmbeddedActivityBackgroundImageWithOverlay(arg0) {
  let application;
  let borderRadius;
  let closure_129_0;
  let dimensionsStyle;
  let height;
  let items;
  let items1;
  let items2;
  let resizeMode;
  let tmp10;
  let tmp11;
  let tmp5;
  let tmp6;
  let width;
  const obj = react2;
  const cResult = obj.c(16);
  ({ application, dimensionsStyle, borderRadius, resizeMode } = arg0);
  let str = "contain";
  if (undefined !== resizeMode) {
    str = resizeMode;
  }
  const tmp3 = closure_9();
  [tmp5, closure_129_0] = react.useState(false);
  let str2;
  _slicedToArray(react.useState(false), 2);
  if (application != null) {
    str2 = application.id;
  }
  if (str2 == null) {
    str2 = "";
  }
  if (cResult[0] !== str2) {
    const obj2 = { applicationId: str2, names, size: 1024 };
    cResult[0] = str2;
    cResult[1] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  const url = useEmbeddedActivityBackgroundDefault(tmp6).url;
  if (cResult[2] !== url) {
    const obj3 = { uri: url };
    cResult[2] = url;
    cResult[3] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== dimensionsStyle) {
    let flattenResult = metroRequire.flatten(dimensionsStyle);
    if (flattenResult == null) {
      flattenResult = {};
    }
    cResult[4] = dimensionsStyle;
    cResult[5] = flattenResult;
    tmp11 = flattenResult;
  } else {
    tmp11 = cResult[5];
  }
  ({ width, height } = tmp11);
  if (cResult[6] === tmp10) {
    if (cResult[7] === url) {
      if (cResult[8] === borderRadius) {
        if (cResult[9] === dimensionsStyle) {
          if (cResult[10] === height) {
            if (cResult[11] === tmp5) {
              if (cResult[12] === str) {
                if (cResult[13] === tmp3) {
                  let tmp13;
                  if (cResult[14] === width) {
                    tmp13 = cResult[15];
                  }
                  return tmp13;
                }
              }
            }
          }
        }
      }
    }
  }
  let tmp18Result = null;
  if (!tmp5) {
    tmp18Result = null;
    if (null != url) {
      tmp18Result = null;
      if ("" !== url) {
        let absoluteFillObject = dimensionsStyle;
        const tmp18 = metroImportAll;
        if (dimensionsStyle == null) {
          absoluteFillObject = metroRequire.absoluteFillObject;
        }
        const obj5 = {
          resizeMode: str,
          source: tmp10,
          style: items,
          onError() {
                  return closure_1_0(true);
                }
        };
        items = [metroRequire.absoluteFill, ];
        size = { width, height, borderRadius };
        const obj4 = { style: absoluteFillObject, children: items1 };
        items[1] = size;
        items1 = [metroImportDefault(FastImageDefault, obj5), ];
        const obj6 = { style: items2 };
        items2 = [tmp3.overlay, ];
        const obj7 = { borderRadius };
        items2[1] = obj7;
        items1[1] = metroImportDefault(hasOwnProperty, obj6);
        tmp18Result = tmp18(tmp19, obj4);
      }
    }
  }
  cResult[6] = tmp10;
  cResult[7] = url;
  cResult[8] = borderRadius;
  cResult[9] = dimensionsStyle;
  cResult[10] = height;
  cResult[11] = tmp5;
  cResult[12] = str;
  cResult[13] = tmp3;
  cResult[14] = width;
  cResult[15] = tmp18Result;
  tmp13 = tmp18Result;
}) : (function EmbeddedActivityBackgroundImageWithOverlay(arg0) {
  let application;
  let borderRadius;
  let c0;
  let dimensionsStyle;
  let items;
  let items1;
  let items2;
  let resizeMode;
  let tmp3;
  ({ application, dimensionsStyle, borderRadius, resizeMode } = arg0);
  if (resizeMode === undefined) {
    resizeMode = "contain";
  }
  c0 = undefined;
  const tmp = closure_9();
  [tmp3, c0] = react.useState(false);
  let str;
  _slicedToArray(react.useState(false), 2);
  const tmp6 = useEmbeddedActivityBackgroundDefault;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  const obj = { applicationId: str, names, size: 1024 };
  const url = tmp6(obj).url;
  let flattenResult = metroRequire.flatten(dimensionsStyle);
  const tmp7 = url;
  if (flattenResult == null) {
    flattenResult = {};
  }
  let tmp13Result = null;
  if (!tmp3) {
    tmp13Result = null;
    if (null != url) {
      tmp13Result = null;
      if ("" !== url) {
        let absoluteFillObject = dimensionsStyle;
        const tmp13 = metroImportAll;
        if (dimensionsStyle == null) {
          absoluteFillObject = tmp8.absoluteFillObject;
        }
        const obj3 = {
          resizeMode,
          source: { uri: tmp7 },
          style: items,
          onError() {
                  return _undefined(true);
                }
        };
        items = [metroRequire.absoluteFill, ];
        size = { width: tmp9, height: tmp10, borderRadius };
        const obj2 = { style: absoluteFillObject, children: items1 };
        items[1] = size;
        items1 = [metroImportDefault(FastImageDefault, obj3), ];
        const obj4 = { style: items2 };
        items2 = [tmp.overlay, ];
        const obj5 = { borderRadius };
        items2[1] = obj5;
        items1[1] = metroImportDefault(hasOwnProperty, obj4);
        tmp13Result = tmp13(tmp14, obj2);
      }
    }
  }
  return tmp13Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx");

export default tmp4;
