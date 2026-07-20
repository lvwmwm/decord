// Module ID: 11259
// Function ID: 87567
// Name: AppLauncherCommandViewFooter
// Dependencies: []
// Exports: default

// Module 11259 (AppLauncherCommandViewFooter)
let DEFAULT_CONTENT_PADDING;
function AppLauncherCommandViewFooter(arg0) {
  let animatedStyle;
  let enableSubmit;
  let footerStickyInsetBottom;
  let isSending;
  let onSubmit;
  ({ onHeightChange: closure_0, isSending } = arg0);
  const importDefault = isSending;
  ({ enableSubmit, onSubmit, animatedStyle, footerStickyInsetBottom } = arg0);
  const tmp = callback7();
  const tmp2 = callback2(React.useState(0), 2);
  let closure_2 = tmp2[1];
  let obj = arg1(dependencyMap[14]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const dependencyMap = stateFromStores;
  const tmp4 = callback2(React.useState(false), 2);
  const first = tmp4[0];
  let closure_4 = first;
  const callback2 = tmp4[1];
  let obj1 = arg1(dependencyMap[15]);
  const fn = function h() {
    if (stateFromStores) {
      let obj = {};
    } else {
      obj = {};
      if (first) {
        obj.opacity = 1;
        obj = {};
        const obj8 = callback(stateFromStores[16]);
        const fn = function e() {
          const obj = callback(closure_3[15]);
          return callback(closure_3[15]).runOnJS(callback(closure_3[18]).triggerHapticFeedback)(callback(closure_3[18]).HapticFeedbackTypes.IMPACT_LIGHT);
        };
        let obj1 = { runOnJS: callback(stateFromStores[15]).runOnJS, triggerHapticFeedback: callback(stateFromStores[18]).triggerHapticFeedback, HapticFeedbackTypes: callback(stateFromStores[18]).HapticFeedbackTypes };
        fn.__closure = obj1;
        fn.__workletHash = 8545458901090;
        fn.__initData = closure_25;
        obj.translateX = callback(stateFromStores[15]).withDelay(100, obj8.withTiming(-4, callback(stateFromStores[17]).timingStandard, "respect-motion-settings", fn));
        const items = [obj];
        obj.transform = items;
        const obj7 = callback(stateFromStores[15]);
      } else {
        obj1 = callback(stateFromStores[16]);
        let num2 = 1;
        if (isSending.get()) {
          num2 = 0;
        }
        obj.opacity = obj1.withTiming(num2, callback(stateFromStores[17]).timingStandard);
        const obj2 = {};
        let num4 = 0;
        if (isSending.get()) {
          num4 = 100;
        }
        obj2.translateX = callback(stateFromStores[16]).withTiming(num4, callback(stateFromStores[17]).timingStandard);
        const items1 = [obj2];
        obj.transform = items1;
        const obj4 = callback(stateFromStores[16]);
      }
    }
    return obj;
  };
  obj = { shouldReduceMotion: stateFromStores, isPressedDown: first, withDelay: arg1(dependencyMap[15]).withDelay, withTiming: arg1(dependencyMap[16]).withTiming, timingStandard: arg1(dependencyMap[17]).timingStandard, runOnJS: arg1(dependencyMap[15]).runOnJS, triggerHapticFeedback: arg1(dependencyMap[18]).triggerHapticFeedback, HapticFeedbackTypes: arg1(dependencyMap[18]).HapticFeedbackTypes, isSending };
  fn.__closure = obj;
  fn.__workletHash = 576353278359;
  fn.__initData = closure_24;
  animatedStyle = obj1.useAnimatedStyle(fn);
  obj = {
    onLayout(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      callback2(height);
      if (null != callback) {
        callback(height);
      }
    },
    style: items1
  };
  const items1 = [tmp.footerContainer, animatedStyle];
  obj1 = { style: obj2, start: constants.START, end: obj3 };
  const obj2 = { bottom: -footerStickyInsetBottom, left: tmp.footerContainer.paddingHorizontal };
  const obj3 = { x: 0, y: 12 / (tmp2[0] + 12) };
  const tmp7 = importDefault(dependencyMap[19]);
  const items2 = [arg1(dependencyMap[20]).hexWithOpacity(tmp.linearGradient.backgroundColor, 0), tmp.linearGradient.backgroundColor];
  obj1.colors = items2;
  obj1.pointerEvents = "none";
  const items3 = [callback5(tmp7, obj1), ];
  const obj4 = {
    onPress: onSubmit,
    onPressIn() {
      return callback3(true);
    },
    onPressOut() {
      return callback3(false);
    },
    disabled: !enableSubmit,
    style: tmp.submitButton
  };
  const intl = arg1(dependencyMap[22]).intl;
  obj4.text = intl.string(arg1(dependencyMap[22]).t.TXNS7S);
  const obj5 = { style: animatedStyle };
  const obj6 = { style: { marginLeft: 8 }, color: importDefault(dependencyMap[12]).unsafe_rawColors.WHITE, size: "sm" };
  obj5.children = callback5(arg1(dependencyMap[23]).SendMessageIcon, obj6);
  obj4.icon = callback5(importDefault(dependencyMap[15]).View, obj5);
  obj4.iconPosition = "end";
  items3[1] = callback5(arg1(dependencyMap[21]).BaseTextButton, obj4);
  obj.children = items3;
  return callback6(importDefault(dependencyMap[15]).View, obj);
}
function AppLauncherCommandViewInner(command) {
  let hasPermissions;
  let installOnDemand;
  let loading;
  let preSelectedCommand;
  let section;
  command = command.command;
  const arg1 = command;
  const context = command.context;
  const importDefault = context;
  ({ preSelectedCommand, installOnDemand } = command);
  const importAll = installOnDemand;
  const sectionName = command.sectionName;
  const dependencyMap = sectionName;
  const analyticsLocation = command.analyticsLocation;
  let callback = analyticsLocation;
  const onCommandExecuted = command.onCommandExecuted;
  let callback2 = onCommandExecuted;
  let tmp7;
  let guild_id;
  let stateFromStores;
  let closure_19;
  let callback5;
  let callback6;
  let closure_22;
  let callback7;
  let closure_24;
  let closure_25;
  let closure_26;
  let AppLauncherCommandViewFooter;
  let closure_28;
  let closure_29;
  let closure_30;
  let closure_31;
  let NoPermsState;
  let closure_33;
  let closure_34;
  let first4;
  let closure_36;
  let first5;
  let closure_38;
  let first6;
  let closure_40;
  let sum1;
  let sum2;
  let sharedValue;
  let sharedValue1;
  let callback1;
  callback2 = undefined;
  let tmp36;
  let commandContext;
  let callback3;
  let height;
  let maximum;
  let bottomSheetPosition;
  let closure_53;
  callback5 = undefined;
  callback6 = undefined;
  let closure_56;
  let setLatch;
  let tryCallback;
  let closure_59;
  let closure_60;
  let closure_61;
  ({ section, loading, hasPermissions } = command);
  let tmp = callback7();
  const React = tmp;
  const tmp2 = callback4();
  let obj = arg1(dependencyMap[24]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const entrypoint = requiredAppLauncherContext.entrypoint;
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  let closure_10 = chatInputRef;
  const ref = React.useRef(null);
  callback3 = React.useRef({});
  let closure_13 = React.useRef(0);
  let closure_14 = React.useRef(0);
  let callback4 = React.useRef(0);
  let commandId;
  if (null != preSelectedCommand) {
    commandId = preSelectedCommand.commandId;
  }
  let id;
  if (null != command) {
    id = command.id;
  }
  tmp7 = null;
  if (commandId === id) {
    let prefilledOptions;
    if (null != preSelectedCommand) {
      prefilledOptions = preSelectedCommand.prefilledOptions;
    }
    tmp7 = null;
    if (null != prefilledOptions) {
      tmp7 = prefilledOptions;
    }
  }
  guild_id = context.channel.guild_id;
  let obj1 = arg1(dependencyMap[14]);
  const items = [closure_13];
  stateFromStores = obj1.useStateFromStores(items, () => ref2.getRolesSnapshot(guild_id));
  closure_19 = React.useRef(false);
  callback5 = React.useRef(Date.now());
  callback6 = React.useRef(null);
  closure_22 = React.useRef(false);
  const items1 = [command];
  const effect = React.useEffect(() => {
    if (null != command) {
      const command = ref6.current;
      const context = ref5.current;
      const installOnDemand = ref7.current;
      return () => {
        if (!ref.current) {
          const _Date = Date;
          let length;
          const diff = Date.now() - current;
          let obj = current(closure_3[25]);
          obj = { time_spent: diff };
          const options = current.options;
          if (null != options) {
            length = options.length;
          }
          let num2 = 0;
          if (null != length) {
            num2 = length;
          }
          obj.num_options = num2;
          obj.used_options = current;
          obj.last_used_option_type = current;
          obj.trackWithMetadata(constants.APP_LAUNCHER_COMMAND_CLOSED, obj);
        }
      };
    }
  }, items1);
  const items2 = [chatInputRef, keyboardCloseReasonRef, tmp2];
  callback = React.useCallback(() => {
    if (tmp2.canGoBack()) {
      tmp2.pop();
    } else {
      keyboardCloseReasonRef.current = command(sectionName[24]).AppLauncherKeyboardCloseReason.BACK;
      const current = chatInputRef.current;
      if (null != current) {
        current.closeCustomKeyboard();
      }
    }
  }, items2);
  const tmp12 = callback2(React.useState([]), 2);
  const first = tmp12[0];
  callback7 = tmp12[1];
  const tmp13 = callback2(React.useState([]), 2);
  const first1 = tmp13[0];
  closure_24 = first1;
  closure_25 = tmp13[1];
  closure_26 = React.useRef(new Set());
  const tmp15 = callback2(React.useState([]), 2);
  const first2 = tmp15[0];
  AppLauncherCommandViewFooter = first2;
  closure_28 = tmp15[1];
  const set = new Set();
  closure_29 = React.useRef(new Set());
  const tmp17 = callback2(React.useState([]), 2);
  closure_30 = tmp17[1];
  closure_31 = React.useRef({});
  const tmp18 = callback2(React.useState({}), 2);
  const first3 = tmp18[0];
  NoPermsState = first3;
  closure_33 = tmp18[1];
  const tmp20 = callback2(React.useState(true), 2);
  closure_34 = tmp20[1];
  const set1 = new Set();
  const tmp22 = callback2(React.useState(new Set()), 2);
  first4 = tmp22[0];
  closure_36 = tmp22[1];
  const tmp24 = callback2(React.useState(0), 2);
  first5 = tmp24[0];
  closure_38 = tmp24[1];
  const tmp26 = callback2(React.useState(null), 2);
  first6 = tmp26[0];
  closure_40 = tmp26[1];
  const tmp28 = callback2(React.useState(0), 2);
  const sum = importDefault(dependencyMap[26])({ renderHeader: true, renderSettingSearchResultItem: true }).insets.bottom + tmp28[0];
  sum1 = sum + importDefault(dependencyMap[12]).space.PX_16;
  sum2 = importDefault(dependencyMap[26])({ renderHeader: true, renderSettingSearchResultItem: true }).insets.bottom + importDefault(dependencyMap[12]).space.PX_16;
  let obj2 = arg1(dependencyMap[15]);
  sharedValue = obj2.useSharedValue(false);
  let obj3 = arg1(dependencyMap[15]);
  sharedValue1 = obj3.useSharedValue(0);
  const items3 = [first5, sum1, sharedValue1];
  callback1 = React.useCallback((required) => {
    const diff = first5 - sum1;
    const diff1 = diff - command(sectionName[13]).COLLAPSED_HEADER_HEIGHT;
    if (null != required) {
      if (required.required) {
        let current2 = ref2.current;
      } else {
        current2 = ref3.current;
      }
      const sum = ref.current[required.name] + current2;
      const diff2 = sum - command(sectionName[13]).COLLAPSED_HEADER_HEIGHT;
      const sum1 = sharedValue1.get() + diff1;
      if (diff2 < sharedValue1.get()) {
        const current3 = ref.current;
        if (null != current3) {
          let obj = {};
          const _Math = Math;
          obj.y = Math.max(0, diff2 - diff1 / 2);
          obj.animated = true;
          current3.scrollTo(obj);
        }
      }
    } else {
      const diff3 = ref4.current - diff1;
      if (sharedValue1.get() < 0) {
        const current = ref.current;
        if (null != current) {
          current.scrollTo({});
        }
      } else if (diff3 > 0) {
        if (sharedValue1.get() > diff3) {
          const current4 = ref.current;
          if (null != current4) {
            obj = { animated: true };
            current4.scrollToEnd(obj);
          }
        }
      }
    }
  }, items3);
  const items4 = [context.channel.guild_id, context.channel.id, first3];
  callback2 = React.useCallback((name, content) => {
    ref9.current[name.name] = content;
    let obj = {};
    const merged = Object.assign(first3);
    obj = { option: name, content, guildId: context.channel.guild_id, channelId: context.channel.id, allowEmptyValues: false, commandOrigin: command(sectionName[28]).CommandOrigin.APPLICATION_LAUNCHER };
    obj[name.name] = command(sectionName[27]).validateOptionContent(obj);
    callback3(obj);
    closure_19.current = true;
    closure_21.current = name.type;
  }, items4);
  tmp36 = importDefault(dependencyMap[29])(command);
  const items5 = [guild_id, command, , , , ];
  let id1;
  if (null != tmp36) {
    id1 = tmp36.id;
  }
  items5[2] = id1;
  items5[3] = tmp7;
  items5[4] = stateFromStores;
  items5[5] = context.channel.id;
  const effect1 = React.useEffect(() => {
    let id;
    if (null != command) {
      id = command.id;
    }
    let id1;
    if (null != tmp36) {
      id1 = tmp36.id;
    }
    if (id !== id1) {
      const command = [];
      const items = [];
      const context = items;
      let closure_2 = [];
      let closure_3 = {};
      closure_31.current = {};
      let tmp6 = null == command;
      if (!tmp6) {
        const options = command.options;
        tmp6 = null == options;
        const arr = options;
      }
      if (!tmp6) {
        const item = arr.forEach((required) => {
          let arr = required;
          if (true !== required.required) {
            if (null != closure_16) {
              if (closure_16.some((name) => name.name === name.name)) {
                arr = items.push(required);
                let obj = arr(closure_3[30]);
                obj = { option: required, prefilledValues: closure_16, guildId: closure_17, roles: closure_18 };
                closure_31.current[required.name] = obj.getInitialOptionValues(obj);
                let obj2 = arr(closure_3[27]);
                obj = { option: required, content: closure_31.current[required.name], guildId: closure_17, channelId: items.channel.id, allowEmptyValues: false, commandOrigin: arr(closure_3[28]).CommandOrigin.APPLICATION_LAUNCHER };
                closure_3[required.name] = obj2.validateOptionContent(obj);
              }
            }
            arr = arr.push(required);
          } else {
            arr2.push(required);
            const obj1 = { option: required, prefilledValues: closure_16, guildId: closure_17, roles: closure_18 };
            closure_31.current[required.name] = arr(closure_3[30]).getInitialOptionValues(obj1);
            const obj5 = arr(closure_3[30]);
            obj2 = { option: required, content: closure_31.current[required.name], guildId: closure_17, channelId: items.channel.id, allowEmptyValues: false, commandOrigin: arr(closure_3[28]).CommandOrigin.APPLICATION_LAUNCHER };
            closure_3[required.name] = arr(closure_3[27]).validateOptionContent(obj2);
            const obj7 = arr(closure_3[27]);
          }
        });
      }
      command(closure_3[31]).batchUpdates(() => {
        callback5(closure_3);
        callback(closure_2);
        const items = [...closure_1];
        callback2(items);
        callback3(items);
        callback4(closure_0);
        callback6(new Set());
      });
      const current = ref8.current;
      current.clear();
      const item1 = items.forEach((name) => {
        const current = ref.current;
        return current.add(name.name);
      });
      const current2 = closure_29.current;
      current2.clear();
      const item2 = items.forEach((name) => {
        const current = ref2.current;
        return current.add(name.name);
      });
      const obj = command(closure_3[31]);
    }
  }, items5);
  let obj4 = arg1(dependencyMap[32]);
  commandContext = obj4.useCommandContext(context);
  const items6 = [callback1, chatInputRef, command, commandContext, sharedValue, keyboardCloseReasonRef, onCommandExecuted, first3, sectionName];
  callback3 = React.useCallback(() => {
    let rootCommand;
    if (null != command) {
      const firstInvalidOption = command(sectionName[33]).getFirstInvalidOption(command, first3);
      if (null != firstInvalidOption) {
        const _Set = Set;
        const _Object = Object;
        const set = new Set(Object.keys(first3));
        callback5(set);
        callback1(firstInvalidOption);
        let obj = command(sectionName[25]);
        obj = {};
        ({ applicationId: obj2.application_id, rootCommand } = command);
        let id;
        if (null != rootCommand) {
          id = rootCommand.id;
        }
        obj.command_id = id;
        const type = firstInvalidOption.type;
        let num3 = 3;
        if (null != type) {
          num3 = type;
        }
        obj.argument_type = command(sectionName[34]).ApplicationCommandOptionType[num3];
        obj.is_required = firstInvalidOption.required;
        obj.trackWithMetadata(set.APPLICATION_COMMAND_VALIDATION_FAILED, obj);
      } else {
        callback4(false);
        const result = sharedValue.set(true);
        closure_22.current = true;
        obj = { command };
        const obj4 = command(sectionName[35]);
        obj.optionValues = command(sectionName[36]).parseOptionValuesForSend(commandContext.channel, command, ref9.current);
        obj.context = commandContext;
        obj.sectionName = sectionName;
        obj.commandOrigin = command(sectionName[28]).CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW;
        const result1 = obj4.executeAppLauncherCommand(obj);
        const obj6 = command(sectionName[36]);
        result1.then(() => {
          const result = callback(closure_3[18]).triggerHapticFeedback(callback(closure_3[18]).HapticFeedbackTypes.IMPACT_MEDIUM);
          const timerId = setTimeout(() => {
            closure_8.current = callback(closure_3[24]).AppLauncherKeyboardCloseReason.COMMAND;
            const current = ref.current;
            if (null != current) {
              current.closeCustomKeyboard();
            }
            if (null != callback2) {
              callback2();
            }
          }, 300);
        }).catch(() => {
          callback2(true);
          const result = closure_43.set(false);
        });
        const nextPromise = result1.then(() => {
          const result = callback(closure_3[18]).triggerHapticFeedback(callback(closure_3[18]).HapticFeedbackTypes.IMPACT_MEDIUM);
          const timerId = setTimeout(() => {
            closure_8.current = callback(closure_3[24]).AppLauncherKeyboardCloseReason.COMMAND;
            const current = ref.current;
            if (null != current) {
              current.closeCustomKeyboard();
            }
            if (null != callback2) {
              callback2();
            }
          }, 300);
        });
      }
      const obj3 = command(sectionName[33]);
    }
  }, items6);
  callback3(true, true);
  // CreateGeneratorClosureLongIndex (0x67)
  const items7 = [installOnDemand, command, context, callback3, sectionName, analyticsLocation, entrypoint];
  callback4 = React.useCallback(callback(ref(context, true, true)), items7);
  height = importDefault(dependencyMap[38])({ ignoreKeyboard: true }).height;
  maximum = importDefault(dependencyMap[39])().maximum;
  let obj5 = arg1(dependencyMap[24]);
  bottomSheetPosition = obj5.useRequiredAppLauncherContext().bottomSheetPosition;
  let obj6 = arg1(dependencyMap[15]);
  function tt() {
    let obj = {};
    obj = { translateY: -bottomSheetPosition.get() - height + maximum - sum2 };
    const items = [obj];
    obj.transform = items;
    return obj;
  }
  tt.__closure = { bottomSheetPosition, screenHeight: height, maxHeight: maximum, footerStickyInsetBottom: sum2 };
  tt.__workletHash = 3470381437387;
  tt.__initData = closure_26;
  const items8 = [first4, callback1];
  const animatedStyle = obj6.useAnimatedStyle(tt);
  closure_53 = React.useCallback((name) => {
    first4.delete(name.name);
    callback5(new Set(first4));
    callback1(name);
  }, items8);
  const items9 = [first4, ];
  let name;
  if (null != first6) {
    name = first6.name;
  }
  items9[1] = name;
  callback5 = React.useCallback((name) => {
    first4.add(name.name);
    callback5(new Set(first4));
    name = undefined;
    if (null != first6) {
      name = first6.name;
    }
    if (name.name === name) {
      callback7(null);
    }
  }, items9);
  const items10 = [command];
  callback6 = React.useCallback((arg0) => {
    if (null != command) {
      let obj = command(sectionName[25]);
      obj = {};
      ({ applicationId: obj2.application_id, id: obj2.command_id } = command);
      ({ name: obj2.option_name, type: obj2.option_type } = arg0);
      obj.trackWithMetadata(tmp7.APPLICATION_COMMAND_OPTION_PRESSED, obj);
    }
  }, items10);
  const items11 = [chatInputRef, context.channel, callback5, callback6];
  closure_56 = React.useCallback((option) => {
    const command = option;
    function onAttachFileParams(FILE_ATTACHMENT) {
      const obj = {
        channel: obj.channel,
        uploadLimit: 1,
        extensions: allowedExtensions,
        onDismissKeyboard() {
          return arg0(closure_3[42]).hideMediaKeyboardActionSheet();
        },
        onRestoreKeyboard: closure_17,
        onSelectFiles(arg0) {
          if (length.length > 0) {
            const items = [arg0(length[43]).getFileFromUploadItem(arg0[0]).filename];
            if (!callback(items)) {
              return callback2();
            }
            const obj = arg0(length[43]);
          }
          const result = arg0(length[40]).addAttachmentForCommand(channel.channel.id, closure_10, arg0[0], channel, arg0);
        }
      };
      return obj;
    }
    let obj = { target: ref5.APP_LAUNCHER, option };
    const context = obj;
    const mediaKeyboardDraftType = command(sectionName[40]).getMediaKeyboardDraftType(obj.target);
    const installOnDemand = mediaKeyboardDraftType;
    let fileTypes;
    if (option.type === command(sectionName[34]).ApplicationCommandOptionType.ATTACHMENT) {
      fileTypes = option.fileTypes;
    }
    const obj2 = command(sectionName[40]);
    const fileTypeFiltering = command(sectionName[41]).getFileTypeFiltering(fileTypes);
    const allowedExtensions = fileTypeFiltering.allowedExtensions;
    const sectionName = allowedExtensions;
    ({ validateFilenames: closure_4, showInvalidFileTypeAlert: closure_5 } = fileTypeFiltering);
    callback6(option);
    const obj3 = command(sectionName[41]);
    const result = command(sectionName[44]).dismissGlobalKeyboard();
    if (fileTypeFiltering.mediaFilesAllowed) {
      let tmp6Result = tmp6(tmp7[42]);
      obj = { channel: context.channel, draftType: mediaKeyboardDraftType, extensions: allowedExtensions, uploadLimit: 1, disableWhenReachedLimit: false };
      const items = [option.name];
      obj.includedUploadIds = items;
      obj.onAttachPress = function onAttachPress() {
        let obj = arg0(allowedExtensions[40]);
        obj = {};
        const merged = Object.assign(onAttachFileParams(arg0(allowedExtensions[45]).UploadOrigin.FILE_ATTACHMENT));
        obj.handleAttachFile(obj);
      };
      obj.onPressCamera = function onPressCamera(arg0) {
        let obj = arg0(allowedExtensions[40]);
        obj = {};
        const merged = Object.assign(onAttachFileParams(arg0(allowedExtensions[45]).UploadOrigin.IMAGE_PICKER));
        obj["previewType"] = arg0;
        obj.handleCameraDialog(obj);
      };
      obj.onPressItem = function onPressItem(item) {
        const obj = item(allowedExtensions[42]);
        const result = obj.hideMediaKeyboardActionSheet();
        const result1 = item(allowedExtensions[40]).mediaNodeToUploadItem(item.item);
        if (allowedExtensions.length > 0) {
          const items = [item(allowedExtensions[43]).getFileFromUploadItem(result1).filename];
          if (!callback(items)) {
            return callback2();
          }
          const obj3 = item(allowedExtensions[43]);
        }
        const obj2 = item(allowedExtensions[40]);
        const result2 = item(allowedExtensions[40]).addAttachmentForCommand(item.channelId, closure_10, result1, obj, item(allowedExtensions[45]).UploadOrigin.IMAGE_PICKER);
      };
      obj.onViewAll = function onViewAll() {
        let obj = arg0(allowedExtensions[40]);
        obj = {};
        const merged = Object.assign(onAttachFileParams(arg0(allowedExtensions[45]).UploadOrigin.IMAGE_PICKER));
        obj["draftType"] = mediaKeyboardDraftType;
        obj.handleViewAllDialog(obj);
      };
      obj.onManageLimited = function onManageLimited() {
        let obj = arg0(allowedExtensions[40]);
        obj = { onDismissKeyboard: arg0(allowedExtensions[42]).hideMediaKeyboardActionSheet, onRestoreKeyboard: closure_17 };
        const result = obj.handleLimitedPickerDialog(obj);
      };
      obj.onClose = function onClose() {
        callback3(arg0);
      };
      obj.onBack = function onBack() {
        const result = arg0(allowedExtensions[42]).hideMediaKeyboardActionSheet();
      };
      const result1 = tmp6Result.showMediaKeyboardActionSheet(obj);
    } else {
      tmp6Result = tmp6(tmp7[40]);
      obj = {};
      const merged = Object.assign(onAttachFileParams(tmp6(tmp7[45]).UploadOrigin.FILE_ATTACHMENT));
      tmp6Result.handleAttachFile(obj);
    }
  }, items11);
  const tmp49 = importDefault(dependencyMap[46])(() => {
    callback1(first6);
  });
  setLatch = tmp49.setLatch;
  tryCallback = tmp49.tryCallback;
  const items12 = [tryCallback];
  callback7 = React.useCallback((nativeEvent) => {
    closure_13.current = nativeEvent.nativeEvent.layout.y;
  }, []);
  const items13 = [first6, setLatch];
  const callback8 = React.useCallback((nativeEvent) => {
    closure_14.current = nativeEvent.nativeEvent.layout.y;
    tryCallback();
  }, items12);
  closure_59 = React.useCallback((nativeEvent, name) => {
    let tmp = null == ref.current[name.name];
    ref.current[name.name] = nativeEvent.nativeEvent.layout.y;
    if (tmp) {
      name = undefined;
      if (null != first6) {
        name = first6.name;
      }
      tmp = name === name.name;
    }
    if (tmp) {
      setLatch(true);
    }
  }, items13);
  const items14 = [first2, first1, callback2, guild_id, stateFromStores, , ];
  let applicationId;
  if (null != command) {
    applicationId = command.applicationId;
  }
  items14[5] = applicationId;
  let id2;
  if (null != command) {
    id2 = command.id;
  }
  items14[6] = id2;
  const items15 = [first2, first1, first3, first4, , , ];
  let name1;
  const callback9 = React.useCallback((name) => {
    const current = ref8.current;
    current.add(name.name);
    const items = [...closure_27, name];
    callback(items);
    callback2(first1.filter((name) => {
      const current = ref.current;
      return !current.has(name.name);
    }));
    callback7(name);
    let obj = command(sectionName[30]);
    obj = { option: name, prefilledValues: [], guildId: guild_id, roles: stateFromStores };
    callback2(name, obj.getInitialOptionValues(obj));
    closure_19.current = true;
    closure_21.current = name.type;
    obj = {};
    let applicationId;
    if (null != command) {
      applicationId = command.applicationId;
      const tmp7 = command;
    }
    obj.application_id = applicationId;
    let id;
    if (null != command) {
      id = command.id;
    }
    obj.command_id = id;
    ({ name: obj4.option_name, type: obj4.option_type } = name);
    command(sectionName[25]).trackWithMetadata(tmp7.APPLICATION_COMMAND_OPTIONAL_OPTION_ADDED, obj);
  }, items14);
  if (null != first6) {
    name1 = first6.name;
  }
  items15[4] = name1;
  let applicationId1;
  if (null != command) {
    applicationId1 = command.applicationId;
  }
  items15[5] = applicationId1;
  let id3;
  if (null != command) {
    id3 = command.id;
  }
  items15[6] = id3;
  closure_60 = React.useCallback((name) => {
    const command = name;
    const current = ref8.current;
    current.delete(name.name);
    const current2 = closure_29.current;
    current2.delete(name.name);
    callback(first2.filter((name) => name.name !== name.name));
    callback2(first1.filter((name) => {
      const current = ref.current;
      return !current.has(name.name);
    }));
    delete r2[r1];
    delete r2[r1];
    delete r2[r1];
    let obj = {};
    const merged = Object.assign(first3);
    callback3(obj);
    first4.delete(name.name);
    callback5(new Set(first4));
    name = undefined;
    if (null != first6) {
      name = first6.name;
    }
    if (name.name === name) {
      callback7(null);
    }
    const set = new Set(first4);
    obj = {};
    let applicationId;
    if (null != command) {
      applicationId = command.applicationId;
    }
    obj.application_id = applicationId;
    let id;
    if (null != command) {
      id = command.id;
    }
    obj.command_id = id;
    ({ name: obj3.option_name, type: obj3.option_type } = name);
    command(sectionName[25]).trackWithMetadata(tmp7.APPLICATION_COMMAND_OPTIONAL_OPTION_REMOVED, obj);
  }, items15);
  const callback10 = React.useCallback((nativeEvent) => callback6(nativeEvent.nativeEvent.layout.height), []);
  let tmp63 = first1.length > 0;
  let tmp64 = tmp62;
  const callback11 = React.useCallback((arg0, current) => {
    closure_15.current = current;
    return current;
  }, []);
  if (first.length <= 0) {
    tmp64 = tmp63;
  }
  let prefilledOptions1;
  if (null != preSelectedCommand) {
    prefilledOptions1 = preSelectedCommand.prefilledOptions;
  }
  closure_61 = null != prefilledOptions1;
  if (entrypoint === arg1(dependencyMap[47]).AppLauncherEntrypoint.VOICE) {
    let BottomSheetScrollView = entrypoint;
  } else {
    BottomSheetScrollView = arg1(dependencyMap[48]).BottomSheetScrollView;
  }
  if (loading) {
    tmp = callback5;
    tmp = closure_30;
    let tmp71Result = callback5(closure_30, {});
  } else if (null == command) {
    tmp = callback5;
    tmp = closure_31;
    obj = { onPressBack: callback };
    tmp71Result = callback5(closure_31, obj);
  } else if (hasPermissions) {
    obj = {};
    obj1 = { ref };
    const items16 = [tmp.optionsContainer];
    obj1.contentContainerStyle = items16;
    obj2 = { bottom: sum1 };
    obj1.scrollIndicatorInsets = obj2;
    obj1.scrollToOverflowEnabled = true;
    obj1.onContentSizeChange = callback11;
    obj1.preserveScrollMomentum = true;
    obj1.lockableScrollableContentOffsetY = sharedValue1;
    obj1.keyboardShouldPersistTaps = "handled";
    obj1.contentInsetAdjustmentBehavior = "never";
    obj1.automaticallyAdjustContentInsets = false;
    obj1.onLayout = callback10;
    obj1.automaticallyAdjustsScrollIndicatorInsets = false;
    obj3 = { style: tmp.commandNameContainer };
    obj4 = { INTEGRATION_CREATE: 58, ConstraintReasonCode: 85, children: command.displayName };
    const items17 = [callback5(arg1(dependencyMap[49]).Text, obj4), ];
    obj5 = { INTEGRATION_CREATE: null, ConstraintReasonCode: "153e24032a5a8790888aef41caaf4b2c", children: command.displayDescription };
    items17[1] = callback5(arg1(dependencyMap[49]).Text, obj5);
    obj3.children = items17;
    const items18 = [callback6(tmp2, obj3), , , , , ];
    let tmp79 = tmp62;
    if (tmp62) {
      obj6 = {
        style: tmp.requiredOptionsContainer,
        onLayout: callback7,
        children: first.map((name) => {
              const obj = { option: name };
              if (0 === arg1) {
                if (!closure_61) {
                  let NONE = ref3.FIRST_REQUIRED_OPTION;
                }
                obj.autoFocusType = NONE;
                obj.editedOptions = first4;
                obj.onOptionViewLayout = closure_59;
                obj.onStartEditing = closure_53;
                obj.onEndEditing = callback5;
                obj.onOptionValueChange = callback2;
                obj.onPressOption = callback6;
                obj.onPressAttachmentOption = closure_56;
                obj.channel = context.channel;
                obj.optionValidationResults = first3;
                obj.setFocusedOption = closure_40;
                obj.command = command;
                obj.optionValues = closure_31;
                return closure_20(tmp2, obj, name.name);
              }
              NONE = ref3.NONE;
            })
      };
      tmp79 = callback5(tmp2, obj6);
    }
    items18[1] = tmp79;
    let tmp82 = !tmp62;
    if (!tmp62) {
      tmp82 = tmp64;
    }
    if (tmp82) {
      const obj7 = { style: tmp.noRequiredOptionsCalloutContainer };
      const obj8 = {};
      const obj9 = { textAlign: "center" };
      obj8.style = obj9;
      const intl = arg1(dependencyMap[22]).intl;
      obj8.children = intl.string(arg1(dependencyMap[22]).t.HS2KtY);
      obj7.children = callback5(arg1(dependencyMap[49]).Text, obj8);
      tmp82 = callback5(tmp2, obj7);
    }
    items18[2] = tmp82;
    let tmp88 = !tmp64;
    if (!tmp64) {
      const obj10 = { style: tmp.noOptionCalloutContainer };
      const obj11 = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>" };
      const obj12 = { textAlign: "center" };
      obj11.style = obj12;
      const intl2 = arg1(dependencyMap[22]).intl;
      obj11.children = intl2.string(arg1(dependencyMap[22]).t.G8lEFB);
      obj10.children = callback5(arg1(dependencyMap[49]).Text, obj11);
      tmp88 = callback5(tmp2, obj10);
    }
    items18[3] = tmp88;
    if (tmp63) {
      const obj13 = {};
      const obj14 = { style: tmp.optionalOptionsSectionTitle };
      const intl3 = arg1(dependencyMap[22]).intl;
      obj14.children = intl3.string(arg1(dependencyMap[22]).t.5C107K);
      const items19 = [callback5(arg1(dependencyMap[49]).Text, obj14), , ];
      tmp = importDefault;
      const obj15 = {
        style: tmp.optionalOptionsContainer,
        onLayout: callback8,
        collapsable: false,
        children: first2.map((option) => {
              const obj = {};
              const items = [closure_20.optionalOptionsChild, , ];
              let optionalOptionsFirstChild = 0 === arg1;
              if (optionalOptionsFirstChild) {
                optionalOptionsFirstChild = tmp.optionalOptionsFirstChild;
              }
              items[1] = optionalOptionsFirstChild;
              let optionalOptionsLastChild = arg1 === first2.length - 1;
              if (optionalOptionsLastChild) {
                optionalOptionsLastChild = tmp.optionalOptionsLastChild;
              }
              items[2] = optionalOptionsLastChild;
              obj.style = items;
              obj.option = option;
              const current = closure_29.current;
              obj.autoFocusType = current.has(option.name) ? closure_14.NONE : closure_14.OPTIONAL_OPTION_ADDED;
              obj.onDismiss = closure_60;
              obj.editedOptions = first4;
              obj.onOptionViewLayout = closure_59;
              obj.onStartEditing = closure_53;
              obj.onEndEditing = callback5;
              obj.onOptionValueChange = callback2;
              obj.onPressOption = callback6;
              obj.onPressAttachmentOption = closure_56;
              obj.channel = context.channel;
              obj.optionValidationResults = first3;
              obj.setFocusedOption = closure_40;
              obj.command = command;
              obj.optionValues = closure_31;
              const current2 = closure_29.current;
              obj.isPreSelectedOption = current2.has(option.name);
              return closure_20(context(sectionName[50]), obj, option.name);
            })
      };
      items19[1] = callback5(importDefault(dependencyMap[15]).View, obj15);
      tmp = callback5;
      const obj16 = { layout: arg1(dependencyMap[51]).LayoutAnimation, collapsable: false };
      tmp = callback5;
      const obj17 = { style: tmp.optionalOptionList, options: tmp17[0], onSelectOption: callback9 };
      obj16.children = callback5(importDefault(dependencyMap[52]), obj17);
      items19[2] = callback5(importDefault(dependencyMap[15]).View, obj16);
      obj13.children = items19;
      tmp63 = callback6(closure_22, obj13);
    }
    items18[4] = tmp63;
    tmp = callback5;
    tmp = arg1;
    tmp = dependencyMap;
    const obj18 = { size: sum1 };
    items18[5] = callback5(arg1(dependencyMap[53]).Spacer, obj18);
    obj1.children = items18;
    const items20 = [callback6(BottomSheetScrollView, obj1), ];
    tmp = callback5;
    tmp = AppLauncherCommandViewFooter;
    const obj19 = { enableSubmit: tmp20[0], onSubmit: callback4, animatedStyle, onHeightChange: tmp28[1], isSending: sharedValue, footerStickyInsetBottom: sum2 };
    items20[1] = callback5(AppLauncherCommandViewFooter, obj19);
    obj.children = items20;
    tmp71Result = tmp71(closure_22, obj);
    const tmp72 = closure_22;
  } else {
    const obj20 = { command, onPressBack: callback };
    tmp71Result = callback5(NoPermsState, obj20);
  }
  const obj21 = { style: tmp.container };
  const items21 = [tmp71Result, callback5(arg1(dependencyMap[13]).AppLauncherCommandViewHeader, { command, onPressBack: callback, scrollOffsetY: sharedValue1, section })];
  obj21.children = items21;
  return callback6(tmp2, obj21);
}
function AppLauncherCommandView(command) {
  let analyticsLocation;
  let command2;
  let context;
  let expandBottomSheet;
  let installOnDemand;
  let loading;
  let onCommandExecuted;
  let preSelectedCommand;
  let section;
  let sectionDescriptor;
  let sectionName;
  command = command.command;
  const arg1 = command;
  ({ context, section, preSelectedCommand, analyticsLocation, sectionName, expandBottomSheet } = command);
  const importDefault = expandBottomSheet;
  let closure_4;
  let closure_5;
  ({ installOnDemand, onCommandExecuted } = command);
  importDefault(dependencyMap[54])(null != context.channel, "channel should not be null");
  const tmp2 = importDefault(dependencyMap[55])();
  const importAll = tmp2;
  const tmp3 = function usePreSelectedCommand(channel, preSelectedCommand, analyticsLocation, sectionName) {
    let context;
    let isImpersonating;
    let roleIds;
    let userId;
    let command = analyticsLocation;
    const expandBottomSheet = sectionName;
    let obj = tmp2(loading[56]);
    obj = { channel, type: "channel" };
    let commandId;
    if (null != preSelectedCommand) {
      commandId = preSelectedCommand.commandId;
    }
    command = obj.useCommand(obj, commandId);
    command = command.command;
    const application = command.application;
    obj = { channel, type: "channel" };
    const tmp3 = callback(obj, true, true);
    const tmp4 = callback2(true, true);
    let tmp5 = null;
    if (null != application) {
      const result = tmp4.result;
      let descriptor;
      if (null != result) {
        if (null != result.sections[application.id]) {
          descriptor = tmp7.descriptor;
        }
      }
      if (null == descriptor) {
        const result2 = tmp3.result;
        let descriptor1;
        if (null != result2) {
          descriptor1 = result2.sections[application.id].descriptor;
        }
        descriptor = descriptor1;
      }
      tmp5 = descriptor;
    }
    const loading = tmp5;
    let tmp9 = null != application;
    if (tmp9) {
      const result3 = tmp3.result;
      let tmp10;
      if (null != result3) {
        tmp10 = result3.sections[application.id];
      }
      tmp9 = null != tmp10;
    }
    let closure_4 = React.useRef(false);
    const items = [command, tmp5, analyticsLocation, sectionName];
    const effect = React.useEffect(() => {
      let current = null == command;
      if (!current) {
        current = null == tmp5;
      }
      if (!current) {
        current = ref.current;
      }
      if (!current) {
        let obj = arg2(tmp5[57]);
        obj = { command, triggerSection: arg2(command[57]).getCommandTriggerSection(command), location: arg2, sectionName: arg3 };
        obj.trackCommandSelected(obj);
        ref.current = true;
        const obj3 = arg2(command[57]);
      }
    }, items);
    let obj3 = command(loading[58]);
    const items1 = [command(loading[34]).ApplicationCommandType.CHAT];
    const permissionContext = obj3.usePermissionContext(channel, items1);
    if (null != tmp5) {
      if (null != command) {
        ({ context, userId, roleIds, isImpersonating } = permissionContext);
        let guild_id;
        if (null != context) {
          guild_id = context.guild_id;
        }
        let allowedForUser = null;
        if (null != guild_id) {
          const obj5 = tmp2(loading[59]);
          allowedForUser = obj5.computeAllowedForUser(tmp5.permissions, context.guild_id, userId, roleIds, isImpersonating);
        }
        let guild_id1;
        if (null != context) {
          guild_id1 = context.guild_id;
        }
        let allowedForChannel = null;
        if (null != guild_id1) {
          allowedForChannel = tmp2(loading[59]).computeAllowedForChannel(tmp5.permissions, context, context.guild_id);
          const obj6 = tmp2(loading[59]);
        }
        const obj1 = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, commandBotId: tmp5.botId, isGuildInstalled: tmp9 };
        const obj2 = { command, sectionDescriptor: tmp5 };
        const obj7 = tmp2(loading[59]);
        const hasAccessResult = tmp2(loading[59]).hasAccess(command, permissionContext, obj1);
        obj2.hasPermission = tmp2(loading[59]).hasAccess(command, permissionContext, obj1) === tmp2(loading[59]).HasAccessResult.ALLOWED && permissionContext.hasBaseAccessPermissions;
        obj2.loading = tmp4.fetchState.fetching || tmp3.fetchState.fetching;
        return obj2;
      }
    }
    obj3 = { <string:2585612720>: false, <string:2120533601>: false, <string:1371634271>: false, loading: tmp4.fetchState.fetching || tmp3.fetchState.fetching };
    return obj3;
  }(context.channel, preSelectedCommand, analyticsLocation, sectionName);
  ({ command: command2, sectionDescriptor, loading } = tmp3);
  const dependencyMap = loading;
  if (null != command) {
    command2 = command;
  }
  if (null != section) {
    sectionDescriptor = section;
  }
  let obj = arg1(dependencyMap[24]);
  const bottomSheetExpandReasonRef = obj.useRequiredAppLauncherContext().bottomSheetExpandReasonRef;
  closure_4 = bottomSheetExpandReasonRef;
  let tmp4 = null != command2;
  if (tmp4) {
    let options = command2.options;
    if (null == options) {
      options = [];
    }
    tmp4 = options.length > 0;
  }
  closure_5 = tmp4;
  const items = [command, tmp4, loading, tmp2, bottomSheetExpandReasonRef, expandBottomSheet];
  const effect = React.useEffect(() => {
    let tmp = tmp2;
    if (tmp2) {
      let tmp2 = tmp4;
      if (!tmp4) {
        let tmp4 = !loading;
        if (tmp4) {
          tmp4 = null == command;
        }
        tmp2 = tmp4;
      }
      tmp = tmp2;
    }
    if (tmp) {
      bottomSheetExpandReasonRef.current = command(loading[24]).AppLauncherBottomSheetExpandReason.COMMAND_VIEW;
      if (null != expandBottomSheet) {
        expandBottomSheet();
      }
    }
  }, items);
  obj = {};
  let tmp8;
  if (null != command2) {
    tmp8 = command2;
  }
  obj.command = tmp8;
  obj.context = context;
  let tmp9;
  if (null != sectionDescriptor) {
    tmp9 = sectionDescriptor;
  }
  obj.section = tmp9;
  let tmp10 = null;
  if (null != preSelectedCommand) {
    tmp10 = preSelectedCommand;
  }
  obj.preSelectedCommand = tmp10;
  obj.loading = loading;
  obj.hasPermissions = null != command || tmp3.hasPermission;
  obj.installOnDemand = installOnDemand;
  obj.sectionName = sectionName;
  obj.analyticsLocation = analyticsLocation;
  obj.onCommandExecuted = onCommandExecuted;
  return closure_20(AppLauncherCommandViewInner, obj);
}
function LoadingState() {
  return callback5(closure_7, { style: {}, children: callback5(closure_8, { size: "large" }) });
}
function NotFoundState(onPress) {
  const tmp = callback7();
  let obj = arg1(dependencyMap[30]);
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(arg1(dependencyMap[47]).AppLauncherEmptyStateType.COMMAND_NOT_FOUND);
  obj = { style: tmp.emptyStateContainer };
  obj = { style: tmp.emptyState, lightSource: importDefault(dependencyMap[60]), darkSource: importDefault(dependencyMap[61]) };
  const intl = arg1(dependencyMap[22]).intl;
  obj.title = intl.string(arg1(dependencyMap[22]).t.pX/qb9);
  const intl2 = arg1(dependencyMap[22]).intl;
  obj.body = intl2.string(arg1(dependencyMap[22]).t.exOQVY);
  const obj1 = { onPress: onPress.onPressBack, pillStyle: tmp.failureStateButtonPill, style: tmp.failureStateButtonWrapper };
  const intl3 = arg1(dependencyMap[22]).intl;
  obj1.text = intl3.string(arg1(dependencyMap[22]).t./g10LC);
  obj.children = callback5(arg1(dependencyMap[21]).BaseTextButton, obj1);
  obj.children = callback5(arg1(dependencyMap[53]).EmptyState, obj);
  return callback5(closure_7, obj);
}
function NoPermsState(command) {
  command = command.command;
  const tmp = callback7();
  let obj = arg1(dependencyMap[30]);
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(arg1(dependencyMap[47]).AppLauncherEmptyStateType.COMMAND_NO_PERMISSIONS);
  obj = { style: tmp.emptyStateContainer };
  obj = { style: tmp.commandNameContainer };
  const obj1 = { INTEGRATION_CREATE: 58, ConstraintReasonCode: 85, children: command.displayName };
  const items = [callback5(arg1(dependencyMap[49]).Text, obj1), ];
  const obj2 = { INTEGRATION_CREATE: null, ConstraintReasonCode: "153e24032a5a8790888aef41caaf4b2c", children: command.displayDescription };
  items[1] = callback5(arg1(dependencyMap[49]).Text, obj2);
  obj.children = items;
  const items1 = [callback6(closure_7, obj), ];
  const obj3 = { style: tmp.emptyState, lightSource: importDefault(dependencyMap[62]), darkSource: importDefault(dependencyMap[63]) };
  const intl = arg1(dependencyMap[22]).intl;
  obj3.title = intl.string(arg1(dependencyMap[22]).t.TzufcR);
  const intl2 = arg1(dependencyMap[22]).intl;
  obj3.body = intl2.string(arg1(dependencyMap[22]).t.I/O+A1);
  const obj4 = { onPress: command.onPressBack, pillStyle: tmp.failureStateButtonPill, style: tmp.failureStateButtonWrapper };
  const intl3 = arg1(dependencyMap[22]).intl;
  obj4.text = intl3.string(arg1(dependencyMap[22]).t./g10LC);
  obj3.children = callback5(arg1(dependencyMap[21]).BaseTextButton, obj4);
  items1[1] = callback5(arg1(dependencyMap[53]).EmptyState, obj3);
  obj.children = items1;
  return callback6(closure_7, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
({ View: closure_7, ActivityIndicator: closure_8, ScrollView: closure_9 } = arg1(dependencyMap[3]));
let closure_10 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ useContextIndexState: closure_11, useUserIndexState: closure_12 } = arg1(dependencyMap[5]));
let closure_13 = importDefault(dependencyMap[6]);
const tmp3 = arg1(dependencyMap[5]);
({ AppLauncherOptionAutoFocusType: closure_14, useAppLauncherNavigation: closure_15, DEFAULT_CONTENT_PADDING } = arg1(dependencyMap[7]));
const tmp4 = arg1(dependencyMap[7]);
({ AnalyticEvents: closure_16, NOOP: closure_17, VerticalGradient: closure_18 } = arg1(dependencyMap[8]));
const MediaKeyboardTarget = arg1(dependencyMap[9]).MediaKeyboardTarget;
const tmp5 = arg1(dependencyMap[8]);
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = arg1(dependencyMap[10]));
let obj = arg1(dependencyMap[11]);
obj = {};
obj = { height: "100%", backgroundColor: importDefault(dependencyMap[12]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj.container = obj;
const obj1 = { paddingTop: arg1(dependencyMap[13]).EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + importDefault(dependencyMap[12]).space.PX_4, paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: DEFAULT_CONTENT_PADDING, backgroundColor: importDefault(dependencyMap[12]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj.optionsContainer = obj1;
obj.requiredOptionsContainer = { backgroundColor: false, borderRadius: false };
obj.optionalOptionsContainer = {};
obj.optionalOptionsChild = { marginBottom: 24 };
obj.optionalOptionsFirstChild = { marginTop: 12 };
obj.optionalOptionsLastChild = { marginBottom: 12 };
obj.footerContainer = { paddingHorizontal: DEFAULT_CONTENT_PADDING };
obj.submitButton = { "Bool(false)": 10, "Bool(false)": 10 };
obj.optionalOptionsSectionTitle = { marginTop: 36 };
obj.optionalOptionList = { marginTop: 12 };
const obj2 = { borderRadius: importDefault(dependencyMap[12]).radii.lg, overflow: 1912603027, flex: 128, flexDirection: 128, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_SURFACE_HIGH };
obj.noRequiredOptionsCalloutContainer = obj2;
const tmp6 = arg1(dependencyMap[10]);
obj.noOptionCalloutContainer = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[12]).radii.lg };
obj.emptyState = {};
const obj4 = { paddingTop: arg1(dependencyMap[13]).EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + importDefault(dependencyMap[12]).space.PX_4, flex: 1 };
obj.emptyStateContainer = obj4;
obj.failureStateButtonWrapper = {};
const obj3 = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[12]).radii.lg };
obj.failureStateButtonPill = { borderRadius: importDefault(dependencyMap[12]).radii.xxl };
obj.commandNameContainer = { "Null": "4.8.0", "Null": null, "Null": 60 };
const obj5 = { borderRadius: importDefault(dependencyMap[12]).radii.xxl };
obj.linearGradient = { backgroundColor: importDefault(dependencyMap[12]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
let closure_23 = obj.createStyles(obj);
let closure_24 = { code: "function AppLauncherCommandViewScreenTsx1(){const{shouldReduceMotion,isPressedDown,withDelay,withTiming,timingStandard,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,isSending}=this.__closure;if(shouldReduceMotion)return{};if(isPressedDown){return{opacity:1,transform:[{translateX:withDelay(100,withTiming(-4,timingStandard,'respect-motion-settings',function(){return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}))}]};}return{opacity:withTiming(isSending.get()?0:1,timingStandard),transform:[{translateX:withTiming(isSending.get()?100:0,timingStandard)}]};}" };
let closure_25 = { code: "function AppLauncherCommandViewScreenTsx2(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}" };
let closure_26 = { code: "function AppLauncherCommandViewScreenTsx3(){const{bottomSheetPosition,screenHeight,maxHeight,footerStickyInsetBottom}=this.__closure;const animatedSheetOffset=bottomSheetPosition.get()-screenHeight+maxHeight;return{transform:[{translateY:-animatedSheetOffset-footerStickyInsetBottom}]};}" };
const obj6 = { backgroundColor: importDefault(dependencyMap[12]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
const result = arg1(dependencyMap[64]).fileFinishedImporting("modules/app_launcher/native/screens/command_view/AppLauncherCommandViewScreen.tsx");

export default function AppLauncherCommandViewScreen(route) {
  const context = route.route.params.context;
  let tmp9 = null;
  if (null != context) {
    const obj = { command: tmp, context, section: tmp2, preSelectedCommand: tmp3, installOnDemand: tmp5, sectionName: tmp6, analyticsLocation: tmp4, expandBottomSheet: tmp7, onCommandExecuted: tmp8 };
    tmp9 = callback5(AppLauncherCommandView, obj);
  }
  return tmp9;
};
