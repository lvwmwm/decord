// Module ID: 8764
// Function ID: 8765
// Name: QuestUtmStore
// Dependencies: [560, 2]

// Module 8764 (QuestUtmStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let obj = module_560.create((arg0) => {
  const state = arg0;
  obj = {
    utmSourceCurrent: "r",
    utmMediumCurrent: "WireType",
    utmCampaignCurrent: "now",
    utmContentCurrent: "jsx",
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
