// Module ID: 14364
// Function ID: 110011
// Name: toggle
// Dependencies: [1279, 7697, 566, 10059, 1212, 6152, 2]

// Module 14364 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["3340dY"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: function useTextAndMediaSyncSettingValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.shouldSync("text"));
  },
  onValueChange: require("convertThemeToProto").setShouldSyncTextSettings
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx");

export default createToggle;
