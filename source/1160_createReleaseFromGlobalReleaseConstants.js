// Module ID: 1160
// Function ID: 13203
// Name: createReleaseFromGlobalReleaseConstants
// Dependencies: [793, 978]

// Module 1160 (createReleaseFromGlobalReleaseConstants)
const require = arg1;
const dependencyMap = arg6;
function createReleaseFromGlobalReleaseConstants() {
  let name;
  let version;
  const SENTRY_RELEASE = require(793) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.SENTRY_RELEASE;
  if (SENTRY_RELEASE) {
    ({ name, version } = SENTRY_RELEASE);
    if (name) {
      if (version) {
        const _HermesInternal = HermesInternal;
        return "" + name + "@" + version;
      }
    }
  }
}
arg5.createReleaseFromGlobalReleaseConstants = createReleaseFromGlobalReleaseConstants;
arg5.getDefaultRelease = function getDefaultRelease() {
  if (!obj.notWeb()) {
    return createReleaseFromGlobalReleaseConstants();
  }
  obj = require(978) /* isHermesEnabled */;
};
