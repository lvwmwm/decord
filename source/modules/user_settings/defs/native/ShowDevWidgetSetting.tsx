// Module ID: 14654
// Function ID: 14655
// Name: toggle
// Dependencies: [7098, 13754, 589, 10361, 14655, 13993, 2]

// Module 14654 (toggle)
import initialize from "initialize";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: require("StaffBadgeIcon").StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    let obj = require(13754) /* updateDevToolsSettings */;
    obj = { showDevWidget };
    const result = obj.updateDevToolsSettings(obj);
  },
  useValue: function useShowDevWidgetSettingToggleValue() {
    const items = [initialize];
    return require(589) /* initialize */.useStateFromStores(items, () => showDevWidget.showDevWidget);
  },
  usePredicate: require("useStaffOrDeveloperSettingPredicate").useStaffOrDeveloperSettingPredicate
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default createToggle;
