// Module ID: 15329
// Function ID: 116606
// Dependencies: []

// Module 15329
const importAllResult = importAll(dependencyMap[0]);
const DraftType = arg1(dependencyMap[1]).DraftType;
let closure_5 = importDefault(dependencyMap[2]);
({ MediaKeyboardTarget: closure_6, MediaPickerActionSheetEngagedActions: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ AnalyticEvents: closure_8, ChatInputComponentViewedTypes: closure_9 } = arg1(dependencyMap[4]));
const AppLauncherRouteName = arg1(dependencyMap[5]).AppLauncherRouteName;
const KEYBOARD_ANIMATION_CONFIG = arg1(dependencyMap[6]).KEYBOARD_ANIMATION_CONFIG;
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[7]));
const tmp4 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(function MediaKeyboard(channel) {
  let onClose;
  let transitionState;
  channel = channel.channel;
  const arg1 = channel;
  const chatInputRef = channel.chatInputRef;
  const importDefault = chatInputRef;
  let isAppLauncherEnabled;
  let tmp10;
  let allowedExtensions;
  let AppLauncherRouteName;
  let KEYBOARD_ANIMATION_CONFIG;
  let memo;
  let canStartThreads;
  let memo1;
  let closure_15;
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  ({ onClose, transitionState } = channel);
  const effect = importAllResult.useEffect(() => {
    let obj = chatInputRef(ref[8]);
    obj = { type: allowedExtensions.MEDIA_PICKER, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(tmp10.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items);
  const ref = importAllResult.useRef(null);
  const dependencyMap = ref;
  let obj = arg1(dependencyMap[9]);
  const sharedValue = obj.useSharedValue(-1);
  const sharedValue1 = arg1(dependencyMap[9]).useSharedValue(0);
  const DraftType = sharedValue1;
  const obj2 = arg1(dependencyMap[9]);
  const keyboardContextForType = arg1(dependencyMap[10]).useKeyboardContextForType(arg1(dependencyMap[11]).KeyboardTypes.MEDIA);
  let closure_5 = keyboardContextForType;
  const obj3 = arg1(dependencyMap[10]);
  const obj4 = arg1(dependencyMap[12]);
  canStartThreads = arg1(dependencyMap[13]).useMobileVisualRefreshConfig({ location: "MediaKeyboard" }).chatInputFloating;
  const obj5 = arg1(dependencyMap[13]);
  const token = arg1(dependencyMap[14]).useToken(importDefault(dependencyMap[15]).modules.mobile.MEDIA_KEYBOARD_SEND_VERTICAL_INSET);
  isAppLauncherEnabled = canStartThreads;
  if (canStartThreads) {
    isAppLauncherEnabled = arg1(dependencyMap[16]).getIsAppLauncherEnabled(channel);
    const obj7 = arg1(dependencyMap[16]);
  }
  tmp10 = importDefault(dependencyMap[17])({ channel, context: keyboardContextForType });
  const obj6 = arg1(dependencyMap[14]);
  const fileTypeFiltering = arg1(dependencyMap[18]).useFileTypeFiltering(tmp10.fileTypes);
  allowedExtensions = fileTypeFiltering.allowedExtensions;
  const validateFilenames = fileTypeFiltering.validateFilenames;
  AppLauncherRouteName = validateFilenames;
  const showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
  KEYBOARD_ANIMATION_CONFIG = showInvalidFileTypeAlert;
  const items1 = [sharedValue, channel, chatInputRef, keyboardContextForType, ref, tmp10, allowedExtensions, validateFilenames, showInvalidFileTypeAlert];
  memo = importAllResult.useMemo(() => {
    function onRestoreKeyboard() {
      if (upload.target !== constants.APP_LAUNCHER) {
        const current = onSelectFiles.current;
        const obj = { type: onRestoreKeyboard(onAttachFileParams[11]).KeyboardTypes.MEDIA, context: upload };
        current.openCustomKeyboard(obj);
      }
    }
    function onSelectFiles(items, IMAGE_PICKER) {
      if (upload.target === constants.CHAT) {
        onRestoreKeyboard(onAttachFileParams[19]).addImagesFromPicker(onRestoreKeyboard.id, items, IMAGE_PICKER);
        const obj3 = onRestoreKeyboard(onAttachFileParams[19]);
      } else if (upload.target === constants.COMMAND) {
        if (closure_9.length > 0) {
          items = [onRestoreKeyboard(onAttachFileParams[20]).getFileFromUploadItem(items[0]).filename];
          if (!lib(items)) {
            return callback();
          }
          const obj = onRestoreKeyboard(onAttachFileParams[20]);
        }
        const obj2 = onRestoreKeyboard(onAttachFileParams[19]);
        const result = obj2.addAttachmentForCommand(onRestoreKeyboard.id, onSelectFiles, items[0], upload, IMAGE_PICKER);
      }
    }
    function onAttachFileParams(arg0) {
      const onRestoreKeyboard = arg0;
      return {
        channel: onRestoreKeyboard,
        uploadLimit: closure_8.uploadLimit,
        extensions: closure_9,
        onDismissKeyboard() {
          return arg0(closure_2[21]).dismissKeyboard();
        },
        onRestoreKeyboard,
        onSelectFiles(arg0) {
          return callback(arg0, arg0);
        }
      };
    }
    function onSelectItem(arg0) {
      let channelId;
      let isIncluded;
      let item;
      ({ channelId, item, isIncluded } = arg0);
      let obj = onSelectFiles(onAttachFileParams[8]);
      obj = { action: constants2.MEDIA_SELECTED };
      obj.track(closure_8.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj);
      if (upload.target === constants.CHAT) {
        const obj5 = onRestoreKeyboard(onAttachFileParams[19]);
        const result = obj5.handleSelectKeyboardItem(channelId, item, isIncluded, false);
      } else if (upload.target === constants.COMMAND) {
        const result1 = onRestoreKeyboard(onAttachFileParams[19]).mediaNodeToUploadItem(item);
        if (closure_9.length > 0) {
          const items = [onRestoreKeyboard(onAttachFileParams[20]).getFileFromUploadItem(result1).filename];
          if (!lib(items)) {
            return callback();
          }
          const obj3 = onRestoreKeyboard(onAttachFileParams[20]);
        }
        const obj4 = onRestoreKeyboard(onAttachFileParams[19]);
        const result2 = obj4.addAttachmentForCommand(channelId, onSelectFiles, result1, upload, onRestoreKeyboard(onAttachFileParams[22]).UploadOrigin.IMAGE_PICKER);
        const obj6 = onRestoreKeyboard(onAttachFileParams[19]);
      }
    }
    return {
      onAttachPress() {
        let obj = onRestoreKeyboard(onAttachFileParams[19]);
        obj = {};
        const merged = Object.assign(onAttachFileParams(onRestoreKeyboard(onAttachFileParams[22]).UploadOrigin.FILE_ATTACHMENT));
        obj.handleAttachFile(obj);
      },
      onPressCamera(arg0) {
        let obj = onRestoreKeyboard(onAttachFileParams[19]);
        obj = {};
        const merged = Object.assign(onAttachFileParams(onRestoreKeyboard(onAttachFileParams[22]).UploadOrigin.IMAGE_PICKER));
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
        let obj = onRestoreKeyboard(onAttachFileParams[19]);
        obj = {};
        const merged = Object.assign(onAttachFileParams(onRestoreKeyboard(onAttachFileParams[22]).UploadOrigin.IMAGE_PICKER));
        obj["draftType"] = closure_8.draftType;
        obj.handleViewAllDialog(obj);
        if (obj3.isAndroid()) {
          const current = onAttachFileParams.current;
          if (null != current) {
            current.collapse();
          }
        }
      },
      onManageLimited() {
        let obj = onRestoreKeyboard(onAttachFileParams[19]);
        obj = { onDismissKeyboard: onRestoreKeyboard(onAttachFileParams[21]).dismissKeyboard, onRestoreKeyboard };
        const result = obj.handleLimitedPickerDialog(obj);
      },
      onPressItem(channelId) {
        onSelectItem({ channelId: channelId.channelId, item: channelId.item, isIncluded: channelId.isIncluded });
      },
      onLongPressItem(channelId) {
        channelId = channelId.channelId;
        const onRestoreKeyboard = channelId;
        const item = channelId.item;
        const onSelectFiles = item;
        const isIncluded = channelId.isIncluded;
        const onAttachFileParams = isIncluded;
        let onSelectItem;
        let obj = onRestoreKeyboard(onAttachFileParams[19]);
        const result = obj.mediaNodeToUploadItem(item);
        let cloudUpload = new onRestoreKeyboard(onAttachFileParams[24]).CloudUpload(result, channelId);
        let upload;
        if (isIncluded) {
          upload = upload.getUpload(channelId, cloudUpload.id, ChannelMessage.ChannelMessage);
        }
        let fn;
        if (null != upload) {
          fn = () => channelId(isIncluded[19]).handleSelectKeyboardItem(channelId, item, isIncluded, false);
        }
        onSelectItem = fn;
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
          item(items, channelId(isIncluded[22]).UploadOrigin.IMAGE_EDITOR);
        };
        obj.onRemove = fn;
        onSelectFiles(onAttachFileParams[25])(obj);
      },
      onPollsPress() {
        let obj = onSelectFiles(onAttachFileParams[8]);
        obj = { type: closure_9.POLLS, channel_id: onRestoreKeyboard.id, guild_id: onRestoreKeyboard.guild_id };
        obj.track(closure_8.CHAT_INPUT_COMPONENT_VIEWED, obj);
        const current = onSelectFiles.current;
        current.closeCustomKeyboard();
        obj = { channel: onRestoreKeyboard, onCancel: onRestoreKeyboard };
        onRestoreKeyboard(onAttachFileParams[26]).openCreatePollModal(obj);
      },
      onAppsPress() {
        const current = onSelectFiles.current;
        let obj = { type: onRestoreKeyboard(onAttachFileParams[11]).KeyboardTypes.APP_LAUNCHER, context: obj };
        obj = { initialRouteName: lib.HOME };
        current.openCustomKeyboard(obj);
      },
      onThreadPress(arg0) {
        onRestoreKeyboard(onAttachFileParams[19]).handleSelectThread(onRestoreKeyboard, onSelectFiles);
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
  const items2 = [memo, , , , ];
  ({ uploadDisabled: arr3[1], canPostPolls: arr3[2] } = tmp10);
  items2[3] = isAppLauncherEnabled;
  items2[4] = canStartThreads;
  memo1 = importAllResult.useMemo(() => {
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
      obj.text = intl2.string(channel(ref[27]).t.7Xm5QI);
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
    obj.disabled = !tmp10.canPostPolls;
    const items4 = [obj, ...items1];
    const obj1 = {};
    const intl4 = channel(ref[27]).intl;
    obj1.text = intl4.string(channel(ref[27]).t.8Hvr3+);
    obj1.IconComponent = channel(ref[31]).AttachmentIcon;
    obj1.onPress = memo.onAttachPress;
    obj1.disabled = tmp10.uploadDisabled;
    items4[tmp7] = obj1;
    const obj2 = {};
    const intl5 = channel(ref[27]).intl;
    obj2.text = intl5.string(channel(ref[27]).t.Zmm6dN);
    obj2.IconComponent = channel(ref[32]).ImageIcon;
    obj2.onPress = memo.onViewAll;
    obj2.disabled = tmp10.uploadDisabled;
    const items5 = [obj2, ...items4];
    return items5;
  }, items2);
  closure_15 = importAllResult.useRef(null);
  const items3 = [memo];
  const items4 = [sharedValue, sharedValue1, memo, channel.id, tmp10, memo1, token];
  const callback = importAllResult.useCallback((animatedIndex) => memo(chatInputRef(ref[33]), { animatedIndex: animatedIndex.animatedIndex, onPress: memo.onPressHeader }), items3);
  const callback1 = importAllResult.useCallback((animateOnMount) => {
    let flag = animateOnMount.animateOnMount;
    if (flag === undefined) {
      flag = false;
    }
    let obj = { animateOnMount: flag, animatedIndex: sharedValue, animatedPosition: sharedValue1, initialPosition: animateOnMount.initialPosition };
    obj = { ref: closure_15, animatedIndex: sharedValue, channelId: channel.id, draftType: tmp10.draftType, onSend: memo.onSend };
    const items = [memo(chatInputRef(ref[35]), obj), ];
    obj = {
      canPostPolls: tmp10.canPostPolls,
      onHeightChange(arg0) {
        const current = ref.current;
        let setInsetFabResult;
        if (null != current) {
          setInsetFabResult = current.setInsetFab(arg0 + closure_6);
        }
        return setInsetFabResult;
      },
      uploadDisabled: tmp10.uploadDisabled,
      overflowButtons: memo1
    };
    items[1] = memo(chatInputRef(ref[36]), obj);
    obj.children = items;
    return canStartThreads(chatInputRef(ref[34]), obj);
  }, items4);
  obj = {
    animationConfigs: KEYBOARD_ANIMATION_CONFIG,
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
  const obj8 = arg1(dependencyMap[18]);
  obj = { channel, draftType: tmp10.draftType, onPressCamera: memo.onPressCamera, onAttachPress: memo.onAttachPress, onPressItem: memo.onPressItem, onLongPressItem: memo.onLongPressItem, onViewAll: memo.onViewAll, onManageLimited: memo.onManageLimited, includedUploadIds: tmp10.includedUploadIds, extensions: allowedExtensions, allowCamera: fileTypeFiltering.mediaFilesAllowed, uploadDisabled: tmp10.uploadDisabled, uploadLimit: tmp10.uploadLimit, disableWhenReachedLimit: tmp10.disableWhenReachedLimit };
  obj.children = memo(importDefault(dependencyMap[38]), obj);
  return memo(importDefault(dependencyMap[37]), obj);
});
const result = arg1(dependencyMap[39]).fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboard.tsx");

export default memoResult;
