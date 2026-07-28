// Module ID: 10937
// Function ID: 84758
// Name: zustandStore
// Dependencies: [4033, 2]

// Module 10937 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
