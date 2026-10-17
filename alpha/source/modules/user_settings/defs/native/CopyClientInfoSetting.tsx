// Module ID: 16616
// Function ID: 16617
// Name: CopyClientInfoSetting
// Dependencies: [10792, 21, 1383, 5155, 12502, 7162, 4903, 558, 576, 1128, 11094, 7171, 7117, 1384, 7175, 5141, 5167, 11065, 6393, 2044, 2]
// Exports: getClientInfoString

// Module 16616 (CopyClientInfoSetting)
import react from "react" /* 576 */;
import intl8 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import ToastUtils from "ToastUtils" /* 4903 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import DeviceUtils from "DeviceUtils" /* 5167 */;
import ClipboardListIcon from "ClipboardListIcon" /* 6393 */;
import ClipboardUtils from "ClipboardUtils" /* 7162 */;
import IOSAnchoredChatScrollerExperiment from "IOSAnchoredChatScrollerExperiment" /* 11094 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 12502 */;
import BuildOverrideStore from "BuildOverrideStore" /* 10792 */;
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 1383 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const PlatformUtils = tmp(1384);
const CopyIcon = tmp(5141);
const BottomSheetTitleHeader2 = tmp(7117);
const ActionSheetRow7 = tmp(7171);
const ActionSheet2 = tmp(7175);
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
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const Manifest = react_native.getConstants();
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function IOSAnchoredChatScrollerRow() {
  let subLabel;
  let tmp7;
  let tmp9;
  let obj = subLabel(576);
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const string = intl.string;
    const tmpResult = subLabel(11094);
    let result = tmpResult.isIOSAnchoredChatScrollerEnabled();
    const t = tmp(1128).t;
    const stringResult = string(result ? t.LfEwvz : t["pe/6Ma"]);
    cResult[0] = stringResult;
    subLabel = stringResult;
  } else {
    subLabel = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1128).intl;
    const stringResult1 = intl2.string(subLabel(1128).t.iNGJNe);
    cResult[1] = stringResult1;
    tmp7 = stringResult1;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {
      label: tmp7,
      subLabel,
      onPress() {
          const obj = ClipboardUtils;
          obj.copy(first);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
        }
    };
    const tmp11 = closure_4(subLabel(7171).ActionSheetRow, obj2);
    cResult[2] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (function IOSAnchoredChatScrollerRow() {
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
  const ActionSheetRow = tmp(7171).ActionSheetRow;
  intl2 = tmp(1128).intl;
  return closure_4(ActionSheetRow, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ClientClientInfoActionSheet() {
  let ActionSheetRow;
  let first;
  let intl;
  let intl7;
  let items1;
  let obj11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp20;
  let tmp23;
  let tmp24;
  let tmp28;
  let tmp31;
  let tmp32;
  let tmp36;
  let tmp39;
  let tmp40;
  let tmp44;
  let tmp50;
  let tmp7;
  let tmp8;
  let tmp = require;
  let obj = react;
  const cResult = obj.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { title: intl.string(intl8.t.Na2lF9) };
    const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
    intl = intl8.intl;
    const tmp6 = React3(BottomSheetTitleHeader, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl8.intl;
    const stringResult = intl2.string(intl8.t.H66MEk);
    const tmp11 = getClientInfo();
    cResult[1] = stringResult;
    cResult[2] = tmp11;
    tmp8 = tmp11;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = {
      label: tmp7,
      subLabel: tmp8.appVersion,
      onPress() {
          const appVersion = getClientInfo().appVersion;
          const obj = ClipboardUtils;
          obj.copy(appVersion);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
        }
    };
    const tmp14 = React3(ActionSheetRow7.ActionSheetRow, obj3);
    cResult[3] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl8.intl;
    const stringResult1 = intl3.string(intl8.t.zuaWIt);
    const tmp19 = getClientInfo();
    cResult[4] = stringResult1;
    cResult[5] = tmp19;
    tmp16 = tmp19;
    tmp15 = stringResult1;
  } else {
    tmp15 = cResult[4];
    tmp16 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = {
      label: tmp15,
      subLabel: tmp16.buildNumber,
      onPress() {
          const buildNumber = getClientInfo().buildNumber;
          const obj = ClipboardUtils;
          obj.copy(buildNumber);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
        }
    };
    const tmp22 = React3(ActionSheetRow7.ActionSheetRow, obj4);
    cResult[6] = tmp22;
    tmp20 = tmp22;
  } else {
    tmp20 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = intl8.intl;
    const stringResult2 = intl4.string(intl8.t["YD/2+H"]);
    const tmp27 = getClientInfo();
    cResult[7] = stringResult2;
    cResult[8] = tmp27;
    tmp24 = tmp27;
    tmp23 = stringResult2;
  } else {
    tmp23 = cResult[7];
    tmp24 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = {
      label: tmp23,
      subLabel: tmp24.releaseChannel,
      onPress() {
          const releaseChannel = getClientInfo().releaseChannel;
          const obj = ClipboardUtils;
          obj.copy(releaseChannel);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
        }
    };
    const tmp30 = React3(ActionSheetRow7.ActionSheetRow, obj5);
    cResult[9] = tmp30;
    tmp28 = tmp30;
  } else {
    tmp28 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = intl8.intl;
    const stringResult3 = intl5.string(intl8.t["4bhpIV"]);
    const tmp35 = getClientInfo();
    cResult[10] = stringResult3;
    cResult[11] = tmp35;
    tmp32 = tmp35;
    tmp31 = stringResult3;
  } else {
    tmp31 = cResult[10];
    tmp32 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = {
      label: tmp31,
      subLabel: tmp32.manifest,
      onPress() {
          const manifest = getClientInfo().manifest;
          const obj = ClipboardUtils;
          obj.copy(manifest);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
        }
    };
    const tmp38 = React3(ActionSheetRow7.ActionSheetRow, obj6);
    cResult[12] = tmp38;
    tmp36 = tmp38;
  } else {
    tmp36 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const intl6 = intl8.intl;
    const stringResult4 = intl6.string(intl8.t.Wj3LW4);
    const tmp43 = getClientInfo();
    cResult[13] = stringResult4;
    cResult[14] = tmp43;
    tmp40 = tmp43;
    tmp39 = stringResult4;
  } else {
    tmp39 = cResult[13];
    tmp40 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp12, tmp20, tmp28, tmp36, , ];
    const Group = ActionSheetRow7.ActionSheetRow.Group;
    const obj7 = {
      label: tmp39,
      subLabel: tmp40.buildOverride,
      onPress() {
          const buildOverride = getClientInfo().buildOverride;
          const obj = ClipboardUtils;
          obj.copy(buildOverride);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
        }
    };
    items[4] = React3(ActionSheetRow7.ActionSheetRow, obj7);
    let tmp46Result = null;
    const tmp45 = hasOwnProperty;
    const tmp46 = React3;
    const tmpResult = PlatformUtils;
    if (tmpResult.isIOS()) {
      tmp46Result = tmp46(closure_8, {});
    }
    const obj8 = { hasIcons: false, children: items };
    items[5] = tmp46Result;
    const tmp45Result = tmp45(Group, obj8);
    cResult[15] = tmp45Result;
    tmp44 = tmp45Result;
  } else {
    tmp44 = cResult[15];
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { header: first, startExpanded: true, children: items1 };
    items1 = [tmp44, ];
    const ActionSheet = ActionSheet2.ActionSheet;
    const obj10 = { hasIcons: true, children: React3(ActionSheetRow, obj11) };
    const Group2 = ActionSheetRow7.ActionSheetRow.Group;
    obj11 = {
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
    ActionSheetRow = ActionSheetRow7.ActionSheetRow;
    intl7 = intl8.intl;
    items1[1] = React3(Group2, obj10);
    const tmp53 = hasOwnProperty(ActionSheet, obj9);
    cResult[16] = tmp53;
    tmp50 = tmp53;
  } else {
    tmp50 = cResult[16];
  }
  return tmp50;
}) : (function ClientClientInfoActionSheet() {
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
    tmp4Result = tmp4(closure_8, {});
  }
  items[5] = tmp4Result;
  items1 = [tmp(Group, { hasIcons: false, children: items }), ];
  const obj9 = { hasIcons: true, children: React3(ActionSheetRow6, obj10) };
  const Group2 = tmp2(7171).ActionSheetRow.Group;
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
  ActionSheetRow6 = tmp2(7171).ActionSheetRow;
  intl7 = tmp2(1128).intl;
  items1[1] = React3(Group2, obj9);
  return tmp(ActionSheet, obj);
});
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
let obj = {
  useTitle() {
    const intl = intl8.intl;
    return intl.string(intl8.t.Na2lF9);
  },
  parent: null,
  IconComponent: ClipboardListIcon.ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { default: closure_9 };
    obj.openLazy(Promise.resolve(obj2), "ClientClientInfoActionSheet");
  },
  usePredicate: UserSettings.DeveloperMode.useSetting,
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CopyClientInfoSetting.tsx");

export default pressable;
export { getClientInfoString };
