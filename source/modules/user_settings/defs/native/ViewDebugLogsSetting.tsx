// Module ID: 14269
// Function ID: 107833
// Name: ViewDebugLogsActionSheetRow
// Dependencies: []

// Module 14269 (ViewDebugLogsActionSheetRow)
function ViewDebugLogsActionSheetRow(icon) {
  const title = icon.title;
  const require = title;
  ({ screenKey: closure_1, render: closure_2 } = icon);
  return callback(require(dependencyMap[4]).ActionSheetRow, {
    icon: icon.icon,
    label: title,
    onPress() {
      let obj = callback(closure_2[3]);
      obj.hideActionSheet(closure_7);
      obj = {
        default(defaultResult1, defaultResult2, date, sendMessageOptions) {
          return callback2(callback(closure_2[6]), { title: closure_0, render: closure_2, screenKey: callback });
        }
      };
      callback(closure_2[5]).pushLazy(Promise.resolve(obj));
    }
  });
}
function ViewDebugLogsActionSheet() {
  let obj = {};
  obj = {};
  const intl = require(dependencyMap[9]).intl;
  obj.title = intl.string(require(dependencyMap[9]).t.BUOCPi);
  obj.header = callback(require(dependencyMap[8]).BottomSheetTitleHeader, obj);
  obj = { hasIcons: true };
  const obj1 = { icon: callback(require(dependencyMap[10]).WrenchIcon, {}) };
  const intl2 = require(dependencyMap[9]).intl;
  obj1.title = intl2.string(require(dependencyMap[9]).t.XpPGhL);
  obj1.screenKey = "debugLogs";
  obj1.render = function render() {
    return callback2(callback(closure_2[11]), {});
  };
  const items = [callback(ViewDebugLogsActionSheetRow, obj1), , ];
  const obj2 = { icon: callback(require(dependencyMap[12]).ClockIcon, {}) };
  const intl3 = require(dependencyMap[9]).intl;
  obj2.title = intl3.string(require(dependencyMap[9]).t.b0nJvk);
  obj2.screenKey = "startupTiming";
  obj2.render = function render() {
    return callback2(closure_3, { children: callback2(callback(closure_2[13]), {}) });
  };
  items[1] = callback(ViewDebugLogsActionSheetRow, obj2);
  let tmp3 = null;
  if (obj6.isAndroid()) {
    const obj3 = { icon: callback(require(dependencyMap[15]).ChannelNotificationIcon, {}) };
    const intl4 = require(dependencyMap[9]).intl;
    obj3.title = intl4.string(require(dependencyMap[9]).t.Ljj0ps);
    obj3.screenKey = "pushNotificationLogs";
    obj3.render = function render() {
      return callback2(callback(closure_2[16]), {});
    };
    tmp3 = callback(ViewDebugLogsActionSheetRow, obj3);
  }
  items[2] = tmp3;
  obj.children = items;
  obj.children = closure_6(require(dependencyMap[4]).ActionSheetRow.Group, obj);
  return callback(require(dependencyMap[7]).ActionSheet, obj);
}
const Suspense = require(dependencyMap[0]).Suspense;
const Keyboard = require(dependencyMap[1]).Keyboard;
const _module = require(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = _module);
let closure_7 = "ViewDebugLogsActionSheet";
const _module1 = require(dependencyMap[17]);
const pressable = _module1.createPressable({
  useTitle() {
    const intl = require(dependencyMap[9]).intl;
    return intl.string(require(dependencyMap[9]).t.BUOCPi);
  },
  parent: null,
  IconComponent: require(dependencyMap[18]).ChannelListMagnifyingGlassIcon,
  usePredicate: require(dependencyMap[19]).DeveloperMode.useSetting,
  onPress: function handleViewDebugLogsSettingPress() {
    Keyboard.dismiss();
    let obj = importDefault(dependencyMap[3]);
    obj = { default: ViewDebugLogsActionSheet };
    obj.openLazy(Promise.resolve(obj), closure_7);
  },
  withArrow: true
});
const _module2 = require(dependencyMap[20]);
const result = _module2.fileFinishedImporting("modules/user_settings/defs/native/ViewDebugLogsSetting.tsx");

export default pressable;
