// Module ID: 14809
// Function ID: 14810
// Name: useValue
// Dependencies: [4372, 8235, 589, 13906, 10516, 1236, 2695, 2]
// Exports: onValueChange, useValue

// Module 14809 (useValue)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2695 */;
import setFontSize from "setFontSize" /* 13906 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4372 */;
import createToggle from "createToggle" /* 10516 */;

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
