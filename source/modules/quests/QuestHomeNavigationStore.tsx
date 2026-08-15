// Module ID: 10948
// Function ID: 10949
// Name: zustandStore
// Dependencies: [4241, 2]

// Module 10948 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
