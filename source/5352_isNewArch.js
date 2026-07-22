// Module ID: 5352
// Function ID: 45940
// Name: isNewArch
// Dependencies: []
// Exports: isNewArch

// Module 5352 (isNewArch)
const Platform = require(dependencyMap[0]).Platform;

export const isNewArch = function isNewArch() {
  if (undefined !== flag) {
    return flag;
  } else {
    let prop;
    if (null != global) {
      prop = global.nativeFabricUIManager;
    }
    const BooleanResult = Boolean(prop);
    if (null != global) {
      const __turboModuleProxy = global.__turboModuleProxy;
    }
    let BooleanResult1 = BooleanResult;
    if (!BooleanResult) {
      BooleanResult1 = Boolean(__turboModuleProxy);
    }
    let flag = BooleanResult1;
    if (!BooleanResult1) {
      flag = false;
    }
  }
};
