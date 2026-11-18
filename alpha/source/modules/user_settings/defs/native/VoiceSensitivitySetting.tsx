// Module ID: 16715
// Function ID: 16716
// Name: VoiceSensitivitySetting
// Dependencies: [17, 2133, 8624, 21, 4823, 504, 10929, 5719, 11897, 1113, 2]

// Module 16715 (VoiceSensitivitySetting)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5719 */;
import SettingsConstants from "SettingsConstants" /* 8624 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import createStyles from "createStyles" /* 4823 */;
import SettingBuilders from "SettingBuilders" /* 11897 */;
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
