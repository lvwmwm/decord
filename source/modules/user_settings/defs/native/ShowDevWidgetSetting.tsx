// Module ID: 14509
// Function ID: 110742
// Name: toggle
// Dependencies: [5984, 13617, 566, 10099, 14510, 13852, 2]

// Module 14509 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: require("StaffBadgeIcon").StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    let obj = require(13617) /* updateDevToolsSettings */;
    obj = { showDevWidget };
    const result = obj.updateDevToolsSettings(obj);
  },
  useValue: function useShowDevWidgetSettingToggleValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.showDevWidget);
  },
  usePredicate: require("useStaffOrDeveloperSettingPredicate").useStaffOrDeveloperSettingPredicate
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default createToggle;
