// Module ID: 11217
// Function ID: 11218
// Name: zustandStore
// Dependencies: [4209, 2]

// Module 11217 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
