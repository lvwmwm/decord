// Module ID: 10899
// Function ID: 84637
// Name: zustandStore
// Dependencies: [3999, 2]

// Module 10899 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
