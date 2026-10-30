// Module ID: 9659
// Function ID: 9660
// Name: QuestHomeNavigationStore
// Dependencies: [5206, 2]

// Module 9659 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5206 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
