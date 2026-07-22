// Module ID: 5506
// Function ID: 46921
// Name: getHigherContrastColor
// Dependencies: []
// Exports: getHigherContrastColor

// Module 5506 (getHigherContrastColor)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/user_profile/utils/getHigherContrastColor.tsx");

export const getHigherContrastColor = function getHigherContrastColor(backgroundColor) {
  backgroundColor = backgroundColor.backgroundColor;
  const tmp = callback(backgroundColor.colors, 2);
  const first = tmp[0];
  let tmp3 = tmp[1];
  let hex2intResult = backgroundColor;
  if ("string" === typeof backgroundColor) {
    hex2intResult = arg1(dependencyMap[1]).hex2int(backgroundColor);
    const obj = arg1(dependencyMap[1]);
  }
  let hex2intResult1 = first;
  if ("string" === typeof first) {
    hex2intResult1 = arg1(dependencyMap[1]).hex2int(first);
    const obj2 = arg1(dependencyMap[1]);
  }
  let hex2intResult2 = tmp3;
  if ("string" === typeof tmp3) {
    hex2intResult2 = arg1(dependencyMap[1]).hex2int(tmp3);
    const obj3 = arg1(dependencyMap[1]);
  }
  const contrast = arg1(dependencyMap[1]).getContrast(hex2intResult, hex2intResult1);
  const obj4 = arg1(dependencyMap[1]);
  if (contrast > obj5.getContrast(hex2intResult, hex2intResult2)) {
    tmp3 = first;
  }
  return tmp3;
};
