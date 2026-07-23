// Module ID: 14391
// Function ID: 110029
// Name: ViewDebugLogsActionSheetRow
// Dependencies: [31, 27, 33, 4098, 5502, 4337, 9112, 5500, 5186, 1212, 14392, 14394, 4094, 14397, 477, 10205, 14398, 10095, 12852, 3803, 2]

// Module 14391 (ViewDebugLogsActionSheetRow)
import { Suspense } from "result";
import { Keyboard } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createToggle from "createToggle";

let closure_5;
let closure_6;
function ViewDebugLogsActionSheetRow(icon) {
  let dependencyMap;
  let importDefault;
  const title = icon.title;
  ({ screenKey: importDefault, render: dependencyMap } = icon);
  return callback(title(5502).ActionSheetRow, {
    icon: icon.icon,
    label: title,
    onPress() {
      let obj = outer1_1(outer1_2[3]);
      obj.hideActionSheet(outer1_7);
      obj = {
        default(defaultResult1, defaultResult2, date, sendMessageOptions) {
          return outer2_5(outer2_1(outer2_2[6]), { title: outer1_0, render: outer1_2, screenKey: outer1_1 });
        }
      };
      outer1_1(outer1_2[5]).pushLazy(Promise.resolve(obj));
    }
  });
}
function ViewDebugLogsActionSheet() {
  let obj = {};
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.BUOCPi);
  obj.header = callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: true };
  const obj1 = { icon: callback(require(14392) /* WrenchIcon */.WrenchIcon, {}) };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.title = intl2.string(require(1212) /* getSystemLocale */.t.XpPGhL);
  obj1.screenKey = "debugLogs";
  obj1.render = function render() {
    return outer1_5(outer1_1(outer1_2[11]), {});
  };
  const items = [callback(ViewDebugLogsActionSheetRow, obj1), , ];
  const obj2 = { icon: callback(require(4094) /* ClockIcon */.ClockIcon, {}) };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.title = intl3.string(require(1212) /* getSystemLocale */.t.b0nJvk);
  obj2.screenKey = "startupTiming";
  obj2.render = function render() {
    return outer1_5(outer1_3, { children: outer1_5(outer1_1(outer1_2[13]), {}) });
  };
  items[1] = callback(ViewDebugLogsActionSheetRow, obj2);
  let tmp3 = null;
  if (obj6.isAndroid()) {
    const obj3 = { icon: callback(require(10205) /* ChannelNotificationIcon */.ChannelNotificationIcon, {}) };
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj3.title = intl4.string(require(1212) /* getSystemLocale */.t.Ljj0ps);
    obj3.screenKey = "pushNotificationLogs";
    obj3.render = function render() {
      return outer1_5(outer1_1(outer1_2[16]), {});
    };
    tmp3 = callback(ViewDebugLogsActionSheetRow, obj3);
  }
  items[2] = tmp3;
  obj.children = items;
  obj.children = closure_6(require(5502) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj);
  return callback(require(5500) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
ViewDebugLogsActionSheet = "ViewDebugLogsActionSheet";
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.BUOCPi);
  },
  parent: null,
  IconComponent: require("ChannelListMagnifyingGlassIcon").ChannelListMagnifyingGlassIcon,
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting,
  onPress: function handleViewDebugLogsSettingPress() {
    Keyboard.dismiss();
    let obj = importDefault(4098);
    obj = { default: ViewDebugLogsActionSheet };
    obj.openLazy(Promise.resolve(obj), ViewDebugLogsActionSheet);
  },
  withArrow: true
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.BUOCPi);
  },
  parent: null,
  IconComponent: require("ChannelListMagnifyingGlassIcon").ChannelListMagnifyingGlassIcon,
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting,
  onPress: function handleViewDebugLogsSettingPress() {
    Keyboard.dismiss();
    let obj = importDefault(4098);
    obj = { default: ViewDebugLogsActionSheet };
    obj.openLazy(Promise.resolve(obj), ViewDebugLogsActionSheet);
  },
  withArrow: true
};
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/ViewDebugLogsSetting.tsx");

export default pressable;
