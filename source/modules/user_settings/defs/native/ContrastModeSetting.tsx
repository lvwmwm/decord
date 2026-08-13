// Module ID: 14666
// Function ID: 14667
// Name: slider
// Dependencies: [19, 4334, 8127, 21, 13769, 14613, 9577, 10407, 1236, 1297, 2]

// Module 14666 (slider)
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["TYyfO/"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useTrailing() {
    const obj = { size: null };
    obj[0] = require(1297) /* Button */.BetaSizes.SMALL;
    return jsx(require(1297) /* Button */.BetaTag, { size: null });
  },
  useProps: function useContrastSettingProps() {
    return React.useMemo(() => ({ value: contrast.contrast, onSlidingComplete: callback(13769).setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: callback2(callback(14613).CircleMinusIcon, {}), endIcon: callback2(callback(9577).CirclePlusIcon, {}) }), []);
  }
};
createToggle = createToggle.createSlider(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default createToggle;
