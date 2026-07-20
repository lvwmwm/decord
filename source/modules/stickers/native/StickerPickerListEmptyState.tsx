// Module ID: 9620
// Function ID: 74941
// Dependencies: []

// Module 9620
const importAllResult = importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
const EXPRESSION_FOOTER_HEIGHT = arg1(dependencyMap[2]).EXPRESSION_FOOTER_HEIGHT;
const jsx = arg1(dependencyMap[3]).jsx;
let obj1 = arg1(dependencyMap[4]);
let obj = { emptyStateContainer: { MEMBERS_WITHOUT_ROLES: 131072.00314656927, KvStorage: 0.000000000000000000000000000000000000000000000000000000011294471302334573 } };
obj = { color: importDefault(dependencyMap[5]).colors.TEXT_SUBTLE };
obj.emptyStateBody = obj;
obj1 = { marginBottom: importDefault(dependencyMap[5]).space.PX_8, marginTop: 0 };
obj.emptyStateImage = obj1;
let closure_7 = obj1.createStyles(obj);
const memoResult = importAllResult.memo(function StickerPickerListEmptyState(insetTop) {
  insetTop = insetTop.insetTop;
  const arg1 = insetTop;
  const insetBottom = insetTop.insetBottom;
  const importDefault = insetBottom;
  const items = [insetBottom, insetTop];
  const memo = importAllResult.useMemo(() => ({ marginBottom: insetBottom + closure_5, marginTop: insetTop, flex: 1 }), items);
  if (insetTop.inActionSheet) {
    let BottomSheetScrollView = arg1(dependencyMap[6]).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  let obj = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always" };
  obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.body = intl.string(arg1(dependencyMap[8]).t.jyiGfc);
  ({ emptyStateBody: obj2.bodyStyle, emptyStateContainer: obj2.containerStyle, emptyStateImage: obj2.imageStyle } = callback());
  obj.source = importDefault(dependencyMap[9]);
  obj.titleStyle = { marginBottom: 0 };
  obj.children = jsx(arg1(dependencyMap[7]).RefreshEmptyState, obj);
  return <BottomSheetScrollView {...obj} />;
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/stickers/native/StickerPickerListEmptyState.tsx");

export default memoResult;
