// Module ID: 8212
// Function ID: 64924
// Dependencies: []

// Module 8212
const importAllResult = importAll(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = importAllResult.memo((paused) => {
  let accessibilityLabel;
  let animate;
  let layerConfig;
  let onLoad;
  ({ layerConfig, animate } = paused);
  const arg1 = animate;
  paused = paused.paused;
  const dependencyMap = paused;
  const width = paused.width;
  ({ accessibilityLabel, onLoad } = paused);
  const ref = importAllResult.useRef(null);
  let obj = arg1(dependencyMap[3]);
  const aPNGPlayerControls = obj.useAPNGPlayerControls(ref);
  const items = [animate, paused, aPNGPlayerControls];
  const effect = importAllResult.useEffect(() => {
    if (animate) {
      if (!paused) {
        aPNGPlayerControls.play();
      }
    }
    aPNGPlayerControls.pause();
  }, items);
  obj = { ref, url: layerConfig.src, autoplay: false };
  const items1 = [StyleSheet.absoluteFill, ];
  obj = { position: "absolute", width, height: arg1(dependencyMap[4]).calculateProfileEffectHeight(layerConfig, width) };
  let num = 0;
  if (animate) {
    num = 1;
  }
  obj.opacity = num;
  items1[1] = obj;
  obj.style = items1;
  obj.ariaLabel = accessibilityLabel;
  obj.onLoad = onLoad;
  return jsx(arg1(dependencyMap[3]).APNGPlayer, obj);
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectLayer.android.tsx");

export default memoResult;
