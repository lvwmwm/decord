// Module ID: 15568
// Function ID: 15569
// Name: CheckpointApngPlayer
// Dependencies: [17, 4885, 21, 4896, 558, 576, 504, 1370, 5981, 8497, 2]

// Module 15568 (CheckpointApngPlayer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import FastImageDefault from "FastImage" /* 5981 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2;
const APNGPlayer = tmp2(8497);
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center" } });
tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let obj4;
  let style;
  let tmp10Result;
  let tmp5;
  let tmp6;
  let uri;
  let useReducedMotion;
  const obj = react;
  const cResult = obj.c(9);
  ({ uri, style } = arg0);
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
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === style) {
      let tmp9;
      if (cResult[4] === uri) {
        tmp9 = cResult[5];
      }
      if (cResult[6] === tmp4.container) {
        let tmp13;
        if (cResult[7] === tmp9) {
          tmp13 = cResult[8];
        }
        return tmp13;
      }
      const tmp16 = <View style={tmp4.container}>{tmp9}</View>;
      cResult[6] = tmp4.container;
      cResult[7] = tmp9;
      cResult[8] = tmp16;
      tmp13 = tmp16;
    }
  }
  const tmpResult2 = utils_PlatformUtils;
  if (tmpResult2.isIOS()) {
    const obj3 = { source: obj4, style, resizeMode: "cover", enableAnimation: !stateFromStores };
    obj4 = { uri };
    tmp10Result = tmp10(FastImageDefault, obj3);
  } else {
    const obj5 = { url: uri, autoplay: !stateFromStores, style };
    tmp10Result = tmp10(tmp(8497).APNGPlayer, obj5);
  }
  cResult[2] = stateFromStores;
  cResult[3] = style;
  cResult[4] = uri;
  cResult[5] = tmp10Result;
  tmp9 = tmp10Result;
}) : ((arg0) => {
  let obj5;
  let style;
  let tmp5Result;
  let uri;
  let useReducedMotion;
  ({ uri, style } = arg0);
  const items = [AccessibilityStore];
  const tmp = closure_6();
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = utils_PlatformUtils;
  if (obj3.isIOS()) {
    const obj4 = { source: obj5, style, resizeMode: "cover", enableAnimation: !stateFromStores };
    obj5 = { uri };
    tmp5Result = tmp5(FastImageDefault, obj4);
  } else {
    const obj6 = { url: uri, autoplay: !stateFromStores, style };
    tmp5Result = tmp5(APNGPlayer.APNGPlayer, obj6);
  }
  return <tmp6 style={tmp.container}>{tmp5Result}</tmp6>;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointApngPlayer.tsx");

export default tmp2;
