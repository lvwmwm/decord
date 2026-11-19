// Module ID: 16716
// Function ID: 16717
// Name: SidechainCompressionSetting
// Dependencies: [2133, 8593, 5537, 504, 11875, 1113, 5688, 2]

// Module 16716 (SidechainCompressionSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import Constants from "Constants" /* 5537 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5688 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const Features = Constants.Features;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["/jwMtn"]);
  },
  parent: MobileUserSettings.VOICE,
  usePredicate() {
    return MediaEngineStore.supports(Features.SIDECHAIN_COMPRESSION);
  },
  useValue: function useSidechainCompressionSettingValue() {
    let sidechainCompression;
    const items = [MediaEngineStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => sidechainCompression.getSidechainCompression());
  },
  onValueChange(arg0) {
    const obj = AudioActionCreatorsDefault;
    return obj.setSidechainCompression(arg0);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.zlA23F);
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SidechainCompressionSetting.tsx");

export default toggle;
