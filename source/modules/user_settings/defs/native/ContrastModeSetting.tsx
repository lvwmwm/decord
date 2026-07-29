// Module ID: 14372
// Function ID: 14373
// Name: slider
// Dependencies: [19, 4181, 7756, 21, 13502, 14329, 11308, 10120, 1236, 1297, 2]

// Module 14372 (slider)
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
    return React.useMemo(() => ({ value: contrast.contrast, onSlidingComplete: callback(13502).setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: callback2(callback(14329).CircleMinusIcon, {}), endIcon: callback2(callback(11308).CirclePlusIcon, {}) }), []);
  }
};
createToggle = createToggle.createSlider(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default createToggle;
