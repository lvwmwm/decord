// Module ID: 1350
// Function ID: 1351
// Name: getOSVersionProperties
// Dependencies: [2]
// Exports: getDesktopOSVersionProperties, getNativeOSVersionProperties

// Module 1350 (getOSVersionProperties)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/getOSVersionProperties.tsx");

export function getNativeOSVersionProperties(systemVersion, tmpResult2) {
  let str;
  let tmp3;
  const tmp = tmpResult2;
  if (tmp) {
    str = systemVersion.systemVersion;
  } else {
    str = systemVersion.osVersion;
    if (str == null) {
      str = "";
    }
  }
  const obj = { os_version: str, os_version_is_release: tmp3, os_sdk_version: systemVersion };
  tmp3 = tmpResult2 || null != systemVersion.osVersion;
  if (tmpResult2) {
    systemVersion = systemVersion.osSdkVersion || undefined;
  } else {
    systemVersion = systemVersion.systemVersion;
  }
  return obj;
}
export function getDesktopOSVersionProperties(platform, release, systemVersion) {
  let obj3;
  let obj5;
  let tmp = systemVersion;
  if (systemVersion == null) {
    let str = "";
    if ("darwin" !== platform) {
      str = release;
    }
    tmp = str;
  }
  const obj = { os_version: tmp, os_version_is_release: "darwin" !== platform || null != systemVersion };
  if ("darwin" === platform) {
    obj3 = { os_sdk_version: release.split(".")[0] };
    const obj2 = { os_sdk_version: release.split(".")[0] };
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  if ("win32" === platform) {
    obj5 = { os_sdk_version: release.split(".")[2] };
    const obj4 = { os_sdk_version: release.split(".")[2] };
  } else {
    obj5 = {};
  }
  const merged1 = Object.assign(obj5);
  return obj;
}
