// Module ID: 15409
// Function ID: 117590
// Name: MediaGrid
// Dependencies: [31, 27, 9141, 33, 4130, 15405, 11426, 7527, 15390, 2]
// Exports: default

// Module 15409 (MediaGrid)
import result from "result";
import { View } from "get ActivityIndicator";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let SEARCH_LIST_HORIZONTAL_PADDING;
let closure_5;
let closure_6;
const require = arg1;
({ SEARCH_LIST_HORIZONTAL_PADDING, MEDIA_NUM_COLUMNS: closure_5, MEDIA_ITEM_GAP_WIDTH: closure_6 } = SearchAutocompleteSelectAnalyticsActions);
_createForOfIteratorHelperLoose = { paddingLeft: SEARCH_LIST_HORIZONTAL_PADDING - 2, paddingRight: SEARCH_LIST_HORIZONTAL_PADDING + 4 };
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: _createForOfIteratorHelperLoose });
const result = require("SearchAutocompleteSelectAnalyticsActions").fileFinishedImporting("modules/search/native/components/list/rows/MediaGrid.tsx");

export default function MediaGrid(media) {
  media = media.media;
  const mediaSize = media.mediaSize;
  const onPress = media.onPress;
  const animate = media.animate;
  const items = [media.length, mediaSize, onPress, animate];
  let obj = { style: callback().container };
  callback = animate.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let obj = { animate, size: mediaSize, media: item, onPress };
    const tmp = mediaSize(onPress[5]);
    obj = { itemIndex: index, numItems: media.length, numColumns: outer1_5, spacing: outer1_6 };
    obj.containerStyle = media(onPress[6]).getMediaGridItemStyles(obj);
    return outer1_7(tmp, obj);
  }, items);
  obj = { numColumns: closure_5, data: media, renderItem: callback, ItemSeparatorComponent: media(onPress[8]).MediaVerticalSeparator, scrollEnabled: false };
  obj.children = jsx(media(onPress[7]).FlashList, { numColumns: closure_5, data: media, renderItem: callback, ItemSeparatorComponent: media(onPress[8]).MediaVerticalSeparator, scrollEnabled: false });
  return <View numColumns={closure_5} data={media} renderItem={callback} ItemSeparatorComponent={media(onPress[8]).MediaVerticalSeparator} scrollEnabled={false} />;
};
