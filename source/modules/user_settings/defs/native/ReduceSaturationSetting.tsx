// Module ID: 14667
// Function ID: 14668
// Name: slider
// Dependencies: [19, 4336, 8123, 21, 13777, 14613, 9573, 10493, 1236, 1297, 2]

// Module 14667 (slider)
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
    return React.useMemo(() => ({ value: saturation.saturation, onSlidingComplete: callback(13777).setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: callback2(callback(14613).CircleMinusIcon, {}), endIcon: callback2(callback(9573).CirclePlusIcon, {}) }), []);
  }
};
createToggle = createToggle.createSlider(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default createToggle;
