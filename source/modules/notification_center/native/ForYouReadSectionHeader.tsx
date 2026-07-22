// Module ID: 15047
// Function ID: 113300
// Name: ForYouReadSectionHeader
// Dependencies: []
// Exports: ForYouReadSectionHeader

// Module 15047 (ForYouReadSectionHeader)
importAll(dependencyMap[0]);
const tmp3 = arg1(dependencyMap[1]);
const View = tmp3.View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderTopWidth: tmp3.StyleSheet.hairlineWidth, borderTopColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE, marginVertical: 8, paddingHorizontal: 24 };
obj.container = obj;
obj.textHeader = { color: importDefault(dependencyMap[4]).colors.TEXT_SUBTLE, marginTop: 20 };
let closure_4 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[4]).colors.TEXT_SUBTLE, marginTop: 20 };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/notification_center/native/ForYouReadSectionHeader.tsx");

export const ForYouReadSectionHeader = function ForYouReadSectionHeader() {
  const tmp = callback();
  let obj = { style: tmp.container };
  obj = { style: tmp.textHeader, variant: "text-sm/semibold" };
  const intl = arg1(dependencyMap[6]).intl;
  obj.children = intl.string(arg1(dependencyMap[6]).t.hftC1K);
  obj.children = jsx(arg1(dependencyMap[5]).Text, obj);
  return <View {...obj} />;
};
