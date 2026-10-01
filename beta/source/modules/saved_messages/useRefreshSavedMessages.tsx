// Module ID: 12861
// Function ID: 12862
// Name: useRefreshSavedMessages
// Dependencies: [19, 11205, 2]
// Exports: default

// Module 12861 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11205 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = react.useEffect(() => {
    const obj = SavedMessagesActions;
    const andUpdateSavedMessages = obj.fetchAndUpdateSavedMessages();
  }, []);
};
