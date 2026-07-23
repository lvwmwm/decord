// Module ID: 9614
// Function ID: 74887
// Name: STICKER_SIZE
// Dependencies: [57, 31, 27, 1849, 3806, 9568, 1314, 33, 4130, 477, 3803, 4099, 4100, 4466, 5732, 4799, 9615, 9618, 1184, 4660, 2]
// Exports: default

// Module 9614 (STICKER_SIZE)
import _slicedToArray from "_slicedToArray";
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { StickerAnimationSettings } from "STICKER_PICKER_TAB_PANEL_ID";
import PADDING_HORIZONTAL from "PADDING_HORIZONTAL";
import { PADDING_VERTICAL } from "ExpressionPickerViewType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const STICKER_SIZE = PADDING_HORIZONTAL.STICKER_SIZE;
_createForOfIteratorHelperLoose = { height: PADDING_HORIZONTAL.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "hidden" };
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ row: _createForOfIteratorHelperLoose, stickerImage: { height: STICKER_SIZE, width: STICKER_SIZE } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/stickers/native/StickerPickerListRow.tsx");

export default function StickerPickerListRow(stickers) {
  let View;
  let _slicedToArray;
  let _isNativeReflectConstruct;
  let dependencyMap;
  let importDefault;
  let nativeRow;
  let rowSize;
  stickers = stickers.stickers;
  ({ rowSize, onPressSticker: importDefault, onLongPressStickerDetail: dependencyMap, focusedSticker: _slicedToArray, setFocusedSticker: View, channel: _isNativeReflectConstruct, nativeRow } = stickers);
  if (nativeRow === undefined) {
    let obj = stickers(477);
    nativeRow = obj.isAndroid();
  }
  let c6;
  let closure_7;
  let items;
  let jsx;
  function handleOnPressSticker(found) {
    const result = stickers(outer1_2[11]).triggerHapticFeedback(outer1_1(outer1_2[12]).IMPACT_LIGHT);
    if (null != callback) {
      callback(found);
    }
  }
  function handleOnLongPressSticker(found) {
    if (null != callback2) {
      const result = stickers(outer1_2[11]).triggerHapticFeedback(outer1_1(outer1_2[12]).IMPACT_LIGHT);
      callback2(found);
    } else {
      const AnimateStickers = stickers(outer1_2[10]).AnimateStickers;
      if (AnimateStickers.getSetting() === _undefined.ANIMATE_ON_INTERACTION) {
        const result1 = stickers(outer1_2[11]).triggerHapticFeedback(outer1_1(outer1_2[12]).IMPACT_LIGHT);
        if (null != callback3) {
          callback3(found);
        }
        const obj = stickers(outer1_2[11]);
      }
    }
  }
  function rowTraits(id) {
    id = undefined;
    if (null != id) {
      id = id.id;
    }
    const items = [stickers(outer1_2[13]).shouldAnimateSticker(closure_7, id.id === id), , ];
    let isSendableStickerResult = null == _isNativeReflectConstruct;
    if (!isSendableStickerResult) {
      isSendableStickerResult = stickers(outer1_2[14]).isSendableSticker(id, outer1_5.getCurrentUser(), _isNativeReflectConstruct);
      const obj2 = stickers(outer1_2[14]);
    }
    items[1] = isSendableStickerResult;
    items[2] = null == closure_1;
    return items;
  }
  const tmp3 = handleOnPressSticker();
  c6 = tmp3;
  let AnimateStickers = stickers(3803).AnimateStickers;
  closure_7 = AnimateStickers.useSetting();
  items = [];
  if (nativeRow) {
    for (let num9 = 0; num9 < rowSize; num9 = num9 + 1) {
      let tmp8 = stickers[num9];
      if (undefined !== tmp8) {
        let tmp13 = callback;
        let tmp14 = callback(rowTraits(tmp8), 3);
        let first = tmp14[0];
        let tmp16 = items;
        obj = {};
        ({ id: obj4.stickerId, name: obj4.stickerName, format_type: obj4.stickerType } = tmp8);
        let tmp17 = stickers;
        let tmp18 = dependencyMap;
        let obj5 = stickers(9615);
        let tmp19 = closure_7;
        obj.stickerUrl = obj5.getStickerAssetUrl(tmp8, closure_7, first);
        obj.stickerAnimated = first;
        obj.stickerDisabled = tmp14[2];
        obj.stickerOpaque = tmp14[1];
        let arr = arr2.push(obj);
      } else {
        let tmp9 = items;
        obj = { stickerId: null, stickerName: "", stickerType: null, stickerUrl: "", stickerAnimated: false, stickerDisabled: true, stickerOpaque: false };
        let tmp10 = stickers;
        let tmp11 = dependencyMap;
        obj.stickerType = stickers(4799).StickerFormat.PNG;
        arr = arr2.push(obj);
      }
    }
    const obj1 = { style: tmp3.row };
    let obj2 = { rowContentWidth: stickers.containerWidth, rowContentPaddingVertical: items, itemSize: closure_7, items };
    obj1.rowData = obj2;
    obj1.onPressSticker = function onPressSticker(arg0) {
      const stickers = arg0;
      const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
      if (null != found) {
        handleOnPressSticker(found);
      }
    };
    obj1.onLongPressSticker = function onLongPressSticker(arg0) {
      const stickers = arg0;
      const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
      if (null != found) {
        handleOnLongPressSticker(found);
      }
    };
    return jsx(importDefault(9618), { style: tmp3.row });
  } else {
    let num2 = 0;
    jsx = 0;
    if (0 < rowSize) {
      do {
        let tmp4 = (function _loop() {
          let tmp11;
          let tmp12;
          let tmp13;
          const stickers = tmp;
          if (undefined === stickers[v0]) {
            let obj = { style: _undefined.stickerImage };
            items.push(v0(outer1_4, obj, v0));
            return 1;
          } else {
            [tmp11, tmp12, tmp13] = outer1_3(rowTraits(tmp), 3);
            obj = {
              accessibilityRole: "button",
              accessibilityLabel: tmp.name,
              style: _undefined.stickerImage,
              disabled: tmp13,
              onPress() {
                  outer1_10(closure_0);
                },
              onLongPress() {
                  return outer1_11(closure_0);
                }
            };
            obj = { sticker: tmp, size: closure_7, animated: tmp11, opaque: tmp12 };
            obj.children = v0(outer1_1(outer1_2[16]), obj, v0);
            items.push(v0(stickers(outer1_2[19]).PressableOpacity, obj, tmp.id));
          }
        })();
        num2 = num2 + 1;
        jsx = num2;
      } while (num2 < rowSize);
    }
    const obj3 = { style: tmp3.row, children: items };
    return <View style={tmp3.row}>{items}</View>;
  }
};
