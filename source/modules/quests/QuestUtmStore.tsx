// Module ID: 7513
// Function ID: 7514
// Name: keys
// Dependencies: [644, 2]

// Module 7513 (keys)
import set from "set" /* 2 */;
import keys from "keys" /* 644 */;

let obj = keys.create((arg0) => {
  closure_0 = arg0;
  obj = { utmSourceCurrent: "r", utmMediumCurrent: "x", utmCampaignCurrent: "ddd", utmContentCurrent: "now", setUtmCurrentContext: 1996232851, getUtmCurrentContext: -1002372288 };
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
