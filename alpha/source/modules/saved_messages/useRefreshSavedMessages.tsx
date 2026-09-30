// Module ID: 13058
// Function ID: 13059
// Name: useRefreshSavedMessages
// Dependencies: [19, 11410, 2]
// Exports: default

// Module 13058 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11410 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
