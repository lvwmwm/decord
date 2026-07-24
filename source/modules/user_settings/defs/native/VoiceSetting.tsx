// Module ID: 14185
// Function ID: 109113
// Name: route
// Dependencies: [4177, 653, 566, 1212, 10127, 10764, 14186, 2]

// Module 14185 (route)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import createToggle from "createToggle";

const require = arg1;
const InputModes = ME.InputModes;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.K3lovD);
  },
  parent: null,
  IconComponent: require("MicrophoneIcon").MicrophoneIcon,
  useTrailing: function useVoiceSettingTrailing() {
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
  screen: createToggle,
  useSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t.nuFtHH)];
    return items;
  }
};
createToggle = {
  route: ME.UserSettingsSections.VOICE,
  getComponent() {
    return require(14186) /* KrispLogo */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/VoiceSetting.tsx");

export default createToggle;
