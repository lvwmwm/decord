// Module ID: 14972
// Function ID: 14973
// Name: useValue
// Dependencies: [4440, 7852, 589, 14059, 11031, 1236, 2729, 2]
// Exports: onValueChange, useValue

// Module 14972 (useValue)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2729 */;
import setFontSize from "setFontSize" /* 14059 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4440 */;
import createToggle from "createToggle" /* 11031 */;

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
