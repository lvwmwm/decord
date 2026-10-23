// Module ID: 9567
// Function ID: 9568
// Name: QuestHomeNavigationStore
// Dependencies: [5161, 2]

// Module 9567 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5161 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
