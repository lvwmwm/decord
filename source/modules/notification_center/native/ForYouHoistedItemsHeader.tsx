// Module ID: 15038
// Function ID: 113227
// Name: ForYouHoistedItemsHeader
// Dependencies: []
// Exports: ForYouHoistedItemsHeader

// Module 15038 (ForYouHoistedItemsHeader)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[4]).space.PX_16 };
obj.container = obj;
let closure_2 = obj.createStyles(obj);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/notification_center/native/ForYouHoistedItemsHeader.tsx");

export const ForYouHoistedItemsHeader = function ForYouHoistedItemsHeader() {
  return <View style={callback().container} />;
};
