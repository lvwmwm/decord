// Module ID: 15337
// Function ID: 15338
// Name: slider
// Dependencies: [19, 4473, 7906, 21, 14363, 15236, 11136, 11400, 1233, 1296, 2]

// Module 15337 (slider)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Button from "Button" /* 1296 */;
import closure_2 from "noop" /* 19 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4473 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["5PWWCY"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(Button.BetaTag, { size: Button.BetaSizes.SMALL });
  },
  useProps: function useSaturationSettingProps() {
    return React.useMemo(() => ({ value: saturation.saturation, onSlidingComplete: callback(14363).setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: callback2(callback(15236).CircleMinusIcon, {}), endIcon: callback2(callback(11136).CirclePlusIcon, {}) }), []);
  }
};
createToggle = createToggle.createSlider(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default createToggle;
