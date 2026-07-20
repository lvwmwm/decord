// Module ID: 10565
// Function ID: 82505
// Name: result
// Dependencies: []
// Exports: default

// Module 10565 (result)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[2]).jsx;
let result = null;
if (!obj.isAndroid()) {
  result = arg1(dependencyMap[1]).requireNativeComponent("DCDMessageLoadingSpinner");
}
const obj = arg1(dependencyMap[3]);
const result1 = arg1(dependencyMap[7]).fileFinishedImporting("components_native/common/MessageLoadingSpinner.tsx");

export default function MessageLoadingSpinner(color) {
  let obj = arg1(dependencyMap[4]);
  let token = obj.useToken(importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND);
  color = color.color;
  if (null != color) {
    token = color;
  }
  if (null != result) {
    obj = {};
    const merged = Object.assign(color);
    obj["color"] = token;
    let tmp8 = <result {...obj} />;
  } else {
    obj = { animating: color.animate };
    const merged1 = Object.assign(color);
    tmp8 = jsx(arg1(dependencyMap[6]).ActivityIndicator, obj);
  }
  return tmp8;
};
