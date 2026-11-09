// Module ID: 9770
// Function ID: 9771
// Name: QuestHomeNavigationStore
// Dependencies: [5327, 2]

// Module 9770 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5327 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null, scrollToQuestsSection: false }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
