// Module ID: 9327
// Function ID: 9328
// Name: useSelectedConversation
// Dependencies: [9311, 558, 576, 504, 2]

// Module 9327 (useSelectedConversation)
import SelectedConversationStore from "SelectedConversationStore" /* 9311 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedConversation(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedConversationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      const selectedConversation = SelectedConversationStore.getSelectedConversation(closure_0);
      return selectedConversation;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : (function useSelectedConversation(arg0) {
  let closure_0;
  _require = arg0;
  const items = [SelectedConversationStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const selectedConversation = SelectedConversationStore.getSelectedConversation(closure_0);
    return selectedConversation;
  }, items1);
});
const result = size.fileFinishedImporting("modules/conversations/useSelectedConversation.tsx");

export default tmp2;
