// Module ID: 15988
// Function ID: 15989
// Name: CheckpointApngPlayer
// Dependencies: [17, 4782, 21, 4790, 558, 568, 504, 1369, 5834, 9119, 2]

// Module 15988 (CheckpointApngPlayer)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import FastImageDefault from "FastImage" /* 5834 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;
import createStyles from "createStyles" /* 4790 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const APNGPlayer = tmp2(9119);
const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointApngPlayer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let obj = dependencyMap;
  const cResult = c.c(9);
  ({ uri, style } = arg0);
  const tmp3 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function u() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === style) {
      if (cResult[4] === uri) {
        if (cResult[6] === tmp3.container) {
          if (cResult[7] === tmp8) {
            let tmp13 = cResult[8];
          }
          return tmp13;
        }
        const obj3 = { style: tmp3.container, children: cResult[5] };
        const tmp16 = <View style={tmp3.container}>{cResult[5]}</View>;
        cResult[6] = tmp3.container;
        cResult[7] = cResult[5];
        cResult[8] = tmp16;
        tmp13 = tmp16;
      }
    }
  }
  const tmpResult = initialize;
  if (tmpResult2.isIOS()) {
    obj = { source: null, style: null, resizeMode: "cover", enableAnimation: null };
    const obj4 = { uri };
    obj.source = obj4;
    obj.style = style;
    obj.enableAnimation = !stateFromStores;
    let tmp9Result = tmp9(FastImageDefault, obj);
  } else {
    const obj5 = { url: uri, autoplay: !stateFromStores, style };
    tmp9Result = tmp9(tmp(9119).APNGPlayer, obj5);
  }
  cResult[2] = stateFromStores;
  cResult[3] = style;
  cResult[4] = uri;
  cResult[5] = tmp9Result;
}) : ((arg0) => {
  ({ uri, style } = arg0);
  const tmp = closure_6();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { style: tmp.container, children: null };
  if (obj3.isIOS()) {
    const obj4 = { source: null, style: null, resizeMode: "cover", enableAnimation: null };
    const obj5 = { uri };
    obj4.source = obj5;
    obj4.style = style;
    obj4.enableAnimation = !stateFromStores;
    let tmp5Result = tmp5(FastImageDefault, obj4);
  } else {
    const obj6 = { url: uri, autoplay: !stateFromStores, style };
    tmp5Result = tmp5(APNGPlayer.APNGPlayer, obj6);
  }
  obj2.children = tmp5Result;
  return <tmp6 style={tmp.container}>{null}</tmp6>;
});
