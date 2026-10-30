// Module ID: 11802
// Function ID: 11803
// Name: EmbeddedActivityBackgroundImageWithOverlay
// Dependencies: [32, 19, 17, 21, 5009, 575, 11803, 5712, 2]
// Exports: default

// Module 11802 (EmbeddedActivityBackgroundImageWithOverlay)
import nativeDefault from "native" /* 575 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 11803 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp4;
const FastImageDefault = tmp4(5712);
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { overlay: obj2 };
obj2 = { flex: 1, opacity: 0.6, backgroundColor: nativeDefault.colors.BLACK };
let closure_8 = createStyles.createStyles(obj);
const names = ["embedded_background"];
let size = size_mod;
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx");

export default function EmbeddedActivityBackgroundImageWithOverlay(arg0) {
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
  const tmp = closure_8();
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
  let flattenResult = hasOwnProperty.flatten(dimensionsStyle);
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
        const tmp13 = metroImportDefault;
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
        items = [hasOwnProperty.absoluteFill, ];
        size = { width: tmp9, height: tmp10, borderRadius };
        const obj2 = { style: absoluteFillObject, children: items1 };
        items[1] = size;
        items1 = [metroRequire(FastImageDefault, obj3), ];
        const obj4 = { style: items2 };
        items2 = [tmp.overlay, ];
        const obj5 = { borderRadius };
        items2[1] = obj5;
        items1[1] = metroRequire(React3, obj4);
        tmp13Result = tmp13(tmp14, obj2);
      }
    }
  }
  return tmp13Result;
};
