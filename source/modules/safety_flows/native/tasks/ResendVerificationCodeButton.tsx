// Module ID: 16435
// Function ID: 126953
// Name: ResendVerificationCodeButton
// Dependencies: []
// Exports: default

// Module 16435 (ResendVerificationCodeButton)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const Pressable = arg1(dependencyMap[3]).Pressable;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/safety_flows/native/tasks/ResendVerificationCodeButton.tsx");

export default function ResendVerificationCodeButton(flowId) {
  flowId = flowId.flowId;
  const arg1 = flowId;
  const setLoading = flowId.setLoading;
  const importDefault = setLoading;
  const tmp2 = callback2(React.useState(0), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  const callback = tmp2[1];
  const items = [first];
  const effect = React.useEffect(() => {
    if (first > 0) {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        callback((arg0) => arg0 - 1);
      }, 1000);
      return () => clearInterval(closure_0);
    }
  }, items);
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [setLoading, first, flowId];
  let obj = { onPress: React.useCallback(callback(tmp), items1), disabled: first > 0, accessibilityRole: "button" };
  const intl = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl.string(importDefault(dependencyMap[9]).ah0EUu);
  obj = {};
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl2.string(importDefault(dependencyMap[9]).ah0EUu);
  if (first > 0) {
    const intl4 = arg1(dependencyMap[8]).intl;
    obj = { countdown: first };
    let formatResult = intl4.format(importDefault(dependencyMap[9]).2+Lyn0, obj);
  } else {
    const intl3 = arg1(dependencyMap[8]).intl;
    formatResult = intl3.string(importDefault(dependencyMap[9]).ah0EUu);
  }
  obj.children = formatResult;
  obj.children = jsx(arg1(dependencyMap[12]).Text, obj);
  return <Pressable {...obj} />;
};
