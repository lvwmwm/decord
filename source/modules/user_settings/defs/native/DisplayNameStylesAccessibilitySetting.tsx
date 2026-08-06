// Module ID: 14507
// Function ID: 14508
// Name: useValue
// Dependencies: [4277, 8005, 589, 13626, 10364, 1236, 2642, 2]
// Exports: onValueChange, useValue

// Module 14507 (useValue)
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createToggle from "createToggle";

const require = arg1;
function useValue() {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  return require(589) /* initialize */.useStateFromStores(items, () => obj.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = require(13626) /* setFontSize */.setDisplayNameStylesEnabled(enabled);
}
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2642)["2gFUEw"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue,
  onValueChange,
  usePredicate() {
    return true;
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default createToggle;
export { useValue };
export { onValueChange };
