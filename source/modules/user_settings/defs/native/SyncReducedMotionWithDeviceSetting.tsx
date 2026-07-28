// Module ID: 14354
// Function ID: 110063
// Name: toggle
// Dependencies: [4157, 7733, 566, 13479, 10099, 1212, 2]

// Module 14354 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["St+DJK"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: function useReducedMotionSyncSettingValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => "auto" === outer1_2.rawPrefersReducedMotion);
  },
  onValueChange: function onReducedMotionSyncSettingValueChange(arg0) {
    const obj = require(13479) /* setFontSize */;
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
