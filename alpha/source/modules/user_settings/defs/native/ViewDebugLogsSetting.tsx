// Module ID: 17014
// Function ID: 17015
// Name: ViewDebugLogsSetting
// Dependencies: [19, 17, 21, 5131, 7422, 6004, 11272, 7420, 7381, 1112, 17015, 17017, 5626, 17020, 1378, 11353, 17021, 11815, 14912, 4742, 2]

// Module 17014 (ViewDebugLogsSetting)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import intl5 from "intl" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import UserSettings from "UserSettings" /* 4742 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import ClockIcon from "ClockIcon" /* 5626 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7381 */;
import ActionSheet2 from "ActionSheet" /* 7420 */;
import ActionSheetRow from "ActionSheetRow" /* 7422 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 11272 */;
import ChannelNotificationIcon from "ChannelNotificationIcon" /* 11353 */;
import ChannelListMagnifyingGlassIcon from "ChannelListMagnifyingGlassIcon" /* 14912 */;
import WrenchIcon from "WrenchIcon" /* 17015 */;
import UserSettingsDebugLogsDefault from "UserSettingsDebugLogs" /* 17017 */;
import UserSettingsStartupTimingsDefault from "UserSettingsStartupTimings" /* 17020 */;
import UserSettingsPushNotificationLogsDefault from "UserSettingsPushNotificationLogs" /* 17021 */;
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11815 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
function ViewDebugLogsActionSheetRow(icon) {
  const title = icon.title;
  ({ screenKey: importDefault, render: dependencyMap } = icon);
  let obj = {
    icon: icon.icon,
    label: title,
    onPress() {
      let render;
      let screenKey;
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ViewDebugLogsActionSheet_str);
      const obj2 = ModalActionCreatorsDefault;
      const obj3 = {
        default: () => {
          const obj = { title, render, screenKey };
          return closure_2_5(ModalStackNavigatorDefault, obj);
        }
      };
      obj2.pushLazy(Promise.resolve(obj3));
    }
  };
  return closure_5(title(7422).ActionSheetRow, obj);
}
function ViewDebugLogsActionSheet() {
  let BottomSheetTitleHeader;
  let Group;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let tmp4;
  let obj = { header: hasOwnProperty(BottomSheetTitleHeader, obj2), children: tmp4(Group, { hasIcons: true, children: items }) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { title: intl.string(intl5.t.BUOCPi) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl5.intl;
  const obj3 = {
    icon: hasOwnProperty(WrenchIcon.WrenchIcon, {}),
    title: intl2.string(intl5.t.XpPGhL),
    screenKey: "debugLogs",
    render() {
      return closure_1_5(UserSettingsDebugLogsDefault, {});
    }
  };
  Group = ActionSheetRow.ActionSheetRow.Group;
  intl2 = intl5.intl;
  items = [hasOwnProperty(ViewDebugLogsActionSheetRow, obj3), , ];
  const obj4 = {
    icon: hasOwnProperty(ClockIcon.ClockIcon, {}),
    title: intl3.string(intl5.t.b0nJvk),
    screenKey: "startupTiming",
    render() {
      const obj = { children: closure_1_5(UserSettingsStartupTimingsDefault, {}) };
      return closure_1_5(Suspense, obj);
    }
  };
  intl3 = intl5.intl;
  items[1] = hasOwnProperty(ViewDebugLogsActionSheetRow, obj4);
  let tmpResult = null;
  const obj5 = PlatformUtils;
  tmp4 = metroRequire;
  const tmp5 = ViewDebugLogsActionSheetRow;
  if (obj5.isAndroid()) {
    const obj6 = {
      icon: hasOwnProperty(ChannelNotificationIcon.ChannelNotificationIcon, {}),
      title: intl4.string(intl5.t.Ljj0ps),
      screenKey: "pushNotificationLogs",
      render() {
          return closure_1_5(UserSettingsPushNotificationLogsDefault, {});
        }
    };
    intl4 = tmp2(1112).intl;
    tmpResult = tmp(tmp5, obj6);
  }
  items[2] = tmpResult;
  return hasOwnProperty(ActionSheet, obj);
}
const Suspense = react.Suspense;
const Keyboard = react_native.Keyboard;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const ViewDebugLogsActionSheet_str = "ViewDebugLogsActionSheet";
let obj = {
  useTitle() {
    const intl = intl5.intl;
    return intl.string(intl5.t.BUOCPi);
  },
  parent: null,
  IconComponent: ChannelListMagnifyingGlassIcon.ChannelListMagnifyingGlassIcon,
  usePredicate: UserSettings.DeveloperMode.useSetting,
  onPress: function handleViewDebugLogsSettingPress() {
    Keyboard.dismiss();
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { default: ViewDebugLogsActionSheet };
    obj.openLazy(Promise.resolve(obj2), ViewDebugLogsActionSheet_str);
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ViewDebugLogsSetting.tsx");

export default pressable;
