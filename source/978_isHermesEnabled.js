// Module ID: 978
// Function ID: 10601
// Name: isHermesEnabled
// Dependencies: [57, 27, 793, 973, 979]
// Exports: getDefaultEnvironment, getExpoGoVersion, getExpoSdkVersion, getHermesVersion, getReactNativeVersion, isExpo, isExpoGo, isFabricEnabled, isHermesEnabled, isMobileOs, isRunningInMetroDevServer, isTurboModuleEnabled, isWeb, notMobileOs, notWeb

// Module 978 (isHermesEnabled)
import _slicedToArray from "_slicedToArray";
import { Platform } from "get ActivityIndicator";

const require = arg1;

export const isHermesEnabled = function isHermesEnabled() {
  return require(793) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.HermesInternal;
};
export const isTurboModuleEnabled = function isTurboModuleEnabled() {
  let tmp = true === require(793) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.RN$Bridgeless;
  if (!tmp) {
    tmp = null != require(793) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.__turboModuleProxy;
  }
  return tmp;
};
export const isFabricEnabled = function isFabricEnabled() {
  return null != require(793) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.nativeFabricUIManager;
};
export const getReactNativeVersion = function getReactNativeVersion() {
  let major;
  let minor;
  let patch;
  if (require(973) /* reactNativeVersion */.ReactNativeLibraries.ReactNativeVersion) {
    const version = require(973) /* reactNativeVersion */.ReactNativeLibraries.ReactNativeVersion.version;
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
  return null != require(793) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.expo;
};
export const isExpoGo = function isExpoGo() {
  return require(979) /* getExpoConstants */.getExpoGo();
};
export const getExpoGoVersion = function getExpoGoVersion() {
  const expoConstants = require(979) /* getExpoConstants */.getExpoConstants();
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
  const expoConstants = require(979) /* getExpoConstants */.getExpoConstants();
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
  const _HermesInternal = require(793) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.HermesInternal;
  let getRuntimeProperties;
  if (null !== _HermesInternal) {
    if (undefined !== _HermesInternal) {
      getRuntimeProperties = _HermesInternal.getRuntimeProperties;
    }
  }
  let prop;
  if (null !== getRuntimeProperties) {
    if (undefined !== getRuntimeProperties) {
      prop = getRuntimeProperties.call(_HermesInternal)["OSS Release Version"];
    }
  }
  return prop;
};
export function getDefaultEnvironment() {
  return "production";
}
export const isRunningInMetroDevServer = function isRunningInMetroDevServer() {
  let tmp = undefined !== require(793) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.process;
  if (tmp) {
    const env = require(793) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.process.env;
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
