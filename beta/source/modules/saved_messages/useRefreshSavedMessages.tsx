// Module ID: 13592
// Function ID: 13593
// Name: useRefreshSavedMessages
// Dependencies: [19, 11958, 2]
// Exports: default

// Module 13592 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11958 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
