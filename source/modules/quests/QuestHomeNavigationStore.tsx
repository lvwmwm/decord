// Module ID: 10947
// Function ID: 85040
// Name: zustandStore
// Dependencies: [3998, 2]

// Module 10947 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
