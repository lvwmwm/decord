// Module ID: 15497
// Function ID: 15498
// Name: toggle
// Dependencies: [7652, 15498, 586, 11400, 15499, 14767, 2]

// Module 15497 (toggle)
import initialize from "initialize" /* 586 */;
import updateDevToolsSettings from "updateDevToolsSettings" /* 15498 */;
import closure_2 from "initialize" /* 7652 */;
import createToggle from "createToggle" /* 11400 */;

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
