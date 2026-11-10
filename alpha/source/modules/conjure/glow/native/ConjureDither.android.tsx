// Module ID: 12824
// Function ID: 12825
// Name: ConjureDither
// Dependencies: [19, 17, 21, 12825, 8105, 1652, 2]
// Exports: default

// Module 12824 (ConjureDither)
import _modDef1652 from "module_1652" /* 1652 */;
import inlineStyles from "inlineStyles" /* 8105 */;
import _mod12825 from "module_12825" /* 12825 */;
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
      size = { x: item.x, y: item.y, width: _mod12825.CELL, height: _mod12825.CELL, rx: _mod12825.CORNER, fill: react, fillOpacity };
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
    isoStop = _mod12825.isoStop;
    _mod12825;
    ({ peak, radius } = peak);
    const obj3 = _mod12825;
    blobReachResult = obj3.blobReach(peak, radius, closure_5 + _mod12825.FADE_HALF);
    obj4 = _mod12825;
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
    const obj = _mod12825;
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
let closure_10 = { code: "(function ConjureDitherAndroidTsx1(frame){let[STATE_LERP_MS,speed,targetSpeed,phase,CYCLE_MS]=this.__closure;var _frame$timeSincePrevi;const dtMs=Math.min(64,(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:16);const lerp=1-Math.exp(-dtMs/STATE_LERP_MS);speed.set(speed.get()+(targetSpeed.get()-speed.get())*lerp);phase.set(phase.get()+dtMs/CYCLE_MS*2*Math.PI*speed.get());})" };
let closure_11 = { code: "(function ConjureDitherAndroidTsx2(){let[phase]=this.__closure;return{opacity:(1+Math.cos(phase.get()))/2};})" };
let closure_12 = { code: "(function ConjureDitherAndroidTsx3(){let[phase]=this.__closure;return{opacity:(1-Math.cos(phase.get()))/2};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/glow/native/ConjureDither.android.tsx");

export default function ConjureDither(width) {
  let LEVELS;
  let closure_4;
  let fill;
  let height;
  let thinking;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp9;
  width = width.width;
  ({ height: importDefault, thinking } = width);
  ({ fill: react, fillOpacity: closure_4 } = width);
  let sharedValue2;
  let closure_6;
  let closure_7;
  let obj = width(thinking[5]);
  const sharedValue = obj.useSharedValue(0);
  let num = 1;
  let num2 = 1;
  const useSharedValue = width(thinking[5]).useSharedValue;
  width(thinking[5]);
  if (thinking) {
    num2 = 3;
  }
  const sharedValue1 = useSharedValue(num2);
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
  const items1 = [closure_10, 80, sharedValue1, sharedValue2, sharedValue, 9000];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items1;
  const tmpResult4 = width(thinking[5]);
  class ConjureDitherAndroidTsx1 {
    constructor(timeSincePreviousFrame) {
      let num = timeSincePreviousFrame.timeSincePreviousFrame;
      const _Math = Math;
      if (num == null) {
        num = 16;
      }
      const minResult = min(64, num);
      const diff = 1 - Math.exp(-minResult / c0);
      set = _undefined.set;
      const value = _undefined.get();
      const value3 = _undefined2.get();
      const result = set(value + (value3 - _undefined.get()) * diff);
      set2 = _undefined3.set;
      const value4 = _undefined3.get();
      const result1 = minResult / c4 * 2 * Math.PI;
      set2(value4 + result1 * _undefined.get());
    }
  }
  const items2 = [tmp10, tmp11, tmp12, tmp13, tmp14];
  ConjureDitherAndroidTsx1.__closure = items2;
  ConjureDitherAndroidTsx1.__workletHash = 13577503851898;
  ConjureDitherAndroidTsx1.__initData = tmp9;
  tmpResult4.useFrameCallback(ConjureDitherAndroidTsx1);
  const items3 = [closure_11, sharedValue];
  c0 = undefined;
  [tmp16, tmp17] = items3;
  const tmpResult5 = width(thinking[5]);
  class ConjureDitherAndroidTsx2 {
    constructor() {
      const obj = { opacity: (1 + Math.cos(_undefined.get())) / 2 };
      return obj;
    }
  }
  const items4 = [tmp17];
  ConjureDitherAndroidTsx2.__closure = items4;
  ConjureDitherAndroidTsx2.__workletHash = 2589685812342;
  ConjureDitherAndroidTsx2.__initData = tmp16;
  closure_6 = tmpResult5.useAnimatedStyle(ConjureDitherAndroidTsx2);
  const items5 = [closure_12, sharedValue];
  c0 = undefined;
  [tmp18, tmp19] = items5;
  const tmpResult6 = width(thinking[5]);
  class ConjureDitherAndroidTsx3 {
    constructor() {
      const obj = { opacity: (1 - Math.cos(_undefined.get())) / 2 };
      return obj;
    }
  }
  const items6 = [tmp19];
  ConjureDitherAndroidTsx3.__closure = items6;
  ConjureDitherAndroidTsx3.__workletHash = 9176560266449;
  ConjureDitherAndroidTsx3.__initData = tmp18;
  closure_7 = tmpResult6.useAnimatedStyle(ConjureDitherAndroidTsx3);
  let tmp20 = null;
  if (width > 0) {
    const obj2 = {
      style: fillOpacity.absoluteFill,
      pointerEvents: "none",
      children: LEVELS.map((item, index) => {
          const band = index;
          return items.map((item, state) => {
            items = [React3.absoluteFill, ];
            items[1] = 0 === state ? metroRequire : closure_7;
            const obj = { style: items, renderToHardwareTextureAndroid: true, children: metroRequire(BandPicture, size) };
            size = { band, state, width, height: importDefault, fill: react, fillOpacity };
            const View = _modDef1652.View;
            return metroRequire(View, obj, "" + band + "-" + state);
          });
        })
    };
    LEVELS = tmp(tmp2[3]).LEVELS;
    tmp20 = closure_6(sharedValue2, obj2);
  }
  return tmp20;
};
