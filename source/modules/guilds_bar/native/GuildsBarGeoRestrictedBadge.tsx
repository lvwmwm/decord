// Module ID: 14749
// Function ID: 111197
// Dependencies: []

// Module 14749
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj1 = arg1(dependencyMap[3]);
let obj = {};
obj = { -589050980: true, 595119776: false, -1162338825: false, 1380409839: false, 691479110: false, -934149535: false, 1643587027: false, -1596172911: false, -1667467058: false, -1934626084: false, 1522974306: false, 2146887578: false, borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, backgroundColor: importDefault(dependencyMap[4]).colors.STATUS_WARNING_BACKGROUND };
obj.badgeImageContainer = obj;
obj1 = { opacity: arg1(dependencyMap[5]).DARK_1_LIGHT_08, tintColor: importDefault(dependencyMap[4]).colors.BLACK };
obj.badgeImage = obj1;
let closure_4 = obj1.createStyles(obj);
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function GuildsBarGeoRestrictedBadge(style) {
  const tmp = callback();
  let obj = { style: items, pointerEvents: "none" };
  const items = [tmp.badgeImageContainer, style.style];
  obj = { source: importDefault(dependencyMap[7]), style: tmp.badgeImage };
  obj.children = jsx(importDefault(dependencyMap[6]), obj);
  return <View {...obj} />;
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedBadge.tsx");

export default memoResult;
