// Module ID: 15311
// Function ID: 15312
// Name: TableSliderRow
// Dependencies: [32, 109, 19, 17, 21, 5003, 558, 576, 6936, 15312, 5266, 6937, 2]

// Module 15311 (TableSliderRow)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 5266 */;
import react3 from "react" /* 6936 */;
import Card_Card from "Card/Card" /* 6937 */;
import Slider2 from "Slider" /* 15312 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let closure_2 = ["label", "start", "end", "value", "defaultValue", "minValue", "formatValue", "onChange"];
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ header: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }, label: { flexShrink: 1 }, slider: { marginStart: -4, marginTop: 8 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function TableSliderRow(arg0) {
  let defaultValue;
  let end;
  let formatValue;
  let items;
  let items1;
  let label;
  let minValue;
  let onChange;
  let start;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp21;
  let tmp22;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  let value;
  const obj = react2;
  const cResult = obj.c(39);
  if (cResult[0] !== arg0) {
    ({ label, start, end, value, defaultValue, minValue, formatValue, onChange } = arg0);
    let closure_0 = onChange;
    const tmp15 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = defaultValue;
    cResult[2] = formatValue;
    cResult[3] = label;
    cResult[4] = onChange;
    cResult[5] = tmp15;
    cResult[6] = start;
    cResult[7] = end;
    cResult[8] = minValue;
    cResult[9] = value;
    tmp12 = value;
    tmp11 = minValue;
    tmp10 = end;
    tmp9 = start;
    tmp8 = tmp15;
    tmp6 = label;
    tmp5 = formatValue;
    tmp4 = defaultValue;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    closure_0 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
    tmp12 = cResult[9];
  }
  let num11 = 0;
  if (undefined !== tmp11) {
    num11 = tmp11;
  }
  const tmp18 = closure_9();
  const context = react.useContext(tmp(6936).TableRowGroupContext);
  const tmpResult = Slider2;
  [tmp21, tmp22] = tmpResult.useLatestSliderValue(tmp12, tmp4, num11);
  let closure_1 = tmp22;
  _slicedToArray(tmpResult.useLatestSliderValue(tmp12, tmp4, num11), 2);
  if (cResult[10] === tmp7) {
    let tmp23;
    if (cResult[11] === tmp22) {
      tmp23 = cResult[12];
    }
    if (cResult[13] === tmp6) {
      let tmp26;
      if (cResult[14] === tmp18.label) {
        tmp26 = cResult[15];
      }
      if (cResult[16] === tmp5) {
        let tmp29;
        if (cResult[17] === tmp21) {
          tmp29 = cResult[18];
        }
        if (cResult[19] === tmp18.header) {
          if (cResult[20] === tmp26) {
            let tmp32;
            if (cResult[21] === tmp29) {
              tmp32 = cResult[22];
            }
            if (cResult[23] === tmp4) {
              if (cResult[24] === tmp5) {
                if (cResult[25] === tmp23) {
                  if (cResult[26] === tmp6) {
                    if (cResult[27] === num11) {
                      if (cResult[28] === tmp8) {
                        let tmp36;
                        if (cResult[29] === tmp12) {
                          tmp36 = cResult[30];
                        }
                        if (cResult[31] === tmp18.slider) {
                          let tmp42;
                          if (cResult[32] === tmp36) {
                            tmp42 = cResult[33];
                          }
                          if (cResult[34] === tmp42) {
                            if (cResult[35] === (!context && (undefined === tmp9 || tmp9))) {
                              if (cResult[36] === (!context && (undefined === tmp10 || tmp10))) {
                                let tmp46;
                                if (cResult[37] === tmp32) {
                                  tmp46 = cResult[38];
                                }
                                return tmp46;
                              }
                            }
                          }
                          const obj2 = { start: !context && (undefined === tmp9 || tmp9), end: !context && (undefined === tmp10 || tmp10), border: "none", shadow: "none", children: items };
                          items = [tmp32, tmp42];
                          const tmp48 = metroImportAll(Card_Card.Card, obj2);
                          cResult[34] = tmp42;
                          cResult[35] = !context && (undefined === tmp9 || tmp9);
                          cResult[36] = !context && (undefined === tmp10 || tmp10);
                          cResult[37] = tmp32;
                          cResult[38] = tmp48;
                          tmp46 = tmp48;
                        }
                        const obj3 = { style: tmp18.slider, children: tmp36 };
                        const tmp45 = metroImportDefault(View, obj3);
                        cResult[31] = tmp18.slider;
                        cResult[32] = tmp36;
                        cResult[33] = tmp45;
                        tmp42 = tmp45;
                      }
                    }
                  }
                }
              }
            }
            const obj4 = { value: tmp12, defaultValue: tmp4, minValue: num11, formatValue: tmp5, onChange: tmp23, accessibilityLabel: tmp6 };
            const Slider = tmp(15312).Slider;
            const merged = Object.assign(tmp8);
            const tmp41 = metroImportDefault(Slider, obj4);
            cResult[23] = tmp4;
            cResult[24] = tmp5;
            cResult[25] = tmp23;
            cResult[26] = tmp6;
            cResult[27] = num11;
            cResult[28] = tmp8;
            cResult[29] = tmp12;
            cResult[30] = tmp41;
            tmp36 = tmp41;
          }
        }
        const obj5 = { style: tmp18.header, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items1 };
        items1 = [tmp26, tmp29];
        const tmp35 = metroImportAll(View, obj5);
        cResult[19] = tmp18.header;
        cResult[20] = tmp26;
        cResult[21] = tmp29;
        cResult[22] = tmp35;
        tmp32 = tmp35;
      }
      let tmp30 = null;
      if (null != tmp5) {
        const obj6 = { variant: "text-md/medium", color: "text-muted", children: tmp5(tmp21) };
        const Text = tmp(5266).Text;
        tmp30 = metroImportDefault(Text, obj6);
      }
      cResult[16] = tmp5;
      cResult[17] = tmp21;
      cResult[18] = tmp30;
      tmp29 = tmp30;
    }
    const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp18.label, children: tmp6 };
    const tmp28 = metroImportDefault(Text_Text.Text, obj7);
    cResult[13] = tmp6;
    cResult[14] = tmp18.label;
    cResult[15] = tmp28;
    tmp26 = tmp28;
  }
  function handleChange(arg0) {
    tmp22(arg0);
    if (closure_0 != null) {
      closure_0(arg0);
    }
  }
  cResult[10] = tmp7;
  cResult[11] = tmp22;
  cResult[12] = handleChange;
  tmp23 = handleChange;
}) : (function TableSliderRow(end) {
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
  const tmp2 = closure_9();
  const context = react.useContext(react3.TableRowGroupContext);
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
  items[0] = metroImportDefault(Text_Text.Text, obj4);
  let tmp11Result = null;
  if (null != formatValue) {
    const obj5 = { variant: "text-md/medium", color: "text-muted", children: formatValue(first) };
    const Text = tmp3(5266).Text;
    tmp11Result = tmp11(Text, obj5);
  }
  items[1] = tmp11Result;
  items1 = [metroImportAll(View, obj3), ];
  const obj6 = { style: tmp2.slider, children: metroImportDefault(Slider, obj7) };
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
  Slider = tmp3(15312).Slider;
  const merged1 = Object.assign(merged);
  items1[1] = metroImportDefault(View, obj6);
  return metroImportAll(Card, obj2);
});
const result = size.fileFinishedImporting("design/components/TableRow/native/TableSliderRow.native.tsx");

export const TableSliderRow = tmp3;
