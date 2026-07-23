// Module ID: 11047
// Function ID: 85994
// Name: AppealSignalRadioRow
// Dependencies: [31, 27, 7544, 33, 4130, 689, 3848, 7495, 7543, 11031, 686, 4098, 11048, 1934, 1212, 11041, 5459, 2]
// Exports: default

// Module 11047 (AppealSignalRadioRow)
import "result";
import { View } from "get ActivityIndicator";
import SafetyHubLinks from "SafetyHubLinks";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function AppealSignalRadioRow(signal) {
  let accessibilityRole;
  let accessibilityState;
  let importDefault;
  let selected;
  signal = signal.signal;
  ({ selected, onSelect: importDefault } = signal);
  let obj = signal(3848);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = { style: signal.rowStyle };
  obj = { text: signal(7543).getAppealSignalDisplayText(signal) };
  obj.label = callback(signal(7495).FormRow.Label, obj);
  obj.onPress = function onPress() {
    return callback(signal);
  };
  obj.trailing = callback(signal(7495).FormRow.Radio, { selected });
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  return callback(signal(7495).FormRow, obj);
}
({ AppealIngestionSignal: closure_4, AppealIngestionSignalOrder: closure_5 } = SafetyHubLinks);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1, paddingHorizontal: 16 } };
_createForOfIteratorHelperLoose = { marginBottom: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.form = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.formRow = { paddingVertical: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.formSection = { gap: 8 };
_createForOfIteratorHelperLoose.disclaimer = { marginTop: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingVertical: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
const result = require("SafetyHubLinks").fileFinishedImporting("modules/safety_hub/native/AppealIngestionCollectSignal.tsx");

export default function AppealIngestionCollectSignal(isDsaEligible) {
  isDsaEligible = isDsaEligible.isDsaEligible;
  function handleAppealSignalSelect(signal) {
    let obj = tmp(paths[10]);
    obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal };
    obj.dispatch(obj);
    let tmp2 = isDsaEligible;
    if (isDsaEligible) {
      tmp2 = signal === outer1_4.SOMETHING_ELSE;
    }
    if (tmp2) {
      obj = {
        onSave(userInput) {
            let obj = callback(686);
            obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
            obj.dispatch(obj);
            callback(4098).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
          },
        onClose() {
            return callback(4098).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
          }
      };
      tmp(paths[11]).openLazy(isDsaEligible(paths[13])(paths[12], paths.paths), "AppealIngestionFreeTextAppealReasonActionSheet", obj);
      const obj3 = tmp(paths[11]);
    }
  }
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  let obj = isDsaEligible(11031);
  const dependencyMap = obj.useSafetyHubAppealSignal();
  const intl = isDsaEligible(1212).intl;
  const intl2 = isDsaEligible(1212).intl;
  const stringResult = intl.string(isDsaEligible(1212).t["C5q+pW"]);
  obj = {};
  const items = [callback(isDsaEligible(11041).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(isDsaEligible(1212).t.VEcRhw) }), ];
  obj = { style: tmp.container };
  const obj1 = { style: tmp.form };
  const obj2 = { sectionBodyStyle: tmp.formSection, accessibilityRole: "radiogroup", children: closure_5.map((signal) => outer1_6(outer1_9, { signal, selected: signal === closure_2, rowStyle: tmp.formRow, onSelect: handleAppealSignalSelect }, "formrow-" + arg1)) };
  const items1 = [callback(isDsaEligible(7495).FormSection, obj2), ];
  let obj3 = { style: tmp.disclaimer };
  const obj4 = { variant: "text-sm/normal" };
  const intl3 = isDsaEligible(1212).intl;
  obj4.children = intl3.format(isDsaEligible(1212).t["8k9GCW"], {});
  obj3.children = callback(isDsaEligible(5459).TextWithIOSLinkWorkaround, obj4);
  items1[1] = callback(handleAppealSignalSelect, obj3);
  obj1.children = items1;
  obj.children = callback2(isDsaEligible(7495).Form, obj1);
  items[1] = callback(handleAppealSignalSelect, obj);
  obj.children = items;
  return callback2(isDsaEligible(11041).AppealIngestionModalScreen, obj);
};
