// Module ID: 7604
// Function ID: 60980
// Name: Arrow
// Dependencies: []
// Exports: default

// Module 7604 (Arrow)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { tintColor: importDefault(dependencyMap[3]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.tintColor = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/in_app_reports/native/components/Arrow.tsx");

export default function Arrow() {
  const obj = { source: importDefault(dependencyMap[5]), size: arg1(dependencyMap[4]).Icon.Sizes.MEDIUM, style: callback().tintColor };
  return jsx(arg1(dependencyMap[4]).Icon, obj);
};
