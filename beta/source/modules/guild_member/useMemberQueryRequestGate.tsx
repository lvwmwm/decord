// Module ID: 13516
// Function ID: 13517
// Name: useMemberQueryRequestGate
// Dependencies: [32, 19, 572, 2]
// Exports: default

// Module 13516 (useMemberQueryRequestGate)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Dispatcher from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

function createMemberQueryRequestGate() {
  let c0 = null;
  function shouldRequest(arg0) {
    const combined = "" + closure_2 + ":" + arg0;
    let flag = combined !== c0;
    if (flag) {
      c0 = combined;
      flag = true;
    }
    return flag;
  }
  shouldRequest.reset = () => {
    c0 = null;
  };
  return shouldRequest;
}
let closure_2 = 0;
const subscription = Dispatcher.subscribe("CONNECTION_OPEN", () => {
  closure_2 = closure_2 + 1;
});
const result = size.fileFinishedImporting("modules/guild_member/useMemberQueryRequestGate.tsx");

export default function useMemberQueryRequestGate() {
  return _slicedToArray(react.useState(createMemberQueryRequestGate), 1)[0];
};
