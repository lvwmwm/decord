// Module ID: 11901
// Function ID: 11902
// Name: QuestHomeNavigationStore
// Dependencies: [4506, 2]

// Module 11901 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4506 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
