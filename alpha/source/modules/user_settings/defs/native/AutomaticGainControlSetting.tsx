// Module ID: 15608
// Function ID: 15609
// Name: AutomaticGainControlSetting
// Dependencies: [1992, 8323, 504, 1115, 11811, 10340, 2]

// Module 15608 (AutomaticGainControlSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

require = fn;
const SettingBuilders = fn(11811);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.cUMdH0);
  },
  parent: fn(8323).MobileUserSettings.VOICE,
  useValue: function useAutomaticGainControlSettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => automaticGainControl.getAutomaticGainControl());
  },
  onValueChange: fn(10340).handleAutomaticGainControlChange,
  useDescription: function useAutomaticGainControlSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t["6EjbvA"]);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutomaticGainControlSetting.tsx");

export default toggle;
