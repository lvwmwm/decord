// Module ID: 9499
// Function ID: 9500
// Name: ProfileEffectLayer
// Dependencies: [19, 17, 21, 6020, 9496, 2]

// Module 9499 (ProfileEffectLayer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 6020 */;
import ProfileEffectUtils from "ProfileEffectUtils" /* 9496 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const memoResult = react.memo(function ProfileEffectLayerAndroid(layerConfig) {
  let accessibilityLabel;
  let animate;
  let items1;
  let num;
  let obj3;
  let onLoad;
  let paused;
  let tmp5;
  let width;
  layerConfig = layerConfig.layerConfig;
  ({ animate, width, onLoad } = layerConfig);
  const items = [layerConfig.src, onLoad];
  ({ paused, accessibilityLabel } = layerConfig);
  const callback = react.useCallback(() => {
    if (onLoad != null) {
      tmp(layerConfig.src);
    }
  }, items);
  const obj = { source: { uri: layerConfig.src }, paused: tmp5, resizeMode: "contain", fadeDuration: 0, style: items1, accessibilityLabel, onLoad: callback };
  tmp5 = !animate;
  const tmp2 = jsx;
  const tmp4 = FastImageDefault;
  if (animate) {
    tmp5 = true === paused;
  }
  items1 = [StyleSheet.absoluteFill, ];
  size = { position: "absolute", width, height: obj3.calculateProfileEffectHeight(layerConfig, width), opacity: num };
  num = 0;
  obj3 = ProfileEffectUtils;
  if (animate) {
    num = 1;
  }
  items1[1] = size;
  return tmp2(tmp4, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectLayer.android.tsx");

export default memoResult;
