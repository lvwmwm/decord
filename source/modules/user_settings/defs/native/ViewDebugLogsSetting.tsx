// Module ID: 14621
// Function ID: 14622
// Name: ViewDebugLogsActionSheetRow
// Dependencies: [19, 17, 21, 4223, 5633, 4460, 9567, 5631, 5322, 1236, 14622, 14624, 4219, 14627, 500, 9620, 14628, 10333, 13071, 3928, 2]

// Module 14621 (ViewDebugLogsActionSheetRow)
import { Suspense } from "explicitContentFromProto";
import { Keyboard } from "createToggle";
import jsxProd from "jsxProd";
import createToggle from "createToggle";

let c5;
let closure_6;
function ViewDebugLogsActionSheetRow(icon) {
  let dependencyMap;
  let importDefault;
  const title = icon.title;
  ({ screenKey: importDefault, render: dependencyMap } = icon);
  return callback(title(5633).ActionSheetRow, {
    icon: icon.icon,
    label: title,
    onPress() {
      let obj = outer1_1(outer1_2[3]);
      obj.hideActionSheet(outer1_7);
      obj = {
        default() {
          return outer1_5(outer1_1(outer1_2[6]), { title: closure_0, render: closure_2, screenKey: closure_1 });
        }
      };
      outer1_1(outer1_2[5]).pushLazy(Promise.resolve(obj));
    }
  });
}
function ViewDebugLogsActionSheet() {
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.BUOCPi);
  obj[0] = callback(require(5322) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { icon: null, title: null, screenKey: "debugLogs", render: null };
  obj[0] = callback(require(14622) /* WrenchIcon */.WrenchIcon, {});
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.XpPGhL);
  obj[3] = function render() {
    return callback2(callback(14624), {});
  };
  const items = [callback(ViewDebugLogsActionSheetRow, obj), , ];
  const obj1 = { icon: callback(require(4219) /* ClockIcon */.ClockIcon, {}), title: null, screenKey: "startupTiming", render: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj1[1] = intl3.string(require(1236) /* getSystemLocale */.t.b0nJvk);
  obj1[3] = function render() {
    return callback2(closure_3, { children: callback2(callback(14627), {}) });
  };
  items[1] = callback(ViewDebugLogsActionSheetRow, obj1);
  let tmpResult = null;
  if (obj5.isAndroid()) {
    const obj2 = { icon: null, title: null, screenKey: "pushNotificationLogs", render: null };
    obj2[0] = tmp(tmp2(9620).ChannelNotificationIcon, {});
    const intl4 = tmp2(1236).intl;
    obj2[1] = intl4.string(tmp2(1236).t.Ljj0ps);
    obj2[3] = function render() {
      return callback2(callback(14628), {});
    };
    tmpResult = tmp(ViewDebugLogsActionSheetRow, obj2);
  }
  items[2] = tmpResult;
  obj[1] = closure_6(require(5633) /* ActionSheetRowIcon */.ActionSheetRow.Group, { hasIcons: true, children: items });
  return callback(require(5631) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
ViewDebugLogsActionSheet = "ViewDebugLogsActionSheet";
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.BUOCPi);
  },
  parent: null,
  IconComponent: require("ChannelListMagnifyingGlassIcon").ChannelListMagnifyingGlassIcon,
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting,
  onPress: function handleViewDebugLogsSettingPress() {
    Keyboard.dismiss();
    let obj = importDefault(4223);
    obj = { default: ViewDebugLogsActionSheet };
    obj.openLazy(Promise.resolve(obj), ViewDebugLogsActionSheet);
  },
  withArrow: true
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.BUOCPi);
  },
  parent: null,
  IconComponent: require("ChannelListMagnifyingGlassIcon").ChannelListMagnifyingGlassIcon,
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting,
  onPress: function handleViewDebugLogsSettingPress() {
    Keyboard.dismiss();
    let obj = importDefault(4223);
    obj = { default: ViewDebugLogsActionSheet };
    obj.openLazy(Promise.resolve(obj), ViewDebugLogsActionSheet);
  },
  withArrow: true
};
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/ViewDebugLogsSetting.tsx");

export default pressable;
