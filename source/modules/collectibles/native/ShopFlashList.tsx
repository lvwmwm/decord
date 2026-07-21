// Module ID: 14384
// Function ID: 108557
// Name: ShopEmptyState
// Dependencies: []
// Exports: default

// Module 14384 (ShopEmptyState)
function ShopEmptyState() {
  const obj = { style: { marginTop: 42 }, Illustration: arg1(dependencyMap[7]).NoResults };
  const intl = arg1(dependencyMap[8]).intl;
  obj.body = intl.string(arg1(dependencyMap[8]).t.eAn6z2);
  return jsx(arg1(dependencyMap[6]).EmptyState, obj);
}
let closure_2 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOWEST };
obj.contentContainer = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/native/ShopFlashList.tsx");

export default function ShopFlashList(initialScrollIndex) {
  let data;
  let getItemType;
  let renderItem;
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  ({ data, renderItem, getItemType } = initialScrollIndex);
  const ref = React.useRef(null);
  let obj = arg1(dependencyMap[4]);
  obj = {};
  let tmp3 = null != initialScrollIndex;
  if (tmp3) {
    tmp3 = initialScrollIndex > 0;
  }
  obj.shouldScroll = tmp3;
  obj.initialScrollIndex = initialScrollIndex;
  obj.flashListRef = ref;
  obj.afterMs = arg1(dependencyMap[4]).INITIAL_SCROLL_DELAY_MS;
  const scrollToInitialIndexOnce = obj.useScrollToInitialIndexOnce(obj);
  obj = { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent: ShopEmptyState, initialScrollIndex, getItemType, contentContainerStyle: callback().contentContainer };
  return jsx(arg1(dependencyMap[5]).FlashList, obj);
};
