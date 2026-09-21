// Module ID: 15527
// Function ID: 15528
// Name: EchoCancellationSetting
// Dependencies: [1992, 8233, 504, 11725, 1115, 10250, 2]

// Module 15527 (EchoCancellationSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

require = fn;
const SettingBuilders = fn(11725);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.iWTwu6);
  },
  parent: fn(8233).MobileUserSettings.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
  },
  onValueChange: fn(10250).handleEchoCancellationChange
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default toggle;
