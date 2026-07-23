// Module ID: 16568
// Function ID: 129230
// Name: ResendVerificationCodeButton
// Dependencies: [5, 57, 31, 27, 33, 16559, 3830, 3831, 1212, 2460, 13826, 4084, 4126, 2]
// Exports: default

// Module 16568 (ResendVerificationCodeButton)
import _getCurrentTask from "_getCurrentTask";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { Pressable } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/safety_flows/native/tasks/ResendVerificationCodeButton.tsx");

export default function ResendVerificationCodeButton(flowId) {
  flowId = flowId.flowId;
  const setLoading = flowId.setLoading;
  const tmp2 = callback2(React.useState(0), 2);
  const first = tmp2[0];
  const callback = tmp2[1];
  const items = [first];
  const effect = React.useEffect(() => {
    if (first > 0) {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        outer1_3((arg0) => arg0 - 1);
      }, 1000);
      return () => clearInterval(closure_0);
    }
  }, items);
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [setLoading, first, flowId];
  let obj = { onPress: React.useCallback(callback(tmp), items1), disabled: first > 0, accessibilityRole: "button" };
  const intl = flowId(first[8]).intl;
  obj.accessibilityLabel = intl.string(setLoading(first[9]).ah0EUu);
  obj = { variant: "text-sm/medium", color: "text-link", accessibilityLabel: null, importantForAccessibility: "no" };
  const intl2 = flowId(first[8]).intl;
  obj.accessibilityLabel = intl2.string(setLoading(first[9]).ah0EUu);
  if (first > 0) {
    const intl4 = flowId(first[8]).intl;
    obj = { countdown: first };
    let formatResult = intl4.format(setLoading(first[9])["2+Lyn0"], obj);
  } else {
    const intl3 = flowId(first[8]).intl;
    formatResult = intl3.string(setLoading(first[9]).ah0EUu);
  }
  obj.children = formatResult;
  obj.children = jsx(flowId(first[12]).Text, { variant: "text-sm/medium", color: "text-link", accessibilityLabel: null, importantForAccessibility: "no" });
  return <Pressable variant="text-sm/medium" color="text-link" accessibilityLabel={null} importantForAccessibility="no" />;
};
