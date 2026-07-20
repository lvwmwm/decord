// Module ID: 15208
// Function ID: 114862
// Dependencies: []

// Module 15208
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[4]).radii.xs, backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.imageContainer = obj;
let closure_2 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo((arg0) => {
  let height;
  let style;
  let width;
  ({ width, height, style } = arg0);
  const obj = {};
  const items = [{ width, height }, callback().imageContainer, style];
  obj.style = items;
  return <View {...obj} />;
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/GridItemPlaceholder.tsx");

export default memoResult;
