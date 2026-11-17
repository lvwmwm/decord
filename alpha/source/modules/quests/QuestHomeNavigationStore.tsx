// Module ID: 10574
// Function ID: 10575
// Name: QuestHomeNavigationStore
// Dependencies: [5499, 2]

// Module 10574 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 5499 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null, scrollToSection: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
export const QuestHomeSection = { ORBS_ARCADE: "orbs_arcade", QUESTS: "quests" };
