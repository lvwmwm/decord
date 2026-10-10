// Module ID: 12648
// Function ID: 12649
// Name: useRefreshSavedMessages
// Dependencies: [19, 558, 576, 12649, 2]

// Module 12648 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 12649 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRefreshSavedMessages(arg0) {
  let closure_0;
  let tmp3;
  let tmp4;
  let obj = require("react");
  const cResult = obj.c(3);
  _require = tmp2;
  if (cResult[0] !== (undefined === arg0 || arg0)) {
    const fn = function f() {
      const tmp = closure_0;
      if (tmp) {
        const obj = SavedMessagesActions;
        const andUpdateSavedMessages = obj.fetchAndUpdateSavedMessages();
      }
    };
    const items = [tmp2];
    cResult[0] = undefined === arg0 || arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp4 = items;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = react.useEffect(tmp3, tmp4);
}) : (function useRefreshSavedMessages() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const items = [flag];
  const effect = react.useEffect(() => {
    const tmp = flag;
    if (tmp) {
      const obj = SavedMessagesActions;
      const andUpdateSavedMessages = obj.fetchAndUpdateSavedMessages();
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default tmp2;
