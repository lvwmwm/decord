// Module ID: 14190
// Function ID: 109142
// Name: volumeSlider
// Dependencies: [4177, 7751, 566, 10127, 1212, 8882, 10741, 2]

// Module 14190 (volumeSlider)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.xPHVBs);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  maximum: 200,
  useValue: function useOutputVolumeSettingValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getOutputVolume());
  },
  onValueChange: require("getInputDeviceName").setOutputVolume,
  useSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t["3182VD"]), ];
    const intl2 = require(1212) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1212) /* getSystemLocale */.t["DGq/PR"]);
    return items;
  },
  usePredicate() {
    return importDefault(10741).useConfig({ location: "OutputVolumeSetting" }).audioOutputPresent;
  }
};
createToggle = createToggle.createVolumeSlider(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/OutputVolumeSetting.tsx");

export default createToggle;
