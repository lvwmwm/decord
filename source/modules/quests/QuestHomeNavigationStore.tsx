// Module ID: 11096
// Function ID: 11097
// Name: zustandStore
// Dependencies: [4123, 2]

// Module 11096 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
