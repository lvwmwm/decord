// Module ID: 15209
// Function ID: 114789
// Dependencies: []

// Module 15209
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: {}, text: {} });
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
  obj = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>", style: tmp.text, children: text };
  return <View {...obj} />;
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/search/native/components/tabs/pages/ErrorScreen.tsx");

export default memoResult;
