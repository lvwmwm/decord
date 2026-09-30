// Module ID: 10883
// Function ID: 10884
// Name: QuestHomeNavigationStore
// Dependencies: [4735, 2]

// Module 10883 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4735 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
