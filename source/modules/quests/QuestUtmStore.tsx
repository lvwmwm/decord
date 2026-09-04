// Module ID: 7656
// Function ID: 7657
// Name: keys
// Dependencies: [641, 2]

// Module 7656 (keys)
import set from "set" /* 2 */;
import keys from "keys" /* 641 */;

let obj = keys.create((arg0) => {
  closure_0 = arg0;
  obj = { utmSourceCurrent: "r", utmMediumCurrent: "ip", utmCampaignCurrent: "toLowerCase", utmContentCurrent: "", setUtmCurrentContext: -220638975, getUtmCurrentContext: 1650 };
  obj[4] = function setUtmCurrentContext(utmSourceCurrent) {
    return state({ utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent });
  };
  obj[5] = function getUtmCurrentContext() {
    return state.getState();
  };
  return obj;
});
const result = set.fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;
