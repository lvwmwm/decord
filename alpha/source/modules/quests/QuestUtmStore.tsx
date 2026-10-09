// Module ID: 7405
// Function ID: 7406
// Name: QuestUtmStore
// Dependencies: [570, 2]

// Module 7405 (QuestUtmStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

let obj = module_570.create((arg0) => {
  const state = arg0;
  obj = {
    utmSourceCurrent: "r",
    utmMediumCurrent: "k",
    utmCampaignCurrent: "application",
    utmContentCurrent: "it",
    setUtmCurrentContext(utmSourceCurrent) {
      obj = { utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent };
      return state(obj);
    },
    getUtmCurrentContext() {
      return state.getState();
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;
