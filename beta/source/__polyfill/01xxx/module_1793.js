// Module ID: 1793
// Function ID: 1794
// Dependencies: [1663, 1665]
// Exports: getDynamicFeatureFlag, getStaticFeatureFlag, setDynamicFeatureFlag

// Module 1793
import ReanimatedModule2 from "ReanimatedModule" /* 1663 */;
import _mod1665 from "module_1665" /* 1665 */;

const DynamicFlags = {
  EXAMPLE_DYNAMIC_FLAG: true,
  TRACK_SYNCHRONOUS_PROPS_IN_LAYOUT_ANIMATIONS: false,
  init() {
    const keys = Object.keys(obj);
    const item = keys.forEach((item) => {
      const tmp = "init" !== item && "setFlag" !== item && "getFlag" !== item;
      if (tmp) {
        const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
        const result = ReanimatedModule.setDynamicFeatureFlag(item, DynamicFlags[item]);
      }
    });
  },
  setFlag(arg0, arg1) {
    if (arg0 in obj) {
      tmp[arg0] = arg1;
      const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
      const result = ReanimatedModule.setDynamicFeatureFlag(arg0, arg1);
    } else {
      const logger = _mod1665.logger;
      const _HermesInternal = HermesInternal;
      logger.warn("The feature flag: '" + arg0 + "' no longer exists, you can safely remove invocation of `setDynamicFeatureFlag('" + arg0 + "')` from your code.");
    }
  },
  getFlag(arg0) {
    let flag;
    if (arg0 in obj) {
      flag = obj[arg0];
    } else {
      const logger = _mod1665.logger;
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
    const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
    const staticFeatureFlag = ReanimatedModule.getStaticFeatureFlag(arg0);
    closure_3[arg0] = staticFeatureFlag;
    return staticFeatureFlag;
  }
}
