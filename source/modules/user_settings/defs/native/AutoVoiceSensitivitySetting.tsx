// Module ID: 14563
// Function ID: 14564
// Name: toggle
// Dependencies: [4393, 8148, 589, 9219, 10421, 1236, 2]

// Module 14563 (toggle)
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
    let obj = importDefault(9219);
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
