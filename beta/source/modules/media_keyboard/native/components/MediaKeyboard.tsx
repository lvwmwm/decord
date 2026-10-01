// Module ID: 16294
// Function ID: 16295
// Name: MediaKeyboard
// Dependencies: [19, 5200, 5199, 1609, 1074, 1484, 11518, 21, 1241, 4566, 4703, 1611, 16295, 4531, 576, 8789, 16296, 11640, 10098, 5450, 4701, 5440, 1364, 5439, 10096, 11679, 1115, 5374, 5387, 10101, 9571, 5401, 10103, 16297, 16298, 10105, 16299, 10106, 2]

// Module 16294 (MediaKeyboard)
import intl6 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import DraftStore from "DraftStore" /* 5200 */;
import AppsIcon from "AppsIcon" /* 5374 */;
import ThreadIcon from "ThreadIcon" /* 5387 */;
import ImageIcon from "ImageIcon" /* 5401 */;
import Upload from "Upload" /* 5440 */;
import AttachmentIcon from "AttachmentIcon" /* 9571 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 10098 */;
import PollsIcon from "PollsIcon" /* 10101 */;
import MediaKeyboardBottomSheetHeaderSimpleDefault from "MediaKeyboardBottomSheetHeaderSimple" /* 10103 */;
import MediaKeyboardBottomSheetActionsDefault from "MediaKeyboardBottomSheetActions" /* 10105 */;
import PortalKeyboardConstants from "PortalKeyboardConstants" /* 11518 */;
import PollCreationModalActionCreators from "PollCreationModalActionCreators" /* 11679 */;
import MediaKeyboardAccessoriesContainerDefault from "MediaKeyboardAccessoriesContainer" /* 16297 */;
import MediaKeyboardFloatingSendDefault from "MediaKeyboardFloatingSend" /* 16298 */;
import react from "react" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5199 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1609 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const DraftType = DraftStore.DraftType;
({ MediaKeyboardTarget: metroRequire, MediaPickerActionSheetEngagedActions: metroImportDefault } = MediaKeyboardConstants);
({ AnalyticEvents: metroImportAll, ChatInputComponentViewedTypes: c9 } = Constants);
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const KEYBOARD_ANIMATION_CONFIG = PortalKeyboardConstants.KEYBOARD_ANIMATION_CONFIG;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const memoResult = react.memo(function MediaKeyboard(channel) {
  let obj9;
  let onClose;
  let transitionState;
  channel = channel.channel;
  const chatInputRef = channel.chatInputRef;
  let sharedValue;
  let items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  ({ onClose, transitionState } = channel);
  const effect = sharedValue.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: allowedExtensions.MEDIA_PICKER, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(metroImportAll.CHAT_INPUT_COMPONENT_VIEWED, obj2);
  }, items);
  let ref = sharedValue.useRef(null);
  let obj = channel(ref[9]);
  sharedValue = obj.useSharedValue(-1);
  let obj2 = channel(ref[9]);
  const sharedValue1 = obj2.useSharedValue(0);
  let obj3 = channel(ref[10]);
  const keyboardContextForType = obj3.useKeyboardContextForType(channel(ref[11]).KeyboardTypes.MEDIA);
  let obj4 = channel(ref[12]);
  const appLauncherActionSheet = obj4.useAppLauncherActionSheet({ chatInputRef, channel }).appLauncherActionSheet;
  let obj5 = channel(ref[13]);
  const token = obj5.useToken(chatInputRef(ref[14]).modules.mobile.MEDIA_KEYBOARD_SEND_VERTICAL_INSET);
  let obj6 = channel(ref[15]);
  const isAppLauncherEnabled = obj6.getIsAppLauncherEnabled(channel);
  let tmp8 = chatInputRef(ref[16])({ channel, context: keyboardContextForType });
  let closure_8 = tmp8;
  const obj7 = channel(ref[17]);
  const fileTypeFiltering = obj7.useFileTypeFiltering(tmp8.fileTypes);
  const allowedExtensions = fileTypeFiltering.allowedExtensions;
  const validateFilenames = fileTypeFiltering.validateFilenames;
  const showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
  let items1 = [sharedValue, channel, chatInputRef, keyboardContextForType, ref, tmp8, allowedExtensions, validateFilenames, showInvalidFileTypeAlert];
  const mediaFilesAllowed = fileTypeFiltering.mediaFilesAllowed;
  const memo = sharedValue.useMemo(() => {
    let extensions;
    function onRestoreKeyboard() {
      if (keyboardContextForType.target !== token.APP_LAUNCHER) {
        const current = onSelectFiles.current;
        const openCustomKeyboard = current.openCustomKeyboard;
        const obj = { type: channel(ref[11]).KeyboardTypes.MEDIA, context: tmp };
        openCustomKeyboard(obj);
      }
    }
    function onSelectFiles(items, IMAGE_PICKER) {
      if (keyboardContextForType.target === token.CHAT) {
        const obj3 = channel(ref[18]);
        obj3.addImagesFromPicker(onRestoreKeyboard.id, items, IMAGE_PICKER);
      } else if (keyboardContextForType.target === tmp2.COMMAND) {
        if (extensions.length > 0) {
          items = [];
          const obj = channel(ref[19]);
          items[0] = obj.getFileFromUploadItem(items[0]).filename;
          if (!validateFilenames(items)) {
            return showInvalidFileTypeAlert();
          }
        }
        const obj2 = channel(ref[18]);
        const result = obj2.addAttachmentForCommand(onRestoreKeyboard.id, onSelectFiles, items[0], tmp, IMAGE_PICKER);
      }
    }
    function onSelectItem(arg0) {
      let channelId;
      let isIncluded;
      let item;
      ({ channelId, item, isIncluded } = arg0);
      const obj = chatInputRef(ref[8]);
      const obj2 = { action: isAppLauncherEnabled.MEDIA_SELECTED };
      obj.track(closure_8.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj2);
      if (keyboardContextForType.target === token.CHAT) {
        const obj5 = channel(ref[18]);
        const result = obj5.handleSelectKeyboardItem(channelId, item, isIncluded, false);
      } else if (keyboardContextForType.target === tmp4.COMMAND) {
        const obj6 = channel(ref[18]);
        const result1 = obj6.mediaNodeToUploadItem(item);
        if (extensions.length > 0) {
          const items = [];
          const tmp19Result = channel(ref[19]);
          items[0] = tmp19Result.getFileFromUploadItem(result1).filename;
          if (!validateFilenames(items)) {
            return showInvalidFileTypeAlert();
          }
        }
        const tmp19Result2 = channel(ref[18]);
        const result2 = tmp19Result2.addAttachmentForCommand(channelId, onSelectFiles, result1, tmp3, tmp19(tmp[21]).UploadOrigin.IMAGE_PICKER);
      }
    }
    let obj = {
      onAttachPress() {
        const handleAttachFile = channel(ref[18]).handleAttachFile;
        const obj = {};
        channel(ref[18]);
        const FILE_ATTACHMENT = channel(ref[21]).UploadOrigin.FILE_ATTACHMENT;
        const obj2 = {
          channel: onRestoreKeyboard,
          uploadLimit: closure_1_8.uploadLimit,
          extensions,
          onDismissKeyboard() {
            const obj = IMAGE_PICKER(onSelectItem[20]);
            return obj.dismissKeyboard();
          },
          onRestoreKeyboard: FILE_ATTACHMENT,
          onSelectFiles(arg0) {
            return onSelectFiles(arg0, IMAGE_PICKER);
          }
        };
        const merged = Object.assign(obj2);
        handleAttachFile(obj);
      },
      onPressCamera(previewType) {
        const obj = { previewType };
        const handleCameraDialog = channel(ref[18]).handleCameraDialog;
        channel(ref[18]);
        const IMAGE_PICKER = channel(ref[21]).UploadOrigin.IMAGE_PICKER;
        const obj2 = {
          channel: onRestoreKeyboard,
          uploadLimit: closure_1_8.uploadLimit,
          extensions,
          onDismissKeyboard() {
            const obj = IMAGE_PICKER(onSelectItem[20]);
            return obj.dismissKeyboard();
          },
          onRestoreKeyboard: IMAGE_PICKER,
          onSelectFiles(arg0) {
            return onSelectFiles(arg0, IMAGE_PICKER);
          }
        };
        const merged = Object.assign(obj2);
        handleCameraDialog(obj);
      },
      onPressHeader() {
        if (0 === sharedValue.get()) {
          const current2 = onSelectItem.current;
          if (current2 != null) {
            current2.expand();
          }
        } else {
          const current = onSelectItem.current;
          if (current != null) {
            current.collapse();
          }
        }
      },
      onViewAll() {
        let obj = { draftType: closure_1_8.draftType };
        const handleViewAllDialog = channel(ref[18]).handleViewAllDialog;
        channel(ref[18]);
        const IMAGE_PICKER = channel(ref[21]).UploadOrigin.IMAGE_PICKER;
        const obj2 = {
          channel: onRestoreKeyboard,
          uploadLimit: closure_1_8.uploadLimit,
          extensions,
          onDismissKeyboard() {
            const obj = IMAGE_PICKER(onSelectItem[20]);
            return obj.dismissKeyboard();
          },
          onRestoreKeyboard: IMAGE_PICKER,
          onSelectFiles(arg0) {
            return onSelectFiles(arg0, IMAGE_PICKER);
          }
        };
        const merged = Object.assign(obj2);
        handleViewAllDialog(obj);
        const obj3 = channel(ref[22]);
        if (obj3.isAndroid()) {
          const current = onSelectItem.current;
          if (current != null) {
            current.collapse();
          }
        }
      },
      onManageLimited() {
        const obj = MediaKeyboardUtils;
        const obj2 = { onDismissKeyboard: ChatInputUtils.dismissKeyboard, onRestoreKeyboard };
        const result = obj.handleLimitedPickerDialog(obj2);
      },
      onPressItem(channelId) {
        const obj = { channelId: channelId.channelId, item: channelId.item, isIncluded: channelId.isIncluded };
        onSelectItem(obj);
      },
      onLongPressItem(channelId) {
        let fn2;
        let tmp8;
        channelId = channelId.channelId;
        const item = channelId.item;
        const isIncluded = channelId.isIncluded;
        let onRemove;
        const tmp = ref;
        let obj = channel(ref[18]);
        const result = obj.mediaNodeToUploadItem(item);
        const cloudUpload = new channel(ref[23]).CloudUpload(result, channelId);
        let upload;
        if (isIncluded) {
          upload = keyboardContextForType.getUpload(channelId, cloudUpload.id, sharedValue1.ChannelMessage);
        }
        onRemove = undefined;
        if (null != upload) {
          onRemove = () => {
            const obj = MediaKeyboardUtils;
            return obj.handleSelectKeyboardItem(channelId, item, isIncluded, false);
          };
        }
        const obj2 = {
          channelId,
          disableAddDescription: null == upload,
          disableSpoiler: null == upload,
          upload: tmp8,
          onAdd: fn2,
          onEdit(arg0) {
            if (fn != null) {
              tmp();
            }
            const items = [arg0];
            onSelectFiles(items, Upload.UploadOrigin.IMAGE_EDITOR);
          },
          onRemove
        };
        tmp8 = upload;
        const tmp7 = chatInputRef(tmp[24]);
        if (upload == null) {
          tmp8 = cloudUpload;
        }
        fn2 = undefined;
        if (null == upload) {
          fn2 = () => {
            const obj = { channelId, item, isIncluded };
            return onSelectItem(obj);
          };
        }
        tmp7(obj2);
      },
      onPollsPress() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: extensions.POLLS, channel_id: channel.id, guild_id: channel.guild_id };
        obj.track(metroImportAll.CHAT_INPUT_COMPONENT_VIEWED, obj2);
        const current = chatInputRef.current;
        current.closeCustomKeyboard();
        const obj3 = PollCreationModalActionCreators;
        const obj4 = { channel, onCancel: onRestoreKeyboard };
        obj3.openCreatePollModal(obj4);
      },
      onAppsPress() {
        let obj2;
        const current = onSelectFiles.current;
        const obj = { type: channel(ref[11]).KeyboardTypes.APP_LAUNCHER, context: obj2 };
        obj2 = { initialRouteName: validateFilenames.HOME };
        current.openCustomKeyboard(obj);
      },
      onThreadPress() {
        const obj = channel(ref[18]);
        obj.handleSelectThread(onRestoreKeyboard, onSelectFiles);
      },
      onSend() {
        const current = onSelectItem.current;
        if (current != null) {
          current.collapse();
        }
        const current2 = onSelectFiles.current;
        current2.handleSend();
      }
    };
    return obj;
  }, items1);
  const canStartThreads = tmp8.canStartThreads;
  let items2 = [memo, , , , ];
  ({ uploadDisabled: arr3[1], canPostPolls: arr3[2] } = tmp8);
  items2[3] = isAppLauncherEnabled;
  items2[4] = canStartThreads;
  const memo1 = sharedValue.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let items1;
    const tmp = isAppLauncherEnabled;
    if (tmp) {
      const obj = { text: intl.string(intl6.t.PHjkRE), IconComponent: AppsIcon.AppsIcon, onPress: memo.onAppsPress, disabled: false };
      intl = intl6.intl;
      const items = [obj];
      items1 = items;
    } else {
      items1 = [];
    }
    const tmp9 = canStartThreads;
    if (tmp9) {
      const obj2 = { text: intl2.string(intl6.t["7Xm5QI"]), IconComponent: ThreadIcon.ThreadIcon, onPress: memo.onThreadPress, disabled: false };
      intl2 = intl6.intl;
      const items2 = [obj2];
      let items3 = items2;
    } else {
      items3 = [];
    }
    const obj3 = { text: intl3.string(intl6.t.RgIi2B), IconComponent: PollsIcon.PollsIcon, onPress: memo.onPollsPress, disabled: !closure_8.canPostPolls };
    intl3 = intl6.intl;
    const items4 = [obj3, ...items1];
    const obj4 = { text: intl4.string(intl6.t["8Hvr3+"]), IconComponent: AttachmentIcon.AttachmentIcon, onPress: memo.onAttachPress, disabled: closure_8.uploadDisabled };
    intl4 = intl6.intl;
    items4[tmp17] = obj4;
    const obj5 = { text: intl5.string(intl6.t.Zmm6dN), IconComponent: ImageIcon.ImageIcon, onPress: memo.onViewAll, disabled: closure_8.uploadDisabled };
    intl5 = intl6.intl;
    const items5 = [obj5, ...items4];
    return items5;
  }, items2);
  ref = sharedValue.useRef(null);
  let items3 = [memo];
  let items4 = [sharedValue, sharedValue1, memo, channel.id, tmp8, memo1, token];
  const callback = sharedValue.useCallback((animatedIndex) => {
    const obj = { animatedIndex: animatedIndex.animatedIndex, onPress: memo.onPressHeader };
    return memo(MediaKeyboardBottomSheetHeaderSimpleDefault, obj);
  }, items3);
  const callback1 = sharedValue.useCallback((animateOnMount) => {
    let items;
    let flag = animateOnMount.animateOnMount;
    if (flag === undefined) {
      flag = false;
    }
    const obj = { animateOnMount: flag, animatedIndex: sharedValue, animatedPosition: sharedValue1, initialPosition: animateOnMount.initialPosition, children: items };
    items = [, ];
    const obj2 = { ref, animatedIndex: sharedValue, channelId: channel.id, draftType: closure_8.draftType, onSend: memo.onSend };
    const tmp = MediaKeyboardAccessoriesContainerDefault;
    items[0] = memo(MediaKeyboardFloatingSendDefault, obj2);
    const obj3 = {
      canPostPolls: closure_8.canPostPolls,
      onHeightChange(arg0) {
        const current = ref.current;
        let setInsetFabResult;
        if (current != null) {
          setInsetFabResult = current.setInsetFab(arg0 + token);
        }
        return setInsetFabResult;
      },
      uploadDisabled: closure_8.uploadDisabled,
      overflowButtons: memo1
    };
    items[1] = memo(MediaKeyboardBottomSheetActionsDefault, obj3);
    return map1(tmp, obj);
  }, items4);
  const obj8 = {
    animationConfigs: showInvalidFileTypeAlert,
    animatedIndex: sharedValue,
    animatedPosition: sharedValue1,
    bottomSheetRef: ref,
    accessoriesComponent: callback1,
    handleComponent: callback,
    overlayComponent: appLauncherActionSheet,
    onClose,
    onAccessibilityFocusRestore() {
      const current = chatInputRef.current;
      return current.focusPhotosButton();
    },
    transitionState,
    children: memo(chatInputRef(ref[37]), obj9)
  };
  obj9 = { channel, draftType: tmp8.draftType, onPressCamera: memo.onPressCamera, onAttachPress: memo.onAttachPress, onPressItem: memo.onPressItem, onLongPressItem: memo.onLongPressItem, onViewAll: memo.onViewAll, onManageLimited: memo.onManageLimited, includedUploadIds: tmp8.includedUploadIds, extensions: allowedExtensions, allowCamera: mediaFilesAllowed, uploadDisabled: tmp8.uploadDisabled, uploadLimit: tmp8.uploadLimit, disableWhenReachedLimit: tmp8.disableWhenReachedLimit };
  const tmp14 = chatInputRef(ref[36]);
  return memo(tmp14, obj8);
});
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboard.tsx");

export default memoResult;
