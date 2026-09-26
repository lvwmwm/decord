// Module ID: 13621
// Function ID: 13622
// Name: useRefreshSavedMessages
// Dependencies: [19, 11987, 2]
// Exports: default

// Module 13621 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11987 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
