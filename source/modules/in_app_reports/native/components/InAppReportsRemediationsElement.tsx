// Module ID: 12214
// Function ID: 93779
// Name: RemediationsElement
// Dependencies: []
// Exports: default

// Module 12214 (RemediationsElement)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, marginBottom: importDefault(dependencyMap[4]).space.PX_32 };
obj.container = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsRemediationsElement.tsx");

export default function RemediationsElement(children) {
  let obj = { style: callback().container };
  obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.title = intl.string(arg1(dependencyMap[6]).t.k+QA9N);
  obj.hasIcons = true;
  obj.children = children.children;
  obj.children = jsx(arg1(dependencyMap[5]).TableRowGroup, obj);
  return <View {...obj} />;
};
