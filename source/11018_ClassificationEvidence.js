// Module ID: 11018
// Function ID: 85797
// Name: ClassificationEvidence
// Dependencies: []
// Exports: default

// Module 11018 (ClassificationEvidence)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
const tmp3 = arg1(dependencyMap[2]);
obj.cardShadow = arg1(dependencyMap[4]).generateBoxShadowStyle(arg1(dependencyMap[4]).FOUR_DP_ELEVATION_SHADOW_PARAMS);
obj = { borderWidth: 1, borderRadius: importDefault(dependencyMap[5]).radii.sm, borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST, backgroundColor: importDefault(dependencyMap[5]).colors.CHANNELTEXTAREA_BACKGROUND, padding: 20 };
obj.flaggedContent = obj;
const obj3 = arg1(dependencyMap[4]);
obj.sectionContainer = { display: "flex", gap: importDefault(dependencyMap[5]).space.PX_8 };
let closure_6 = obj.createStyles(obj);
const obj1 = { display: "flex", gap: importDefault(dependencyMap[5]).space.PX_8 };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/safety_hub/native/ClassificationEvidence.tsx");

export default function ClassificationEvidence(flaggedContent) {
  flaggedContent = flaggedContent.flaggedContent;
  const tmp = callback3();
  let tmp2 = null;
  if (0 !== flaggedContent.length) {
    let obj = { style: tmp.sectionContainer };
    obj = { INTEGRATION_CREATE: "/assets/images/native/premium/illustrations", ConstraintReasonCode: 51 };
    const intl = arg1(dependencyMap[7]).intl;
    obj.children = intl.string(arg1(dependencyMap[7]).t.s64CMg);
    const items = [callback(arg1(dependencyMap[6]).Text, obj), ];
    obj = {};
    const items1 = [, ];
    ({ flaggedContent: arr3[0], cardShadow: arr3[1] } = tmp);
    obj.style = items1;
    const obj1 = { flaggedContent };
    obj.children = callback(importDefault(dependencyMap[8]), obj1);
    items[1] = callback(View, obj);
    obj.children = items;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
};
