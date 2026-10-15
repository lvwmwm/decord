// Module ID: 9390
// Function ID: 9391
// Name: QuestHomeNavigationStore
// Dependencies: [5045, 2]

// Module 9390 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5045 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
