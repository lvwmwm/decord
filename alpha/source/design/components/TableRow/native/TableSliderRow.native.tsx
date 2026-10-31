// Module ID: 15852
// Function ID: 15853
// Name: TableSliderRow
// Dependencies: [32, 19, 17, 21, 5014, 6976, 15853, 6977, 5624, 2]
// Exports: TableSliderRow

// Module 15852 (TableSliderRow)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 5624 */;
import react2 from "react" /* 6976 */;
import Card_Card from "Card/Card" /* 6977 */;
import Slider2 from "Slider" /* 15853 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ header: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }, label: { flexShrink: 1 }, slider: { marginStart: -4, marginTop: 8 } });
const result = size.fileFinishedImporting("design/components/TableRow/native/TableSliderRow.native.tsx");

export function TableSliderRow(end) {
  let Slider;
  let closure_1;
  let closure_129_0;
  let defaultValue;
  let first;
  let formatValue;
  let items;
  let items1;
  let label;
  let minValue;
  let obj7;
  let start;
  let value;
  ({ label, start } = end);
  if (start === undefined) {
    start = true;
  }
  let flag = end.end;
  if (flag === undefined) {
    flag = true;
  }
  ({ value, defaultValue, minValue } = end);
  if (minValue === undefined) {
    minValue = 0;
  }
  ({ formatValue, onChange: closure_129_0 } = end);
  const merged = Object.assign(end, Object.assign({ label: 0, start: 0, end: 0, value: 0, defaultValue: 0, minValue: 0, formatValue: 0, onChange: 0 }));
  closure_1 = undefined;
  const tmp2 = closure_7();
  const context = react.useContext(react2.TableRowGroupContext);
  const obj = Slider2;
  [first, closure_1] = obj.useLatestSliderValue(value, defaultValue, minValue);
  let tmp9 = !context;
  const Card = Card_Card.Card;
  if (!context) {
    tmp9 = start;
  }
  const obj3 = { style: tmp2.header, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items };
  items = [, ];
  const obj2 = { start: tmp9, end: !context && flag, border: "none", shadow: "none", children: items1 };
  const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp2.label, children: label };
  items[0] = hasOwnProperty(Text_Text.Text, obj4);
  let tmp11Result = null;
  if (null != formatValue) {
    const obj5 = { variant: "text-md/medium", color: "text-muted", children: formatValue(first) };
    const Text = tmp3(5624).Text;
    tmp11Result = tmp11(Text, obj5);
  }
  items[1] = tmp11Result;
  items1 = [metroRequire(View, obj3), ];
  const obj6 = { style: tmp2.slider, children: hasOwnProperty(Slider, obj7) };
  obj7 = {
    value,
    defaultValue,
    minValue,
    formatValue,
    onChange: function handleChange(arg0) {
      closure_1(arg0);
      if (closure_1_0 != null) {
        closure_1_0(arg0);
      }
    },
    accessibilityLabel: label
  };
  Slider = tmp3(15853).Slider;
  const merged1 = Object.assign(merged);
  items1[1] = hasOwnProperty(View, obj6);
  return metroRequire(Card, obj2);
}
