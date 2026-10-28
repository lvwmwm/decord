// Module ID: 15333
// Function ID: 15334
// Name: splitAgeRestrictedActivities
// Dependencies: [5647, 2]
// Exports: default

// Module 15333 (splitAgeRestrictedActivities)
import ContentClassificationReference from "ContentClassificationReference" /* 5647 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/presence/splitAgeRestrictedActivities.tsx");

export default function splitAgeRestrictedActivities(activities, hiddenActivities) {
  let items2;
  let obj3;
  const items = [];
  const items1 = [];
  const iter = activities[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let obj = ContentClassificationReference;
    if (obj.isAgeRestrictedClassificationReference(nextResult.content_classification)) {
      let arr = items1.push(tmp3);
    } else {
      let arr2 = items.push(tmp3);
    }
    continue;
  }
  if (0 === items1.length) {
    obj3 = { activities, hiddenActivities };
    const obj2 = { activities, hiddenActivities };
  } else {
    obj3 = { activities: items, hiddenActivities: items2 };
    items2 = [];
    HermesBuiltin.arraySpread(items2, items1, HermesBuiltin.arraySpread(items2, hiddenActivities, 0));
  }
  return obj3;
};
