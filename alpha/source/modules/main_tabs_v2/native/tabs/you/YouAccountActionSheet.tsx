// Module ID: 16798
// Function ID: 16799
// Name: YouAccountActionSheet
// Dependencies: [19, 17, 12762, 1182, 1386, 8043, 4674, 1372, 1074, 12763, 21, 4829, 576, 4825, 5916, 14476, 14473, 14474, 14475, 2020, 7313, 10438, 4796, 1115, 5990, 5993, 9951, 504, 15514, 12288, 9553, 15618, 1228, 16799, 11669, 15620, 4673, 1177, 16368, 16801, 1241, 7515, 12766, 5427, 10437, 5992, 7533, 10500, 16806, 1980, 16796, 9713, 4526, 11230, 5912, 11466, 11244, 9117, 11473, 7422, 5931, 7530, 7482, 5271, 16807, 16144, 2]

// Module 16798 (YouAccountActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1228 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import UserSettings from "UserSettings" /* 2020 */;
import useToken from "useToken" /* 4526 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import Text_Text from "Text/Text" /* 4825 */;
import Pressables from "Pressables" /* 5427 */;
import Card from "Card" /* 5912 */;
import useDesignToggleDefault from "useDesignToggle" /* 5931 */;
import TableRadioGroup from "TableRadioGroup" /* 5990 */;
import TableRadioRow from "TableRadioRow" /* 5993 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 7313 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7482 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7515 */;
import ActionSheet from "ActionSheet" /* 7530 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9553 */;
import userSettingToActivity from "userSettingToActivity" /* 9713 */;
import getChannelA11yLabel from "getChannelA11yLabel" /* 9951 */;
import FocusModeUtils from "FocusModeUtils" /* 10437 */;
import setUserStatusDefault from "setUserStatus" /* 10438 */;
import useGameMentionsAsPlainText from "useGameMentionsAsPlainText" /* 11230 */;
import CustomStatusUtils from "CustomStatusUtils" /* 11466 */;
import removeCustomStatusDefault from "removeCustomStatus" /* 11473 */;
import ThemeDarkIcon from "ThemeDarkIcon" /* 11669 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 12288 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 12766 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 15514 */;
import ThemeLightIcon from "ThemeLightIcon" /* 15618 */;
import ThemeMidnightIcon from "ThemeMidnightIcon" /* 15620 */;
import ThemeGrayIcon from "ThemeGrayIcon" /* 16799 */;
import openManageAccountsModalDefault from "openManageAccountsModal" /* 16801 */;
import noop from "module_19" /* 19 */;
import MultiAccountStore from "MultiAccountStore" /* 12762 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import UserRecord from "UserRecord" /* 1386 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 8043 */;
import StreamerModeStore from "StreamerModeStore" /* 4674 */;
import UserStore from "UserStore" /* 1372 */;

