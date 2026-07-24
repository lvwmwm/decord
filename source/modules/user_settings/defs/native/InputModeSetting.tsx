// Module ID: 14187
// Function ID: 109125
// Name: pressable
// Dependencies: [4177, 7751, 4191, 566, 1212, 10127, 10742, 2]

// Module 14187 (pressable)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { InputModes } from "DesktopSources";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["pS+K2L"]);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useTrailing: function useInputModeSettingTrailing() {
    const items = [_isNativeReflectConstruct];
    if (obj.useStateFromStores(items, () => outer1_2.getMode()) === InputModes.PUSH_TO_TALK) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.Q8gkVL);
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1212) /* getSystemLocale */.t.cHCEOJ);
    }
    return stringResult;
  },
  onPress: require("handleInputModePress").handleInputModePress,
  useSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t.nuFtHH)];
    return items;
  }
};
createToggle = createToggle.createPressable(createToggle);
const result = require("DesktopSources").fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default createToggle;
