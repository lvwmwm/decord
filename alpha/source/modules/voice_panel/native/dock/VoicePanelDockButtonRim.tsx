// Module ID: 19829
// Function ID: 19830
// Name: VoicePanelDockButtonRim
// Dependencies: [32, 19, 17, 11948, 21, 5839, 575, 8197, 1652, 5485, 14744, 2]

// Module 19829 (VoicePanelDockButtonRim)
import nativeDefault from "native" /* 575 */;
import timing_timing from "timing/timing" /* 5485 */;
import useToken from "useToken" /* 5839 */;
import inlineStyles from "inlineStyles" /* 8197 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11948 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;
let set;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
const DOCK_FADE_TIMING = VoicePanelDockConstants.DOCK_FADE_TIMING;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = react.memo(function ButtonRimGradient(arg0) {
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
  const obj3 = { children: React4(RadialGradient, obj4) };
  const tmp3 = inlineStylesDefault;
  const Defs = inlineStyles.Defs;
  obj4 = { id: "dockButtonRim", cx: `${100 * cx}%`, cy: `${100 * cy}%`, rx: "110.00000000000001%", ry: "70%", children: items };
  RadialGradient = inlineStyles.RadialGradient;
  items = [metroImportAll(inlineStyles.Stop, { offset: 0, stopColor: token, stopOpacity: strength }), , ];
  const obj5 = { offset: 0.45, stopColor: token, stopOpacity: 0.4 * strength };
  items[1] = metroImportAll(inlineStyles.Stop, obj5);
  items[2] = metroImportAll(inlineStyles.Stop, { offset: 1, stopColor: token, stopOpacity: 0 });
  items1 = [metroImportAll(Defs, obj3), ];
  const size1 = { x: 0.5, y: 0.5, width: width - 1, height: height - 1, rx: token1 - 0.5, ry: token1 - 0.5, fill: "none", stroke: "url(#dockButtonRim)", strokeWidth: 1 };
  items1[1] = metroImportAll(inlineStyles.Rect, size1);
  return React4(tmp3, size);
});
let closure_11 = { code: "(function VoicePanelDockButtonRimTsx1(){let[voicePanelDockRimOpacity,pressOpacity]=this.__closure;return{opacity:voicePanelDockRimOpacity.get()*0.5*pressOpacity.get()};})" };
const memoResult = react.memo(function VoicePanelDockButtonRim(measureGlowOffset) {
  let VoicePanelDockRimLevel;
  let children;
  let closure_3;
  let first;
  let items8;
  let items9;
  let obj4;
  let style;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp20;
  let tmp21;
  let tmp22;
  measureGlowOffset = measureGlowOffset.measureGlowOffset;
  let flag = measureGlowOffset.hideWhilePressed;
  if (flag === undefined) {
    flag = false;
  }
  first = undefined;
  _slicedToArray = undefined;
  let callback;
  ({ style, children } = measureGlowOffset);
  const ref = callback.useRef(null);
  [first, _slicedToArray] = callback.useState(null);
  const items = [measureGlowOffset];
  callback = callback.useCallback(() => {
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
  const callback1 = callback.useCallback(() => callback(), items1);
  const effect = callback.useEffect(callback, items2);
  const items3 = [first];
  const memo = callback.useMemo(() => {
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
  let obj = measureGlowOffset(first[8]);
  const sharedValue = obj.useSharedValue(1);
  const items4 = [sharedValue];
  const items5 = [sharedValue];
  const callback2 = callback.useCallback(() => {
    set = sharedValue.set;
    const obj = timing_timing;
    const result = set(obj.withTiming(0, DOCK_FADE_TIMING));
  }, items4);
  const callback3 = callback.useCallback(() => {
    set = sharedValue.set;
    const obj = timing_timing;
    const result = set(obj.withTiming(1, DOCK_FADE_TIMING));
  }, items5);
  const items6 = [closure_11, , ];
  const useAnimatedStyle = measureGlowOffset(first[8]).useAnimatedStyle;
  measureGlowOffset(first[8]);
  items6[1] = measureGlowOffset(first[10]).voicePanelDockRimOpacity;
  items6[2] = sharedValue;
  let c0;
  let c1;
  [tmp14, tmp15, tmp16] = items6;
  const tmp8 = measureGlowOffset;
  class VoicePanelDockButtonRimTsx1 {
    constructor() {
      let result;
      const obj = { opacity: result * _undefined2.get() };
      result = 0.5 * _undefined.get();
      return obj;
    }
  }
  const items7 = [tmp15, tmp16];
  VoicePanelDockButtonRimTsx1.__closure = items7;
  VoicePanelDockButtonRimTsx1.__workletHash = 6494940764025;
  VoicePanelDockButtonRimTsx1.__initData = tmp14;
  const obj2 = { ref, style, onLayout: callback1, onTouchStart: tmp20, onTouchEnd: tmp21, onTouchCancel: tmp22, children: items8 };
  tmp20 = undefined;
  const animatedStyle = useAnimatedStyle(VoicePanelDockButtonRimTsx1);
  const tmp18 = closure_9;
  const tmp19 = closure_6;
  if (flag) {
    tmp20 = callback2;
  }
  tmp21 = undefined;
  if (flag) {
    tmp21 = callback3;
  }
  tmp22 = undefined;
  if (flag) {
    tmp22 = callback3;
  }
  items8 = [children, ];
  let tmp23 = null != first && null != memo;
  if (tmp23) {
    const obj3 = { style: items9, pointerEvents: "none", children: closure_8(VoicePanelDockRimLevel, obj4) };
    items9 = [sharedValue.absoluteFill, animatedStyle];
    const View = ref(tmp9[8]).View;
    obj4 = { style: sharedValue.absoluteFill, children: closure_8(closure_10, size) };
    size = { width: null, height: null, cx: null, cy: null, strength: null };
    ({ width: obj5.width, height: obj5.height } = first);
    ({ cx: obj5.cx, cy: obj5.cy, strength: obj5.strength } = memo);
    VoicePanelDockRimLevel = tmp8(tmp9[10]).VoicePanelDockRimLevel;
    tmp23 = closure_8(View, obj3);
  }
  items8[1] = tmp23;
  return tmp18(tmp19, obj2);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockButtonRim.tsx");

export default memoResult;
