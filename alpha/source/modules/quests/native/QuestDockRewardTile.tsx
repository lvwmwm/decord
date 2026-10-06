// Module ID: 10964
// Function ID: 10965
// Name: QuestDockRewardTile
// Dependencies: [32, 19, 17, 4885, 21, 4896, 587, 558, 576, 1369, 504, 10013, 7993, 5981, 2]

// Module 10964 (QuestDockRewardTile)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import AssetUtils from "AssetUtils" /* 10013 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let str, tmp2;

let hasOwnProperty;
let metroRequire;
let react = react_mod;
({ AppState: hasOwnProperty, View: metroRequire } = react_native);
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles(() => {
  const obj = { container: { borderRadius: nativeDefault.radii.sm, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }, video: { overflow: "hidden", height: "100%", width: "100%" }, image: { height: "100%", width: "100%" } };
  ({ borderRadius: nativeDefault.radii.sm, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" });
  return obj;
});
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let assetUrl;
  let height;
  let isAnimatedAsset;
  let paused;
  let style;
  let tmp12;
  let tmp13;
  let tmp6;
  let tmp7;
  let useReducedMotion;
  let width;
  let withAnimation;
  let tmp = isAnimatedAsset;
  const obj = isAnimatedAsset(576);
  const cResult = obj.c(32);
  ({ assetUrl, isAnimatedAsset } = arg0);
  ({ accessibilityLabel, height, width, style, paused, withAnimation } = arg0);
  if (cResult[0] !== withAnimation) {
    let isIOSResult = withAnimation;
    if (undefined === withAnimation) {
      const tmpResult = tmp(1369);
      isIOSResult = tmpResult.isIOS();
    }
    cResult[0] = withAnimation;
    cResult[1] = isIOSResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class U {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
    cResult[2] = items;
    cResult[3] = U;
    tmp7 = U;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores = tmpResult3.useStateFromStores(tmp6, tmp7);
  closure_9();
  [r10055, importDefault] = react.useState("active" === closure_5.currentState);
  _slicedToArray(react.useState("active" === closure_5.currentState), 2);
  const obj4 = react;
  if (cResult[4] !== isAnimatedAsset) {
    class D {
      constructor() {
        tmp = closure_0;
        if (tmp) {
          tmp2 = closure_1_5;
          str = "change";
          closure_0 = closure_1_5.addEventListener("change", () => { /* body not rendered: F141078 */ });
          return () => { /* body not rendered: F141079 */ };
        } else {
          return;
        }
      }
    }
    const items1 = [isAnimatedAsset];
    class U {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
    cResult[4] = isAnimatedAsset;
    cResult[5] = D;
    cResult[6] = items1;
    tmp13 = items1;
    tmp12 = D;
  } else {
    class D {
      constructor() {
        tmp = closure_0;
        if (tmp) {
          tmp2 = closure_1_5;
          str = "change";
          closure_0 = closure_1_5.addEventListener("change", () => { /* body not rendered: F141078 */ });
          return () => { /* body not rendered: F141079 */ };
        } else {
          return;
        }
      }
    }
    tmp13 = cResult[6];
  }
  const effect = obj4.useEffect(tmp12, tmp13);
  if (cResult[7] === assetUrl) {
    class D {
      constructor() {
        tmp = closure_0;
        if (tmp) {
          tmp2 = closure_1_5;
          str = "change";
          closure_0 = closure_1_5.addEventListener("change", () => { /* body not rendered: F141078 */ });
          return () => { /* body not rendered: F141079 */ };
        } else {
          return;
        }
      }
    }
  }
  const tmpResult4 = tmp(10013);
  const scaledImageUrl = tmpResult4.getScaledImageUrl({ assetUrl, width, height });
  cResult[7] = assetUrl;
  cResult[8] = height;
  cResult[9] = width;
  cResult[10] = scaledImageUrl;
}) : ((assetUrl) => {
  let accessibilityLabel;
  let c4;
  let items3;
  let obj5;
  let style;
  let tmp14;
  let tmp8;
  let useReducedMotion;
  assetUrl = assetUrl.assetUrl;
  const isAnimatedAsset = assetUrl.isAnimatedAsset;
  const height = assetUrl.height;
  const width = assetUrl.width;
  let flag = assetUrl.paused;
  ({ accessibilityLabel, style } = assetUrl);
  if (flag === undefined) {
    flag = false;
  }
  let withAnimation = assetUrl.withAnimation;
  if (withAnimation === undefined) {
    let tmp = assetUrl;
    let obj = assetUrl(height[9]);
    withAnimation = obj.isIOS();
  }
  react = undefined;
  const items = [AccessibilityStore];
  const obj2 = assetUrl(height[10]);
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp6 = closure_9();
  [tmp8, c4] = width(react.useState("active" === closure_5.currentState), 2);
  const items1 = [isAnimatedAsset];
  width(react.useState("active" === closure_5.currentState), 2);
  const effect = react.useEffect(() => {
    const tmp = isAnimatedAsset;
    if (tmp) {
      let closure_0 = closure_1_5.addEventListener("change", (event) => {
        closure_1_4("active" === event);
      });
      return () => {
        closure_0.remove();
      };
    }
  }, items1);
  const items2 = [assetUrl, width, height];
  const memo = react.useMemo(() => {
    size = { assetUrl, width, height };
    const obj = AssetUtils;
    return obj.getScaledImageUrl(size);
  }, items2);
  const obj3 = { accessibilityLabel, style: items3, children: null };
  items3 = [tmp6.container, { height, width }, style];
  const tmp3 = assetUrl;
  if (isAnimatedAsset) {
    let tmp11Result;
    if (withAnimation) {
      const obj4 = { style: tmp6.video, source: obj5, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", poster: memo, resizeMode: "cover", paused: tmp14, muted: true };
      tmp14 = !tmp8;
      obj5 = { uri: assetUrl };
      const VideoComponent = tmp3(tmp4[12]).VideoComponent;
      if (tmp8) {
        tmp14 = flag;
      }
      if (!tmp14) {
        tmp14 = stateFromStores;
      }
      tmp11Result = tmp11(VideoComponent, obj4);
    }
    obj3.children = tmp11Result;
    return <tmp12 {...obj3} />;
  }
  const obj6 = { source: { uri: memo }, style: tmp6.image };
  tmp11Result = tmp11(isAnimatedAsset(tmp4[13]), obj6);
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDockRewardTile.tsx");

export default memoResult;
