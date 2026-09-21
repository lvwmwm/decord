// Module ID: 7959
// Function ID: 7960
// Name: QuestUtmStore
// Dependencies: [560, 2]

// Module 7959 (QuestUtmStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let obj = module_560.create((arg0) => {
  const state = arg0;
  obj = {
    utmSourceCurrent: "r",
    utmMediumCurrent: "w",
    utmCampaignCurrent: "bottom",
    utmContentCurrent: "hasDiversityParent",
    setUtmCurrentContext(utmSourceCurrent) {
      return state({ utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent });
    },
    getUtmCurrentContext() {
      return state.getState();
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;
