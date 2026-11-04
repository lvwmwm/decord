// Module ID: 17488
// Function ID: 17489
// Name: OutputVolumeSetting
// Dependencies: [2135, 8573, 504, 11729, 1113, 6050, 12140, 2]

// Module 17488 (OutputVolumeSetting)
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1113 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6050 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 12140 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
