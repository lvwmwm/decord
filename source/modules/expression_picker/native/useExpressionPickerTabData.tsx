// Module ID: 9607
// Function ID: 74763
// Name: useExpressionPickerTabData
// Dependencies: [31, 1314, 1212, 2]
// Exports: default

// Module 9607 (useExpressionPickerTabData)
import result from "result";
import ExpressionPickerViewType from "ExpressionPickerViewType";

let closure_3;
let closure_4;
const require = arg1;
({ ExpressionPickerOrder: closure_3, ExpressionPickerViewType: closure_4 } = ExpressionPickerViewType);
const result = require("getSystemLocale").fileFinishedImporting("modules/expression_picker/native/useExpressionPickerTabData.tsx");

export default function useExpressionPickerTabData(arg0) {
  let expressionPickerTabs;
  let expressionType;
  ({ expressionType, expressionPickerTabs } = arg0);
  let num = 0;
  if (closure_3.indexOf(expressionType) >= 0) {
    num = closure_3.indexOf(expressionType);
  }
  const items = [expressionPickerTabs];
  const memo = React.useMemo(() => {
    let obj = {};
    obj = {};
    const intl = expressionPickerTabs(outer1_1[2]).intl;
    obj.label = intl.string(expressionPickerTabs(outer1_1[2]).t.Xu3wE3);
    obj.viewType = outer1_4.EMOJI;
    obj.show = expressionPickerTabs.includes(outer1_4.EMOJI);
    obj.order = outer1_3.indexOf(outer1_4.EMOJI);
    obj.EMOJI = obj;
    obj = {};
    const intl2 = expressionPickerTabs(outer1_1[2]).intl;
    obj.label = intl2.string(expressionPickerTabs(outer1_1[2]).t["6gUTsS"]);
    obj.viewType = outer1_4.GIF;
    obj.show = expressionPickerTabs.includes(outer1_4.GIF);
    obj.order = outer1_3.indexOf(outer1_4.GIF);
    obj.GIF = obj;
    const obj1 = {};
    const intl3 = expressionPickerTabs(outer1_1[2]).intl;
    obj1.label = intl3.string(expressionPickerTabs(outer1_1[2]).t.nf1s3u);
    obj1.viewType = outer1_4.STICKER;
    obj1.show = expressionPickerTabs.includes(outer1_4.STICKER);
    obj1.order = outer1_3.indexOf(outer1_4.STICKER);
    obj.STICKER = obj1;
    const values = Object.values(obj);
    const found = values.filter((show) => show.show);
    const sorted = found.sort((order) => order.order);
    return { expressionPickerTabsSorted: sorted, expressionPickerTabStrings: sorted.map((label) => label.label) };
  }, items);
  const prop = memo.expressionPickerTabsSorted;
  let obj = { expressionPickerSelectedIndex: num, expressionPickerViewType: num < prop.length ? prop[num] : prop[0].viewType, expressionPickerTabStrings: memo.expressionPickerTabStrings };
  return obj;
};
