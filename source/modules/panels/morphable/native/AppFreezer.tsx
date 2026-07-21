// Module ID: 15126
// Function ID: 114154
// Name: jsx
// Dependencies: []
// Exports: default

// Module 15126 (jsx)
importAll(dependencyMap[0]);
let closure_2 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = jsx(importDefault(dependencyMap[3]), { style: { flex: 1 } });
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/panels/morphable/native/AppFreezer.tsx");

export default function AppFreezer(manualFreeze) {
  let flag = manualFreeze.manualFreeze;
  if (flag === undefined) {
    flag = false;
  }
  let placeholder = manualFreeze.placeholder;
  if (placeholder === undefined) {
    placeholder = closure_4;
  }
  const arg1 = manualFreeze.lockKeys;
  let tmp = callback((lockKeys) => function shouldFreeze(lockKeys, lockKeys2) {
    if (null != lockKeys2) {
      let someResult = lockKeys2.some((arg0) => arg0.has(arg0));
    } else {
      someResult = lockKeys.size > 0;
    }
    return someResult;
  }(lockKeys.lockKeys, lockKeys));
  const obj = {};
  if (!tmp) {
    tmp = flag;
  }
  obj.freeze = tmp;
  obj.placeholder = placeholder;
  obj.children = manualFreeze.children;
  return jsx(arg1(dependencyMap[4]).Freeze, obj);
};
