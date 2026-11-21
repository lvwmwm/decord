// Module ID: 16655
// Function ID: 16656
// Name: VoiceSensitivitySetting
// Dependencies: [17, 2131, 8712, 21, 4913, 504, 10969, 5809, 11937, 1112, 2]

// Module 16655 (VoiceSensitivitySetting)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5809 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import createStyles from "createStyles" /* 4913 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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
