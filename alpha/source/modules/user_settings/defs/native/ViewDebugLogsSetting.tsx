// Module ID: 15850
// Function ID: 15851
// Name: ViewDebugLogsSetting
// Dependencies: [19, 17, 21, 4724, 7446, 4960, 11194, 7444, 7396, 1115, 15851, 15853, 4719, 15856, 1364, 11233, 15857, 11729, 14119, 2020, 2]

// Module 15850 (ViewDebugLogsSetting)
import _mod17 from "module_17" /* 17 */;
import _mod19 from "module_19" /* 19 */;
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2020 */;
import ClockIcon from "ClockIcon" /* 4719 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7396 */;
import ActionSheet from "ActionSheet" /* 7444 */;
import ActionSheetRow from "ActionSheetRow" /* 7446 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 11194 */;
import ChannelListMagnifyingGlassIcon from "ChannelListMagnifyingGlassIcon" /* 14119 */;
import WrenchIcon from "WrenchIcon" /* 15851 */;
import UserSettingsDebugLogsDefault from "UserSettingsDebugLogs" /* 15853 */;
import UserSettingsStartupTimingsDefault from "UserSettingsStartupTimings" /* 15856 */;
import UserSettingsPushNotificationLogsDefault from "UserSettingsPushNotificationLogs" /* 15857 */;
import jsxProd from "jsxProd" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

function ViewDebugLogsActionSheetRow(icon) {
  const title = icon.title;
  ({ screenKey: importDefault, render: dependencyMap } = icon);
  return closure_5(title(7446).ActionSheetRow, {
    icon: icon.icon,
    label: title,
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet(ViewDebugLogsActionSheet);
      ModalActionCreatorsDefault.pushLazy(Promise.resolve({
        default() {
          return closure_2_5(ModalStackNavigatorDefault, { title, render, screenKey });
        }
      }));
    }
  });
}
function ViewDebugLogsActionSheet() {
  const obj = { header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.BUOCPi);
  obj.header = hasOwnProperty(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  const obj3 = { icon: hasOwnProperty(WrenchIcon.WrenchIcon, {}), title: null, screenKey: "debugLogs", render: null };
  const intl2 = util.intl;
  obj3.title = intl2.string(util.t.XpPGhL);
  obj3.render = function render() {
    return closure_1_5(UserSettingsDebugLogsDefault, {});
  };
  const items = [hasOwnProperty(ViewDebugLogsActionSheetRow, obj3), , ];
  const obj4 = { icon: hasOwnProperty(ClockIcon.ClockIcon, {}), title: null, screenKey: "startupTiming", render: null };
  const intl3 = util.intl;
  obj4.title = intl3.string(util.t.b0nJvk);
  obj4.render = function render() {
    return closure_1_5(Suspense, { children: closure_1_5(UserSettingsStartupTimingsDefault, {}) });
  };
  items[1] = hasOwnProperty(ViewDebugLogsActionSheetRow, obj4);
  let tmpResult = null;
  if (obj5.isAndroid()) {
    const obj6 = { icon: tmp(tmp2(11233).ChannelNotificationIcon, {}), title: null, screenKey: "pushNotificationLogs", render: null };
    const intl4 = tmp2(1115).intl;
    obj6.title = intl4.string(tmp2(1115).t.Ljj0ps);
    obj6.render = function render() {
      return closure_1_5(UserSettingsPushNotificationLogsDefault, {});
    };
    tmpResult = tmp(ViewDebugLogsActionSheetRow, obj6);
  }
  items[2] = tmpResult;
  obj.children = timestampProducer(ActionSheetRow.ActionSheetRow.Group, { hasIcons: true, children: items });
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
}
const Suspense = _mod19.Suspense;
const Keyboard = _mod17.Keyboard;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
ViewDebugLogsActionSheet = "ViewDebugLogsActionSheet";
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.BUOCPi);
  },
  parent: null,
  IconComponent: ChannelListMagnifyingGlassIcon.ChannelListMagnifyingGlassIcon,
  usePredicate: UserSettings.DeveloperMode.useSetting,
  onPress: function handleViewDebugLogsSettingPress() {
    Keyboard.dismiss();
    ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: ViewDebugLogsActionSheet }), ViewDebugLogsActionSheet);
  },
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ViewDebugLogsSetting.tsx");

export default pressable;
