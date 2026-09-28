// Module ID: 12861
// Function ID: 12862
// Name: useRefreshSavedMessages
// Dependencies: [19, 11205, 2]
// Exports: default

// Module 12861 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11205 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
