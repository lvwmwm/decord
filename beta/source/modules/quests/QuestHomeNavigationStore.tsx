// Module ID: 11896
// Function ID: 11897
// Name: QuestHomeNavigationStore
// Dependencies: [4629, 2]

// Module 11896 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4629 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
