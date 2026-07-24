// Module ID: 14437
// Function ID: 110331
// Name: getClientInfoString
// Dependencies: [10469, 33, 1554, 4098, 10966, 5490, 3830, 5498, 5186, 1212, 5500, 3994, 4078, 4110, 10127, 9193, 3803, 2]

// Module 14437 (getClientInfoString)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import createToggle from "createToggle";
import importAllResult from "getConstants";

let closure_4;
let closure_5;
const require = arg1;
function getClientInfoString(ReleaseChannel) {
  let str = "N/A";
  if (null != ReleaseChannel) {
    str = "N/A";
    if ("" !== ReleaseChannel) {
      str = ReleaseChannel;
    }
  }
  return str;
}
function getClientInfo() {
  const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
  let tmp;
  if (null != overrides) {
    tmp = overrides[require(undefined, 10966) /* setBuildOverrideForBranch */.DEVICE_FIELD];
  }
  let str2 = "N/A";
  let str3 = "N/A";
  if (str.trim().length > 0) {
    str3 = closure_6.Manifest;
  }
  if (null != tmp) {
    str2 = tmp.id;
  }
  const obj = {};
  str = closure_6.Manifest;
  const tmp5 = getClientInfoString;
  const tmp6 = getClientInfoString(closure_6.Build);
  obj.appVersion = getClientInfoString(closure_6.Version);
  obj.buildNumber = tmp6;
  obj.buildOverride = getClientInfoString(str2);
  obj.manifest = str3;
  obj.releaseChannel = getClientInfoString(closure_6.ReleaseChannel);
  return obj;
}
function copyToast(arg0) {
  require(5490) /* _copy */.copy(arg0);
  const obj = require(5490) /* _copy */;
  const result = require(3830) /* presentAddedFriendToast */.presentCopiedToClipboard();
}
function ClientClientInfoActionSheet() {
  let obj = {};
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.Na2lF9);
  obj.header = callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj.startExpanded = true;
  obj = { hasIcons: false };
  const obj1 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.label = intl2.string(require(1212) /* getSystemLocale */.t.H66MEk);
  obj1.subLabel = getClientInfo().appVersion;
  obj1.onPress = function onPress() {
    outer1_9(outer1_8().appVersion);
  };
  const items = [callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow, obj1), , , , , , ];
  const obj2 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.label = intl3.string(require(1212) /* getSystemLocale */.t.zuaWIt);
  obj2.subLabel = getClientInfo().buildNumber;
  obj2.onPress = function onPress() {
    outer1_9(outer1_8().buildNumber);
  };
  items[1] = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow, obj2);
  const obj3 = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj3.label = intl4.string(require(1212) /* getSystemLocale */.t["YD/2+H"]);
  obj3.subLabel = getClientInfo().releaseChannel;
  obj3.onPress = function onPress() {
    outer1_9(outer1_8().releaseChannel);
  };
  items[2] = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow, obj3);
  const obj4 = {};
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj4.label = intl5.string(require(1212) /* getSystemLocale */.t["4bhpIV"]);
  obj4.subLabel = getClientInfo().manifest;
  obj4.onPress = function onPress() {
    outer1_9(outer1_8().manifest);
  };
  items[3] = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow, obj4);
  const obj5 = {};
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj5.label = intl6.string(require(1212) /* getSystemLocale */.t.Wj3LW4);
  obj5.subLabel = getClientInfo().buildOverride;
  obj5.onPress = function onPress() {
    outer1_9(outer1_8().buildOverride);
  };
  items[4] = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow, obj5);
  let obj8 = require(3994) /* isFabric */;
  let tmp3 = null;
  if (obj8.isFabric()) {
    const obj6 = {
      label: "React Native New Architecture",
      subLabel: "Enabled",
      onPress() {
          outer1_9("React Native New Architecture is enabled.");
        }
    };
    tmp3 = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow, obj6);
  }
  items[5] = tmp3;
  let tmp8Result = null;
  if (obj11.isFabric()) {
    const obj7 = { label: "Bridgeless mode" };
    let str2 = "Disabled";
    if (require(3994) /* isFabric */.isBridgeless) {
      str2 = "Enabled";
    }
    obj7.subLabel = str2;
    obj7.onPress = function onPress() {
      let str = "disabled";
      if (outer1_0(outer1_2[11]).isBridgeless) {
        str = "enabled";
      }
      outer1_9("Bridgeless is " + str + ".");
    };
    tmp8Result = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow, obj7);
    const tmp8 = callback;
  }
  items[6] = tmp8Result;
  obj.children = items;
  const items1 = [closure_5(require(5500) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj), ];
  obj8 = { hasIcons: true };
  const obj9 = { icon: callback(require(4078) /* CopyIcon */.CopyIcon, {}) };
  const intl7 = require(1212) /* getSystemLocale */.intl;
  obj9.label = intl7.string(require(1212) /* getSystemLocale */.t["7dqZ6H"]);
  obj9.onPress = function onPress() {
    let appVersion;
    let buildNumber;
    let buildOverride;
    let manifest;
    let releaseChannel;
    const tmp = outer1_8();
    ({ appVersion, buildNumber } = tmp);
    ({ releaseChannel, buildOverride, manifest } = tmp);
    const deviceInfo = outer1_0(outer1_2[13]).getDeviceInfo();
    const obj = outer1_0(outer1_2[13]);
    outer1_9("App: " + appVersion + " (" + buildNumber + ") " + releaseChannel + "; Manifest: " + manifest + "; Build Override: " + buildOverride + "; " + "Device: " + deviceInfo + " OS " + outer1_0(outer1_2[13]).getSystemVersion() + ";");
  };
  obj8.children = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow, obj9);
  items1[1] = callback(require(5500) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj8);
  obj.children = items1;
  return closure_5(require(5498) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const constants = require("getConstants").getConstants();
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Na2lF9);
  },
  parent: null,
  IconComponent: require("ClipboardListIcon").ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    let obj = importDefault(4098);
    obj = { default: ClientClientInfoActionSheet };
    obj.openLazy(Promise.resolve(obj), "ClientClientInfoActionSheet");
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting,
  withArrow: true
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Na2lF9);
  },
  parent: null,
  IconComponent: require("ClipboardListIcon").ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    let obj = importDefault(4098);
    obj = { default: ClientClientInfoActionSheet };
    obj.openLazy(Promise.resolve(obj), "ClientClientInfoActionSheet");
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting,
  withArrow: true
};
let result = require("getConstants").fileFinishedImporting("modules/user_settings/defs/native/CopyClientInfoSetting.tsx");

export default pressable;
export { getClientInfoString };
