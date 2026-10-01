// Module ID: 9439
// Function ID: 9440
// Name: UserSettingsVoiceInputOptions
// Dependencies: [19, 17, 1993, 1074, 21, 4836, 6615, 1115, 9104, 504, 9434, 5917, 4832, 6621, 9440, 2]
// Exports: default

// Module 9439 (UserSettingsVoiceInputOptions)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import intl7 from "intl" /* 1115 */;
import showSimpleActionSheet2 from "showSimpleActionSheet" /* 6615 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9104 */;
import VoiceSensitivityDefault from "VoiceSensitivity" /* 9440 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function handleInputModePress() {
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let obj = { key: "InputMode", header: obj2, options: items, hasIcons: false };
  obj2 = { title: intl.string(intl7.t["pS+K2L"]) };
  const showSimpleActionSheet = showSimpleActionSheet2.showSimpleActionSheet;
  showSimpleActionSheet2;
  intl = intl7.intl;
  const obj3 = {
    label: intl2.string(intl7.t.Q8gkVL),
    onPress() {
      const obj = AudioActionCreatorsDefault;
      obj.setMode(constants.PUSH_TO_TALK);
    }
  };
  intl2 = intl7.intl;
  items = [obj3, ];
  const obj4 = {
    label: intl3.string(intl7.t.cHCEOJ),
    onPress() {
      const obj = AudioActionCreatorsDefault;
      obj.setMode(constants.VOICE_ACTIVITY);
    }
  };
  intl3 = intl7.intl;
  items[1] = obj4;
  const result = showSimpleActionSheet(obj);
}
const View = react_native.View;
const InputModes = Constants.InputModes;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ value: { textAlign: "right" }, slider: { marginTop: 4 } });
let result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceInputOptions.tsx");

export default function UserSettingsVoiceInputOptions() {
  let Text;
  let inputMode;
  let intl;
  let intl2;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let obj4;
  let obj8;
  let obj9;
  let stringResult;
  const iter = closure_9();
  let obj = inputMode(504);
  const items = [MediaEngineStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { inputMode: MediaEngineStore.getMode(), vadThreshold: MediaEngineStore.getModeOptions().threshold, vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold };
    return obj;
  });
  inputMode = stateFromStoresObject.inputMode;
  const vadAutoThreshold = stateFromStoresObject.vadAutoThreshold;
  const vadThreshold = stateFromStoresObject.vadThreshold;
  let obj2 = { title: intl.string(inputMode(1115).t.LKCupB), hasIcons: false, children: items1 };
  const UserSettingsTableRowGroup = inputMode(9434).UserSettingsTableRowGroup;
  intl = inputMode(1115).intl;
  const obj3 = { label: intl2.string(inputMode(1115).t["pS+K2L"]), trailing: closure_6(Text, obj4), onPress: handleInputModePress };
  const TableRow = inputMode(5917).TableRow;
  intl2 = inputMode(1115).intl;
  obj4 = { style: iter.value, variant: "text-md/medium", color: "text-muted", children: stringResult };
  Text = inputMode(4832).Text;
  const tmp6 = InputModes;
  if (inputMode === InputModes.PUSH_TO_TALK) {
    const intl4 = tmp(1115).intl;
    stringResult = intl4.string(tmp(1115).t.Q8gkVL);
  } else {
    const intl3 = tmp(1115).intl;
    stringResult = intl3.string(tmp(1115).t.cHCEOJ);
  }
  items1 = [closure_6(TableRow, obj3), ];
  let tmp4Result = null;
  if (inputMode !== tmp6.PUSH_TO_TALK) {
    const obj5 = { children: items2 };
    const obj6 = {
      label: intl5.string(inputMode(1115).t.Z4oaN0),
      value: vadAutoThreshold,
      onValueChange(autoThreshold) {
          const obj = AudioActionCreatorsDefault;
          const obj2 = { autoThreshold };
          return obj.setMode(inputMode, obj2);
        }
    };
    const TableSwitchRow = tmp(6621).TableSwitchRow;
    intl5 = tmp(1115).intl;
    items2 = [closure_6(TableSwitchRow, obj6), ];
    const obj7 = { label: intl6.string(inputMode(1115).t["o+2oMK"]), subLabel: closure_6(View, obj8) };
    const TableRow2 = tmp(5917).TableRow;
    intl6 = tmp(1115).intl;
    obj8 = { style: iter.slider, children: closure_6(VoiceSensitivityDefault, obj9) };
    obj9 = {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
          const obj = AudioActionCreatorsDefault;
          const obj2 = { threshold };
          return obj.setMode(inputMode, obj2);
        }
    };
    items2[1] = closure_6(TableRow2, obj7);
    tmp4Result = tmp4(closure_7, obj5);
  }
  items1[1] = tmp4Result;
  return closure_8(UserSettingsTableRowGroup, obj2);
};
export { handleInputModePress };
