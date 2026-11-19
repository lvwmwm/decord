// Module ID: 16709
// Function ID: 16710
// Name: OutputVolumeSetting
// Dependencies: [2133, 8593, 504, 11875, 1113, 5688, 10903, 2]

// Module 16709 (OutputVolumeSetting)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1113 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5688 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 10903 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.xPHVBs);
  },
  parent: MobileUserSettings.VOICE,
  maximum: 200,
  useValue: function useOutputVolumeSettingValue() {
    let outputVolume;
    const items = [MediaEngineStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => outputVolume.getOutputVolume());
  },
  onValueChange: AudioActionCreatorsDefault.setOutputVolume,
  useSearchTerms() {
    const intl = intl3.intl;
    const items = [intl.string(intl3.t["3182VD"]), ];
    const intl2 = intl3.intl;
    items[1] = intl2.string(intl3.t["DGq/PR"]);
    return items;
  },
  usePredicate() {
    const obj = MobileAudioOutputExperimentDefault;
    return obj.useConfig({ location: "OutputVolumeSetting" }).audioOutputPresent;
  }
};
const volumeSlider = SettingBuilders.createVolumeSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/OutputVolumeSetting.tsx");

export default volumeSlider;
