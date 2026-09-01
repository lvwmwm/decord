// Module ID: 15007
// Function ID: 15008
// Name: toggle
// Dependencies: [4470, 7884, 11068, 1236, 589, 14092, 2]

// Module 15007 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import setFontSize from "setFontSize" /* 14092 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import createToggle from "createToggle" /* 11068 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["34XN2f"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => obj.animateYouBarAvatarDeco);
  },
  onValueChange(animateAvatarDeco) {
    let obj = setFontSize;
    obj = { animateAvatarDeco };
    return obj.setYouBarAnimations(obj);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/YouBarAvatarDecoAccessibilitySetting.tsx");

export default createToggle;
