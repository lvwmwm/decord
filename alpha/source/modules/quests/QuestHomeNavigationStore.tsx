// Module ID: 9544
// Function ID: 9545
// Name: QuestHomeNavigationStore
// Dependencies: [5149, 2]

// Module 9544 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5149 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
