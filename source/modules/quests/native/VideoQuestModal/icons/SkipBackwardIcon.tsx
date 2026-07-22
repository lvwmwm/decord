// Module ID: 13808
// Function ID: 104444
// Name: SkipBackwardIcon
// Dependencies: []
// Exports: SkipBackwardIcon

// Module 13808 (SkipBackwardIcon)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/quests/native/VideoQuestModal/icons/SkipBackwardIcon.tsx");

export const SkipBackwardIcon = function SkipBackwardIcon(width) {
  let num = width.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  let str = width.color;
  if (str === undefined) {
    str = "currentColor";
  }
  let obj = { "Null": "spring", "Null": 0.4, "Null": 1 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(width, obj);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 32 32";
  obj["fill"] = "none";
  obj = { "Bool(true)": "Array", "Bool(true)": "isArray", "Bool(true)": "Reflect", "Bool(true)": "accessibilityRole", fill: str };
  const items = [callback(arg1(dependencyMap[2]).Path, obj), , ];
  const obj1 = { fill: str };
  items[1] = callback(arg1(dependencyMap[2]).Path, obj1);
  const obj2 = { fill: str };
  items[2] = callback(arg1(dependencyMap[2]).Path, obj2);
  obj["children"] = items;
  return callback2(importDefault(dependencyMap[2]), obj);
};
