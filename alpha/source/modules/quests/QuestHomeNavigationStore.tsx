// Module ID: 9407
// Function ID: 9408
// Name: QuestHomeNavigationStore
// Dependencies: [5048, 2]

// Module 9407 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5048 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
