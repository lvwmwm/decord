// Module ID: 17604
// Function ID: 17605
// Name: SidechainCompressionSetting
// Dependencies: [2130, 8536, 5929, 504, 11717, 1113, 6079, 2]

// Module 17604 (SidechainCompressionSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import Constants from "Constants" /* 5929 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6079 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
