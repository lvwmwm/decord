// Module ID: 13946
// Function ID: 106737
// Name: BountiesAutoScrollOverlayNuxGradient
// Dependencies: [31, 27, 33, 689, 3991, 4131, 4134, 4554, 2]
// Exports: default

// Module 13946 (BountiesAutoScrollOverlayNuxGradient)
import result from "result";
import { StyleSheet } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
const BRAND_500 = require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500;
let closure_8 = { code: "function BountiesAutoScrollOverlayNuxGradientTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = require("jsxProd").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesAutoScrollOverlayNuxGradient.tsx");

export default function BountiesAutoScrollOverlayNuxGradient(active) {
  active = active.active;
  let obj = active(3991);
  const sharedValue = obj.useSharedValue(0);
  const items = [active, sharedValue];
  const effect = React.useEffect(() => {
    let num = 0;
    if (active) {
      num = 1;
    }
    const result = sharedValue.set(active(outer1_2[5]).withTiming(num, active(outer1_2[6]).timingSlow));
  }, items);
  let obj1 = active(3991);
  const fn = function _() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 17406907036861;
  fn.__initData = closure_8;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: items1, pointerEvents: "none" };
  items1 = [StyleSheet.absoluteFillObject, animatedStyle];
  obj = { style: StyleSheet.absoluteFillObject };
  const items2 = ["" + BRAND_500 + "80", "" + BRAND_500 + "00"];
  obj.colors = items2;
  obj.locations = [0, 1];
  obj.start = { x: 0.5, y: 1 };
  obj.end = { x: 0.5, y: 0 };
  const items3 = [callback(sharedValue(4554), obj), ];
  obj1 = { style: StyleSheet.absoluteFillObject, colors: ["rgba(0,0,0,0.4)", "rgba(0,0,0,0)"], locations: [0, 0.5], start: { x: 0.5, y: 1 }, end: { x: 0.5, y: 0 } };
  items3[1] = callback(sharedValue(4554), obj1);
  obj.children = items3;
  return callback2(sharedValue(3991).View, obj);
};
