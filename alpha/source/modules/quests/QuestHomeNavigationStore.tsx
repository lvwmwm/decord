// Module ID: 9147
// Function ID: 9148
// Name: QuestHomeNavigationStore
// Dependencies: [4950, 2]

// Module 9147 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4950 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
