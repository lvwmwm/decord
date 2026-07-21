// Module ID: 9606
// Function ID: 74822
// Name: STICKER_SIZE
// Dependencies: []
// Exports: default

// Module 9606 (STICKER_SIZE)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_5 = importDefault(dependencyMap[3]);
const StickerAnimationSettings = arg1(dependencyMap[4]).StickerAnimationSettings;
const tmp3 = arg1(dependencyMap[5]);
const STICKER_SIZE = tmp3.STICKER_SIZE;
const PADDING_VERTICAL = arg1(dependencyMap[6]).PADDING_VERTICAL;
const jsx = arg1(dependencyMap[7]).jsx;
let obj = arg1(dependencyMap[8]);
obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, height: tmp3.ROW_HEIGHT };
let closure_10 = obj.createStyles({ row: obj, stickerImage: { height: STICKER_SIZE, width: STICKER_SIZE } });
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/stickers/native/StickerPickerListRow.tsx");

export default function StickerPickerListRow(stickers) {
  let nativeRow;
  let rowSize;
  stickers = stickers.stickers;
  const arg1 = stickers;
  ({ rowSize, onPressSticker: closure_1, onLongPressStickerDetail: closure_2, focusedSticker: closure_3, setFocusedSticker: closure_4, channel: closure_5, nativeRow } = stickers);
  if (nativeRow === undefined) {
    let obj = arg1(dependencyMap[9]);
    nativeRow = obj.isAndroid();
  }
  let StickerAnimationSettings;
  let closure_7;
  let PADDING_VERTICAL;
  let jsx;
  function handleOnPressSticker(found) {
    const result = stickers(closure_2[11]).triggerHapticFeedback(callback(closure_2[12]).IMPACT_LIGHT);
    if (null != callback) {
      callback(found);
    }
  }
  function handleOnLongPressSticker(found) {
    if (null != callback2) {
      const result = stickers(callback2[11]).triggerHapticFeedback(callback(callback2[12]).IMPACT_LIGHT);
      callback2(found);
    } else {
      const AnimateStickers = stickers(callback2[10]).AnimateStickers;
      if (AnimateStickers.getSetting() === tmp3.ANIMATE_ON_INTERACTION) {
        const result1 = stickers(callback2[11]).triggerHapticFeedback(callback(callback2[12]).IMPACT_LIGHT);
        if (null != callback3) {
          callback3(found);
        }
        const obj = stickers(callback2[11]);
      }
    }
  }
  function rowTraits(id) {
    id = undefined;
    if (null != lib) {
      id = lib.id;
    }
    const items = [stickers(closure_2[13]).shouldAnimateSticker(closure_7, id.id === id), , ];
    let isSendableStickerResult = null == currentUser;
    if (!isSendableStickerResult) {
      isSendableStickerResult = stickers(closure_2[14]).isSendableSticker(id, currentUser.getCurrentUser(), currentUser);
      const obj2 = stickers(closure_2[14]);
    }
    items[1] = isSendableStickerResult;
    items[2] = null == closure_1;
    return items;
  }
  const tmp3 = handleOnPressSticker();
  StickerAnimationSettings = tmp3;
  const AnimateStickers = arg1(dependencyMap[10]).AnimateStickers;
  closure_7 = AnimateStickers.useSetting();
  const items = [];
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
        let tmp17 = arg1;
        let tmp18 = dependencyMap;
        let obj5 = arg1(dependencyMap[16]);
        let tmp19 = closure_7;
        obj.stickerUrl = obj5.getStickerAssetUrl(tmp8, closure_7, first);
        obj.stickerAnimated = first;
        obj.stickerDisabled = tmp14[2];
        obj.stickerOpaque = tmp14[1];
        let arr = arr2.push(obj);
      } else {
        let tmp9 = items;
        obj = { "Null": "c6fbfaa8eca334330bde3511a892f25b", "Null": "hu.messages.c6fbfaa8eca334330bde3511a892f25b.compiled.messages", "Null": "jsona", "Null": 150, "Null": 0.25, "Null": 40, "Null": true };
        let tmp10 = arg1;
        let tmp11 = dependencyMap;
        obj.stickerType = arg1(dependencyMap[15]).StickerFormat.PNG;
        arr = arr2.push(obj);
      }
    }
    const obj1 = { style: tmp3.row };
    const obj2 = { rowContentWidth: stickers.containerWidth, rowContentPaddingVertical: PADDING_VERTICAL, itemSize: closure_7, items };
    obj1.rowData = obj2;
    obj1.onPressSticker = function onPressSticker(arg0) {
      const stickers = arg0;
      const found = stickers.find((id) => id.id === id.nativeEvent.stickerId);
      if (null != found) {
        handleOnPressSticker(found);
      }
    };
    obj1.onLongPressSticker = function onLongPressSticker(arg0) {
      const stickers = arg0;
      const found = stickers.find((id) => id.id === id.nativeEvent.stickerId);
      if (null != found) {
        handleOnLongPressSticker(found);
      }
    };
    return jsx(importDefault(dependencyMap[17]), obj1);
  } else {
    PADDING_VERTICAL = items;
    let num2 = 0;
    jsx = 0;
    if (0 < rowSize) {
      do {
        let tmp4 = function _loop() {
          let tmp11;
          let tmp12;
          let tmp13;
          const stickers = tmp;
          if (undefined === stickers[closure_9]) {
            let obj = { style: v0.stickerImage };
            items.push(v0(closure_4, obj, v0));
            return 1;
          } else {
            [tmp11, tmp12, tmp13] = lib(rowTraits(tmp), 3);
            obj = {
              accessibilityRole: "button",
              accessibilityLabel: tmp.name,
              style: tmp3.stickerImage,
              disabled: tmp13,
              onPress() {

                },
              onLongPress() {
                  return callback2(tmp);
                }
            };
            obj = { sticker: tmp, size: closure_7, animated: tmp11, opaque: tmp12 };
            obj.children = v0(callback(closure_2[16]), obj, v0);
            items.push(v0(stickers(closure_2[19]).PressableOpacity, obj, tmp.id));
          }
        }();
        num2 = num2 + 1;
        closure_9 = num2;
      } while (num2 < rowSize);
    }
    const obj3 = { style: tmp3.row, children: items };
    return <View {...obj3} />;
  }
};
