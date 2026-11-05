// Module ID: 9835
// Function ID: 9836
// Name: QuestHomeNavigationStore
// Dependencies: [5337, 2]

// Module 9835 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5337 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null, scrollToQuestsSection: false }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
