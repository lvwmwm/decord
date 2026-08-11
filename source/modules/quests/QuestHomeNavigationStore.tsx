// Module ID: 11172
// Function ID: 11173
// Name: zustandStore
// Dependencies: [4170, 2]

// Module 11172 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
