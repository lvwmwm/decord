// Module ID: 14514
// Function ID: 14515
// Name: toggle
// Dependencies: [4277, 8005, 589, 13626, 10364, 1236, 2]

// Module 14514 (toggle)
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["St+DJK"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: function useReducedMotionSyncSettingValue() {
    const items = [maybeApplyNoTextColorForLightCustomTheme];
    return require(589) /* initialize */.useStateFromStores(items, () => "auto" === obj.rawPrefersReducedMotion);
  },
  onValueChange: function onReducedMotionSyncSettingValueChange(arg0) {
    const obj = require(13626) /* setFontSize */;
    let str = "auto";
    if (!arg0) {
      str = obj.systemPrefersReducedMotion;
    }
    const result = obj.setPrefersReducedMotion(str);
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/SyncReducedMotionWithDeviceSetting.tsx");

export default createToggle;
