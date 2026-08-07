// Module ID: 12956
// Function ID: 12957
// Name: splitAgeRestrictedActivities
// Dependencies: [12957, 10578, 2]
// Exports: default

// Module 12956 (splitAgeRestrictedActivities)
const result = require("set").fileFinishedImporting("modules/presence/splitAgeRestrictedActivities.tsx");

export default function splitAgeRestrictedActivities(arg0, arg1) {
  const ContentClassificationPresenceFilterExperiment = require(12957) /* apexExperiment */.ContentClassificationPresenceFilterExperiment;
  if (ContentClassificationPresenceFilterExperiment.getConfig({ location: "presence_filtering" }).enabled) {
    const items = [];
    const items1 = [];
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      let tmp6 = require;
      let tmp7 = dependencyMap;
      let obj2 = require(10578) /* isAgeRestrictedClassificationReference */;
      if (obj2.isAgeRestrictedClassificationReference(nextResult.content_classification)) {
        let tmp10 = nextResult;
        let arr = items1.push(tmp5);
      } else {
        let tmp8 = nextResult;
        arr = items.push(tmp5);
      }
      continue;
    }
    if (0 === items1.length) {
      let obj = { activities: null, hiddenActivities: null };
      obj[0] = arg0;
      obj[1] = arg1;
    } else {
      obj = { activities: null, hiddenActivities: null };
      obj[0] = items;
      const items2 = [];
      HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(arg1, 0));
      obj[1] = items2;
    }
    return obj;
  } else {
    obj = { activities: null, hiddenActivities: null };
    obj[0] = arg0;
    obj[1] = arg1;
    return obj;
  }
};
