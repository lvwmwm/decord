// Module ID: 14754
// Function ID: 14755
// Name: MediaModalLoadingOverlay
// Dependencies: [19, 17, 21, 5009, 575, 5619, 1114, 2]

// Module 14754 (MediaModalLoadingOverlay)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ View: c3, ActivityIndicator: closure_4, StyleSheet } = react_native);
let Fragment = Fragment_mod;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { loader: obj2, loaderIndicator: obj3, loaderText: { textAlign: "center" } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.7)" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginTop: nativeDefault.space.PX_12 };
let closure_7 = createStyles(obj);
const memoResult = react.memo(function MediaModalLoadingOverlay(progress) {
  let intl;
  let items;
  let items1;
  let items2;
  let status;
  let style;
  let tmp12Result1;
  progress = progress.progress;
  ({ style, status } = progress);
  const tmp = closure_7();
  const obj = { style: items, children: tmp12Result1 };
  items = [tmp.loader, style];
  const tmp3 = _false;
  if ("error" === status) {
    const obj2 = { style: tmp.loaderText, variant: "heading-md/semibold", color: "text-overlay-light", children: intl.string(intl2.t["+ITMYX"]) };
    const Text2 = Text_Text.Text;
    intl = intl2.intl;
    tmp12Result1 = tmp2(Text2, obj2);
  } else {
    let tmp12Result = null;
    const Fragment = react.Fragment;
    if (null != progress) {
      const _Math = Math;
      const obj3 = { style: tmp.loaderText, variant: "heading-md/semibold", color: "text-overlay-light", children: items1 };
      const Text = Text_Text.Text;
      items1 = [Math.round(progress), "%"];
      tmp12Result = tmp12(Text, obj3);
    }
    const obj4 = { children: items2 };
    items2 = [tmp12Result, ];
    const obj5 = { color: "white", style: tmp.loaderIndicator, size: "large" };
    items2[1] = hasOwnProperty(React3, obj5);
    tmp12Result1 = tmp12(Fragment, obj4);
  }
  return hasOwnProperty(tmp3, obj);
});
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalLoadingOverlay.tsx");

export default memoResult;
