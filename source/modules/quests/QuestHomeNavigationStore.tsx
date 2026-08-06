// Module ID: 11085
// Function ID: 11086
// Name: zustandStore
// Dependencies: [4152, 2]

// Module 11085 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
