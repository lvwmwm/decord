// Module ID: 13595
// Function ID: 13596
// Name: useRefreshSavedMessages
// Dependencies: [19, 558, 568, 11831, 2]

// Module 13595 (useRefreshSavedMessages)
import c from "c" /* 568 */;
import SavedMessagesActions from "SavedMessagesActions" /* 11831 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : (() => {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
});
