// Module ID: 13600
// Function ID: 13601
// Name: useRefreshSavedMessages
// Dependencies: [19, 11962, 2]
// Exports: default

// Module 13600 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11962 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
