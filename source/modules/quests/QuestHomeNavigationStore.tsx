// Module ID: 11558
// Function ID: 11559
// Name: zustandStore
// Dependencies: [4344, 2]

// Module 11558 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4344 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = set.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
