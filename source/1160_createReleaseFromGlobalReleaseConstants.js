// Module ID: 1160
// Function ID: 13201
// Name: createReleaseFromGlobalReleaseConstants
// Dependencies: []

// Module 1160 (createReleaseFromGlobalReleaseConstants)
function createReleaseFromGlobalReleaseConstants() {
  let name;
  let version;
  const SENTRY_RELEASE = arg1(arg6[0]).RN_GLOBAL_OBJ.SENTRY_RELEASE;
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
  const obj = arg1(arg6[1]);
};
