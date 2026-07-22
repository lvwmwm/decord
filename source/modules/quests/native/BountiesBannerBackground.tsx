// Module ID: 13871
// Function ID: 104911
// Dependencies: []

// Module 13871
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = [true, true];
let closure_9 = [];
const tmp3 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function BountiesBannerBackground(arg0) {
  let children;
  let style;
  let uri;
  ({ children, style, uri } = arg0);
  let obj = arg1(dependencyMap[4]);
  const items = [closure_5];
  obj = { style };
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { source: { uri }, style: closure_3.absoluteFillObject, paused: stateFromStores };
  const items1 = [callback(arg1(dependencyMap[5]).VideoComponent, obj), callback(importDefault(dependencyMap[6]), { colors: closure_9, locations: closure_8, style: closure_3.absoluteFillObject }), children];
  obj.children = items1;
  return callback2(closure_4, obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/quests/native/BountiesBannerBackground.tsx");

export default memoResult;
