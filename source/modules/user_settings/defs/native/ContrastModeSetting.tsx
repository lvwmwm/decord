// Module ID: 15239
// Function ID: 15240
// Name: slider
// Dependencies: [19, 4470, 7893, 21, 14315, 15137, 9238, 11288, 1233, 1296, 2]

// Module 15239 (slider)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Button from "Button" /* 1296 */;
import closure_2 from "noop" /* 19 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["TYyfO/"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(Button.BetaTag, { size: Button.BetaSizes.SMALL });
  },
  useProps: function useContrastSettingProps() {
    return React.useMemo(() => ({ value: contrast.contrast, onSlidingComplete: callback(14315).setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: callback2(callback(15137).CircleMinusIcon, {}), endIcon: callback2(callback(9238).CirclePlusIcon, {}) }), []);
  }
};
createToggle = createToggle.createSlider(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default createToggle;
