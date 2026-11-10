// Module ID: 9679
// Function ID: 9680
// Name: QuestHomeNavigationStore
// Dependencies: [5211, 2]

// Module 9679 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5211 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null, scrollToQuestsSection: false }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
