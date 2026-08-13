// Module ID: 14811
// Function ID: 14812
// Name: getClientInfo
// Dependencies: [10368, 21, 1625, 4310, 11237, 5796, 4061, 5804, 5436, 1236, 5806, 4290, 4322, 10407, 8473, 4034, 2]
// Exports: getClientInfoString

// Module 14811 (getClientInfo)
import getCurrentBuildOverride from "getCurrentBuildOverride";
import jsxProd from "jsxProd";
import createToggle from "createToggle";
import importAllResult from "getConstants";

let c4;
let c5;
const require = arg1;
function getClientInfo() {
  const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
  let tmp;
  if (overrides != null) {
    tmp = overrides[require(undefined, 11237) /* setBuildOverrideForBranch */.DEVICE_FIELD];
  }
  let str2 = "N/A";
  if (str.trim().length > 0) {
    str2 = tmp4.Manifest;
  }
  const Build = tmp4.Build;
  let str3 = "N/A";
  if (null != Build) {
    str3 = "N/A";
    if ("" !== Build) {
      str3 = Build;
    }
  }
  let str5 = "N/A";
  if (null != tmp) {
    str5 = tmp.id;
  }
  let str6 = "N/A";
  if (null != str5) {
    str6 = "N/A";
    if ("" !== str5) {
      str6 = str5;
    }
  }
  const Version = tmp4.Version;
  let str8 = "N/A";
  if (null != Version) {
    str8 = "N/A";
    if ("" !== Version) {
      str8 = Version;
    }
  }
  const obj = { appVersion: str8, buildNumber: str3, buildOverride: str6, manifest: str2, releaseChannel: null };
  const ReleaseChannel = tmp4.ReleaseChannel;
  let str10 = "N/A";
  if (null != ReleaseChannel) {
    str10 = "N/A";
    if ("" !== ReleaseChannel) {
      str10 = ReleaseChannel;
    }
  }
  obj[4] = str10;
  return obj;
}
function ClientClientInfoActionSheet() {
  let obj = { header: null, startExpanded: true, children: null };
  obj = { title: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.Na2lF9);
  obj[0] = callback(require(5436) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: false, children: null };
  const obj1 = { label: null, subLabel: null, onPress: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[0] = intl2.string(require(1236) /* getSystemLocale */.t.H66MEk);
  obj1[1] = getClientInfo().appVersion;
  obj1[2] = function onPress() {
    callback(5796).copy(callback2().appVersion);
    const obj = callback(5796);
    const result = callback(4061).presentCopiedToClipboard();
  };
  const items = [callback(require(5806) /* ActionSheetRowIcon */.ActionSheetRow, obj1), , , , ];
  let obj2 = { label: null, subLabel: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj2[0] = intl3.string(require(1236) /* getSystemLocale */.t.zuaWIt);
  obj2[1] = getClientInfo().buildNumber;
  obj2[2] = function onPress() {
    callback(5796).copy(callback2().buildNumber);
    const obj = callback(5796);
    const result = callback(4061).presentCopiedToClipboard();
  };
  items[1] = callback(require(5806) /* ActionSheetRowIcon */.ActionSheetRow, obj2);
  let obj3 = { label: null, subLabel: null, onPress: null };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj3[0] = intl4.string(require(1236) /* getSystemLocale */.t["YD/2+H"]);
  obj3[1] = getClientInfo().releaseChannel;
  obj3[2] = function onPress() {
    callback(5796).copy(callback2().releaseChannel);
    const obj = callback(5796);
    const result = callback(4061).presentCopiedToClipboard();
  };
  items[2] = callback(require(5806) /* ActionSheetRowIcon */.ActionSheetRow, obj3);
  const obj4 = { label: null, subLabel: null, onPress: null };
  const intl5 = require(1236) /* getSystemLocale */.intl;
  obj4[0] = intl5.string(require(1236) /* getSystemLocale */.t["4bhpIV"]);
  obj4[1] = getClientInfo().manifest;
  obj4[2] = function onPress() {
    callback(5796).copy(callback2().manifest);
    const obj = callback(5796);
    const result = callback(4061).presentCopiedToClipboard();
  };
  items[3] = callback(require(5806) /* ActionSheetRowIcon */.ActionSheetRow, obj4);
  const obj5 = { label: null, subLabel: null, onPress: null };
  const intl6 = require(1236) /* getSystemLocale */.intl;
  obj5[0] = intl6.string(require(1236) /* getSystemLocale */.t.Wj3LW4);
  obj5[1] = getClientInfo().buildOverride;
  obj5[2] = function onPress() {
    callback(5796).copy(callback2().buildOverride);
    const obj = callback(5796);
    const result = callback(4061).presentCopiedToClipboard();
  };
  items[4] = callback(require(5806) /* ActionSheetRowIcon */.ActionSheetRow, obj5);
  obj[1] = items;
  const items1 = [callback2(require(5806) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj), ];
  const obj6 = { hasIcons: true, children: null };
  const obj7 = { icon: null, label: null, onPress: null };
  obj7[0] = callback(require(4290) /* CopyIcon */.CopyIcon, {});
  const intl7 = require(1236) /* getSystemLocale */.intl;
  obj7[1] = intl7.string(require(1236) /* getSystemLocale */.t["7dqZ6H"]);
  obj7[2] = function onPress() {
    let appVersion;
    let buildNumber;
    let buildOverride;
    let manifest;
    let releaseChannel;
    const tmp = callback2();
    ({ appVersion, buildNumber } = tmp);
    ({ releaseChannel, buildOverride, manifest } = tmp);
    const deviceInfo = callback(4322).getDeviceInfo();
    const obj = callback(4322);
    const combined = "App: " + appVersion + " (" + buildNumber + ") " + releaseChannel + "; Manifest: " + manifest + "; Build Override: " + buildOverride + "; " + "Device: " + deviceInfo + " OS " + callback(4322).getSystemVersion() + ";";
    const obj2 = callback(4322);
    callback(5796).copy(combined);
    const obj3 = callback(5796);
    const result = callback(4061).presentCopiedToClipboard();
  };
  obj6[1] = callback(require(5806) /* ActionSheetRowIcon */.ActionSheetRow, obj7);
  items1[1] = callback(require(5806) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj6);
  obj[2] = items1;
  return callback2(require(5804) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
const constants = require("getConstants").getConstants();
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Na2lF9);
  },
  parent: null,
  IconComponent: require("ClipboardListIcon").ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    let obj = importDefault(4310);
    obj = { default: ClientClientInfoActionSheet };
    obj.openLazy(Promise.resolve(obj), "ClientClientInfoActionSheet");
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting,
  withArrow: true
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Na2lF9);
  },
  parent: null,
  IconComponent: require("ClipboardListIcon").ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    let obj = importDefault(4310);
    obj = { default: ClientClientInfoActionSheet };
    obj.openLazy(Promise.resolve(obj), "ClientClientInfoActionSheet");
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting,
  withArrow: true
};
let result = require("getConstants").fileFinishedImporting("modules/user_settings/defs/native/CopyClientInfoSetting.tsx");

export default pressable;
export const getClientInfoString = function getClientInfoString(ReleaseChannel) {
  let str = "N/A";
  if (null != ReleaseChannel) {
    str = "N/A";
    if ("" !== ReleaseChannel) {
      str = ReleaseChannel;
    }
  }
  return str;
};
