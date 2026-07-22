// Module ID: 14398
// Function ID: 108627
// Name: CollectiblesProgressiveImage
// Dependencies: [7656, 653, 10087, 1212, 14406, 2]
// Exports: CollectiblesProgressiveImage

// Module 14398 (CollectiblesProgressiveImage)
import "MobileSetting";
import ME from "ME";
import { jsx } from "createToggle";
import result2 from "result2";

({ View: closure_3, StyleSheet: closure_4 } = ME);
const result = result2.fileFinishedImporting("modules/collectibles/native/CollectiblesProgressiveImage.tsx");

export const CollectiblesProgressiveImage = function CollectiblesProgressiveImage(arg0) {
  let source;
  let style;
  ({ source, style } = arg0);
  let obj = Object.create(null);
  obj.source = 0;
  obj.style = 0;
  const merged = Object.assign(arg0, obj);
  obj = arg1(dependencyMap[3]);
  const sharedValue = obj.useSharedValue(0);
  const arg1 = sharedValue;
  obj = { style };
  const obj1 = {};
  const merged1 = Object.assign(merged);
  obj1["source"] = source;
  const obj2 = {};
  const merged2 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj2["opacity"] = sharedValue;
  obj1["style"] = obj2;
  obj1["onLoad"] = function onLoad() {
    let obj = sharedValue(closure_2[4]);
    obj = { duration: 500 };
    const Easing = sharedValue(closure_2[3]).Easing;
    obj.easing = Easing.inOut(sharedValue(closure_2[3]).Easing.ease);
    const result = sharedValue.set(obj.withTiming(1, obj));
  };
  obj.children = jsx(importDefault(dependencyMap[3]).Image, obj1);
  return <closure_3 {...obj} />;
};
