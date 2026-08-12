// Module ID: 14547
// Function ID: 14548
// Name: route
// Dependencies: [4392, 676, 589, 1236, 10493, 10930, 14548, 2]

// Module 14547 (route)
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import ME from "ME";
import createToggle from "createToggle";

let UserSettingsSections;
let c3;
const require = arg1;
({ InputModes: c3, UserSettingsSections } = ME);
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.K3lovD);
  },
  parent: null,
  IconComponent: require("MicrophoneIcon").MicrophoneIcon,
  useTrailing: function useVoiceSettingTrailing() {
    const items = [_detectH265HardwareDecode];
    if (obj.useStateFromStores(items, () => mode.getMode()) === constants.PUSH_TO_TALK) {
      const intl2 = tmp(1236).intl;
      let stringResult = intl2.string(tmp(1236).t.Q8gkVL);
    } else {
      const intl = tmp(1236).intl;
      stringResult = intl.string(tmp(1236).t.cHCEOJ);
    }
    return stringResult;
  },
  screen: createToggle,
  useSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t.nuFtHH)];
    return items;
  }
};
createToggle = {
  route: UserSettingsSections.VOICE,
  getComponent() {
    return require(14548) /* KrispLogo */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/VoiceSetting.tsx");

export default createToggle;
