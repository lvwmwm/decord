// Module ID: 13691
// Function ID: 13692
// Name: useRefreshSavedMessages
// Dependencies: [19, 12046, 2]
// Exports: default

// Module 13691 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 12046 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
