// Module ID: 12935
// Function ID: 12936
// Name: CheckpointApngPlayer
// Dependencies: [17, 4970, 21, 4969, 558, 576, 504, 5667, 1385, 9400, 2]

// Module 12935 (CheckpointApngPlayer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1385 */;
import FastImageDefault from "FastImage" /* 5667 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center" } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointApngPlayer(arg0) {
  let animatedUri;
  let obj7;
  let staticUri;
  let style;
  let tmp12;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  const obj = react;
  const cResult = obj.c(16);
  ({ animatedUri, staticUri, style } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function u() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  if (tmpResult.useStateFromStores(tmp5, tmp6)) {
    let tmp16;
    if (cResult[2] !== staticUri) {
      const obj2 = { uri: staticUri };
      cResult[2] = staticUri;
      cResult[3] = obj2;
      tmp16 = obj2;
    } else {
      tmp16 = cResult[3];
    }
    if (cResult[4] === style) {
      let tmp17;
      if (cResult[5] === tmp16) {
        tmp17 = cResult[6];
      }
      if (cResult[7] === tmp4.container) {
        let tmp21;
        if (cResult[8] === tmp17) {
          tmp21 = cResult[9];
        }
        tmp12 = tmp21;
      }
      const tmp24 = <View style={tmp4.container}>{tmp17}</View>;
      cResult[7] = tmp4.container;
      cResult[8] = tmp17;
      cResult[9] = tmp24;
      tmp21 = tmp24;
    }
    const tmp20 = jsx(FastImageDefault, { source: tmp16, style, resizeMode: "cover" });
    cResult[4] = style;
    cResult[5] = tmp16;
    cResult[6] = tmp20;
    tmp17 = tmp20;
  } else {
    let tmp9Result;
    if (cResult[10] === animatedUri) {
      let tmp8;
      if (cResult[11] === style) {
        tmp8 = cResult[12];
      }
      if (cResult[13] === tmp4.container) {
        if (cResult[14] === tmp8) {
          tmp12 = cResult[15];
        }
      }
      const tmp15 = <View style={tmp4.container}>{tmp8}</View>;
      cResult[13] = tmp4.container;
      cResult[14] = tmp8;
      cResult[15] = tmp15;
      tmp12 = tmp15;
    }
    const tmpResult2 = utils_PlatformUtils;
    if (tmpResult2.isIOS()) {
      const obj6 = { source: obj7, style, resizeMode: "cover" };
      obj7 = { uri: animatedUri };
      tmp9Result = tmp9(FastImageDefault, obj6);
    } else {
      const obj8 = { url: animatedUri, autoplay: true, style };
      tmp9Result = tmp9(tmp(9400).APNGPlayer, obj8);
    }
    cResult[10] = animatedUri;
    cResult[11] = style;
    cResult[12] = tmp9Result;
    tmp8 = tmp9Result;
  }
  return tmp12;
}) : (function CheckpointApngPlayer(staticUri) {
  let animatedUri;
  let obj6;
  let style;
  let tmp8;
  let useReducedMotion;
  ({ animatedUri, style } = staticUri);
  staticUri = staticUri.staticUri;
  const items = [AccessibilityStore];
  const obj2 = { style: closure_6().container, children: null };
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    const obj4 = { uri: staticUri };
    obj2.children = jsx(FastImageDefault, { source: obj4, style, resizeMode: "cover" });
    tmp8 = obj2;
  } else {
    let tmp4Result;
    const tmp2Result = utils_PlatformUtils;
    if (tmp2Result.isIOS()) {
      const obj5 = { source: obj6, style, resizeMode: "cover" };
      obj6 = { uri: animatedUri };
      tmp4Result = tmp4(FastImageDefault, obj5);
    } else {
      const obj7 = { url: animatedUri, autoplay: true, style };
      tmp4Result = tmp4(tmp2(9400).APNGPlayer, obj7);
    }
    obj2.children = tmp4Result;
    tmp8 = obj2;
  }
  return <tmp5 {...tmp8} />;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointApngPlayer.tsx");

export default tmp2;
