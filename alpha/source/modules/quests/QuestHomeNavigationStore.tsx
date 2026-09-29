// Module ID: 10848
// Function ID: 10849
// Name: QuestHomeNavigationStore
// Dependencies: [4705, 2]

// Module 10848 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4705 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
