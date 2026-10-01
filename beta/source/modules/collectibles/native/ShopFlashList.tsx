// Module ID: 15457
// Function ID: 15458
// Name: ShopFlashList
// Dependencies: [19, 21, 4836, 576, 15428, 8179, 1177, 7678, 1115, 2]
// Exports: default

// Module 15457 (ShopFlashList)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import NoResults from "NoResults" /* 7678 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 8179 */;
import react2 from "react" /* 15428 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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
  let renderItem;
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  ({ data, renderItem, getItemType } = initialScrollIndex);
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
  return jsx(defaultMVCPConfig.FlashList, { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent: ShopEmptyState, initialScrollIndex, getItemType, contentContainerStyle: tmp2.contentContainer });
};
