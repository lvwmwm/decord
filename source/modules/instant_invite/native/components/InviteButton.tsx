// Module ID: 11736
// Function ID: 91180
// Dependencies: []

// Module 11736
const View = arg1(dependencyMap[1]).View;
const InviteSendStates = arg1(dependencyMap[2]).InviteSendStates;
const jsx = arg1(dependencyMap[3]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_5 = arg1(dependencyMap[4]).createStyles({ buttonWrapper: { accessibilityRole: 16777216, ti: 22041922 } });
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function InviteButton(onPressSend) {
  let disabled;
  let sendState;
  ({ sendState, disabled } = onPressSend);
  if (disabled === undefined) {
    disabled = false;
  }
  const intl = arg1(dependencyMap[5]).intl;
  intl.string(arg1(dependencyMap[5]).t.jYnGPG);
  if (InviteSendStates.SENDING === sendState) {
    const intl5 = arg1(dependencyMap[5]).intl;
    let stringResult1 = intl5.string(arg1(dependencyMap[5]).t.jYnGPG);
    let flag = true;
    disabled = false;
  } else if (InviteSendStates.SENT === sendState) {
    const intl4 = arg1(dependencyMap[5]).intl;
    stringResult1 = intl4.string(arg1(dependencyMap[5]).t.dVT149);
    flag = false;
    disabled = true;
  } else if (InviteSendStates.ERROR === sendState) {
    const intl3 = arg1(dependencyMap[5]).intl;
    stringResult1 = intl3.string(arg1(dependencyMap[5]).t.wNcfpX);
    flag = false;
    disabled = false;
  } else {
    const intl2 = arg1(dependencyMap[5]).intl;
    stringResult1 = intl2.string(arg1(dependencyMap[5]).t.jYnGPG);
    flag = false;
  }
  let obj = { style: callback().buttonWrapper };
  obj = { justifyContent: "9Oq93m", width: "<string:191316480>", height: "<string:2196570113>", text: stringResult1, onPress: onPressSend.onPressSend };
  if (!disabled) {
    disabled = flag;
  }
  obj.disabled = disabled;
  obj.grow = true;
  obj.children = jsx(arg1(dependencyMap[6]).Button, obj);
  return <View {...obj} />;
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/instant_invite/native/components/InviteButton.tsx");

export default memoResult;
