// Module ID: 12025
// Function ID: 12026
// Name: QuestHomeNavigationStore
// Dependencies: [4627, 2]

// Module 12025 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4627 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
