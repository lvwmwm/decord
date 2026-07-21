// Module ID: 4962
// Function ID: 42636
// Name: isVersionEqual
// Dependencies: []
// Exports: isVersionEqual

// Module 4962 (isVersionEqual)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("utils/SecondaryIndexMapUtils.tsx");

export const isVersionEqual = function isVersionEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  let tmp5 = tmp2 === tmp4;
  if (tmp5) {
    tmp5 = importDefault(dependencyMap[0])(tmp, tmp3);
  }
  return tmp5;
};
