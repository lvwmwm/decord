// Module ID: 11081
// Function ID: 11082
// Name: zustandStore
// Dependencies: [4153, 2]

// Module 11081 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
