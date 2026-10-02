// Module ID: 7140
// Function ID: 7141
// Name: QuestUtmStore
// Dependencies: [570, 2]

// Module 7140 (QuestUtmStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

let obj = module_570.create((arg0) => {
  const state = arg0;
  obj = {
    utmSourceCurrent: "r",
    utmMediumCurrent: "__initData",
    utmCampaignCurrent: "ty",
    utmContentCurrent: "theme",
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
