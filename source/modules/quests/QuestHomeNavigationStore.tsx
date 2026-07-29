// Module ID: 10961
// Function ID: 10962
// Name: zustandStore
// Dependencies: [4057, 2]

// Module 10961 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
