// Module ID: 11233
// Function ID: 11234
// Name: zustandStore
// Dependencies: [4209, 2]

// Module 11233 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
