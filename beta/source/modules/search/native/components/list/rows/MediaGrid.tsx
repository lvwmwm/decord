// Module ID: 16489
// Function ID: 16490
// Name: MediaGrid
// Dependencies: [19, 17, 7303, 21, 4836, 16485, 11821, 8179, 16465, 2]
// Exports: default

// Module 16489 (MediaGrid)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11821 */;
import MediaGridItemDefault from "MediaGridItem" /* 16485 */;
import react from "react" /* 19 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let SEARCH_LIST_HORIZONTAL_PADDING;
let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ SEARCH_LIST_HORIZONTAL_PADDING, MEDIA_NUM_COLUMNS: hasOwnProperty, MEDIA_ITEM_GAP_WIDTH: metroRequire } = SearchConstants);
const jsx = Fragment.jsx;
const obj = { container: obj2 };
obj2 = { paddingLeft: SEARCH_LIST_HORIZONTAL_PADDING - 2, paddingRight: SEARCH_LIST_HORIZONTAL_PADDING + 4 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/MediaGrid.tsx");

export default function MediaGrid(media) {
  media = media.media;
  const mediaSize = media.mediaSize;
  const onPress = media.onPress;
  const animate = media.animate;
  const items = [media.length, mediaSize, onPress, animate];
  const tmp = closure_8();
  const callback = animate.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    MediaGridItemDefault;
    const obj2 = SearchPlatformUtils;
    const obj3 = { itemIndex: index, numItems: media.length, numColumns: hasOwnProperty, spacing: metroRequire };
    return <tmp animate={animate} size={mediaSize} media={item} onPress={onPress} containerStyle={obj2.getMediaGridItemStyles(obj3)} />;
  }, items);
  let obj2 = { numColumns, data: media, renderItem: callback, ItemSeparatorComponent: media(onPress[8]).MediaVerticalSeparator, scrollEnabled: false };
  const FlashList = media(onPress[7]).FlashList;
  return <View style={tmp.container}>{null}</View>;
};
