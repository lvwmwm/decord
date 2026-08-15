// Module ID: 7475
// Function ID: 7476
// Name: keys
// Dependencies: [644, 2]

// Module 7475 (keys)
import keys from "keys";

let obj = keys.create((arg0) => {
  let closure_0 = arg0;
  const obj = { utmSourceCurrent: "r", utmMediumCurrent: "View", utmCampaignCurrent: "toCharArray$esjava$1", utmContentCurrent: "Path", setUtmCurrentContext: -36144369334270020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, getUtmCurrentContext: "<string:822214657>" };
  obj[4] = function setUtmCurrentContext(utmSourceCurrent) {
    return state({ utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent });
  };
  obj[5] = function getUtmCurrentContext() {
    return state.getState();
  };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;
