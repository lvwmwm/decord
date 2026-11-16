// Module ID: 17596
// Function ID: 17597
// Name: VoiceSensitivitySetting
// Dependencies: [17, 2130, 8536, 21, 5170, 504, 12145, 6079, 11717, 1113, 2]

// Module 17596 (VoiceSensitivitySetting)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6079 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import createStyles from "createStyles" /* 5170 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ slider: { marginTop: 8 } });
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["sqUm+k"]);
  },
  parent: MobileUserSettings.VOICE,
  useDescription: function useVoiceSensitivitySettingDescription() {
    let inputMode;
    let vadAutoThreshold;
    let vadThreshold;
    const tmp = closure_6();
    let obj = inputMode(504);
    const items = [MediaEngineStore];
    const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
      const obj = { inputMode: MediaEngineStore.getMode(), vadThreshold: MediaEngineStore.getModeOptions().threshold, vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold };
      return obj;
    });
    inputMode = stateFromStoresObject.inputMode;
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    return <View style={tmp.slider}>{null}</View>;
  },
  useSearchTerms() {
    const intl = intl2.intl;
    const items = [intl.string(intl2.t.nuFtHH)];
    return items;
  }
};
const createStaticResult = SettingBuilders.createStatic(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/VoiceSensitivitySetting.tsx");

export default createStaticResult;
