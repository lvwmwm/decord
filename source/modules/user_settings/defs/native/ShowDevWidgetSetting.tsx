// Module ID: 15139
// Function ID: 15140
// Name: toggle
// Dependencies: [7432, 15140, 589, 11031, 15141, 14415, 2]

// Module 15139 (toggle)
import initialize from "initialize" /* 589 */;
import updateDevToolsSettings from "updateDevToolsSettings" /* 15140 */;
import closure_2 from "initialize" /* 7432 */;
import createToggle from "createToggle" /* 11031 */;

require = arg1;
createToggle = {
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: require("StaffBadgeIcon").StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    let obj = updateDevToolsSettings;
    obj = { showDevWidget };
    const result = obj.updateDevToolsSettings(obj);
  },
  useValue: function useShowDevWidgetSettingToggleValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => showDevWidget.showDevWidget);
  },
  usePredicate: require("useStaffOrDeveloperSettingPredicate").useStaffOrDeveloperSettingPredicate
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default createToggle;
