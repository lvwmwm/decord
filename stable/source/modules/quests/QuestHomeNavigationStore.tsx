// Module ID: 10909
// Function ID: 10910
// Name: QuestHomeNavigationStore
// Dependencies: [4749, 2]

// Module 10909 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4749 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
