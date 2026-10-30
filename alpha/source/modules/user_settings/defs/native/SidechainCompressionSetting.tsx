// Module ID: 17179
// Function ID: 17180
// Name: SidechainCompressionSetting
// Dependencies: [2007, 8424, 5763, 504, 11505, 1114, 5896, 2]

// Module 17179 (SidechainCompressionSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1114 */;
import Constants from "Constants" /* 5763 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5896 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
