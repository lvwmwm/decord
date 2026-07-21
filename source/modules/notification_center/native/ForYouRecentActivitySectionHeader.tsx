// Module ID: 15037
// Function ID: 113225
// Name: ForYouRecentActivitySectionHeader
// Dependencies: []
// Exports: ForYouRecentActivitySectionHeader

// Module 15037 (ForYouRecentActivitySectionHeader)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[4]).space.PX_8, marginBottom: importDefault(dependencyMap[4]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_24 };
obj.container = obj;
obj.textHeader = { marginTop: importDefault(dependencyMap[4]).space.PX_8 };
let closure_4 = obj.createStyles(obj);
const obj1 = { marginTop: importDefault(dependencyMap[4]).space.PX_8 };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/notification_center/native/ForYouRecentActivitySectionHeader.tsx");

export const ForYouRecentActivitySectionHeader = function ForYouRecentActivitySectionHeader() {
  const tmp = callback();
  let obj = { style: tmp.container };
  obj = { paddingHorizontal: true, height: true, alignItems: true, justifyContent: true, style: tmp.textHeader };
  const intl = arg1(dependencyMap[6]).intl;
  obj.children = intl.string(arg1(dependencyMap[6]).t.yM9Krm);
  obj.children = jsx(arg1(dependencyMap[5]).Text, obj);
  return <View {...obj} />;
};
