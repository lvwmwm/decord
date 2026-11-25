// Module ID: 18442
// Function ID: 18443
// Name: ConjureSharingModeSheet
// Dependencies: [19, 21, 5226, 7515, 7476, 1112, 4244, 7220, 7222, 2]
// Exports: default

// Module 18442 (ConjureSharingModeSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import TableRadioRow from "TableRadioRow" /* 7222 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7476 */;
import ActionSheet2 from "ActionSheet" /* 7515 */;
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
    title = intl.string(onChange(4244).jDBYrs);
  }
  let obj = { header: tmp2(BottomSheetTitleHeader, { title }), children: tmp2(TableRadioGroup, obj2) };
  TableRadioGroup = tmp3(7220).TableRadioGroup;
  obj2 = { value, onChange: callback, hasIcons: false, children: options.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, label: value.label }, value.value)) };
  return jsx(ActionSheet, obj);
};
export const CONJURE_SHARING_MODE_SHEET_KEY = "ConjureSharingModeSheet";
