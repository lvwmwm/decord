// Module ID: 11167
// Function ID: 11168
// Name: zustandStore
// Dependencies: [4170, 2]

// Module 11167 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
