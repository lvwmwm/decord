// Module ID: 16922
// Function ID: 16923
// Name: CustomTypingIndicatorTypingSuggestionPickerSheet
// Dependencies: [32, 19, 21, 5012, 575, 7515, 7476, 1112, 4246, 7220, 7222, 12913, 2]
// Exports: default

// Module 16922 (CustomTypingIndicatorTypingSuggestionPickerSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import _modDef4246 from "module_4246" /* 4246 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7220 */;
import TableRadioRow2 from "TableRadioRow" /* 7222 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7476 */;
import ActionSheet2 from "ActionSheet" /* 7515 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 12913 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5012 */;
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
  let obj2 = { title: intl.string(_modDef4246["X+ijyw"]) };
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
  return <ActionSheet contentStyles={tmp.content} onDismiss={onDismiss} header={null} dismissAccessibilityLabel={intl2.string(_modDef4246.hrl2cG)}>{null}</ActionSheet>;
};
