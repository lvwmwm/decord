// Module ID: 12050
// Function ID: 12051
// Name: QuestHomeNavigationStore
// Dependencies: [4658, 2]

// Module 12050 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4658 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
