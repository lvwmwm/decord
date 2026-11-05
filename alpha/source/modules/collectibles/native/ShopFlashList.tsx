// Module ID: 18158
// Function ID: 18159
// Name: ShopFlashList
// Dependencies: [19, 21, 5143, 575, 18121, 7433, 1187, 8951, 1113, 2]
// Exports: default

// Module 18158 (ShopFlashList)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 7433 */;
import NoResults from "NoResults" /* 8951 */;
import react2 from "react" /* 18121 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let obj2;
function ShopEmptyState() {
  const EmptyState = native.EmptyState;
  const intl = intl2.intl;
  return <EmptyState style={{ marginTop: 42 }} Illustration={NoResults.NoResults} body={intl.string(intl2.t.eAn6z2)} />;
}
const jsx = Fragment.jsx;
let obj = { contentContainer: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopFlashList.tsx");

export default function ShopFlashList(initialScrollIndex) {
  let data;
  let getItemType;
  let keyExtractor;
  let onViewableItemsChanged;
  let renderItem;
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  ({ data, renderItem, getItemType, keyExtractor, onViewableItemsChanged } = initialScrollIndex);
  const ref = react.useRef(null);
  let tmp6 = null != initialScrollIndex;
  const tmp2 = closure_4();
  const useScrollToInitialIndexOnce = react2.useScrollToInitialIndexOnce;
  react2;
  if (tmp6) {
    tmp6 = initialScrollIndex > 0;
  }
  const obj = { shouldScroll: tmp6, initialScrollIndex, flashListRef: ref, afterMs: react2.INITIAL_SCROLL_DELAY_MS };
  const scrollToInitialIndexOnce = useScrollToInitialIndexOnce(obj);
  return jsx(defaultMVCPConfig.FlashList, { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent: ShopEmptyState, initialScrollIndex, getItemType, keyExtractor, onViewableItemsChanged, maintainVisibleContentPosition: { disabled: true }, contentContainerStyle: tmp2.contentContainer });
};
