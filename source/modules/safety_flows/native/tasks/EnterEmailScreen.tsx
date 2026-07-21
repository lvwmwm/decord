// Module ID: 16432
// Function ID: 126942
// Name: EnterEmailScreen
// Dependencies: []
// Exports: default

// Module 16432 (EnterEmailScreen)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/safety_flows/native/tasks/EnterEmailScreen.tsx");

export default function EnterEmailScreen() {
  let tmp2;
  let tmp3;
  let obj = callback(dependencyMap[3]);
  const callback = obj.useNavigation();
  [tmp2, tmp3] = callback2(React.useState(""), 2);
  obj = {};
  const tmp = callback2(React.useState(""), 2);
  const intl = callback(dependencyMap[5]).intl;
  obj.title = intl.string(importDefault(dependencyMap[6]).bFbsV6);
  const intl2 = callback(dependencyMap[5]).intl;
  obj.action = intl2.string(importDefault(dependencyMap[6]).RRBNpv);
  obj.onAction = function onAction() {
    const arr = arr.push(arr(closure_2[7]).SafetyFlowScreens.VERIFY_EMAIL);
  };
  obj = { children: jsx(callback(dependencyMap[9]).TextInput, { label: "Email", value: tmp2, onChange: tmp3 }) };
  obj.children = jsx(callback(dependencyMap[8]).Stack, obj);
  return jsx(importDefault(dependencyMap[4]), obj);
};
