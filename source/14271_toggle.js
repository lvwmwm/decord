// Module ID: 14271
// Function ID: 107863
// Name: toggle
// Dependencies: []

// Module 14271 (toggle)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[3]);
obj = {
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: arg1(dependencyMap[4]).StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    let obj = arg1(dependencyMap[1]);
    obj = { showDevWidget };
    const result = obj.updateDevToolsSettings(obj);
  },
  useValue: function useShowDevWidgetSettingToggleValue() {
    const items = [closure_2];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => showDevWidget.showDevWidget);
  },
  usePredicate: arg1(dependencyMap[5]).useStaffOrDeveloperSettingPredicate
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default toggle;
