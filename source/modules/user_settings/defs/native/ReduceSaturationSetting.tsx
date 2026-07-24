// Module ID: 14295
// Function ID: 109744
// Name: slider
// Dependencies: [31, 4122, 7751, 33, 13423, 14251, 11283, 10127, 1212, 1273, 2]

// Module 14295 (slider)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["5PWWCY"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useTrailing() {
    const obj = { size: require(1273) /* Button */.BetaSizes.SMALL };
    return jsx(require(1273) /* Button */.BetaTag, { size: require(1273) /* Button */.BetaSizes.SMALL });
  },
  useProps: function useSaturationSettingProps() {
    return React.useMemo(() => {
      const obj = { value: outer1_3.saturation, onSlidingComplete: outer1_0(outer1_1[4]).setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: outer1_4(outer1_0(outer1_1[5]).CircleMinusIcon, {}), endIcon: outer1_4(outer1_0(outer1_1[6]).CirclePlusIcon, {}) };
      return obj;
    }, []);
  }
};
createToggle = createToggle.createSlider(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default createToggle;
