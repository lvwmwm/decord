// Module ID: 15240
// Function ID: 115062
// Dependencies: []

// Module 15240
let closure_2 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = arg1(dependencyMap[4]).createStyles({ title: { flexDirection: "row" }, container: { padding: 10 } });
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function GenericTextRow(text) {
  let accessibilityActions;
  let icon;
  let onAccessibilityAction;
  let onPress;
  let trailing;
  text = text.text;
  const arg1 = text;
  ({ icon, onPress } = text);
  const dependencyMap = onPress;
  ({ trailing, accessibilityActions, onAccessibilityAction } = text);
  const tmp2 = callback2();
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [onPress, text];
  let obj = { style: tmp2.title };
  const callback = importAllResult.useCallback(callback(tmp), items);
  obj = { CHANNEL_HIGHLIGHT: 0, guild_template_description: null, borderWidth: 103, style: tmp2.container, children: text };
  obj.children = jsx(arg1(dependencyMap[5]).Text, obj);
  obj = {};
  let tmp6 = null != icon;
  if (tmp6) {
    tmp6 = <icon flexDirection="%MapPrototype%" alignItems="isArrayBuffer" />;
  }
  obj.icon = tmp6;
  obj.label = <View {...obj} />;
  obj.onPress = callback;
  obj.trailing = trailing;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  return jsx(arg1(dependencyMap[6]).SearchListRow, obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/search/native/components/list/rows/GenericTextRow.tsx");

export default memoResult;
