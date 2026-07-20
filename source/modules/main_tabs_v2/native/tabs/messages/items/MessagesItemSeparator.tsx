// Module ID: 14784
// Function ID: 111431
// Name: PX_12
// Dependencies: []

// Module 14784 (PX_12)
let StyleSheet;
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet, View: closure_0 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const PX_12 = importDefault(dependencyMap[3]).space.PX_12;
const tmp2 = arg1(dependencyMap[1]);
let obj = { container: { height: PX_12 } };
obj = { backgroundColor: importDefault(dependencyMap[3]).colors.BORDER_SUBTLE, height: StyleSheet.hairlineWidth };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["top"] = undefined;
obj.separator = obj;
let closure_2 = arg1(dependencyMap[4]).createStyles(obj);
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function MessagesItemSeperator() {
  const tmp = callback();
  let obj = { style: tmp.container, collapsable: false, children: <closure_0 {...obj} /> };
  obj = { style: tmp.separator };
  return <closure_0 {...obj} />;
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSeparator.tsx");

export default memoResult;
export const MESSAGES_ITEM_SEPERATOR_HEIGHT = PX_12;
