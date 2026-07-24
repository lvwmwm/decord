// Module ID: 5355
// Function ID: 45964
// Name: isNewArch
// Dependencies: [27]
// Exports: isNewArch

// Module 5355 (isNewArch)
import { Platform } from "get ActivityIndicator";


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
    flag = BooleanResult1;
    if (!BooleanResult1) {
      flag = false;
    }
  }
};
