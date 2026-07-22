// Module ID: 641
// Function ID: 7342
// Name: isMetaQuestRuntime
// Dependencies: []

// Module 641 (isMetaQuestRuntime)
function isMetaQuestRuntime() {
  let isMetaQuestResult;
  const _default = require(dependencyMap[4]).default;
  if (null != _default) {
    isMetaQuestResult = _default.isMetaQuest();
  }
  return true === isMetaQuestResult;
}
function getOS() {
  let str = "Android";
  if (isMetaQuestRuntime()) {
    str = "Horizon OS";
  }
  return str;
}
function getDevice() {
  const tmp = require(dependencyMap[5]);
  if ("android" === tmp.Platform.OS) {
    let device = require(dependencyMap[6]).default.getConstants().device;
    const _default = require(dependencyMap[6]).default;
  } else {
    device = tmp.NativeModules.DCDDeviceManager.device;
  }
  return device;
}
function getDeviceProperties() {
  let DeviceVendorID;
  let ReleaseChannel;
  let Version;
  let userAgent;
  let vendor;
  const obj = {};
  const tmp2 = getOS();
  obj.os = tmp2;
  ({ userAgent, vendor } = window.navigator);
  let str = "Discord Android";
  if (isMetaQuestRuntime()) {
    str = "Discord VR";
  }
  obj.browser = str;
  obj.device = getDevice();
  obj.system_locale = getSystemLocale();
  obj.has_client_mods = require(dependencyMap[1]).usesClientMods();
  const tmp3 = require(dependencyMap[5]);
  if ("android" === tmp3.Platform.OS) {
    let constants = require(dependencyMap[7]).default.getConstants();
    const _default = require(dependencyMap[7]).default;
  } else {
    const InfoDictionaryManager = tmp3.NativeModules.InfoDictionaryManager;
    constants = InfoDictionaryManager.getConstants();
  }
  let str2 = "";
  ({ Version, ReleaseChannel, DeviceVendorID } = constants);
  if ("Android" === tmp2) {
    str2 = " - rn";
  }
  obj.client_version = Version + str2;
  obj.release_channel = ReleaseChannel;
  obj.device_vendor_id = DeviceVendorID;
  obj.design_id = require(dependencyMap[8]).DesignIds.DESIGN_TABS_IA;
}
function extendSuperProperties(arg0) {
  const merged = Object.assign(closure_3);
  const merged1 = Object.assign(arg0);
  closure_3 = {};
  let closure_4 = require(dependencyMap[11]).encodeProperties(closure_3);
}
const getSystemLocale = require(dependencyMap[0]).getSystemLocale;
if (null != DiscordNative) {
  const app2 = DiscordNative.app;
  const platform = DiscordNative.process.platform;
  const app3 = DiscordNative.app;
  const version = app2.getVersion();
  let str5 = app3.getReleaseChannel();
  let str3 = "Windows";
  const systemLocale = getSystemLocale();
  if ("win32" !== platform) {
    if ("darwin" === platform) {
      str3 = "Mac OS X";
    } else {
      str3 = "linux" === platform ? "Linux" : platform;
    }
  }
  let obj = { os: str3, browser: "Discord Client" };
  if (!str5) {
    str5 = "unknown";
  }
  obj.release_channel = str5;
  obj.client_version = version;
  obj.os_version = DiscordNative.os.release;
  obj.os_arch = DiscordNative.os.arch;
  obj.app_arch = DiscordNative.os.appArch;
  obj.system_locale = systemLocale;
  const _module = require(dependencyMap[1]);
  obj.has_client_mods = _module.usesClientMods();
  obj.client_launch_id = require(dependencyMap[2]).clientLaunchId;
  let closure_3 = obj;
  const name = importDefault(dependencyMap[3]).name;
  let toLocaleLowerCaseResult;
  if (null != name) {
    toLocaleLowerCaseResult = name.toLocaleLowerCase();
  }
  if ("electron" === toLocaleLowerCaseResult) {
    closure_3.browser_user_agent = importDefault(dependencyMap[3]).ua || "";
    const tmp3 = closure_3;
    const tmp4 = importDefault(dependencyMap[3]).ua || "";
    const tmp5 = closure_3;
    tmp5.browser_version = importDefault(dependencyMap[3]).version || "";
    const tmp6 = importDefault(dependencyMap[3]).version || "";
  }
  if ("linux" === platform) {
    const crashReporter = DiscordNative.crashReporter;
    const metadata = crashReporter.getMetadata();
    closure_3.window_manager = metadata.wm;
    closure_3.distro = metadata.distro;
    closure_3.runtime_environment = metadata.runtime_environment;
    closure_3.display_server = metadata.display_server;
  } else if ("darwin" === platform) {
    let first;
    if (null != str13) {
      first = str13.split(".")[0];
    }
    closure_3.os_sdk_version = first;
    const tmp8 = closure_3;
  } else if ("win32" === platform) {
    let tmp7;
    if (null != str13) {
      tmp7 = str13.split(".")[2];
    }
    closure_3.os_sdk_version = tmp7;
    const tmp22 = closure_3;
  }
}
let closure_6 = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
if (null == closure_3) {
  closure_3 = function getCachedSuperProperties() {
    const Storage = require(dependencyMap[9]).Storage;
    let value = Storage.get("deviceProperties");
    if (null == value) {
      const tmp3 = getDeviceProperties();
      const Storage2 = require(dependencyMap[9]).Storage;
      const result = Storage2.set("deviceProperties", tmp3);
      value = tmp3;
    }
    const Storage3 = require(dependencyMap[9]).Storage;
    value = Storage3.get("referralProperties");
    if (null == value) {
      let obj = {};
      const Storage4 = require(dependencyMap[9]).Storage;
      const result1 = Storage4.set("referralProperties", obj);
      value = obj;
    }
    const SessionStorage = require(dependencyMap[10]).SessionStorage;
    let value1 = SessionStorage.get("referralProperties");
    if (null == value1) {
      const tmp12 = function suffixObjectKeys(arg0, _current) {
        let closure_1 = "_current";
        const obj = {};
        const keys = Object.keys(arg0);
        const mapped = keys.map((arg0) => {
          obj["" + arg0 + closure_1] = arg0[arg0];
          return arg0[arg0];
        });
        return obj;
      }({}, "_current");
      const SessionStorage2 = require(dependencyMap[10]).SessionStorage;
      const result2 = SessionStorage2.set("referralProperties", tmp12);
      value1 = tmp12;
    }
    obj = {};
    const merged = Object.assign(value);
    obj = { browser_user_agent: tmp17, browser_version: importDefault(dependencyMap[3]).version || "" };
    const tmp19 = require(dependencyMap[5]);
    const obj1 = {};
    const merged1 = Object.assign(obj);
    if ("android" === tmp19.Platform.OS) {
      let str2 = require(dependencyMap[6]).default.getConstants().systemVersion;
      const _default = require(dependencyMap[6]).default;
    } else {
      str2 = tmp19.NativeModules.DCDDeviceManager.systemVersion;
    }
    if (!str2) {
      str2 = "";
    }
    obj1["os_version"] = str2;
    const merged2 = Object.assign(obj1);
    const merged3 = Object.assign(value);
    const merged4 = Object.assign(value1);
    return obj;
  }();
}
while (true) {
  obj = {};
  let _window = window;
  let _parseInt = parseInt;
  let str11 = "6051";
  let num4 = 10;
  let parsed = parseInt("6051", 10);
  let _isNaN = isNaN;
  if (isNaN(parsed)) {
    break;
  } else {
    obj.client_build_number = parsed;
    // break
  }
  let buildNumber;
  if (null != DiscordNative) {
    let app = DiscordNative.app;
    buildNumber = app.getBuildNumber();
  }
  let isNaNResult = null == buildNumber;
  if (!isNaNResult) {
    let _isNaN2 = isNaN;
    isNaNResult = isNaN(buildNumber);
  }
  if (!isNaNResult) {
    obj.native_build_number = buildNumber;
  }
  obj.client_event_source = null;
  let num5 = 1;
  let _module1 = require(dependencyMap[1]);
  obj.has_client_mods = _module1.usesClientMods();
  let num6 = 2;
  obj.client_launch_id = require(dependencyMap[2]).clientLaunchId;
  let result = extendSuperProperties(obj);
  let num7 = 12;
  let _module2 = require(dependencyMap[12]);
  let str12 = "../discord_common/js/packages/analytics-utils/getSuperProperties.tsx";
  let result1 = _module2.fileFinishedImporting("../discord_common/js/packages/analytics-utils/getSuperProperties.tsx");
  exports.getOS = getOS;
  exports.getDevice = getDevice;
  exports.getCampaignParams = function getCampaignParams(arg0) {
    const require = arg0;
    const obj = {};
    const importDefault = obj;
    const item = closure_6.forEach((str) => {
      str = "";
      if (null != str) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("[\\?&]" + str.replace(/[[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)");
        const match = regExp.exec(tmp);
        let str7 = "";
        if (null !== match) {
          if ("string" === typeof match[1]) {
            const _decodeURIComponent = decodeURIComponent;
            str7 = decodeURIComponent(match[1]).replace(/\+/g, " ");
            const str9 = decodeURIComponent(match[1]);
          } else {
            str7 = "";
          }
        }
        str = str7;
        const str3 = str.replace(/[[]/, "\\[");
      }
      if (str.length > 0) {
        obj[str] = str;
      }
    });
    return obj;
  };
  exports.extendSuperProperties = extendSuperProperties;
  exports.getSuperProperties = function getSuperProperties() {
    return closure_3;
  };
  exports.getSuperPropertiesBase64 = function getSuperPropertiesBase64() {
    return closure_4;
  };
}
