// Module ID: 14784
// Function ID: 14785
// Name: slider
// Dependencies: [19, 4669, 8238, 21, 13871, 14726, 9582, 10708, 1236, 1297, 2]

// Module 14784 (slider)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import closure_2 from "noop" /* 19 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4669 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 10708 */;

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
    return React.useMemo(() => ({ value: contrast.contrast, onSlidingComplete: callback(13871).setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: callback2(callback(14726).CircleMinusIcon, {}), endIcon: callback2(callback(9582).CirclePlusIcon, {}) }), []);
  }
};
createToggle = createToggle.createSlider(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default createToggle;
