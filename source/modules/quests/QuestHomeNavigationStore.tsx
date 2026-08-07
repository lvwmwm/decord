// Module ID: 11100
// Function ID: 11101
// Name: zustandStore
// Dependencies: [4169, 2]

// Module 11100 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
