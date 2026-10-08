// Module ID: 10573
// Function ID: 10574
// Name: QuestHomeNavigationStore
// Dependencies: [4949, 2]

// Module 10573 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4949 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
