// Module ID: 9740
// Function ID: 9741
// Name: useExpressionPickerTabData
// Dependencies: [19, 1218, 1115, 2]
// Exports: default

// Module 9740 (useExpressionPickerTabData)
import intl4 from "intl" /* 1115 */;
import react from "react" /* 19 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1218 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ ExpressionPickerOrder: c3, ExpressionPickerViewType: closure_4 } = ExpressionPickerConstants);
const result = size.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerTabData.tsx");

export default function useExpressionPickerTabData(arg0) {
  let expressionPickerTabs;
  let expressionType;
  ({ expressionType, expressionPickerTabs } = arg0);
  let num = 0;
  const arr = closure_3;
  if (closure_3.indexOf(expressionType) >= 0) {
    num = arr.indexOf(expressionType);
  }
  const items = [expressionPickerTabs];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let obj2;
    let obj3;
    let obj4;
    const obj = { EMOJI: obj2, GIF: obj3, STICKER: obj4 };
    obj2 = { label: intl.string(intl4.t.Xu3wE3), viewType: constants.EMOJI, show: expressionPickerTabs.includes(constants.EMOJI), order: _false.indexOf(constants.EMOJI) };
    intl = intl4.intl;
    obj3 = { label: intl2.string(intl4.t["6gUTsS"]), viewType: constants.GIF, show: expressionPickerTabs.includes(constants.GIF), order: _false.indexOf(constants.GIF) };
    intl2 = intl4.intl;
    obj4 = { label: intl3.string(intl4.t.nf1s3u), viewType: constants.STICKER, show: expressionPickerTabs.includes(constants.STICKER), order: _false.indexOf(constants.STICKER) };
    intl3 = intl4.intl;
    const values = Object.values(obj);
    const found = values.filter((show) => show.show);
    const sorted = found.sort((order) => order.order);
    const obj5 = { expressionPickerTabsSorted: sorted, expressionPickerTabStrings: sorted.map((label) => label.label) };
    return obj5;
  }, items);
  const prop = memo.expressionPickerTabsSorted;
  let obj = { expressionPickerSelectedIndex: num, expressionPickerViewType: (num < prop.length ? prop[num] : prop[0]).viewType, expressionPickerTabStrings: memo.expressionPickerTabStrings };
  return obj;
};
