// Module ID: 17586
// Function ID: 17587
// Name: CustomTypingIndicatorTypingSuggestionPickerSheet
// Dependencies: [32, 19, 21, 5141, 575, 7502, 7457, 1113, 3997, 7199, 13950, 7202, 2]
// Exports: default

// Module 17586 (CustomTypingIndicatorTypingSuggestionPickerSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef3997 from "module_3997" /* 3997 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let importDefault;

let obj2;
const jsx = Fragment.jsx;
const obj = { content: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx");

export default function CustomTypingIndicatorTypingSuggestionPickerSheet(onChange) {
  let closure_1;
  let customTypingIndicatorSuggestionPresets;
  let first;
  let intl;
  onChange = onChange.onChange;
  importDefault = undefined;
  const initialValue = onChange.initialValue;
  const tmp = closure_6();
  [first, importDefault] = react.useState(initialValue);
  const ActionSheet = onChange(7502).ActionSheet;
  let obj2 = { title: intl.string(_modDef3997["X+ijyw"]) };
  const BottomSheetTitleHeader = onChange(7457).BottomSheetTitleHeader;
  intl = onChange(1113).intl;
  const intl2 = onChange(1113).intl;
  ({
    value: first,
    onChange: function handleChange(arg0) {
      closure_1(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: customTypingIndicatorSuggestionPresets.map((value) => {
      const TableRadioRow = onChange(dependencyMap[11]).TableRadioRow;
      const intl = onChange(dependencyMap[7]).intl;
      const string = intl.string;
      const obj2 = onChange(dependencyMap[10]);
      return <TableRadioRow key={arg0} value={arg0} label={string(obj2.getCustomTypingIndicatorSuggestionMessage(arg0))} />;
    })
  });
  const TableRadioGroup = onChange(7199).TableRadioGroup;
  const obj4 = onChange(13950);
  customTypingIndicatorSuggestionPresets = obj4.getCustomTypingIndicatorSuggestionPresets();
  return <ActionSheet contentStyles={tmp.content} header={null} dismissAccessibilityLabel={intl2.string(_modDef3997.hrl2cG)}>{null}</ActionSheet>;
};
