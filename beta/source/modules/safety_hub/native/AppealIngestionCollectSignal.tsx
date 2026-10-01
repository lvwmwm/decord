// Module ID: 11380
// Function ID: 11381
// Name: AppealIngestionCollectSignal
// Dependencies: [19, 17, 7868, 21, 4836, 576, 4548, 8053, 7867, 11359, 573, 4800, 11381, 1981, 1115, 11365, 4832, 2]
// Exports: default

// Module 11380 (AppealIngestionCollectSignal)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import react_native2 from "react-native" /* 4548 */;
import SafetyHubUtils from "SafetyHubUtils" /* 7867 */;
import Form2 from "Form" /* 8053 */;
import react from "react" /* 19 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7868 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp;
const ActionSheetActionCreatorsDefault = tmp(4800);
function AppealSignalRadioRow(signal) {
  let Label;
  let accessibilityRole;
  let accessibilityState;
  let closure_129_1;
  let obj3;
  let obj4;
  let selected;
  signal = signal.signal;
  ({ selected, onSelect: closure_129_1 } = signal);
  const rowStyle = signal.rowStyle;
  const obj = react_native2;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = {
    style: rowStyle,
    label: metroRequire(Label, obj3),
    onPress() {
      return closure_1_1(signal);
    },
    trailing: metroRequire(Form2.FormRow.Radio, { selected }),
    accessibilityRole,
    accessibilityState
  };
  const FormRow = Form2.FormRow;
  obj3 = { text: obj4.getAppealSignalDisplayText(signal) };
  Label = Form2.FormRow.Label;
  obj4 = SafetyHubUtils;
  return metroRequire(FormRow, obj2);
}
const View = react_native.View;
({ AppealIngestionSignal: closure_4, AppealIngestionSignalOrder: hasOwnProperty } = SafetyHubConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, paddingHorizontal: 16 }, form: obj2, formRow: obj3, formSection: { gap: 8 }, disclaimer: { marginTop: 24 } };
obj2 = { marginBottom: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionCollectSignal.tsx");

export default function AppealIngestionCollectSignal(isDsaEligible) {
  let Form;
  let Text;
  let closure_2;
  let intl3;
  let items;
  let items1;
  let obj4;
  let obj7;
  isDsaEligible = isDsaEligible.isDsaEligible;
  function handleAppealSignalSelect(signal) {
    let obj = DispatcherDefault;
    let obj2 = { type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal };
    obj.dispatch(obj2);
    let tmp4 = isDsaEligible;
    const tmp2 = dependencyMap;
    if (tmp4) {
      tmp4 = signal === constants.SOMETHING_ELSE;
    }
    if (tmp4) {
      let obj3 = {
        onSave(userInput) {
            const obj = formRow(closure_1_2[10]);
            const obj2 = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
            obj.dispatch(obj2);
            const obj3 = formRow(closure_1_2[11]);
            obj3.hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
          },
        onClose() {
            const obj = formRow(closure_1_2[11]);
            return obj.hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
          }
      };
      const tmpResult = ActionSheetActionCreatorsDefault;
      tmpResult.openLazy(asyncRequire(11381, tmp2.paths), "AppealIngestionFreeTextAppealReasonActionSheet", obj3);
    }
  }
  let tmp = closure_8();
  const formRow = tmp;
  let obj = isDsaEligible(11359);
  dependencyMap = obj.useSafetyHubAppealSignal();
  const intl = isDsaEligible(1115).intl;
  const stringResult = intl.string(isDsaEligible(1115).t["C5q+pW"]);
  const intl2 = isDsaEligible(1115).intl;
  let obj2 = { children: items };
  const stringResult1 = intl2.string(isDsaEligible(1115).t.VEcRhw);
  const AppealIngestionModalScreen = isDsaEligible(11365).AppealIngestionModalScreen;
  items = [closure_6(isDsaEligible(11365).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: stringResult1 }), ];
  let obj3 = { style: tmp.container, children: closure_7(Form, obj4) };
  obj4 = { style: tmp.form, children: items1 };
  Form = isDsaEligible(8053).Form;
  const obj5 = {
    sectionBodyStyle: tmp.formSection,
    accessibilityRole: "radiogroup",
    children: closure_5.map((signal, index) => {
      const obj = { signal, selected: signal === closure_2, rowStyle: formRow.formRow, onSelect: handleAppealSignalSelect };
      return metroRequire(AppealSignalRadioRow, obj, "formrow-" + index);
    })
  };
  const FormSection = isDsaEligible(8053).FormSection;
  items1 = [closure_6(FormSection, obj5), ];
  const obj6 = { style: tmp.disclaimer, children: closure_6(Text, obj7) };
  obj7 = { variant: "text-sm/normal", children: intl3.format(isDsaEligible(1115).t["8k9GCW"], {}) };
  Text = isDsaEligible(4832).Text;
  intl3 = isDsaEligible(1115).intl;
  items1[1] = closure_6(handleAppealSignalSelect, obj6);
  items[1] = closure_6(handleAppealSignalSelect, obj3);
  return closure_7(AppealIngestionModalScreen, obj2);
};
