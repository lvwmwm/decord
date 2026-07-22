// Module ID: 14792
// Function ID: 111481
// Dependencies: []

// Module 14792
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function MessagesItemChannelWave(hasNameplate) {
  let flag = hasNameplate.hasNameplate;
  if (flag === undefined) {
    flag = false;
  }
  let obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.text = intl.string(arg1(dependencyMap[3]).t.n8nU4W);
  obj = { "Null": null, "Null": null, "Null": null, hasSkip: null, style: { marginTop: 3 } };
  obj.icon = jsx(arg1(dependencyMap[4]).Text, obj);
  let str = "secondary";
  if (flag) {
    str = "secondary-overlay";
  }
  obj.variant = str;
  obj.size = "sm";
  obj.onPress = hasNameplate.wavePressed;
  return jsx(arg1(dependencyMap[2]).Button, obj);
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelWave.tsx");

export default memoResult;
