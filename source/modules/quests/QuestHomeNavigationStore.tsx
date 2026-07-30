// Module ID: 10957
// Function ID: 10958
// Name: zustandStore
// Dependencies: [4057, 2]

// Module 10957 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
