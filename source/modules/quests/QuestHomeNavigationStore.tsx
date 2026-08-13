// Module ID: 11216
// Function ID: 11217
// Name: zustandStore
// Dependencies: [4209, 2]

// Module 11216 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
