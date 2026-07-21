// Module ID: 11090
// Function ID: 86220
// Name: ChatInputScrimGradient
// Dependencies: []

// Module 11090 (ChatInputScrimGradient)
function ChatInputScrimGradient(scrimBase) {
  let gradientHeight;
  let inline;
  ({ gradientHeight, inline } = scrimBase);
  if (inline === undefined) {
    inline = false;
  }
  scrimBase = scrimBase.scrimBase;
  let obj = arg1(dependencyMap[23]);
  let token = obj.useToken(importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  if (null != gradientHeight) {
    token = gradientHeight;
  }
  let obj1 = arg1(dependencyMap[24]);
  const hex2rgbResult = obj1.hex2rgb(scrimBase, 1);
  let tmp3 = scrimBase;
  if (null != hex2rgbResult) {
    tmp3 = hex2rgbResult;
  }
  let obj2 = arg1(dependencyMap[24]);
  const hex2rgbResult1 = obj2.hex2rgb(scrimBase, 0);
  let str = "transparent";
  if (null != hex2rgbResult1) {
    str = hex2rgbResult1;
  }
  obj = {};
  obj = { o: "trackAverageRenderTimeForOffsetProjection", concat: "WebsiteLink", o: "<string:4235330048>", borderRadius: "<string:218103807>", position: "<string:1895825408>" };
  if (inline) {
    let result = tmp7;
  } else {
    result = tmp7 / 2;
  }
  obj.top = result;
  obj.style = obj;
  obj.pointerEvents = "none";
  const items = [str, tmp3];
  obj1 = { height: token };
  const items1 = [callback5(importDefault(dependencyMap[25]), { colors: items, style: obj1, start: { max: -536870861, guildId: -299892737 }, end: {}, locations: ["Text", "lc"] }), ];
  obj2 = { flex: 1, backgroundColor: tmp3 };
  items1[1] = callback5(View, { style: obj2 });
  obj.children = items1;
  return closure_35(View, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
const useVoiceMessagesUIStore = arg1(dependencyMap[8]).useVoiceMessagesUIStore;
let closure_13 = importDefault(dependencyMap[9]);
const DraftType = arg1(dependencyMap[9]).DraftType;
let closure_15 = importDefault(dependencyMap[10]);
let closure_16 = importDefault(dependencyMap[11]);
let closure_17 = importDefault(dependencyMap[12]);
({ updateShowingAutoComplete: closure_18, useChatIsAtBottom: closure_19, useChatShowingAutoComplete: closure_20 } = arg1(dependencyMap[13]));
const tmp2 = arg1(dependencyMap[13]);
({ CHAT_INPUT_HORIZONTAL_PADDING: closure_21, CHAT_INPUT_HORIZONTAL_PADDING_PARENT: closure_22, ChatInputActionType: closure_23 } = arg1(dependencyMap[14]));
const tmp3 = arg1(dependencyMap[14]);
({ AnalyticEvents: closure_24, ChannelTypesSets: closure_25, ChatInputComponentViewedTypes: closure_26, ComponentActions: closure_27, MAX_UPLOAD_COUNT: closure_28, Permissions: closure_29 } = arg1(dependencyMap[15]));
const AppLauncherRouteName = arg1(dependencyMap[16]).AppLauncherRouteName;
const EmojiInteractionPoint = arg1(dependencyMap[17]).EmojiInteractionPoint;
const tmp4 = arg1(dependencyMap[15]);
({ InAppCameraUsedCameraPreviewTypes: closure_32, MediaKeyboardTarget: closure_33 } = arg1(dependencyMap[18]));
const tmp5 = arg1(dependencyMap[18]);
({ jsx: closure_34, jsxs: closure_35, Fragment: closure_36 } = arg1(dependencyMap[19]));
const tmp6 = arg1(dependencyMap[19]);
let closure_37 = arg1(dependencyMap[20]).createStyles((arg0, arg1, arg2) => {
  let obj = {};
  obj = { position: "relative", paddingVertical: importDefault(dependencyMap[21]).space.PX_8, paddingHorizontal: closure_21 - closure_22 };
  let BACKGROUND_BASE_LOW = arg0;
  if (null == arg0) {
    BACKGROUND_BASE_LOW = importDefault(dependencyMap[21]).colors.BACKGROUND_BASE_LOW;
  }
  obj.backgroundColor = BACKGROUND_BASE_LOW;
  obj.borderTopWidth = 1;
  obj.borderColor = importDefault(dependencyMap[21]).colors.BORDER_SUBTLE;
  obj.container = obj;
  obj.containerInner = { <string:226124958>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042439915824, <string:4217921538>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004243991583 };
  obj = {};
  const merged = Object.assign(arg1 ? {} : {});
  obj.inputDefault = obj;
  const obj1 = { borderRadius: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_BORDER_RADIUS, paddingHorizontal: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_PILL_PADDING, marginHorizontal: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_PILL_MARGIN_HORIZONTAL, borderWidth: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: importDefault(dependencyMap[21]).colors.INPUT_BORDER_DEFAULT };
  if (null != arg0) {
    let CHAT_INPUT_BACKGROUND = importDefault(dependencyMap[21]).colors.CARD_SECONDARY_BG;
  } else {
    CHAT_INPUT_BACKGROUND = importDefault(dependencyMap[21]).colors.CHAT_INPUT_BACKGROUND;
  }
  obj1.backgroundColor = CHAT_INPUT_BACKGROUND;
  obj.input = obj1;
  obj.rightAccessory = { paddingVertical: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_PILL_PADDING };
  const obj2 = { paddingVertical: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_PILL_PADDING };
  const tmp3 = arg1 ? {} : {};
  obj.refreshButtonAlignment = { marginBottom: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH };
  obj.accessories = { <string:1367186513>: true, <string:3613500496>: true, <string:3713892945>: true, <string:4272015777>: true };
  const obj4 = { "Bool(true)": "check_mark", "Bool(true)": "\u7228", "Bool(true)": "<string:655360>", "Bool(true)": "<string:524288>", "Bool(true)": "<string:1107361792>", "Bool(true)": "<string:2929393666>", "Bool(true)": "<string:74645505>", borderRadius: importDefault(dependencyMap[21]).radii.none, paddingHorizontal: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING };
  obj.floatingContainer = obj4;
  const obj3 = { marginBottom: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH };
  obj.floatingInputBox = { backgroundColor: importDefault(dependencyMap[21]).colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: importDefault(dependencyMap[21]).colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" };
  const obj5 = { backgroundColor: importDefault(dependencyMap[21]).colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: importDefault(dependencyMap[21]).colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" };
  obj.floatingInputBoxPressed = { backgroundColor: importDefault(dependencyMap[21]).colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: importDefault(dependencyMap[21]).colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
  obj.floatingInputBoxTyping = { "Null": -536870861, "Null": -299892737 };
  const obj7 = { <string:226124958>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042439915824, <string:4217921538>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004243991583, paddingHorizontal: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
  obj.floatingMainContents = obj7;
  const obj8 = { markAsSpoilerTitle: null, keyboardAppearance: null };
  const obj6 = { backgroundColor: importDefault(dependencyMap[21]).colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: importDefault(dependencyMap[21]).colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
  let num = -6;
  if (obj12.isAndroid()) {
    num = -5;
  }
  obj8.marginLeft = num;
  obj.inputFlat = obj8;
  obj.floatingScrimOverlap = { marginTop: -arg2 / 2 };
  obj.overflowVisible = { overflow: "visible" };
  return obj;
});
let closure_38 = { code: "function ChatInputTsx1(){const{textFieldHeight}=this.__closure;return{minHeight:textFieldHeight.get()};}" };
const forwardRefResult = importAllResult.forwardRef((channel, ref) => {
  let accessibilityLabel;
  let canCreateThreads;
  let canMentionEveryone;
  let canSendVoiceMessage;
  let canUpload;
  let chatInputFloating;
  let editable;
  let enabled;
  let isResourceChannel;
  let onJumpToPresent;
  let placeholder;
  let screenIndex;
  let secondaryTextFieldRef;
  let setNoExtractUI;
  let threadCreationCallback;
  channel = channel.channel;
  ref = channel;
  ({ screenIndex, threadCreationCallback, onJumpToPresent } = channel);
  let dependencyMap;
  let closure_4;
  let callback;
  let importAllResult;
  let View;
  let closure_8;
  let callback2;
  let closure_10;
  let closure_11;
  let useVoiceMessagesUIStore;
  ({ isResourceChannel, setNoExtractUI, secondaryTextFieldRef } = channel);
  let obj = ref(dependencyMap[26]);
  let mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "ChatInput" });
  ({ enabled, chatInputFloating } = mobileVisualRefreshConfig);
  const importDefault = chatInputFloating;
  let obj1 = ref(dependencyMap[27]);
  const gradientValue = obj1.useGradientValue(ref(dependencyMap[27]).GradientPercentage.END);
  let obj2 = ref(dependencyMap[23]);
  const token = obj2.useToken(importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const importAll = token;
  let obj3 = ref(dependencyMap[23]);
  const result = (obj3.useToken(importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT) - token) / 2;
  let obj4 = ref(dependencyMap[23]);
  const token1 = obj4.useToken(importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  const tmp6 = callback7(gradientValue, chatInputFloating, token1);
  let obj5 = ref(dependencyMap[23]);
  let token2 = obj5.useToken(importDefault(dependencyMap[21]).colors.BACKGROUND_BASE_LOWER);
  if (null != gradientValue) {
    token2 = gradientValue;
  }
  let obj6 = ref(dependencyMap[23]);
  const token3 = obj6.useToken(importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED);
  let obj7 = ref(dependencyMap[23]);
  const token4 = obj7.useToken(importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  let obj8 = ref(dependencyMap[23]);
  const token5 = obj8.useToken(importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM);
  ref = importAllResult.useRef(chatInputFloating);
  dependencyMap = ref;
  ref.current = chatInputFloating;
  const tmp12 = callback(importAllResult.useState(false), 2);
  let floatingInputBoxPressed = tmp12[0];
  closure_4 = tmp12[1];
  if (chatInputFloating) {
    let tmp13 = importDefault(dependencyMap[28]);
  } else {
    tmp13 = View;
  }
  callback = tmp16;
  const tmp17 = channel.isPrivate() && null == threadCreationCallback;
  let obj9 = ref(dependencyMap[29]);
  const typingUserIds = obj9.useTypingUserIds(channel.id, 1);
  let floatingInputBoxTyping = chatInputFloating;
  const tmp18 = callback2((channelId) => channelId.channelId === channel.id);
  if (chatInputFloating) {
    floatingInputBoxTyping = channel.rateLimitPerUser > 0 || typingUserIds.length > 0;
    const tmp20 = channel.rateLimitPerUser > 0 || typingUserIds.length > 0;
  }
  if (floatingInputBoxTyping) {
    floatingInputBoxTyping = !tmp19;
  }
  const tmp21 = callback3(screenIndex);
  let tmp22 = token1;
  if (tmp21) {
    tmp22 = token5;
  }
  let tmp23 = token4;
  if (tmp21) {
    tmp23 = token3;
  }
  let obj10 = ref(dependencyMap[30]);
  const items = [closure_15];
  const stateFromStores = obj10.useStateFromStores(items, () => {
    let editingTextValue = null;
    if (!tmp16) {
      editingTextValue = editingTextValue.getEditingTextValue(channel.id);
    }
    return editingTextValue;
  });
  importAllResult = stateFromStores;
  let obj11 = ref(dependencyMap[30]);
  const items1 = [closure_11];
  const stateFromStores1 = obj11.useStateFromStores(items1, () => {
    let pendingReply;
    if (!tmp16) {
      pendingReply = tmp54.getPendingReply(channel.id);
    }
    return pendingReply;
  });
  View = stateFromStores1;
  let obj12 = ref(dependencyMap[30]);
  const items2 = [closure_17];
  let stateFromStores2 = obj12.useStateFromStores(items2, () => {
    if (tmp16) {
      return false;
    } else {
      const uploads = uploads.getUploads(channel.id, ChannelMessage.ChannelMessage);
      let tmp5 = null != uploads;
      if (tmp5) {
        tmp5 = uploads.length > 0;
      }
      return tmp5;
    }
  });
  const items3 = [channel.id, null != threadCreationCallback];
  let memo = importAllResult.useMemo(() => draft.getDraft(channel.id, tmp16 ? closure_14.FirstThreadMessage : closure_14.ChannelMessage), items3);
  if (null != stateFromStores) {
    memo = stateFromStores;
  }
  let obj13 = ref(dependencyMap[30]);
  const items4 = [closure_16];
  const items5 = [channel, null != threadCreationCallback];
  const stateFromStoresObject = obj13.useStateFromStoresObject(items4, () => {
    let canResult1 = closure_16.can(constants2.MENTION_EVERYONE, channel);
    const canResult = closure_16.can(constants2.ATTACH_FILES, channel);
    const canResult2 = closure_16.can(constants2.SEND_MESSAGES, channel);
    let canResult4 = closure_16.can(constants2.CREATE_PUBLIC_THREADS, channel);
    if (!canResult4) {
      canResult4 = closure_16.can(constants2.CREATE_PRIVATE_THREADS, channel);
    }
    let canResult5 = closure_16.can(constants2.SEND_MESSAGES_IN_THREADS, channel);
    let isPrivateResult = channel.isPrivate();
    let obj = channel(ref[31]);
    const isReadOnlyThread = obj.computeIsReadOnlyThread(channel);
    if (!tmp16) {
      let tmp12 = isPrivateResult;
      if (!isPrivateResult) {
        tmp12 = canResult2;
      }
      canResult5 = tmp12;
    }
    obj = {};
    let tmp14 = isPrivateResult;
    if (!isPrivateResult) {
      if (canResult1) {
        canResult1 = !tmp13;
      }
      tmp14 = canResult1;
    }
    if (tmp14) {
      tmp14 = !tmp16;
    }
    obj.canMentionEveryone = tmp14;
    let tmp16 = isPrivateResult;
    if (!isPrivateResult) {
      tmp16 = canResult;
    }
    if (tmp16) {
      tmp16 = !tmp13;
    }
    if (tmp16) {
      tmp16 = !tmp16;
    }
    obj.canUpload = tmp16;
    if (!isPrivateResult) {
      isPrivateResult = canResult3;
    }
    if (isPrivateResult) {
      isPrivateResult = !tmp13;
    }
    if (isPrivateResult) {
      isPrivateResult = !tmp16;
    }
    obj.canSendVoiceMessage = isPrivateResult;
    obj.editable = !(!canResult5 || isReadOnlyThread);
    obj.canCreateThreads = canResult4;
    return obj;
  }, items5);
  ({ canUpload, editable } = stateFromStoresObject);
  closure_8 = editable;
  ({ canMentionEveryone, canSendVoiceMessage, canCreateThreads } = stateFromStoresObject);
  const analyticsLocations = importDefault(dependencyMap[32])().analyticsLocations;
  let tmp29 = tmp16;
  if (null == threadCreationCallback) {
    tmp29 = null != stateFromStores;
  }
  if (!tmp29) {
    let obj14 = ref(dependencyMap[31]);
    tmp29 = !obj14.getIsActiveChannelOrUnarchivableThread(channel);
  }
  let obj15 = ref(dependencyMap[31]);
  let canStartThread = obj15.useCanStartThread(channel);
  if (canStartThread) {
    const GUILD_THREADS_ONLY = constants.GUILD_THREADS_ONLY;
    canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
  }
  if (canStartThread) {
    canStartThread = !tmp16;
  }
  let obj16 = ref(dependencyMap[33]);
  const tmp35 = obj16.useCanPostPollsInChannel(channel) && null == threadCreationCallback;
  let obj17 = ref(dependencyMap[23]);
  const token6 = obj17.useToken(importDefault(dependencyMap[21]).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH);
  if (enabled) {
    let diff = token - 2 * token6;
  } else {
    let obj18 = ref(dependencyMap[34]);
    diff = obj18.getChatInputMinHeight();
  }
  callback2 = diff;
  let obj19 = ref(dependencyMap[35]);
  let tmp40 = diff;
  if (chatInputFloating) {
    tmp40 = token;
  }
  const sharedValue = obj19.useSharedValue(tmp40);
  closure_10 = sharedValue;
  const items6 = [chatInputFloating, token, diff, sharedValue];
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(chatInputFloating ? token : diff);
  }, items6);
  const tmp43 = importDefault(dependencyMap[36])();
  const tmp44 = useVoiceMessagesUIStore((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  let result2 = !tmp16;
  let isAppLauncherEnabled = result2;
  if (null == threadCreationCallback) {
    let obj20 = ref(dependencyMap[37]);
    isAppLauncherEnabled = obj20.getIsAppLauncherEnabled(channel);
  }
  let obj21 = ref(dependencyMap[30]);
  const items7 = [closure_8];
  const stateFromStores3 = obj21.useStateFromStores(items7, () => editable.getActiveCommand(channel.id));
  obj = { channel, isReadonly: !editable, isCreatingThread: tmp16 };
  const tmp19 = callback4(screenIndex);
  let num5 = 8;
  ({ placeholder, accessibilityLabel } = importDefault(dependencyMap[38])(obj));
  if (enabled) {
    num5 = 5;
  }
  let obj23 = ref(dependencyMap[35]);
  class We {
    constructor() {
      obj = { minHeight: closure_10.get() };
      return obj;
    }
  }
  We.__closure = { textFieldHeight: sharedValue };
  We.__workletHash = 11048691841625;
  We.__initData = closure_38;
  const animatedStyle = obj23.useAnimatedStyle(We);
  const ref1 = importAllResult.useRef(null);
  let obj24 = ref(dependencyMap[39]);
  obj = { disabled: !editable };
  const refreshChatInputCoachmark = obj24.useRefreshChatInputCoachmark(obj);
  obj1 = { chatInputProps: obj2, chatInputTextFieldHeight: sharedValue, ref };
  obj2 = { analyticsLocations, canUpload, channel, defaultValue: memo, hasAttachmentsToUpload: stateFromStores2, pendingEdit: stateFromStores, pendingReply: stateFromStores1, screenIndex, secondaryTextFieldRef, threadCreationCallback };
  const tmp54 = importDefault(dependencyMap[40])(obj1);
  closure_11 = tmp54;
  const items8 = [tmp54];
  const effect1 = importAllResult.useEffect(() => {
    const current = tmp54.chatInput.current;
    current.setText(tmp54.props.current.defaultValue);
  }, items8);
  const items9 = [tmp54, channel, stateFromStores, stateFromStores1];
  const effect2 = importAllResult.useEffect(() => {
    const current = tmp54.propsPrev.current;
    const pendingEdit = current.pendingEdit;
    let tmp = null == current.pendingReply;
    if (tmp) {
      tmp = null != stateFromStores1;
    }
    if (!tmp) {
      let tmp3 = null == pendingEdit;
      if (tmp3) {
        tmp3 = null != stateFromStores;
      }
      tmp = tmp3;
    }
    if (tmp) {
      const current2 = tmp54.chatInput.current;
      if (null != current2) {
        current2.focus();
      }
    }
    const id = tmp54.propsPrev.current.channel.id;
    if (id !== channel.id) {
      if (id !== channel(ref[41]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
        const current4 = tmp54.chatInput.current;
        if (null != current4) {
          current4.setText(tmp54.props.current.defaultValue);
        }
      }
    }
    if (pendingEdit !== stateFromStores) {
      const current3 = tmp54.chatInput.current;
      if (null != current3) {
        let str = "";
        if (null != stateFromStores) {
          str = stateFromStores;
        }
        current3.setText(str);
      }
    }
  }, items9);
  const items10 = [tmp54];
  const effect3 = importAllResult.useEffect(() => {
    function handleOpenKeyboard(channelId) {
      channelId = undefined;
      if (null != channelId) {
        channelId = channelId.channelId;
      }
      const current = closure_11.props.current;
      let id;
      if (null != current) {
        id = current.channel.id;
      }
      if (channelId === id) {
        const current2 = closure_11.chatInput.current;
        if (null != current2) {
          current2.openSystemKeyboard();
        }
      }
    }
    const channel = handleOpenKeyboard;
    const ComponentDispatch = channel(ref[42]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.TEXTAREA_FOCUS, handleOpenKeyboard);
    return () => {
      const ComponentDispatch = handleOpenKeyboard(closure_3[42]).ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.TEXTAREA_FOCUS, handleOpenKeyboard);
    };
  }, items10);
  const items11 = [tmp54];
  const memo1 = importAllResult.useMemo(() => {
    const obj = {
      handleBlur(nativeEvent) {
        let obj = callback(closure_3[43]);
        const result = obj.setIsAnyChatInputFocused(false);
        const result1 = closure_12.handleTextOrFocusChange(str, false);
        closure_11.state.current.focused = false;
        callback4(false);
        const current = closure_11.chatInputCover.current;
        if (null != current) {
          current.focused(false);
        }
        const current2 = closure_11.chatInputAppCommandManager.current;
        if (null != current2) {
          current2.updateState();
        }
        const current3 = closure_11.chatInputAutocomplete.current;
        if (null != current3) {
          obj = { focused: false, text: str, selectionStart: closure_11.state.current.selectionStart, selectionEnd: closure_11.state.current.selectionEnd };
          current3.setData(obj);
        }
        const current4 = closure_11.chatInputSendButton.current;
        if (null != current4) {
          current4.setHasText(str.trim().length > 0);
        }
      },
      handleFocus(nativeEvent) {
        let end;
        let start;
        ({ start, end } = nativeEvent.nativeEvent);
        let obj = callback(closure_3[43]);
        const result = obj.setIsAnyChatInputFocused(true);
        closure_11.state.current.focused = true;
        callback4(true);
        closure_11.state.current.selectionStart = start;
        closure_11.state.current.selectionEnd = end;
        const result1 = closure_12.handleTextOrFocusChange(closure_11.state.current.text, true);
        const current = closure_11.chatInputAppCommandManager.current;
        if (null != current) {
          current.updateState();
        }
        const current2 = closure_11.chatInputCover.current;
        if (null != current2) {
          current2.focused(true);
        }
        const current3 = closure_11.chatInputAutocomplete.current;
        if (null != current3) {
          obj = { focused: true, text: closure_11.state.current.text, selectionStart: start, selectionEnd: end };
          current3.setData(obj);
        }
      },
      handleChangeContentSize(nativeEvent) {
        const height = nativeEvent.nativeEvent.height;
        closure_11.state.current.textFieldContentSize = height;
        const textFieldHeight = closure_11.state.current.textFieldHeight;
        const result = textFieldHeight.set(callback(closure_3[34]).getChatInputHeightAnimationTiming(height));
      },
      handleLayoutOfInputContainer(arg0) {
        const current = closure_11.chatInputAutocomplete.current;
        if (null != current) {
          current.setChatInputHeight(tmp.layout.height);
        }
      },
      handleLayout(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        const height = layout.height;
        if (tmp) {
          if (null == closure_11.props.current.threadCreationCallback) {
            const current = closure_11.chatInput.current;
            const result = current.updateChatInputContainerHeightDebounced(height);
          }
        }
      },
      handleMaxHeightChanged() {
        const textFieldContentSize = closure_11.state.current.textFieldContentSize;
        if (0 !== textFieldContentSize) {
          const textFieldHeight = closure_11.state.current.textFieldHeight;
          const result = textFieldHeight.set(callback(closure_3[34]).getChatInputHeightAnimationTiming(textFieldContentSize));
          const obj = callback(closure_3[34]);
        }
      },
      handleChangeAutoCompleteVisibility(arg0) {
        callback5(closure_11.props.current.screenIndex, arg0);
      },
      handlePasteCommand
    };
    function handlePasteCommand(arg0) {
      if (closure_11.state.current.focused) {
        const current = closure_11.chatInputAppCommandManager.current;
        let tmp4 = null == current;
        let obj = current;
        if (!tmp4) {
          const applicationCommandManager = current.getApplicationCommandManager();
          tmp4 = null == applicationCommandManager;
          obj = applicationCommandManager;
        }
        if (!tmp4) {
          obj.setPastedCommand(tmp, closure_11.props.current.channel);
        }
      }
    }
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(handlePasteCommand);
    obj.handlePasteImage = function() {
      return callback(...arguments);
    };
    obj.handlePressAction = function handlePressAction(arg0, arg1, current2) {
      if (constants.PHOTOS === arg1) {
        const result = callback(ref[48]).triggerHapticFeedback(callback(ref[48]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj21 = callback(ref[48]);
        let obj = { type: constants3.ADD_BUTTON, channel_id: closure_11.props.current.channel.id, guild_id: closure_11.props.current.channel.guild_id };
        callback2(ref[49]).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj);
        if (ref.current) {
          const keyboardType = callback(ref[36]).getKeyboardType();
          if (keyboardType === callback(ref[50]).KeyboardTypes.APP_LAUNCHER) {
            obj = { type: callback(ref[50]).KeyboardTypes.APP_LAUNCHER };
            closure_12.handleToggleKeyboard(obj);
          }
          const obj24 = callback(ref[36]);
        }
        const obj22 = callback2(ref[49]);
        const keyboardType1 = callback(ref[36]).getKeyboardType();
        if (keyboardType1 === callback(ref[50]).KeyboardTypes.MEDIA) {
          const current = closure_11.chatInputActions.current;
          if (null != current) {
            current.focusPhotosButton();
          }
        }
        let obj1 = { type: callback(ref[50]).KeyboardTypes.MEDIA };
        let obj2 = { target: constants6.CHAT };
        obj1.context = obj2;
        closure_12.handleToggleKeyboard(obj1);
        const obj25 = callback(ref[36]);
      } else if (constants.APPS === arg1) {
        const result1 = callback(ref[48]).triggerHapticFeedback(callback(ref[48]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj12 = callback(ref[48]);
        callback(ref[51]).trackWithMetadata(constants2.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED);
        const obj13 = callback(ref[51]);
        let obj3 = { type: constants3.APPS_BUTTON, channel_id: closure_11.props.current.channel.id, guild_id: closure_11.props.current.channel.guild_id };
        callback2(ref[49]).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj3);
        const obj14 = callback2(ref[49]);
        const result2 = callback3(ref[52]).dismissNewActivityIndicator();
        const obj16 = callback3(ref[52]);
        let tmp40 = null;
        if (null != current2) {
          tmp40 = current2;
        }
        const result3 = callback(ref[53]).setAppLauncherA11yFocusReturnRef(tmp40);
        let obj4 = { type: callback(ref[50]).KeyboardTypes.APP_LAUNCHER };
        let obj5 = { initialRouteName: constants4.HOME };
        const obj17 = callback(ref[53]);
        const appDMApplication = callback(ref[54]).getAppDMApplication(closure_11.props.current.channel);
        let name;
        if (null != appDMApplication) {
          name = appDMApplication.name;
        }
        obj5.initialSearchQuery = name;
        obj4.context = obj5;
        closure_12.handleToggleKeyboard(obj4);
        const obj20 = callback(ref[54]);
      } else if (constants.ALL_PHOTOS === arg1) {
        const result4 = callback(ref[48]).triggerHapticFeedback(callback(ref[48]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj9 = callback(ref[48]);
        let obj6 = {
          channel: closure_11.props.current.channel,
          uploadLimit: closure_28,
          onDismissKeyboard() {
              return callback(closure_3[56]).dismissKeyboard();
            },
          onRestoreKeyboard() {
              return closure_12.handleToggleKeyboard({ type: callback(closure_3[50]).KeyboardTypes.SYSTEM });
            },
          onSelectFiles(items) {
              callback(closure_3[55]).addImagesFromPicker(closure_11.props.current.channel.id, items, callback(closure_3[46]).UploadOrigin.IMAGE_PICKER);
            },
          draftType: ChannelMessage.ChannelMessage
        };
        callback(ref[55]).handleViewAllDialog(obj6);
        const obj10 = callback(ref[55]);
      } else if (constants.CAMERA === arg1) {
        obj5 = callback(ref[48]);
        const result5 = obj5.triggerHapticFeedback(callback(ref[48]).HapticFeedbackTypes.IMPACT_LIGHT);
        obj6 = callback(ref[55]);
        const obj7 = {
          channel: closure_11.props.current.channel,
          previewType: constants5.CAMERA_BUTTON,
          onDismissKeyboard() {
              return callback(closure_3[56]).dismissKeyboard();
            },
          onRestoreKeyboard() {
              return closure_12.handleToggleKeyboard({ type: callback(closure_3[50]).KeyboardTypes.SYSTEM });
            },
          onSelectFiles(items) {
              callback(closure_3[55]).addImagesFromPicker(closure_11.props.current.channel.id, items, callback(closure_3[46]).UploadOrigin.IMAGE_PICKER);
            }
        };
        obj6.handleCameraDialog(obj7);
      } else if (constants.NITRO_GIFT === arg1) {
        obj = callback2(ref[57]);
        const result6 = obj.markPotentialBadState();
        obj1 = callback(ref[48]);
        const result7 = obj1.triggerHapticFeedback(callback(ref[48]).HapticFeedbackTypes.IMPACT_LIGHT);
        obj2 = callback(ref[22]);
        if (obj2.isAndroid()) {
          obj3 = callback(ref[56]);
          obj3.dismissKeyboard();
        }
        obj4 = callback(ref[55]);
        obj4.handleSelectGift(closure_11.props.current.analyticsLocations, closure_11.chatInput, current2);
      } else if (constants.THREAD === arg1) {
        const result8 = callback(ref[48]).triggerHapticFeedback(callback(ref[48]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj29 = callback(ref[48]);
        callback(ref[55]).handleSelectThread(closure_11.props.current.channel, closure_11.chatInput);
        const obj30 = callback(ref[55]);
      }
    };
    obj.handlePollsPress = function handlePollsPress() {
      let obj = callback(closure_3[48]);
      const result = obj.triggerHapticFeedback(callback(closure_3[48]).HapticFeedbackTypes.IMPACT_LIGHT);
      obj = { type: constants3.POLLS, channel_id: closure_11.props.current.channel.id, guild_id: closure_11.props.current.channel.guild_id };
      callback2(closure_3[49]).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj);
      const obj2 = callback2(closure_3[49]);
      callback(closure_3[56]).dismissKeyboard();
      const obj4 = callback(closure_3[56]);
      obj = {
        channel: closure_11.props.current.channel,
        onCancel() {
          return closure_12.handleToggleKeyboard({ type: callback(closure_3[50]).KeyboardTypes.SYSTEM });
        }
      };
      callback(closure_3[58]).openCreatePollModal(obj);
    };
    obj.handleAttachPress = function handleAttachPress() {
      let obj = callback(closure_3[48]);
      const result = obj.triggerHapticFeedback(callback(closure_3[48]).HapticFeedbackTypes.IMPACT_LIGHT);
      obj = {
        channel: closure_11.props.current.channel,
        uploadLimit: closure_28,
        onDismissKeyboard() {
          return callback(closure_3[56]).dismissKeyboard();
        },
        onRestoreKeyboard() {
          return closure_12.handleToggleKeyboard({ type: callback(closure_3[50]).KeyboardTypes.SYSTEM });
        },
        onSelectFiles(items) {
          callback(closure_3[55]).addImagesFromPicker(props.props.current.channel.id, items, callback(closure_3[46]).UploadOrigin.FILE_ATTACHMENT);
        }
      };
      callback(closure_3[55]).handleAttachFile(obj);
    };
    obj.handlePressExpression = function handlePressExpression(context) {
      let obj = callback(closure_3[59]);
      const result = obj.initiateEmojiInteraction(obj.ChatInputExpressionPressed);
      obj = { type: callback(closure_3[50]).KeyboardTypes.EXPRESSION, context };
      closure_12.handleToggleKeyboard(obj);
    };
    obj.handlePressSend = function handlePressSend() {
      const current = closure_11.chatInput.current;
      current.handleSend();
    };
    obj.handleSelectionOrTextChange = function handleSelectionOrTextChange(nativeEvent) {
      let editId;
      let end;
      let start;
      let text;
      ({ start, end, text, editId } = nativeEvent.nativeEvent);
      closure_11.state.current.editId = editId;
      closure_11.state.current.selectionStart = start;
      closure_11.state.current.selectionEnd = end;
      const result = closure_12.handleTextOrFocusChange(text, closure_11.state.current.focused);
      const current = closure_11.chatInputAppCommandManager.current;
      if (null != current) {
        current.updateState();
      }
      const current2 = closure_11.chatInputAutocomplete.current;
      if (null != current2) {
        const obj = { focused: closure_11.state.current.focused, text, selectionStart: start, selectionEnd: end };
        current2.setData(obj);
      }
      const current3 = closure_11.chatInputSendButton.current;
      if (null != current3) {
        current3.setHasText(text.trim().length > 0);
      }
      if (closure_11.state.current.editId !== editId) {
        const current4 = closure_11.chatInput.current;
        current4.handleTextChanged(text);
        const current5 = closure_11.chatInputCharCounter.current;
        if (null != current5) {
          const result1 = current5.onMessageLengthChanged(text.length);
        }
        callback(closure_3[60]).hideContextMenu();
        const obj2 = callback(closure_3[60]);
      }
    };
    obj.handleTapAction = function handleTapAction(nativeEvent) {
      let channelId;
      let optionName;
      const tapAction = nativeEvent.nativeEvent.tapAction;
      if ("tapAttachment" === tapAction.action) {
        const current = closure_11.chatInput.current;
        current.blur();
        let fn;
        const obj = callback(closure_3[61]);
        const current2 = closure_11.chatInput.current;
        const applicationCommandManager = current2.getApplicationCommandManager();
        ({ channelId, optionName } = tapAction);
        if (closure_11.state.current.focused) {
          fn = () => {
            const current = chatInput.chatInput.current;
            return current.openSystemKeyboard();
          };
        }
        const result = obj.openCommandAttachmentPreview(applicationCommandManager, channelId, optionName, fn);
      }
    };
    obj.handleTextOrFocusChange = function handleTextOrFocusChange(text, focused) {
      if (text.length > 0) {
        if (!focused) {
          const maxMessageLength = callback(closure_3[63]).getMaxMessageLength();
          if (tmp17) {
            callback2(closure_3[49]).track(constants2.MESSAGE_LENGTH_LIMIT_REACHED, {});
            const obj3 = callback2(closure_3[49]);
          }
          closure_11.state.current.textPrev = closure_11.state.current.text;
          closure_11.state.current.text = text;
        }
        if (closure_10.isOpen()) {
          callback2(closure_3[62]).hideNativeMenu();
          const obj = callback2(closure_3[62]);
        }
        const current2 = closure_11.chatInputActions.current;
        if (null != current2) {
          current2.onDismissActions(focused);
        }
        const current3 = closure_11.chatInputRightActions.current;
        if (null != current3) {
          current3.onDismissActions(focused);
        }
      }
      if (0 === text.length) {
        const current4 = closure_11.chatInputActions.current;
        if (null != current4) {
          current4.onShowActions(focused);
        }
        const current = closure_11.chatInputRightActions.current;
        if (null != current) {
          current.onShowActions(focused);
        }
      }
    };
    obj.handleTextFlushed = function handleTextFlushed(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const current = closure_11.chatInputTextFlushedResponses.current;
      const value = current.get(nativeEvent.requestId);
      if (null != value) {
        value(nativeEvent.text);
      }
    };
    obj.handleToggleKeyboard = function handleToggleKeyboard(type) {
      if (closure_10.isOpen()) {
        callback2(closure_3[62]).hideNativeMenu();
        const obj = callback2(closure_3[62]);
      }
      if (type.type !== callback(closure_3[50]).KeyboardTypes.SYSTEM) {
        if (type.type !== obj2.getKeyboardType()) {
          const current = closure_11.chatInput.current;
          current.openCustomKeyboard(type);
        }
      }
      const current2 = closure_11.chatInput.current;
      current2.openSystemKeyboard();
    };
    return obj;
  }, items11);
  useVoiceMessagesUIStore = memo1;
  const items12 = [null != threadCreationCallback, tmp54];
  callback = importAllResult.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const height = layout.height;
    if (tmp) {
      if (!tmp16) {
        const current = tmp54.chatInput.current;
        const result = current.updateChatInputContainerHeightDebounced(height);
      }
    }
  }, items12);
  const items13 = [editable, tmp54];
  const callback1 = importAllResult.useCallback(() => true, []);
  callback2 = importAllResult.useCallback(() => {
    if (editable) {
      const current = tmp54.chatInput.current;
      current.openSystemKeyboard();
    }
  }, items13);
  obj3 = { canUpload, channelId: channel.id, screenIndex };
  const tmp62 = callback5(importDefault(dependencyMap[64]), obj3);
  let tmp64Result = null;
  if (editable) {
    obj4 = { ref: tmp54.chatInputActions, channel, onPressAction: memo1.handlePressAction, canStartThreads: canStartThread, isAppLauncherEnabled, keyboardType: tmp43 };
    let tmp68 = canUpload;
    if (canUpload) {
      tmp68 = null == stateFromStores3;
    }
    if (!tmp68) {
      tmp68 = tmp35;
    }
    obj4.shouldPhotosButtonBeDisabled = !tmp68;
    obj4.canUpload = canUpload;
    let result1 = result2;
    if (!tmp16) {
      let obj30 = ref(dependencyMap[66]);
      result1 = obj30.isPremiumGiftingSupported();
    }
    obj4.shouldShowGiftButton = result1;
    obj4.canPostPolls = tmp35;
    ({ handlePollsPress: obj30.onPollsPress, handleAttachPress: obj30.onAttachPress } = memo1);
    obj4.photosButtonExternalRef = ref1;
    tmp64Result = callback5(importDefault(dependencyMap[65]), obj4);
    const tmp64 = callback5;
    const tmp67 = importDefault(dependencyMap[65]);
  }
  obj5 = { style: items14 };
  const items14 = [tmp6.inputDefault, animatedStyle];
  obj6 = { accessibilityLabel };
  const tmp50 = importDefault(dependencyMap[38])(obj);
  obj6.customKeyboard = ref(dependencyMap[68]).PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
  obj6.editable = editable;
  ({ handleFocus: obj33.onBeginFocus, handleBlur: obj33.onEndBlur, handleChangeContentSize: obj33.onChangeContentSize, handleMaxHeightChanged: obj33.onMaxHeightChanged, handleSelectionOrTextChange: obj33.onSelectionOrTextChange, handleTextFlushed: obj33.onTextFlushed, handlePasteImage: obj33.onPasteImage, handlePasteCommand: obj33.onPasteCommand, handleTapAction: obj33.onTapAction, handlePressSend: obj33.onRequestSend } = memo1);
  obj6.placeholder = placeholder;
  obj6.ref = tmp54.chatInputNative;
  obj6.setNoExtractUI = setNoExtractUI;
  obj6.shouldShowCursor = tmp43 !== ref(dependencyMap[50]).KeyboardTypes.MEDIA;
  obj6.verticalInset = num5;
  const items15 = [callback5(importDefault(dependencyMap[67]), obj6), ];
  obj7 = { keyboardType: tmp43, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp54.chatInputCover };
  items15[1] = callback5(importDefault(dependencyMap[69]), obj7);
  obj5.children = items15;
  const tmp73 = callback6(importDefault(dependencyMap[35]).View, obj5);
  if (editable) {
    obj8 = { ref: tmp54.chatInputSendButton, canSendVoiceMessage, channel, defaultValue: memo };
    if (stateFromStores2) {
      stateFromStores2 = canUpload;
    }
    obj8.hasPendingAttachments = stateFromStores2;
    obj8.hasPendingEdit = null != stateFromStores;
    obj8.onSendMessage = memo1.handlePressSend;
    obj8.requireTextContent = result2;
    let tmp75Result = callback5(importDefault(dependencyMap[70]), obj8);
    const tmp75 = callback5;
    const tmp78 = importDefault(dependencyMap[70]);
  } else {
    tmp75Result = null;
  }
  obj9 = { collapsable: false, onLayout: callback };
  const items16 = [importDefault(dependencyMap[71])({ isCreatingThread: null != threadCreationCallback }), , ];
  let overflowVisible = chatInputFloating;
  if (chatInputFloating) {
    overflowVisible = tmp6.overflowVisible;
  }
  items16[1] = overflowVisible;
  let floatingScrimOverlap = chatInputFloating;
  if (chatInputFloating) {
    floatingScrimOverlap = result2;
  }
  if (floatingScrimOverlap) {
    floatingScrimOverlap = tmp6.floatingScrimOverlap;
  }
  items16[2] = floatingScrimOverlap;
  obj9.style = items16;
  let tmp81 = chatInputFloating;
  if (chatInputFloating) {
    tmp81 = !floatingInputBoxTyping;
  }
  if (tmp81) {
    obj10 = { gradientHeight: tmp22, inline: false, scrimBase: token2 };
    tmp81 = callback5(ChatInputScrimGradient, obj10);
  }
  const items17 = [tmp81, , , , , , , , , , , , , , ];
  let tmp85Result = chatInputFloating;
  if (chatInputFloating) {
    tmp85Result = floatingInputBoxTyping;
  }
  if (tmp85Result) {
    obj11 = {};
    obj12 = { o: "center", concat: null, o: 4, borderRadius: 4, position: "rgba(0, 0, 0, 0.75)" };
    let obj39 = ref(dependencyMap[24]);
    const hex2rgbResult = obj39.hex2rgb(token2, 1);
    let tmp90 = token2;
    if (null != hex2rgbResult) {
      tmp90 = hex2rgbResult;
    }
    obj12.backgroundColor = tmp90;
    obj11.style = obj12;
    obj11.pointerEvents = "none";
    tmp85Result = callback5(View, obj11);
    const tmp85 = callback5;
    const tmp86 = View;
  }
  items17[1] = tmp85Result;
  items17[2] = callback5(ref(dependencyMap[72]).ChatInputAccessibilityDivider, {});
  let tmp92Result = null;
  if (tmp17) {
    obj13 = { channel };
    let tmp96 = "" !== memo;
    if (!tmp96) {
      const current = tmp54.chatInput.current;
      let text;
      if (null != current) {
        text = current.getText();
      }
      tmp96 = "" !== text;
    }
    obj13.hasInputText = tmp96;
    tmp92Result = callback5(importDefault(dependencyMap[73]), obj13);
    const tmp92 = callback5;
    const tmp95 = importDefault(dependencyMap[73]);
  }
  items17[3] = tmp92Result;
  obj14 = { style: tmp6.accessories };
  mobileVisualRefreshConfig = chatInputFloating;
  if (chatInputFloating) {
    mobileVisualRefreshConfig = floatingInputBoxTyping;
  }
  if (mobileVisualRefreshConfig) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = ChatInputScrimGradient;
    obj15 = { gradientHeight: tmp23, inline: true, scrimBase: token2 };
    mobileVisualRefreshConfig = callback5(ChatInputScrimGradient, obj15);
  }
  const items18 = [mobileVisualRefreshConfig, , ];
  mobileVisualRefreshConfig = null;
  if (null == threadCreationCallback) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = importDefault;
    mobileVisualRefreshConfig = dependencyMap;
    obj16 = { channel, screenIndex };
    mobileVisualRefreshConfig = callback5(importDefault(dependencyMap[74]), obj16);
  }
  items18[1] = mobileVisualRefreshConfig;
  let obj44 = ref(dependencyMap[22]);
  mobileVisualRefreshConfig = null;
  if (obj44.isIOS()) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = importDefault;
    mobileVisualRefreshConfig = dependencyMap;
    obj17 = { channelId: channel.id, screenIndex, onJumpToPresent };
    mobileVisualRefreshConfig = callback5(importDefault(dependencyMap[75]), obj17);
  }
  items18[2] = mobileVisualRefreshConfig;
  obj14.children = items18;
  items17[4] = callback6(View, obj14);
  mobileVisualRefreshConfig = null;
  if (isResourceChannel) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = importDefault;
    mobileVisualRefreshConfig = dependencyMap;
    obj18 = { channel };
    mobileVisualRefreshConfig = callback5(importDefault(dependencyMap[76]), obj18, channel.id);
  }
  items17[5] = mobileVisualRefreshConfig;
  items17[6] = callback5(ref(dependencyMap[77]).MemberActionsChatInputBannerGuardedOuter, { channel });
  items17[7] = callback5(ref(dependencyMap[78]).DoubleTapToReactChatInputBanner, { channel });
  mobileVisualRefreshConfig = null;
  if (tmp18) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = importDefault;
    mobileVisualRefreshConfig = dependencyMap;
    obj19 = { channelId: channel.id };
    mobileVisualRefreshConfig = callback5(importDefault(dependencyMap[79]), obj19);
  }
  items17[8] = mobileVisualRefreshConfig;
  mobileVisualRefreshConfig = null;
  if (tmp43 !== ref(dependencyMap[50]).KeyboardTypes.EXPRESSION) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = importDefault;
    mobileVisualRefreshConfig = dependencyMap;
    obj20 = { ref: tmp54.chatInputAutocomplete, analyticsLocations, channel, canMentionEveryone, keyboardType: tmp43, onChangeAutoCompleteVisibility: memo1.handleChangeAutoCompleteVisibility, commandsDisabled: tmp29, canOnlyUseTextCommands: tmp32, chatInputRef: tmp54.chatInput, screenIndex };
    mobileVisualRefreshConfig = callback5(importDefault(dependencyMap[80]), obj20);
  }
  items17[9] = mobileVisualRefreshConfig;
  mobileVisualRefreshConfig = !chatInputFloating;
  if (mobileVisualRefreshConfig) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = importDefault;
    mobileVisualRefreshConfig = dependencyMap;
    obj21 = { channel };
    mobileVisualRefreshConfig = callback5(importDefault(dependencyMap[81]), obj21);
  }
  items17[10] = mobileVisualRefreshConfig;
  mobileVisualRefreshConfig = !chatInputFloating;
  if (mobileVisualRefreshConfig) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = importDefault;
    mobileVisualRefreshConfig = dependencyMap;
    const obj22 = { channel, chatInputRef: tmp54.chatInput, pendingEdit: stateFromStores, pendingReply: stateFromStores1 };
    mobileVisualRefreshConfig = callback5(importDefault(dependencyMap[82]), obj22);
  }
  items17[11] = mobileVisualRefreshConfig;
  obj23 = { ref: tmp54.chatInputAppCommandManager, canOnlyUseTextCommands: tmp32, channel, chatInputRef: tmp54.chatInput, chatInputStateRef: tmp54.state, commandsDisabled: tmp29 };
  items17[12] = callback5(importDefault(dependencyMap[83]), obj23);
  obj24 = {};
  const items19 = [tmp6.container, ];
  let floatingContainer = chatInputFloating;
  mobileVisualRefreshConfig = callback5;
  if (chatInputFloating) {
    floatingContainer = tmp6.floatingContainer;
  }
  items19[1] = floatingContainer;
  obj24.style = items19;
  obj24.onLayout = memo1.handleLayoutOfInputContainer;
  const obj25 = {};
  mobileVisualRefreshConfig = callback6;
  mobileVisualRefreshConfig = closure_36;
  if (chatInputFloating) {
    const items20 = [tmp62, , ];
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = importDefault;
    mobileVisualRefreshConfig = dependencyMap;
    const obj26 = { channel };
    items20[1] = callback5(importDefault(dependencyMap[81]), obj26);
    const obj27 = {};
    const items21 = [tmp6.floatingInputBox, , ];
    mobileVisualRefreshConfig = callback6;
    mobileVisualRefreshConfig = View;
    if (floatingInputBoxPressed) {
      floatingInputBoxPressed = tmp6.floatingInputBoxPressed;
    }
    items21[1] = floatingInputBoxPressed;
    if (floatingInputBoxTyping) {
      floatingInputBoxTyping = tmp6.floatingInputBoxTyping;
    }
    items21[2] = floatingInputBoxTyping;
    obj27.style = items21;
    obj27.onStartShouldSetResponder = callback1;
    obj27.onResponderRelease = callback2;
    obj27.collapsable = false;
    obj27.accessibilityElementsHidden = tmp44;
    let str4;
    if (tmp44) {
      str4 = "no-hide-descendants";
    }
    obj27.importantForAccessibility = str4;
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = importDefault;
    mobileVisualRefreshConfig = dependencyMap;
    const obj28 = { channel, chatInputRef: tmp54.chatInput, pendingEdit: stateFromStores, pendingReply: stateFromStores1 };
    const items22 = [callback5(importDefault(dependencyMap[82]), obj28), ];
    const obj29 = { style: tmp6.floatingMainContents };
    mobileVisualRefreshConfig = null;
    mobileVisualRefreshConfig = callback6;
    mobileVisualRefreshConfig = View;
    if (null != tmp64Result) {
      mobileVisualRefreshConfig = callback5;
      mobileVisualRefreshConfig = View;
      obj30 = {};
      const obj31 = { paddingBottom: result, paddingLeft: result };
      obj30.style = obj31;
      obj30.children = tmp64Result;
      mobileVisualRefreshConfig = callback5(View, obj30);
    }
    const items23 = [mobileVisualRefreshConfig, , , ];
    mobileVisualRefreshConfig = callback6;
    mobileVisualRefreshConfig = View;
    const obj32 = {};
    const items24 = [tmp6.inputFlat, ];
    const obj33 = { paddingBottom: result };
    items24[1] = obj33;
    obj32.style = items24;
    const items25 = [tmp73, ];
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = importDefault;
    mobileVisualRefreshConfig = dependencyMap;
    const obj34 = { analyticsLocations, ref: tmp54.chatInputCharCounter };
    items25[1] = callback5(importDefault(dependencyMap[84]), obj34);
    obj32.children = items25;
    items23[1] = callback6(View, obj32);
    mobileVisualRefreshConfig = null;
    if (editable) {
      const obj35 = {};
      const obj36 = { paddingBottom: result };
      obj35.style = obj36;
      mobileVisualRefreshConfig = importDefault;
      mobileVisualRefreshConfig = dependencyMap;
      mobileVisualRefreshConfig = callback5;
      mobileVisualRefreshConfig = View;
      mobileVisualRefreshConfig = callback5;
      const obj37 = { ref: tmp54.chatInputRightActions, channel, keyboardType: tmp43 };
      mobileVisualRefreshConfig = importDefault(dependencyMap[85]);
      if (!tmp16) {
        mobileVisualRefreshConfig = ref;
        mobileVisualRefreshConfig = dependencyMap;
        result2 = ref(dependencyMap[66]).isPremiumGiftingSupported();
        const obj75 = ref(dependencyMap[66]);
      }
      obj37.shouldShowGiftButton = result2;
      ({ handlePressAction: obj74.onPressAction, handlePressExpression: obj74.onPressExpression } = memo1);
      obj35.children = mobileVisualRefreshConfig(mobileVisualRefreshConfig, obj37);
      mobileVisualRefreshConfig = mobileVisualRefreshConfig(mobileVisualRefreshConfig, obj35);
    }
    items23[2] = mobileVisualRefreshConfig;
    items23[3] = tmp75Result;
    obj29.children = items23;
    items22[1] = mobileVisualRefreshConfig(mobileVisualRefreshConfig, obj29);
    obj27.children = items22;
    items20[2] = mobileVisualRefreshConfig(mobileVisualRefreshConfig, obj27);
    obj25.children = items20;
    mobileVisualRefreshConfig = obj25;
  } else {
    const items26 = [tmp62, ];
    const obj38 = { style: tmp6.containerInner, collapsable: false, accessibilityElementsHidden: tmp44 };
    let str3;
    mobileVisualRefreshConfig = callback6;
    mobileVisualRefreshConfig = View;
    if (tmp44) {
      str3 = "no-hide-descendants";
    }
    obj38.importantForAccessibility = str3;
    mobileVisualRefreshConfig = tmp64Result;
    if (enabled) {
      mobileVisualRefreshConfig = callback5;
      mobileVisualRefreshConfig = View;
      obj39 = { style: tmp6.refreshButtonAlignment, children: tmp64Result };
      mobileVisualRefreshConfig = callback5(View, obj39);
    }
    const items27 = [mobileVisualRefreshConfig, , ];
    const obj40 = {};
    const items28 = [tmp6.input, ];
    const obj41 = { minHeight: token - 2 * token6 };
    items28[1] = obj41;
    obj40.style = items28;
    const items29 = [tmp73, ];
    const obj42 = { style: tmp6.rightAccessory };
    mobileVisualRefreshConfig = null;
    mobileVisualRefreshConfig = callback6;
    mobileVisualRefreshConfig = View;
    mobileVisualRefreshConfig = callback6;
    mobileVisualRefreshConfig = View;
    if (editable) {
      mobileVisualRefreshConfig = callback5;
      mobileVisualRefreshConfig = importDefault;
      mobileVisualRefreshConfig = dependencyMap;
      const obj43 = {};
      mobileVisualRefreshConfig = ref;
      mobileVisualRefreshConfig = importDefault(dependencyMap[86]);
      obj43.active = tmp43 === ref(dependencyMap[50]).KeyboardTypes.EXPRESSION;
      obj43.onPress = memo1.handlePressExpression;
      mobileVisualRefreshConfig = callback5(mobileVisualRefreshConfig, obj43);
    }
    const items30 = [mobileVisualRefreshConfig, ];
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = importDefault;
    mobileVisualRefreshConfig = dependencyMap;
    obj44 = { analyticsLocations, ref: tmp54.chatInputCharCounter };
    items30[1] = callback5(importDefault(dependencyMap[84]), obj44);
    obj42.children = items30;
    items29[1] = mobileVisualRefreshConfig(mobileVisualRefreshConfig, obj42);
    obj40.children = items29;
    items27[1] = mobileVisualRefreshConfig(mobileVisualRefreshConfig, obj40);
    mobileVisualRefreshConfig = tmp75Result;
    if (enabled) {
      mobileVisualRefreshConfig = callback5;
      mobileVisualRefreshConfig = View;
      const obj45 = { style: tmp6.refreshButtonAlignment, children: tmp75Result };
      mobileVisualRefreshConfig = callback5(View, obj45);
    }
    items27[2] = mobileVisualRefreshConfig;
    obj38.children = items27;
    items26[1] = mobileVisualRefreshConfig(mobileVisualRefreshConfig, obj38);
    obj25.children = items26;
    mobileVisualRefreshConfig = obj25;
  }
  obj24.children = mobileVisualRefreshConfig(mobileVisualRefreshConfig, mobileVisualRefreshConfig);
  items17[13] = mobileVisualRefreshConfig(tmp13, obj24);
  mobileVisualRefreshConfig = null;
  if (null != refreshChatInputCoachmark) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = importDefault;
    mobileVisualRefreshConfig = dependencyMap;
    const obj46 = { buttonRef: ref1 };
    mobileVisualRefreshConfig = obj46;
    mobileVisualRefreshConfig = refreshChatInputCoachmark;
    mobileVisualRefreshConfig = importDefault(dependencyMap[39]);
    mobileVisualRefreshConfig = Object.assign(refreshChatInputCoachmark);
    mobileVisualRefreshConfig = callback5(mobileVisualRefreshConfig, obj46);
  }
  items17[14] = mobileVisualRefreshConfig;
  obj9.children = items17;
  mobileVisualRefreshConfig = callback6(View, obj9);
  if (null == threadCreationCallback) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = importDefault;
    mobileVisualRefreshConfig = dependencyMap;
    const obj47 = { channel, screenIndex, canSendMessages: editable, canCreateThreads, onJumpToPresent, isReadonly: !editable, children: mobileVisualRefreshConfig };
    mobileVisualRefreshConfig = callback5(importDefault(dependencyMap[87]), obj47);
  }
  return mobileVisualRefreshConfig;
});
forwardRefResult.displayName = "ChatInput";
const obj2 = arg1(dependencyMap[20]);
const memoResult = importAllResult.memo(forwardRefResult);
const result = arg1(dependencyMap[88]).fileFinishedImporting("modules/chat_input/native/ChatInput.tsx");

export default memoResult;
