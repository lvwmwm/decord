// Module ID: 17541
// Function ID: 17542
// Name: CopyClientInfoSetting
// Dependencies: [11361, 21, 1374, 5258, 13177, 7358, 5711, 1113, 7817, 7368, 7366, 7321, 1375, 5731, 4971, 11539, 6913, 4839, 2]
// Exports: getClientInfoString

// Module 17541 (CopyClientInfoSetting)
import intl8 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import UserSettings from "UserSettings" /* 4839 */;
import DeviceUtils from "DeviceUtils" /* 4971 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ToastUtils from "ToastUtils" /* 5711 */;
import CopyIcon from "CopyIcon" /* 5731 */;
import ClipboardListIcon from "ClipboardListIcon" /* 6913 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7321 */;
import ClipboardUtils from "ClipboardUtils" /* 7358 */;
import ActionSheet2 from "ActionSheet" /* 7366 */;
import ActionSheetRow7 from "ActionSheetRow" /* 7368 */;
import IOSAnchoredChatScrollerExperiment from "IOSAnchoredChatScrollerExperiment" /* 7817 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 13177 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11361 */;
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 1374 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function getClientInfo() {
  let str10;
  const overrides = BuildOverrideStore.getCurrentBuildOverride().overrides;
  let tmp;
  if (overrides != null) {
    tmp = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
  }
  let str2 = "N/A";
  const str = Manifest.Manifest;
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
  const ReleaseChannel = tmp4.ReleaseChannel;
  const obj = { appVersion: str8, buildNumber: str3, buildOverride: str6, manifest: str2, releaseChannel: str10 };
  str10 = "N/A";
  if (null != ReleaseChannel) {
    str10 = "N/A";
    if ("" !== ReleaseChannel) {
      str10 = ReleaseChannel;
    }
  }
  return obj;
}
function IOSAnchoredChatScrollerRow() {
  let intl2;
  const intl = intl8.intl;
  const string = intl.string;
  let obj = IOSAnchoredChatScrollerExperiment;
  let result = obj.isIOSAnchoredChatScrollerEnabled();
  const t = intl8.t;
  const stringResult = string(result ? t.LfEwvz : t["pe/6Ma"]);
  require = stringResult;
  let obj2 = {
    label: intl2.string(intl8.t.iNGJNe),
    subLabel: stringResult,
    onPress() {
      const obj = ClipboardUtils;
      obj.copy(require);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    }
  };
  const ActionSheetRow = tmp(7368).ActionSheetRow;
  intl2 = tmp(1113).intl;
  return closure_4(ActionSheetRow, obj2);
}
function ClientClientInfoActionSheet() {
  let ActionSheetRow6;
  let BottomSheetTitleHeader;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items1;
  let obj10;
  let obj2;
  let tmp = hasOwnProperty;
  let obj = { header: React3(BottomSheetTitleHeader, obj2), startExpanded: true, children: items1 };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { title: intl.string(intl8.t.Na2lF9) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl8.intl;
  const Group = ActionSheetRow7.ActionSheetRow.Group;
  let obj3 = {
    label: intl2.string(intl8.t.H66MEk),
    subLabel: getClientInfo().appVersion,
    onPress() {
      const appVersion = getClientInfo().appVersion;
      const obj = ClipboardUtils;
      obj.copy(appVersion);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    }
  };
  const ActionSheetRow = ActionSheetRow7.ActionSheetRow;
  intl2 = intl8.intl;
  const items = [React3(ActionSheetRow, obj3), , , , , ];
  let obj4 = {
    label: intl3.string(intl8.t.zuaWIt),
    subLabel: getClientInfo().buildNumber,
    onPress() {
      const buildNumber = getClientInfo().buildNumber;
      const obj = ClipboardUtils;
      obj.copy(buildNumber);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    }
  };
  const ActionSheetRow2 = ActionSheetRow7.ActionSheetRow;
  intl3 = intl8.intl;
  items[1] = React3(ActionSheetRow2, obj4);
  const obj5 = {
    label: intl4.string(intl8.t["YD/2+H"]),
    subLabel: getClientInfo().releaseChannel,
    onPress() {
      const releaseChannel = getClientInfo().releaseChannel;
      const obj = ClipboardUtils;
      obj.copy(releaseChannel);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    }
  };
  const ActionSheetRow3 = ActionSheetRow7.ActionSheetRow;
  intl4 = intl8.intl;
  items[2] = React3(ActionSheetRow3, obj5);
  const obj6 = {
    label: intl5.string(intl8.t["4bhpIV"]),
    subLabel: getClientInfo().manifest,
    onPress() {
      const manifest = getClientInfo().manifest;
      const obj = ClipboardUtils;
      obj.copy(manifest);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    }
  };
  const ActionSheetRow4 = ActionSheetRow7.ActionSheetRow;
  intl5 = intl8.intl;
  items[3] = React3(ActionSheetRow4, obj6);
  const obj7 = {
    label: intl6.string(intl8.t.Wj3LW4),
    subLabel: getClientInfo().buildOverride,
    onPress() {
      const buildOverride = getClientInfo().buildOverride;
      const obj = ClipboardUtils;
      obj.copy(buildOverride);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    }
  };
  const ActionSheetRow5 = ActionSheetRow7.ActionSheetRow;
  intl6 = intl8.intl;
  items[4] = React3(ActionSheetRow5, obj7);
  let tmp4Result = null;
  const obj8 = PlatformUtils;
  if (obj8.isIOS()) {
    tmp4Result = tmp4(IOSAnchoredChatScrollerRow, {});
  }
  items[5] = tmp4Result;
  items1 = [tmp(Group, { hasIcons: false, children: items }), ];
  const obj9 = { hasIcons: true, children: React3(ActionSheetRow6, obj10) };
  const Group2 = tmp2(7368).ActionSheetRow.Group;
  obj10 = {
    icon: React3(CopyIcon.CopyIcon, {}),
    label: intl7.string(intl8.t["7dqZ6H"]),
    onPress() {
      let appVersion;
      let buildNumber;
      let buildOverride;
      let manifest;
      let releaseChannel;
      const tmp = getClientInfo();
      ({ appVersion, buildNumber } = tmp);
      ({ releaseChannel, buildOverride, manifest } = tmp);
      const obj = DeviceUtils;
      const deviceInfo = obj.getDeviceInfo();
      const obj2 = DeviceUtils;
      const combined = "App: " + appVersion + " (" + buildNumber + ") " + releaseChannel + "; Manifest: " + manifest + "; Build Override: " + buildOverride + "; " + "Device: " + deviceInfo + " OS " + obj2.getSystemVersion() + ";";
      const obj3 = ClipboardUtils;
      obj3.copy(combined);
      const obj4 = ToastUtils;
      const result = obj4.presentCopiedToClipboard();
    }
  };
  ActionSheetRow6 = tmp2(7368).ActionSheetRow;
  intl7 = tmp2(1113).intl;
  items1[1] = React3(Group2, obj9);
  return tmp(ActionSheet, obj);
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const Manifest = react_native.getConstants();
let obj = {
  useTitle() {
    const intl = intl8.intl;
    return intl.string(intl8.t.Na2lF9);
  },
  parent: null,
  IconComponent: ClipboardListIcon.ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { default: ClientClientInfoActionSheet };
    obj.openLazy(Promise.resolve(obj2), "ClientClientInfoActionSheet");
  },
  usePredicate: UserSettings.DeveloperMode.useSetting,
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CopyClientInfoSetting.tsx");

export default pressable;
export function getClientInfoString(ReleaseChannel) {
  let str = "N/A";
  if (null != ReleaseChannel) {
    str = "N/A";
    if ("" !== ReleaseChannel) {
      str = ReleaseChannel;
    }
  }
  return str;
}
