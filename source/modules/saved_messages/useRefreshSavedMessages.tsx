// Module ID: 9904
// Function ID: 76637
// Name: useRefreshSavedMessages
// Dependencies: []
// Exports: default

// Module 9904 (useRefreshSavedMessages)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = React.useEffect(() => {
    const andUpdateSavedMessages = callback(closure_1[1]).fetchAndUpdateSavedMessages();
  }, []);
};
