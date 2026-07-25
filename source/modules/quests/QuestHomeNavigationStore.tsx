// Module ID: 10898
// Function ID: 84632
// Name: zustandStore
// Dependencies: [3999, 2]

// Module 10898 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
