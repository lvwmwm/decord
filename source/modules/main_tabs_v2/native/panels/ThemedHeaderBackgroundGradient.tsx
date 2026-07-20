// Module ID: 15122
// Function ID: 114133
// Dependencies: []

// Module 15122
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp2 = arg1(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: {} });
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function ThemedHeaderBackgroundGradient(baseColor) {
  let BACKGROUND_BASE_LOWEST = baseColor.baseColor;
  if (BACKGROUND_BASE_LOWEST === undefined) {
    BACKGROUND_BASE_LOWEST = importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST;
  }
  let num2 = baseColor.minHeight;
  if (num2 === undefined) {
    num2 = 16;
  }
  const tmp3 = callback();
  let obj = arg1(dependencyMap[6]);
  const token = obj.useToken(BACKGROUND_BASE_LOWEST);
  let obj1 = arg1(dependencyMap[7]);
  const hex2rgbResult = obj1.hex2rgb(token, 0);
  let str = "transparent";
  if (null != hex2rgbResult) {
    str = hex2rgbResult;
  }
  obj = {};
  const items = [tmp3.container, ];
  obj = { height: Math.max(importDefault(dependencyMap[5])().top, num2) };
  items[1] = obj;
  obj.style = items;
  obj.pointerEvents = "none";
  obj1 = { style: absoluteFill.absoluteFill, colors: items1, start: { "Null": false, "Null": true }, end: { "Null": 131072.00314656927, "Null": 0.000000000000000000000000000000000000000000000000000000011294471302334573 } };
  const items1 = [token, str];
  obj.children = jsx(importDefault(dependencyMap[8]), obj1);
  return <closure_4 {...obj} />;
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/main_tabs_v2/native/panels/ThemedHeaderBackgroundGradient.tsx");

export default memoResult;
