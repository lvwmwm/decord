// Module ID: 10746
// Function ID: 10747
// Name: QuestDockRewardTile
// Dependencies: [32, 19, 17, 4825, 21, 4836, 576, 1364, 504, 10689, 7755, 5899, 2]

// Module 10746 (QuestDockRewardTile)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import AssetUtils from "AssetUtils" /* 10689 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

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
const memoResult = react.memo(function QuestDockRewardTile(assetUrl) {
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
    let obj = assetUrl(height[7]);
    withAnimation = obj.isIOS();
  }
  react = undefined;
  const items = [AccessibilityStore];
  const obj2 = assetUrl(height[8]);
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp6 = closure_9();
  [tmp8, c4] = width(react.useState("active" === currentState.currentState), 2);
  const items1 = [isAnimatedAsset];
  width(react.useState("active" === currentState.currentState), 2);
  const effect = react.useEffect(() => {
    const tmp = isAnimatedAsset;
    if (tmp) {
      let closure_0 = currentState.addEventListener("change", (event) => {
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
      const VideoComponent = tmp3(tmp4[10]).VideoComponent;
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
  tmp11Result = tmp11(isAnimatedAsset(tmp4[11]), obj6);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDockRewardTile.tsx");

export default memoResult;
