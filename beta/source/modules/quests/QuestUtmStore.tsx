// Module ID: 7964
// Function ID: 7965
// Name: QuestUtmStore
// Dependencies: [562, 2]

// Module 7964 (QuestUtmStore)
import module_562 from "module_562" /* 562 */;
import size from "module_2" /* 2 */;

const obj = module_562.create((arg0) => {
  state = arg0;
  return {
    utmSourceCurrent: "r",
    utmMediumCurrent: "applicationId",
    utmCampaignCurrent: "uri",
    utmContentCurrent: "methodobject",
    setUtmCurrentContext(utmSourceCurrent) {
      return state({ utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent });
    },
    getUtmCurrentContext() {
      return state.getState();
    }
  };
});
const result = size.fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;
