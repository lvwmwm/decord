// Module ID: 9585
// Function ID: 74662
// Name: GIFPickerItemActionSheet
// Dependencies: []
// Exports: default

// Module 9585 (GIFPickerItemActionSheet)
let num = 0;
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
let obj3 = arg1(dependencyMap[5]);
if (obj3.isAndroid()) {
  num = importDefault(dependencyMap[4]).space.PX_16;
}
obj.paddingBottom = num;
obj.contentWrapper = obj;
const tmp2 = arg1(dependencyMap[2]);
obj.gifContainer = { marginTop: importDefault(dependencyMap[4]).space.PX_8 };
const obj1 = { marginTop: importDefault(dependencyMap[4]).space.PX_8 };
obj.gifImage = { borderRadius: importDefault(dependencyMap[4]).radii.xs, backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj3 = { marginTop: importDefault(dependencyMap[4]).space.PX_16 };
obj.favoriteButtonContainer = obj3;
let closure_7 = obj.createStyles(obj);
const obj2 = { borderRadius: importDefault(dependencyMap[4]).radii.xs, backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/gif_picker/native/GIFPickerItemActionSheet.tsx");

export default function GIFPickerItemActionSheet(item) {
  item = item.item;
  const arg1 = item;
  const tmp = callback2();
  let obj = arg1(dependencyMap[6]);
  let obj1 = arg1(dependencyMap[7]);
  const isFavoriteGIF = obj.useIsFavoriteGIF(obj1.gifUrlKey(item.url));
  const importDefault = isFavoriteGIF;
  const size = importDefault(dependencyMap[8])();
  const width = size.width;
  const dependencyMap = width;
  const height = size.height;
  const React = height;
  const items = [, , , ];
  ({ width: arr[0], height: arr[1] } = item);
  items[2] = width;
  items[3] = height;
  const memo = React.useMemo(() => {
    const bound = Math.min((width - 2 * isFavoriteGIF(width[4]).space.PX_16) / item.width, 0.5 * height / item.height);
    return { width: item.width * bound, height: item.height * bound };
  }, items);
  const callback = React.useCallback(() => {
    isFavoriteGIF(width[9]).hideActionSheet();
  }, []);
  const View = callback;
  const items1 = [callback, isFavoriteGIF, item];
  const callback1 = React.useCallback(() => {
    callback();
    let obj = item(width[7]);
    if (isFavoriteGIF) {
      obj.removeFavoriteGIF(item.url);
      obj = { key: "REMOVED_FROM_FAVORITES" };
      const intl2 = tmp2(tmp3[11]).intl;
      obj.content = intl2.string(tmp2(tmp3[11]).t.in1rga);
      obj.IconComponent = tmp2(tmp3[12]).GifIcon;
      isFavoriteGIF(tmp3[10]).open(obj);
      const obj4 = isFavoriteGIF(tmp3[10]);
    } else {
      obj.addFavoriteGIF(item);
      obj = { key: "ADDED_TO_FAVORITES" };
      const intl = tmp2(tmp3[11]).intl;
      obj.content = intl.string(tmp2(tmp3[11]).t.okQonm);
      obj.IconComponent = tmp2(tmp3[12]).GifIcon;
      isFavoriteGIF(tmp3[10]).open(obj);
      const obj2 = isFavoriteGIF(tmp3[10]);
    }
  }, items1);
  const items2 = [callback1, isFavoriteGIF];
  const callback2 = React.useCallback(() => {
    const obj = {};
    let str = "primary";
    if (isFavoriteGIF) {
      str = "destructive";
    }
    obj.variant = str;
    obj.onPress = callback1;
    const intl = item(width[11]).intl;
    const string = intl.string;
    const t = item(width[11]).t;
    if (isFavoriteGIF) {
      let stringResult = string(t.5/NS74);
    } else {
      stringResult = string(t.nIH0v8);
    }
    obj.text = stringResult;
    obj.grow = true;
    return callback1(item(width[13]).Button, obj);
  }, items2);
  obj = { startExpanded: true };
  obj = { style: tmp.contentWrapper };
  obj1 = { style: tmp.gifContainer };
  const items3 = [tmp.gifImage, memo];
  const items4 = [callback1(importDefault(dependencyMap[15]), { style: items3, source: { uri: item.src } }), callback1(View, { style: tmp.favoriteButtonContainer, children: callback2() })];
  obj1.children = items4;
  obj.children = callback(View, obj1);
  obj.children = callback1(View, obj);
  return callback1(arg1(dependencyMap[14]).BottomSheet, obj);
};
