// Module ID: 16664
// Function ID: 16665
// Name: OutputVolumeSetting
// Dependencies: [2131, 8712, 504, 11942, 1112, 5809, 10970, 2]

// Module 16664 (OutputVolumeSetting)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1112 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5809 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 10970 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
