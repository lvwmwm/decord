// Module ID: 6959
// Function ID: 55618
// Dependencies: []

// Module 6959
const _module = require(dependencyMap[0]);
const obj = _module.create((arg0) => {
  let obj = arg0;
  obj = {
    utmSourceCurrent: undefined,
    utmMediumCurrent: undefined,
    utmCampaignCurrent: undefined,
    utmContentCurrent: undefined,
    setUtmCurrentContext(utmSourceCurrent) {
      return utmSourceCurrent({ utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent });
    },
    getUtmCurrentContext() {
      return arg0.getState();
    }
  };
  return obj;
});
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;
