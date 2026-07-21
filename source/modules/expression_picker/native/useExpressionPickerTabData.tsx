// Module ID: 9563
// Function ID: 74498
// Name: useExpressionPickerTabData
// Dependencies: []
// Exports: default

// Module 9563 (useExpressionPickerTabData)
let closure_2 = importAll(dependencyMap[0]);
({ ExpressionPickerOrder: closure_3, ExpressionPickerViewType: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/expression_picker/native/useExpressionPickerTabData.tsx");

export default function useExpressionPickerTabData(arg0) {
  let expressionPickerTabs;
  let expressionType;
  ({ expressionType, expressionPickerTabs } = arg0);
  const arg1 = expressionPickerTabs;
  let num = 0;
  if (closure_3.indexOf(expressionType) >= 0) {
    num = closure_3.indexOf(expressionType);
  }
  const items = [expressionPickerTabs];
  const memo = React.useMemo(() => {
    let obj = {};
    obj = {};
    const intl = expressionPickerTabs(closure_1[2]).intl;
    obj.label = intl.string(expressionPickerTabs(closure_1[2]).t.Xu3wE3);
    obj.viewType = constants.EMOJI;
    obj.show = expressionPickerTabs.includes(constants.EMOJI);
    obj.order = closure_3.indexOf(constants.EMOJI);
    obj.EMOJI = obj;
    obj = {};
    const intl2 = expressionPickerTabs(closure_1[2]).intl;
    obj.label = intl2.string(expressionPickerTabs(closure_1[2]).t.6gUTsS);
    obj.viewType = constants.GIF;
    obj.show = expressionPickerTabs.includes(constants.GIF);
    obj.order = closure_3.indexOf(constants.GIF);
    obj.GIF = obj;
    const obj1 = {};
    const intl3 = expressionPickerTabs(closure_1[2]).intl;
    obj1.label = intl3.string(expressionPickerTabs(closure_1[2]).t.nf1s3u);
    obj1.viewType = constants.STICKER;
    obj1.show = expressionPickerTabs.includes(constants.STICKER);
    obj1.order = closure_3.indexOf(constants.STICKER);
    obj.STICKER = obj1;
    const values = Object.values(obj);
    const found = values.filter((show) => show.show);
    const sorted = found.sort((order) => order.order);
    return { expressionPickerTabsSorted: sorted, expressionPickerTabStrings: sorted.map((label) => label.label) };
  }, items);
  const prop = memo.expressionPickerTabsSorted;
  const obj = { expressionPickerSelectedIndex: num, expressionPickerViewType: num < prop.length ? prop[num] : prop[0].viewType, expressionPickerTabStrings: memo.expressionPickerTabStrings };
  return obj;
};
