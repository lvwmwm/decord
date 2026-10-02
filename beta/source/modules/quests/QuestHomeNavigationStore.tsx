// Module ID: 10668
// Function ID: 10669
// Name: QuestHomeNavigationStore
// Dependencies: [4707, 2]

// Module 10668 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4707 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
