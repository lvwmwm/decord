// Module ID: 9688
// Function ID: 75430
// Name: MediaKeyboardActionSheet
// Dependencies: [31, 1552, 653, 33, 3991, 1212, 9689, 9691, 9693, 4099, 4100, 675, 4559, 9695, 4644, 5187, 1553, 9696, 2]
// Exports: default

// Module 9688 (MediaKeyboardActionSheet)
import result from "result";
import { MediaPickerActionSheetEngagedActions as closure_4 } from "DRAG_HANDLE";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardActionSheet.tsx");

export default function MediaKeyboardActionSheet(onAttachPress) {
  let allowCamera;
  let channel;
  let disableWhenReachedLimit;
  let draftType;
  let extensions;
  let includedUploadIds;
  let onLongPressItem;
  let onManageLimited;
  let onPressCamera;
  let onPressItem;
  let uploadLimit;
  onAttachPress = onAttachPress.onAttachPress;
  const onViewAll = onAttachPress.onViewAll;
  const onClose = onAttachPress.onClose;
  const onBack = onAttachPress.onBack;
  ({ channel, draftType, uploadLimit, disableWhenReachedLimit, includedUploadIds, extensions, allowCamera, onPressCamera, onPressItem, onLongPressItem, onManageLimited } = onAttachPress);
  let obj = onAttachPress(onClose[4]);
  const sharedValue = obj.useSharedValue(-1);
  let items = [onAttachPress];
  const memo = onBack.useMemo(() => {
    let obj = {};
    const intl = onAttachPress(onClose[5]).intl;
    obj.text = intl.string(onAttachPress(onClose[5]).t.RgIi2B);
    obj.IconComponent = onAttachPress(onClose[6]).PollsIcon;
    obj.onPress = function onPress() {

    };
    obj.disabled = true;
    const items = [obj, ];
    obj = {};
    const intl2 = onAttachPress(onClose[5]).intl;
    obj.text = intl2.string(onAttachPress(onClose[5]).t["8Hvr3+"]);
    obj.IconComponent = onAttachPress(onClose[7]).AttachmentIcon;
    obj.onPress = onAttachPress;
    obj.disabled = false;
    items[1] = obj;
    return items;
  }, items);
  const items1 = [sharedValue, onBack];
  const callback = onBack.useCallback(() => callback2(onViewAll(onClose[8]), { animatedIndex: sharedValue, onPress: onBack }), items1);
  const items2 = [onClose];
  const callback1 = onBack.useCallback(() => {
    let obj = onAttachPress(onClose[9]);
    const result = obj.triggerHapticFeedback(onViewAll(onClose[10]).IMPACT_LIGHT);
    obj = { action: sharedValue.FULLY_EXPANDED };
    onViewAll(onClose[11]).track(memo.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj);
  }, []);
  const callback2 = onBack.useCallback(() => {
    if (null != onClose) {
      onClose();
    }
  }, items2);
  onViewAll(onClose[12])(() => () => {
    let tmp;
    if (null != outer1_6) {
      tmp = outer1_6();
    }
    return tmp;
  });
  const items3 = [onViewAll, memo];
  const memo1 = onBack.useMemo(() => {
    let obj = {
      canPostPolls: false,
      onHeightChange() {

      },
      uploadDisabled: false
    };
    obj = {};
    const intl = onAttachPress(onClose[5]).intl;
    obj.text = intl.string(onAttachPress(onClose[5]).t.Zmm6dN);
    obj.IconComponent = onAttachPress(onClose[14]).ImageIcon;
    obj.onPress = onViewAll;
    obj.disabled = false;
    const items = [obj, ...memo];
    obj.overflowButtons = items;
    return callback2(onViewAll(onClose[13]), obj);
  }, items3);
  obj = { handleComponent: callback, scrollable: true, startExpanded: onAttachPress(onClose[16]).isMetaQuest(), onExpand: callback1, onDismiss: callback2, animatedIndex: sharedValue, footer: memo1, children: callback2(onViewAll(onClose[17]), { channel, draftType, onPressCamera, onAttachPress, onPressItem, onLongPressItem, onViewAll, onManageLimited, includedUploadIds, extensions, allowCamera, uploadLimit, disableWhenReachedLimit }) };
  return callback2(onAttachPress(onClose[15]).BottomSheet, obj);
};
