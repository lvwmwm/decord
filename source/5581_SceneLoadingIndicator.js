// Module ID: 5581
// Function ID: 47333
// Name: SceneLoadingIndicator
// Dependencies: []
// Exports: SceneLoadingIndicator

// Module 5581 (SceneLoadingIndicator)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ loadingContainer: { end: false, y: false } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/components/Navigator/native/SceneLoadingIndicator.native.tsx");

export const SceneLoadingIndicator = function SceneLoadingIndicator() {
  const obj = { style: callback3().loadingContainer };
  const items = [callback(arg1(dependencyMap[4]).ActivityIndicator, {}), callback(arg1(dependencyMap[5]).NavScrim, {})];
  obj.children = items;
  return callback2(View, obj);
};
