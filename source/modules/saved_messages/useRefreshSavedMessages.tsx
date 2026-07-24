// Module ID: 9950
// Function ID: 76918
// Name: useRefreshSavedMessages
// Dependencies: [31, 9945, 2]
// Exports: default

// Module 9950 (useRefreshSavedMessages)
import result from "result";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = React.useEffect(() => {
    const andUpdateSavedMessages = outer1_0(outer1_1[1]).fetchAndUpdateSavedMessages();
  }, []);
};
