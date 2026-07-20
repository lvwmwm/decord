// Module ID: 13208
// Function ID: 100212
// Name: getReactNativeVersionWithModules
// Dependencies: []

// Module 13208 (getReactNativeVersionWithModules)
arg5.getReactNativeVersionWithModules = function getReactNativeVersionWithModules(constants) {
  if (constants) {
    if (constants.reactNativeVersion) {
      const major = constants.reactNativeVersion.major;
      const minor = constants.reactNativeVersion.minor;
      const patch = constants.reactNativeVersion.patch;
      const prerelease = constants.reactNativeVersion.prerelease;
      if ("number" !== typeof major) {
        return null;
      } else {
        const items = [];
        const _HermesInternal = HermesInternal;
        items.push("" + tmp5 + "." + minor + "." + patch);
        if (prerelease) {
          const _HermesInternal2 = HermesInternal;
          arr2.push("-" + prerelease);
        }
        return items.join("");
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
};
