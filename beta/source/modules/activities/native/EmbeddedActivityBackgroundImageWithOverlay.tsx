// Module ID: 8932
// Function ID: 8933
// Name: EmbeddedActivityBackgroundImageWithOverlay
// Dependencies: [32, 19, 17, 21, 4836, 576, 8933, 2]
// Exports: default

// Module 8932 (EmbeddedActivityBackgroundImageWithOverlay)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 8933 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ ImageBackground: closure_4, View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const jsx = Fragment.jsx;
let obj = { overlay: obj2 };
obj2 = { flex: 1, opacity: 0.6, backgroundColor: nativeDefault.colors.BLACK };
let closure_8 = createStyles.createStyles(obj);
const names = ["embedded_background"];
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx");

export default function EmbeddedActivityBackgroundImageWithOverlay(arg0) {
  let application;
  let borderRadius;
  let closure_0;
  let dimensionsStyle;
  let first;
  let obj3;
  let obj4;
  let resizeMode;
  ({ application, dimensionsStyle, borderRadius, resizeMode } = arg0);
  if (resizeMode === undefined) {
    resizeMode = "contain";
  }
  closure_0 = undefined;
  const tmp = closure_8();
  [first, closure_0] = react.useState(false);
  let str;
  const tmp4 = useEmbeddedActivityBackgroundDefault;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  const obj = { applicationId: str, names, size: 1024 };
  const url = tmp4(obj).url;
  let tmp8Result = null;
  if (!first) {
    tmp8Result = null;
    if (null != url) {
      tmp8Result = null;
      if ("" !== url) {
        const obj2 = {
          resizeMode,
          source: obj3,
          style: dimensionsStyle,
          imageStyle: obj4,
          onError() {
                  return closure_0(true);
                },
          children: null
        };
        obj3 = { uri: url };
        const tmp9 = React3;
        if (dimensionsStyle == null) {
          dimensionsStyle = metroRequire.absoluteFillObject;
        }
        const items = [tmp.overlay, ];
        obj4 = { borderRadius };
        const obj6 = { borderRadius };
        items[1] = obj6;
        tmp8Result = tmp8(tmp9, obj2);
      }
    }
  }
  return tmp8Result;
};
