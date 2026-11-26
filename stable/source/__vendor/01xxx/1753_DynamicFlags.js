// Module ID: 1753
// Function ID: 1754
// Name: DynamicFlags
// Dependencies: [1712, 1723]
// Exports: getDynamicFeatureFlag, getStaticFeatureFlag, setDynamicFeatureFlag

// Module 1753 (DynamicFlags)
import WorkletsModule2 from "WorkletsModule" /* 1712 */;
import logger2 from "logger" /* 1723 */;

const DynamicFlags = {
  EXAMPLE_DYNAMIC_FLAG: true,
  init() {
    const keys = Object.keys(obj);
    const item = keys.forEach((item) => {
      const tmp = "init" !== item && "setFlag" !== item && "getFlag" !== item;
      if (tmp) {
        const WorkletsModule = WorkletsModule2.WorkletsModule;
        const result = WorkletsModule.setDynamicFeatureFlag(item, DynamicFlags[item]);
      }
    });
  },
  setFlag(arg0, arg1) {
    if (arg0 in obj) {
      tmp[arg0] = arg1;
      const WorkletsModule = WorkletsModule2.WorkletsModule;
      const result = WorkletsModule.setDynamicFeatureFlag(arg0, arg1);
    } else {
      const logger = logger2.logger;
      const _HermesInternal = HermesInternal;
      logger.warn("The feature flag: '" + arg0 + "' no longer exists, you can safely remove invocation of `setDynamicFeatureFlag('" + arg0 + "')` from your code.");
    }
  },
  getFlag(arg0) {
    let flag;
    if (arg0 in obj) {
      flag = obj[arg0];
    } else {
      const logger = logger2.logger;
      const _HermesInternal = HermesInternal;
      logger.warn("The feature flag: '" + arg0 + "' no longer exists, you can safely remove invocation of `getDynamicFeatureFlag('" + arg0 + "')` from your code.");
      flag = false;
    }
    return flag;
  }
};
DynamicFlags.init();
let closure_3 = {};

export { DynamicFlags };
export function setDynamicFeatureFlag(arg0, arg1) {
  obj.setFlag(arg0, arg1);
}
export function getDynamicFeatureFlag(arg0) {
  return obj.getFlag(arg0);
}
export function getStaticFeatureFlag(arg0) {
  if (arg0 in closure_3) {
    return closure_3[arg0];
  } else {
    const WorkletsModule = WorkletsModule2.WorkletsModule;
    const staticFeatureFlag = WorkletsModule.getStaticFeatureFlag(arg0);
    closure_3[arg0] = staticFeatureFlag;
    return staticFeatureFlag;
  }
}
