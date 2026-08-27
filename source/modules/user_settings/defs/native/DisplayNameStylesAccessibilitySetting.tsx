// Module ID: 14953
// Function ID: 14954
// Name: useValue
// Dependencies: [4437, 7816, 589, 14006, 10988, 1236, 2727, 2]
// Exports: onValueChange, useValue

// Module 14953 (useValue)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2727 */;
import setFontSize from "setFontSize" /* 14006 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4437 */;
import createToggle from "createToggle" /* 10988 */;

require = arg1;
function useValue() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => obj.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = setFontSize.setDisplayNameStylesEnabled(enabled);
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["2gFUEw"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue,
  onValueChange
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default createToggle;
export { useValue };
export { onValueChange };
