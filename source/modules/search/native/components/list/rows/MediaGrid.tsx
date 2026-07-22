// Module ID: 15246
// Function ID: 115098
// Name: MediaGrid
// Dependencies: []
// Exports: default

// Module 15246 (MediaGrid)
let SEARCH_LIST_HORIZONTAL_PADDING;
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ SEARCH_LIST_HORIZONTAL_PADDING, MEDIA_NUM_COLUMNS: closure_5, MEDIA_ITEM_GAP_WIDTH: closure_6 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = { paddingLeft: SEARCH_LIST_HORIZONTAL_PADDING - 2, paddingRight: SEARCH_LIST_HORIZONTAL_PADDING + 4 };
let closure_8 = obj.createStyles({ container: obj });
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/search/native/components/list/rows/MediaGrid.tsx");

export default function MediaGrid(media) {
  media = media.media;
  const arg1 = media;
  const mediaSize = media.mediaSize;
  const importDefault = mediaSize;
  const onPress = media.onPress;
  const dependencyMap = onPress;
  const animate = media.animate;
  const React = animate;
  const items = [media.length, mediaSize, onPress, animate];
  let obj = { style: callback().container };
  const callback = React.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let obj = { animate, size: mediaSize, media: item, onPress };
    const tmp = mediaSize(onPress[5]);
    obj = { itemIndex: index, numItems: media.length, numColumns: closure_5, spacing: closure_6 };
    obj.containerStyle = media(onPress[6]).getMediaGridItemStyles(obj);
    return callback(tmp, obj);
  }, items);
  obj = { numColumns: closure_5, data: media, renderItem: callback, ItemSeparatorComponent: arg1(dependencyMap[8]).MediaVerticalSeparator, scrollEnabled: false };
  obj.children = jsx(arg1(dependencyMap[7]).FlashList, obj);
  return <View {...obj} />;
};
