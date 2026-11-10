// Module ID: 18826
// Function ID: 18827
// Name: YouAccountActionSheet
// Dependencies: [19, 17, 14237, 1192, 1404, 7945, 5197, 1385, 1072, 1388, 14238, 21, 5142, 575, 5753, 7049, 16336, 16333, 16334, 16335, 4967, 11158, 5376, 1113, 7127, 7130, 9171, 504, 17355, 13969, 6066, 17608, 1239, 18827, 11330, 17610, 5196, 1187, 18358, 18829, 1252, 7415, 14241, 7046, 11157, 7129, 7432, 11131, 18834, 2118, 18824, 11544, 1411, 10877, 5726, 7043, 11547, 7366, 9539, 11554, 5844, 7323, 7069, 7429, 7385, 6161, 18835, 18111, 2]

// Module 18826 (YouAccountActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1239 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import EmojiConstants from "EmojiConstants" /* 1388 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import UserSettings from "UserSettings" /* 4967 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import Text_Text from "Text/Text" /* 5753 */;
import FastImageDefault from "FastImage" /* 5844 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 6066 */;
import useDesignToggleDefault from "useDesignToggle" /* 7069 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7127 */;
import TableRadioRow5 from "TableRadioRow" /* 7130 */;
import AssetRegistryDefault from "AssetRegistry" /* 7323 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7385 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7415 */;
import ActionSheet2 from "ActionSheet" /* 7429 */;
import getChannelA11yLabel from "getChannelA11yLabel" /* 9171 */;
import FocusModeUtils from "FocusModeUtils" /* 11157 */;
import setUserStatusDefault from "setUserStatus" /* 11158 */;
import ThemeDarkIcon from "ThemeDarkIcon" /* 11330 */;
import userSettingToActivity from "userSettingToActivity" /* 11544 */;
import CustomStatusUtils from "CustomStatusUtils" /* 11547 */;
import removeCustomStatusDefault from "removeCustomStatus" /* 11554 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 13969 */;
import MultiAccountStore2 from "MultiAccountStore" /* 14237 */;
import Constants2 from "Constants" /* 14238 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 14241 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 17355 */;
import ThemeLightIcon from "ThemeLightIcon" /* 17608 */;
import ThemeMidnightIcon from "ThemeMidnightIcon" /* 17610 */;
import DevToolsContentDefault from "DevToolsContent" /* 18111 */;
import ThemeGrayIcon from "ThemeGrayIcon" /* 18827 */;
import openManageAccountsModalDefault from "openManageAccountsModal" /* 18829 */;
import YouSwitchClientsRadioGroupDefault from "YouSwitchClientsRadioGroup" /* 18835 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserRecord from "UserRecord" /* 1404 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7945 */;
import StreamerModeStore from "StreamerModeStore" /* 5197 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
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
const useToken = tmp2(5726);
const Stack_Stack = tmp(6161);
const Card_Card = tmp2(7043);
const Pressables = tmp2(7046);
const TableRowGroup2 = tmp2(7129);
const ReactionIcon = tmp2(9539);
const useGameMentionsAsPlainText2 = tmp2(10877);
function AccountSectionHeading(children) {
  children = children.children;
  const obj = { accessibilityRole: "header", variant: "body-sm/medium", color: "text-subtle", style: closure_21().sectionHeading, children };
  return closure_19(Text_Text.Text, obj);
}
function YouStatusRadioGroup() {
  let items1;
  let setting;
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
  const StatusSetting = setting(4967).StatusSetting;
  setting = StatusSetting.useSetting();
  const StatusExpiresAtSetting = setting(4967).StatusExpiresAtSetting;
  let closure_1 = StatusExpiresAtSetting.useSetting();
  let items = [setting];
  const callback = react.useCallback((nextStatus) => {
    const obj = { prevStatus: setting, nextStatus };
    setUserStatusDefault(obj);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items);
  let intl = setting(1113).intl;
  const stringResult = intl.string(setting(1113).t["0DPAZH"]);
  let obj = {
    accessibilityLabel: stringResult,
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
  const TableRadioGroup = setting(7127).TableRadioGroup;
  let obj2 = { children: items1 };
  items1 = [, ];
  const tmp4 = closure_19(TableRadioGroup, obj);
  items1[0] = closure_19(AccountSectionHeading, { children: stringResult });
  items1[1] = tmp4;
  return closure_20(View, obj2);
}
function ThemeRadioGroup() {
  let items1;
  let items2;
  let obj11;
  let obj5;
  let obj7;
  let obj9;
  let theme;
  let obj = get_initialized;
  const items = [ThemeStore];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
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
  let obj2 = { children: items1 };
  items1 = [closure_19(AccountSectionHeading, { children: stringResult }), ];
  let obj3 = { accessibilityLabel: stringResult, onChange: callback, defaultValue: stateFromStores, hasIcons: true, children: items2 };
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  const obj4 = { icon: closure_19(ThemeLightIcon.ThemeLightIcon, {}), label: obj5.getThemeName(constants3.LIGHT), value: constants3.LIGHT };
  const TableRadioRow = TableRadioRow5.TableRadioRow;
  obj5 = ClientThemesUtils;
  items2 = [closure_19(TableRadioRow, obj4), , , ];
  const obj6 = { icon: closure_19(ThemeGrayIcon.ThemeGrayIcon, {}), label: obj7.getThemeName(constants3.ASH), value: constants3.ASH };
  const TableRadioRow2 = TableRadioRow5.TableRadioRow;
  obj7 = ClientThemesUtils;
  items2[1] = closure_19(TableRadioRow2, obj6);
  const obj8 = { icon: closure_19(ThemeDarkIcon.ThemeDarkIcon, {}), label: obj9.getThemeName(constants3.DARK), value: constants3.DARK };
  const TableRadioRow3 = TableRadioRow5.TableRadioRow;
  obj9 = ClientThemesUtils;
  items2[2] = closure_19(TableRadioRow3, obj8);
  const obj10 = { icon: closure_19(ThemeMidnightIcon.ThemeMidnightIcon, {}), label: obj11.getThemeName(constants3.ONYX), value: constants3.ONYX };
  const TableRadioRow4 = TableRadioRow5.TableRadioRow;
  obj11 = ClientThemesUtils;
  items2[3] = closure_19(TableRadioRow4, obj10);
  items1[1] = closure_20(TableRadioGroup, obj3);
  return closure_20(View, obj2);
}
function YouAccountRadioGroup() {
  let PressableOpacity;
  let Text;
  let currentUser;
  let intl2;
  let items4;
  let obj6;
  let obj7;
  let stateFromStores;
  const tmp = closure_21();
  let obj = stateFromStores(504);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = stateFromStores(18358);
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
    const getUserTag = stateFromStores1(closure_2_3[36]).getUserTag;
    stateFromStores1(closure_2_3[36]);
    if (closure_1_1) {
      str2 = "never";
    }
    const obj2 = { label: getUserTag(obj, { mode: "username", identifiable: str2 }), value: id.id, subLabel: combined, icon: closure_2_19(Avatar, obj3) };
    obj3 = { user: obj, guildId: "Array", size: multiAccountUsers(closure_2_3[37]).AvatarSizes.REFRESH_MEDIUM_32 };
    Avatar = multiAccountUsers(tmp4[37]).Avatar;
    return obj2;
  }), items2);
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
    let obj4 = { style: tmp.account, children: items4 };
    const obj5 = { style: tmp.manage, children: closure_19(PressableOpacity, obj6) };
    obj6 = {
      onPress() {
          return multiAccountUsers(dependencyMap[39])();
        },
      children: closure_19(Text, obj7)
    };
    PressableOpacity = tmp2(7046).PressableOpacity;
    obj7 = { variant: "body-sm/semibold", color: "text-brand", children: intl2.string(stateFromStores(1113).t.HxrBOZ) };
    Text = tmp2(5753).Text;
    intl2 = tmp2(1113).intl;
    items4 = [closure_19(View, obj5), , ];
    const obj8 = { children: stringResult };
    items4[1] = closure_19(AccountSectionHeading, obj8);
    const obj9 = {
      accessibilityLabel: stringResult,
      onChange: tmp7,
      defaultValue: stateFromStores.id,
      hasIcons: true,
      children: memo.map((value) => {
          const obj = {};
          const TableRadioRow = stateFromStores(dependencyMap[25]).TableRadioRow;
          const merged = Object.assign(value);
          return closure_1_19(TableRadioRow, obj, value.value);
        })
    };
    const TableRadioGroup = tmp2(7127).TableRadioGroup;
    items4[2] = closure_19(TableRadioGroup, obj9);
    return closure_20(View, obj4);
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
    const TableRowGroup = tmp2(7129).TableRowGroup;
    let obj2 = {
      accessibilityLabel: intl.string(tmp2(1113).t.wCxBOc),
      accessibilityHint: intl2.string(tmp2(1113).t.wCxBOc),
      icon: closure_19(tmp2(11131).BellSlashIcon, obj3),
      onValueChange(arg0) {
          const tmp = arg0;
          if (tmp) {
            let obj2 = require("ActionSheetActionCreators");
            let obj3 = {
              onSelect(quiet_mode_enabled, arg1) {
                  const obj = closure_1_0(paths[44]);
                  obj.setFocusMode(quiet_mode_enabled, arg1);
                  const obj2 = closure_1_1(paths[22]);
                  obj2.hideActionSheet();
                  const obj3 = closure_1_0(paths[50]);
                  const result = obj3.showYouAccountActionSheet();
                }
            };
            obj2.openLazy(require("asyncRequire")(paths[48], paths.paths), "FocusModeOptionsActionSheet", obj3);
          } else {
            let obj = require("FocusModeUtils");
            obj.setFocusMode(false);
          }
        },
      value: focusModeEnabled,
      label: intl3.string(tmp2(1113).t.wCxBOc),
      subLabel: null
    };
    const TableSwitchRow = tmp2(7432).TableSwitchRow;
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
    tmp23Result = tmp23(tmp20(7366), obj6);
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
  const obj3 = { startExpanded: stateFromStores, header: closure_19(BottomSheetTitleHeader, { title: stringResult }), showGradient: true, children: closure_20(Stack, { spacing: 24, children: items2 }) };
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
  let tmp7Result = tmp5;
  Stack = Stack_Stack.Stack;
  if (tmp5) {
    tmp7Result = tmp7(ThemeRadioGroup, {});
  }
  items2 = [tmp7Result, closure_19(YouStatusRadioGroup, {}), closure_19(FocusModeSetting, {}), closure_19(CustomStatus, {}), , , ];
  items2[4] = !flag && stateFromStores && tmp7(YouAccountRadioGroup, {});
  const tmp7Result2 = !flag && stateFromStores && tmp7(YouAccountRadioGroup, {});
  items2[5] = !flag && stateFromStores1 && closure_19(YouSwitchClientsRadioGroupDefault, {});
  let tmp9Result = !flag && stateFromStores1;
  !flag && stateFromStores1 && closure_19(YouSwitchClientsRadioGroupDefault, {});
  if (tmp9Result) {
    const obj4 = { children: items3 };
    items3 = [closure_19(AccountSectionHeading, { children: "Developer Tools" }), closure_19(DevToolsContentDefault, { embedded: true })];
    tmp9Result = tmp9(View, obj4);
  }
  items2[6] = tmp9Result;
  return closure_19(ActionSheet, obj3);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx");

export default memoResult;
