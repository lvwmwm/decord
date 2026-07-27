// Module ID: 11089
// Function ID: 86127
// Name: ChatInput
// Dependencies: [5, 57, 31, 27, 6039, 11090, 9504, 5912, 11091, 4469, 5913, 3759, 4468, 9242, 11093, 653, 1455, 1853, 1552, 33, 4131, 689, 477, 1324, 3942, 3835, 11094, 11095, 566, 5996, 5462, 6020, 11097, 3992, 3997, 7952, 11099, 11100, 11101, 5604, 1207, 1556, 4675, 6134, 4666, 491, 4100, 675, 1555, 4325, 5668, 11146, 11308, 9610, 3990, 1819, 11309, 9269, 9232, 11329, 9627, 6130, 11332, 11333, 3790, 11349, 11350, 11351, 11352, 11358, 11359, 665, 11360, 11361, 11365, 11367, 11374, 11378, 11381, 11420, 11422, 11441, 10325, 11454, 11456, 11457, 11289, 11458, 2]

// Module 11089 (ChatInput)
import INITIAL_STATE from "INITIAL_STATE";
import toggleGuildExpandedState from "toggleGuildExpandedState";
import importAllResult from "_createForOfIteratorHelperLoose";
import { View } from "useTypingUserIds";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "INITIAL_STATE";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import { useVoiceMessagesUIStore } from "VoiceMessageRecordingStatus";
import closure_13 from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import getChatInputContainerHeight from "getChatInputContainerHeight";
import TextAreaCta from "TextAreaCta";
import ME from "ME";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { EmojiInteractionPoint } from "set";
import DRAG_HANDLE from "DRAG_HANDLE";
import jsxProd from "module_3992";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_32;
let closure_33;
let closure_34;
let closure_35;
let closure_36;
const require = arg1;
({ updateShowingAutoComplete: closure_18, useChatIsAtBottom: closure_19, useChatShowingAutoComplete: closure_20 } = getChatInputContainerHeight);
({ CHAT_INPUT_HORIZONTAL_PADDING: closure_21, CHAT_INPUT_HORIZONTAL_PADDING_PARENT: closure_22, ChatInputActionType: closure_23 } = TextAreaCta);
({ AnalyticEvents: closure_24, ChannelTypesSets: closure_25, ChatInputComponentViewedTypes: closure_26, ComponentActions: closure_27, MAX_UPLOAD_COUNT: closure_28, Permissions: closure_29 } = ME);
({ InAppCameraUsedCameraPreviewTypes: closure_32, MediaKeyboardTarget: closure_33 } = DRAG_HANDLE);
({ jsx: closure_34, jsxs: closure_35, Fragment: closure_36 } = jsxProd);
let closure_37 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, arg2) => {
  let obj = {};
  obj = { position: "relative", paddingVertical: importDefault(689).space.PX_8, paddingHorizontal: closure_21 - closure_22 };
  let BACKGROUND_BASE_LOW = arg0;
  if (null == arg0) {
    BACKGROUND_BASE_LOW = importDefault(689).colors.BACKGROUND_BASE_LOW;
  }
  obj.backgroundColor = BACKGROUND_BASE_LOW;
  obj.borderTopWidth = 1;
  obj.borderColor = importDefault(689).colors.BORDER_SUBTLE;
  obj.container = obj;
  obj.containerInner = { flexDirection: "row", alignItems: "flex-end" };
  obj = {};
  const merged = Object.assign(arg1 ? { alignSelf: "stretch", marginLeft: 0, marginTop: 0 } : { flex: 1, marginLeft: 6 });
  obj.inputDefault = obj;
  const obj1 = { flexDirection: "row", alignItems: "stretch", borderRadius: importDefault(689).modules.mobile.CHAT_INPUT_BORDER_RADIUS, paddingHorizontal: importDefault(689).modules.mobile.CHAT_INPUT_PILL_PADDING, marginHorizontal: importDefault(689).modules.mobile.CHAT_INPUT_PILL_MARGIN_HORIZONTAL, overflow: "hidden", flex: 1, borderWidth: importDefault(689).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: importDefault(689).colors.INPUT_BORDER_DEFAULT };
  if (null != arg0) {
    let CHAT_INPUT_BACKGROUND = importDefault(689).colors.CARD_SECONDARY_BG;
  } else {
    CHAT_INPUT_BACKGROUND = importDefault(689).colors.CHAT_INPUT_BACKGROUND;
  }
  obj1.backgroundColor = CHAT_INPUT_BACKGROUND;
  obj.input = obj1;
  const obj2 = { flexDirection: "column", justifyContent: "flex-end", alignItems: "center", paddingVertical: importDefault(689).modules.mobile.CHAT_INPUT_PILL_PADDING };
  obj.rightAccessory = obj2;
  obj.refreshButtonAlignment = { marginBottom: importDefault(689).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH };
  obj.accessories = { position: "absolute", bottom: "100%", left: 0, right: 0 };
  const obj4 = { borderTopWidth: 0, borderColor: "transparent", borderRadius: importDefault(689).radii.none, backgroundColor: "transparent", paddingHorizontal: importDefault(689).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 0, overflow: "visible" };
  obj.floatingContainer = obj4;
  const obj3 = { marginBottom: importDefault(689).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH };
  const tmp3 = arg1 ? { alignSelf: "stretch", marginLeft: 0, marginTop: 0 } : { flex: 1, marginLeft: 6 };
  obj.floatingInputBox = { backgroundColor: importDefault(689).colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: importDefault(689).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: importDefault(689).colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: importDefault(689).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" };
  const obj5 = { backgroundColor: importDefault(689).colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: importDefault(689).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: importDefault(689).colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: importDefault(689).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" };
  obj.floatingInputBoxPressed = { backgroundColor: importDefault(689).colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: importDefault(689).colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
  obj.floatingInputBoxTyping = { shadowOpacity: 0, elevation: 0 };
  const obj7 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: importDefault(689).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: importDefault(689).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: importDefault(689).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
  obj.floatingMainContents = obj7;
  const obj8 = { flex: 1, justifyContent: "center" };
  const obj6 = { backgroundColor: importDefault(689).colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: importDefault(689).colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
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
  ({ screenIndex, threadCreationCallback, onJumpToPresent } = channel);
  ref = undefined;
  let INITIAL_STATE;
  let callback;
  let stateFromStores;
  let stateFromStores1;
  editable = undefined;
  let callback2;
  let sharedValue;
  let c11;
  let memo1;
  ({ isResourceChannel, setNoExtractUI, secondaryTextFieldRef } = channel);
  let obj = channel(ref[23]);
  let mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "ChatInput" });
  ({ enabled, chatInputFloating } = mobileVisualRefreshConfig);
  let obj1 = channel(ref[24]);
  const gradientValue = obj1.useGradientValue(channel(ref[24]).GradientPercentage.END);
  let obj2 = channel(ref[25]);
  const token = obj2.useToken(chatInputFloating(ref[21]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj3 = channel(ref[25]);
  let result = (obj3.useToken(chatInputFloating(ref[21]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT) - token) / 2;
  let obj4 = channel(ref[25]);
  const token1 = obj4.useToken(chatInputFloating(ref[21]).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  const tmp6 = callback7(gradientValue, chatInputFloating, token1);
  let obj5 = channel(ref[25]);
  let token2 = obj5.useToken(chatInputFloating(ref[21]).colors.BACKGROUND_BASE_LOWER);
  if (null != gradientValue) {
    token2 = gradientValue;
  }
  let obj6 = channel(ref[25]);
  const token3 = obj6.useToken(chatInputFloating(ref[21]).modules.mobile.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED);
  let obj7 = channel(ref[25]);
  const token4 = obj7.useToken(chatInputFloating(ref[21]).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  let obj8 = channel(ref[25]);
  const token5 = obj8.useToken(chatInputFloating(ref[21]).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM);
  ref = stateFromStores.useRef(chatInputFloating);
  ref.current = chatInputFloating;
  let tmp12 = callback(stateFromStores.useState(false), 2);
  let floatingInputBoxPressed = tmp12[0];
  INITIAL_STATE = tmp12[1];
  if (chatInputFloating) {
    let tmp13 = chatInputFloating(ref[26]);
  } else {
    tmp13 = stateFromStores1;
  }
  callback = tmp16;
  const tmp17 = channel.isPrivate() && null == threadCreationCallback;
  let obj9 = channel(ref[27]);
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
  let obj10 = channel(ref[28]);
  const items = [closure_15];
  stateFromStores = obj10.useStateFromStores(items, () => {
    let editingTextValue = null;
    if (!c5) {
      editingTextValue = outer1_15.getEditingTextValue(channel.id);
    }
    return editingTextValue;
  });
  let obj11 = channel(ref[28]);
  const items1 = [c11];
  stateFromStores1 = obj11.useStateFromStores(items1, () => {
    let pendingReply;
    if (!c5) {
      pendingReply = _undefined.getPendingReply(channel.id);
    }
    return pendingReply;
  });
  let obj12 = channel(ref[28]);
  const items2 = [closure_17];
  let stateFromStores2 = obj12.useStateFromStores(items2, () => {
    if (c5) {
      return false;
    } else {
      const uploads = outer1_17.getUploads(channel.id, outer1_14.ChannelMessage);
      let tmp5 = null != uploads;
      if (tmp5) {
        tmp5 = uploads.length > 0;
      }
      return tmp5;
    }
  });
  const items3 = [channel.id, null != threadCreationCallback];
  let memo = stateFromStores.useMemo(() => outer1_13.getDraft(channel.id, c5 ? outer1_14.FirstThreadMessage : outer1_14.ChannelMessage), items3);
  if (null != stateFromStores) {
    memo = stateFromStores;
  }
  let obj13 = channel(ref[28]);
  const items4 = [closure_16];
  const items5 = [channel, null != threadCreationCallback];
  const stateFromStoresObject = obj13.useStateFromStoresObject(items4, () => {
    let canResult1 = outer1_16.can(outer1_29.MENTION_EVERYONE, channel);
    const canResult = outer1_16.can(outer1_29.ATTACH_FILES, channel);
    const canResult2 = outer1_16.can(outer1_29.SEND_MESSAGES, channel);
    let canResult4 = outer1_16.can(outer1_29.CREATE_PUBLIC_THREADS, channel);
    if (!canResult4) {
      canResult4 = outer1_16.can(outer1_29.CREATE_PRIVATE_THREADS, channel);
    }
    let canResult5 = outer1_16.can(outer1_29.SEND_MESSAGES_IN_THREADS, channel);
    let isPrivateResult = channel.isPrivate();
    let obj = channel(ref[29]);
    const isReadOnlyThread = obj.computeIsReadOnlyThread(channel);
    if (!c5) {
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
      tmp14 = !c5;
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
      tmp16 = !c5;
    }
    obj.canUpload = tmp16;
    if (!isPrivateResult) {
      isPrivateResult = canResult3;
    }
    if (isPrivateResult) {
      isPrivateResult = !tmp13;
    }
    if (isPrivateResult) {
      isPrivateResult = !c5;
    }
    obj.canSendVoiceMessage = isPrivateResult;
    obj.editable = !(!canResult5 || isReadOnlyThread);
    obj.canCreateThreads = canResult4;
    return obj;
  }, items5);
  ({ canUpload, editable } = stateFromStoresObject);
  ({ canMentionEveryone, canSendVoiceMessage, canCreateThreads } = stateFromStoresObject);
  const analyticsLocations = chatInputFloating(ref[30])().analyticsLocations;
  let tmp29 = tmp16;
  if (null == threadCreationCallback) {
    tmp29 = null != stateFromStores;
  }
  if (!tmp29) {
    let obj14 = channel(ref[29]);
    tmp29 = !obj14.getIsActiveChannelOrUnarchivableThread(channel);
  }
  let obj15 = channel(ref[29]);
  let canStartThread = obj15.useCanStartThread(channel);
  if (canStartThread) {
    const GUILD_THREADS_ONLY = constants.GUILD_THREADS_ONLY;
    canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
  }
  if (canStartThread) {
    canStartThread = !tmp16;
  }
  let obj16 = channel(ref[31]);
  const tmp35 = obj16.useCanPostPollsInChannel(channel) && null == threadCreationCallback;
  let obj17 = channel(ref[25]);
  const token6 = obj17.useToken(chatInputFloating(ref[21]).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH);
  if (enabled) {
    let diff = token - 2 * token6;
  } else {
    let obj18 = channel(ref[32]);
    diff = obj18.getChatInputMinHeight();
  }
  callback2 = diff;
  let obj19 = channel(ref[33]);
  let tmp40 = diff;
  if (chatInputFloating) {
    tmp40 = token;
  }
  sharedValue = obj19.useSharedValue(tmp40);
  const items6 = [chatInputFloating, token, diff, sharedValue];
  const effect = stateFromStores.useEffect(() => {
    const result = sharedValue.set(chatInputFloating ? token : c9);
  }, items6);
  const tmp43 = chatInputFloating(ref[34])();
  const tmp44 = memo1((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  let result2 = !tmp16;
  let isAppLauncherEnabled = result2;
  if (null == threadCreationCallback) {
    let obj20 = channel(ref[35]);
    isAppLauncherEnabled = obj20.getIsAppLauncherEnabled(channel);
  }
  let obj21 = channel(ref[28]);
  const items7 = [editable];
  const stateFromStores3 = obj21.useStateFromStores(items7, () => editable.getActiveCommand(channel.id));
  obj = { channel, isReadonly: !editable, isCreatingThread: tmp16 };
  tmp19 = callback4(screenIndex);
  let num5 = 8;
  ({ placeholder, accessibilityLabel } = chatInputFloating(ref[36])(obj));
  if (enabled) {
    num5 = 5;
  }
  let obj23 = channel(ref[33]);
  class We {
    constructor() {
      obj = { minHeight: c10.get() };
      return obj;
    }
  }
  We.__closure = { textFieldHeight: sharedValue };
  We.__workletHash = 11048691841625;
  We.__initData = closure_38;
  const animatedStyle = obj23.useAnimatedStyle(We);
  const ref1 = stateFromStores.useRef(null);
  let obj24 = channel(ref[37]);
  obj = { disabled: !editable };
  const refreshChatInputCoachmark = obj24.useRefreshChatInputCoachmark(obj);
  obj1 = { chatInputProps: obj2, chatInputTextFieldHeight: sharedValue, ref };
  obj2 = { analyticsLocations, canUpload, channel, defaultValue: memo, hasAttachmentsToUpload: stateFromStores2, pendingEdit: stateFromStores, pendingReply: stateFromStores1, screenIndex, secondaryTextFieldRef, threadCreationCallback };
  const tmp54 = chatInputFloating(ref[38])(obj1);
  c11 = tmp54;
  const items8 = [tmp54];
  const effect1 = stateFromStores.useEffect(() => {
    const current = _undefined.chatInput.current;
    current.setText(_undefined.props.current.defaultValue);
  }, items8);
  const items9 = [tmp54, channel, stateFromStores, stateFromStores1];
  const effect2 = stateFromStores.useEffect(() => {
    const current = _undefined.propsPrev.current;
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
      const current2 = _undefined.chatInput.current;
      if (null != current2) {
        current2.focus();
      }
    }
    const id = _undefined.propsPrev.current.channel.id;
    if (id !== channel.id) {
      if (id !== channel(ref[39]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
        const current4 = _undefined.chatInput.current;
        if (null != current4) {
          current4.setText(_undefined.props.current.defaultValue);
        }
      }
    }
    if (pendingEdit !== stateFromStores) {
      const current3 = _undefined.chatInput.current;
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
  const effect3 = stateFromStores.useEffect(() => {
    function handleOpenKeyboard(channelId) {
      channelId = undefined;
      if (null != channelId) {
        channelId = channelId.channelId;
      }
      const current = outer1_11.props.current;
      let id;
      if (null != current) {
        id = current.channel.id;
      }
      if (channelId === id) {
        const current2 = outer1_11.chatInput.current;
        if (null != current2) {
          current2.openSystemKeyboard();
        }
      }
    }
    let ComponentDispatch = channel(ref[40]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(outer1_27.TEXTAREA_FOCUS, handleOpenKeyboard);
    return () => {
      const ComponentDispatch = channel(ref[40]).ComponentDispatch;
      ComponentDispatch.unsubscribe(outer2_27.TEXTAREA_FOCUS, handleOpenKeyboard);
    };
  }, items10);
  const items11 = [tmp54];
  memo1 = stateFromStores.useMemo(() => {
    let obj = {
      handleBlur(nativeEvent) {
        let obj = channel(ref[41]);
        const result = obj.setIsAnyChatInputFocused(false);
        const result1 = outer1_12.handleTextOrFocusChange(str, false);
        outer1_11.state.current.focused = false;
        outer1_4(false);
        const current = outer1_11.chatInputCover.current;
        if (null != current) {
          current.focused(false);
        }
        const current2 = outer1_11.chatInputAppCommandManager.current;
        if (null != current2) {
          current2.updateState();
        }
        const current3 = outer1_11.chatInputAutocomplete.current;
        if (null != current3) {
          obj = { focused: false, text: str, selectionStart: outer1_11.state.current.selectionStart, selectionEnd: outer1_11.state.current.selectionEnd };
          current3.setData(obj);
        }
        const current4 = outer1_11.chatInputSendButton.current;
        if (null != current4) {
          current4.setHasText(str.trim().length > 0);
        }
      },
      handleFocus(nativeEvent) {
        let end;
        let start;
        ({ start, end } = nativeEvent.nativeEvent);
        let obj = channel(ref[41]);
        const result = obj.setIsAnyChatInputFocused(true);
        outer1_11.state.current.focused = true;
        outer1_4(true);
        outer1_11.state.current.selectionStart = start;
        outer1_11.state.current.selectionEnd = end;
        const result1 = outer1_12.handleTextOrFocusChange(outer1_11.state.current.text, true);
        const current = outer1_11.chatInputAppCommandManager.current;
        if (null != current) {
          current.updateState();
        }
        const current2 = outer1_11.chatInputCover.current;
        if (null != current2) {
          current2.focused(true);
        }
        const current3 = outer1_11.chatInputAutocomplete.current;
        if (null != current3) {
          obj = { focused: true, text: outer1_11.state.current.text, selectionStart: start, selectionEnd: end };
          current3.setData(obj);
        }
      },
      handleChangeContentSize(nativeEvent) {
        const height = nativeEvent.nativeEvent.height;
        outer1_11.state.current.textFieldContentSize = height;
        const textFieldHeight = outer1_11.state.current.textFieldHeight;
        const result = textFieldHeight.set(channel(ref[32]).getChatInputHeightAnimationTiming(height));
      },
      handleLayoutOfInputContainer(arg0) {
        const current = outer1_11.chatInputAutocomplete.current;
        if (null != current) {
          current.setChatInputHeight(tmp.layout.height);
        }
      },
      handleLayout(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        const height = layout.height;
        if (tmp) {
          if (null == outer1_11.props.current.threadCreationCallback) {
            const current = outer1_11.chatInput.current;
            const result = current.updateChatInputContainerHeightDebounced(height);
          }
        }
      },
      handleMaxHeightChanged() {
        const textFieldContentSize = outer1_11.state.current.textFieldContentSize;
        if (0 !== textFieldContentSize) {
          const textFieldHeight = outer1_11.state.current.textFieldHeight;
          const result = textFieldHeight.set(channel(ref[32]).getChatInputHeightAnimationTiming(textFieldContentSize));
          const obj = channel(ref[32]);
        }
      },
      handleChangeAutoCompleteVisibility(arg0) {
        outer2_18(outer1_11.props.current.screenIndex, arg0);
      },
      handlePasteCommand
    };
    handlePasteCommand = function handlePasteCommand(arg0) {
      if (outer1_11.state.current.focused) {
        const current = outer1_11.chatInputAppCommandManager.current;
        let tmp4 = null == current;
        let obj = current;
        if (!tmp4) {
          const applicationCommandManager = current.getApplicationCommandManager();
          tmp4 = null == applicationCommandManager;
          obj = applicationCommandManager;
        }
        if (!tmp4) {
          obj.setPastedCommand(tmp, outer1_11.props.current.channel);
        }
      }
    };
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(handlePasteCommand);
    obj.handlePasteImage = function() {
      return callback(...arguments);
    };
    obj.handlePressAction = function handlePressAction(arg0, arg1, current2) {
      if (outer2_23.PHOTOS === arg1) {
        const result = channel(ref[46]).triggerHapticFeedback(channel(ref[46]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj21 = channel(ref[46]);
        let obj = { type: outer2_26.ADD_BUTTON, channel_id: outer1_11.props.current.channel.id, guild_id: outer1_11.props.current.channel.guild_id };
        chatInputFloating(ref[47]).track(outer2_24.CHAT_INPUT_COMPONENT_VIEWED, obj);
        if (outer1_3.current) {
          const keyboardType = channel(ref[34]).getKeyboardType();
          if (keyboardType === channel(ref[48]).KeyboardTypes.APP_LAUNCHER) {
            obj = { type: channel(ref[48]).KeyboardTypes.APP_LAUNCHER };
            outer1_12.handleToggleKeyboard(obj);
          }
          const obj24 = channel(ref[34]);
        }
        const obj22 = chatInputFloating(ref[47]);
        const keyboardType1 = channel(ref[34]).getKeyboardType();
        if (keyboardType1 === channel(ref[48]).KeyboardTypes.MEDIA) {
          const current = outer1_11.chatInputActions.current;
          if (null != current) {
            current.focusPhotosButton();
          }
        }
        let obj1 = { type: channel(ref[48]).KeyboardTypes.MEDIA };
        let obj2 = { target: outer2_33.CHAT };
        obj1.context = obj2;
        outer1_12.handleToggleKeyboard(obj1);
        const obj25 = channel(ref[34]);
      } else if (outer2_23.APPS === arg1) {
        const result1 = channel(ref[46]).triggerHapticFeedback(channel(ref[46]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj12 = channel(ref[46]);
        channel(ref[49]).trackWithMetadata(outer2_24.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED);
        const obj13 = channel(ref[49]);
        let obj3 = { type: outer2_26.APPS_BUTTON, channel_id: outer1_11.props.current.channel.id, guild_id: outer1_11.props.current.channel.guild_id };
        chatInputFloating(ref[47]).track(outer2_24.CHAT_INPUT_COMPONENT_VIEWED, obj3);
        const obj14 = chatInputFloating(ref[47]);
        const result2 = token(ref[50]).dismissNewActivityIndicator();
        const obj16 = token(ref[50]);
        let tmp40 = null;
        if (null != current2) {
          tmp40 = current2;
        }
        const result3 = channel(ref[51]).setAppLauncherA11yFocusReturnRef(tmp40);
        let obj4 = { type: channel(ref[48]).KeyboardTypes.APP_LAUNCHER };
        let obj5 = { initialRouteName: outer2_30.HOME };
        const obj17 = channel(ref[51]);
        const appDMApplication = channel(ref[52]).getAppDMApplication(outer1_11.props.current.channel);
        let name;
        if (null != appDMApplication) {
          name = appDMApplication.name;
        }
        obj5.initialSearchQuery = name;
        obj4.context = obj5;
        outer1_12.handleToggleKeyboard(obj4);
        const obj20 = channel(ref[52]);
      } else if (outer2_23.ALL_PHOTOS === arg1) {
        const result4 = channel(ref[46]).triggerHapticFeedback(channel(ref[46]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj9 = channel(ref[46]);
        let obj6 = {
          channel: outer1_11.props.current.channel,
          uploadLimit: outer2_28,
          onDismissKeyboard() {
              return channel(ref[54]).dismissKeyboard();
            },
          onRestoreKeyboard() {
              return outer2_12.handleToggleKeyboard({ type: channel(ref[48]).KeyboardTypes.SYSTEM });
            },
          onSelectFiles(items) {
              channel(ref[53]).addImagesFromPicker(outer2_11.props.current.channel.id, items, channel(ref[44]).UploadOrigin.IMAGE_PICKER);
            },
          draftType: outer2_14.ChannelMessage
        };
        channel(ref[53]).handleViewAllDialog(obj6);
        const obj10 = channel(ref[53]);
      } else if (outer2_23.CAMERA === arg1) {
        obj5 = channel(ref[46]);
        const result5 = obj5.triggerHapticFeedback(channel(ref[46]).HapticFeedbackTypes.IMPACT_LIGHT);
        obj6 = channel(ref[53]);
        const obj7 = {
          channel: outer1_11.props.current.channel,
          previewType: outer2_32.CAMERA_BUTTON,
          onDismissKeyboard() {
              return channel(ref[54]).dismissKeyboard();
            },
          onRestoreKeyboard() {
              return outer2_12.handleToggleKeyboard({ type: channel(ref[48]).KeyboardTypes.SYSTEM });
            },
          onSelectFiles(items) {
              channel(ref[53]).addImagesFromPicker(outer2_11.props.current.channel.id, items, channel(ref[44]).UploadOrigin.IMAGE_PICKER);
            }
        };
        obj6.handleCameraDialog(obj7);
      } else if (outer2_23.NITRO_GIFT === arg1) {
        obj = chatInputFloating(ref[55]);
        const result6 = obj.markPotentialBadState();
        obj1 = channel(ref[46]);
        const result7 = obj1.triggerHapticFeedback(channel(ref[46]).HapticFeedbackTypes.IMPACT_LIGHT);
        obj2 = channel(ref[22]);
        if (obj2.isAndroid()) {
          obj3 = channel(ref[54]);
          obj3.dismissKeyboard();
        }
        obj4 = channel(ref[53]);
        obj4.handleSelectGift(outer1_11.props.current.analyticsLocations, outer1_11.chatInput, current2);
      } else if (outer2_23.THREAD === arg1) {
        const result8 = channel(ref[46]).triggerHapticFeedback(channel(ref[46]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj29 = channel(ref[46]);
        channel(ref[53]).handleSelectThread(outer1_11.props.current.channel, outer1_11.chatInput);
        const obj30 = channel(ref[53]);
      }
    };
    obj.handlePollsPress = function handlePollsPress() {
      let obj = channel(ref[46]);
      const result = obj.triggerHapticFeedback(channel(ref[46]).HapticFeedbackTypes.IMPACT_LIGHT);
      obj = { type: outer2_26.POLLS, channel_id: outer1_11.props.current.channel.id, guild_id: outer1_11.props.current.channel.guild_id };
      chatInputFloating(ref[47]).track(outer2_24.CHAT_INPUT_COMPONENT_VIEWED, obj);
      const obj2 = chatInputFloating(ref[47]);
      channel(ref[54]).dismissKeyboard();
      const obj4 = channel(ref[54]);
      obj = {
        channel: outer1_11.props.current.channel,
        onCancel() {
          return outer2_12.handleToggleKeyboard({ type: channel(ref[48]).KeyboardTypes.SYSTEM });
        }
      };
      channel(ref[56]).openCreatePollModal(obj);
    };
    obj.handleAttachPress = function handleAttachPress() {
      let obj = channel(ref[46]);
      const result = obj.triggerHapticFeedback(channel(ref[46]).HapticFeedbackTypes.IMPACT_LIGHT);
      obj = {
        channel: outer1_11.props.current.channel,
        uploadLimit: outer2_28,
        onDismissKeyboard() {
          return channel(ref[54]).dismissKeyboard();
        },
        onRestoreKeyboard() {
          return outer2_12.handleToggleKeyboard({ type: channel(ref[48]).KeyboardTypes.SYSTEM });
        },
        onSelectFiles(items) {
          channel(ref[53]).addImagesFromPicker(outer2_11.props.current.channel.id, items, channel(ref[44]).UploadOrigin.FILE_ATTACHMENT);
        }
      };
      channel(ref[53]).handleAttachFile(obj);
    };
    obj.handlePressExpression = function handlePressExpression(context) {
      let obj = channel(ref[57]);
      const result = obj.initiateEmojiInteraction(outer2_31.ChatInputExpressionPressed);
      obj = { type: channel(ref[48]).KeyboardTypes.EXPRESSION, context };
      outer1_12.handleToggleKeyboard(obj);
    };
    obj.handlePressSend = function handlePressSend() {
      const current = outer1_11.chatInput.current;
      current.handleSend();
    };
    obj.handleSelectionOrTextChange = function handleSelectionOrTextChange(nativeEvent) {
      let editId;
      let end;
      let start;
      let text;
      ({ start, end, text, editId } = nativeEvent.nativeEvent);
      outer1_11.state.current.editId = editId;
      outer1_11.state.current.selectionStart = start;
      outer1_11.state.current.selectionEnd = end;
      const result = outer1_12.handleTextOrFocusChange(text, outer1_11.state.current.focused);
      const current = outer1_11.chatInputAppCommandManager.current;
      if (null != current) {
        current.updateState();
      }
      const current2 = outer1_11.chatInputAutocomplete.current;
      if (null != current2) {
        const obj = { focused: outer1_11.state.current.focused, text, selectionStart: start, selectionEnd: end };
        current2.setData(obj);
      }
      const current3 = outer1_11.chatInputSendButton.current;
      if (null != current3) {
        current3.setHasText(text.trim().length > 0);
      }
      if (outer1_11.state.current.editId !== editId) {
        const current4 = outer1_11.chatInput.current;
        current4.handleTextChanged(text);
        const current5 = outer1_11.chatInputCharCounter.current;
        if (null != current5) {
          const result1 = current5.onMessageLengthChanged(text.length);
        }
        channel(ref[58]).hideContextMenu();
        const obj2 = channel(ref[58]);
      }
    };
    obj.handleTapAction = function handleTapAction(nativeEvent) {
      let channelId;
      let optionName;
      const tapAction = nativeEvent.nativeEvent.tapAction;
      if ("tapAttachment" === tapAction.action) {
        let current = outer1_11.chatInput.current;
        current.blur();
        let fn;
        const obj = channel(ref[59]);
        const current2 = outer1_11.chatInput.current;
        const applicationCommandManager = current2.getApplicationCommandManager();
        ({ channelId, optionName } = tapAction);
        if (outer1_11.state.current.focused) {
          fn = () => {
            const current = outer2_11.chatInput.current;
            return current.openSystemKeyboard();
          };
        }
        const result = obj.openCommandAttachmentPreview(applicationCommandManager, channelId, optionName, fn);
      }
    };
    obj.handleTextOrFocusChange = function handleTextOrFocusChange(text, focused) {
      if (text.length > 0) {
        if (!focused) {
          const maxMessageLength = channel(ref[61]).getMaxMessageLength();
          if (tmp17) {
            chatInputFloating(ref[47]).track(outer2_24.MESSAGE_LENGTH_LIMIT_REACHED, {});
            const obj3 = chatInputFloating(ref[47]);
          }
          outer1_11.state.current.textPrev = outer1_11.state.current.text;
          outer1_11.state.current.text = text;
        }
        if (sharedValue.isOpen()) {
          chatInputFloating(ref[60]).hideNativeMenu();
          const obj = chatInputFloating(ref[60]);
        }
        const current2 = outer1_11.chatInputActions.current;
        if (null != current2) {
          current2.onDismissActions(focused);
        }
        const current3 = outer1_11.chatInputRightActions.current;
        if (null != current3) {
          current3.onDismissActions(focused);
        }
      }
      if (0 === text.length) {
        const current4 = outer1_11.chatInputActions.current;
        if (null != current4) {
          current4.onShowActions(focused);
        }
        const current = outer1_11.chatInputRightActions.current;
        if (null != current) {
          current.onShowActions(focused);
        }
      }
    };
    obj.handleTextFlushed = function handleTextFlushed(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const current = outer1_11.chatInputTextFlushedResponses.current;
      const value = current.get(nativeEvent.requestId);
      if (null != value) {
        value(nativeEvent.text);
      }
    };
    obj.handleToggleKeyboard = function handleToggleKeyboard(type) {
      if (sharedValue.isOpen()) {
        chatInputFloating(ref[60]).hideNativeMenu();
        const obj = chatInputFloating(ref[60]);
      }
      if (type.type !== channel(ref[48]).KeyboardTypes.SYSTEM) {
        if (type.type !== obj2.getKeyboardType()) {
          const current = outer1_11.chatInput.current;
          current.openCustomKeyboard(type);
        }
      }
      const current2 = outer1_11.chatInput.current;
      current2.openSystemKeyboard();
    };
    return obj;
  }, items11);
  const items12 = [null != threadCreationCallback, tmp54];
  callback = stateFromStores.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const height = layout.height;
    if (tmp) {
      if (!c5) {
        const current = _undefined.chatInput.current;
        const result = current.updateChatInputContainerHeightDebounced(height);
      }
    }
  }, items12);
  const items13 = [editable, tmp54];
  const callback1 = stateFromStores.useCallback(() => true, []);
  callback2 = stateFromStores.useCallback(() => {
    if (editable) {
      const current = _undefined.chatInput.current;
      current.openSystemKeyboard();
    }
  }, items13);
  obj3 = { canUpload, channelId: channel.id, screenIndex };
  const tmp62 = callback5(chatInputFloating(ref[62]), obj3);
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
      let obj30 = channel(ref[64]);
      result1 = obj30.isPremiumGiftingSupported();
    }
    obj4.shouldShowGiftButton = result1;
    obj4.canPostPolls = tmp35;
    ({ handlePollsPress: obj30.onPollsPress, handleAttachPress: obj30.onAttachPress } = memo1);
    obj4.photosButtonExternalRef = ref1;
    tmp64Result = callback5(chatInputFloating(ref[63]), obj4);
    const tmp64 = callback5;
    const tmp67 = chatInputFloating(ref[63]);
  }
  obj5 = { style: items14 };
  items14 = [tmp6.inputDefault, animatedStyle];
  obj6 = { accessibilityLabel };
  const tmp50 = chatInputFloating(ref[36])(obj);
  obj6.customKeyboard = channel(ref[66]).PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
  obj6.editable = editable;
  ({ handleFocus: obj33.onBeginFocus, handleBlur: obj33.onEndBlur, handleChangeContentSize: obj33.onChangeContentSize, handleMaxHeightChanged: obj33.onMaxHeightChanged, handleSelectionOrTextChange: obj33.onSelectionOrTextChange, handleTextFlushed: obj33.onTextFlushed, handlePasteImage: obj33.onPasteImage, handlePasteCommand: obj33.onPasteCommand, handleTapAction: obj33.onTapAction, handlePressSend: obj33.onRequestSend } = memo1);
  obj6.placeholder = placeholder;
  obj6.ref = tmp54.chatInputNative;
  obj6.setNoExtractUI = setNoExtractUI;
  obj6.shouldShowCursor = tmp43 !== channel(ref[48]).KeyboardTypes.MEDIA;
  obj6.verticalInset = num5;
  const items15 = [callback5(chatInputFloating(ref[65]), obj6), ];
  obj7 = { keyboardType: tmp43, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp54.chatInputCover };
  items15[1] = callback5(chatInputFloating(ref[67]), obj7);
  obj5.children = items15;
  const tmp73 = callback6(chatInputFloating(ref[33]).View, obj5);
  if (editable) {
    obj8 = { ref: tmp54.chatInputSendButton, canSendVoiceMessage, channel, defaultValue: memo };
    if (stateFromStores2) {
      stateFromStores2 = canUpload;
    }
    obj8.hasPendingAttachments = stateFromStores2;
    obj8.hasPendingEdit = null != stateFromStores;
    obj8.onSendMessage = memo1.handlePressSend;
    obj8.requireTextContent = result2;
    let tmp75Result = callback5(chatInputFloating(ref[68]), obj8);
    const tmp75 = callback5;
    const tmp78 = chatInputFloating(ref[68]);
  } else {
    tmp75Result = null;
  }
  obj9 = { collapsable: false, onLayout: callback };
  const items16 = [chatInputFloating(ref[69])({ isCreatingThread: null != threadCreationCallback }), , ];
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
    tmp81 = callback5(channel(ref[70]).ChatInputScrimGradient, obj10);
  }
  const items17 = [tmp81, , , , , , , , , , , , , , ];
  let tmp86Result = chatInputFloating;
  if (chatInputFloating) {
    tmp86Result = floatingInputBoxTyping;
  }
  if (tmp86Result) {
    obj11 = {};
    obj12 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
    let obj39 = channel(ref[71]);
    const hex2rgbResult = obj39.hex2rgb(token2, 1);
    let tmp91 = token2;
    if (null != hex2rgbResult) {
      tmp91 = hex2rgbResult;
    }
    obj12.backgroundColor = tmp91;
    obj11.style = obj12;
    obj11.pointerEvents = "none";
    tmp86Result = callback5(stateFromStores1, obj11);
    const tmp86 = callback5;
    const tmp87 = stateFromStores1;
  }
  items17[1] = tmp86Result;
  items17[2] = callback5(channel(ref[72]).ChatInputAccessibilityDivider, {});
  let tmp93Result = null;
  if (tmp17) {
    obj13 = { channel };
    let tmp97 = "" !== memo;
    if (!tmp97) {
      let current = tmp54.chatInput.current;
      let text;
      if (null != current) {
        text = current.getText();
      }
      tmp97 = "" !== text;
    }
    obj13.hasInputText = tmp97;
    tmp93Result = callback5(chatInputFloating(ref[73]), obj13);
    const tmp93 = callback5;
    const tmp96 = chatInputFloating(ref[73]);
  }
  items17[3] = tmp93Result;
  obj14 = { style: tmp6.accessories };
  mobileVisualRefreshConfig = chatInputFloating;
  mobileVisualRefreshConfig = stateFromStores1;
  if (chatInputFloating) {
    mobileVisualRefreshConfig = floatingInputBoxTyping;
  }
  if (mobileVisualRefreshConfig) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = channel;
    mobileVisualRefreshConfig = ref;
    obj15 = { gradientHeight: tmp23, inline: true, scrimBase: token2 };
    mobileVisualRefreshConfig = callback5(channel(ref[70]).ChatInputScrimGradient, obj15);
  }
  const items18 = [mobileVisualRefreshConfig, , ];
  mobileVisualRefreshConfig = null;
  if (null == threadCreationCallback) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = chatInputFloating;
    mobileVisualRefreshConfig = ref;
    obj16 = { channel, screenIndex };
    mobileVisualRefreshConfig = callback5(chatInputFloating(ref[74]), obj16);
  }
  items18[1] = mobileVisualRefreshConfig;
  let obj44 = channel(ref[22]);
  mobileVisualRefreshConfig = null;
  if (obj44.isIOS()) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = chatInputFloating;
    mobileVisualRefreshConfig = ref;
    obj17 = { channelId: channel.id, screenIndex, onJumpToPresent };
    mobileVisualRefreshConfig = callback5(chatInputFloating(ref[75]), obj17);
  }
  items18[2] = mobileVisualRefreshConfig;
  obj14.children = items18;
  items17[4] = callback6(mobileVisualRefreshConfig, obj14);
  mobileVisualRefreshConfig = null;
  if (isResourceChannel) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = chatInputFloating;
    mobileVisualRefreshConfig = ref;
    obj18 = { channel };
    mobileVisualRefreshConfig = callback5(chatInputFloating(ref[76]), obj18, channel.id);
  }
  items17[5] = mobileVisualRefreshConfig;
  items17[6] = callback5(channel(ref[77]).MemberActionsChatInputBannerGuardedOuter, { channel });
  items17[7] = callback5(channel(ref[78]).DoubleTapToReactChatInputBanner, { channel });
  mobileVisualRefreshConfig = null;
  if (tmp18) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = chatInputFloating;
    mobileVisualRefreshConfig = ref;
    obj19 = { channelId: channel.id };
    mobileVisualRefreshConfig = callback5(chatInputFloating(ref[79]), obj19);
  }
  items17[8] = mobileVisualRefreshConfig;
  mobileVisualRefreshConfig = null;
  if (tmp43 !== channel(ref[48]).KeyboardTypes.EXPRESSION) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = chatInputFloating;
    mobileVisualRefreshConfig = ref;
    obj20 = { ref: tmp54.chatInputAutocomplete, analyticsLocations, channel, canMentionEveryone, keyboardType: tmp43, onChangeAutoCompleteVisibility: memo1.handleChangeAutoCompleteVisibility, commandsDisabled: tmp29, canOnlyUseTextCommands: tmp32, chatInputRef: tmp54.chatInput, screenIndex };
    mobileVisualRefreshConfig = callback5(chatInputFloating(ref[80]), obj20);
  }
  items17[9] = mobileVisualRefreshConfig;
  mobileVisualRefreshConfig = !chatInputFloating;
  if (mobileVisualRefreshConfig) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = chatInputFloating;
    mobileVisualRefreshConfig = ref;
    obj21 = { channel };
    mobileVisualRefreshConfig = callback5(chatInputFloating(ref[81]), obj21);
  }
  items17[10] = mobileVisualRefreshConfig;
  mobileVisualRefreshConfig = !chatInputFloating;
  if (mobileVisualRefreshConfig) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = chatInputFloating;
    mobileVisualRefreshConfig = ref;
    let obj22 = { channel, chatInputRef: tmp54.chatInput, pendingEdit: stateFromStores, pendingReply: stateFromStores1 };
    mobileVisualRefreshConfig = callback5(chatInputFloating(ref[82]), obj22);
  }
  items17[11] = mobileVisualRefreshConfig;
  mobileVisualRefreshConfig = callback5;
  obj23 = { ref: tmp54.chatInputAppCommandManager, canOnlyUseTextCommands: tmp32, channel, chatInputRef: tmp54.chatInput, chatInputStateRef: tmp54.state, commandsDisabled: tmp29 };
  items17[12] = callback5(chatInputFloating(ref[83]), obj23);
  obj24 = {};
  const items19 = [tmp6.container, ];
  let floatingContainer = chatInputFloating;
  if (chatInputFloating) {
    floatingContainer = tmp6.floatingContainer;
  }
  items19[1] = floatingContainer;
  obj24.style = items19;
  obj24.onLayout = memo1.handleLayoutOfInputContainer;
  let obj25 = {};
  mobileVisualRefreshConfig = callback6;
  mobileVisualRefreshConfig = closure_36;
  if (chatInputFloating) {
    const items20 = [tmp62, , ];
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = chatInputFloating;
    mobileVisualRefreshConfig = ref;
    const obj26 = { channel };
    items20[1] = callback5(chatInputFloating(ref[81]), obj26);
    const obj27 = {};
    const items21 = [tmp6.floatingInputBox, , ];
    mobileVisualRefreshConfig = callback6;
    mobileVisualRefreshConfig = stateFromStores1;
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
    mobileVisualRefreshConfig = chatInputFloating;
    mobileVisualRefreshConfig = ref;
    const obj28 = { channel, chatInputRef: tmp54.chatInput, pendingEdit: stateFromStores, pendingReply: stateFromStores1 };
    const items22 = [callback5(chatInputFloating(ref[82]), obj28), ];
    let obj29 = { style: tmp6.floatingMainContents };
    mobileVisualRefreshConfig = null;
    mobileVisualRefreshConfig = callback6;
    mobileVisualRefreshConfig = stateFromStores1;
    if (null != tmp64Result) {
      mobileVisualRefreshConfig = callback5;
      mobileVisualRefreshConfig = stateFromStores1;
      obj30 = {};
      const obj31 = { paddingBottom: result, paddingLeft: result };
      obj30.style = obj31;
      obj30.children = tmp64Result;
      mobileVisualRefreshConfig = callback5(stateFromStores1, obj30);
    }
    const items23 = [mobileVisualRefreshConfig, , , ];
    mobileVisualRefreshConfig = callback6;
    mobileVisualRefreshConfig = stateFromStores1;
    const obj32 = {};
    const items24 = [tmp6.inputFlat, ];
    const obj33 = { paddingBottom: result };
    items24[1] = obj33;
    obj32.style = items24;
    const items25 = [tmp73, ];
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = chatInputFloating;
    mobileVisualRefreshConfig = ref;
    const obj34 = { analyticsLocations, ref: tmp54.chatInputCharCounter };
    items25[1] = callback5(chatInputFloating(ref[84]), obj34);
    obj32.children = items25;
    items23[1] = callback6(stateFromStores1, obj32);
    mobileVisualRefreshConfig = null;
    if (editable) {
      mobileVisualRefreshConfig = callback5;
      const obj35 = {};
      const obj36 = { paddingBottom: result };
      obj35.style = obj36;
      mobileVisualRefreshConfig = chatInputFloating;
      mobileVisualRefreshConfig = ref;
      mobileVisualRefreshConfig = stateFromStores1;
      const obj37 = { ref: tmp54.chatInputRightActions, channel, keyboardType: tmp43 };
      mobileVisualRefreshConfig = chatInputFloating(ref[85]);
      if (!tmp16) {
        mobileVisualRefreshConfig = channel;
        mobileVisualRefreshConfig = ref;
        result2 = channel(ref[64]).isPremiumGiftingSupported();
        const obj75 = channel(ref[64]);
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
    mobileVisualRefreshConfig = stateFromStores1;
    if (tmp44) {
      str3 = "no-hide-descendants";
    }
    obj38.importantForAccessibility = str3;
    mobileVisualRefreshConfig = tmp64Result;
    if (enabled) {
      mobileVisualRefreshConfig = callback5;
      mobileVisualRefreshConfig = stateFromStores1;
      obj39 = { style: tmp6.refreshButtonAlignment, children: tmp64Result };
      mobileVisualRefreshConfig = callback5(stateFromStores1, obj39);
    }
    const items27 = [mobileVisualRefreshConfig, , ];
    mobileVisualRefreshConfig = callback6;
    mobileVisualRefreshConfig = stateFromStores1;
    const obj40 = {};
    const items28 = [tmp6.input, ];
    const obj41 = { minHeight: token - 2 * token6 };
    items28[1] = obj41;
    obj40.style = items28;
    const items29 = [tmp73, ];
    const obj42 = { style: tmp6.rightAccessory };
    mobileVisualRefreshConfig = null;
    if (editable) {
      mobileVisualRefreshConfig = callback5;
      mobileVisualRefreshConfig = chatInputFloating;
      mobileVisualRefreshConfig = ref;
      const obj43 = {};
      mobileVisualRefreshConfig = channel;
      mobileVisualRefreshConfig = chatInputFloating(ref[86]);
      obj43.active = tmp43 === channel(ref[48]).KeyboardTypes.EXPRESSION;
      obj43.onPress = memo1.handlePressExpression;
      mobileVisualRefreshConfig = callback5(mobileVisualRefreshConfig, obj43);
    }
    const items30 = [mobileVisualRefreshConfig, ];
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = chatInputFloating;
    mobileVisualRefreshConfig = ref;
    obj44 = { analyticsLocations, ref: tmp54.chatInputCharCounter };
    items30[1] = callback5(chatInputFloating(ref[84]), obj44);
    obj42.children = items30;
    items29[1] = mobileVisualRefreshConfig(mobileVisualRefreshConfig, obj42);
    obj40.children = items29;
    items27[1] = mobileVisualRefreshConfig(mobileVisualRefreshConfig, obj40);
    mobileVisualRefreshConfig = tmp75Result;
    if (enabled) {
      mobileVisualRefreshConfig = callback5;
      mobileVisualRefreshConfig = stateFromStores1;
      const obj45 = { style: tmp6.refreshButtonAlignment, children: tmp75Result };
      mobileVisualRefreshConfig = callback5(stateFromStores1, obj45);
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
    mobileVisualRefreshConfig = chatInputFloating;
    mobileVisualRefreshConfig = ref;
    const obj46 = { buttonRef: ref1 };
    mobileVisualRefreshConfig = obj46;
    mobileVisualRefreshConfig = refreshChatInputCoachmark;
    mobileVisualRefreshConfig = chatInputFloating(ref[37]);
    mobileVisualRefreshConfig = Object.assign(refreshChatInputCoachmark);
    mobileVisualRefreshConfig = callback5(mobileVisualRefreshConfig, obj46);
  }
  items17[14] = mobileVisualRefreshConfig;
  obj9.children = items17;
  mobileVisualRefreshConfig = callback6(stateFromStores1, obj9);
  if (null == threadCreationCallback) {
    mobileVisualRefreshConfig = callback5;
    mobileVisualRefreshConfig = chatInputFloating;
    mobileVisualRefreshConfig = ref;
    const obj47 = { channel, screenIndex, canSendMessages: editable, canCreateThreads, onJumpToPresent, isReadonly: !editable, children: mobileVisualRefreshConfig };
    mobileVisualRefreshConfig = callback5(chatInputFloating(ref[87]), obj47);
  }
  return mobileVisualRefreshConfig;
});
forwardRefResult.displayName = "ChatInput";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("result").fileFinishedImporting("modules/chat_input/native/ChatInput.tsx");

export default memoResult;
