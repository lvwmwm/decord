// Module ID: 10922
// Function ID: 10923
// Name: QuestHomeNavigationStore
// Dependencies: [4755, 2]

// Module 10922 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4755 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
