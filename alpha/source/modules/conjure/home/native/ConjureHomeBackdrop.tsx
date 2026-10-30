// Module ID: 12941
// Function ID: 12942
// Name: ConjureHomeBackdrop
// Dependencies: [19, 17, 21, 5248, 5591, 575, 5017, 5582, 8023, 2]

// Module 12941 (ConjureHomeBackdrop)
import nativeDefault from "native" /* 575 */;
import design_shared from "design/shared" /* 5017 */;
import useTheme from "useTheme" /* 5248 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import useToken from "useToken" /* 5591 */;
import inlineStyles from "inlineStyles" /* 8023 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const colors = ["rgb(42, 45, 83)", "rgb(83, 39, 75)"];
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const memoResult = react.memo(function ConjureHomeBackdrop() {
  let RadialGradient;
  let items;
  let items1;
  let items2;
  let obj7;
  const obj = useTheme;
  const theme = obj.useTheme();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  let tmp6 = null;
  const obj3 = design_shared;
  if (obj3.isThemeDark(theme)) {
    const obj4 = { style: _false.absoluteFill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items };
    const obj5 = { style: _false.absoluteFill, colors, start, end };
    items = [hasOwnProperty(LinearGradientDefault, obj5), ];
    size = { style: _false.absoluteFill, width: "100%", height: "100%", children: items2 };
    const obj6 = { children: metroRequire(RadialGradient, obj7) };
    const tmp4Result = inlineStylesDefault;
    const Defs = tmp(8023).Defs;
    obj7 = { id: "conjureHomeBackdropFalloff", cx: "0.5", cy: "1", rx: "1", ry: "1.04", fx: "0.5", fy: "1", children: items1 };
    RadialGradient = tmp(8023).RadialGradient;
    const obj8 = { offset: "0.39", stopColor: token, stopOpacity: 1 };
    items1 = [hasOwnProperty(inlineStyles.Stop, obj8), ];
    const obj9 = { offset: "1", stopColor: token, stopOpacity: 0 };
    items1[1] = hasOwnProperty(inlineStyles.Stop, obj9);
    items2 = [hasOwnProperty(Defs, obj6), hasOwnProperty(inlineStyles.Rect, { width: "100%", height: "100%", fill: "url(#conjureHomeBackdropFalloff)" })];
    items[1] = metroRequire(tmp4Result, size);
    tmp6 = metroRequire(React3, obj4);
  }
  return tmp6;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeBackdrop.tsx");

export default memoResult;
