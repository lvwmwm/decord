// Module ID: 1053
// Function ID: 1054
// Dependencies: [685, 871]
// Exports: createReleaseFromGlobalReleaseConstants, getDefaultRelease

// Module 1053
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 685 */;
import _mod871 from "module_871" /* 871 */;

require = arg1;
const dependencyMap = arg6;

export const createReleaseFromGlobalReleaseConstants = function createReleaseFromGlobalReleaseConstants() {
  const SENTRY_RELEASE = RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.SENTRY_RELEASE;
  if (SENTRY_RELEASE) {
    ({ name, version } = SENTRY_RELEASE);
    if (name) {
      if (version) {
        const _HermesInternal = HermesInternal;
        return "" + name + "@" + version;
      }
    }
  }
};
export const getDefaultRelease = function getDefaultRelease() {
  if (!obj.notWeb()) {
    const SENTRY_RELEASE = RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.SENTRY_RELEASE;
    let combined;
    if (SENTRY_RELEASE) {
      ({ name, version } = SENTRY_RELEASE);
      if (name) {
        if (version) {
          const _HermesInternal = HermesInternal;
          combined = "" + name + "@" + version;
        }
      }
    }
    return combined;
  }
  obj = _mod871;
};
