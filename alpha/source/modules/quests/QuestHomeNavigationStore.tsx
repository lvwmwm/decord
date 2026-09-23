// Module ID: 12102
// Function ID: 12103
// Name: QuestHomeNavigationStore
// Dependencies: [4697, 2]

// Module 12102 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4697 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
