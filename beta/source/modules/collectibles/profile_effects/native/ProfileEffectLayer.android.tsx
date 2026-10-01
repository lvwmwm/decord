// Module ID: 8270
// Function ID: 8271
// Name: ProfileEffectLayer
// Dependencies: [19, 17, 21, 8271, 8267, 2]

// Module 8270 (ProfileEffectLayer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ProfileEffectUtils from "ProfileEffectUtils" /* 8267 */;
import APNGPlayer2 from "APNGPlayer" /* 8271 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let paused;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const memoResult = react.memo((paused) => {
  let accessibilityLabel;
  let animate;
  let items1;
  let layerConfig;
  let num;
  let obj4;
  let onLoad;
  ({ layerConfig, animate } = paused);
  paused = paused.paused;
  const width = paused.width;
  ({ accessibilityLabel, onLoad } = paused);
  const ref = react.useRef(null);
  const obj = APNGPlayer2;
  const aPNGPlayerControls = obj.useAPNGPlayerControls(ref);
  const items = [animate, paused, aPNGPlayerControls];
  const effect = react.useEffect(() => {
    const tmp = animate;
    if (tmp) {
      const tmp2 = paused;
      if (!tmp2) {
        aPNGPlayerControls.play();
      }
    }
    aPNGPlayerControls.pause();
  }, items);
  const obj2 = { ref, url: layerConfig.src, autoplay: false, style: items1, ariaLabel: accessibilityLabel, onLoad };
  items1 = [StyleSheet.absoluteFill, ];
  size = { position: "absolute", width, height: obj4.calculateProfileEffectHeight(layerConfig, width), opacity: num };
  const APNGPlayer = APNGPlayer2.APNGPlayer;
  num = 0;
  obj4 = ProfileEffectUtils;
  const tmp4 = jsx;
  if (animate) {
    num = 1;
  }
  items1[1] = size;
  return tmp4(APNGPlayer, obj2);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectLayer.android.tsx");

export default memoResult;
