// Module ID: 14315
// Function ID: 14316
// Name: toggle
// Dependencies: [1302, 7753, 589, 14196, 10116, 1236, 1348, 2]

// Module 14315 (toggle)
import handleThemeChange from "handleThemeChange";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.c445ix);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return importDefault(1348)("SameAsDeviceThemeSetting");
  },
  useValue: function useSameAsDeviceThemeValue() {
    const items = [handleThemeChange];
    return require(589) /* initialize */.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  onValueChange: function onSameAsDeviceThemeValueChange(arg0) {
    const obj = require(14196) /* handleSaveTheme */;
    if (arg0) {
      const result = obj.enableSameAsDeviceTheme();
    } else {
      const result1 = obj.disableSameAsDeviceTheme();
    }
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+tBsvs"]);
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/SameAsDeviceThemeSetting.tsx");

export default createToggle;
