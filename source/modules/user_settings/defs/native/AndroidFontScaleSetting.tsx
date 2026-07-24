// Module ID: 14250
// Function ID: 109420
// Name: slider
// Dependencies: [31, 14202, 662, 7751, 33, 682, 14251, 11283, 1212, 10127, 477, 2]

// Module 14250 (slider)
import result from "result";
import { useFontScaleStore } from "customFontScale";
import { FontScales } from "MAX_FAVORITES";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

let require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.i19n5L);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useProps: function useFontScaleSliderProps() {
    const tmp = useFontScaleStore();
    const require = tmp;
    let index;
    if (null != tmp.persistedFontScale) {
      index = FontScales.indexOf(tmp.persistedFontScale);
    }
    callback = callback.useCallback((arg0) => {
      arg0(index[5]).batchUpdates(() => outer2_3.setState({ fontScale: outer2_4[closure_0] }));
    }, []);
    const items = [index, callback, tmp.fontScale];
    return callback.useMemo(() => {
      const text = `${closure_0.fontScale * 100}%`;
      const obj = { value: index, minimumValue: 0, maximumValue: outer1_4.length - 1, step: 1, onValueChange: callback, startIcon: outer1_5(tmp(index[6]).CircleMinusIcon, {}), endIcon: outer1_5(tmp(index[7]).CirclePlusIcon, {}) };
      const intl = tmp(index[8]).intl;
      obj.accessibilityLabel = intl.string(tmp(index[8]).t.i19n5L);
      obj.accessibilityValue = { text };
      obj.valueLabel = text;
      obj.defaultValue = outer1_4.indexOf(1);
      return obj;
    }, items);
  },
  usePredicate: require("set").isAndroid
};
createToggle = createToggle.createSlider(createToggle);
const result = require("MAX_FAVORITES").fileFinishedImporting("modules/user_settings/defs/native/AndroidFontScaleSetting.tsx");

export default createToggle;
