// Module ID: 17749
// Function ID: 17750
// Name: VoiceSensitivitySetting
// Dependencies: [17, 2130, 9135, 21, 5243, 504, 12910, 6162, 12311, 1113, 2]

// Module 17749 (VoiceSensitivitySetting)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6162 */;
import SettingsConstants from "SettingsConstants" /* 9135 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import createStyles from "createStyles" /* 5243 */;
import SettingBuilders from "SettingBuilders" /* 12311 */;
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
