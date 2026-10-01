// Module ID: 16395
// Function ID: 16396
// Name: VibegrationsConjureDither
// Dependencies: [19, 17, 21, 16396, 7909, 4566, 2]
// Exports: default

// Module 16395 (VibegrationsConjureDither)
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import _mod16396 from "module_16396" /* 16396 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let set, set2;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function BandPicture(width) {
  let arr;
  let band;
  let closure_4;
  let fill;
  let isoStop;
  let items1;
  let items2;
  let items3;
  let obj6;
  let state;
  ({ band, state } = width);
  width = width.width;
  const height = width.height;
  ({ fill: react, fillOpacity: closure_4 } = width);
  let tmp = state;
  const tmp3 = state(height[3]).LEVELS[band];
  let closure_5 = tmp3;
  const bound = Math.max(0.02, tmp3 - state(height[3]).FADE_HALF);
  let obj = state(height[3]);
  const bellReachResult = obj.bellReach(bound);
  const combined = "" + band + "-" + state;
  size = { width, height, style: fillOpacity.absoluteFill, children: items3 };
  const tmp8 = width(height[4]);
  const Defs = state(height[4]).Defs;
  const size1 = {
    id: "cells-" + combined,
    patternUnits: "userSpaceOnUse",
    width: state(height[3]).TILE,
    height: state(height[3]).TILE,
    children: arr.map((item) => {
      size = { x: item.x, y: item.y, width: _mod16396.CELL, height: _mod16396.CELL, rx: _mod16396.CORNER, fill: react, fillOpacity };
      const Rect = inlineStyles.Rect;
      return metroRequire(Rect, size, "" + item.x + "-" + item.y);
    })
  };
  const Pattern = state(height[4]).Pattern;
  arr = state(height[3]).TILES[band];
  items = [bound(Pattern, size1), , , ];
  let obj2 = { id: "bell-" + combined, children: items1 };
  let RadialGradient = state(height[4]).RadialGradient;
  let obj3 = { offset: isoStop(obj6.bellReach(tmp3 + state(height[3]).FADE_HALF), bellReachResult), stopColor: "#fff", stopOpacity: 1 };
  let Stop = state(height[4]).Stop;
  isoStop = state(height[3]).isoStop;
  state(height[3]);
  obj6 = state(height[3]);
  items1 = [bound(Stop, obj3), bound(state(height[4]).Stop, { offset: 1, stopColor: "#fff", stopOpacity: 0 })];
  items[1] = combined(RadialGradient, obj2);
  const BLOBS = state(height[3]).BLOBS;
  items[2] = BLOBS.map((peak, index) => {
    let blobReachResult;
    let isoStop;
    let obj4;
    let radius;
    const obj = { id: "blob-" + combined + "-" + index, children: items };
    const RadialGradient = inlineStyles.RadialGradient;
    const obj2 = { offset: isoStop(blobReachResult, obj4.blobReach(peak.peak, peak.radius, bound)), stopColor: "#fff", stopOpacity: 1 };
    const Stop = inlineStyles.Stop;
    isoStop = _mod16396.isoStop;
    _mod16396;
    ({ peak, radius } = peak);
    const obj3 = _mod16396;
    blobReachResult = obj3.blobReach(peak, radius, closure_5 + _mod16396.FADE_HALF);
    obj4 = _mod16396;
    items = [metroRequire(Stop, obj2), metroRequire(inlineStyles.Stop, { offset: 1, stopColor: "#fff", stopOpacity: 0 })];
    return metroImportDefault(RadialGradient, obj, index);
  });
  const size2 = { id: "iso-" + combined, x: 0, y: 0, width, height, maskUnits: "userSpaceOnUse", children: items2 };
  const Mask = state(height[4]).Mask;
  let tmp9Result = null;
  if (bellReachResult > 0) {
    let obj4 = { cx: width / 2, cy: height, rx: bellReachResult / tmp(tmp2[3]).BELL_H_FACTOR * width, ry: bellReachResult / tmp(tmp2[3]).BELL_V_SQUASH * height, fill: "url(#bell-" + combined + ")" };
    let Ellipse = tmp(tmp2[4]).Ellipse;
    let _HermesInternal = HermesInternal;
    tmp9Result = tmp9(Ellipse, obj4);
  }
  items2 = [tmp9Result, ];
  const obj5 = { children: items };
  const BLOBS1 = tmp(tmp2[3]).BLOBS;
  items2[1] = BLOBS1.map((peak, index) => {
    let ax;
    let ay;
    let x0;
    let y0;
    const obj = _mod16396;
    const blobReachResult = obj.blobReach(peak.peak, peak.radius, bound);
    if (blobReachResult <= 0) {
      return null;
    } else {
      const _Math = Math;
      ({ x0, ax } = peak);
      const _Math2 = Math;
      const sum = x0 + ax * Math.sin(tmp8 + peak.px);
      ({ y0, ay } = peak);
      const sum1 = y0 + ay * Math.sin(tmp8 + peak.py);
      const _HermesInternal = HermesInternal;
      const obj2 = { cx: sum * width, cy: sum1 * height, rx: blobReachResult * width, ry: blobReachResult * height, fill: "url(#blob-" + combined + "-" + index + ")" };
      const Ellipse = inlineStyles.Ellipse;
      return metroRequire(Ellipse, obj2, index);
    }
  });
  items[3] = combined(Mask, size2);
  items3 = [tmp7(Defs, obj5), ];
  const size3 = { x: 0, y: 0, width, height, fill: "url(#cells-" + combined + ")", mask: "url(#iso-" + combined + ")" };
  let Rect = tmp(tmp2[4]).Rect;
  items3[1] = bound(Rect, size3);
  return combined(tmp8, size);
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let items = [0, Math.PI];
const __initData = { code: "function VibegrationsConjureDitherAndroidTsx1(frame){const{STATE_LERP_MS,speed,targetSpeed,phase,CYCLE_MS}=this.__closure;var _frame$timeSincePrevi;const dtMs=Math.min(64,(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:16);const lerp=1-Math.exp(-dtMs/STATE_LERP_MS);speed.set(speed.get()+(targetSpeed.get()-speed.get())*lerp);phase.set(phase.get()+dtMs/CYCLE_MS*2*Math.PI*speed.get());}" };
const __initData2 = { code: "function VibegrationsConjureDitherAndroidTsx2(){const{phase}=this.__closure;return{opacity:(1+Math.cos(phase.get()))/2};}" };
const __initData3 = { code: "function VibegrationsConjureDitherAndroidTsx3(){const{phase}=this.__closure;return{opacity:(1-Math.cos(phase.get()))/2};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsConjureDither.android.tsx");

export default function VibegrationsConjureDither(width) {
  let LEVELS;
  let closure_4;
  let fill;
  let height;
  let thinking;
  width = width.width;
  ({ height: importDefault, thinking } = width);
  ({ fill: react, fillOpacity: closure_4 } = width);
  let sharedValue1;
  let sharedValue2;
  let closure_8;
  let closure_9;
  let obj = width(thinking[5]);
  const sharedValue = obj.useSharedValue(0);
  let num = 1;
  let num2 = 1;
  const useSharedValue = width(thinking[5]).useSharedValue;
  width(thinking[5]);
  if (thinking) {
    num2 = 3;
  }
  sharedValue1 = useSharedValue(num2);
  const useSharedValue2 = tmp(thinking[5]).useSharedValue;
  width(thinking[5]);
  if (thinking) {
    num = 3;
  }
  sharedValue2 = useSharedValue2(num);
  items = [sharedValue2, thinking];
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue2.set;
    if (thinking) {
      num = 3;
    }
    const result = set(num);
  }, items);
  const fn = function b(timeSincePreviousFrame) {
    let num = timeSincePreviousFrame.timeSincePreviousFrame;
    const _Math = Math;
    if (num == null) {
      num = 16;
    }
    const minResult = min(64, num);
    const diff = 1 - Math.exp(-minResult / 80);
    set = sharedValue1.set;
    const value = sharedValue1.get();
    const value3 = sharedValue2.get();
    const result = set(value + (value3 - sharedValue1.get()) * diff);
    set2 = sharedValue.set;
    const value4 = sharedValue.get();
    const result1 = minResult / 9000 * 2 * Math.PI;
    set2(value4 + result1 * sharedValue1.get());
  };
  fn.__closure = { STATE_LERP_MS: 80, speed: sharedValue1, targetSpeed: sharedValue2, phase: sharedValue, CYCLE_MS: 9000 };
  fn.__workletHash = 4536504687968;
  fn.__initData = __initData;
  const tmpResult4 = width(thinking[5]);
  tmpResult4.useFrameCallback(fn);
  const tmpResult5 = width(thinking[5]);
  class L {
    constructor() {
      const obj = { opacity: (1 + Math.cos(sharedValue.get())) / 2 };
      return obj;
    }
  }
  L.__closure = { phase: sharedValue };
  L.__workletHash = 10967678983116;
  L.__initData = __initData2;
  closure_8 = tmpResult5.useAnimatedStyle(L);
  const tmpResult6 = width(thinking[5]);
  class M {
    constructor() {
      const obj = { opacity: (1 - Math.cos(sharedValue.get())) / 2 };
      return obj;
    }
  }
  M.__closure = { phase: sharedValue };
  M.__workletHash = 9179963715851;
  M.__initData = __initData3;
  closure_9 = tmpResult6.useAnimatedStyle(M);
  let tmp10 = null;
  if (width > 0) {
    const obj2 = {
      style: fillOpacity.absoluteFill,
      pointerEvents: "none",
      children: LEVELS.map((item, index) => {
          const band = index;
          return closure_8.map((item, state) => {
            items = [React3.absoluteFill, ];
            items[1] = 0 === state ? closure_8 : closure_9;
            const obj = { style: items, renderToHardwareTextureAndroid: true, children: metroRequire(BandPicture, size) };
            size = { band, state, width, height: importDefault, fill: react, fillOpacity };
            const View = ReanimatedRexportDefault.View;
            return metroRequire(View, obj, "" + band + "-" + state);
          });
        })
    };
    LEVELS = tmp(tmp2[3]).LEVELS;
    tmp10 = sharedValue1(sharedValue, obj2);
  }
  return tmp10;
};
