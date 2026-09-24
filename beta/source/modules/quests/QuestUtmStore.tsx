// Module ID: 7996
// Function ID: 7997
// Name: QuestUtmStore
// Dependencies: [562, 2]

// Module 7996 (QuestUtmStore)
import module_562 from "module_562" /* 562 */;
import size from "module_2" /* 2 */;

let obj = module_562.create((arg0) => {
  state = arg0;
  obj = {
    utmSourceCurrent: "r",
    utmMediumCurrent: "duration",
    utmCampaignCurrent: "",
    utmContentCurrent: "toCharArray$esjava$1",
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
