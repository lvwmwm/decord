// Module ID: 14265
// Function ID: 107812
// Name: getClientInfoString
// Dependencies: []

// Module 14265 (getClientInfoString)
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
    tmp = overrides[closure_0(undefined, closure_2[4]).DEVICE_FIELD];
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
  const str = closure_6.Manifest;
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
  arg1(dependencyMap[5]).copy(arg0);
  const obj = arg1(dependencyMap[5]);
  const result = arg1(dependencyMap[6]).presentCopiedToClipboard();
}
function ClientClientInfoActionSheet() {
  let obj = {};
  obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj.title = intl.string(arg1(dependencyMap[9]).t.Na2lF9);
  obj.header = callback(arg1(dependencyMap[8]).BottomSheetTitleHeader, obj);
  obj.startExpanded = true;
  obj = { hasIcons: false };
  const obj1 = {};
  const intl2 = arg1(dependencyMap[9]).intl;
  obj1.label = intl2.string(arg1(dependencyMap[9]).t.H66MEk);
  obj1.subLabel = getClientInfo().appVersion;
  obj1.onPress = function onPress() {
    callback3(callback2().appVersion);
  };
  const items = [callback(arg1(dependencyMap[10]).ActionSheetRow, obj1), , , , , , ];
  const obj2 = {};
  const intl3 = arg1(dependencyMap[9]).intl;
  obj2.label = intl3.string(arg1(dependencyMap[9]).t.zuaWIt);
  obj2.subLabel = getClientInfo().buildNumber;
  obj2.onPress = function onPress() {
    callback3(callback2().buildNumber);
  };
  items[1] = callback(arg1(dependencyMap[10]).ActionSheetRow, obj2);
  const obj3 = {};
  const intl4 = arg1(dependencyMap[9]).intl;
  obj3.label = intl4.string(arg1(dependencyMap[9]).t.YD/2+H);
  obj3.subLabel = getClientInfo().releaseChannel;
  obj3.onPress = function onPress() {
    callback3(callback2().releaseChannel);
  };
  items[2] = callback(arg1(dependencyMap[10]).ActionSheetRow, obj3);
  const obj4 = {};
  const intl5 = arg1(dependencyMap[9]).intl;
  obj4.label = intl5.string(arg1(dependencyMap[9]).t.4bhpIV);
  obj4.subLabel = getClientInfo().manifest;
  obj4.onPress = function onPress() {
    callback3(callback2().manifest);
  };
  items[3] = callback(arg1(dependencyMap[10]).ActionSheetRow, obj4);
  const obj5 = {};
  const intl6 = arg1(dependencyMap[9]).intl;
  obj5.label = intl6.string(arg1(dependencyMap[9]).t.Wj3LW4);
  obj5.subLabel = getClientInfo().buildOverride;
  obj5.onPress = function onPress() {
    callback3(callback2().buildOverride);
  };
  items[4] = callback(arg1(dependencyMap[10]).ActionSheetRow, obj5);
  let obj8 = arg1(dependencyMap[11]);
  let tmp3 = null;
  if (obj8.isFabric()) {
    const obj6 = {
      onPress() {
          callback3("React Native New Architecture is enabled.");
        }
    };
    tmp3 = callback(arg1(dependencyMap[10]).ActionSheetRow, obj6);
  }
  items[5] = tmp3;
  let tmp8Result = null;
  if (obj11.isFabric()) {
    const obj7 = { label: "Bridgeless mode" };
    let str2 = "Disabled";
    if (arg1(dependencyMap[11]).isBridgeless) {
      str2 = "Enabled";
    }
    obj7.subLabel = str2;
    obj7.onPress = function onPress() {
      let str = "disabled";
      if (callback(closure_2[11]).isBridgeless) {
        str = "enabled";
      }
      closure_9("Bridgeless is " + str + ".");
    };
    tmp8Result = callback(arg1(dependencyMap[10]).ActionSheetRow, obj7);
    const tmp8 = callback;
  }
  items[6] = tmp8Result;
  obj.children = items;
  const items1 = [closure_5(arg1(dependencyMap[10]).ActionSheetRow.Group, obj), ];
  obj8 = { hasIcons: true };
  const obj9 = { icon: callback(arg1(dependencyMap[12]).CopyIcon, {}) };
  const intl7 = arg1(dependencyMap[9]).intl;
  obj9.label = intl7.string(arg1(dependencyMap[9]).t.7dqZ6H);
  obj9.onPress = function onPress() {
    let appVersion;
    let buildNumber;
    let buildOverride;
    let manifest;
    let releaseChannel;
    const tmp = callback2();
    ({ appVersion, buildNumber } = tmp);
    ({ releaseChannel, buildOverride, manifest } = tmp);
    const deviceInfo = callback(closure_2[13]).getDeviceInfo();
    const obj = callback(closure_2[13]);
    callback3("App: " + appVersion + " (" + buildNumber + ") " + releaseChannel + "; Manifest: " + manifest + "; Build Override: " + buildOverride + "; " + "Device: " + deviceInfo + " OS " + callback(closure_2[13]).getSystemVersion() + ";");
  };
  obj8.children = callback(arg1(dependencyMap[10]).ActionSheetRow, obj9);
  items1[1] = callback(arg1(dependencyMap[10]).ActionSheetRow.Group, obj8);
  obj.children = items1;
  return closure_5(arg1(dependencyMap[7]).ActionSheet, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const constants = importAll(dependencyMap[2]).getConstants();
const importAllResult = importAll(dependencyMap[2]);
const obj2 = arg1(dependencyMap[14]);
const pressable = obj2.createPressable({
  useTitle() {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.Na2lF9);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[15]).ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    let obj = importDefault(dependencyMap[3]);
    obj = { default: ClientClientInfoActionSheet };
    obj.openLazy(Promise.resolve(obj), "ClientClientInfoActionSheet");
  },
  usePredicate: arg1(dependencyMap[16]).DeveloperMode.useSetting,
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.Na2lF9);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[15]).ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    let obj = importDefault(dependencyMap[3]);
    obj = { default: ClientClientInfoActionSheet };
    obj.openLazy(Promise.resolve(obj), "ClientClientInfoActionSheet");
  },
  usePredicate: arg1(dependencyMap[16]).DeveloperMode.useSetting,
  withArrow: true
};
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/defs/native/CopyClientInfoSetting.tsx");

export default pressable;
export { getClientInfoString };
