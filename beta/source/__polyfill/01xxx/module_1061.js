// Module ID: 1061
// Function ID: 1062
// Dependencies: [693, 879]
// Exports: createReleaseFromGlobalReleaseConstants, getDefaultRelease

// Module 1061
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 693 */;
import _mod879 from "module_879" /* 879 */;


export const createReleaseFromGlobalReleaseConstants = function createReleaseFromGlobalReleaseConstants() {
  let name;
  let version;
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
  let name;
  let version;
  const obj = _mod879;
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
};
