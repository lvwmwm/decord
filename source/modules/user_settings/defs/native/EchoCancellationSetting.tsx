// Module ID: 14421
// Function ID: 14422
// Name: toggle
// Dependencies: [4349, 8022, 589, 10380, 1236, 10793, 2]

// Module 14421 (toggle)
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.iWTwu6);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    const items = [_detectH265HardwareDecode];
    return require(589) /* initialize */.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
  },
  onValueChange: require("handleAutomaticGainControlChange").handleEchoCancellationChange
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default createToggle;
