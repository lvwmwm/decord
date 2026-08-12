// Module ID: 11225
// Function ID: 11226
// Name: zustandStore
// Dependencies: [4211, 2]

// Module 11225 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
