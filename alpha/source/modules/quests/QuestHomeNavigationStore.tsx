// Module ID: 9634
// Function ID: 9635
// Name: QuestHomeNavigationStore
// Dependencies: [5200, 2]

// Module 9634 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5200 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
