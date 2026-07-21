// Module ID: 11036
// Function ID: 85920
// Name: AppealSignalRadioRow
// Dependencies: []
// Exports: default

// Module 11036 (AppealSignalRadioRow)
function AppealSignalRadioRow(signal) {
  let accessibilityRole;
  let accessibilityState;
  let selected;
  signal = signal.signal;
  const arg1 = signal;
  ({ selected, onSelect: closure_1 } = signal);
  let obj = arg1(dependencyMap[6]);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = { style: signal.rowStyle };
  obj = { text: arg1(dependencyMap[8]).getAppealSignalDisplayText(signal) };
  obj.label = callback(arg1(dependencyMap[7]).FormRow.Label, obj);
  obj.onPress = function onPress() {
    return callback(signal);
  };
  obj.trailing = callback(arg1(dependencyMap[7]).FormRow.Radio, { selected });
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  return callback(arg1(dependencyMap[7]).FormRow, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ AppealIngestionSignal: closure_4, AppealIngestionSignalOrder: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { surrogates: true, scales: null } };
obj = { marginBottom: 16, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.form = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.formRow = { paddingVertical: 16, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.formSection = { gap: 8 };
obj.disclaimer = { marginTop: 24 };
let closure_8 = obj.createStyles(obj);
const obj1 = { paddingVertical: 16, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/safety_hub/native/AppealIngestionCollectSignal.tsx");

export default function AppealIngestionCollectSignal(isDsaEligible) {
  const arg1 = isDsaEligible.isDsaEligible;
  function handleAppealSignalSelect(signal) {
    let obj = tmp(paths[10]);
    obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal };
    obj.dispatch(obj);
    let tmp2 = isDsaEligible;
    if (isDsaEligible) {
      tmp2 = signal === constants.SOMETHING_ELSE;
    }
    if (tmp2) {
      obj = {
        onSave(userInput) {
            let obj = callback(closure_2[10]);
            obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
            obj.dispatch(obj);
            callback(closure_2[11]).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
          },
        onClose() {
            return callback(closure_2[11]).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
          }
      };
      tmp(paths[11]).openLazy(isDsaEligible(paths[13])(paths[12], paths.paths), "AppealIngestionFreeTextAppealReasonActionSheet", obj);
      const obj3 = tmp(paths[11]);
    }
  }
  const tmp = callback3();
  const importDefault = tmp;
  let obj = arg1(closure_2[9]);
  closure_2 = obj.useSafetyHubAppealSignal();
  const intl = arg1(closure_2[14]).intl;
  const intl2 = arg1(closure_2[14]).intl;
  const stringResult = intl.string(arg1(closure_2[14]).t.C5q+pW);
  obj = {};
  const items = [callback(arg1(closure_2[15]).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(arg1(closure_2[14]).t.VEcRhw) }), ];
  obj = { style: tmp.container };
  const obj1 = { style: tmp.form };
  const obj2 = { sectionBodyStyle: tmp.formSection, accessibilityRole: "radiogroup", children: closure_5.map((signal) => callback(closure_9, { signal, selected: signal === closure_2, rowStyle: tmp.formRow, onSelect: handleAppealSignalSelect }, "formrow-" + arg1)) };
  const items1 = [callback(arg1(closure_2[7]).FormSection, obj2), ];
  const obj3 = { style: tmp.disclaimer };
  const obj4 = { variant: "text-sm/normal" };
  const intl3 = arg1(closure_2[14]).intl;
  obj4.children = intl3.format(arg1(closure_2[14]).t.8k9GCW, {});
  obj3.children = callback(arg1(closure_2[16]).TextWithIOSLinkWorkaround, obj4);
  items1[1] = callback(handleAppealSignalSelect, obj3);
  obj1.children = items1;
  obj.children = callback2(arg1(closure_2[7]).Form, obj1);
  items[1] = callback(handleAppealSignalSelect, obj);
  obj.children = items;
  return callback2(arg1(closure_2[15]).AppealIngestionModalScreen, obj);
};
