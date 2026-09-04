// Module ID: 15332
// Function ID: 15333
// Name: toggle
// Dependencies: [4473, 7906, 11400, 1233, 586, 14363, 2]

// Module 15332 (toggle)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import setFontSize from "setFontSize" /* 14363 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4473 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.EEms8K);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => obj.animateYouBarNameplate);
  },
  onValueChange(animateNameplate) {
    let obj = setFontSize;
    obj = { animateNameplate };
    return obj.setYouBarAnimations(obj);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/YouBarNameplateAccessibilitySetting.tsx");

export default createToggle;
