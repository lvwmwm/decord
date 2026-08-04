// Module ID: 7102
// Function ID: 7103
// Name: keys
// Dependencies: [644, 2]

// Module 7102 (keys)
import keys from "keys";

const obj = keys.create((arg0) => {
  let closure_0 = arg0;
  return {
    utmSourceCurrent: "r",
    utmMediumCurrent: "disabled",
    utmCampaignCurrent: "runOnJS",
    utmContentCurrent: "isArray",
    setUtmCurrentContext(utmSourceCurrent) {
      return state({ utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent });
    },
    getUtmCurrentContext() {
      return state.getState();
    }
  };
});
const result = require("set").fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;
