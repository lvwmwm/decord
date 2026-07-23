// Module ID: 10920
// Function ID: 84851
// Name: zustandStore
// Dependencies: [3998, 2]

// Module 10920 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
