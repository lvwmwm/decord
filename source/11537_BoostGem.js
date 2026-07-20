// Module ID: 11537
// Function ID: 89853
// Name: BoostGem
// Dependencies: []
// Exports: default

// Module 11537 (BoostGem)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/premium/powerups/native/images/BoostGem.tsx");

export default function BoostGem(width) {
  let num = width.width;
  if (num === undefined) {
    num = 39;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 66;
  }
  const obj = { width: num, height: num2, viewBox: "0 0 39 66", fill: "none", style: width.style };
  const items = [callback(arg1(dependencyMap[2]).Path, {}), callback(arg1(dependencyMap[2]).Path, {}), callback(arg1(dependencyMap[2]).Path, {}), callback(arg1(dependencyMap[2]).Path, {}), callback(arg1(dependencyMap[2]).Path, {}), callback(arg1(dependencyMap[2]).Path, {})];
  obj.children = items;
  return callback2(importDefault(dependencyMap[2]), obj);
};