const Stack_Stack = tmp(5271);
const TableRowGroup = currentLocale(5992);
const TableSwitchRow = currentLocale(7533);
const BellSlashIcon = currentLocale(10500);
const DevToolsContentDefault = tmp4(16144);
const YouSwitchClientsRadioGroupDefault = tmp4(16807);
require = fn;
function AccountSectionHeading(children) {
  const tmp = closure_21();
  return closure_1_19(Text_Text.Text, { accessibilityRole: "header", variant: "experimental/body-sm/medium", color: "text-subtle", style: closure_21().sectionHeading, children: children.children });
}
function YouStatusRadioGroup() {
  const memo = noop.useMemo(() => {
    const obj = { icon: closure_1_19(setting(5916).TableRowIcon, { source: closure_1(14476), variant: "text-status-online" }), value: constants.ONLINE };
    const items = [obj, , , ];
    const obj3 = { icon: null, value: null };
    const obj2 = { source: closure_1(14476), variant: "text-status-online" };
    obj3.icon = closure_1_19(setting(5916).TableRowIcon, { source: closure_1(14473), variant: "text-status-idle" });
    obj3.value = constants.IDLE;
    items[1] = obj3;
    const obj5 = { icon: null, value: null };
    const obj4 = { source: closure_1(14473), variant: "text-status-idle" };
    obj5.icon = closure_1_19(setting(5916).TableRowIcon, { source: closure_1(14474), variant: "text-status-dnd" });
    obj5.value = constants.DND;
    items[2] = obj5;
    const obj7 = { icon: null, value: null };
    const obj6 = { source: closure_1(14474), variant: "text-status-dnd" };
    obj7.icon = closure_1_19(setting(5916).TableRowIcon, { source: closure_1(14475), variant: "text-status-offline" });
    obj7.value = constants.INVISIBLE;
    items[3] = obj7;
    return items;
  }, []);
  const StatusSetting = setting(2020).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(2020).StatusExpiresAtSetting;
  closure_1 = StatusExpiresAtSetting.useSetting();
  const manaTypeConsolidationExperiment = setting(7313).useManaTypeConsolidationExperiment("YouAccountActionSheetOnlineStatus");
  let items = [setting];
  const callback = noop.useCallback((nextStatus) => {
    setUserStatusDefault({ prevStatus: setting, nextStatus });
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let intl = setting(1115).intl;
  const stringResult = intl.string(setting(1115).t["0DPAZH"]);
  let tmp6;
  if (!manaTypeConsolidationExperiment) {
    tmp6 = stringResult;
  }
  let obj2 = { title: tmp6, accessibilityLabel: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
  let tmp7;
  if (manaTypeConsolidationExperiment) {
    tmp7 = stringResult;
  }
  obj2.accessibilityLabel = tmp7;
  obj2.onChange = callback;
  obj2.defaultValue = setting;
  obj2.children = memo.map((value) => {
    const obj = {};
    const merged = Object.assign(value);
    obj.label = getChannelA11yLabel.getStatusLabel(value.value);
    let formatToPlainStringResult;
    if (value.value === setting) {
      if (null != closure_1) {
        if ("0" !== tmp6) {
          const intl = tmp2(1115).intl;
          const obj3 = { endTime: null };
          const _Date = Date;
          const _Number = Number;
          const date = new Date(Number(tmp6));
          obj3.endTime = date.toLocaleString(tmp2(1115).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
          formatToPlainStringResult = intl.formatToPlainString(tmp2(1115).t.BWD8fs, obj3);
        }
      }
    }
    obj.subLabel = formatToPlainStringResult;
    return closure_2_19(TableRadioRow.TableRadioRow, obj, value.value);
  });
  const tmp5Result = closure_19(setting(5990).TableRadioGroup, obj2);
  let tmp9 = tmp5Result;
  if (manaTypeConsolidationExperiment) {
    let obj3 = { children: null };
    let obj4 = { children: stringResult };
    const items1 = [tmp5(AccountSectionHeading, obj4), tmp5Result];
    obj3.children = items1;
    tmp9 = closure_20(closure_5, obj3);
  }
  return tmp9;
}
function ThemeRadioGroup() {
  const items = [ThemeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => theme.theme);
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("YouAccountActionSheetTheme");
  const callback = noop.useCallback((arg0) => {
    const result = ClientThemesBackgroundActionCreators.resetBackgroundGradientPreset();
    CustomThemeMobileActionCreators.resetCustomTheme();
    UserSettingsActionCreatorsDefault.updateTheme(arg0);
  }, []);
  const intl = util.intl;
  const stringResult = intl.string(util.t.Ksh3ik);
  let tmp9 = manaTypeConsolidationExperiment;
  if (manaTypeConsolidationExperiment) {
    const obj3 = { children: stringResult };
    tmp9 = closure_1_19(AccountSectionHeading, obj3);
  }
  const items1 = [tmp9, ];
  let tmp12;
  if (!manaTypeConsolidationExperiment) {
    tmp12 = stringResult;
  }
  const obj4 = { title: tmp12, accessibilityLabel: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
  let tmp13;
  if (manaTypeConsolidationExperiment) {
    tmp13 = stringResult;
  }
  const obj5 = { children: null };
  obj4.accessibilityLabel = tmp13;
  obj4.onChange = callback;
  obj4.defaultValue = stateFromStores;
  const obj6 = { icon: closure_1_19(ThemeLightIcon.ThemeLightIcon, {}), label: null, value: null };
  const tmp8 = hasOwnProperty;
  obj6.label = ClientThemesUtils.getThemeName(constants3.LIGHT);
  obj6.value = constants3.LIGHT;
  const items2 = [closure_1_19(TableRadioRow.TableRadioRow, obj6), , , ];
  const obj7 = { icon: closure_1_19(ThemeGrayIcon.ThemeGrayIcon, {}), label: null, value: null };
  const tmpResult = ClientThemesUtils;
  obj7.label = ClientThemesUtils.getThemeName(constants3.ASH);
  obj7.value = constants3.ASH;
  items2[1] = closure_1_19(TableRadioRow.TableRadioRow, obj7);
  const obj8 = { icon: closure_1_19(ThemeDarkIcon.ThemeDarkIcon, {}), label: null, value: null };
  const tmpResult4 = ClientThemesUtils;
  obj8.label = ClientThemesUtils.getThemeName(constants3.DARK);
  obj8.value = constants3.DARK;
  items2[2] = closure_1_19(TableRadioRow.TableRadioRow, obj8);
  const obj9 = { icon: closure_1_19(ThemeMidnightIcon.ThemeMidnightIcon, {}), label: null, value: null };
  const tmpResult5 = ClientThemesUtils;
  obj9.label = ClientThemesUtils.getThemeName(constants3.ONYX);
  obj9.value = constants3.ONYX;
  items2[3] = closure_1_19(TableRadioRow.TableRadioRow, obj9);
  obj4.children = items2;
  items1[1] = closure_1_20(TableRadioGroup.TableRadioGroup, obj4);
  obj5.children = items1;
  return closure_1_20(tmp8, obj5);
}
function YouAccountRadioGroup() {
  const tmp = closure_21();
  const items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = stateFromStores(504);
  const multiAccountUsers = stateFromStores(16368).useMultiAccountUsers().multiAccountUsers;
  closure_129_0 = multiAccountUsers;
  let obj2 = stateFromStores(16368);
  const items1 = [StreamerModeStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
  closure_129_1 = stateFromStores1;
  const items2 = [multiAccountUsers, stateFromStores1];
  const memo = noop.useMemo(() => stateFromStores.map((id) => {
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
    if (closure_1_1) {
      str2 = "never";
    }
    const obj3 = { label: multiAccountUsers(4673).getUserTag(obj, { mode: "username", identifiable: str2 }), value: id.id, subLabel: combined, icon: null };
    const obj4 = { user: obj, guildId: "Array", size: stateFromStores(1177).AvatarSizes.REFRESH_MEDIUM_32 };
    obj3.icon = closure_2_19(stateFromStores(1177).Avatar, obj4);
    return obj3;
  }), items2);
  let obj3 = stateFromStores(504);
  const manaTypeConsolidationExperiment = stateFromStores(7313).useManaTypeConsolidationExperiment("YouAccountActionSheetSwitchAccounts");
  const items3 = [multiAccountUsers, ];
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items3[1] = id;
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp2(1115).intl;
    const stringResult = intl.string(tmp2(1115).t.oMNyYN);
    let obj5 = { style: tmp.account, children: null };
    const obj6 = { style: tmp.manage, children: null };
    const obj7 = {
      onPress() {
          return multiAccountUsers(16801)();
        },
      children: null
    };
    const obj8 = { variant: "text-sm/semibold", color: "text-brand", children: null };
    const intl2 = tmp2(1115).intl;
    obj8.children = intl2.string(tmp2(1115).t.HxrBOZ);
    obj7.children = closure_19(tmp2(4825).Text, obj8);
    obj6.children = closure_19(tmp2(5427).PressableOpacity, obj7);
    const items4 = [closure_19(closure_5, obj6), , ];
    let tmp16Result = manaTypeConsolidationExperiment;
    if (manaTypeConsolidationExperiment) {
      const obj9 = { children: stringResult };
      tmp16Result = tmp16(AccountSectionHeading, obj9);
    }
    items4[1] = tmp16Result;
    let tmp11;
    if (!manaTypeConsolidationExperiment) {
      tmp11 = stringResult;
    }
    const obj10 = { title: tmp11, accessibilityLabel: null, onChange: null, defaultValue: null, hasIcons: true, children: null };
    let tmp12;
    if (manaTypeConsolidationExperiment) {
      tmp12 = stringResult;
    }
    obj10.accessibilityLabel = tmp12;
    obj10.onChange = tmp8;
    obj10.defaultValue = stateFromStores.id;
    obj10.children = memo.map((value) => {
      const merged = Object.assign(value);
      return closure_1_19(stateFromStores(5993).TableRadioRow, {}, value.value);
    });
    items4[2] = closure_19(tmp2(5990).TableRadioGroup, obj10);
    obj5.children = items4;
    return closure_20(closure_5, obj5);
  }
  let obj4 = stateFromStores(7313);
}
function FocusModeSetting() {
  let currentLocale = require;
  let toLocaleStringResult = dependencyMap;
  const tmp = closure_21();
  const focusModeEnabled = FocusModeUtils.useFocusModeEnabled();
  const FocusModeExpiresAtSetting = UserSettings.FocusModeExpiresAtSetting;
  let setting = FocusModeExpiresAtSetting.useSetting();
  if (!focusModeEnabled) {
    return null;
  } else {
    let obj2 = { accessibilityLabel: null, accessibilityHint: null, icon: null, onValueChange: null, value: null, label: null, subLabel: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.wCxBOc);
    const intl2 = util.intl;
    obj2.accessibilityHint = intl2.string(util.t.wCxBOc);
    let obj3 = { style: tmp.leadingIcon };
    obj2.icon = closure_1_19(BellSlashIcon.BellSlashIcon, obj3);
    obj2.onValueChange = function onValueChange(arg0) {
      if (arg0) {
        const obj3 = {
          onSelect(quiet_mode_enabled, arg1) {
              closure_1_0(10437).setFocusMode(quiet_mode_enabled, arg1);
              const obj = closure_1_0(10437);
              closure_1_1(4796).hideActionSheet();
              const obj2 = closure_1_1(4796);
              const result = closure_1_0(16796).showYouAccountActionSheet();
            }
        };
        require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[48], paths.paths), "FocusModeOptionsActionSheet", obj3);
        let obj2 = require("ActionSheetActionCreators");
      } else {
        require("FocusModeUtils").setFocusMode(false);
        let obj = require("FocusModeUtils");
      }
    };
    obj2.value = focusModeEnabled;
    const intl3 = util.intl;
    obj2.label = intl3.string(util.t.wCxBOc);
    if (null == setting) {
      const intl4 = util.intl;
      let stringResult = intl4.string(util.t.i0nsoY);
      const obj4 = { hasIcons: true, children: null };
      obj2.subLabel = stringResult;
      obj2 = tmp5(TableSwitchRow.TableSwitchRow, obj2);
      obj4.children = obj2;
      tmp5(TableRowGroup.TableRowGroup, obj4);
    }
    const intl5 = util.intl;
    const obj5 = { endTime: null };
    const _Date = Date;
    const _Number = Number;
    const date = new Date(Number(setting));
    setting = date;
    currentLocale = util.intl.currentLocale;
    toLocaleStringResult = date.toLocaleString(currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
    obj5.endTime = toLocaleStringResult;
    stringResult = intl5.formatToPlainString(util.t.BWD8fs, obj5);
  }
}
function CustomStatus() {
  const tmp = closure_21();
  const customStatusActivity = userSettingToActivity.useCustomStatusActivity();
  let state;
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  let tmp8 = null != state;
  if (tmp8) {
    tmp8 = "" !== customStatusActivity.state;
  }
  if (!tmp8) {
    let emoji1;
    if (customStatusActivity != null) {
      emoji1 = customStatusActivity.emoji;
    }
    tmp8 = null != emoji1;
  }
  let state1;
  if (customStatusActivity != null) {
    state1 = customStatusActivity.state;
  }
  let gameMentionsAsPlainText = useGameMentionsAsPlainText.useGameMentionsAsPlainText(state1);
  const tmp2Result = useGameMentionsAsPlainText;
  const token1 = useToken.useToken(tmp5(576).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const tmp2Result3 = useToken;
  const token2 = useToken.useToken(tmp5(576).modules.mobile.TABLE_ROW_LABEL_COLOR);
  let obj3 = { shadow: "none", border: "none", style: tmp.customStatusRow, children: null };
  const obj4 = { style: tmp.customStatusEditButton, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
  const intl = tmp2(1115).intl;
  const string = intl.string;
  const t = tmp2(1115).t;
  if (tmp8) {
    let stringResult = string(t["2p9FMw"]);
  } else {
    stringResult = string(t["/UonHN"]);
  }
  obj4.accessibilityLabel = stringResult;
  let formatToPlainStringResult;
  if (tmp8) {
    const intl2 = tmp2(1115).intl;
    const emoji = customStatusActivity.emoji;
    let str2;
    if (emoji != null) {
      str2 = emoji.name;
    }
    if (str2 == null) {
      str2 = "";
    }
    const obj5 = { emoji: str2, status: gameMentionsAsPlainText };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1115).t.GE7QzY, obj5);
  }
  obj4.accessibilityHint = formatToPlainStringResult;
  obj4.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj3 = { analyticsLocations: null };
    const items = [AnalyticsLocationDefault.YOU_ACCOUNT_ACTION_SHEET];
    obj3.analyticsLocations = items;
    const result = CustomStatusUtils.openEditCustomStatusModal(obj3);
  };
  let emoji2;
  if (customStatusActivity != null) {
    emoji2 = customStatusActivity.emoji;
  }
  if (null != emoji2) {
    const obj6 = { emoji: customStatusActivity.emoji, size: token };
    let tmp14Result = tmp14(tmp5(11244), obj6);
  } else {
    const obj7 = { size: "md", style: tmp.leadingIcon };
    tmp14Result = tmp14(tmp2(9117).ReactionIcon, obj7);
  }
  let items = [tmp14Result, ];
  const obj8 = { variant: token1, color: token2, lineClamp: 2, style: tmp.customStatusText, children: null };
  if (!tmp8) {
    const intl3 = tmp2(1115).intl;
    gameMentionsAsPlainText = intl3.string(tmp2(1115).t["/UonHN"]);
  }
  obj8.children = gameMentionsAsPlainText;
  items[1] = closure_1_19(Text_Text.Text, obj8);
  obj4.children = items;
  const items1 = [closure_1_20(Pressables.PressableOpacity, obj4), ];
  let tmp14Result2 = null;
  if (null != customStatusActivity) {
    const obj9 = {
      onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          removeCustomStatusDefault();
        },
      accessibilityRole: "button",
      accessibilityLabel: null,
      style: null,
      children: null
    };
    const intl4 = tmp2(1115).intl;
    obj9.accessibilityLabel = intl4.string(tmp2(1115).t.wfYTHe);
    obj9.style = tmp.customStatusRemoveButton;
    const obj10 = { style: tmp.trailingIcon, source: tmp5(7422) };
    obj9.children = tmp14(timestampProducer, obj10);
    tmp14Result2 = tmp14(tmp2(5427).PressableOpacity, obj9);
  }
  const tmp2Result4 = useToken;
  items1[1] = tmp14Result2;
  obj3.children = items1;
  return closure_1_19(TableRowGroup.TableRowGroup, { hasIcons: false, children: closure_1_20(Card.Card, obj3) });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const MultiAccountTokenStatus = fn(12762).MultiAccountTokenStatus;
const Constants = fn(1074);
({ AnalyticEvents: closure_14, AuthStates: closure_15, StatusTypes: closure_16, ThemeTypes: closure_17 } = Constants);
let closure_18 = fn(12763).MultiAccountSwitchLocation;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(4829);
let obj = { account: { position: "relative" }, manage: { position: "absolute", right: 0, zIndex: 100 }, leadingIcon: { width: 24, height: 24, margin: 4 }, trailingIcon: null, customStatusRow: null, customStatusEditButton: null, customStatusRemoveButton: null, customStatusText: null, sectionHeading: null };
let size = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 16, height: 16 };
obj.trailingIcon = size;
obj.customStatusRow = { padding: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let obj3 = { padding: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj.customStatusEditButton = { minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let obj4 = { minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj.customStatusRemoveButton = { height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
obj.customStatusText = { flexShrink: 1 };
let obj5 = { height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
obj.sectionHeading = { marginBottom: nativeDefault.space.PX_8 };
let closure_21 = createStyles.createStyles(obj);
let obj6 = { marginBottom: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx");

export default noop.memo((statusOnly) => {
  let flag = statusOnly.statusOnly;
  if (flag === undefined) {
    flag = false;
  }
  let tmp8Result6 = dependencyMap;
  const items = [MultiAccountStore];
  const stateFromStores = initialize.useStateFromStores(items, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile());
  let tmp4 = importDefault;
  const tmp5 = useDesignToggleDefault("theme_setting_in_account_sheet");
  const items1 = [DeveloperExperimentStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => isDeveloper.isDeveloper);
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("YouAccountActionSheetDeveloperTools");
  const obj4 = { startExpanded: stateFromStores, header: null, showGradient: true, children: null };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (flag) {
    let stringResult = string(t["3Uj+2p"]);
  } else if (stateFromStores) {
    stringResult = string(t["ldCE/p"]);
  } else {
    stringResult = string(t["qP/i6k"]);
  }
  obj4.header = closure_1_19(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult });
  let tmp8Result = tmp5;
  if (tmp5) {
    tmp8Result = tmp8(ThemeRadioGroup, {});
  }
  const items2 = [tmp8Result, closure_1_19(YouStatusRadioGroup, {}), closure_1_19(FocusModeSetting, {}), closure_1_19(CustomStatus, {}), , , ];
  let tmp8Result4 = !flag;
  if (!flag) {
    tmp8Result4 = stateFromStores;
  }
  if (tmp8Result4) {
    tmp8Result4 = tmp8(YouAccountRadioGroup, {});
  }
  items2[4] = tmp8Result4;
  let tmp8Result5 = !flag;
  if (!flag) {
    tmp8Result5 = stateFromStores1;
  }
  if (tmp8Result5) {
    tmp8Result5 = tmp8(YouSwitchClientsRadioGroupDefault, {});
  }
  items2[5] = tmp8Result5;
  let tmp16 = !flag;
  if (!flag) {
    tmp16 = stateFromStores1;
  }
  if (!tmp16) {
    const obj5 = { spacing: 24, children: null };
    items2[6] = tmp16;
    obj5.children = items2;
    obj4.children = tmp10(Stack_Stack.Stack, obj5);
    return tmp8(ActionSheet.ActionSheet, obj4);
  } else if (manaTypeConsolidationExperiment) {
    const obj6 = { children: null };
    const items3 = [tmp8(AccountSectionHeading, { children: "Developer Tools" }), ];
    tmp4 = DevToolsContentDefault;
    tmp8Result6 = tmp8(tmp4, { embedded: true });
    items3[1] = tmp8Result6;
    obj6.children = items3;
    let tmp8Result7 = tmp10(hasOwnProperty, obj6);
  } else {
    tmp8Result7 = tmp8(DevToolsContentDefault, { title: "Developer Tools", embedded: true });
  }
});
