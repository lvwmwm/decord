// Module ID: 10100
// Function ID: 10101
// Name: MediaKeyboardActionSheet
// Dependencies: [19, 1609, 1074, 21, 4566, 1115, 10101, 9571, 10103, 4801, 4802, 1241, 5298, 10105, 5401, 6571, 1610, 10106, 2]
// Exports: default

// Module 10100 (MediaKeyboardActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1609 */;
import ImageIcon from "ImageIcon" /* 5401 */;
import AttachmentIcon from "AttachmentIcon" /* 9571 */;
import PollsIcon from "PollsIcon" /* 10101 */;
import MediaKeyboardBottomSheetHeaderSimpleDefault from "MediaKeyboardBottomSheetHeaderSimple" /* 10103 */;
import MediaKeyboardBottomSheetActionsDefault from "MediaKeyboardBottomSheetActions" /* 10105 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let closure_4 = MediaKeyboardConstants.MediaPickerActionSheetEngagedActions;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardActionSheet.tsx");

export default function MediaKeyboardActionSheet(onAttachPress) {
  let allowCamera;
  let channel;
  let disableWhenReachedLimit;
  let draftType;
  let extensions;
  let includedUploadIds;
  let obj3;
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
    let intl;
    let intl2;
    const obj = {
      text: intl.string(intl3.t.RgIi2B),
      IconComponent: PollsIcon.PollsIcon,
      onPress() {

      },
      disabled: true
    };
    intl = intl3.intl;
    const items = [obj, ];
    const obj2 = { text: intl2.string(intl3.t["8Hvr3+"]), IconComponent: AttachmentIcon.AttachmentIcon, onPress: onAttachPress, disabled: false };
    intl2 = intl3.intl;
    items[1] = obj2;
    return items;
  }, items);
  const items1 = [sharedValue, onBack];
  const callback = onBack.useCallback(() => jsx(MediaKeyboardBottomSheetHeaderSimpleDefault, { animatedIndex: sharedValue, onPress: onBack }), items1);
  const items2 = [onClose];
  const callback1 = onBack.useCallback(() => {
    const obj = onAttachPress(onClose[9]);
    const result = obj.triggerHapticFeedback(onViewAll(onClose[10]).IMPACT_LIGHT);
    const obj2 = onViewAll(onClose[11]);
    const obj3 = { action: sharedValue.FULLY_EXPANDED };
    obj2.track(memo.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj3);
  }, []);
  const callback2 = onBack.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
  }, items2);
  onViewAll(onClose[12])(() => () => {
    let tmp;
    if (callback2 != null) {
      tmp = callback2();
    }
    return tmp;
  });
  const items3 = [onViewAll, memo];
  const memo1 = onBack.useMemo(() => {
    let intl;
    const obj2 = { text: intl.string(intl3.t.Zmm6dN), IconComponent: ImageIcon.ImageIcon, onPress: onViewAll, disabled: false };
    MediaKeyboardBottomSheetActionsDefault;
    intl = intl3.intl;
    const items = [obj2, ...memo];
    return <tmp canPostPolls={false} onHeightChange={function onHeightChange() {

    }} uploadDisabled={false} overflowButtons={items} />;
  }, items3);
  let obj2 = { handleComponent: callback, scrollable: true, startExpanded: obj3.isMetaQuest(), onExpand: callback1, onDismiss: callback2, animatedIndex: sharedValue, footer: memo1, children: callback2(onViewAll(onClose[17]), { channel, draftType, onPressCamera, onAttachPress, onPressItem, onLongPressItem, onViewAll, onManageLimited, includedUploadIds, extensions, allowCamera, uploadLimit, disableWhenReachedLimit }) };
  BottomSheet = onAttachPress(onClose[15]).BottomSheet;
  obj3 = onAttachPress(onClose[16]);
  return callback2(BottomSheet, obj2);
};
