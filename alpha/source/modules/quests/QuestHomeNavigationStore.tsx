// Module ID: 9568
// Function ID: 9569
// Name: QuestHomeNavigationStore
// Dependencies: [5163, 2]

// Module 9568 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5163 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
