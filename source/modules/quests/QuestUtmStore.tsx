// Module ID: 6005
// Function ID: 6006
// Name: keys
// Dependencies: [644, 2]

// Module 6005 (keys)
import keys from "keys";

let obj = keys.create((arg0) => {
  let closure_0 = arg0;
  const obj = {
    utmSourceCurrent: "r",
    utmMediumCurrent: "disabled",
    utmCampaignCurrent: "np",
    utmContentCurrent: "isArray",
    setUtmCurrentContext(utmSourceCurrent) {
      return state({ utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent });
    },
    getUtmCurrentContext: "\u{1F9D1}\u{1F3FC}"
  };
  obj[5] = function getUtmCurrentContext() {
    return state.getState();
  };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;
