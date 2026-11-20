// Module ID: 9836
// Function ID: 9837
// Name: QuestHomeNavigationStore
// Dependencies: [4983, 2]

// Module 9836 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4983 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null, scrollToSection: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
export const QuestHomeSection = { ORBS_ARCADE: "orbs_arcade", QUESTS: "quests" };
