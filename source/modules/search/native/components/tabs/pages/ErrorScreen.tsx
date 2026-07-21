// Module ID: 15206
// Function ID: 114755
// Dependencies: []

// Module 15206
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: {}, text: { "Null": "50%", "Null": 1 } });
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo((text) => {
  text = text.text;
  const arg1 = text;
  const tmp = callback();
  const items = [text];
  const effect = importAllResult.useEffect(() => {
    const AccessibilityAnnouncer = text(closure_2[5]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(text, "polite");
  }, items);
  let obj = { style: items1, children: jsx(arg1(dependencyMap[6]).Text, obj) };
  const items1 = [tmp.container, { paddingBottom: importDefault(dependencyMap[4])({ includeKeyboardHeight: true }).insets.bottom }];
  obj = { style: tmp.text, children: text };
  return <View {...obj} />;
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/search/native/components/tabs/pages/ErrorScreen.tsx");

export default memoResult;
