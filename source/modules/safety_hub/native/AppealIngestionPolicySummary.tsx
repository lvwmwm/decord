// Module ID: 11034
// Function ID: 85915
// Name: AppealIngestionPolicySummary
// Dependencies: []
// Exports: default

// Module 11034 (AppealIngestionPolicySummary)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { sectionTitle: { marginBottom: 8 }, policy: { marginBottom: 16 } };
obj = { color: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.borderColor = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.userContainer = { borderRadius: importDefault(dependencyMap[4]).radii.sm };
let closure_5 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[4]).radii.sm };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/safety_hub/native/AppealIngestionPolicySummary.tsx");

export default function AppealIngestionPolicySummary(classification) {
  classification = classification.classification;
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  let description;
  if (null != classification) {
    description = classification.description;
  }
  let obj1 = arg1(dependencyMap[6]);
  obj = { style: tmp.policy };
  const capitalizeTextResult = obj.capitalizeText(description);
  obj = { style: tmp.sectionTitle, variant: "text-sm/bold" };
  const intl = arg1(dependencyMap[8]).intl;
  obj.children = intl.string(arg1(dependencyMap[8]).t.xsdcxh);
  const items = [callback(arg1(dependencyMap[7]).Text, obj), ];
  obj1 = { style: items1, children: callback(arg1(dependencyMap[7]).Text, { variant: "text-md/semibold", children: capitalizeTextResult }) };
  const items1 = [tmp.userContainer, { borderColor: obj1.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  items[1] = callback(View, obj1);
  obj.children = items;
  return callback2(View, obj);
};
