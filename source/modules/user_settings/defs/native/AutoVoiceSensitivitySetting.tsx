// Module ID: 14266
// Function ID: 14267
// Name: toggle
// Dependencies: [4236, 7756, 589, 8838, 10120, 1236, 2]

// Module 14266 (toggle)
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Z4oaN0);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue: function useAutoVoiceSensitivitySettingValue() {
    const items = [_detectH265HardwareDecode];
    return require(589) /* initialize */.useStateFromStores(items, () => modeOptions.getModeOptions().autoThreshold);
  },
  onValueChange: function onAutoVoiceSensitivitySettingValueChange(autoThreshold) {
    mode = mode.getMode();
    let obj = importDefault(8838);
    obj = { autoThreshold };
    obj.setMode(mode, obj);
  },
  useSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t.nuFtHH)];
    return items;
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/AutoVoiceSensitivitySetting.tsx");

export default createToggle;
