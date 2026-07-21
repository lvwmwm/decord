// Module ID: 14685
// Function ID: 110749
// Name: NonCollapsableGestureDetector
// Dependencies: []
// Exports: NonCollapsableGestureDetector

// Module 14685 (NonCollapsableGestureDetector)
let closure_2 = [906643286];
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = { flex: 1 };
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx");

export const NonCollapsableGestureDetector = function NonCollapsableGestureDetector(children) {
  let obj = {};
  const merged = Object.assign(callback(children, closure_2));
  obj = { style: closure_6, collapsable: false, children: children.children };
  obj["children"] = <View {...obj} />;
  return jsx(arg1(dependencyMap[4]).GestureDetector, obj);
};
