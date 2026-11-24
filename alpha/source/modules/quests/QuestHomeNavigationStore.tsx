// Module ID: 9749
// Function ID: 9750
// Name: QuestHomeNavigationStore
// Dependencies: [5106, 2]

// Module 9749 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5106 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null, scrollToSection: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
export const QuestHomeSection = { ORBS_ARCADE: "orbs_arcade", QUESTS: "quests" };
