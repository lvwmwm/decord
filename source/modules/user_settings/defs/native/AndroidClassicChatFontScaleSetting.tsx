// Module ID: 14254
// Function ID: 109430
// Name: toggle
// Dependencies: [14202, 7751, 3743, 682, 1212, 10127, 477, 2]

// Module 14254 (toggle)
import { useFontScaleStore } from "customFontScale";
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.gFob3e);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: function useClassicChatFontScaleValue() {
    return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, require(3743) /* isIterable */.shallow);
  },
  onValueChange: function onClassicChatFontScaleChange(arg0) {
    const _require = arg0;
    return _require(682).batchUpdates(() => outer1_2.setState({ isClassicChatFontScaleEnabled: closure_0 }));
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.OU3q8a);
  },
  usePredicate: require("set").isAndroid
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.gFob3e);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: function useClassicChatFontScaleValue() {
    return useFontScaleStore((isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled, require(3743) /* isIterable */.shallow);
  },
  onValueChange: function onClassicChatFontScaleChange(arg0) {
    const _require = arg0;
    return _require(682).batchUpdates(() => outer1_2.setState({ isClassicChatFontScaleEnabled: closure_0 }));
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.OU3q8a);
  },
  usePredicate: require("set").isAndroid
};
const result = require("isIterable").fileFinishedImporting("modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx");

export default toggle;
