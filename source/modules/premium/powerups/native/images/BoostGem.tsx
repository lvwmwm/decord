// Module ID: 11544
// Function ID: 89876
// Name: BoostGem
// Dependencies: []
// Exports: default

// Module 11544 (BoostGem)
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
  const items = [callback(arg1(dependencyMap[2]).Path, {}), callback(arg1(dependencyMap[2]).Path, {}), callback(arg1(dependencyMap[2]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[2]).Path, { "Bool(false)": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000034888630378724896, "Bool(false)": 1626245502998593400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }), callback(arg1(dependencyMap[2]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[2]).Path, { "Bool(false)": "RTC_CONNECTION_LOSS_RATE", "Bool(false)": "handleJoinThreadVoice" })];
  obj.children = items;
  return callback2(importDefault(dependencyMap[2]), obj);
};
