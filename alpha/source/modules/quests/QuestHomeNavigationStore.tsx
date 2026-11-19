// Module ID: 9834
// Function ID: 9835
// Name: QuestHomeNavigationStore
// Dependencies: [4981, 2]

// Module 9834 (QuestHomeNavigationStore)
import ZustandStore from "ZustandStore" /* 4981 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ sort: null, filter: null, scrollToQuestId: null, scrollToSection: null }));
const result = size.fileFinishedImporting("modules/quests/QuestHomeNavigationStore.tsx");

export default zustandStore;
export const QuestHomeSection = { ORBS_ARCADE: "orbs_arcade", QUESTS: "quests" };
