// Module ID: 10239
// Function ID: 10240
// Name: GIFPickerItemActionSheet
// Dependencies: [19, 17, 21, 5009, 575, 10228, 10224, 1492, 5253, 5707, 1114, 10240, 7352, 5706, 5629, 5267, 5712, 6761, 2]
// Exports: default

// Module 10239 (GIFPickerItemActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import GIFPickerActionCreators from "GIFPickerActionCreators" /* 10224 */;
import GifIcon from "GifIcon" /* 10240 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentWrapper: obj2, gifContainer: { flexDirection: "column", alignItems: "center" }, gifImage: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerItemActionSheet.tsx");

export default function GIFPickerItemActionSheet(item) {
  let intl;
  let items4;
  let items5;
  let items6;
  let obj3;
  let obj4;
  item = item.item;
  let width;
  let tmp = closure_7();
  const tmp2 = item(width[5]);
  const useIsFavoriteGIF = tmp2.useIsFavoriteGIF;
  let obj = item(width[6]);
  const isFavoriteGIF = useIsFavoriteGIF(obj.gifUrlKey(item.url));
  size = isFavoriteGIF(width[7])();
  width = size.width;
  const height = size.height;
  const items = [, , , ];
  ({ width: arr[0], height: arr[1] } = item);
  items[2] = width;
  items[3] = height;
  const memo = height.useMemo(() => {
    const bound = Math.min((width - 2 * nativeDefault.space.PX_16) / item.width, 0.5 * height / item.height);
    size = { width: item.width * bound, height: item.height * bound };
    return size;
  }, items);
  const callback = height.useCallback(() => {
    const obj = isFavoriteGIF(width[8]);
    obj.hideActionSheet();
  }, []);
  const items1 = [callback, isFavoriteGIF, item];
  const callback1 = height.useCallback(() => {
    let intl;
    let intl2;
    callback();
    const obj = GIFPickerActionCreators;
    if (isFavoriteGIF) {
      obj.removeFavoriteGIF(item.url);
      const obj2 = { text: intl2.string(intl3.t.in1rga), icon: GifIcon.GifIcon };
      const open2 = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl2 = intl3.intl;
      open2("REMOVED_FROM_FAVORITES", obj2);
    } else {
      obj.addFavoriteGIF(item);
      const obj3 = { text: intl.string(intl3.t.okQonm), icon: GifIcon.GifIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl3.intl;
      open("ADDED_TO_FAVORITES", obj3);
    }
  }, items1);
  const items2 = [callback, item.url];
  const items3 = [callback1, isFavoriteGIF];
  const callback2 = height.useCallback(() => {
    callback();
    const obj = ClipboardUtils;
    obj.copy(item.url, ToastUtils.presentLinkCopied);
  }, items2);
  const callback3 = height.useCallback(() => {
    let stringResult;
    let str = "primary";
    const Button = components_Button_Button.Button;
    const tmp = hasOwnProperty;
    if (isFavoriteGIF) {
      str = "destructive";
    }
    const obj = { variant: str, onPress: callback1, text: stringResult, grow: true };
    const intl = tmp2(1114).intl;
    const string = intl.string;
    const t = tmp2(1114).t;
    if (isFavoriteGIF) {
      stringResult = string(t["5/NS74"]);
    } else {
      stringResult = string(t.nIH0v8);
    }
    return tmp(Button, obj);
  }, items3);
  let obj2 = { startExpanded: true, children: callback1(callback, obj3) };
  obj3 = { style: tmp.contentWrapper, children: closure_6(callback, obj4) };
  obj4 = { style: tmp.gifContainer, children: items5 };
  BottomSheet = item(width[15]).BottomSheet;
  const obj5 = { style: items4, source: { uri: item.src } };
  items4 = [tmp.gifImage, memo];
  items5 = [callback1(isFavoriteGIF(width[16]), obj5), ];
  const obj6 = { children: items6 };
  const ButtonGroup = item(width[17]).ButtonGroup;
  items6 = [callback3(), ];
  const obj7 = { variant: "secondary", onPress: callback2, text: intl.string(item(width[10]).t.WqhZss), grow: true };
  let Button = item(width[14]).Button;
  intl = item(width[10]).intl;
  items6[1] = callback1(Button, obj7);
  items5[1] = closure_6(ButtonGroup, obj6);
  return callback1(BottomSheet, obj2);
};
