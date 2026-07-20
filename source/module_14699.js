// Module ID: 14699
// Function ID: 110916
// Dependencies: []

// Module 14699
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj1 = arg1(dependencyMap[3]);
let obj = { pause: {} };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_STRONG, padding: arg1(dependencyMap[5]).BADGE_PADDING };
obj.pauseBackground = obj;
obj1 = { <string:1106039242>: true, Stage: null, <string:2334770770>: -1, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, bottom: -arg1(dependencyMap[5]).BADGE_PADDING, right: -arg1(dependencyMap[5]).BADGE_PADDING, padding: arg1(dependencyMap[5]).BADGE_PADDING, height: 22, width: 22, alignContent: "center", justifyContent: "center" };
obj.pauseRing = obj1;
let closure_5 = obj1.createStyles(obj);
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function InvitesDisabledBadge(style) {
  const tmp = callback();
  let obj = { style: items };
  const items = [tmp.pauseRing, style.style];
  obj = { style: tmp.pauseBackground };
  obj = { style: tmp.pause, themedColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_ACTIVE, source: importDefault(dependencyMap[6]) };
  obj.children = jsx(arg1(dependencyMap[5]).ThemedIcon, obj);
  obj.children = <View {...obj} />;
  return <View {...obj} />;
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild/native/InvitesDisabledBadge.tsx");

export default memoResult;
