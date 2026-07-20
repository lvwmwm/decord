// Module ID: 13815
// Function ID: 104486
// Name: BountiesAutoScrollOverlayNuxGradient
// Dependencies: []
// Exports: default

// Module 13815 (BountiesAutoScrollOverlayNuxGradient)
let closure_3 = importAll(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const BRAND_500 = importDefault(dependencyMap[3]).unsafe_rawColors.BRAND_500;
let closure_8 = { code: "function BountiesAutoScrollOverlayNuxGradientTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesAutoScrollOverlayNuxGradient.tsx");

export default function BountiesAutoScrollOverlayNuxGradient(active) {
  active = active.active;
  const arg1 = active;
  let obj = arg1(dependencyMap[4]);
  const sharedValue = obj.useSharedValue(0);
  const importDefault = sharedValue;
  const items = [active, sharedValue];
  const effect = React.useEffect(() => {
    let num = 0;
    if (active) {
      num = 1;
    }
    const result = sharedValue.set(active(closure_2[5]).withTiming(num, active(closure_2[6]).timingSlow));
  }, items);
  let obj1 = arg1(dependencyMap[4]);
  const fn = function _() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 17406907036861;
  fn.__initData = closure_8;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: items1, pointerEvents: "none" };
  const items1 = [StyleSheet.absoluteFillObject, animatedStyle];
  obj = { style: StyleSheet.absoluteFillObject };
  const items2 = ["" + BRAND_500 + "80", "" + BRAND_500 + "00"];
  obj.colors = items2;
  obj.locations = [null, null];
  obj.start = { "Null": 2, "Null": 9 };
  obj.end = { "Null": "message", "Null": "PRIMARY_530" };
  const items3 = [callback(importDefault(dependencyMap[7]), obj), ];
  obj1 = { style: StyleSheet.absoluteFillObject, colors: [], locations: [false, false], start: { "Null": 2, "Null": 9 }, end: { "Null": "message", "Null": "PRIMARY_530" } };
  items3[1] = callback(importDefault(dependencyMap[7]), obj1);
  obj.children = items3;
  return callback2(importDefault(dependencyMap[4]).View, obj);
};
