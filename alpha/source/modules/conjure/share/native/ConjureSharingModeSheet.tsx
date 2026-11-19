// Module ID: 18331
// Function ID: 18332
// Name: ConjureSharingModeSheet
// Dependencies: [19, 21, 5006, 7434, 7396, 1113, 4089, 7228, 7230, 2]
// Exports: default

// Module 18331 (ConjureSharingModeSheet)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7228 */;
import TableRadioRow from "TableRadioRow" /* 7230 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7396 */;
import ActionSheet2 from "ActionSheet" /* 7434 */;
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
  ({ title: intl.string(onChange(4089).jDBYrs) });
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl2.intl;
  TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  obj3 = { value, onChange: callback, hasIcons: false, children: options.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, label: value.label }, value.value)) };
  return jsx(ActionSheet, obj);
};
export const CONJURE_SHARING_MODE_SHEET_KEY = "ConjureSharingModeSheet";
