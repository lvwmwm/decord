// Module ID: 11932
// Function ID: 11933
// Name: QuestHomeNavigationStore
// Dependencies: [4661, 2]

// Module 11932 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4661 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
