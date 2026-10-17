// Module ID: 9471
// Function ID: 9472
// Name: QuestHomeNavigationStore
// Dependencies: [5085, 2]

// Module 9471 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5085 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
