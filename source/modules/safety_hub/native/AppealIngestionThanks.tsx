// Module ID: 11042
// Function ID: 85949
// Name: AppealIngestionThanks
// Dependencies: []
// Exports: default

// Module 11042 (AppealIngestionThanks)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = arg1(dependencyMap[3]).createStyles({ container: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/safety_hub/native/AppealIngestionThanks.tsx");

export default function AppealIngestionThanks() {
  const tmp = callback();
  let obj = {};
  obj = { style: tmp.container };
  obj = { bottom: true, style: tmp.container, children: jsx(arg1(dependencyMap[6]).LegacyText, { children: "TODO - Thanks" }) };
  obj.children = jsx(arg1(dependencyMap[5]).SafeAreaPaddingView, obj);
  obj.children = <View {...obj} />;
  return jsx(arg1(dependencyMap[4]).AppealIngestionModalScreen, obj);
};
