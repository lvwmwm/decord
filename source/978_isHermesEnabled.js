// Module ID: 978
// Function ID: 10600
// Name: isHermesEnabled
// Dependencies: []
// Exports: getDefaultEnvironment, getExpoGoVersion, getExpoSdkVersion, getHermesVersion, getReactNativeVersion, isExpo, isExpoGo, isFabricEnabled, isHermesEnabled, isMobileOs, isRunningInMetroDevServer, isTurboModuleEnabled, isWeb, notMobileOs, notWeb

// Module 978 (isHermesEnabled)
let closure_2 = importDefault(dependencyMap[0]);
const Platform = arg1(dependencyMap[1]).Platform;

export const isHermesEnabled = function isHermesEnabled() {
  return arg1(dependencyMap[2]).RN_GLOBAL_OBJ.HermesInternal;
};
export const isTurboModuleEnabled = function isTurboModuleEnabled() {
  let tmp = true === arg1(dependencyMap[2]).RN_GLOBAL_OBJ.RN$Bridgeless;
  if (!tmp) {
    tmp = null != arg1(dependencyMap[2]).RN_GLOBAL_OBJ.__turboModuleProxy;
  }
  return tmp;
};
export const isFabricEnabled = function isFabricEnabled() {
  return null != arg1(dependencyMap[2]).RN_GLOBAL_OBJ.nativeFabricUIManager;
};
export const getReactNativeVersion = function getReactNativeVersion() {
  let major;
  let minor;
  let patch;
  if (arg1(dependencyMap[3]).ReactNativeLibraries.ReactNativeVersion) {
    const version = arg1(dependencyMap[3]).ReactNativeLibraries.ReactNativeVersion.version;
    ({ major, minor, patch } = version);
    let str2 = "";
    if (null != version.prerelease) {
      const _HermesInternal = HermesInternal;
      str2 = "-" + version.prerelease;
    }
    const _HermesInternal2 = HermesInternal;
    return "" + major + "." + minor + "." + patch + str2;
  }
};
export const isExpo = function isExpo() {
  return null != arg1(dependencyMap[2]).RN_GLOBAL_OBJ.expo;
};
export const isExpoGo = function isExpoGo() {
  return arg1(dependencyMap[4]).getExpoGo();
};
export const getExpoGoVersion = function getExpoGoVersion() {
  const expoConstants = arg1(dependencyMap[4]).getExpoConstants();
  let expoVersion;
  if (null != expoConstants) {
    expoVersion = expoConstants.expoVersion;
  }
  let expoVersion1;
  if ("string" === typeof expoVersion) {
    expoVersion1 = expoConstants.expoVersion;
  }
  return expoVersion1;
};
export const getExpoSdkVersion = function getExpoSdkVersion() {
  const expoConstants = arg1(dependencyMap[4]).getExpoConstants();
  let manifest;
  if (null != expoConstants) {
    manifest = expoConstants.manifest;
  }
  let runtimeVersion;
  if (null !== manifest) {
    if (undefined !== manifest) {
      runtimeVersion = manifest.runtimeVersion;
    }
  }
  if ("string" === typeof runtimeVersion) {
    let parts = expoConstants.manifest.runtimeVersion.split(":");
    const str = expoConstants.manifest.runtimeVersion;
  } else {
    parts = [];
  }
  return callback(parts, 2)[1];
};
export function isWeb() {
  return false;
}
export function notWeb() {
  return true;
}
export function isMobileOs() {
  return true;
}
export function notMobileOs() {
  return false;
}
export const getHermesVersion = function getHermesVersion() {
  const _HermesInternal = arg1(dependencyMap[2]).RN_GLOBAL_OBJ.HermesInternal;
  let getRuntimeProperties;
  if (null !== _HermesInternal) {
    if (undefined !== _HermesInternal) {
      getRuntimeProperties = _HermesInternal.getRuntimeProperties;
    }
  }
  let prop;
  if (null !== getRuntimeProperties) {
    if (undefined !== getRuntimeProperties) {
      prop = getRuntimeProperties.call(_HermesInternal).OSS Release Version;
    }
  }
  return prop;
};
export function getDefaultEnvironment() {
  return "production";
}
export const isRunningInMetroDevServer = function isRunningInMetroDevServer() {
  let tmp = undefined !== arg1(dependencyMap[2]).RN_GLOBAL_OBJ.process;
  if (tmp) {
    const env = arg1(dependencyMap[2]).RN_GLOBAL_OBJ.process.env;
    let prop;
    if (null !== env) {
      if (undefined !== env) {
        prop = env.___SENTRY_METRO_DEV_SERVER___;
      }
    }
    tmp = "true" === prop;
  }
  return tmp;
};
