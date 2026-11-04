// Module ID: 9829
// Function ID: 9830
// Name: QuestHomeNavigationStore
// Dependencies: [5335, 2]

// Module 9829 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5335 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null, scrollToQuestsSection: false }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
