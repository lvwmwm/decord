// Module ID: 16612
// Function ID: 16613
// Name: YouAccountActionSheet
// Dependencies: [19, 17, 12144, 1205, 1403, 7397, 4923, 1389, 1085, 12145, 21, 5090, 587, 558, 576, 5086, 6192, 14248, 14245, 14246, 14247, 2040, 6655, 12585, 5054, 1126, 6264, 8626, 6265, 504, 15257, 11635, 5258, 15364, 1251, 16613, 12690, 15366, 4922, 1200, 16170, 16615, 1264, 6865, 12148, 6189, 12584, 6267, 6882, 10325, 16620, 1999, 16610, 10488, 4778, 10224, 10492, 10242, 8930, 10499, 6767, 6186, 6205, 6828, 16621, 15919, 5373, 6885, 2]

// Module 16612 (YouAccountActionSheet)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1251 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import UserSettings from "UserSettings" /* 2040 */;
import useToken from "useToken" /* 4778 */;
import UserUtilsDefault from "UserUtils" /* 4922 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5258 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import Card_Card from "Card/Card" /* 6186 */;
import Pressables from "Pressables" /* 6189 */;
import useDesignToggleDefault from "useDesignToggle" /* 6205 */;
import TableRadioRow5 from "TableRadioRow" /* 6264 */;
import TableRadioGroup2 from "TableRadioGroup" /* 6265 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6655 */;
import AssetRegistryDefault from "AssetRegistry" /* 6767 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6828 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import ActionSheet2 from "ActionSheet" /* 6885 */;
import getChannelA11yLabel from "getChannelA11yLabel" /* 8626 */;
import useGameMentionsAsPlainText2 from "useGameMentionsAsPlainText" /* 10224 */;
import userSettingToActivity from "userSettingToActivity" /* 10488 */;
import removeCustomStatusDefault from "removeCustomStatus" /* 10499 */;
import MultiAccountStore2 from "MultiAccountStore" /* 12144 */;
import Constants2 from "Constants" /* 12145 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 12148 */;
import FocusModeUtils from "FocusModeUtils" /* 12584 */;
import setUserStatusDefault from "setUserStatus" /* 12585 */;
import ThemeDarkIcon from "ThemeDarkIcon" /* 12690 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14245 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14246 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14247 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 14248 */;
import ThemeLightIcon from "ThemeLightIcon" /* 15364 */;
import ThemeMidnightIcon from "ThemeMidnightIcon" /* 15366 */;
import DevToolsContentDefault from "DevToolsContent" /* 15919 */;
import ThemeGrayIcon from "ThemeGrayIcon" /* 16613 */;
import openManageAccountsModalDefault from "openManageAccountsModal" /* 16615 */;
import YouSwitchClientsRadioGroupDefault from "YouSwitchClientsRadioGroup" /* 16621 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import UserRecord from "UserRecord" /* 1403 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7397 */;
import StreamerModeStore from "StreamerModeStore" /* 4923 */;
import UserStore from "UserStore" /* 1389 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const MultiAccountStore = MultiAccountStore2;
let _require;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let tmp;
let tmp2;
const Text_Text = tmp(5086);
const TableRowGroup2 = tmp2(6267);
const ReactionIcon = tmp2(8930);
function FocusModeSetting() {
  let date;
  let intl;
  let intl2;
  let intl3;
  let obj3;
  let paths;
  let tmp = closure_21();
  let obj = FocusModeUtils;
  const focusModeEnabled = obj.useFocusModeEnabled();
  const FocusModeExpiresAtSetting = UserSettings.FocusModeExpiresAtSetting;
  const setting = FocusModeExpiresAtSetting.useSetting();
  let tmp7Result = null;
  if (focusModeEnabled) {
    const TableRowGroup = tmp2(6267).TableRowGroup;
    let obj2 = {
      accessibilityLabel: intl.string(tmp2(1126).t.wCxBOc),
      accessibilityHint: intl2.string(tmp2(1126).t.wCxBOc),
      icon: closure_19(tmp2(10325).BellSlashIcon, obj3),
      onValueChange(arg0) {
          const tmp = arg0;
          if (tmp) {
            let obj2 = require("ActionSheetActionCreators");
            let obj3 = {
              onSelect(quiet_mode_enabled, arg1) {
                  const obj = closure_1_0(paths[46]);
                  obj.setFocusMode(quiet_mode_enabled, arg1);
                  const obj2 = closure_1_1(paths[24]);
                  obj2.hideActionSheet();
                  const obj3 = closure_1_0(paths[52]);
                  const result = obj3.showYouAccountActionSheet();
                }
            };
            obj2.openLazy(require("asyncRequire")(paths[50], paths.paths), "FocusModeOptionsActionSheet", obj3);
          } else {
            let obj = require("FocusModeUtils");
            obj.setFocusMode(false);
          }
        },
      value: focusModeEnabled,
      label: intl3.string(tmp2(1126).t.wCxBOc),
      subLabel: null
    };
    const TableSwitchRow = tmp2(6882).TableSwitchRow;
    intl = tmp2(1126).intl;
    intl2 = tmp2(1126).intl;
    obj3 = { style: tmp.leadingIcon };
    intl3 = tmp2(1126).intl;
    if (null != setting) {
      let formatToPlainStringResult;
      if ("0" !== setting) {
        const intl5 = tmp2(1126).intl;
        const formatToPlainString = intl5.formatToPlainString;
        const _Date = Date;
        const _Number = Number;
        const obj4 = { endTime: date.toLocaleString(intl6.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" }) };
        const BWD8fs = tmp2(1126).t.BWD8fs;
        const self = this;
        const self2 = this;
        date = new Date(Number(setting));
        formatToPlainStringResult = formatToPlainString(BWD8fs, obj4);
      }
      obj2.subLabel = formatToPlainStringResult;
      const obj5 = { hasIcons: true, children: closure_19(TableSwitchRow, obj2) };
      tmp7Result = tmp7(TableRowGroup, obj5);
    }
    const intl4 = tmp2(1126).intl;
    formatToPlainStringResult = intl4.string(tmp2(1126).t.i0nsoY);
  }
  return tmp7Result;
}
({ View: hasOwnProperty, Image: metroRequire } = react_native);
const MultiAccountTokenStatus = MultiAccountStore2.MultiAccountTokenStatus;
({ AnalyticEvents: closure_14, AuthStates: closure_15, StatusTypes: closure_16, ThemeTypes: closure_17 } = Constants);
let closure_18 = Constants2.MultiAccountSwitchLocation;
({ jsx: closure_19, jsxs: closure_20 } = Fragment);
let createStyles = createStyles_mod;
let obj = { account: { position: "relative" }, manage: { position: "absolute", right: 0, zIndex: 100 }, leadingIcon: { width: 24, height: 24, margin: 4 }, trailingIcon: size, customStatusRow: obj2, customStatusEditButton: obj3, customStatusRemoveButton: obj4, customStatusText: { flexShrink: 1 }, sectionHeading: obj5 };
size = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 16, height: 16 };
createStyles = createStyles.createStyles;
obj2 = { padding: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj3 = { minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj4 = { height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
obj5 = { marginBottom: nativeDefault.space.PX_8 };
let closure_21 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function AccountSectionHeading(children) {
  const obj = react2;
  const cResult = obj.c(3);
  children = children.children;
  const tmp4 = closure_21();
  if (cResult[0] === children) {
    let tmp5;
    if (cResult[1] === tmp4.sectionHeading) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = { accessibilityRole: "header", variant: "experimental/body-sm/medium", color: "text-subtle", style: tmp4.sectionHeading, children };
  const tmp6 = closure_19(Text_Text.Text, obj2);
  cResult[0] = children;
  cResult[1] = tmp4.sectionHeading;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function AccountSectionHeading(children) {
  children = children.children;
  const obj = { accessibilityRole: "header", variant: "experimental/body-sm/medium", color: "text-subtle", style: closure_21().sectionHeading, children };
  return closure_19(Text_Text.Text, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStatusRadioRowProps() {
  let TableRowIcon;
  let TableRowIcon2;
  let TableRowIcon3;
  let TableRowIcon4;
  let first;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { icon: closure_19(TableRowIcon, obj3), value: constants3.ONLINE };
    obj3 = { source: AssetRegistryDefault5, variant: "text-status-online" };
    TableRowIcon = tmp(6192).TableRowIcon;
    const items = [obj2, , , ];
    const obj4 = { icon: closure_19(TableRowIcon2, obj5), value: constants3.IDLE };
    obj5 = { source: AssetRegistryDefault2, variant: "text-status-idle" };
    TableRowIcon2 = tmp(6192).TableRowIcon;
    items[1] = obj4;
    const obj6 = { icon: closure_19(TableRowIcon3, obj7), value: constants3.DND };
    obj7 = { source: AssetRegistryDefault3, variant: "text-status-dnd" };
    TableRowIcon3 = tmp(6192).TableRowIcon;
    items[2] = obj6;
    const obj8 = { icon: closure_19(TableRowIcon4, obj9), value: constants3.INVISIBLE };
    obj9 = { source: AssetRegistryDefault4, variant: "text-status-offline" };
    TableRowIcon4 = tmp(6192).TableRowIcon;
    items[3] = obj8;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useStatusRadioRowProps() {
  return react.useMemo(() => {
    let TableRowIcon;
    let TableRowIcon2;
    let TableRowIcon3;
    let TableRowIcon4;
    let obj2;
    let obj4;
    let obj6;
    let obj8;
    const obj = { icon: closure_1_19(TableRowIcon, obj2), value: constants.ONLINE };
    obj2 = { source: AssetRegistryDefault5, variant: "text-status-online" };
    TableRowIcon = require("TableRowIcon").TableRowIcon;
    const items = [obj, , , ];
    const obj3 = { icon: closure_1_19(TableRowIcon2, obj4), value: constants.IDLE };
    obj4 = { source: AssetRegistryDefault2, variant: "text-status-idle" };
    TableRowIcon2 = require("TableRowIcon").TableRowIcon;
    items[1] = obj3;
    const obj5 = { icon: closure_1_19(TableRowIcon3, obj6), value: constants.DND };
    obj6 = { source: AssetRegistryDefault3, variant: "text-status-dnd" };
    TableRowIcon3 = require("TableRowIcon").TableRowIcon;
    items[2] = obj5;
    const obj7 = { icon: closure_1_19(TableRowIcon4, obj8), value: constants.INVISIBLE };
    obj8 = { source: AssetRegistryDefault4, variant: "text-status-offline" };
    TableRowIcon4 = require("TableRowIcon").TableRowIcon;
    items[3] = obj7;
    return items;
  }, []);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouStatusRadioGroup() {
  let items;
  let setting;
  let tmp12;
  let tmp7;
  let tmp8;
  let tmp = setting;
  const tmp2 = dependencyMap;
  let obj = setting(576);
  const cResult = obj.c(19);
  const arr = closure_23();
  const StatusSetting = setting(2040).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(2040).StatusExpiresAtSetting;
  const setting1 = StatusExpiresAtSetting.useSetting();
  let obj2 = setting(6655);
  const manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment("YouAccountActionSheetOnlineStatus");
  if (cResult[0] !== setting) {
    const fn = function e(nextStatus) {
      const obj = { prevStatus: setting, nextStatus };
      setUserStatusDefault(obj);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    };
    cResult[0] = setting;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["0DPAZH"]);
    cResult[2] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === arr) {
    if (cResult[4] === setting) {
      if (cResult[5] === setting1) {
        tmp12 = cResult[6];
      }
      if (cResult[10] === tmp7) {
        if (cResult[11] === setting) {
          if (cResult[12] === tmp10) {
            if (cResult[13] === tmp11) {
              let tmp15;
              if (cResult[14] === tmp12) {
                tmp15 = cResult[15];
              }
              if (cResult[16] === manaTypeConsolidationExperiment) {
                let tmp18;
                if (cResult[17] === tmp15) {
                  tmp18 = cResult[18];
                }
                return tmp18;
              }
              let tmp19 = tmp15;
              if (manaTypeConsolidationExperiment) {
                let obj3 = { children: items };
                const obj4 = { children: tmp8 };
                items = [closure_19(closure_22, obj4), tmp15];
                tmp19 = closure_20(closure_5, obj3);
              }
              cResult[16] = manaTypeConsolidationExperiment;
              cResult[17] = tmp15;
              cResult[18] = tmp19;
              tmp18 = tmp19;
            }
          }
        }
      }
      const obj5 = { title: tmp10, accessibilityLabel: tmp11, onChange: tmp7, defaultValue: setting, hasIcons: true, children: tmp12 };
      const tmp17 = closure_19(tmp(6265).TableRadioGroup, obj5);
      cResult[10] = tmp7;
      cResult[11] = setting;
      cResult[12] = tmp10;
      cResult[13] = tmp11;
      cResult[14] = tmp12;
      cResult[15] = tmp17;
      tmp15 = tmp17;
    }
  }
  if (cResult[7] === setting) {
    let tmp13;
    if (cResult[8] === setting1) {
      tmp13 = cResult[9];
    }
    const mapped = arr.map(tmp13);
    cResult[3] = arr;
    cResult[4] = setting;
    cResult[5] = setting1;
    cResult[6] = mapped;
    tmp12 = mapped;
  }
  const fn2 = function b(value) {
    let date;
    let formatToPlainStringResult;
    let obj2;
    const obj = { label: obj2.getStatusLabel(value.value), subLabel: formatToPlainStringResult };
    const TableRadioRow = TableRadioRow5.TableRadioRow;
    const merged = Object.assign(value);
    formatToPlainStringResult = undefined;
    obj2 = getChannelA11yLabel;
    const tmp = closure_19;
    if (value.value === setting) {
      if (null != setting1) {
        if ("0" !== setting1) {
          const intl = tmp2(1126).intl;
          const formatToPlainString = intl.formatToPlainString;
          const _Date = Date;
          const _Number = Number;
          const obj3 = { endTime: date.toLocaleString(intl6.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" }) };
          const BWD8fs = tmp2(1126).t.BWD8fs;
          const self = this;
          const self2 = this;
          date = new Date(Number(setting1));
          formatToPlainStringResult = formatToPlainString(BWD8fs, obj3);
        }
      }
    }
    return tmp(TableRadioRow, obj, value.value);
  };
  cResult[7] = setting;
  cResult[8] = setting1;
  cResult[9] = fn2;
  tmp13 = fn2;
}) : (function YouStatusRadioGroup() {
  let items1;
  let setting;
  let tmp7;
  const arr = closure_23();
  const StatusSetting = setting(2040).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(2040).StatusExpiresAtSetting;
  let closure_1 = StatusExpiresAtSetting.useSetting();
  let obj = setting(6655);
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("YouAccountActionSheetOnlineStatus");
  const items = [setting];
  const callback = react.useCallback((nextStatus) => {
    const obj = { prevStatus: setting, nextStatus };
    setUserStatusDefault(obj);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items);
  let intl = setting(1126).intl;
  const stringResult = intl.string(setting(1126).t["0DPAZH"]);
  let tmp6;
  const TableRadioGroup = setting(6265).TableRadioGroup;
  if (!manaTypeConsolidationExperiment) {
    tmp6 = stringResult;
  }
  let obj2 = {
    title: tmp6,
    accessibilityLabel: tmp7,
    onChange: callback,
    defaultValue: setting,
    hasIcons: true,
    children: arr.map(function(value) {
      let date;
      let formatToPlainStringResult;
      let obj2;
      const obj = { label: obj2.getStatusLabel(value.value), subLabel: formatToPlainStringResult };
      const TableRadioRow = TableRadioRow5.TableRadioRow;
      const merged = Object.assign(value);
      formatToPlainStringResult = undefined;
      obj2 = getChannelA11yLabel;
      const tmp = closure_19;
      if (value.value === setting) {
        if (null != closure_1) {
          if ("0" !== closure_1) {
            const intl = tmp2(1126).intl;
            const formatToPlainString = intl.formatToPlainString;
            const _Date = Date;
            const _Number = Number;
            const obj3 = { endTime: date.toLocaleString(intl6.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" }) };
            const BWD8fs = tmp2(1126).t.BWD8fs;
            const self = this;
            const self2 = this;
            date = new Date(Number(closure_1));
            formatToPlainStringResult = formatToPlainString(BWD8fs, obj3);
          }
        }
      }
      return tmp(TableRadioRow, obj, value.value);
    })
  };
  tmp7 = undefined;
  if (manaTypeConsolidationExperiment) {
    tmp7 = stringResult;
  }
  const tmp5Result = closure_19(TableRadioGroup, obj2);
  let tmp9 = tmp5Result;
  if (manaTypeConsolidationExperiment) {
    let obj3 = { children: items1 };
    const obj4 = { children: stringResult };
    items1 = [closure_19(closure_22, obj4), tmp5Result];
    tmp9 = closure_20(closure_5, obj3);
  }
  return tmp9;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThemeRadioGroup() {
  let items1;
  let items2;
  let theme;
  let tmp10;
  let tmp12;
  let tmp18;
  let tmp22;
  let tmp26;
  let tmp30;
  let tmp4;
  let tmp5;
  let tmp9;
  let tmpResult10;
  let tmpResult7;
  let tmpResult8;
  let tmpResult9;
  let obj = react2;
  const cResult = obj.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function t() {
      return theme.theme;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmpResult6 = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = tmpResult6.useManaTypeConsolidationExperiment("YouAccountActionSheetTheme");
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l(arg0) {
      const obj = require("ClientThemesBackgroundActionCreators");
      const result = obj.resetBackgroundGradientPreset();
      const obj2 = require("CustomThemeMobileActionCreators");
      obj2.resetCustomTheme();
      const obj3 = UserSettingsActionCreatorsDefault;
      obj3.updateTheme(arg0);
    };
    cResult[2] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl6.t.Ksh3ik);
    cResult[3] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== manaTypeConsolidationExperiment) {
    let tmp13 = manaTypeConsolidationExperiment;
    if (tmp13) {
      let obj2 = { children: tmp10 };
      tmp13 = closure_19(closure_22, obj2);
    }
    cResult[4] = manaTypeConsolidationExperiment;
    cResult[5] = tmp13;
    tmp12 = tmp13;
  } else {
    tmp12 = cResult[5];
  }
  let tmp16;
  if (!manaTypeConsolidationExperiment) {
    tmp16 = tmp10;
  }
  let tmp17;
  if (manaTypeConsolidationExperiment) {
    tmp17 = tmp10;
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { icon: closure_19(ThemeLightIcon.ThemeLightIcon, {}), label: tmpResult7.getThemeName(constants4.LIGHT), value: constants4.LIGHT };
    const TableRadioRow = tmp(6264).TableRadioRow;
    tmpResult7 = ClientThemesUtils;
    const tmp21 = closure_19(TableRadioRow, obj3);
    cResult[6] = tmp21;
    tmp18 = tmp21;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { icon: closure_19(ThemeGrayIcon.ThemeGrayIcon, {}), label: tmpResult8.getThemeName(constants4.ASH), value: constants4.ASH };
    const TableRadioRow2 = tmp(6264).TableRadioRow;
    tmpResult8 = ClientThemesUtils;
    const tmp25 = closure_19(TableRadioRow2, obj4);
    cResult[7] = tmp25;
    tmp22 = tmp25;
  } else {
    tmp22 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { icon: closure_19(ThemeDarkIcon.ThemeDarkIcon, {}), label: tmpResult9.getThemeName(constants4.DARK), value: constants4.DARK };
    const TableRadioRow3 = tmp(6264).TableRadioRow;
    tmpResult9 = ClientThemesUtils;
    const tmp29 = closure_19(TableRadioRow3, obj5);
    cResult[8] = tmp29;
    tmp26 = tmp29;
  } else {
    tmp26 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { icon: closure_19(ThemeMidnightIcon.ThemeMidnightIcon, {}), label: tmpResult10.getThemeName(constants4.ONYX), value: constants4.ONYX };
    const TableRadioRow4 = tmp(6264).TableRadioRow;
    tmpResult10 = ClientThemesUtils;
    const tmp33 = closure_19(TableRadioRow4, obj6);
    cResult[9] = tmp33;
    tmp30 = tmp33;
  } else {
    tmp30 = cResult[9];
  }
  if (cResult[10] === tmp16) {
    if (cResult[11] === tmp17) {
      let tmp34;
      if (cResult[12] === stateFromStores) {
        tmp34 = cResult[13];
      }
      if (cResult[14] === tmp34) {
        let tmp36;
        if (cResult[15] === tmp12) {
          tmp36 = cResult[16];
        }
        return tmp36;
      }
      const obj7 = { children: items1 };
      items1 = [tmp12, tmp34];
      const tmp39 = closure_20(hasOwnProperty, obj7);
      cResult[14] = tmp34;
      cResult[15] = tmp12;
      cResult[16] = tmp39;
      tmp36 = tmp39;
    }
  }
  const obj8 = { title: tmp16, accessibilityLabel: tmp17, onChange: tmp9, defaultValue: stateFromStores, hasIcons: true, children: items2 };
  items2 = [tmp18, tmp22, tmp26, tmp30];
  const tmp35 = closure_20(TableRadioGroup2.TableRadioGroup, obj8);
  cResult[10] = tmp16;
  cResult[11] = tmp17;
  cResult[12] = stateFromStores;
  cResult[13] = tmp35;
  tmp34 = tmp35;
}) : (function ThemeRadioGroup() {
  let items2;
  let theme;
  let tmp13;
  let tmpResult;
  let tmpResult4;
  let tmpResult5;
  let tmpResult6;
  let obj = get_initialized;
  const items = [ThemeStore];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  let obj2 = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment("YouAccountActionSheetTheme");
  const callback = react.useCallback((arg0) => {
    const obj = require("ClientThemesBackgroundActionCreators");
    const result = obj.resetBackgroundGradientPreset();
    const obj2 = require("CustomThemeMobileActionCreators");
    obj2.resetCustomTheme();
    const obj3 = UserSettingsActionCreatorsDefault;
    obj3.updateTheme(arg0);
  }, []);
  const intl = intl6.intl;
  const stringResult = intl.string(intl6.t.Ksh3ik);
  let tmp9 = manaTypeConsolidationExperiment;
  const tmp8 = hasOwnProperty;
  if (manaTypeConsolidationExperiment) {
    let obj3 = { children: stringResult };
    tmp9 = closure_19(closure_22, obj3);
  }
  const items1 = [tmp9, ];
  let tmp12;
  const TableRadioGroup = tmp(6265).TableRadioGroup;
  if (!manaTypeConsolidationExperiment) {
    tmp12 = stringResult;
  }
  const obj4 = { title: tmp12, accessibilityLabel: tmp13, onChange: callback, defaultValue: stateFromStores, hasIcons: true, children: items2 };
  tmp13 = undefined;
  if (manaTypeConsolidationExperiment) {
    tmp13 = stringResult;
  }
  const obj5 = { children: items1 };
  const obj6 = { icon: closure_19(ThemeLightIcon.ThemeLightIcon, {}), label: tmpResult.getThemeName(constants4.LIGHT), value: constants4.LIGHT };
  const TableRadioRow = tmp(6264).TableRadioRow;
  tmpResult = ClientThemesUtils;
  items2 = [closure_19(TableRadioRow, obj6), , , ];
  const obj7 = { icon: closure_19(ThemeGrayIcon.ThemeGrayIcon, {}), label: tmpResult4.getThemeName(constants4.ASH), value: constants4.ASH };
  const TableRadioRow2 = tmp(6264).TableRadioRow;
  tmpResult4 = ClientThemesUtils;
  items2[1] = closure_19(TableRadioRow2, obj7);
  const obj8 = { icon: closure_19(ThemeDarkIcon.ThemeDarkIcon, {}), label: tmpResult5.getThemeName(constants4.DARK), value: constants4.DARK };
  const TableRadioRow3 = tmp(6264).TableRadioRow;
  tmpResult5 = ClientThemesUtils;
  items2[2] = closure_19(TableRadioRow3, obj8);
  const obj9 = { icon: closure_19(ThemeMidnightIcon.ThemeMidnightIcon, {}), label: tmpResult6.getThemeName(constants4.ONYX), value: constants4.ONYX };
  const TableRadioRow4 = tmp(6264).TableRadioRow;
  tmpResult6 = ClientThemesUtils;
  items2[3] = closure_19(TableRadioRow4, obj9);
  items1[1] = closure_20(TableRadioGroup, obj4);
  return closure_20(tmp8, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountRadioRowProps(arr) {
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp9;
  let obj = stateFromStores(576);
  const cResult = obj.c(7);
  const tmp = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StreamerModeStore];
    const fn = function o() {
      return StreamerModeStore.hidePersonalInformation;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === stateFromStores) {
    let tmp8;
    if (cResult[3] === arr) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  if (cResult[5] !== stateFromStores) {
    const fn2 = function s(id) {
      let Avatar;
      let obj3;
      const obj = new UserRecord(id);
      let combined = null;
      if (!stateFromStores) {
        combined = null;
        if (!obj.hasUniqueUsername()) {
          const _HermesInternal = HermesInternal;
          combined = "#" + obj.discriminator;
        }
      }
      let str2 = "always";
      const getUserTag = UserUtilsDefault.getUserTag;
      UserUtilsDefault;
      if (stateFromStores) {
        str2 = "never";
      }
      const obj2 = { label: getUserTag(obj, { mode: "username", identifiable: str2 }), value: id.id, subLabel: combined, icon: closure_19(Avatar, obj3) };
      obj3 = { user: obj, guildId: "Array", size: native.AvatarSizes.REFRESH_MEDIUM_32 };
      Avatar = native.Avatar;
      return obj2;
    };
    cResult[5] = stateFromStores;
    cResult[6] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[6];
  }
  const mapped = arr.map(tmp9);
  cResult[2] = stateFromStores;
  cResult[3] = arr;
  cResult[4] = mapped;
  tmp8 = mapped;
}) : (function useAccountRadioRowProps(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [StreamerModeStore];
  const stateFromStores = obj.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation);
  const items1 = [arg0, stateFromStores];
  return react.useMemo(() => closure_0.map((id) => {
    let Avatar;
    let obj3;
    const obj = new UserRecord(id);
    let combined = null;
    if (!closure_1_1) {
      combined = null;
      if (!obj.hasUniqueUsername()) {
        const _HermesInternal = HermesInternal;
        combined = "#" + obj.discriminator;
      }
    }
    let str2 = "always";
    const getUserTag = stateFromStores(dependencyMap[38]).getUserTag;
    stateFromStores(dependencyMap[38]);
    if (closure_1_1) {
      str2 = "never";
    }
    const obj2 = { label: getUserTag(obj, { mode: "username", identifiable: str2 }), value: id.id, subLabel: combined, icon: closure_2_19(Avatar, obj3) };
    obj3 = { user: obj, guildId: "Array", size: closure_0(dependencyMap[39]).AvatarSizes.REFRESH_MEDIUM_32 };
    Avatar = closure_0(tmp4[39]).Avatar;
    return obj2;
  }), items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouAccountRadioGroup() {
  let Text;
  let currentUser;
  let intl2;
  let obj3;
  let stateFromStores;
  let tmp5;
  let tmp6;
  let obj = stateFromStores(576);
  const cResult = obj.c(26);
  const tmp4 = closure_21();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function t() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = stateFromStores(504);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmpResult3 = stateFromStores(16170);
  const multiAccountUsers = tmpResult3.useMultiAccountUsers().multiAccountUsers;
  const arr2 = closure_26(multiAccountUsers);
  const tmpResult4 = stateFromStores(6655);
  const manaTypeConsolidationExperiment = tmpResult4.useManaTypeConsolidationExperiment("YouAccountActionSheetSwitchAccounts");
  let id1;
  const tmp10 = cResult[2];
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  if (tmp10 === id1) {
    let tmp12;
    if (cResult[3] === multiAccountUsers) {
      tmp12 = cResult[4];
    }
    if (null == stateFromStores) {
      return null;
    } else {
      let tmp13;
      let tmp15;
      let tmp16;
      const _Symbol4 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(stateFromStores(1126).t.oMNyYN);
        cResult[5] = stringResult;
        tmp13 = stringResult;
      } else {
        tmp13 = cResult[5];
      }
      const _Symbol = Symbol;
      const account = tmp4.account;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function y() {
          return multiAccountUsers(dependencyMap[41])();
        };
        cResult[6] = fn3;
        tmp15 = fn3;
      } else {
        tmp15 = cResult[6];
      }
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { onPress: tmp15, children: closure_19(Text, obj3) };
        const PressableOpacity = tmp(6189).PressableOpacity;
        obj3 = { variant: "text-sm/semibold", color: "text-brand", children: intl2.string(stateFromStores(1126).t.HxrBOZ) };
        Text = tmp(5086).Text;
        intl2 = tmp(1126).intl;
        const tmp18 = closure_19(PressableOpacity, obj2);
        cResult[7] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] !== tmp4.manage) {
        let obj4 = { style: tmp4.manage, children: tmp16 };
        cResult[8] = tmp4.manage;
        cResult[9] = closure_19(closure_5, obj4);
        const tmp22 = closure_19(closure_5, obj4);
      }
      if (cResult[10] !== manaTypeConsolidationExperiment) {
        let tmp24 = manaTypeConsolidationExperiment;
        if (tmp24) {
          const obj5 = { children: tmp13 };
          tmp24 = closure_19(closure_22, obj5);
        }
        cResult[10] = manaTypeConsolidationExperiment;
        cResult[11] = tmp24;
      }
      let tmp27;
      if (!manaTypeConsolidationExperiment) {
        tmp27 = tmp13;
      }
      let tmp28;
      if (manaTypeConsolidationExperiment) {
        tmp28 = tmp13;
      }
      let id = stateFromStores.id;
      if (cResult[12] !== arr2) {
        let tmp30;
        const _Symbol3 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor(value) {
              const obj = {};
              const TableRadioRow = stateFromStores(dependencyMap[26]).TableRadioRow;
              const merged = Object.assign(value);
              return closure_1_19(TableRadioRow, obj, value.value);
            }
          }
          cResult[14] = M;
          tmp30 = M;
        } else {
          class M {
            constructor(value) {
              const obj = {};
              const TableRadioRow = stateFromStores(dependencyMap[26]).TableRadioRow;
              const merged = Object.assign(value);
              return closure_1_19(TableRadioRow, obj, value.value);
            }
          }
        }
        const mapped = arr2.map(tmp30);
        cResult[12] = arr2;
        cResult[13] = mapped;
      } else {
        class M {
          constructor(value) {
            const obj = {};
            const TableRadioRow = stateFromStores(dependencyMap[26]).TableRadioRow;
            const merged = Object.assign(value);
            return closure_1_19(TableRadioRow, obj, value.value);
          }
        }
      }
      if (cResult[15] === stateFromStores.id) {
        class M {
          constructor(value) {
            const obj = {};
            const TableRadioRow = stateFromStores(dependencyMap[26]).TableRadioRow;
            const merged = Object.assign(value);
            return closure_1_19(TableRadioRow, obj, value.value);
          }
        }
      }
      const obj6 = { title: tmp27, accessibilityLabel: tmp28, onChange: tmp12, defaultValue: id, hasIcons: true, children: tmp29 };
      cResult[15] = stateFromStores.id;
      cResult[16] = tmp12;
      cResult[17] = tmp28;
      cResult[18] = tmp29;
      cResult[19] = tmp27;
      cResult[20] = closure_19(stateFromStores(6265).TableRadioGroup, obj6);
      const tmp34 = closure_19(stateFromStores(6265).TableRadioGroup, obj6);
    }
  }
  if (stateFromStores != null) {
    class M {
      constructor(value) {
        const obj = {};
        const TableRadioRow = stateFromStores(dependencyMap[26]).TableRadioRow;
        const merged = Object.assign(value);
        return closure_1_19(TableRadioRow, obj, value.value);
      }
    }
  }
  const fn2 = function c(arg0) {
    let closure_0 = arg0;
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (arg0 !== id) {
      const found = multiAccountUsers.find((id) => id.id === closure_0);
      if (null != found) {
        if (found.tokenStatus === MultiAccountTokenStatus.INVALID) {
          openManageAccountsModalDefault(constants2.LOGIN);
          const obj = AnalyticsUtilsDefault;
          obj.track(constants.LOGIN_VIEWED, { source: "you_account_action_sheet" });
        } else {
          const obj2 = { location: AnalyticsLocationDefault.YOU_ACCOUNT_ACTION_SHEET };
          const track = AnalyticsUtilsDefault.track;
          const MULTI_ACCOUNT_SWITCH_ATTEMPT = constants.MULTI_ACCOUNT_SWITCH_ATTEMPT;
          AnalyticsUtilsDefault;
          track(MULTI_ACCOUNT_SWITCH_ATTEMPT, obj2);
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
          const obj4 = MultiAccountActionCreatorsAll;
          obj4.switchAccount(found.id, undefined, constants.YOU_ACCOUNT_ACTION_SHEET);
        }
      }
    }
  };
  cResult[2] = undefined;
  cResult[3] = multiAccountUsers;
  cResult[4] = fn2;
  tmp12 = fn2;
}) : (function YouAccountRadioGroup() {
  let PressableOpacity;
  let Text;
  let currentUser;
  let intl2;
  let items2;
  let obj6;
  let obj7;
  let stateFromStores;
  let tmp11;
  const tmp = closure_21();
  let obj = stateFromStores(504);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = stateFromStores(16170);
  const multiAccountUsers = obj2.useMultiAccountUsers().multiAccountUsers;
  const arr2 = closure_26(multiAccountUsers);
  let obj3 = stateFromStores(6655);
  const manaTypeConsolidationExperiment = obj3.useManaTypeConsolidationExperiment("YouAccountActionSheetSwitchAccounts");
  const items1 = [multiAccountUsers, ];
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items1[1] = id;
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp2(1126).intl;
    const stringResult = intl.string(stateFromStores(1126).t.oMNyYN);
    let obj4 = { style: tmp.account, children: items2 };
    const tmp13 = closure_20;
    const obj5 = { style: tmp.manage, children: closure_19(PressableOpacity, obj6) };
    obj6 = {
      onPress() {
          return multiAccountUsers(dependencyMap[41])();
        },
      children: closure_19(Text, obj7)
    };
    PressableOpacity = tmp2(6189).PressableOpacity;
    obj7 = { variant: "text-sm/semibold", color: "text-brand", children: intl2.string(stateFromStores(1126).t.HxrBOZ) };
    Text = tmp2(5086).Text;
    intl2 = tmp2(1126).intl;
    items2 = [closure_19(closure_5, obj5), , ];
    let tmp15Result = manaTypeConsolidationExperiment;
    const tmp14 = closure_5;
    if (tmp15Result) {
      const obj8 = { children: stringResult };
      tmp15Result = tmp15(closure_22, obj8);
    }
    items2[1] = tmp15Result;
    let tmp10;
    const TableRadioGroup = tmp2(6265).TableRadioGroup;
    if (!manaTypeConsolidationExperiment) {
      tmp10 = stringResult;
    }
    const obj9 = {
      title: tmp10,
      accessibilityLabel: tmp11,
      onChange: tmp7,
      defaultValue: stateFromStores.id,
      hasIcons: true,
      children: arr2.map((value) => {
          const obj = {};
          const TableRadioRow = stateFromStores(dependencyMap[26]).TableRadioRow;
          const merged = Object.assign(value);
          return closure_1_19(TableRadioRow, obj, value.value);
        })
    };
    tmp11 = undefined;
    if (manaTypeConsolidationExperiment) {
      tmp11 = stringResult;
    }
    items2[2] = closure_19(TableRadioGroup, obj9);
    return tmp13(tmp14, obj4);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function CustomStatus() {
  let intl4;
  let items;
  let items1;
  let obj5;
  let obj7;
  let tmp16;
  let obj = react2;
  const cResult = obj.c(33);
  const tmp4 = closure_21();
  let obj2 = userSettingToActivity;
  const customStatusActivity = obj2.useCustomStatusActivity();
  const obj3 = useToken;
  const token = obj3.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  let state;
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  let tmp9 = null != state && "" !== customStatusActivity.state;
  if (!tmp9) {
    let emoji1;
    if (customStatusActivity != null) {
      emoji1 = customStatusActivity.emoji;
    }
    tmp9 = null != emoji1;
  }
  let state1;
  const useGameMentionsAsPlainText = useGameMentionsAsPlainText2.useGameMentionsAsPlainText;
  useGameMentionsAsPlainText2;
  if (customStatusActivity != null) {
    state1 = customStatusActivity.state;
  }
  const gameMentionsAsPlainText = useGameMentionsAsPlainText(state1);
  const tmpResult3 = useToken;
  const token1 = tmpResult3.useToken(tmp6(587).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const tmpResult4 = useToken;
  const token2 = tmpResult4.useToken(tmp6(587).modules.mobile.TABLE_ROW_LABEL_COLOR);
  if (cResult[0] !== tmp9) {
    let stringResult;
    const intl = tmp(1126).intl;
    const string = intl.string;
    const t = tmp(1126).t;
    if (tmp9) {
      stringResult = string(t["2p9FMw"]);
    } else {
      stringResult = string(t["/UonHN"]);
    }
    cResult[0] = tmp9;
    cResult[1] = stringResult;
    tmp16 = stringResult;
  } else {
    tmp16 = cResult[1];
  }
  if (cResult[2] === customStatusActivity) {
    if (cResult[3] === tmp9) {
      let tmp18;
      let tmp21;
      let tmp25;
      if (cResult[4] === gameMentionsAsPlainText) {
        tmp18 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          let items;
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = { analyticsLocations: items };
          const openEditCustomStatusModal = require("CustomStatusUtils").openEditCustomStatusModal;
          items = [];
          require("CustomStatusUtils");
          items[0] = AnalyticsLocationDefault.YOU_ACCOUNT_ACTION_SHEET;
          const result = openEditCustomStatusModal(obj2);
        };
        cResult[6] = fn;
        tmp21 = fn;
      } else {
        tmp21 = cResult[6];
      }
      if (cResult[7] === customStatusActivity) {
        if (cResult[8] === tmp4.leadingIcon) {
          let tmp22;
          if (cResult[9] === token) {
            tmp22 = cResult[10];
          }
          if (cResult[11] === tmp9) {
            let tmp27;
            if (cResult[12] === gameMentionsAsPlainText) {
              tmp27 = cResult[13];
            }
            if (cResult[14] === token2) {
              if (cResult[15] === token1) {
                if (cResult[16] === tmp4.customStatusText) {
                  let tmp29;
                  if (cResult[17] === tmp27) {
                    tmp29 = cResult[18];
                  }
                  if (cResult[19] === tmp4.customStatusEditButton) {
                    if (cResult[20] === tmp16) {
                      if (cResult[21] === tmp18) {
                        if (cResult[22] === tmp22) {
                          let tmp32;
                          if (cResult[23] === tmp29) {
                            tmp32 = cResult[24];
                          }
                          if (cResult[25] === customStatusActivity) {
                            if (cResult[26] === tmp4.customStatusRemoveButton) {
                              let tmp35;
                              if (cResult[27] === tmp4.trailingIcon) {
                                tmp35 = cResult[28];
                              }
                              if (cResult[29] === tmp4.customStatusRow) {
                                if (cResult[30] === tmp32) {
                                  let tmp39;
                                  if (cResult[31] === tmp35) {
                                    tmp39 = cResult[32];
                                  }
                                  return tmp39;
                                }
                              }
                              const obj4 = { hasIcons: false, children: closure_20(Card_Card.Card, obj5) };
                              const TableRowGroup = tmp(6267).TableRowGroup;
                              obj5 = { shadow: "none", border: "none", style: tmp4.customStatusRow, children: items };
                              items = [tmp32, tmp35];
                              const tmp42 = closure_19(TableRowGroup, obj4);
                              cResult[29] = tmp4.customStatusRow;
                              cResult[30] = tmp32;
                              cResult[31] = tmp35;
                              cResult[32] = tmp42;
                              tmp39 = tmp42;
                            }
                          }
                          let tmp36 = null;
                          if (null != customStatusActivity) {
                            const obj6 = {
                              onPress(stopPropagation) {
                                                          stopPropagation.stopPropagation();
                                                          removeCustomStatusDefault();
                                                        },
                              accessibilityRole: "button",
                              accessibilityLabel: intl4.string(intl6.t.wfYTHe),
                              style: tmp4.customStatusRemoveButton,
                              children: closure_19(metroRequire, obj7)
                            };
                            const PressableOpacity = tmp(6189).PressableOpacity;
                            intl4 = tmp(1126).intl;
                            obj7 = { style: tmp4.trailingIcon, source: AssetRegistryDefault };
                            tmp36 = closure_19(PressableOpacity, obj6);
                          }
                          cResult[25] = customStatusActivity;
                          cResult[26] = tmp4.customStatusRemoveButton;
                          cResult[27] = tmp4.trailingIcon;
                          cResult[28] = tmp36;
                          tmp35 = tmp36;
                        }
                      }
                    }
                  }
                  const obj8 = { style: tmp4.customStatusEditButton, accessibilityRole: "button", accessibilityLabel: tmp16, accessibilityHint: tmp18, onPress: tmp21, children: items1 };
                  items1 = [tmp22, tmp29];
                  const tmp34 = closure_20(Pressables.PressableOpacity, obj8);
                  cResult[19] = tmp4.customStatusEditButton;
                  cResult[20] = tmp16;
                  cResult[21] = tmp18;
                  cResult[22] = tmp22;
                  cResult[23] = tmp29;
                  cResult[24] = tmp34;
                  tmp32 = tmp34;
                }
              }
            }
            const obj9 = { variant: token1, color: token2, lineClamp: 2, style: tmp4.customStatusText, children: tmp27 };
            const tmp31 = closure_19(Text_Text.Text, obj9);
            cResult[14] = token2;
            cResult[15] = token1;
            cResult[16] = tmp4.customStatusText;
            cResult[17] = tmp27;
            cResult[18] = tmp31;
            tmp29 = tmp31;
          }
          let stringResult1 = gameMentionsAsPlainText;
          if (!tmp9) {
            const intl3 = tmp(1126).intl;
            stringResult1 = intl3.string(tmp(1126).t["/UonHN"]);
          }
          cResult[11] = tmp9;
          cResult[12] = gameMentionsAsPlainText;
          cResult[13] = stringResult1;
          tmp27 = stringResult1;
        }
      }
      let emoji2;
      if (customStatusActivity != null) {
        emoji2 = customStatusActivity.emoji;
      }
      if (null != emoji2) {
        const obj10 = { emoji: customStatusActivity.emoji, size: token };
        tmp25 = closure_19(tmp6(10242), obj10);
      } else {
        const obj11 = { size: "md", style: tmp4.leadingIcon };
        tmp25 = closure_19(tmp(8930).ReactionIcon, obj11);
      }
      cResult[7] = customStatusActivity;
      cResult[8] = tmp4.leadingIcon;
      cResult[9] = token;
      cResult[10] = tmp25;
      tmp22 = tmp25;
    }
  }
  let formatToPlainStringResult;
  if (tmp9) {
    const intl2 = tmp(1126).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const emoji = customStatusActivity.emoji;
    let str2;
    const GE7QzY = tmp(1126).t.GE7QzY;
    if (emoji != null) {
      str2 = emoji.name;
    }
    if (str2 == null) {
      str2 = "";
    }
    const obj12 = { emoji: str2, status: gameMentionsAsPlainText };
    formatToPlainStringResult = formatToPlainString(GE7QzY, obj12);
  }
  cResult[2] = customStatusActivity;
  cResult[3] = tmp9;
  cResult[4] = gameMentionsAsPlainText;
  cResult[5] = formatToPlainStringResult;
  tmp18 = formatToPlainStringResult;
}) : (function CustomStatus() {
  let formatToPlainStringResult;
  let intl4;
  let items;
  let items1;
  let obj10;
  let stringResult;
  let tmp15Result;
  const tmp = closure_21();
  let obj = userSettingToActivity;
  const customStatusActivity = obj.useCustomStatusActivity();
  let obj2 = useToken;
  let state;
  const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  let tmp8 = null != state && "" !== customStatusActivity.state;
  if (!tmp8) {
    let emoji1;
    if (customStatusActivity != null) {
      emoji1 = customStatusActivity.emoji;
    }
    tmp8 = null != emoji1;
  }
  let state1;
  const useGameMentionsAsPlainText = useGameMentionsAsPlainText2.useGameMentionsAsPlainText;
  useGameMentionsAsPlainText2;
  if (customStatusActivity != null) {
    state1 = customStatusActivity.state;
  }
  let gameMentionsAsPlainText = useGameMentionsAsPlainText(state1);
  const tmp2Result3 = useToken;
  const token1 = tmp2Result3.useToken(tmp5(587).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const tmp2Result4 = useToken;
  const token2 = tmp2Result4.useToken(tmp5(587).modules.mobile.TABLE_ROW_LABEL_COLOR);
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  const obj3 = { shadow: "none", border: "none", style: tmp.customStatusRow, children: items1 };
  const Card = Card_Card.Card;
  const obj4 = {
    style: tmp.customStatusEditButton,
    accessibilityRole: "button",
    accessibilityLabel: stringResult,
    accessibilityHint: formatToPlainStringResult,
    onPress() {
      let items;
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = { analyticsLocations: items };
      const openEditCustomStatusModal = require("CustomStatusUtils").openEditCustomStatusModal;
      items = [];
      require("CustomStatusUtils");
      items[0] = AnalyticsLocationDefault.YOU_ACCOUNT_ACTION_SHEET;
      const result = openEditCustomStatusModal(obj2);
    },
    children: items
  };
  const PressableOpacity = Pressables.PressableOpacity;
  const intl = intl6.intl;
  const string = intl.string;
  const t = intl6.t;
  if (tmp8) {
    stringResult = string(t["2p9FMw"]);
  } else {
    stringResult = string(t["/UonHN"]);
  }
  formatToPlainStringResult = undefined;
  if (tmp8) {
    const intl2 = intl6.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const emoji = customStatusActivity.emoji;
    let str2;
    const GE7QzY = intl6.t.GE7QzY;
    if (emoji != null) {
      str2 = emoji.name;
    }
    if (str2 == null) {
      str2 = "";
    }
    const obj5 = { emoji: str2, status: gameMentionsAsPlainText };
    formatToPlainStringResult = formatToPlainString(GE7QzY, obj5);
  }
  let emoji2;
  if (customStatusActivity != null) {
    emoji2 = customStatusActivity.emoji;
  }
  if (null != emoji2) {
    const obj6 = { emoji: customStatusActivity.emoji, size: token };
    tmp15Result = tmp15(tmp5(10242), obj6);
  } else {
    const obj7 = { size: "md", style: tmp.leadingIcon };
    tmp15Result = tmp15(ReactionIcon.ReactionIcon, obj7);
  }
  items = [tmp15Result, ];
  const obj8 = { variant: token1, color: token2, lineClamp: 2, style: tmp.customStatusText, children: gameMentionsAsPlainText };
  const Text = Text_Text.Text;
  if (!tmp8) {
    const intl3 = intl6.intl;
    gameMentionsAsPlainText = intl3.string(intl6.t["/UonHN"]);
  }
  items[1] = closure_19(Text, obj8);
  items1 = [closure_20(PressableOpacity, obj4), ];
  let tmp15Result2 = null;
  if (null != customStatusActivity) {
    const obj9 = {
      onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          removeCustomStatusDefault();
        },
      accessibilityRole: "button",
      accessibilityLabel: intl4.string(intl6.t.wfYTHe),
      style: tmp.customStatusRemoveButton,
      children: closure_19(metroRequire, obj10)
    };
    const PressableOpacity2 = Pressables.PressableOpacity;
    intl4 = intl6.intl;
    obj10 = { style: tmp.trailingIcon, source: AssetRegistryDefault };
    tmp15Result2 = tmp15(PressableOpacity2, obj9);
  }
  items1[1] = tmp15Result2;
  const obj11 = { hasIcons: false, children: closure_20(Card, obj3) };
  return closure_19(TableRowGroup, obj11);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function YouAccountActionSheet(statusOnly) {
  let canUseMultiAccountMobile;
  let isDeveloper;
  let items2;
  let items3;
  let stringResult;
  let tmp11;
  let tmp12;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(33);
  statusOnly = statusOnly.statusOnly;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MultiAccountStore];
    const fn = function n() {
      return canUseMultiAccountMobile.getCanUseMultiAccountMobile();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp10 = useDesignToggleDefault("theme_setting_in_account_sheet");
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [DeveloperExperimentStore];
    const fn2 = function b() {
      return isDeveloper.isDeveloper;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp12 = fn2;
    tmp11 = items1;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult3 = get_initialized;
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp11, tmp12);
  const tmpResult4 = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = tmpResult4.useManaTypeConsolidationExperiment("YouAccountActionSheetDeveloperTools");
  if (cResult[4] === stateFromStores) {
    let tmp16;
    let tmp18;
    let tmp21;
    let tmp27;
    let tmp26;
    let tmp25;
    if (cResult[5] === (undefined !== statusOnly && statusOnly)) {
      tmp16 = cResult[6];
    }
    if (cResult[7] !== tmp16) {
      const obj2 = { title: tmp16 };
      const tmp20 = closure_19(BottomSheetTitleHeader2.BottomSheetTitleHeader, obj2);
      cResult[7] = tmp16;
      cResult[8] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[8];
    }
    if (cResult[9] !== tmp10) {
      const tmp22 = tmp10 && closure_19(closure_25, {});
      cResult[9] = tmp10;
      cResult[10] = tmp22;
      tmp21 = tmp22;
    } else {
      tmp21 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp30 = closure_19(closure_24, {});
      const tmp32 = closure_19(FocusModeSetting, {});
      const tmp34 = closure_19(closure_29, {});
      cResult[11] = tmp32;
      cResult[12] = tmp34;
      cResult[13] = tmp30;
      tmp27 = tmp30;
      tmp26 = tmp34;
      tmp25 = tmp32;
    } else {
      tmp25 = cResult[11];
      tmp26 = cResult[12];
      tmp27 = cResult[13];
    }
    if (cResult[14] === stateFromStores) {
      let tmp35;
      if (cResult[15] === (undefined !== statusOnly && statusOnly)) {
        tmp35 = cResult[16];
      }
      if (cResult[17] === stateFromStores1) {
        let tmp39;
        if (cResult[18] === (undefined !== statusOnly && statusOnly)) {
          tmp39 = cResult[19];
        }
        if (cResult[20] === stateFromStores1) {
          if (cResult[21] === manaTypeConsolidationExperiment) {
            let tmp42;
            if (cResult[22] === (undefined !== statusOnly && statusOnly)) {
              tmp42 = cResult[23];
            }
            if (cResult[24] === tmp35) {
              if (cResult[25] === tmp39) {
                if (cResult[26] === tmp42) {
                  let tmp50;
                  if (cResult[27] === tmp21) {
                    tmp50 = cResult[28];
                  }
                  if (cResult[29] === stateFromStores) {
                    if (cResult[30] === tmp50) {
                      let tmp53;
                      if (cResult[31] === tmp18) {
                        tmp53 = cResult[32];
                      }
                      return tmp53;
                    }
                  }
                  const obj3 = { startExpanded: stateFromStores, header: tmp18, showGradient: true, children: tmp50 };
                  const tmp55 = closure_19(ActionSheet2.ActionSheet, obj3);
                  cResult[29] = stateFromStores;
                  cResult[30] = tmp50;
                  cResult[31] = tmp18;
                  cResult[32] = tmp55;
                  tmp53 = tmp55;
                }
              }
            }
            const obj4 = { spacing: 24, children: items2 };
            items2 = [tmp21, tmp27, tmp25, tmp26, tmp35, tmp39, tmp42];
            const tmp52 = closure_20(Stack_Stack.Stack, obj4);
            cResult[24] = tmp35;
            cResult[25] = tmp39;
            cResult[26] = tmp42;
            cResult[27] = tmp21;
            cResult[28] = tmp52;
            tmp50 = tmp52;
          }
        }
        let tmp43 = !tmp4 && stateFromStores1;
        if (tmp43) {
          let tmp45;
          if (manaTypeConsolidationExperiment) {
            const obj5 = { children: items3 };
            items3 = [closure_19(closure_22, { children: "Developer Tools" }), closure_19(DevToolsContentDefault, { embedded: true })];
            tmp45 = closure_20(hasOwnProperty, obj5);
          } else {
            tmp45 = closure_19(tmp9(15919), { title: "Developer Tools", embedded: true });
          }
          tmp43 = tmp45;
        }
        cResult[20] = stateFromStores1;
        cResult[21] = manaTypeConsolidationExperiment;
        cResult[22] = undefined !== statusOnly && statusOnly;
        cResult[23] = tmp43;
        tmp42 = tmp43;
      }
      const tmp40 = !tmp4 && stateFromStores1 && closure_19(tmp9(16621), {});
      cResult[17] = stateFromStores1;
      cResult[18] = undefined !== statusOnly && statusOnly;
      cResult[19] = tmp40;
      tmp39 = tmp40;
    }
    const tmp36 = !tmp4 && stateFromStores && closure_19(closure_27, {});
    cResult[14] = stateFromStores;
    cResult[15] = undefined !== statusOnly && statusOnly;
    cResult[16] = tmp36;
    tmp35 = tmp36;
  }
  const intl = tmp(1126).intl;
  const string = intl.string;
  const t = tmp(1126).t;
  if (undefined !== statusOnly && statusOnly) {
    stringResult = string(t["3Uj+2p"]);
  } else if (stateFromStores) {
    stringResult = string(t["ldCE/p"]);
  } else {
    stringResult = string(t["qP/i6k"]);
  }
  cResult[4] = stateFromStores;
  cResult[5] = undefined !== statusOnly && statusOnly;
  cResult[6] = stringResult;
  tmp16 = stringResult;
}) : (function YouAccountActionSheet(statusOnly) {
  let BottomSheetTitleHeader;
  let Stack;
  let canUseMultiAccountMobile;
  let isDeveloper;
  let items2;
  let items3;
  let stringResult;
  let flag = statusOnly.statusOnly;
  if (flag === undefined) {
    flag = false;
  }
  const items = [MultiAccountStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile());
  const tmp5 = useDesignToggleDefault("theme_setting_in_account_sheet");
  const items1 = [DeveloperExperimentStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => isDeveloper.isDeveloper);
  const obj3 = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj3.useManaTypeConsolidationExperiment("YouAccountActionSheetDeveloperTools");
  const obj4 = { startExpanded: stateFromStores, header: closure_19(BottomSheetTitleHeader, { title: stringResult }), showGradient: true, children: closure_20(Stack, { spacing: 24, children: items2 }) };
  const ActionSheet = ActionSheet2.ActionSheet;
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  const intl = intl6.intl;
  const string = intl.string;
  const t = intl6.t;
  if (flag) {
    stringResult = string(t["3Uj+2p"]);
  } else if (stateFromStores) {
    stringResult = string(t["ldCE/p"]);
  } else {
    stringResult = string(t["qP/i6k"]);
  }
  let tmp8Result = tmp5;
  Stack = Stack_Stack.Stack;
  if (tmp5) {
    tmp8Result = tmp8(closure_25, {});
  }
  items2 = [tmp8Result, closure_19(closure_24, {}), closure_19(FocusModeSetting, {}), closure_19(closure_29, {}), , , ];
  items2[4] = !flag && stateFromStores && tmp8(closure_27, {});
  const tmp8Result2 = !flag && stateFromStores && tmp8(closure_27, {});
  items2[5] = !flag && stateFromStores1 && closure_19(YouSwitchClientsRadioGroupDefault, {});
  let tmp16 = !flag && stateFromStores1;
  !flag && stateFromStores1 && closure_19(YouSwitchClientsRadioGroupDefault, {});
  if (tmp16) {
    let tmp8Result3;
    if (manaTypeConsolidationExperiment) {
      const obj5 = { children: items3 };
      items3 = [closure_19(closure_22, { children: "Developer Tools" }), closure_19(DevToolsContentDefault, { embedded: true })];
      tmp8Result3 = tmp10(hasOwnProperty, obj5);
    } else {
      tmp8Result3 = tmp8(tmp4(15919), { title: "Developer Tools", embedded: true });
    }
    tmp16 = tmp8Result3;
  }
  items2[6] = tmp16;
  return closure_19(ActionSheet, obj4);
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx");

export default memoResult;
