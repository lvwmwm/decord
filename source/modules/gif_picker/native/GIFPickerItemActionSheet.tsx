// Module ID: 9629
// Function ID: 74927
// Name: GIFPickerItemActionSheet
// Dependencies: [31, 27, 33, 4130, 689, 477, 9619, 9612, 1450, 4098, 3831, 1212, 9630, 4543, 5187, 5085, 2]
// Exports: default

// Module 9629 (GIFPickerItemActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "jsxProd";

let closure_5;
let closure_6;
const require = arg1;
let num = 0;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
if (set.isAndroid()) {
  num = require("_createForOfIteratorHelperLoose").space.PX_16;
}
_createForOfIteratorHelperLoose.paddingBottom = num;
_createForOfIteratorHelperLoose.contentWrapper = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "column", alignItems: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.gifContainer = obj1;
_createForOfIteratorHelperLoose.gifImage = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
set = { flex: 1, flexDirection: "row", alignItems: "stretch", width: "100%", marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.favoriteButtonContainer = set;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("modules/gif_picker/native/GIFPickerItemActionSheet.tsx");

export default function GIFPickerItemActionSheet(item) {
  item = item.item;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = item(width[6]);
  let obj1 = item(width[7]);
  const isFavoriteGIF = obj.useIsFavoriteGIF(obj1.gifUrlKey(item.url));
  const size = isFavoriteGIF(width[8])();
  width = size.width;
  const height = size.height;
  const items = [, , , ];
  ({ width: arr[0], height: arr[1] } = item);
  items[2] = width;
  items[3] = height;
  const memo = height.useMemo(() => {
    const bound = Math.min((width - 2 * isFavoriteGIF(width[4]).space.PX_16) / item.width, 0.5 * height / item.height);
    return { width: item.width * bound, height: item.height * bound };
  }, items);
  const callback = height.useCallback(() => {
    isFavoriteGIF(width[9]).hideActionSheet();
  }, []);
  const items1 = [callback, isFavoriteGIF, item];
  const callback1 = height.useCallback(() => {
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
  const callback2 = height.useCallback(() => {
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
      let stringResult = string(t["5/NS74"]);
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
  const items4 = [callback1(isFavoriteGIF(width[15]), { style: items3, source: { uri: item.src } }), callback1(callback, { style: tmp.favoriteButtonContainer, children: callback2() })];
  obj1.children = items4;
  obj.children = callback(callback, obj1);
  obj.children = callback1(callback, obj);
  return callback1(item(width[14]).BottomSheet, obj);
};
