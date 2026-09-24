// Module ID: 12109
// Function ID: 12110
// Name: QuestHomeNavigationStore
// Dependencies: [4699, 2]

// Module 12109 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4699 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
