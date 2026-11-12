// Module ID: 13229
// Function ID: 13230
// Name: ConjureSharingModeSheet
// Dependencies: [19, 21, 5489, 7885, 7847, 1113, 4079, 7679, 7681, 2]
// Exports: default

// Module 13229 (ConjureSharingModeSheet)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7679 */;
import TableRadioRow from "TableRadioRow" /* 7681 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7847 */;
import ActionSheet2 from "ActionSheet" /* 7885 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const ConjureSharingModeSheet_str = "ConjureSharingModeSheet";
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureSharingModeSheet.tsx");

export default function ConjureSharingModeSheet(onChange) {
  let TableRadioGroup;
  let intl;
  let obj3;
  let options;
  let value;
  ({ options, value } = onChange);
  require = value;
  onChange = onChange.onChange;
  const items = [onChange, value];
  const callback = react.useCallback((arg0) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(ConjureSharingModeSheet_str);
    if (arg0 !== require) {
      onChange(arg0);
    }
  }, items);
  let obj = { header: null, children: tmp2(TableRadioGroup, obj3) };
  const ActionSheet = ActionSheet2.ActionSheet;
  ({ title: intl.string(onChange(4079).ujIxRm) });
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl2.intl;
  TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  obj3 = { value, onChange: callback, hasIcons: false, children: options.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, label: value.label, subLabel: value.description }, value.value)) };
  return jsx(ActionSheet, obj);
};
export const CONJURE_SHARING_MODE_SHEET_KEY = "ConjureSharingModeSheet";
