// Module ID: 13899
// Function ID: 13900
// Name: ConjureNumberBadge
// Dependencies: [19, 17, 21, 575, 5243, 5830, 1187, 2]
// Exports: default

// Module 13899 (ConjureNumberBadge)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let items = [nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_2, nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_3];
const start = { x: 0, y: 0 };
const end = { x: 1, y: 1 };
let createStyles = createStyles_mod;
let obj = { root: obj2, badge: { backgroundColor: "transparent" }, number: obj3 };
obj2 = { borderRadius: nativeDefault.space.PX_8, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { textShadowColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_40, textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 2 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNumberBadge.tsx");

export default function ConjureNumberBadge(value) {
  value = value.value;
  const tmp = closure_10();
  let tmp2 = null;
  if (value > 0) {
    const obj = { style: tmp.root, children: items };
    const obj2 = { colors: items, start, end, style: absoluteFill.absoluteFill };
    items = [hasOwnProperty(LinearGradientDefault, obj2), ];
    const obj5 = { value, style: null, textStyle: null };
    ({ badge: obj3.style, number: obj3.textStyle } = tmp);
    items[1] = hasOwnProperty(native.Badge, obj5);
    tmp2 = metroRequire(React3, obj);
  }
  return tmp2;
};
