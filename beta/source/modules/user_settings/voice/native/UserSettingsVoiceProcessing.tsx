// Module ID: 9448
// Function ID: 9449
// Name: UserSettingsVoiceProcessing
// Dependencies: [19, 17, 1993, 21, 4836, 576, 504, 9449, 9450, 9104, 5997, 1115, 6000, 4832, 9453, 9434, 6621, 2]
// Exports: default

// Module 9448 (UserSettingsVoiceProcessing)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl8 from "intl" /* 1115 */;
import TableSwitchRow4 from "TableSwitchRow" /* 6621 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9104 */;
import UserSettingsVoice from "UserSettingsVoice" /* 9434 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 9449 */;
import NoiseCancellationUtils from "NoiseCancellationUtils" /* 9450 */;
import KrispLogoDefault from "KrispLogo" /* 9453 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
class VoiceProcessingOptions {
  constructor() {
    let TableSwitchRow;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let items1;
    let items2;
    let items3;
    let obj14;
    let tmp9Result;
    const tmp = closure_8();
    let obj = get_initialized;
    const items = [MediaEngineStore];
    const stateFromStores = obj.useStateFromStores(items, () => MediaEngineStore.isNoiseCancellationSupported());
    let obj2 = UserSettingsVoiceUtils;
    const selectedNoiseSuppressionOption = obj2.useSelectedNoiseSuppressionOption();
    const obj3 = NoiseCancellationUtils;
    const noiseCancellationDeferredToSystem = obj3.useNoiseCancellationDeferredToSystem();
    if (stateFromStores) {
      let formatResult;
      const obj4 = { style: tmp.optionsParentContainer, children: items2 };
      const obj5 = {
        value: selectedNoiseSuppressionOption,
        onChange: function noiseCancellationChanged(arg0) {
            const KRISP = UserSettingsVoiceUtils.NoiseSuppressionOpt.KRISP;
            const STANDARD = UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD;
            const obj = AudioActionCreatorsDefault;
            obj.setNoiseCancellation(arg0 === KRISP);
            const obj2 = AudioActionCreatorsDefault;
            obj2.setNoiseSuppression(arg0 === STANDARD);
          },
        title: intl3.string(intl8.t.t8Qhib),
        hasIcons: false,
        children: items1
      };
      const TableRadioGroup = tmp2(5997).TableRadioGroup;
      intl3 = tmp2(1115).intl;
      const obj6 = { value: UserSettingsVoiceUtils.NoiseSuppressionOpt.KRISP, label: intl4.string(intl8.t.rdoNzt), disabled: noiseCancellationDeferredToSystem };
      const TableRadioRow = tmp2(6000).TableRadioRow;
      intl4 = tmp2(1115).intl;
      items1 = [hasOwnProperty(TableRadioRow, obj6), , ];
      const obj7 = { disabled: noiseCancellationDeferredToSystem, value: UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD, label: intl5.string(intl8.t.qXeYHw) };
      const TableRadioRow2 = tmp2(6000).TableRadioRow;
      intl5 = tmp2(1115).intl;
      items1[1] = hasOwnProperty(TableRadioRow2, obj7);
      const obj8 = { disabled: noiseCancellationDeferredToSystem, value: UserSettingsVoiceUtils.NoiseSuppressionOpt.NONE, label: intl6.string(intl8.t.wkYAlz) };
      const TableRadioRow3 = tmp2(6000).TableRadioRow;
      intl6 = tmp2(1115).intl;
      items1[2] = hasOwnProperty(TableRadioRow3, obj8);
      items2 = [metroRequire(TableRadioGroup, obj5), ];
      const obj9 = { style: tmp.optionsDescriptionContainer, children: items3 };
      const Text = tmp2(4832).Text;
      const intl7 = tmp2(1115).intl;
      if (noiseCancellationDeferredToSystem) {
        const obj10 = {
          onSettingsClick() {
                const mediaEngine = MediaEngineStore.getMediaEngine();
                const result = mediaEngine.showSystemCaptureConfigurationUI("microphone_modes");
              }
        };
        formatResult = intl7.format(tmp2(1115).t.EUNgko, obj10);
      } else {
        formatResult = intl7.string(tmp2(1115).t.k6h1F4);
      }
      const obj11 = { variant: "text-xs/medium", color: "text-muted", children: formatResult };
      items3 = [hasOwnProperty(Text, obj11), ];
      const obj12 = { style: tmp.krisp, children: hasOwnProperty(KrispLogoDefault, {}) };
      items3[1] = hasOwnProperty(View, obj12);
      items2[1] = metroRequire(View, obj9);
      tmp9Result = tmp9(tmp10, obj4);
    } else {
      const obj13 = { hasIcons: false, children: hasOwnProperty(TableSwitchRow, obj14) };
      const UserSettingsTableRowGroup = tmp2(9434).UserSettingsTableRowGroup;
      obj14 = {
        label: intl.string(intl8.t.t8Qhib),
        subLabel: intl2.string(intl8.t.najZCV),
        value: selectedNoiseSuppressionOption === UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD,
        onValueChange(arg0) {
            const handleNoiseSuppressionChange = UserSettingsVoiceUtils.handleNoiseSuppressionChange;
            UserSettingsVoiceUtils;
            const NoiseSuppressionOpt = UserSettingsVoiceUtils.NoiseSuppressionOpt;
            return handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
          }
      };
      TableSwitchRow = tmp2(6621).TableSwitchRow;
      intl = tmp2(1115).intl;
      intl2 = tmp2(1115).intl;
      tmp9Result = hasOwnProperty(UserSettingsTableRowGroup, obj13);
    }
    return tmp9Result;
  }
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let obj = { optionsParentContainer: { marginTop: 12 }, optionsDescriptionContainer: obj2, krisp: { marginStart: -20 } };
obj2 = { paddingTop: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
const metroImportAll = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceProcessing.tsx");

export default function UserSettingsVoiceProcessing() {
  let TableSwitchRow;
  let advancedVoiceActivitySupported;
  let automaticGainControl;
  let echoCancellation;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj3;
  let vadUseKrisp;
  let obj = get_initialized;
  const items = [MediaEngineStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { echoCancellation: MediaEngineStore.getEchoCancellation(), advancedVoiceActivitySupported: MediaEngineStore.isAdvancedVoiceActivitySupported(), automaticGainControl: MediaEngineStore.getAutomaticGainControl(), inputMode: MediaEngineStore.getMode(), vadUseKrisp: MediaEngineStore.getModeOptions().vadUseKrisp };
    return obj;
  });
  ({ advancedVoiceActivitySupported, inputMode: require } = stateFromStoresObject);
  ({ echoCancellation, automaticGainControl, vadUseKrisp } = stateFromStoresObject);
  let obj2 = { title: intl.string(intl8.t["6I6GUv"]), hasIcons: false, children: closure_5(TableSwitchRow, obj3) };
  const UserSettingsTableRowGroup = UserSettingsVoice.UserSettingsTableRowGroup;
  intl = intl8.intl;
  obj3 = { label: intl2.string(intl8.t.iWTwu6), value: echoCancellation, onValueChange: UserSettingsVoiceUtils.handleEchoCancellationChange };
  TableSwitchRow = TableSwitchRow4.TableSwitchRow;
  intl2 = intl8.intl;
  const items1 = [closure_5(UserSettingsTableRowGroup, obj2), closure_5(VoiceProcessingOptions, {}), ];
  const UserSettingsTableRowGroup2 = UserSettingsVoice.UserSettingsTableRowGroup;
  const obj4 = { label: intl3.string(intl8.t.cUMdH0), subLabel: intl4.string(intl8.t["6EjbvA"]), value: automaticGainControl, onValueChange: UserSettingsVoiceUtils.handleAutomaticGainControlChange };
  const TableSwitchRow2 = TableSwitchRow4.TableSwitchRow;
  intl3 = intl8.intl;
  intl4 = intl8.intl;
  const items2 = [closure_5(TableSwitchRow2, obj4), ];
  const tmp5 = closure_7;
  const tmp6 = closure_5;
  if (advancedVoiceActivitySupported) {
    const obj5 = {
      label: intl5.string(intl8.t.BbESsg),
      subLabel: intl6.string(intl8.t.LoOB1F),
      value: vadUseKrisp,
      onValueChange(vadUseKrisp) {
          const obj = AudioActionCreatorsDefault;
          const obj2 = { vadUseKrisp };
          return obj.setMode(require, obj2);
        }
    };
    const TableSwitchRow3 = tmp(6621).TableSwitchRow;
    intl5 = tmp(1115).intl;
    intl6 = tmp(1115).intl;
    advancedVoiceActivitySupported = tmp6(TableSwitchRow3, obj5);
  }
  const obj6 = { children: items1 };
  items2[1] = advancedVoiceActivitySupported;
  items1[2] = closure_6(UserSettingsTableRowGroup2, { hasIcons: false, children: items2 });
  return closure_6(tmp5, obj6);
};
export { VoiceProcessingOptions };
