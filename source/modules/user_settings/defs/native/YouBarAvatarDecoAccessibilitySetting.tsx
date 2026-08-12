// Module ID: 14663
// Function ID: 14664
// Name: toggle
// Dependencies: [4336, 8123, 10493, 1236, 589, 13777, 2]

// Module 14663 (toggle)
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["34XN2f"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue() {
    const items = [maybeApplyNoTextColorForLightCustomTheme];
    return require(589) /* initialize */.useStateFromStores(items, () => obj.animateYouBarAvatarDeco);
  },
  onValueChange(animateAvatarDeco) {
    let obj = require(13777) /* setFontSize */;
    obj = { animateAvatarDeco };
    return obj.setYouBarAnimations(obj);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/YouBarAvatarDecoAccessibilitySetting.tsx");

export default createToggle;
