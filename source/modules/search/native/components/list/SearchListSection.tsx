// Module ID: 15248
// Function ID: 115090
// Dependencies: []

// Module 15248
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const obj = { "Null": null, "Null": 60, "Null": 0, "Null": 227, "Null": 300, 9223372036854775807: 300, 0: "BurstReaction_Fusion_v03", 9223372036854775807: 0, 9223372036854775807: 40.575, paddingTop: arg1(dependencyMap[2]).SEARCH_LIST_SECTION_TOP_PADDING };
let closure_5 = arg1(dependencyMap[4]).createStyles({ section: obj });
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((arg0) => {
  let title;
  let trailing;
  ({ title, trailing } = arg0);
  const obj = { style: callback3().section };
  const items = [callback(arg1(dependencyMap[5]).Text, { children: title }), trailing];
  obj.children = items;
  return callback2(View, obj);
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/search/native/components/list/SearchListSection.tsx");

export default memoResult;
