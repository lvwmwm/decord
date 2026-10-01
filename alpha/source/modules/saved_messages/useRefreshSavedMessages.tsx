// Module ID: 13066
// Function ID: 13067
// Name: useRefreshSavedMessages
// Dependencies: [19, 11418, 2]
// Exports: default

// Module 13066 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11418 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
