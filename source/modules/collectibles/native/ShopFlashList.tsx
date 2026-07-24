// Module ID: 14556
// Function ID: 111076
// Name: ShopEmptyState
// Dependencies: [31, 33, 4130, 689, 14529, 7527, 1273, 8547, 1212, 2]
// Exports: default

// Module 14556 (ShopEmptyState)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function ShopEmptyState() {
  const obj = { style: { marginTop: 42 }, Illustration: require(8547) /* getNoResultsSource */.NoResults };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.body = intl.string(require(1212) /* getSystemLocale */.t.eAn6z2);
  return jsx(require(1273) /* Button */.EmptyState, { style: { marginTop: 42 }, Illustration: require(8547) /* getNoResultsSource */.NoResults });
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.contentContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/collectibles/native/ShopFlashList.tsx");

export default function ShopFlashList(initialScrollIndex) {
  let data;
  let getItemType;
  let renderItem;
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  ({ data, renderItem, getItemType } = initialScrollIndex);
  const ref = React.useRef(null);
  let obj = require(14529) /* INITIAL_SCROLL_DELAY_MS */;
  obj = {};
  let tmp3 = null != initialScrollIndex;
  if (tmp3) {
    tmp3 = initialScrollIndex > 0;
  }
  obj.shouldScroll = tmp3;
  obj.initialScrollIndex = initialScrollIndex;
  obj.flashListRef = ref;
  obj.afterMs = require(14529) /* INITIAL_SCROLL_DELAY_MS */.INITIAL_SCROLL_DELAY_MS;
  const scrollToInitialIndexOnce = obj.useScrollToInitialIndexOnce(obj);
  obj = { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent: ShopEmptyState, initialScrollIndex, getItemType, contentContainerStyle: _createForOfIteratorHelperLoose().contentContainer };
  return jsx(require(7527) /* defaultMVCPConfig */.FlashList, { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent: ShopEmptyState, initialScrollIndex, getItemType, contentContainerStyle: _createForOfIteratorHelperLoose().contentContainer });
};
