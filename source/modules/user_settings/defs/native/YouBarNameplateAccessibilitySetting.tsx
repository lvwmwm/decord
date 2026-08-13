// Module ID: 14662
// Function ID: 14663
// Name: toggle
// Dependencies: [4334, 8127, 10407, 1236, 589, 13769, 2]

// Module 14662 (toggle)
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.EEms8K);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue() {
    const items = [maybeApplyNoTextColorForLightCustomTheme];
    return require(589) /* initialize */.useStateFromStores(items, () => obj.animateYouBarNameplate);
  },
  onValueChange(animateNameplate) {
    let obj = require(13769) /* setFontSize */;
    obj = { animateNameplate };
    return obj.setYouBarAnimations(obj);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/YouBarNameplateAccessibilitySetting.tsx");

export default createToggle;
