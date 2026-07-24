// Module ID: 14562
// Function ID: 111103
// Name: CollectiblesProgressiveImage
// Dependencies: [31, 27, 33, 3991, 4131, 2]
// Exports: CollectiblesProgressiveImage

// Module 14562 (CollectiblesProgressiveImage)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ View: closure_3, StyleSheet: closure_4 } = get_ActivityIndicator);
let result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/CollectiblesProgressiveImage.tsx");

export const CollectiblesProgressiveImage = function CollectiblesProgressiveImage(arg0) {
  let source;
  let style;
  ({ source, style } = arg0);
  let obj = Object.create(null);
  obj.source = 0;
  obj.style = 0;
  const merged = Object.assign(arg0, obj);
  obj = sharedValue(3991);
  sharedValue = obj.useSharedValue(0);
  obj = { style };
  const obj1 = {};
  const merged1 = Object.assign(merged);
  obj1["source"] = source;
  const obj2 = {};
  const merged2 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj2["opacity"] = sharedValue;
  obj1["style"] = obj2;
  obj1["onLoad"] = function onLoad() {
    let obj = sharedValue(outer1_2[4]);
    obj = { duration: 500 };
    const Easing = sharedValue(outer1_2[3]).Easing;
    obj.easing = Easing.inOut(sharedValue(outer1_2[3]).Easing.ease);
    const result = sharedValue.set(obj.withTiming(1, obj));
  };
  obj.children = jsx(importDefault(3991).Image, {});
  return <closure_3 style={style} />;
};
