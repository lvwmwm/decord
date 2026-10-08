// Module ID: 1359
// Function ID: 1360
// Name: getSuperProperties
// Dependencies: [1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 510, 1368, 1357, 2]
// Exports: extendSuperProperties, getCampaignParams, getSuperProperties, getSuperPropertiesBase64

// Module 1359 (getSuperProperties)
import Storage5 from "Storage" /* 510 */;
import encodeProperties from "encodeProperties" /* 1357 */;
import react_native from "react-native" /* 1360 */;
import ClientModDetectionUtils from "ClientModDetectionUtils" /* 1361 */;
import clientLaunchId from "clientLaunchId" /* 1362 */;
import _modDef1363 from "module_1363" /* 1363 */;
import react_native2 from "react-native" /* 1364 */;
import react_native3 from "react-native" /* 1365 */;
import react_native4 from "react-native" /* 1366 */;
import DesignIds from "DesignIds" /* 1367 */;
import size from "module_2" /* 2 */;

let closure_4, constants;

let _module;
let obj;
let tmp;
const SessionStorage3 = tmp(1368);
function getCachedSuperProperties() {
  let _default;
  function getDeviceProperties() {
    let DeviceVendorID;
    let ReleaseChannel;
    let Version;
    let obj2;
    let tmp;
    obj = { os: tmp, browser: getBrowser(), device: getDevice(), system_locale: getSystemLocale(), has_client_mods: obj2.usesClientMods() };
    tmp = getOS();
    obj2 = ClientModDetectionUtils;
    try {
      const _default = react_native4.default;
      constants = _default.getConstants();
      let str = "";
      ({ Version, ReleaseChannel, DeviceVendorID } = constants);
      if ("Android" === tmp) {
        str = " - rn";
      }
      obj.client_version = Version + str;
      obj.release_channel = ReleaseChannel;
      obj.device_vendor_id = DeviceVendorID;
      obj.design_id = DesignIds.DesignIds.DESIGN_TABS_IA;
    } catch (err) {
    }
    return obj;
  }
  let tmp = require;
  const Storage = Storage5.Storage;
  let value = Storage.get(deviceProperties);
  const tmp3 = deviceProperties;
  if (null == value) {
    const tmp5 = getDeviceProperties();
    const Storage2 = Storage5.Storage;
    const result = Storage2.set(tmp3, tmp5);
    value = tmp5;
  }
  const Storage3 = Storage5.Storage;
  let value3 = Storage3.get(referralProperties);
  if (null == value3) {
    obj = {};
    const Storage4 = Storage5.Storage;
    const result1 = Storage4.set(tmp7, obj);
    value3 = obj;
  }
  const SessionStorage = SessionStorage3.SessionStorage;
  let value4 = SessionStorage.get(tmp7);
  if (null == value4) {
    let obj2 = {};
    const obj3 = {};
    const _Object = Object;
    const keys = Object.keys(obj2);
    const mapped = keys.map((item) => {
      obj3["" + item + "_current"] = obj2[item];
      return obj2[item];
    });
    const SessionStorage2 = SessionStorage3.SessionStorage;
    const result2 = SessionStorage2.set(tmp7, obj3);
    value4 = obj3;
  }
  const obj4 = { browser_user_agent: window.navigator.userAgent || "", browser_version: _modDef1363.version || "", os_version: _default.getConstants().systemVersion || "" };
  const merged = Object.assign(value);
  _modDef1363.version || "";
  _default = react_native3.default;
  _default.getConstants().systemVersion || "";
  const merged1 = Object.assign(value3);
  const merged2 = Object.assign(value4);
  return obj4;
}
function getContextualSuperProperties() {
  let obj2;
  obj = { client_build_number: parseInt("35020200000000", 10), client_event_source: null, has_client_mods: obj2.usesClientMods(), client_launch_id: clientLaunchId.clientLaunchId };
  let buildNumber;
  if (DiscordNative != null) {
    const app = DiscordNative.app;
    buildNumber = app.getBuildNumber();
  }
  let isNaNResult = null == buildNumber;
  if (!isNaNResult) {
    const _isNaN = isNaN;
    isNaNResult = isNaN(buildNumber);
  }
  if (!isNaNResult) {
    obj.native_build_number = buildNumber;
  }
  obj2 = ClientModDetectionUtils;
  return obj;
}
function getOS() {
  const _default = react_native2.default;
  let isMetaQuestResult;
  if (_default != null) {
    isMetaQuestResult = _default.isMetaQuest();
  }
  let str = "Android";
  if (true === isMetaQuestResult) {
    str = "Horizon OS";
  }
  return str;
}
function getBrowser() {
  let userAgent;
  let vendor;
  ({ userAgent, vendor } = window.navigator);
  const _default = react_native2.default;
  let isMetaQuestResult;
  if (_default != null) {
    isMetaQuestResult = _default.isMetaQuest();
  }
  let str = "Discord Android";
  if (true === isMetaQuestResult) {
    str = "Discord VR";
  }
  return str;
}
function getDevice() {
  const _default = react_native3.default;
  return _default.getConstants().device;
}
const getSystemLocale = react_native.getSystemLocale;
const deviceProperties = "deviceProperties";
const referralProperties = "referralProperties";
if (null != DiscordNative) {
  let app = DiscordNative.app;
  const platform = DiscordNative.process.platform;
  const app2 = DiscordNative.app;
  const version = app.getVersion();
  const arch = DiscordNative.os.arch;
  const appArch = DiscordNative.os.appArch;
  let str4 = app2.getReleaseChannel();
  let str3 = "Windows";
  const systemLocale = getSystemLocale();
  if ("win32" !== platform) {
    let str = "darwin";
    if ("darwin" === platform) {
      str3 = "Mac OS X";
    } else {
      str3 = "linux" === platform ? "Linux" : platform;
    }
  }
  obj = { os: str3, browser: "Discord Client", release_channel: str4, client_version: version, os_version: DiscordNative.os.release, os_arch: arch, app_arch: appArch, system_locale: systemLocale, has_client_mods: _module.usesClientMods(), client_launch_id: clientLaunchId.clientLaunchId };
  if (!str4) {
    str4 = "unknown";
  }
  _module = ClientModDetectionUtils;
  const name = _modDef1363.name;
  let toLocaleLowerCaseResult;
  if (name != null) {
    toLocaleLowerCaseResult = name.toLocaleLowerCase();
  }
  if ("electron" === toLocaleLowerCaseResult) {
    let tmp3 = obj;
    tmp3.browser_user_agent = _modDef1363.ua || "";
    let tmp5 = obj;
    _modDef1363.ua || "";
    tmp5.browser_version = _modDef1363.version || "";
    _modDef1363.version || "";
  }
  if ("linux" === platform) {
    const crashReporter = DiscordNative.crashReporter;
    const metadata = crashReporter.getMetadata();
    obj.window_manager = metadata.wm;
    obj.distro = metadata.distro;
    obj.runtime_environment = metadata.runtime_environment;
    obj.display_server = metadata.display_server;
  } else {
    let str7 = "darwin";
    if ("darwin" === platform) {
      let first;
      const tmp8 = obj;
      if (DiscordNative.os.release != null) {
        first = str10.split(".")[0];
      }
      tmp8.os_sdk_version = first;
    } else if ("win32" === platform) {
      let tmp7;
      const tmp19 = obj;
      if (DiscordNative.os.release != null) {
        let str8 = ".";
        tmp7 = str10.split(".")[2];
      }
      tmp19.os_sdk_version = tmp7;
    }
  }
}
let closure_12 = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
if (null == obj) {
  try {
    obj = getCachedSuperProperties();
  } catch (err) {
    obj = {};
  }
}
function extendSuperProperties(arg0) {
  obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
  const obj2 = encodeProperties;
  closure_4 = obj2.encodeProperties(obj);
}
let result = extendSuperProperties(getContextualSuperProperties());
let result1 = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/getSuperProperties.tsx");

export { getOS };
export { getBrowser };
export { getDevice };
export const getCampaignParams = function getCampaignParams(arg0) {
  let closure_0 = arg0;
  obj = {};
  const item = closure_12.forEach(function(item) {
    let str = "";
    if (null != closure_0) {
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const str3 = item.replace(/[[]/, "\\[");
      const regExp = new RegExp("[\\?&]" + str3.replace(/[\]]/, "\\]") + "=([^&#]*)");
      const match = regExp.exec(tmp);
      let str7 = "";
      if (null !== match) {
        if (typeof match[1] === "string") {
          const _decodeURIComponent = decodeURIComponent;
          const str8 = decodeURIComponent(match[1]);
          str7 = str8.replace(/\+/g, " ");
        } else {
          str7 = "";
        }
      }
      str = str7;
    }
    if (str.length > 0) {
      obj[item] = str;
    }
  });
  return obj;
};
export { extendSuperProperties };
export function getSuperProperties() {
  return obj;
}
export function getSuperPropertiesBase64() {
  return closure_4;
}
