// Module ID: 9600
// Function ID: 9601
// Name: QuestHomeNavigationStore
// Dependencies: [5195, 2]

// Module 9600 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5195 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
