// Module ID: 14495
// Function ID: 14496
// Name: toggle
// Dependencies: [4351, 8082, 589, 1236, 10447, 10860, 2]

// Module 14495 (toggle)
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.cUMdH0);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue: function useAutomaticGainControlSettingValue() {
    const items = [_detectH265HardwareDecode];
    return require(589) /* initialize */.useStateFromStores(items, () => automaticGainControl.getAutomaticGainControl());
  },
  onValueChange: require("handleAutomaticGainControlChange").handleAutomaticGainControlChange,
  useDescription: function useAutomaticGainControlSettingDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["6EjbvA"]);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/AutomaticGainControlSetting.tsx");

export default createToggle;
