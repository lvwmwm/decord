// Module ID: 9363
// Function ID: 73064
// Dependencies: []

// Module 9363
const importAllResult = importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
const jsx = arg1(dependencyMap[2]).jsx;
let obj1 = arg1(dependencyMap[3]);
let obj = { emptyStateContainer: {} };
obj = { color: importDefault(dependencyMap[4]).colors.TEXT_SUBTLE };
obj.emptyStateBody = obj;
obj1 = { marginBottom: importDefault(dependencyMap[4]).space.PX_8, marginTop: 0 };
obj.emptyStateImage = obj1;
let closure_5 = obj1.createStyles(obj);
const memoResult = importAllResult.memo(function EmojiPickerListComponentEmpty(insetTop) {
  insetTop = insetTop.insetTop;
  const arg1 = insetTop;
  const insetBottom = insetTop.insetBottom;
  const dependencyMap = insetBottom;
  const items = [insetBottom, insetTop];
  const memo = importAllResult.useMemo(() => ({ marginBottom: insetBottom, marginTop: insetTop, flex: 1 }), items);
  let obj = arg1(dependencyMap[5]);
  const searchEmptySource = obj.useSearchEmptySource();
  if (insetTop.inActionSheet) {
    let BottomSheetScrollView = arg1(dependencyMap[6]).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  obj = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always" };
  obj = { source: searchEmptySource };
  const intl = arg1(dependencyMap[8]).intl;
  obj.body = intl.string(arg1(dependencyMap[8]).t.IxxiKF);
  ({ emptyStateBody: obj3.bodyStyle, emptyStateContainer: obj3.containerStyle, emptyStateImage: obj3.imageStyle } = callback());
  obj.children = jsx(arg1(dependencyMap[7]).RefreshEmptyState, obj);
  return <BottomSheetScrollView {...obj} />;
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponentEmpty.tsx");

export default memoResult;
