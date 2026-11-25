// Module ID: 9848
// Function ID: 9849
// Name: QuestHomeNavigationStore
// Dependencies: [5201, 2]

// Module 9848 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5201 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null, scrollToSection: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
export const QuestHomeSection = { ORBS_ARCADE: "orbs_arcade", QUESTS: "quests" };
