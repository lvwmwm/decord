// Module ID: 9585
// Function ID: 74668
// Name: GIFPickerItemView
// Dependencies: []
// Exports: default

// Module 9585 (GIFPickerItemView)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = arg1(dependencyMap[3]).createStyles((height) => {
  let obj = {};
  obj = { paddingBottom: arg1(dependencyMap[4]).GIF_PICKER_GUTTER_SPACING, paddingHorizontal: arg1(dependencyMap[4]).GIF_PICKER_GUTTER_SPACING / 2, borderRadius: importDefault(dependencyMap[5]).radii.xs, width: "100%", height, flex: 1 };
  obj.container = obj;
  obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[5]).radii.xs, flex: 1 };
  obj.gifImage = obj;
  obj.gifImageSelected = { borderWidth: 2, borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
  return obj;
});
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo((height) => {
  const tmp = callback(height.height);
  let obj = { style: tmp.container, children: <View {...obj} /> };
  obj = { style: tmp.gifImage };
  return <View {...obj} />;
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/gif_picker/native/GIFPickerItemView.tsx");

export default function GIFPickerItemView(onPressGIF) {
  onPressGIF = onPressGIF.onPressGIF;
  const arg1 = onPressGIF;
  const item = onPressGIF.item;
  const importDefault = item;
  const index = onPressGIF.index;
  const dependencyMap = index;
  const selected = onPressGIF.selected;
  const tmp = callback(onPressGIF.height);
  const items = [item, index, onPressGIF];
  const items1 = [item];
  const callback = importAllResult.useCallback(() => {
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
      first = intl.formatToPlainString(onPressGIF(index[10]).t.5iIGZI, obj);
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
  obj.children = jsx(importDefault(dependencyMap[12]), obj);
  return jsx(arg1(dependencyMap[11]).PressableOpacity, obj);
};
export const GIFPickerItemPlaceholder = memoResult;
