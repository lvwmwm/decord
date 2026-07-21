// Module ID: 7873
// Function ID: 62686
// Name: defaultMVCPConfig
// Dependencies: []

// Module 7873 (defaultMVCPConfig)
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let tmp2;
if (obj2.isAndroid()) {
  const obj = { disabled: true };
  tmp2 = obj;
}
const obj2 = arg1(dependencyMap[2]);
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[3]).FlashList, { maintainVisibleContentPosition: tmp2, ref });
});
let closure_5 = importDefault(dependencyMap[4]).createAnimatedComponent(arg1(dependencyMap[3]).FlashList);
const importDefaultResult = importDefault(dependencyMap[4]);
const forwardRefResult1 = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_5 maintainVisibleContentPosition={tmp2} ref={arg1} />;
});
const forwardRefResult2 = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[3]).FlashList, { ref, maintainVisibleContentPosition: tmp2, masonry: true });
});
let closure_6 = importDefault(dependencyMap[4]).createAnimatedComponent(arg1(dependencyMap[3]).FlashList);
const importDefaultResult1 = importDefault(dependencyMap[4]);
const forwardRefResult3 = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(importDefault(dependencyMap[5]), { ref, maintainVisibleContentPosition: tmp2 });
});
const forwardRefResult4 = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return <closure_6 ref={arg1} maintainVisibleContentPosition={tmp2} masonry renderScrollComponent={arg1(dependencyMap[6]).BottomSheetScrollView} />;
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10067 in arg1(arg6[3])) {
  let tmp9 = key10067;
  arg5[key10067] = arg1(arg6[3])[key10067];
}

export const defaultMVCPConfig = tmp2;
export const FlashList = forwardRefResult;
export const AnimatedFlashList = forwardRefResult1;
export const MasonryFlashList = forwardRefResult2;
export const BottomSheetFlashList = forwardRefResult3;
export const BottomSheetMasonryFlashList = forwardRefResult4;
