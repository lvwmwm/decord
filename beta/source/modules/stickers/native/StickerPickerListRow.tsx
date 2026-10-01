// Module ID: 9863
// Function ID: 9864
// Name: StickerPickerListRow
// Dependencies: [19, 17, 1372, 2024, 9736, 1218, 21, 4836, 576, 672, 5409, 1364, 2021, 8622, 4801, 4802, 5198, 6755, 5581, 9636, 9864, 1231, 5435, 2]
// Exports: default

// Module 9863 (StickerPickerListRow)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1218 */;
import UserSettings from "UserSettings" /* 2021 */;
import StickersConstants from "StickersConstants" /* 2024 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4802 */;
import StickersUtils from "StickersUtils" /* 5198 */;
import LockIcon from "LockIcon" /* 5409 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import StickerPickerConstants from "StickerPickerConstants" /* 9736 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
const StickerSendability = tmp(6755);
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
let obj4 = _modDef672("#000000");
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
  let obj10;
  let obj6;
  let obj8;
  let rowSize;
  let sum;
  function _loop() {
    let closure_0;
    let items1;
    let tmp = c12;
    stickers = tmp2;
    if (undefined === stickers[c12]) {
      let obj = { style: closure_7.stickerImage };
      items.push(closure_8(closure_3, obj, tmp));
      return 1;
    } else {
      let id1;
      const shouldAnimateSticker = stickers(dependencyMap[16]).shouldAnimateSticker;
      const id = tmp2.id;
      stickers(dependencyMap[16]);
      const tmp29 = closure_8;
      if (UserStore != null) {
        id1 = UserStore.id;
      }
      let isSendableStickerResult = isSectionNitroLocked;
      const shouldAnimateStickerResult = shouldAnimateSticker(tmp29, id === id1);
      if (!isSectionNitroLocked) {
        isSendableStickerResult = null == closure_6;
      }
      if (!isSendableStickerResult) {
        const tmp26Result = stickers(dependencyMap[17]);
        isSendableStickerResult = tmp26Result.isSendableSticker(tmp2, UserStore.getCurrentUser(), closure_6);
      }
      let tmp11 = closure_9;
      const tmp10 = null == dependencyMap;
      if (closure_9) {
        tmp11 = !isSendableStickerResult;
      }
      const push = items.push;
      const obj2 = {
        accessibilityRole: "button",
        accessibilityLabel: stickers[c12].name,
        style: items,
        disabled: tmp10,
        onPress() {
            const obj = closure_0(closure_1_2[14]);
            const result = obj.triggerHapticFeedback(isSectionNitroLocked(closure_1_2[15]).IMPACT_LIGHT);
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
      let disabledOverlay = tmp11;
      const PressableOpacity = tmp26(tmp27[22]).PressableOpacity;
      const tmp13 = closure_9;
      if (tmp11) {
        disabledOverlay = closure_7.disabledOverlay;
      }
      items[1] = disabledOverlay;
      const obj3 = { sticker: stickers[c12], size: STICKER_SIZE, animated: shouldAnimateStickerResult, opaque: isSendableStickerResult };
      items1 = [closure_8(isSectionNitroLocked(dependencyMap[19]), obj3, tmp), ];
      let tmp17 = null;
      if (tmp11) {
        tmp17 = closure_8(items, {});
      }
      items1[1] = tmp17;
      push(tmp13(PressableOpacity, obj2, stickers[c12].id));
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
    let obj = stickers(1364);
    nativeRow = obj.isAndroid();
  }
  let c12;
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
    return { isAnimated: shouldAnimateStickerResult, isOpaque: isSendableStickerResult, isDisabled: null == dependencyMap, isLocked: closure_9 && !isSendableStickerResult };
  }
  const tmp3 = handleOnLongPressSticker();
  rowContentPaddingVertical = tmp3;
  let tmp4 = dependencyMap;
  let AnimateStickers = stickers(2021).AnimateStickers;
  let closure_8 = AnimateStickers.useSetting();
  let obj2 = stickers(8622);
  let closure_9 = obj2.useMobileStickerPickerUpsellRestyleEnabled("native.StickerPickerListRow");
  let items = [];
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
          let obj3 = { stickerId: null, stickerName: null, stickerType: null, stickerUrl: obj6.getStickerAssetUrl(tmp9, STICKER_SIZE, isAnimated), stickerAnimated: isAnimated, stickerDisabled: isDisabled, stickerOpaque: isOpaque, stickerLocked: isLocked };
          ({ id: obj5.stickerId, name: obj5.stickerName, format_type: obj5.stickerType } = tmp9);
          ({ isOpaque, isDisabled, isLocked } = rowTraitsResult);
          let push2 = items.push;
          obj6 = stickers(9636);
          let tmp17 = STICKER_SIZE;
          let push2Result = push2(obj3);
          tmp12 = dependencyMap;
        } else {
          let obj4 = { stickerId: "", stickerName: "", stickerType: stickers(5581).StickerFormat.PNG, stickerUrl: "", stickerAnimated: false, stickerDisabled: true, stickerOpaque: false, stickerLocked: false };
          let tmp11 = stickers;
          tmp12 = dependencyMap;
          let push = items.push;
          let arr = push(obj4);
        }
        num4 = num4 + 1;
        tmp4 = tmp12;
      } while (num4 < rowSize);
    }
    try {
      const obj7 = {
        style: tmp3.row,
        rowData: obj8,
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
      obj8 = { rowContentWidth: containerWidth, rowContentPaddingVertical, itemSize: STICKER_SIZE, items };
      return closure_8(isSectionNitroLocked(9864), obj7);
    } catch (tmp23) {
      const obj9 = { message: "Error in StickerPickerListRowNativeComponent", category: "sticker", data: obj10 };
      obj10 = { itemLength: items.length, items: found.map((stickerId) => ({ stickerId: stickerId.stickerId, stickerName: stickerId.stickerName, stickerUrl: stickerId.stickerUrl })) };
      const addBreadcrumb = isSectionNitroLocked(1231).addBreadcrumb;
      isSectionNitroLocked(1231);
      found = items.filter((stickerId) => null == stickerId.stickerId || null == stickerId.stickerName || null == stickerId.stickerUrl);
      addBreadcrumb(obj9);
      throw tmp23;
    }
  } else {
    c12 = 0;
    let num2 = 0;
    if (0 < rowSize) {
      do {
        let tmp5 = _loop();
        sum = num2 + 1;
        c12 = sum;
        num2 = sum;
      } while (sum < rowSize);
    }
    const obj17 = { style: tmp3.row, children: items };
    return closure_8(closure_3, obj17);
  }
};
