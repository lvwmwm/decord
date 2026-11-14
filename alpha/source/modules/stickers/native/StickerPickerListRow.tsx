// Module ID: 11372
// Function ID: 11373
// Name: StickerPickerListRow
// Dependencies: [19, 17, 1388, 5134, 11244, 1228, 21, 5306, 575, 671, 8092, 1380, 5131, 5554, 5555, 6792, 7225, 6793, 11093, 11373, 1242, 7428, 2]
// Exports: default

// Module 11372 (StickerPickerListRow)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1228 */;
import UserSettings from "UserSettings" /* 5131 */;
import StickersConstants from "StickersConstants" /* 5134 */;
import HapticUtils from "HapticUtils" /* 5554 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5555 */;
import StickersUtils from "StickersUtils" /* 6792 */;
import LockIcon from "LockIcon" /* 8092 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1388 */;
import StickerPickerConstants from "StickerPickerConstants" /* 11244 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let rowContentPaddingVertical;

let StyleSheet;
let alphaResult;
let c3;
let c9;
let metroImportAll;
let obj2;
let obj3;
let tmp;
const StickerSendability = tmp(7225);
function StickerItemLockedOverlay() {
  let obj2;
  const tmp = closure_10();
  const obj = { importantForAccessibility: "no-hide-descendants", style: tmp.lockContainer, children: metroImportAll(LockIcon.LockIcon, obj2) };
  obj2 = { style: tmp.lock };
  return metroImportAll(_false, obj);
}
({ View: c3, StyleSheet } = react_native);
const StickerAnimationSettings = StickersConstants.StickerAnimationSettings;
const STICKER_SIZE = StickerPickerConstants.STICKER_SIZE;
const ROW_HEIGHT = StickerPickerConstants.ROW_HEIGHT;
const PADDING_VERTICAL = ExpressionPickerConstants.PADDING_VERTICAL;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: { height: ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "hidden" }, stickerImage: { height: STICKER_SIZE, width: STICKER_SIZE }, disabledOverlay: obj2, lockContainer: obj3, lock: { width: 16, height: 16, tintColor: "white" } };
obj2 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: alphaResult.hex(), alignItems: "center", justifyContent: "center" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
const obj4 = _modDef671("#000000");
alphaResult = obj4.alpha(0.2);
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerListRow.tsx");

export default function StickerPickerListRow(stickers) {
  let closure_3;
  let closure_7;
  let currentUser;
  let found;
  let isDisabled;
  let isLocked;
  let isOpaque;
  let isSectionNitroLocked;
  let nativeRow;
  let obj5;
  let obj7;
  let obj9;
  let rowSize;
  let sum;
  function _loop() {
    let closure_0;
    let items1;
    let tmp10;
    let tmp = c11;
    stickers = tmp2;
    if (undefined === stickers[c11]) {
      let obj = { style: closure_7.stickerImage };
      items.push(closure_8(closure_3, obj, tmp));
      return 1;
    } else {
      let id1;
      const shouldAnimateSticker = stickers(dependencyMap[15]).shouldAnimateSticker;
      const id = tmp2.id;
      stickers(dependencyMap[15]);
      const tmp28 = closure_8;
      if (UserStore != null) {
        id1 = UserStore.id;
      }
      let isSendableStickerResult = isSectionNitroLocked;
      const shouldAnimateStickerResult = shouldAnimateSticker(tmp28, id === id1);
      if (!isSectionNitroLocked) {
        isSendableStickerResult = null == closure_6;
      }
      if (!isSendableStickerResult) {
        const tmp25Result = stickers(dependencyMap[16]);
        isSendableStickerResult = tmp25Result.isSendableSticker(tmp2, UserStore.getCurrentUser(), closure_6);
      }
      let disabledOverlay = !isSendableStickerResult;
      const push = items.push;
      const obj2 = {
        accessibilityRole: "button",
        accessibilityLabel: stickers[c11].name,
        style: items,
        disabled: tmp10,
        onPress() {
            const obj = closure_0(closure_1_2[13]);
            const result = obj.triggerHapticFeedback(isSectionNitroLocked(closure_1_2[14]).IMPACT_LIGHT);
            const tmp = closure_0;
            if (dependencyMap != null) {
              dependencyMap(tmp);
            }
          },
        onLongPress() {
            return handleOnLongPressSticker(closure_0);
          },
        children: items1
      };
      items = [closure_7.stickerImage, ];
      tmp10 = null == dependencyMap;
      const PressableOpacity = tmp25(tmp26[21]).PressableOpacity;
      const tmp12 = handleOnLongPressSticker;
      if (!isSendableStickerResult) {
        disabledOverlay = closure_7.disabledOverlay;
      }
      items[1] = disabledOverlay;
      const obj3 = { sticker: stickers[c11], size: STICKER_SIZE, animated: shouldAnimateStickerResult, opaque: isSendableStickerResult };
      items1 = [closure_8(isSectionNitroLocked(dependencyMap[18]), obj3, tmp), ];
      let tmp16 = null;
      if (!isSendableStickerResult) {
        tmp16 = closure_8(c11, {});
      }
      items1[1] = tmp16;
      push(tmp12(PressableOpacity, obj2, stickers[c11].id));
    }
  }
  stickers = stickers.stickers;
  ({ rowSize, isSectionNitroLocked } = stickers);
  const containerWidth = stickers.containerWidth;
  if (isSectionNitroLocked === undefined) {
    isSectionNitroLocked = false;
  }
  ({ onPressSticker: dependencyMap, onLongPressStickerDetail: closure_3, focusedSticker: UserStore, setFocusedSticker: StickerAnimationSettings, channel: STICKER_SIZE, nativeRow } = stickers);
  if (nativeRow === undefined) {
    let tmp = stickers;
    const tmp2 = dependencyMap;
    let obj = stickers(1380);
    nativeRow = obj.isAndroid();
  }
  let items;
  let c11;
  function handleOnLongPressSticker(found) {
    if (null != closure_3) {
      const obj2 = HapticUtils;
      const result = obj2.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      tmp(found);
    } else {
      const AnimateStickers = UserSettings.AnimateStickers;
      if (AnimateStickers.getSetting() === StickerAnimationSettings.ANIMATE_ON_INTERACTION) {
        const obj = HapticUtils;
        const result1 = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        if (StickerAnimationSettings != null) {
          StickerAnimationSettings(found);
        }
      }
    }
  }
  function rowTraits(id) {
    let id1;
    const shouldAnimateSticker = StickersUtils.shouldAnimateSticker;
    id = id.id;
    StickersUtils;
    const tmp4 = closure_8;
    if (UserStore != null) {
      id1 = UserStore.id;
    }
    let isSendableStickerResult = isSectionNitroLocked;
    const shouldAnimateStickerResult = shouldAnimateSticker(tmp4, id === id1);
    if (!isSectionNitroLocked) {
      isSendableStickerResult = null == STICKER_SIZE;
    }
    if (!isSendableStickerResult) {
      const tmpResult = StickerSendability;
      isSendableStickerResult = tmpResult.isSendableSticker(id, UserStore.getCurrentUser(), STICKER_SIZE);
    }
    return { isAnimated: shouldAnimateStickerResult, isOpaque: isSendableStickerResult, isDisabled: null == dependencyMap, isLocked: !isSendableStickerResult };
  }
  const tmp3 = items();
  rowContentPaddingVertical = tmp3;
  let tmp4 = dependencyMap;
  let AnimateStickers = stickers(5131).AnimateStickers;
  let closure_8 = AnimateStickers.useSetting();
  items = [];
  if (nativeRow) {
    let num4 = 0;
    if (0 < rowSize) {
      do {
        let tmp12;
        let tmp9 = stickers[num4];
        let tmp10 = num4;
        if (undefined !== tmp9) {
          let rowTraitsResult = rowTraits(tmp9);
          let isAnimated = rowTraitsResult.isAnimated;
          let obj2 = { stickerId: null, stickerName: null, stickerType: null, stickerUrl: obj5.getStickerAssetUrl(tmp9, STICKER_SIZE, isAnimated), stickerAnimated: isAnimated, stickerDisabled: isDisabled, stickerOpaque: isOpaque, stickerLocked: isLocked };
          ({ id: obj4.stickerId, name: obj4.stickerName, format_type: obj4.stickerType } = tmp9);
          let tmp16 = dependencyMap;
          ({ isOpaque, isDisabled, isLocked } = rowTraitsResult);
          let push2 = items.push;
          obj5 = stickers(11093);
          let push2Result = push2(obj2);
          tmp12 = dependencyMap;
        } else {
          let obj3 = { stickerId: "", stickerName: "", stickerType: stickers(6793).StickerFormat.PNG, stickerUrl: "", stickerAnimated: false, stickerDisabled: true, stickerOpaque: false, stickerLocked: false };
          tmp12 = dependencyMap;
          let push = items.push;
          let arr = push(obj3);
        }
        num4 = num4 + 1;
        tmp4 = tmp12;
      } while (num4 < rowSize);
    }
    try {
      const obj6 = {
        style: tmp3.row,
        rowData: obj7,
        onPressSticker(arg0) {
              let closure_0 = arg0;
              const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
              if (null != found) {
                const obj = HapticUtils;
                const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
                if (dependencyMap != null) {
                  dependencyMap(found);
                }
              }
            },
        onLongPressSticker(arg0) {
              let closure_0 = arg0;
              const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
              if (null != found) {
                handleOnLongPressSticker(found);
              }
            }
      };
      obj7 = { rowContentWidth: containerWidth, rowContentPaddingVertical, itemSize: STICKER_SIZE, items };
      return closure_8(isSectionNitroLocked(11373), obj6);
    } catch (tmp23) {
      const tmp25 = isSectionNitroLocked(1242);
      const obj8 = { message: "Error in StickerPickerListRowNativeComponent", category: "sticker", data: obj9 };
      const addBreadcrumb = tmp25.addBreadcrumb;
      obj9 = { itemLength: items.length, items: found.map((stickerId) => ({ stickerId: stickerId.stickerId, stickerName: stickerId.stickerName, stickerUrl: stickerId.stickerUrl })) };
      found = items.filter((stickerId) => null == stickerId.stickerId || null == stickerId.stickerName || null == stickerId.stickerUrl);
      addBreadcrumb(obj8);
      throw tmp23;
    }
  } else {
    c11 = 0;
    let num2 = 0;
    if (0 < rowSize) {
      do {
        let tmp5 = _loop();
        sum = num2 + 1;
        c11 = sum;
        num2 = sum;
      } while (sum < rowSize);
    }
    const obj16 = { style: tmp3.row, children: items };
    return closure_8(closure_3, obj16);
  }
};
