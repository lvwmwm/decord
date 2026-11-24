// Module ID: 11573
// Function ID: 11574
// Name: useRefreshSavedMessages
// Dependencies: [19, 11574, 2]
// Exports: default

// Module 11573 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11574 */;
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
