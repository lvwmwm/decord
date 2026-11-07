// Module ID: 17663
// Function ID: 17664
// Name: CustomTypingIndicatorTypingSuggestionPickerSheet
// Dependencies: [32, 19, 21, 5140, 575, 7426, 7382, 1113, 4028, 7124, 7127, 13965, 2]
// Exports: default

// Module 17663 (CustomTypingIndicatorTypingSuggestionPickerSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import _modDef4028 from "module_4028" /* 4028 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7124 */;
import TableRadioRow2 from "TableRadioRow" /* 7127 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7382 */;
import ActionSheet2 from "ActionSheet" /* 7426 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 13965 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let obj2;
const jsx = Fragment.jsx;
let obj = { content: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx");

export default function CustomTypingIndicatorTypingSuggestionPickerSheet(arg0) {
  let closure_2;
  let first;
  let initialValue;
  let intl;
  let onDismiss;
  let presets;
  ({ presets, highlightedPresets: require, onChange: importDefault } = arg0);
  dependencyMap = undefined;
  ({ initialValue, onDismiss } = arg0);
  const tmp = closure_6();
  [first, dependencyMap] = react.useState(initialValue);
  const ActionSheet = ActionSheet2.ActionSheet;
  let obj2 = { title: intl.string(_modDef4028["X+ijyw"]) };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl3.intl;
  const intl2 = intl3.intl;
  let obj3 = {
    value: first,
    onChange: function handleChange(arg0) {
      closure_2(arg0);
      importDefault(arg0);
    },
    hasIcons: false,
    children: presets.map((value) => {
      let obj3;
      let obj4;
      let string;
      let hasItem;
      const obj = require;
      if (require != null) {
        hasItem = obj.includes(value);
      }
      const obj2 = { value, label: string(obj3.getCustomTypingIndicatorSuggestionMessage(value)), badge: obj4 };
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      const intl = intl3.intl;
      string = intl.string;
      obj4 = undefined;
      obj3 = CustomTypingIndicatorUtils;
      const tmp2 = jsx;
      if (true === hasItem) {
        obj4 = { type: "new", variant: "primary" };
      }
      return tmp2(TableRadioRow, obj2, value);
    })
  };
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  return <ActionSheet contentStyles={tmp.content} onDismiss={onDismiss} header={null} dismissAccessibilityLabel={intl2.string(_modDef4028.hrl2cG)}>{null}</ActionSheet>;
};
