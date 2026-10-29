// Module ID: 12792
// Function ID: 12793
// Name: ConjureHomeBackdrop
// Dependencies: [19, 17, 21, 558, 576, 5242, 5289, 587, 5013, 5295, 8017, 2]

// Module 12792 (ConjureHomeBackdrop)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import design_shared from "design/shared" /* 5013 */;
import useTheme from "useTheme" /* 5242 */;
import useToken from "useToken" /* 5289 */;
import LinearGradientDefault from "LinearGradient" /* 5295 */;
import inlineStyles from "inlineStyles" /* 8017 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHomeBackdrop() {
  let RadialGradient;
  let items;
  let items1;
  let items2;
  let obj7;
  const obj = react2;
  const cResult = obj.c(6);
  const obj2 = useTheme;
  const theme = obj2.useTheme();
  const obj3 = useToken;
  const token = obj3.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  let tmp7 = null;
  const obj4 = design_shared;
  if (obj4.isThemeDark(theme)) {
    let first;
    let tmp16;
    let tmp20;
    let tmp23;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { style: _false.absoluteFill, colors, start, end };
      const tmp15 = hasOwnProperty(LinearGradientDefault, obj5);
      cResult[0] = tmp15;
      first = tmp15;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== token) {
      const obj6 = { children: metroRequire(RadialGradient, obj7) };
      const Defs = tmp(8017).Defs;
      obj7 = { id: "conjureHomeBackdropFalloff", cx: "0.5", cy: "1", rx: "1", ry: "1.04", fx: "0.5", fy: "1", children: items };
      RadialGradient = tmp(8017).RadialGradient;
      const obj8 = { offset: "0.39", stopColor: token, stopOpacity: 1 };
      items = [hasOwnProperty(inlineStyles.Stop, obj8), ];
      const obj9 = { offset: "1", stopColor: token, stopOpacity: 0 };
      items[1] = hasOwnProperty(inlineStyles.Stop, obj9);
      const tmp19 = hasOwnProperty(Defs, obj6);
      cResult[1] = token;
      cResult[2] = tmp19;
      tmp16 = tmp19;
    } else {
      tmp16 = cResult[2];
    }
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp22 = hasOwnProperty(inlineStyles.Rect, { width: "100%", height: "100%", fill: "url(#conjureHomeBackdropFalloff)" });
      cResult[3] = tmp22;
      tmp20 = tmp22;
    } else {
      tmp20 = cResult[3];
    }
    if (cResult[4] !== tmp16) {
      const obj10 = { style: _false.absoluteFill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items1 };
      items1 = [first, ];
      size = { style: _false.absoluteFill, width: "100%", height: "100%", children: items2 };
      items2 = [tmp16, tmp20];
      items1[1] = metroRequire(inlineStylesDefault, size);
      const tmp27 = metroRequire(React3, obj10);
      cResult[4] = tmp16;
      cResult[5] = tmp27;
      tmp23 = tmp27;
    } else {
      tmp23 = cResult[5];
    }
    tmp7 = tmp23;
  }
  return tmp7;
}) : (function ConjureHomeBackdrop() {
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
    const Defs = tmp(8017).Defs;
    obj7 = { id: "conjureHomeBackdropFalloff", cx: "0.5", cy: "1", rx: "1", ry: "1.04", fx: "0.5", fy: "1", children: items1 };
    RadialGradient = tmp(8017).RadialGradient;
    const obj8 = { offset: "0.39", stopColor: token, stopOpacity: 1 };
    items1 = [hasOwnProperty(inlineStyles.Stop, obj8), ];
    const obj9 = { offset: "1", stopColor: token, stopOpacity: 0 };
    items1[1] = hasOwnProperty(inlineStyles.Stop, obj9);
    items2 = [hasOwnProperty(Defs, obj6), hasOwnProperty(inlineStyles.Rect, { width: "100%", height: "100%", fill: "url(#conjureHomeBackdropFalloff)" })];
    items[1] = metroRequire(tmp4Result, size);
    tmp6 = metroRequire(React3, obj4);
  }
  return tmp6;
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeBackdrop.tsx");

export default memoResult;
