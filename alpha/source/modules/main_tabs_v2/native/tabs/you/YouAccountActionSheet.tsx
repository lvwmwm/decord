// Module ID: 18432
// Function ID: 18433
// Name: YouAccountActionSheet
// Dependencies: [19, 17, 13962, 1192, 1397, 7864, 5069, 1383, 1072, 1386, 13963, 21, 5014, 575, 5624, 6983, 15992, 15989, 15990, 15991, 4839, 7149, 11019, 5258, 1113, 7058, 7061, 9085, 504, 16997, 13697, 5932, 17247, 1239, 18433, 11189, 17249, 5068, 1187, 17981, 18435, 1252, 7351, 13966, 6980, 11018, 7060, 7369, 10992, 18440, 1994, 18430, 11393, 1409, 10749, 5596, 6977, 11396, 7300, 9452, 11403, 5717, 7257, 7000, 7366, 7321, 6027, 18441, 17744, 2]

// Module 18432 (YouAccountActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1239 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import EmojiConstants from "EmojiConstants" /* 1386 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import UserSettings from "UserSettings" /* 4839 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5932 */;
import useDesignToggleDefault from "useDesignToggle" /* 7000 */;
import TableRadioRow5 from "TableRadioRow" /* 7061 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 7149 */;
import AssetRegistryDefault from "AssetRegistry" /* 7257 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7321 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import ActionSheet2 from "ActionSheet" /* 7366 */;
import getChannelA11yLabel from "getChannelA11yLabel" /* 9085 */;
import FocusModeUtils from "FocusModeUtils" /* 11018 */;
import setUserStatusDefault from "setUserStatus" /* 11019 */;
import ThemeDarkIcon from "ThemeDarkIcon" /* 11189 */;
import userSettingToActivity from "userSettingToActivity" /* 11393 */;
import CustomStatusUtils from "CustomStatusUtils" /* 11396 */;
import removeCustomStatusDefault from "removeCustomStatus" /* 11403 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 13697 */;
import MultiAccountStore2 from "MultiAccountStore" /* 13962 */;
import Constants2 from "Constants" /* 13963 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 13966 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 16997 */;
import ThemeLightIcon from "ThemeLightIcon" /* 17247 */;
import ThemeMidnightIcon from "ThemeMidnightIcon" /* 17249 */;
import DevToolsContentDefault from "DevToolsContent" /* 17744 */;
import ThemeGrayIcon from "ThemeGrayIcon" /* 18433 */;
import openManageAccountsModalDefault from "openManageAccountsModal" /* 18435 */;
import YouSwitchClientsRadioGroupDefault from "YouSwitchClientsRadioGroup" /* 18441 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserRecord from "UserRecord" /* 1397 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7864 */;
import StreamerModeStore from "StreamerModeStore" /* 5069 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const MultiAccountStore = MultiAccountStore2;

let closure_14;
let closure_15;
let closure_16;
let closure_19;
let closure_20;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let tmp;
let tmp2;
const useToken = tmp2(5596);
const Stack_Stack = tmp(6027);
const Card_Card = tmp2(6977);
const Pressables = tmp2(6980);
const TableRowGroup2 = tmp2(7060);
const ReactionIcon = tmp2(9452);
const useGameMentionsAsPlainText2 = tmp2(10749);
function AccountSectionHeading(children) {
  children = children.children;
  const obj = { accessibilityRole: "header", variant: "experimental/body-sm/medium", color: "text-subtle", style: closure_21().sectionHeading, children };
  return closure_19(Text_Text.Text, obj);
}
function YouStatusRadioGroup() {
  let items1;
  let setting;
  let tmp7;
  const memo = react.useMemo(() => {
    let TableRowIcon;
    let TableRowIcon2;
    let TableRowIcon3;
    let TableRowIcon4;
    let obj2;
    let obj4;
    let obj6;
    let obj8;
    const obj = { icon: closure_1_19(TableRowIcon, obj2), value: constants.ONLINE };
    obj2 = { source: closure_1(dependencyMap[16]), variant: "text-status-online" };
    TableRowIcon = setting(dependencyMap[15]).TableRowIcon;
    const items = [obj, , , ];
    const obj3 = { icon: closure_1_19(TableRowIcon2, obj4), value: constants.IDLE };
    obj4 = { source: closure_1(dependencyMap[17]), variant: "text-status-idle" };
    TableRowIcon2 = setting(dependencyMap[15]).TableRowIcon;
    items[1] = obj3;
    const obj5 = { icon: closure_1_19(TableRowIcon3, obj6), value: constants.DND };
    obj6 = { source: closure_1(dependencyMap[18]), variant: "text-status-dnd" };
    TableRowIcon3 = setting(dependencyMap[15]).TableRowIcon;
    items[2] = obj5;
    const obj7 = { icon: closure_1_19(TableRowIcon4, obj8), value: constants.INVISIBLE };
    obj8 = { source: closure_1(dependencyMap[19]), variant: "text-status-offline" };
    TableRowIcon4 = setting(dependencyMap[15]).TableRowIcon;
    items[3] = obj7;
    return items;
  }, []);
  const StatusSetting = setting(4839).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(4839).StatusExpiresAtSetting;
  let closure_1 = StatusExpiresAtSetting.useSetting();
  let obj = setting(7149);
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("YouAccountActionSheetOnlineStatus");
  let items = [setting];
  const callback = react.useCallback((nextStatus) => {
    const obj = { prevStatus: setting, nextStatus };
    setUserStatusDefault(obj);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items);
  let intl = setting(1113).intl;
  const stringResult = intl.string(setting(1113).t["0DPAZH"]);
  let tmp6;
  const TableRadioGroup = setting(7058).TableRadioGroup;
  if (!manaTypeConsolidationExperiment) {
    tmp6 = stringResult;
  }
  let obj2 = {
    title: tmp6,
    accessibilityLabel: tmp7,
    onChange: callback,
    defaultValue: setting,
    hasIcons: true,
    children: memo.map(function(value) {
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
            const intl = tmp2(1113).intl;
            const formatToPlainString = intl.formatToPlainString;
            const _Date = Date;
            const _Number = Number;
            const obj3 = { endTime: date.toLocaleString(intl6.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" }) };
            const BWD8fs = tmp2(1113).t.BWD8fs;
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
    let obj4 = { children: stringResult };
    items1 = [closure_19(AccountSectionHeading, obj4), tmp5Result];
    tmp9 = closure_20(View, obj3);
  }
  return tmp9;
}
function ThemeRadioGroup() {
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
    const obj = ClientThemesBackgroundActionCreators;
    const result = obj.resetBackgroundGradientPreset();
    const obj2 = CustomThemeMobileActionCreators;
    obj2.resetCustomTheme();
    const obj3 = UserSettingsActionCreatorsDefault;
    obj3.updateTheme(arg0);
  }, []);
  const intl = intl6.intl;
  const stringResult = intl.string(intl6.t.Ksh3ik);
  let tmp9 = manaTypeConsolidationExperiment;
  const tmp8 = View;
  if (manaTypeConsolidationExperiment) {
    let obj3 = { children: stringResult };
    tmp9 = closure_19(AccountSectionHeading, obj3);
  }
  const items1 = [tmp9, ];
  let tmp12;
  const TableRadioGroup = tmp(7058).TableRadioGroup;
  if (!manaTypeConsolidationExperiment) {
    tmp12 = stringResult;
  }
  const obj4 = { title: tmp12, accessibilityLabel: tmp13, onChange: callback, defaultValue: stateFromStores, hasIcons: true, children: items2 };
  tmp13 = undefined;
  if (manaTypeConsolidationExperiment) {
    tmp13 = stringResult;
  }
  const obj5 = { children: items1 };
  const obj6 = { icon: closure_19(ThemeLightIcon.ThemeLightIcon, {}), label: tmpResult.getThemeName(constants3.LIGHT), value: constants3.LIGHT };
  const TableRadioRow = tmp(7061).TableRadioRow;
  tmpResult = ClientThemesUtils;
  items2 = [closure_19(TableRadioRow, obj6), , , ];
  const obj7 = { icon: closure_19(ThemeGrayIcon.ThemeGrayIcon, {}), label: tmpResult4.getThemeName(constants3.ASH), value: constants3.ASH };
  const TableRadioRow2 = tmp(7061).TableRadioRow;
  tmpResult4 = ClientThemesUtils;
  items2[1] = closure_19(TableRadioRow2, obj7);
  const obj8 = { icon: closure_19(ThemeDarkIcon.ThemeDarkIcon, {}), label: tmpResult5.getThemeName(constants3.DARK), value: constants3.DARK };
  const TableRadioRow3 = tmp(7061).TableRadioRow;
  tmpResult5 = ClientThemesUtils;
  items2[2] = closure_19(TableRadioRow3, obj8);
  const obj9 = { icon: closure_19(ThemeMidnightIcon.ThemeMidnightIcon, {}), label: tmpResult6.getThemeName(constants3.ONYX), value: constants3.ONYX };
  const TableRadioRow4 = tmp(7061).TableRadioRow;
  tmpResult6 = ClientThemesUtils;
  items2[3] = closure_19(TableRadioRow4, obj9);
  items1[1] = closure_20(TableRadioGroup, obj4);
  return closure_20(tmp8, obj5);
}
function YouAccountRadioGroup() {
  let PressableOpacity;
  let Text;
  let currentUser;
  let intl2;
  let items4;
  let obj7;
  let obj8;
  let stateFromStores;
  let tmp12;
  const tmp = closure_21();
  let obj = stateFromStores(504);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = stateFromStores(17981);
  const multiAccountUsers = obj2.useMultiAccountUsers().multiAccountUsers;
  let obj3 = stateFromStores(504);
  const items1 = [StreamerModeStore];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
  const items2 = [multiAccountUsers, stateFromStores1];
  const memo = react.useMemo(() => multiAccountUsers.map((id) => {
    let Avatar;
    let obj3;
    const obj = new closure_2_9(id);
    let combined = null;
    if (!closure_1_1) {
      combined = null;
      if (!obj.hasUniqueUsername()) {
        const _HermesInternal = HermesInternal;
        combined = "#" + obj.discriminator;
      }
    }
    let str2 = "always";
    const getUserTag = stateFromStores1(closure_2_3[37]).getUserTag;
    stateFromStores1(closure_2_3[37]);
    if (closure_1_1) {
      str2 = "never";
    }
    const obj2 = { label: getUserTag(obj, { mode: "username", identifiable: str2 }), value: id.id, subLabel: combined, icon: closure_2_19(Avatar, obj3) };
    obj3 = { user: obj, guildId: "Array", size: multiAccountUsers(closure_2_3[38]).AvatarSizes.REFRESH_MEDIUM_32 };
    Avatar = multiAccountUsers(tmp4[38]).Avatar;
    return obj2;
  }), items2);
  let obj4 = stateFromStores(7149);
  const manaTypeConsolidationExperiment = obj4.useManaTypeConsolidationExperiment("YouAccountActionSheetSwitchAccounts");
  const items3 = [multiAccountUsers, ];
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items3[1] = id;
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp2(1113).intl;
    const stringResult = intl.string(stateFromStores(1113).t.oMNyYN);
    const obj5 = { style: tmp.account, children: items4 };
    const obj6 = { style: tmp.manage, children: closure_19(PressableOpacity, obj7) };
    obj7 = {
      onPress() {
          return multiAccountUsers(dependencyMap[40])();
        },
      children: closure_19(Text, obj8)
    };
    PressableOpacity = tmp2(6980).PressableOpacity;
    obj8 = { variant: "text-sm/semibold", color: "text-brand", children: intl2.string(stateFromStores(1113).t.HxrBOZ) };
    Text = tmp2(5624).Text;
    intl2 = tmp2(1113).intl;
    items4 = [closure_19(View, obj6), , ];
    let tmp16Result = manaTypeConsolidationExperiment;
    const tmp14 = closure_20;
    const tmp15 = View;
    if (tmp16Result) {
      const obj9 = { children: stringResult };
      tmp16Result = tmp16(AccountSectionHeading, obj9);
    }
    items4[1] = tmp16Result;
    let tmp11;
    const TableRadioGroup = tmp2(7058).TableRadioGroup;
    if (!manaTypeConsolidationExperiment) {
      tmp11 = stringResult;
    }
    const obj10 = {
      title: tmp11,
      accessibilityLabel: tmp12,
      onChange: tmp8,
      defaultValue: stateFromStores.id,
      hasIcons: true,
      children: memo.map((value) => {
          const obj = {};
          const TableRadioRow = stateFromStores(dependencyMap[26]).TableRadioRow;
          const merged = Object.assign(value);
          return closure_1_19(TableRadioRow, obj, value.value);
        })
    };
    tmp12 = undefined;
    if (manaTypeConsolidationExperiment) {
      tmp12 = stringResult;
    }
    items4[2] = closure_19(TableRadioGroup, obj10);
    return tmp14(tmp15, obj5);
  }
}
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
    const TableRowGroup = tmp2(7060).TableRowGroup;
    let obj2 = {
      accessibilityLabel: intl.string(tmp2(1113).t.wCxBOc),
      accessibilityHint: intl2.string(tmp2(1113).t.wCxBOc),
      icon: closure_19(tmp2(10992).BellSlashIcon, obj3),
      onValueChange(arg0) {
          const tmp = arg0;
          if (tmp) {
            let obj2 = require("ActionSheetActionCreators");
            let obj3 = {
              onSelect(quiet_mode_enabled, arg1) {
                  const obj = closure_1_0(paths[45]);
                  obj.setFocusMode(quiet_mode_enabled, arg1);
                  const obj2 = closure_1_1(paths[23]);
                  obj2.hideActionSheet();
                  const obj3 = closure_1_0(paths[51]);
                  const result = obj3.showYouAccountActionSheet();
                }
            };
            obj2.openLazy(require("asyncRequire")(paths[49], paths.paths), "FocusModeOptionsActionSheet", obj3);
          } else {
            let obj = require("FocusModeUtils");
            obj.setFocusMode(false);
          }
        },
      value: focusModeEnabled,
      label: intl3.string(tmp2(1113).t.wCxBOc),
      subLabel: null
    };
    const TableSwitchRow = tmp2(7369).TableSwitchRow;
    intl = tmp2(1113).intl;
    intl2 = tmp2(1113).intl;
    obj3 = { style: tmp.leadingIcon };
    intl3 = tmp2(1113).intl;
    if (null != setting) {
      let formatToPlainStringResult;
      if ("0" !== setting) {
        const intl5 = tmp2(1113).intl;
        const formatToPlainString = intl5.formatToPlainString;
        const _Date = Date;
        const _Number = Number;
        const obj4 = { endTime: date.toLocaleString(intl6.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" }) };
        const BWD8fs = tmp2(1113).t.BWD8fs;
        const self = this;
        const self2 = this;
        date = new Date(Number(setting));
        formatToPlainStringResult = formatToPlainString(BWD8fs, obj4);
      }
      obj2.subLabel = formatToPlainStringResult;
      const obj5 = { hasIcons: true, children: closure_19(TableSwitchRow, obj2) };
      tmp7Result = tmp7(TableRowGroup, obj5);
    }
    const intl4 = tmp2(1113).intl;
    formatToPlainStringResult = intl4.string(tmp2(1113).t.i0nsoY);
  }
  return tmp7Result;
}
function CustomStatus() {
  let emojiURL;
  let formatToPlainStringResult;
  let intl4;
  let items;
  let items1;
  let obj11;
  let obj7;
  let stringResult;
  let tmp20Result;
  let tmp23Result;
  const tmp = closure_21();
  let obj = userSettingToActivity;
  const customStatusActivity = obj.useCustomStatusActivity();
  const width = tmp.leadingIcon.width;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  let emoji1;
  const setting = AnimateEmoji.useSetting();
  if (customStatusActivity != null) {
    emoji1 = customStatusActivity.emoji;
  }
  let id;
  if (emoji1 != null) {
    id = emoji1.id;
  }
  if (null != id) {
    let obj2 = { id: emoji1.id, size: EMOJI_URL_BASE_SIZE, animated: Boolean(emoji1.animated) && setting };
    const _Boolean = Boolean;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    Boolean(emoji1.animated) && setting;
    emojiURL = getEmojiURL(obj2);
  }
  let state;
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  let tmp15 = null != state && "" !== customStatusActivity.state;
  if (!tmp15) {
    let emoji2;
    if (customStatusActivity != null) {
      emoji2 = customStatusActivity.emoji;
    }
    tmp15 = null != emoji2;
  }
  let state1;
  const useGameMentionsAsPlainText = useGameMentionsAsPlainText2.useGameMentionsAsPlainText;
  useGameMentionsAsPlainText2;
  if (customStatusActivity != null) {
    state1 = customStatusActivity.state;
  }
  let gameMentionsAsPlainText = useGameMentionsAsPlainText(state1);
  const tmp2Result3 = useToken;
  const token = tmp2Result3.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const tmp2Result4 = useToken;
  const token1 = tmp2Result4.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
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
      const openEditCustomStatusModal = CustomStatusUtils.openEditCustomStatusModal;
      items = [];
      CustomStatusUtils;
      items[0] = AnalyticsLocationDefault.YOU_ACCOUNT_ACTION_SHEET;
      const result = openEditCustomStatusModal(obj2);
    },
    children: items
  };
  const PressableOpacity = Pressables.PressableOpacity;
  const intl = intl6.intl;
  const string = intl.string;
  const t = intl6.t;
  if (tmp15) {
    stringResult = string(t["2p9FMw"]);
  } else {
    stringResult = string(t["/UonHN"]);
  }
  formatToPlainStringResult = undefined;
  if (tmp15) {
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
  if (null != emoji1) {
    const obj6 = { src: emojiURL, name: emoji1.name, style: tmp.customStatusEmoji, textEmojiStyle: obj7, fastImageStyle: size };
    size = { width, height: width };
    obj7 = { fontSize: width };
    tmp23Result = tmp23(tmp20(7300), obj6);
  } else {
    const obj8 = { size: "md", style: tmp.leadingIcon };
    tmp23Result = tmp23(ReactionIcon.ReactionIcon, obj8);
  }
  items = [tmp23Result, ];
  const obj9 = { variant: token, color: token1, lineClamp: 2, style: tmp.customStatusText, children: gameMentionsAsPlainText };
  const Text = Text_Text.Text;
  if (!tmp15) {
    const intl3 = intl6.intl;
    gameMentionsAsPlainText = intl3.string(intl6.t["/UonHN"]);
  }
  items[1] = closure_19(Text, obj9);
  items1 = [closure_20(PressableOpacity, obj4), ];
  let tmp23Result2 = null;
  if (null != customStatusActivity) {
    const obj10 = {
      onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          removeCustomStatusDefault();
        },
      accessibilityRole: "button",
      accessibilityLabel: intl4.string(intl6.t.wfYTHe),
      style: tmp.customStatusRemoveButton,
      children: closure_19(tmp20Result, obj11)
    };
    const PressableOpacity2 = Pressables.PressableOpacity;
    intl4 = intl6.intl;
    obj11 = { style: tmp.trailingIcon, source: AssetRegistryDefault };
    tmp20Result = FastImageDefault;
    tmp23Result2 = tmp23(PressableOpacity2, obj10);
  }
  items1[1] = tmp23Result2;
  const obj12 = { hasIcons: false, children: closure_20(Card, obj3) };
  return closure_19(TableRowGroup, obj12);
}
const View = react_native.View;
const MultiAccountTokenStatus = MultiAccountStore2.MultiAccountTokenStatus;
({ AnalyticEvents: map1, AuthStates: closure_14, StatusTypes: closure_15, ThemeTypes: closure_16 } = Constants);
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
let closure_18 = Constants2.MultiAccountSwitchLocation;
({ jsx: closure_19, jsxs: closure_20 } = Fragment);
let createStyles = createStyles_mod;
let obj = { account: { position: "relative" }, manage: { position: "absolute", right: 0, zIndex: 100 }, leadingIcon: { width: 24, height: 24, margin: 4 }, trailingIcon: size, customStatusRow: obj2, customStatusEditButton: obj3, customStatusRemoveButton: obj4, customStatusText: { flexShrink: 1 }, customStatusEmoji: obj5, sectionHeading: obj6 };
size = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 16, height: 16 };
createStyles = createStyles.createStyles;
obj2 = { padding: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj3 = { minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj4 = { height: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
obj5 = { paddingHorizontal: nativeDefault.space.PX_4, alignItems: "center" };
obj6 = { marginBottom: nativeDefault.space.PX_8 };
let closure_21 = createStyles(obj);
const memoResult = react.memo(function YouAccountActionSheet(statusOnly) {
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
    tmp8Result = tmp8(ThemeRadioGroup, {});
  }
  items2 = [tmp8Result, closure_19(YouStatusRadioGroup, {}), closure_19(FocusModeSetting, {}), closure_19(CustomStatus, {}), , , ];
  items2[4] = !flag && stateFromStores && tmp8(YouAccountRadioGroup, {});
  const tmp8Result2 = !flag && stateFromStores && tmp8(YouAccountRadioGroup, {});
  items2[5] = !flag && stateFromStores1 && closure_19(YouSwitchClientsRadioGroupDefault, {});
  let tmp16 = !flag && stateFromStores1;
  !flag && stateFromStores1 && closure_19(YouSwitchClientsRadioGroupDefault, {});
  if (tmp16) {
    let tmp8Result3;
    if (manaTypeConsolidationExperiment) {
      const obj5 = { children: items3 };
      items3 = [closure_19(AccountSectionHeading, { children: "Developer Tools" }), closure_19(DevToolsContentDefault, { embedded: true })];
      tmp8Result3 = tmp10(View, obj5);
    } else {
      tmp8Result3 = tmp8(tmp4(17744), { title: "Developer Tools", embedded: true });
    }
    tmp16 = tmp8Result3;
  }
  items2[6] = tmp16;
  return closure_19(ActionSheet, obj4);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx");

export default memoResult;
