// Module ID: 9646
// Function ID: 75153
// Name: MediaKeyboardActionSheet
// Dependencies: []
// Exports: default

// Module 9646 (MediaKeyboardActionSheet)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).MediaPickerActionSheetEngagedActions;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardActionSheet.tsx");

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
  const arg1 = onAttachPress;
  const onViewAll = onAttachPress.onViewAll;
  const importDefault = onViewAll;
  const onClose = onAttachPress.onClose;
  const dependencyMap = onClose;
  const onBack = onAttachPress.onBack;
  const React = onBack;
  ({ channel, draftType, uploadLimit, disableWhenReachedLimit, includedUploadIds, extensions, allowCamera, onPressCamera, onPressItem, onLongPressItem, onManageLimited } = onAttachPress);
  let obj = arg1(dependencyMap[4]);
  const sharedValue = obj.useSharedValue(-1);
  let closure_4 = sharedValue;
  const items = [onAttachPress];
  const memo = React.useMemo(() => {
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
    obj.text = intl2.string(onAttachPress(onClose[5]).t.8Hvr3+);
    obj.IconComponent = onAttachPress(onClose[7]).AttachmentIcon;
    obj.onPress = onAttachPress;
    obj.disabled = false;
    items[1] = obj;
    return items;
  }, items);
  const AnalyticEvents = memo;
  const items1 = [sharedValue, onBack];
  const callback = React.useCallback(() => callback2(onViewAll(onClose[8]), { animatedIndex: sharedValue, onPress: onBack }), items1);
  const items2 = [onClose];
  const callback1 = React.useCallback(() => {
    let obj = onAttachPress(onClose[9]);
    const result = obj.triggerHapticFeedback(onViewAll(onClose[10]).IMPACT_LIGHT);
    obj = { action: sharedValue.FULLY_EXPANDED };
    onViewAll(onClose[11]).track(memo.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj);
  }, []);
  const callback2 = React.useCallback(() => {
    if (null != onClose) {
      onClose();
    }
  }, items2);
  const jsx = callback2;
  importDefault(dependencyMap[12])(() => () => {
    let tmp;
    if (null != callback) {
      tmp = callback();
    }
    return tmp;
  });
  const items3 = [onViewAll, memo];
  const memo1 = React.useMemo(() => {
    let obj = {
      "Bool(true)": "AbortSignal",
      "Bool(true)": null,
      "Bool(true)": "\u{1F9BB}\u{1F3FF}",
      onHeightChange() {

      }
    };
    obj = {};
    const intl = onAttachPress(onClose[5]).intl;
    obj.text = intl.string(onAttachPress(onClose[5]).t.Zmm6dN);
    obj.IconComponent = onAttachPress(onClose[14]).ImageIcon;
    obj.onPress = onViewAll;
    obj.disabled = false;
    const items = [obj, ...closure_5];
    obj.overflowButtons = items;
    return callback2(onViewAll(onClose[13]), obj);
  }, items3);
  obj = { handleComponent: callback, scrollable: true, startExpanded: arg1(dependencyMap[16]).isMetaQuest(), onExpand: callback1, onDismiss: callback2, animatedIndex: sharedValue, footer: memo1, children: jsx(importDefault(dependencyMap[17]), { channel, draftType, onPressCamera, onAttachPress, onPressItem, onLongPressItem, onViewAll, onManageLimited, includedUploadIds, extensions, allowCamera, uploadLimit, disableWhenReachedLimit }) };
  return jsx(arg1(dependencyMap[15]).BottomSheet, obj);
};
