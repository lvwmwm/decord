// Module ID: 11845
// Function ID: 11846
// Name: useRefreshSavedMessages
// Dependencies: [19, 11846, 2]
// Exports: default

// Module 11845 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11846 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
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
};
