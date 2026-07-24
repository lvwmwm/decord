// Module ID: 9628
// Function ID: 74920
// Name: GIFPickerItemView
// Dependencies: [31, 27, 33, 4130, 9618, 689, 1820, 4098, 9629, 1934, 1212, 4660, 5085, 2]
// Exports: default

// Module 9628 (GIFPickerItemView)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles((height) => {
  let obj = {};
  obj = { paddingBottom: require(9618) /* transformFavoriteGifUrl */.GIF_PICKER_GUTTER_SPACING, paddingHorizontal: require(9618) /* transformFavoriteGifUrl */.GIF_PICKER_GUTTER_SPACING / 2, borderRadius: importDefault(689).radii.xs, width: "100%", height, flex: 1 };
  obj.container = obj;
  obj = { backgroundColor: importDefault(689).colors.BORDER_SUBTLE, borderRadius: importDefault(689).radii.xs, flex: 1 };
  obj.gifImage = obj;
  obj.gifImageSelected = { borderWidth: 2, borderColor: importDefault(689).colors.BACKGROUND_BRAND };
  return obj;
});
const memoResult = importAllResult.memo((height) => {
  const tmp = callback(height.height);
  obj = { style: tmp.container, children: <View {...obj} /> };
  obj = { style: tmp.gifImage };
  return <View style={tmp.gifImage} />;
});
let result = require("jsxProd").fileFinishedImporting("modules/gif_picker/native/GIFPickerItemView.tsx");

export default function GIFPickerItemView(onPressGIF) {
  onPressGIF = onPressGIF.onPressGIF;
  const item = onPressGIF.item;
  const index = onPressGIF.index;
  const selected = onPressGIF.selected;
  const tmp = callback(onPressGIF.height);
  const items = [item, index, onPressGIF];
  const items1 = [item];
  callback = importAllResult.useCallback(() => {
    onPressGIF(item, index);
    const result = onPressGIF(index[6]).dismissGlobalKeyboard();
  }, items);
  const items2 = [index, item.src];
  const callback1 = importAllResult.useCallback(() => {
    let obj = item(index[7]);
    obj = { item };
    obj.openLazy(onPressGIF(index[9])(index[8], index.paths), "GIFPickerItemActionSheet", obj, "stack");
    const result = onPressGIF(index[6]).dismissGlobalKeyboard();
  }, items1);
  const memo = importAllResult.useMemo(() => {
    const parts = item.src.split("/");
    const str2 = parts.pop();
    let first;
    if (null != str2) {
      first = str2.split(".")[0];
    }
    if (null == first) {
      const intl = onPressGIF(index[10]).intl;
      const obj = { index: index + 1 };
      first = intl.formatToPlainString(onPressGIF(index[10]).t["5iIGZI"], obj);
    }
    return first;
  }, items2);
  let obj = { style: tmp.container, accessibilityRole: "button", accessibilityLabel: memo };
  let tmp6;
  if (null != selected) {
    obj = { selected };
    tmp6 = obj;
  }
  obj.accessibilityState = tmp6;
  obj.onPress = callback;
  obj.onLongPress = callback1;
  obj = {};
  if (true === selected) {
    const items3 = [, ];
    ({ gifImage: arr4[0], gifImageSelected: arr4[1] } = tmp);
    let gifImage = items3;
  } else {
    gifImage = tmp.gifImage;
  }
  obj.style = gifImage;
  obj.source = { uri: item.src };
  obj.children = jsx(item(index[12]), {});
  return jsx(onPressGIF(index[11]).PressableOpacity, {});
};
export const GIFPickerItemPlaceholder = memoResult;
