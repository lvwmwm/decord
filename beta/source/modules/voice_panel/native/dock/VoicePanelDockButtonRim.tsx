// Module ID: 19647
// Function ID: 19648
// Name: VoicePanelDockButtonRim
// Dependencies: [32, 19, 17, 21, 5756, 575, 8134, 1652, 14267, 2]

// Module 19647 (VoicePanelDockButtonRim)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5756 */;
import inlineStyles from "inlineStyles" /* 8134 */;
import VoicePanelDockRimLight from "VoicePanelDockRimLight" /* 14267 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
const inlineStylesDefault = inlineStyles;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = react.memo(function ButtonRimGradient(arg0) {
  let RadialGradient;
  let cx;
  let cy;
  let height;
  let items;
  let items1;
  let obj4;
  let strength;
  let width;
  ({ width, height, strength } = arg0);
  ({ cx, cy } = arg0);
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.ICON_VOICE_SPEAKING);
  const obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.modules.button.BORDER_RADIUS);
  size = { width, height, children: items1 };
  const obj3 = { children: metroImportAll(RadialGradient, obj4) };
  const tmp3 = inlineStylesDefault;
  const Defs = inlineStyles.Defs;
  obj4 = { id: "dockButtonRim", cx: `${100 * cx}%`, cy: `${100 * cy}%`, rx: "110.00000000000001%", ry: "70%", children: items };
  RadialGradient = inlineStyles.RadialGradient;
  items = [metroImportDefault(inlineStyles.Stop, { offset: 0, stopColor: token, stopOpacity: strength }), , ];
  const obj5 = { offset: 0.45, stopColor: token, stopOpacity: 0.4 * strength };
  items[1] = metroImportDefault(inlineStyles.Stop, obj5);
  items[2] = metroImportDefault(inlineStyles.Stop, { offset: 1, stopColor: token, stopOpacity: 0 });
  items1 = [metroImportDefault(Defs, obj3), ];
  const size1 = { x: 0.5, y: 0.5, width: width - 1, height: height - 1, rx: token1 - 0.5, ry: token1 - 0.5, fill: "none", stroke: "url(#dockButtonRim)", strokeWidth: 1 };
  items1[1] = metroImportDefault(inlineStyles.Rect, size1);
  return metroImportAll(tmp3, size);
});
let closure_10 = { code: "(function VoicePanelDockButtonRimTsx1(){let[voicePanelDockRimOpacity]=this.__closure;return{opacity:voicePanelDockRimOpacity.get()*0.5};})" };
const memoResult = react.memo(function VoicePanelDockButtonRim(measureGlowOffset) {
  let VoicePanelDockRimLevel;
  let children;
  let closure_3;
  let first;
  let items6;
  let items7;
  let obj3;
  let style;
  let tmp11;
  let tmp12;
  measureGlowOffset = measureGlowOffset.measureGlowOffset;
  first = undefined;
  closure_3 = undefined;
  ({ style, children } = measureGlowOffset);
  const ref = react.useRef(null);
  [first, closure_3] = react.useState(null);
  const items = [measureGlowOffset];
  const callback = react.useCallback(() => {
    const current = ref.current;
    let tmp = null != current;
    if (tmp) {
      let tmp2 = measureGlowOffset;
      tmp = null != measureGlowOffset;
    }
    if (tmp) {
      let tmp3 = measureGlowOffset;
      measureGlowOffset(current, (width) => {
        let closure_0 = width;
        const tmp = width.width > 0 && width.height > 0;
        if (tmp) {
          const tmp2 = closure_1_3;
          let tmp3 = closure_1_3((width) => {
            width = undefined;
            if (width != null) {
              width = width.width;
            }
            let tmp3 = styles;
            if (width === styles.width) {
              tmp3 = tmp2;
              if (width.height === styles.height) {
                tmp3 = tmp2;
                if (width.dx === styles.dx) {
                  tmp3 = tmp2;
                  if (width.dy === styles.dy) {
                    tmp3 = width;
                  }
                }
              }
            }
            return tmp3;
          });
        }
      });
    }
  }, items);
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = react.useCallback(() => callback(), items1);
  const effect = react.useEffect(callback, items2);
  const items3 = [first];
  const memo = react.useMemo(() => {
    if (null == first) {
      return null;
    } else {
      const result = 0.35 * tmp.dx;
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(Math.hypot(result, tmp.dy), 1);
      return { cx: 0.5 + result / bound * 0.5 * 1.15, cy: 0.5 + first.dy / bound * 0.5 * 1.15, strength: 1 - 0.8 * first.offCenter * first.offCenter };
    }
  }, items3);
  const items4 = [closure_10, ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items4[1] = VoicePanelDockRimLight.voicePanelDockRimOpacity;
  let c0;
  [tmp11, tmp12] = items4;
  class VoicePanelDockButtonRimTsx1 {
    constructor() {
      const obj = { opacity: 0.5 * _undefined.get() };
      return obj;
    }
  }
  const items5 = [tmp12];
  VoicePanelDockButtonRimTsx1.__closure = items5;
  VoicePanelDockButtonRimTsx1.__workletHash = 5567599437478;
  VoicePanelDockButtonRimTsx1.__initData = tmp11;
  let obj = { ref, style, onLayout: callback1, children: items6 };
  items6 = [children, ];
  let tmp16 = null != first;
  const animatedStyle = useAnimatedStyle(VoicePanelDockButtonRimTsx1);
  const tmp14 = metroImportAll;
  const tmp15 = metroRequire;
  if (tmp16) {
    tmp16 = null != memo;
  }
  if (tmp16) {
    const obj2 = { style: items7, pointerEvents: "none", children: metroImportDefault(VoicePanelDockRimLevel, obj3) };
    items7 = [hasOwnProperty.absoluteFill, animatedStyle];
    const View = _modDef1652.View;
    obj3 = { style: hasOwnProperty.absoluteFill, children: metroImportDefault(closure_9, size) };
    size = { width: null, height: null, cx: null, cy: null, strength: null };
    ({ width: obj4.width, height: obj4.height } = first);
    ({ cx: obj4.cx, cy: obj4.cy, strength: obj4.strength } = memo);
    VoicePanelDockRimLevel = VoicePanelDockRimLight.VoicePanelDockRimLevel;
    tmp16 = metroImportDefault(View, obj2);
  }
  items6[1] = tmp16;
  return tmp14(tmp15, obj);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockButtonRim.tsx");

export default memoResult;
