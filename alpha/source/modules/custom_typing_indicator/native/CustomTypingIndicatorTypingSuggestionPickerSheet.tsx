// Module ID: 17625
// Function ID: 17626
// Name: CustomTypingIndicatorTypingSuggestionPickerSheet
// Dependencies: [32, 19, 21, 5143, 575, 7504, 7460, 1113, 3997, 7202, 7205, 13964, 2]
// Exports: default

// Module 17625 (CustomTypingIndicatorTypingSuggestionPickerSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import _modDef3997 from "module_3997" /* 3997 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7202 */;
import TableRadioRow2 from "TableRadioRow" /* 7205 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7460 */;
import ActionSheet2 from "ActionSheet" /* 7504 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 13964 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let obj2;
const jsx = Fragment.jsx;
const obj = { content: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx");

export default function CustomTypingIndicatorTypingSuggestionPickerSheet(initialValue) {
  let closure_1;
  let first;
  let intl;
  let presets;
  ({ presets, onChange: require } = initialValue);
  importDefault = undefined;
  initialValue = initialValue.initialValue;
  const tmp = closure_6();
  [first, importDefault] = react.useState(initialValue);
  const ActionSheet = ActionSheet2.ActionSheet;
  let obj2 = { title: intl.string(_modDef3997["X+ijyw"]) };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl3.intl;
  const intl2 = intl3.intl;
  ({
    value: first,
    onChange: function handleChange(arg0) {
      closure_1(arg0);
      require(arg0);
    },
    hasIcons: false,
    children: presets.map((value) => {
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      const intl = intl3.intl;
      const string = intl.string;
      const obj2 = CustomTypingIndicatorUtils;
      return <TableRadioRow key={arg0} value={arg0} label={string(obj2.getCustomTypingIndicatorSuggestionMessage(arg0))} />;
    })
  });
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  return <ActionSheet contentStyles={tmp.content} header={null} dismissAccessibilityLabel={intl2.string(_modDef3997.hrl2cG)}>{null}</ActionSheet>;
};
