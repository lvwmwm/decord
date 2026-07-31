// Module ID: 10975
// Function ID: 10976
// Name: zustandStore
// Dependencies: [4061, 2]

// Module 10975 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
