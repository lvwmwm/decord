// Module ID: 13419
// Function ID: 13420
// Name: useRefreshSavedMessages
// Dependencies: [19, 11838, 2]
// Exports: default

// Module 13419 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11838 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
