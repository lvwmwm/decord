// Module ID: 18304
// Function ID: 18305
// Name: ConjureSharingModeSheet
// Dependencies: [19, 21, 5127, 7553, 7515, 1112, 4190, 7347, 7349, 2]
// Exports: default

// Module 18304 (ConjureSharingModeSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import TableRadioRow from "TableRadioRow" /* 7349 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7515 */;
import ActionSheet2 from "ActionSheet" /* 7553 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const ConjureSharingModeSheet_str = "ConjureSharingModeSheet";
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureSharingModeSheet.tsx");

export default function ConjureSharingModeSheet(onChange) {
  let TableRadioGroup;
  let obj2;
  let options;
  let value;
  ({ options, value } = onChange);
  require = value;
  onChange = onChange.onChange;
  let title = onChange.title;
  const items = [onChange, value];
  const callback = react.useCallback((arg0) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(ConjureSharingModeSheet_str);
    if (arg0 !== require) {
      onChange(arg0);
    }
  }, items);
  const ActionSheet = ActionSheet2.ActionSheet;
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  if (title == null) {
    const intl = tmp3(1112).intl;
    title = intl.string(onChange(4190).jDBYrs);
  }
  let obj = { header: tmp2(BottomSheetTitleHeader, { title }), children: tmp2(TableRadioGroup, obj2) };
  TableRadioGroup = tmp3(7347).TableRadioGroup;
  obj2 = { value, onChange: callback, hasIcons: false, children: options.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, label: value.label }, value.value)) };
  return jsx(ActionSheet, obj);
};
export const CONJURE_SHARING_MODE_SHEET_KEY = "ConjureSharingModeSheet";
