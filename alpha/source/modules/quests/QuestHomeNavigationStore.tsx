// Module ID: 10666
// Function ID: 10667
// Name: QuestHomeNavigationStore
// Dependencies: [4701, 2]

// Module 10666 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4701 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
