// Module ID: 14681
// Function ID: 14682
// Name: slider
// Dependencies: [19, 4334, 8148, 21, 13781, 14626, 9590, 10421, 1236, 1297, 2]

// Module 14681 (slider)
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["5PWWCY"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useTrailing() {
    const obj = { size: null };
    obj[0] = require(1297) /* Button */.BetaSizes.SMALL;
    return jsx(require(1297) /* Button */.BetaTag, { size: null });
  },
  useProps: function useSaturationSettingProps() {
    return React.useMemo(() => ({ value: saturation.saturation, onSlidingComplete: callback(13781).setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: callback2(callback(14626).CircleMinusIcon, {}), endIcon: callback2(callback(9590).CirclePlusIcon, {}) }), []);
  }
};
createToggle = createToggle.createSlider(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default createToggle;
