// Module ID: 15446
// Function ID: 118780
// Dependencies: [31, 4468, 4467, 1552, 653, 1455, 11155, 33, 675, 3991, 3996, 1555, 15447, 1324, 3834, 689, 7918, 15448, 11281, 9652, 4674, 3989, 4665, 477, 4664, 9650, 11317, 1212, 9075, 4631, 9655, 9657, 4644, 9659, 15449, 15450, 9661, 15451, 9662, 2]

// Module 15446
import importAllResult from "AttachmentIcon";
import { DraftType } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import DRAG_HANDLE from "DRAG_HANDLE";
import ME from "ME";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { KEYBOARD_ANIMATION_CONFIG } from "KEYBOARD_ANIMATION_DURATION";
import jsxProd from "module_9659";

let closure_12;
let closure_13;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ MediaKeyboardTarget: closure_6, MediaPickerActionSheetEngagedActions: closure_7 } = DRAG_HANDLE);
({ AnalyticEvents: closure_8, ChatInputComponentViewedTypes: closure_9 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
const memoResult = importAllResult.memo(function MediaKeyboard(channel) {
  let onClose;
  let transitionState;
  channel = channel.channel;
  const chatInputRef = channel.chatInputRef;
  let isAppLauncherEnabled;
  let c8;
  let allowedExtensions;
  let validateFilenames;
  let showInvalidFileTypeAlert;
  let memo;
  let canStartThreads;
  let memo1;
  let closure_15;
  let items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  ({ onClose, transitionState } = channel);
  const effect = sharedValue.useEffect(() => {
    let obj = chatInputRef(ref[8]);
    obj = { type: allowedExtensions.MEDIA_PICKER, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(_undefined.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items);
  const ref = sharedValue.useRef(null);
  let obj = channel(ref[9]);
  sharedValue = obj.useSharedValue(-1);
  const sharedValue1 = channel(ref[9]).useSharedValue(0);
  let obj2 = channel(ref[9]);
  const keyboardContextForType = channel(ref[10]).useKeyboardContextForType(channel(ref[11]).KeyboardTypes.MEDIA);
  let obj3 = channel(ref[10]);
  let obj4 = channel(ref[12]);
  canStartThreads = channel(ref[13]).useMobileVisualRefreshConfig({ location: "MediaKeyboard" }).chatInputFloating;
  let obj5 = channel(ref[13]);
  const token = channel(ref[14]).useToken(chatInputRef(ref[15]).modules.mobile.MEDIA_KEYBOARD_SEND_VERTICAL_INSET);
  isAppLauncherEnabled = canStartThreads;
  if (canStartThreads) {
    isAppLauncherEnabled = channel(ref[16]).getIsAppLauncherEnabled(channel);
    const obj7 = channel(ref[16]);
  }
  const tmp10 = chatInputRef(ref[17])({ channel, context: keyboardContextForType });
  c8 = tmp10;
  let obj6 = channel(ref[14]);
  const fileTypeFiltering = channel(ref[18]).useFileTypeFiltering(tmp10.fileTypes);
  allowedExtensions = fileTypeFiltering.allowedExtensions;
  validateFilenames = fileTypeFiltering.validateFilenames;
  showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
  let items1 = [sharedValue, channel, chatInputRef, keyboardContextForType, ref, tmp10, allowedExtensions, validateFilenames, showInvalidFileTypeAlert];
  memo = sharedValue.useMemo(() => {
    function onRestoreKeyboard() {
      if (outer1_5.target !== token.APP_LAUNCHER) {
        const current = onSelectFiles.current;
        const obj = { type: channel(ref[11]).KeyboardTypes.MEDIA, context: outer1_5 };
        current.openCustomKeyboard(obj);
      }
    }
    function onSelectFiles(items, IMAGE_PICKER) {
      if (outer1_5.target === token.CHAT) {
        channel(ref[19]).addImagesFromPicker(onRestoreKeyboard.id, items, IMAGE_PICKER);
        const obj3 = channel(ref[19]);
      } else if (outer1_5.target === token.COMMAND) {
        if (outer1_9.length > 0) {
          items = [channel(ref[20]).getFileFromUploadItem(items[0]).filename];
          if (!outer1_10(items)) {
            return outer1_11();
          }
          const obj = channel(ref[20]);
        }
        const obj2 = channel(ref[19]);
        const result = obj2.addAttachmentForCommand(onRestoreKeyboard.id, onSelectFiles, items[0], outer1_5, IMAGE_PICKER);
      }
    }
    function onAttachFileParams(arg0) {
      let closure_0 = arg0;
      return {
        channel: onRestoreKeyboard,
        uploadLimit: outer1_8.uploadLimit,
        extensions: outer1_9,
        onDismissKeyboard() {
          return channel(ref[21]).dismissKeyboard();
        },
        onRestoreKeyboard: closure_0,
        onSelectFiles(arg0) {
          return outer1_1(arg0, closure_0);
        }
      };
    }
    function onSelectItem(arg0) {
      let channelId;
      let isIncluded;
      let item;
      ({ channelId, item, isIncluded } = arg0);
      let obj = chatInputRef(ref[8]);
      obj = { action: isAppLauncherEnabled.MEDIA_SELECTED };
      obj.track(constants.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj);
      if (outer1_5.target === token.CHAT) {
        const obj5 = channel(ref[19]);
        const result = obj5.handleSelectKeyboardItem(channelId, item, isIncluded, false);
      } else if (outer1_5.target === token.COMMAND) {
        const result1 = channel(ref[19]).mediaNodeToUploadItem(item);
        if (outer1_9.length > 0) {
          const items = [channel(ref[20]).getFileFromUploadItem(result1).filename];
          if (!outer1_10(items)) {
            return outer1_11();
          }
          const obj3 = channel(ref[20]);
        }
        const obj4 = channel(ref[19]);
        const result2 = obj4.addAttachmentForCommand(channelId, onSelectFiles, result1, outer1_5, channel(ref[22]).UploadOrigin.IMAGE_PICKER);
        const obj6 = channel(ref[19]);
      }
    }
    return {
      onAttachPress() {
        let obj = channel(ref[19]);
        obj = {};
        const merged = Object.assign(onAttachFileParams(channel(ref[22]).UploadOrigin.FILE_ATTACHMENT));
        obj.handleAttachFile(obj);
      },
      onPressCamera(arg0) {
        let obj = channel(ref[19]);
        obj = {};
        const merged = Object.assign(onAttachFileParams(channel(ref[22]).UploadOrigin.IMAGE_PICKER));
        obj["previewType"] = arg0;
        obj.handleCameraDialog(obj);
      },
      onPressHeader() {
        if (0 === onSelectItem.get()) {
          const current2 = onAttachFileParams.current;
          if (null != current2) {
            current2.expand();
          }
        } else {
          const current = onAttachFileParams.current;
          if (null != current) {
            current.collapse();
          }
        }
      },
      onViewAll() {
        let obj = channel(ref[19]);
        obj = {};
        const merged = Object.assign(onAttachFileParams(channel(ref[22]).UploadOrigin.IMAGE_PICKER));
        obj["draftType"] = outer1_8.draftType;
        obj.handleViewAllDialog(obj);
        if (obj3.isAndroid()) {
          const current = onAttachFileParams.current;
          if (null != current) {
            current.collapse();
          }
        }
      },
      onManageLimited() {
        let obj = channel(ref[19]);
        obj = { onDismissKeyboard: channel(ref[21]).dismissKeyboard, onRestoreKeyboard };
        const result = obj.handleLimitedPickerDialog(obj);
      },
      onPressItem(channelId) {
        onSelectItem({ channelId: channelId.channelId, item: channelId.item, isIncluded: channelId.isIncluded });
      },
      onLongPressItem(channelId) {
        channelId = channelId.channelId;
        const item = channelId.item;
        const isIncluded = channelId.isIncluded;
        let fn;
        let obj = channel(ref[19]);
        const result = obj.mediaNodeToUploadItem(item);
        let cloudUpload = new channel(ref[24]).CloudUpload(result, channelId);
        let upload;
        if (isIncluded) {
          upload = keyboardContextForType.getUpload(channelId, cloudUpload.id, sharedValue1.ChannelMessage);
        }
        fn = undefined;
        if (null != upload) {
          fn = () => channel(ref[19]).handleSelectKeyboardItem(channelId, item, isIncluded, false);
        }
        obj = { channelId, disableAddDescription: null == upload, disableSpoiler: null == upload };
        if (null != upload) {
          cloudUpload = upload;
        }
        obj.upload = cloudUpload;
        let fn2;
        if (null == upload) {
          fn2 = () => fn({ channelId, item, isIncluded });
        }
        obj.onAdd = fn2;
        obj.onEdit = function onEdit(arg0) {
          if (null != fn) {
            fn();
          }
          const items = [arg0];
          item(items, channel(ref[22]).UploadOrigin.IMAGE_EDITOR);
        };
        obj.onRemove = fn;
        chatInputRef(ref[25])(obj);
      },
      onPollsPress() {
        let obj = chatInputRef(ref[8]);
        obj = { type: allowedExtensions.POLLS, channel_id: onRestoreKeyboard.id, guild_id: onRestoreKeyboard.guild_id };
        obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
        const current = onSelectFiles.current;
        current.closeCustomKeyboard();
        obj = { channel: onRestoreKeyboard, onCancel: onRestoreKeyboard };
        channel(ref[26]).openCreatePollModal(obj);
      },
      onAppsPress() {
        const current = onSelectFiles.current;
        obj = { type: channel(ref[11]).KeyboardTypes.APP_LAUNCHER, context: obj };
        obj = { initialRouteName: validateFilenames.HOME };
        current.openCustomKeyboard(obj);
      },
      onThreadPress(arg0) {
        channel(ref[19]).handleSelectThread(onRestoreKeyboard, onSelectFiles);
      },
      onSend() {
        const current = onAttachFileParams.current;
        if (null != current) {
          current.collapse();
        }
        const current2 = onSelectFiles.current;
        current2.handleSend();
      }
    };
  }, items1);
  if (canStartThreads) {
    canStartThreads = tmp10.canStartThreads;
  }
  let items2 = [memo, , , , ];
  ({ uploadDisabled: arr3[1], canPostPolls: arr3[2] } = tmp10);
  items2[3] = isAppLauncherEnabled;
  items2[4] = canStartThreads;
  memo1 = sharedValue.useMemo(() => {
    if (isAppLauncherEnabled) {
      let obj = {};
      const intl = channel(ref[27]).intl;
      obj.text = intl.string(channel(ref[27]).t.PHjkRE);
      obj.IconComponent = channel(ref[28]).AppsIcon;
      obj.onPress = memo.onAppsPress;
      obj.disabled = false;
      const items = [obj];
      let items1 = items;
    } else {
      items1 = [];
    }
    if (canStartThreads) {
      obj = {};
      const intl2 = channel(ref[27]).intl;
      obj.text = intl2.string(channel(ref[27]).t["7Xm5QI"]);
      obj.IconComponent = channel(ref[29]).ThreadIcon;
      obj.onPress = memo.onThreadPress;
      obj.disabled = false;
      const items2 = [obj];
      let items3 = items2;
    } else {
      items3 = [];
    }
    obj = {};
    const intl3 = channel(ref[27]).intl;
    obj.text = intl3.string(channel(ref[27]).t.RgIi2B);
    obj.IconComponent = channel(ref[30]).PollsIcon;
    obj.onPress = memo.onPollsPress;
    obj.disabled = !_undefined.canPostPolls;
    const items4 = [obj, ...items1];
    const obj1 = {};
    const intl4 = channel(ref[27]).intl;
    obj1.text = intl4.string(channel(ref[27]).t["8Hvr3+"]);
    obj1.IconComponent = channel(ref[31]).AttachmentIcon;
    obj1.onPress = memo.onAttachPress;
    obj1.disabled = _undefined.uploadDisabled;
    items4[tmp7] = obj1;
    const obj2 = {};
    const intl5 = channel(ref[27]).intl;
    obj2.text = intl5.string(channel(ref[27]).t.Zmm6dN);
    obj2.IconComponent = channel(ref[32]).ImageIcon;
    obj2.onPress = memo.onViewAll;
    obj2.disabled = _undefined.uploadDisabled;
    const items5 = [obj2, ...items4];
    return items5;
  }, items2);
  closure_15 = sharedValue.useRef(null);
  let items3 = [memo];
  let items4 = [sharedValue, sharedValue1, memo, channel.id, tmp10, memo1, token];
  const callback = sharedValue.useCallback((animatedIndex) => memo(chatInputRef(ref[33]), { animatedIndex: animatedIndex.animatedIndex, onPress: memo.onPressHeader }), items3);
  const callback1 = sharedValue.useCallback((animateOnMount) => {
    let flag = animateOnMount.animateOnMount;
    if (flag === undefined) {
      flag = false;
    }
    let obj = { animateOnMount: flag, animatedIndex: sharedValue, animatedPosition: sharedValue1, initialPosition: animateOnMount.initialPosition };
    obj = { ref: closure_15, animatedIndex: sharedValue, channelId: channel.id, draftType: _undefined.draftType, onSend: memo.onSend };
    const items = [memo(chatInputRef(ref[35]), obj), ];
    obj = {
      canPostPolls: _undefined.canPostPolls,
      onHeightChange(arg0) {
        const current = outer1_15.current;
        let setInsetFabResult;
        if (null != current) {
          setInsetFabResult = current.setInsetFab(arg0 + outer1_6);
        }
        return setInsetFabResult;
      },
      uploadDisabled: _undefined.uploadDisabled,
      overflowButtons: memo1
    };
    items[1] = memo(chatInputRef(ref[36]), obj);
    obj.children = items;
    return canStartThreads(chatInputRef(ref[34]), obj);
  }, items4);
  obj = {
    animationConfigs: showInvalidFileTypeAlert,
    animatedIndex: sharedValue,
    animatedPosition: sharedValue1,
    bottomSheetRef: ref,
    accessoriesComponent: callback1,
    handleComponent: callback,
    overlayComponent: obj4.useAppLauncherActionSheet({ chatInputRef, channel }).appLauncherActionSheet,
    onClose,
    onAccessibilityFocusRestore() {
      const current = chatInputRef.current;
      return current.focusPhotosButton();
    },
    transitionState
  };
  const obj8 = channel(ref[18]);
  obj = { channel, draftType: tmp10.draftType, onPressCamera: memo.onPressCamera, onAttachPress: memo.onAttachPress, onPressItem: memo.onPressItem, onLongPressItem: memo.onLongPressItem, onViewAll: memo.onViewAll, onManageLimited: memo.onManageLimited, includedUploadIds: tmp10.includedUploadIds, extensions: allowedExtensions, allowCamera: fileTypeFiltering.mediaFilesAllowed, uploadDisabled: tmp10.uploadDisabled, uploadLimit: tmp10.uploadLimit, disableWhenReachedLimit: tmp10.disableWhenReachedLimit };
  obj.children = memo(chatInputRef(ref[38]), obj);
  return memo(chatInputRef(ref[37]), obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboard.tsx");

export default memoResult;
