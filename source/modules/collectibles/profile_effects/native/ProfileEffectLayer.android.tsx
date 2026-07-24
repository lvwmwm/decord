// Module ID: 8268
// Function ID: 65226
// Dependencies: [31, 27, 33, 8043, 8265, 2]

// Module 8268
import importAllResult from "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo((paused) => {
  let accessibilityLabel;
  let animate;
  let layerConfig;
  let onLoad;
  ({ layerConfig, animate } = paused);
  paused = paused.paused;
  const width = paused.width;
  ({ accessibilityLabel, onLoad } = paused);
  const ref = aPNGPlayerControls.useRef(null);
  let obj = animate(paused[3]);
  aPNGPlayerControls = obj.useAPNGPlayerControls(ref);
  const items = [animate, paused, aPNGPlayerControls];
  const effect = aPNGPlayerControls.useEffect(() => {
    if (animate) {
      if (!paused) {
        aPNGPlayerControls.play();
      }
    }
    aPNGPlayerControls.pause();
  }, items);
  obj = { ref, url: layerConfig.src, autoplay: false };
  const items1 = [StyleSheet.absoluteFill, ];
  obj = { position: "absolute", width, height: animate(paused[4]).calculateProfileEffectHeight(layerConfig, width) };
  let num = 0;
  if (animate) {
    num = 1;
  }
  obj.opacity = num;
  items1[1] = obj;
  obj.style = items1;
  obj.ariaLabel = accessibilityLabel;
  obj.onLoad = onLoad;
  return jsx(animate(paused[3]).APNGPlayer, { position: "absolute", width, height: animate(paused[4]).calculateProfileEffectHeight(layerConfig, width) });
});
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectLayer.android.tsx");

export default memoResult;
