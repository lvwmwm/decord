// Module ID: 15102
// Function ID: 114967
// Name: YouStatusRadioGroup
// Dependencies: [31, 27, 11452, 1278, 1857, 6961, 3970, 1849, 653, 11453, 33, 4130, 689, 5170, 13024, 13021, 13022, 13023, 3803, 10231, 4098, 7519, 1212, 7518, 8450, 1324, 566, 14073, 11092, 7955, 14156, 3973, 15103, 10356, 14158, 3969, 1273, 14736, 15105, 675, 5484, 11456, 4660, 4126, 10230, 5503, 5504, 10202, 15110, 1934, 15100, 8239, 3834, 9067, 5167, 11899, 9087, 8007, 11906, 7640, 5089, 5500, 5186, 4541, 13504, 2]

// Module 15102 (YouStatusRadioGroup)
import importAllResult from "getThemeForColor";
import get_ActivityIndicator from "updateBackgroundGradientPreset";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MultiAccountTokenStatus } from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import ME from "ME";
import { MultiAccountSwitchLocation as closure_18 } from "MAX_ACCOUNTS";
import jsxProd from "ThemeDarkIcon";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_5;
let closure_6;
const require = arg1;
function YouStatusRadioGroup() {
  const StatusSetting = setting(3803).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(3803).StatusExpiresAtSetting;
  let closure_1 = StatusExpiresAtSetting.useSetting();
  let items = [setting];
  const callback = importAllResult.useCallback((nextStatus) => {
    callback(outer1_3[19])({ prevStatus: setting, nextStatus });
    callback(outer1_3[20]).hideActionSheet();
  }, items);
  let obj = {};
  let intl = setting(1212).intl;
  obj.title = intl.string(setting(1212).t["0DPAZH"]);
  obj.onChange = callback;
  obj.defaultValue = setting;
  obj.hasIcons = true;
  obj.children = (function useStatusRadioRowProps() {
    return outer1_4.useMemo(() => {
      let obj = {};
      obj = { source: callback(outer2_3[14]), variant: "text-status-online" };
      obj.icon = outer2_19(setting(outer2_3[13]).TableRowIcon, obj);
      obj.value = outer2_16.ONLINE;
      const items = [obj, , , ];
      obj = {};
      const obj1 = { source: callback(outer2_3[15]), variant: "text-status-idle" };
      obj.icon = outer2_19(setting(outer2_3[13]).TableRowIcon, obj1);
      obj.value = outer2_16.IDLE;
      items[1] = obj;
      const obj2 = {};
      const obj3 = { source: callback(outer2_3[16]), variant: "text-status-dnd" };
      obj2.icon = outer2_19(setting(outer2_3[13]).TableRowIcon, obj3);
      obj2.value = outer2_16.DND;
      items[2] = obj2;
      const obj4 = {};
      const obj5 = { source: callback(outer2_3[17]), variant: "text-status-offline" };
      obj4.icon = outer2_19(setting(outer2_3[13]).TableRowIcon, obj5);
      obj4.value = outer2_16.INVISIBLE;
      items[3] = obj4;
      return items;
    }, []);
  })().map((value) => {
    let obj = {};
    const merged = Object.assign(value);
    obj["label"] = setting(outer1_3[24]).getStatusLabel(value.value);
    let formatToPlainStringResult;
    if (value.value === setting) {
      if (null != closure_1) {
        if ("0" !== closure_1) {
          const intl = setting(outer1_3[22]).intl;
          obj = {};
          const _Date = Date;
          const _Number = Number;
          const date = new Date(Number(closure_1));
          obj.endTime = date.toLocaleString(setting(outer1_3[22]).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
          formatToPlainStringResult = intl.formatToPlainString(setting(outer1_3[22]).t.BWD8fs, obj);
        }
      }
    }
    obj["subLabel"] = formatToPlainStringResult;
    return outer1_19(setting(outer1_3[23]).TableRadioRow, obj, value.value);
  });
  return callback(setting(7519).TableRadioGroup, obj);
}
function ThemeRadioGroup() {
  const tmp = importDefault(1324)("ThemeRadioGroup");
  let obj = require(566) /* initialize */;
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.theme);
  obj = {};
  const callback = importAllResult.useCallback((arg0) => {
    const result = outer1_0(outer1_3[27]).resetBackgroundGradientPreset();
    const obj = outer1_0(outer1_3[27]);
    outer1_0(outer1_3[28]).resetCustomTheme();
    const obj2 = outer1_0(outer1_3[28]);
    outer1_1(outer1_3[29]).updateTheme(arg0);
  }, []);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.Ksh3ik);
  obj.onChange = callback;
  obj.defaultValue = stateFromStores;
  obj.hasIcons = true;
  const obj1 = { icon: callback(require(14156) /* ThemeLightIcon */.ThemeLightIcon, {}) };
  let obj4 = require(3973) /* getThemeForColor */;
  obj1.label = obj4.getThemeName(constants.LIGHT, tmp);
  obj1.value = constants.LIGHT;
  const items1 = [callback(require(7518) /* TableRadioRow */.TableRadioRow, obj1), , , ];
  let tmp7 = tmp;
  if (tmp) {
    let obj2 = { icon: callback(require(15103) /* ThemeGrayIcon */.ThemeGrayIcon, {}), label: require(3973) /* getThemeForColor */.getThemeName(constants.DARK, true), value: constants.DARK };
    tmp7 = callback(require(7518) /* TableRadioRow */.TableRadioRow, obj2);
    const obj7 = require(3973) /* getThemeForColor */;
  }
  items1[1] = tmp7;
  const obj3 = { icon: callback(require(10356) /* ThemeDarkIcon */.ThemeDarkIcon, {}), label: require(3973) /* getThemeForColor */.getThemeName(constants.DARKER, tmp), value: constants.DARKER };
  items1[2] = callback(require(7518) /* TableRadioRow */.TableRadioRow, obj3);
  obj4 = { icon: callback(require(14158) /* ThemeMidnightIcon */.ThemeMidnightIcon, {}) };
  const obj9 = require(3973) /* getThemeForColor */;
  const tmp4 = callback;
  const tmp5 = closure_5;
  const tmp6 = closure_20;
  obj4.label = require(3973) /* getThemeForColor */.getThemeName(constants.MIDNIGHT, tmp);
  obj4.value = constants.MIDNIGHT;
  items1[3] = callback(require(7518) /* TableRadioRow */.TableRadioRow, obj4);
  obj.children = items1;
  obj.children = tmp6(require(7519) /* context */.TableRadioGroup, obj);
  return tmp4(tmp5, obj);
}
function YouAccountRadioGroup() {
  const tmp2 = callback2();
  let obj = stateFromStores(566);
  let items = [closure_13];
  stateFromStores = obj.useStateFromStores(items, () => outer1_13.getCurrentUser());
  let obj1 = stateFromStores(14736);
  const multiAccountUsers = obj1.useMultiAccountUsers().multiAccountUsers;
  const tmp = multiAccountUsers(1324)("YouAccountRadioGroup");
  let items1 = [multiAccountUsers, ];
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  items1[1] = id;
  let tmp7Result = null;
  if (null != stateFromStores) {
    obj = { style: tmp2.account };
    obj = { style: tmp2.manage };
    obj1 = {
      onPress() {
          return multiAccountUsers(outer1_3[38])();
        }
    };
    const obj2 = { variant: "text-sm/semibold" };
    let str2 = "text-link";
    if (tmp) {
      str2 = "text-brand";
    }
    obj2.color = str2;
    const intl = stateFromStores(1212).intl;
    obj2.children = intl.string(stateFromStores(1212).t.HxrBOZ);
    obj1.children = callback(stateFromStores(4126).Text, obj2);
    obj.children = callback(stateFromStores(4660).PressableOpacity, obj1);
    const items2 = [callback(closure_5, obj), ];
    let obj3 = {};
    const intl2 = stateFromStores(1212).intl;
    obj3.title = intl2.string(stateFromStores(1212).t.oMNyYN);
    obj3.onChange = tmp5;
    obj3.defaultValue = stateFromStores.id;
    obj3.hasIcons = true;
    obj3.children = arr2.map((value) => {
      const merged = Object.assign(value);
      return outer1_19(stateFromStores(outer1_3[23]).TableRadioRow, {}, value.value);
    });
    items2[1] = callback(stateFromStores(7519).TableRadioGroup, obj3);
    obj.children = items2;
    tmp7Result = closure_20(closure_5, obj);
    const tmp10 = closure_5;
    const tmp11 = callback;
    const tmp14 = callback;
    const tmp7 = closure_20;
    const tmp8 = closure_5;
    const tmp9 = callback;
  }
  return tmp7Result;
}
function FocusModeSetting() {
  let obj = require(10230) /* useFocusModeEnabled */;
  const focusModeEnabled = obj.useFocusModeEnabled();
  const FocusModeExpiresAtSetting = require(3803) /* explicitContentFromProto */.FocusModeExpiresAtSetting;
  let setting = FocusModeExpiresAtSetting.useSetting();
  if (!focusModeEnabled) {
    return null;
  } else {
    obj = { hasIcons: true };
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.wCxBOc);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityHint = intl2.string(require(1212) /* getSystemLocale */.t.wCxBOc);
    const obj1 = { style: tmp.leadingIcon };
    obj.icon = callback(require(10202) /* BellSlashIcon */.BellSlashIcon, obj1);
    obj.onValueChange = function onValueChange(arg0) {
      if (arg0) {
        let obj = {
          onSelect(quiet_mode_enabled) {
              outer2_0(outer2_3[44]).setFocusMode(quiet_mode_enabled, arg1);
              const obj = outer2_0(outer2_3[44]);
              outer2_1(outer2_3[20]).hideActionSheet();
              const obj2 = outer2_1(outer2_3[20]);
              const result = outer2_0(outer2_3[50]).showYouAccountActionSheet();
            }
        };
        outer1_1(outer1_3[20]).openLazy(outer1_0(outer1_3[49])(outer1_3[48], outer1_3.paths), "FocusModeOptionsActionSheet", obj);
        let obj2 = outer1_1(outer1_3[20]);
      } else {
        obj = outer1_0(outer1_3[44]);
        obj.setFocusMode(false);
      }
    };
    obj.value = focusModeEnabled;
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl3.string(require(1212) /* getSystemLocale */.t.wCxBOc);
    if (null == setting) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl4.string(require(1212) /* getSystemLocale */.t.i0nsoY);
      obj.subLabel = stringResult;
      obj = tmp7(require(5504) /* TableSwitchRow */.TableSwitchRow, obj);
      obj.children = obj;
      tmp4(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
    }
    const intl5 = require(1212) /* getSystemLocale */.intl;
    let obj2 = {};
    const _Date = Date;
    const _Number = Number;
    const date = new Date(Number(setting));
    setting = date;
    obj2.endTime = date.toLocaleString(require(1212) /* getSystemLocale */.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
    stringResult = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.BWD8fs, obj2);
    tmp4 = callback;
    tmp7 = callback;
  }
}
function CustomStatus() {
  const tmp = callback2();
  let obj = require(8239) /* _activityFromSetting */;
  const customStatusActivity = obj.useCustomStatusActivity();
  let obj1 = require(3834) /* map */;
  let state;
  const token = obj1.useToken(importDefault(689).modules.mobile.TABLE_ROW_ICON_SIZE);
  if (null != customStatusActivity) {
    state = customStatusActivity.state;
  }
  let tmp5 = null != state;
  if (tmp5) {
    tmp5 = "" !== customStatusActivity.state;
  }
  if (null != customStatusActivity) {
    let emoji = customStatusActivity.emoji;
  }
  if (!tmp5) {
    tmp5 = null != emoji;
  }
  let obj2 = require(9067) /* useGameMentionsAsPlainText */;
  let state1;
  if (null != customStatusActivity) {
    state1 = customStatusActivity.state;
  }
  let gameMentionsAsPlainText = obj2.useGameMentionsAsPlainText(state1);
  obj = { hasIcons: false };
  obj = { shadow: "none", border: "none", style: tmp.customStatusRow };
  obj1 = { style: tmp.customStatusEditButton, accessibilityRole: "button" };
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (tmp5) {
    let stringResult = string(t["2p9FMw"]);
  } else {
    stringResult = string(t["/UonHN"]);
  }
  obj1.accessibilityLabel = stringResult;
  let formatToPlainStringResult;
  if (tmp5) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj2 = {};
    const emoji2 = customStatusActivity.emoji;
    let name;
    if (null != emoji2) {
      name = emoji2.name;
    }
    let str2 = "";
    if (null != name) {
      str2 = name;
    }
    obj2.emoji = str2;
    obj2.status = gameMentionsAsPlainText;
    formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.GE7QzY, obj2);
  }
  obj1.accessibilityHint = formatToPlainStringResult;
  obj1.onPress = function onPress() {
    let obj = outer1_1(outer1_3[20]);
    obj.hideActionSheet();
    obj = {};
    const items = [outer1_1(outer1_3[40]).YOU_ACCOUNT_ACTION_SHEET];
    obj.analyticsLocations = items;
    const result = outer1_0(outer1_3[55]).openEditCustomStatusModal(obj);
  };
  emoji = undefined;
  if (null != customStatusActivity) {
    emoji = customStatusActivity.emoji;
  }
  if (null != emoji) {
    const obj3 = { emoji: customStatusActivity.emoji, size: token };
    let tmp20 = callback(importDefault(9087), obj3);
  } else {
    const obj4 = { size: "md", style: tmp.leadingIcon };
    tmp20 = callback(require(8007) /* ReactionIcon */.ReactionIcon, obj4);
  }
  let items = [tmp20, ];
  const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, style: tmp.customStatusText };
  if (!tmp5) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    gameMentionsAsPlainText = intl3.string(require(1212) /* getSystemLocale */.t["/UonHN"]);
  }
  obj5.children = gameMentionsAsPlainText;
  items[1] = callback(require(4126) /* Text */.Text, obj5);
  obj1.children = items;
  const items1 = [closure_20(require(4660) /* PressableBase */.PressableOpacity, obj1), ];
  let tmp27 = null;
  if (null != customStatusActivity) {
    const obj6 = {
      onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          outer1_1(outer1_3[58])();
        },
      accessibilityRole: "button"
    };
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj6.accessibilityLabel = intl4.string(require(1212) /* getSystemLocale */.t.wfYTHe);
    obj6.style = tmp.customStatusRemoveButton;
    const obj7 = { style: tmp.trailingIcon, source: importDefault(7640) };
    obj6.children = callback(closure_6, obj7);
    tmp27 = callback(require(4660) /* PressableBase */.PressableOpacity, obj6);
  }
  items1[1] = tmp27;
  obj.children = items1;
  obj.children = closure_20(require(5167) /* getCardBackgroundToken */.Card, obj);
  return callback(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
}
({ View: closure_5, Image: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_14, AuthStates: closure_15, StatusTypes: closure_16, ThemeTypes: closure_17 } = ME);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
let obj = { account: { position: "relative" }, manage: { position: "absolute", right: 0, zIndex: 100 }, leadingIcon: { width: 24, height: 24, margin: 4 } };
obj = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, width: 16, height: 16 };
obj.trailingIcon = obj;
_createForOfIteratorHelperLoose = { padding: 0, flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
obj.customStatusRow = _createForOfIteratorHelperLoose;
let obj2 = { minHeight: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_HEIGHT, padding: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
obj.customStatusEditButton = obj2;
obj.customStatusRemoveButton = { height: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
obj.customStatusText = { flexShrink: 1 };
let closure_21 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj3 = { height: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
const memoResult = importAllResult.memo((statusOnly) => {
  let flag = statusOnly.statusOnly;
  if (flag === undefined) {
    flag = false;
  }
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getCanUseMultiAccountMobile());
  const tmp2 = importDefault(5089)("theme_setting_in_account_sheet");
  let obj1 = require(566) /* initialize */;
  const items1 = [closure_11];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_11.isDeveloper);
  obj = { startExpanded: stateFromStores };
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (flag) {
    let stringResult = string(t["3Uj+2p"]);
  } else if (stateFromStores) {
    stringResult = string(t["ldCE/p"]);
  } else {
    stringResult = string(t["qP/i6k"]);
  }
  obj.title = stringResult;
  obj.header = callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj.showGradient = true;
  obj1 = { spacing: 24 };
  let tmp8 = tmp2;
  if (tmp2) {
    tmp8 = callback(ThemeRadioGroup, {});
  }
  const items2 = [tmp8, callback(YouStatusRadioGroup, {}), callback(FocusModeSetting, {}), callback(CustomStatus, {}), , ];
  let tmp11 = !flag && stateFromStores;
  if (tmp11) {
    tmp11 = callback(YouAccountRadioGroup, {});
  }
  items2[4] = tmp11;
  let tmp14 = !flag && stateFromStores1;
  if (tmp14) {
    tmp14 = callback(importDefault(13504), { title: "Developer Tools", embedded: true });
  }
  items2[5] = tmp14;
  obj1.children = items2;
  obj.children = closure_20(require(4541) /* Stack */.Stack, obj1);
  return callback(require(5500) /* ActionSheet */.ActionSheet, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx");

export default memoResult;
