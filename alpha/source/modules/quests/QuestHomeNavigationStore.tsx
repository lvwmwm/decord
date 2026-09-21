// Module ID: 12021
// Function ID: 12022
// Name: QuestHomeNavigationStore
// Dependencies: [4626, 2]

// Module 12021 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4626 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
