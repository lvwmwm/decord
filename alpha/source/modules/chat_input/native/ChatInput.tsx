// Module ID: 14456
// Function ID: 14457
// Name: ChatInput
// Dependencies: [5, 32, 19, 17, 8940, 14457, 10972, 8717, 14458, 8658, 8718, 5175, 8805, 11799, 13699, 1072, 1498, 5089, 1388, 1623, 21, 5243, 575, 1377, 14460, 5068, 5423, 5839, 14461, 11941, 14462, 504, 7223, 7852, 8794, 1652, 5440, 7798, 14484, 14485, 14487, 14488, 7178, 1108, 1626, 14527, 13702, 8812, 11086, 8783, 1266, 5491, 1252, 1625, 6004, 12645, 13262, 13431, 11568, 5438, 8807, 2016, 13434, 9477, 9082, 14528, 11583, 11090, 14531, 14532, 2183, 13701, 14546, 14547, 14548, 14554, 14555, 1090, 14556, 14557, 14560, 14567, 14571, 14574, 14681, 14683, 14708, 14710, 14711, 14724, 14728, 14732, 14734, 14738, 14739, 14744, 14745, 14750, 2]

// Module 14456 (ChatInput)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import EmojiConstants from "EmojiConstants" /* 1388 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1498 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5089 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7178 */;
import ThreadHooks from "ThreadHooks" /* 7223 */;
import DraftStore2 from "DraftStore" /* 8658 */;
import VoiceMessagesUIStore from "VoiceMessagesUIStore" /* 14458 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 8940 */;
import DiceRollStore_mod from "DiceRollStore" /* 14457 */;
import NativeMenuStore from "NativeMenuStore" /* 10972 */;
import PendingReplyStore from "PendingReplyStore" /* 8717 */;
import EditMessageStore from "EditMessageStore" /* 8718 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8805 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 11799 */;
import ChatInputConstants from "ChatInputConstants" /* 13699 */;
import Constants from "Constants" /* 1072 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1623 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const DraftStore = DraftStore2;
let dependencyMap, set;

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
let closure_30;
let closure_31;
let closure_35;
let closure_36;
let closure_37;
let closure_38;
let closure_39;
let metroImportAll;
let metroImportDefault;
class ChatInput {
  constructor(channel) {
    let _undefined;
    let accessibilityLabel;
    let c6;
    let c7;
    let canCreateThreads;
    let canMentionEveryone;
    let canSendVoiceMessage;
    let canUpload;
    let closure_10;
    let closure_3;
    let closure_5;
    let closure_9;
    let constants4;
    let constants5;
    let constants6;
    let constants7;
    let editable;
    let first;
    let floatingInputBoxPressed;
    let isResourceChannel;
    let items22;
    let items23;
    let items24;
    let items25;
    let items26;
    let items27;
    let items28;
    let items30;
    let items31;
    let items32;
    let items33;
    let obj31;
    let obj35;
    let obj36;
    let onJumpToPresent;
    let placeholder;
    let rect;
    let ref;
    let result2;
    let secondaryTextFieldRef;
    let setNoExtractUI;
    let str2;
    let threadCreationCallback;
    let tmp100;
    let tmp20;
    let tmp55;
    let tmp56;
    let tmp6Result11;
    let tmp74Result18;
    let tmp78;
    let tmp91;
    let uploadLimit;
    channel = channel.channel;
    const screenIndex = channel.screenIndex;
    ({ threadCreationCallback, onJumpToPresent } = channel);
    dependencyMap = undefined;
    react = undefined;
    c7 = undefined;
    first = undefined;
    closure_9 = undefined;
    DiceRollStore = undefined;
    let suppressed;
    let stateFromStores;
    let stateFromStores1;
    editable = undefined;
    let sharedValue;
    let sharedValue1;
    let isCoachmarkVisible;
    let dismissCoachmark;
    let closure_20;
    let memo2;
    let registerViewTag;
    let unregisterViewTag;
    ref = undefined;
    let tmp = channel;
    let tmp2 = dependencyMap;
    ({ isResourceChannel, setNoExtractUI, secondaryTextFieldRef, ref } = channel);
    let obj = channel(14460);
    const mobileEmojiSuggestionsConfig = obj.useMobileEmojiSuggestionsConfig({ location: "ChatInput" });
    const InlineEmojiSuggestionsEnabled = channel(5068).InlineEmojiSuggestionsEnabled;
    let tmp74Result32 = mobileEmojiSuggestionsConfig.enabled && InlineEmojiSuggestionsEnabled.useSetting();
    dependencyMap = tmp74Result32;
    let tmpResult = tmp(5423);
    const gradientValue = tmpResult.useGradientValue(tmp(5423).GradientPercentage.END);
    let tmp6 = screenIndex;
    const tmpResult29 = tmp(5839);
    const token = tmpResult29.useToken(screenIndex(575).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
    const tmpResult30 = tmp(5839);
    let result = (tmpResult30.useToken(screenIndex(575).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT) - token) / 2;
    const tmpResult31 = tmp(5839);
    const token1 = tmpResult31.useToken(screenIndex(575).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
    const tmp10 = closure_40(gradientValue, token1);
    const tmpResult32 = tmp(14461);
    const isMobileRTCV2Enabled = tmpResult32.useIsMobileRTCV2Enabled("ChatInput");
    const tmp12 = screenIndex(11941)() > 0;
    _slicedToArray = tmp12;
    const useToken = tmp(5839).useToken;
    let token2 = gradientValue;
    tmp(5839);
    if (gradientValue == null) {
      token2 = useToken(screenIndex(575).colors.BACKGROUND_BASE_LOWER);
    }
    const tmpResult34 = tmp(5839);
    const token3 = tmpResult34.useToken(tmp6(575).modules.mobile.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED);
    const tmpResult35 = tmp(5839);
    const token4 = tmpResult35.useToken(tmp6(575).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
    let obj10 = react;
    const tmpResult36 = tmp(5839);
    const token5 = tmpResult36.useToken(tmp6(575).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM);
    [floatingInputBoxPressed, c6] = _slicedToArray(react.useState(false), 2);
    const tmp18 = _slicedToArray(react.useState(false), 2);
    [tmp20, c7] = _slicedToArray(react.useState(0), 2);
    const tmp19 = _slicedToArray(react.useState(0), 2);
    [first, closure_9] = react.useState(null);
    const items = [isMobileRTCV2Enabled];
    const items1 = [first, tmp12];
    const callback = react.useCallback((nativeEvent) => {
      let c0;
      let c1;
      let c2;
      let c3;
      nativeEvent = nativeEvent.nativeEvent;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      _undefined(nativeEvent.layout.y);
      let tmp2 = isMobileRTCV2Enabled;
      if (tmp2) {
        ({ x: c0, y: c1, width: c2, height: c3 } = nativeEvent.layout);
        closure_9((arg0) => {
          size = arg0;
          let x;
          if (arg0 != null) {
            x = size.x;
          }
          const tmp2 = c0;
          if (x === c0) {
            if (size.y === y) {
              return size;
            }
          }
          const size1 = { x: tmp2, y, width, height };
          size = size1;
        });
      }
    }, items);
    const memo = react.useMemo(() => {
      let tmp = null;
      if (closure_5) {
        tmp = null;
        if (null != first) {
          const rect = { top: first.y + first.height - 1, left: null, width: null };
          ({ x: obj.left, width: obj.width } = first);
          tmp = rect;
        }
      }
      return tmp;
    }, items1);
    const items2 = [screenIndex];
    const items3 = [screenIndex];
    const callback1 = react.useCallback((arg0) => {
      closure_20(screenIndex, arg0);
    }, items2);
    const effect = react.useEffect(() => () => {
      closure_20(screenIndex, 0);
    }, items3);
    DiceRollStore = tmp27;
    const tmp28 = channel.isPrivate() && null == threadCreationCallback;
    const tmp29 = DiceRollStore((channelId) => channelId.channelId === channel.id);
    const tmpResult37 = tmp(14462);
    const typingUserIdsForDisplay = tmpResult37.useTypingUserIdsForDisplay(channel.id, 1);
    const tmp31 = registerViewTag(screenIndex);
    suppressed = tmp31;
    const tmpResult38 = tmp(14462);
    let result1 = tmpResult38.hasTypingIndicatorContent(channel, typingUserIdsForDisplay, tmp31);
    const tmp33 = memo2(screenIndex);
    let tmp34 = token1;
    if (tmp33) {
      tmp34 = token5;
    }
    let tmp35 = token4;
    if (tmp33) {
      tmp35 = token3;
    }
    const items4 = [sharedValue];
    const tmpResult39 = tmp(504);
    stateFromStores = tmpResult39.useStateFromStores(items4, () => {
      let editingTextValue = null;
      if (!closure_10) {
        editingTextValue = EditMessageStore.getEditingTextValue(channel.id);
      }
      return editingTextValue;
    });
    const items5 = [stateFromStores];
    const tmpResult40 = tmp(504);
    stateFromStores1 = tmpResult40.useStateFromStores(items5, () => {
      let pendingReply;
      if (!closure_10) {
        pendingReply = PendingReplyStore.getPendingReply(channel.id);
      }
      return pendingReply;
    });
    const items6 = [isCoachmarkVisible];
    const tmpResult41 = tmp(504);
    let stateFromStores2 = tmpResult41.useStateFromStores(items6, () => {
      const tmp = closure_10;
      if (tmp) {
        return false;
      } else {
        const uploads = UploadAttachmentStore.getUploads(channel.id, DraftType.ChannelMessage);
        return null != uploads && uploads.length > 0;
      }
    });
    const items7 = [channel.id, tmp27];
    let memo1 = stateFromStores;
    if (stateFromStores == null) {
      memo1 = obj10.useMemo(() => DraftStore.getDraft(channel.id, closure_10 ? DraftType.FirstThreadMessage : DraftType.ChannelMessage), items7);
    }
    const items8 = [sharedValue1];
    const items9 = [channel, tmp27];
    const tmpResult42 = tmp(504);
    const stateFromStoresObject = tmpResult42.useStateFromStoresObject(items8, () => {
      const canResult = PermissionStore.can(constants.ATTACH_FILES, channel);
      let canResult1 = PermissionStore.can(constants.MENTION_EVERYONE, channel);
      const canResult2 = PermissionStore.can(constants.SEND_MESSAGES, channel);
      const canResult3 = PermissionStore.can(constants.SEND_VOICE_MESSAGES, channel);
      const tmp6 = PermissionStore.can(constants.CREATE_PUBLIC_THREADS, channel) || PermissionStore.can(constants.CREATE_PRIVATE_THREADS, channel);
      const canResult4 = PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, channel);
      let isPrivateResult = obj2.isPrivate();
      let tmp11 = canResult4;
      const obj3 = ThreadHooks;
      const isReadOnlyThread = obj3.computeIsReadOnlyThread(obj2);
      if (!closure_10) {
        tmp11 = isPrivateResult || canResult2;
      }
      let tmp13 = !tmp11;
      if (tmp11) {
        tmp13 = isReadOnlyThread;
      }
      let tmp14 = isPrivateResult;
      if (!tmp14) {
        if (canResult1) {
          canResult1 = !tmp13;
        }
        tmp14 = canResult1;
      }
      if (tmp14) {
        tmp14 = !tmp10;
      }
      const obj4 = { canMentionEveryone: tmp14, canUpload: (isPrivateResult || canResult) && !tmp13 && !closure_10, canSendVoiceMessage: isPrivateResult, editable: !tmp13, canCreateThreads: tmp6 };
      if (!isPrivateResult) {
        isPrivateResult = canResult3;
      }
      if (isPrivateResult) {
        isPrivateResult = !tmp13;
      }
      if (isPrivateResult) {
        isPrivateResult = !tmp10;
      }
      return obj4;
    }, items9);
    ({ canUpload, editable } = stateFromStoresObject);
    ({ canMentionEveryone, canSendVoiceMessage, canCreateThreads } = stateFromStoresObject);
    const analyticsLocations = tmp6(7852)().analyticsLocations;
    let tmp41 = tmp27 || null != stateFromStores;
    if (!tmp41) {
      const tmpResult43 = tmp(7223);
      tmp41 = !tmpResult43.getIsActiveChannelOrUnarchivableThread(channel);
    }
    const tmpResult44 = tmp(7223);
    let canStartThread = tmpResult44.useCanStartThread(channel);
    if (canStartThread) {
      const GUILD_THREADS_ONLY = constants.GUILD_THREADS_ONLY;
      canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
    }
    if (canStartThread) {
      canStartThread = !tmp27;
    }
    const tmpResult45 = tmp(8794);
    const tmp45 = tmpResult45.useCanPostPollsInChannel(channel) && null == threadCreationCallback;
    const tmpResult46 = tmp(1652);
    sharedValue = tmpResult46.useSharedValue(token);
    const tmpResult47 = tmp(1652);
    sharedValue1 = tmpResult47.useSharedValue(token);
    const items10 = [sharedValue1, token, sharedValue];
    const effect1 = obj10.useEffect(() => {
      const result = sharedValue.set(token);
      const result1 = sharedValue1.set(token);
    }, items10);
    let tmp49 = tmp6(5440)();
    const tmp50 = stateFromStores1((startTimeMillis) => null != startTimeMillis.startTimeMillis);
    let result3 = !tmp27;
    let isAppLauncherEnabled = result3;
    if (null == threadCreationCallback) {
      const tmpResult48 = tmp(7798);
      isAppLauncherEnabled = tmpResult48.getIsAppLauncherEnabled(channel);
    }
    const items11 = [closure_9];
    const tmpResult49 = tmp(504);
    const stateFromStores3 = tmpResult49.useStateFromStores(items11, () => ApplicationCommandStore.getActiveCommand(channel.id));
    let obj2 = { channel, isReadonly: !editable, isCreatingThread: tmp27 };
    ({ placeholder, accessibilityLabel } = tmp6(14484)(obj2));
    const items12 = [closure_41, sharedValue1];
    let c0;
    [tmp55, tmp56] = items12;
    const tmp54 = tmp6(14484)(obj2);
    const tmpResult50 = tmp(1652);
    class ChatInputTsx1 {
      constructor() {
        const obj = { minHeight: _undefined.get() };
        return obj;
      }
    }
    const items13 = [tmp56];
    ChatInputTsx1.__closure = items13;
    ChatInputTsx1.__workletHash = 423981813056;
    ChatInputTsx1.__initData = tmp55;
    const animatedStyle = tmpResult50.useAnimatedStyle(ChatInputTsx1);
    const ref1 = obj10.useRef(null);
    let obj3 = { disabled: !editable };
    const tmpResult51 = tmp(14485);
    const refreshChatInputCoachmark = tmpResult51.useRefreshChatInputCoachmark(obj3);
    let tmp61 = editable;
    const useScheduledMessageDraftCoachmarkState = tmp(14487).useScheduledMessageDraftCoachmarkState;
    tmp(14487);
    if (editable) {
      tmp61 = result3;
    }
    if (tmp61) {
      tmp61 = null == refreshChatInputCoachmark;
    }
    const scheduledMessageDraftCoachmarkState = useScheduledMessageDraftCoachmarkState({ isEligible: tmp61 });
    isCoachmarkVisible = scheduledMessageDraftCoachmarkState.isCoachmarkVisible;
    dismissCoachmark = scheduledMessageDraftCoachmarkState.dismissCoachmark;
    let obj4 = { chatInputProps: { analyticsLocations, canUpload, channel, defaultValue: memo1, hasAttachmentsToUpload: stateFromStores2, pendingEdit: stateFromStores, pendingReply: stateFromStores1, screenIndex, secondaryTextFieldRef, threadCreationCallback }, chatInputTextFieldHeight: sharedValue1, ref };
    const tmp63 = tmp6(14488)(obj4);
    closure_20 = tmp63;
    const items14 = [tmp63];
    const effect2 = obj10.useEffect(() => {
      const current = closure_20.chatInput.current;
      current.setText(closure_20.props.current.defaultValue);
    }, items14);
    const items15 = [tmp63, channel, stateFromStores, stateFromStores1];
    const effect3 = obj10.useEffect(() => {
      const current = closure_20.propsPrev.current;
      const pendingEdit = current.pendingEdit;
      let tmp2 = null == current.pendingReply && null != stateFromStores1;
      if (!tmp2) {
        tmp2 = null == pendingEdit && null != stateFromStores;
        const tmp4 = null == pendingEdit && null != stateFromStores;
      }
      if (tmp2) {
        const current2 = tmp.chatInput.current;
        if (current2 != null) {
          current2.focus();
        }
      }
      const id = tmp.propsPrev.current.channel.id;
      if (id !== channel.id) {
        if (id !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          const current4 = tmp.chatInput.current;
          if (current4 != null) {
            current4.setText(closure_20.props.current.defaultValue);
          }
        }
      }
      if (pendingEdit !== stateFromStores) {
        const current3 = tmp.chatInput.current;
        if (current3 != null) {
          let str = "";
          const setText = current3.setText;
          if (null != stateFromStores) {
            str = tmp9;
          }
          setText(str);
        }
      }
    }, items15);
    const items16 = [tmp63];
    const effect4 = obj10.useEffect(() => {
      let props;
      function handleOpenKeyboard(channelId) {
        channelId = undefined;
        if (channelId != null) {
          channelId = channelId.channelId;
        }
        const current = props.props.current;
        let id;
        const tmp2 = props;
        if (current != null) {
          id = current.channel.id;
        }
        if (channelId === id) {
          const current2 = tmp2.chatInput.current;
          if (current2 != null) {
            current2.openSystemKeyboard();
          }
        }
      }
      let ComponentDispatch = channel(closure_3[43]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants4.TEXTAREA_FOCUS, handleOpenKeyboard);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants.TEXTAREA_FOCUS, handleOpenKeyboard);
      };
    }, items16);
    const items17 = [tmp63, sharedValue];
    memo2 = obj10.useMemo(() => {
      let ChannelMessage;
      let obj = {
        handleBlur(nativeEvent) {
          const obj = channel(closure_3[44]);
          const result = obj.setIsAnyChatInputFocused(false);
          const result1 = memo2.handleTextOrFocusChange(str, false);
          closure_1_20.state.current.focused = false;
          closure_1_6(false);
          const current = closure_1_20.chatInputCover.current;
          if (current != null) {
            current.focused(false);
          }
          const current2 = tmp3.chatInputAppCommandManager.current;
          if (current2 != null) {
            current2.updateState();
          }
          const current3 = tmp3.chatInputAutocomplete.current;
          if (current3 != null) {
            const obj2 = { focused: false, text: nativeEvent.nativeEvent.text, selectionStart: closure_1_20.state.current.selectionStart, selectionEnd: closure_1_20.state.current.selectionEnd };
            current3.setData(obj2);
          }
          const current4 = tmp3.chatInputEmojiSuggestions.current;
          if (current4 != null) {
            const obj3 = { focused: false, text: nativeEvent.nativeEvent.text, selectionStart: closure_1_20.state.current.selectionStart, selectionEnd: closure_1_20.state.current.selectionEnd };
            current4.setData(obj3);
          }
          const current5 = tmp3.chatInputSendButton.current;
          if (current5 != null) {
            current5.setHasText(nativeEvent.nativeEvent.text.trim().length > 0);
          }
        },
        handleFocus(nativeEvent) {
          let end;
          let start;
          ({ start, end } = nativeEvent.nativeEvent);
          const obj = channel(closure_3[44]);
          const result = obj.setIsAnyChatInputFocused(true);
          closure_1_20.state.current.focused = true;
          closure_1_6(true);
          closure_1_20.state.current.selectionStart = start;
          closure_1_20.state.current.selectionEnd = end;
          const result1 = memo2.handleTextOrFocusChange(closure_1_20.state.current.text, true);
          const result2 = memo2.trackEmojiSuggestionsExposureIfFocusedWithText(closure_1_20.state.current.text);
          const current = closure_1_20.chatInputAppCommandManager.current;
          if (current != null) {
            current.updateState();
          }
          const current2 = tmp2.chatInputCover.current;
          if (current2 != null) {
            current2.focused(true);
          }
          const current3 = tmp2.chatInputAutocomplete.current;
          if (current3 != null) {
            const obj2 = { focused: true, text: closure_1_20.state.current.text, selectionStart: start, selectionEnd: end };
            current3.setData(obj2);
          }
          const current4 = tmp2.chatInputEmojiSuggestions.current;
          if (current4 != null) {
            const obj3 = { focused: true, text: closure_1_20.state.current.text, selectionStart: start, selectionEnd: end };
            current4.setData(obj3);
          }
        },
        handleChangeContentSize(nativeEvent) {
          const height = nativeEvent.nativeEvent.height;
          closure_1_20.state.current.textFieldContentSize = height;
          const obj = channel(closure_3[45]);
          const tmp = closure_1_20;
          const tmp2 = channel;
          const tmp3 = closure_3;
          if (!obj.getIsChatInputHeightWorkletEnabled()) {
            const textFieldHeight = tmp.state.current.textFieldHeight;
            set = textFieldHeight.set;
            const tmp2Result = tmp2(tmp3[46]);
            const result = set(tmp2Result.getChatInputHeightAnimationTiming(height, sharedValue.get()));
          }
        },
        handleLayoutOfInputContainer(arg0) {
          const current = closure_1_20.chatInputAutocomplete.current;
          if (current != null) {
            current.setChatInputHeight(tmp.layout.height);
          }
        },
        handleLayout(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          const height = layout.height;
          const tmp = 0 !== height && 0 !== layout.width;
          if (tmp) {
            if (null == closure_1_20.props.current.threadCreationCallback) {
              const current = closure_1_20.chatInput.current;
              const result = current.updateChatInputContainerHeightDebounced(height);
            }
          }
        },
        handleMaxHeightChanged() {
          const obj = channel(closure_3[45]);
          const tmp = channel;
          const tmp2 = closure_3;
          if (!obj.getIsChatInputHeightWorkletEnabled()) {
            const textFieldContentSize = closure_1_20.state.current.textFieldContentSize;
            if (0 !== textFieldContentSize) {
              const textFieldHeight = closure_1_20.state.current.textFieldHeight;
              set = textFieldHeight.set;
              const tmpResult = tmp(tmp2[46]);
              const result = set(tmpResult.getChatInputHeightAnimationTiming(textFieldContentSize, sharedValue.get()));
            }
          }
        },
        handleChangeAutoCompleteVisibility(arg0) {
          dismissCoachmark(closure_1_20.props.current.screenIndex, arg0);
        },
        handlePasteCommand(arg0) {
          if (closure_1_20.state.current.focused) {
            const current = tmp2.chatInputAppCommandManager.current;
            if (current != null) {
              const applicationCommandManager = current.getApplicationCommandManager();
              if (applicationCommandManager != null) {
                applicationCommandManager.setPastedCommand(tmp, closure_1_20.props.current.channel);
              }
            }
          }
        },
        handlePasteImage() {
          return closure_0(...arguments);
        },
        handlePressAction(arg0, arg1, current2) {
          let name;
          let obj11;
          let obj18;
          if (constants.PHOTOS === arg1) {
            const obj20 = channel(closure_3[51]);
            const result = obj20.triggerHapticFeedback(channel(closure_3[51]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj4 = { type: constants3.ADD_BUTTON, channel_id: closure_1_20.props.current.channel.id, guild_id: closure_1_20.props.current.channel.guild_id };
            const obj21 = screenIndex(closure_3[52]);
            obj21.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj4);
            const obj23 = channel(closure_3[36]);
            const keyboardType = obj23.getKeyboardType();
            const tmp49 = closure_1_20;
            if (keyboardType === channel(closure_3[53]).KeyboardTypes.APP_LAUNCHER) {
              const handleToggleKeyboard3 = memo2.handleToggleKeyboard;
              const obj5 = { type: channel(closure_3[53]).KeyboardTypes.APP_LAUNCHER };
              const result1 = handleToggleKeyboard3(obj5);
            } else {
              const tmp43Result = channel(closure_3[36]);
              const keyboardType1 = tmp43Result.getKeyboardType();
              if (keyboardType1 === channel(closure_3[53]).KeyboardTypes.MEDIA) {
                const current = tmp49.chatInputActions.current;
                if (current != null) {
                  current.focusPhotosButton();
                }
              }
              const handleToggleKeyboard2 = memo2.handleToggleKeyboard;
              const obj8 = { type: channel(closure_3[53]).KeyboardTypes.MEDIA, context: obj11 };
              obj11 = { target: constants7.CHAT };
              const result2 = handleToggleKeyboard2(obj8);
            }
          } else {
            let tmp36 = current2;
            if (constants.APPS === arg1) {
              const obj12 = channel(closure_3[51]);
              const result3 = obj12.triggerHapticFeedback(channel(closure_3[51]).HapticFeedbackTypes.IMPACT_LIGHT);
              const obj13 = channel(closure_3[54]);
              obj13.trackWithMetadata(constants2.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED);
              const obj15 = { type: constants3.APPS_BUTTON, channel_id: closure_1_20.props.current.channel.id, guild_id: closure_1_20.props.current.channel.guild_id };
              const obj14 = screenIndex(closure_3[52]);
              obj14.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj15);
              const obj16 = mobileEmojiSuggestionsConfig(closure_3[55]);
              const result4 = obj16.dismissNewActivityIndicator();
              const setAppLauncherA11yFocusReturnRef = channel(closure_3[56]).setAppLauncherA11yFocusReturnRef;
              const tmp30 = closure_1_20;
              if (tmp36 == null) {
                tmp36 = null;
              }
              const result5 = setAppLauncherA11yFocusReturnRef(tmp36);
              const handleToggleKeyboard = memo2.handleToggleKeyboard;
              const obj17 = { type: channel(closure_3[53]).KeyboardTypes.APP_LAUNCHER, context: obj18 };
              obj18 = { initialRouteName: constants5.HOME, initialSearchQuery: name };
              const tmp23Result = channel(closure_3[57]);
              const appDMApplication = tmp23Result.getAppDMApplication(tmp30.props.current.channel);
              name = undefined;
              if (appDMApplication != null) {
                name = appDMApplication.name;
              }
              handleToggleKeyboard(obj17);
            } else if (constants.ALL_PHOTOS === arg1) {
              const obj9 = channel(closure_3[51]);
              const result6 = obj9.triggerHapticFeedback(channel(closure_3[51]).HapticFeedbackTypes.IMPACT_LIGHT);
              const obj19 = {
                channel: closure_1_20.props.current.channel,
                uploadLimit,
                onDismissKeyboard() {
                      const obj = closure_1_0(closure_1_3[59]);
                      return obj.dismissKeyboard();
                    },
                onRestoreKeyboard() {
                      const obj = { type: closure_0(closure_2_3[53]).KeyboardTypes.SYSTEM };
                      return closure_1_21.handleToggleKeyboard(obj);
                    },
                onSelectFiles(items) {
                      const obj = closure_0(closure_2_3[58]);
                      obj.addImagesFromPicker(closure_1_20.props.current.channel.id, items, closure_0(closure_2_3[60]).UploadOrigin.IMAGE_PICKER);
                    },
                draftType: token.ChannelMessage
              };
              const obj10 = channel(closure_3[58]);
              obj10.handleViewAllDialog(obj19);
            } else if (constants.CAMERA === arg1) {
              const obj6 = channel(closure_3[51]);
              const result7 = obj6.triggerHapticFeedback(channel(closure_3[51]).HapticFeedbackTypes.IMPACT_LIGHT);
              const obj22 = {
                channel: closure_1_20.props.current.channel,
                previewType: constants6.CAMERA_BUTTON,
                onDismissKeyboard() {
                      const obj = closure_1_0(closure_1_3[59]);
                      return obj.dismissKeyboard();
                    },
                onRestoreKeyboard() {
                      const obj = { type: closure_0(closure_2_3[53]).KeyboardTypes.SYSTEM };
                      return closure_1_21.handleToggleKeyboard(obj);
                    },
                onSelectFiles(items) {
                      const obj = closure_0(closure_2_3[58]);
                      obj.addImagesFromPicker(closure_1_20.props.current.channel.id, items, closure_0(closure_2_3[60]).UploadOrigin.IMAGE_PICKER);
                    }
              };
              const obj7 = channel(closure_3[58]);
              obj7.handleCameraDialog(obj22);
            } else if (constants.NITRO_GIFT === arg1) {
              let obj = screenIndex(closure_3[61]);
              const result8 = obj.markPotentialBadState();
              const obj2 = channel(closure_3[51]);
              const result9 = obj2.triggerHapticFeedback(channel(closure_3[51]).HapticFeedbackTypes.IMPACT_LIGHT);
              const obj3 = channel(closure_3[23]);
              if (obj3.isAndroid()) {
                const tmp5Result = channel(closure_3[59]);
                tmp5Result.dismissKeyboard();
              }
              const tmp5Result2 = channel(closure_3[58]);
              tmp5Result2.handleSelectGift(closure_1_20.props.current.analyticsLocations, closure_1_20.chatInput, tmp36);
            } else if (constants.THREAD === arg1) {
              const obj27 = channel(closure_3[51]);
              const result10 = obj27.triggerHapticFeedback(channel(closure_3[51]).HapticFeedbackTypes.IMPACT_LIGHT);
              const obj28 = channel(closure_3[58]);
              obj28.handleSelectThread(closure_1_20.props.current.channel, closure_1_20.chatInput);
            }
          }
        },
        handlePollsPress() {
          let obj = channel(closure_3[51]);
          const result = obj.triggerHapticFeedback(channel(closure_3[51]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj2 = screenIndex(closure_3[52]);
          const obj3 = { type: constants3.POLLS, channel_id: closure_1_20.props.current.channel.id, guild_id: closure_1_20.props.current.channel.guild_id };
          obj2.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj3);
          const obj4 = channel(closure_3[59]);
          obj4.dismissKeyboard();
          const obj5 = channel(closure_3[62]);
          const obj6 = {
            channel: closure_1_20.props.current.channel,
            onCancel() {
              const obj = { type: closure_0(closure_2_3[53]).KeyboardTypes.SYSTEM };
              return closure_1_21.handleToggleKeyboard(obj);
            }
          };
          obj5.openCreatePollModal(obj6);
        },
        handleAttachPress() {
          let props;
          let obj = channel(closure_3[51]);
          const result = obj.triggerHapticFeedback(channel(closure_3[51]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj2 = channel(closure_3[58]);
          const obj3 = {
            channel: closure_1_20.props.current.channel,
            uploadLimit,
            onDismissKeyboard() {
              const obj = closure_1_0(closure_1_3[59]);
              return obj.dismissKeyboard();
            },
            onRestoreKeyboard() {
              const obj = { type: closure_0(closure_2_3[53]).KeyboardTypes.SYSTEM };
              return closure_1_21.handleToggleKeyboard(obj);
            },
            onSelectFiles(items) {
              const obj = closure_0(closure_2_3[58]);
              obj.addImagesFromPicker(props.props.current.channel.id, items, closure_0(closure_2_3[60]).UploadOrigin.FILE_ATTACHMENT);
            }
          };
          obj2.handleAttachFile(obj3);
        },
        handlePressExpression(arg0, unlocked) {
          let obj3;
          let tmp7;
          const obj = channel(closure_3[63]);
          const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.ChatInputExpressionPressed);
          let tmp4 = null != unlocked;
          if (tmp4) {
            tmp4 = unlocked.unlocked.length > 0 || unlocked.locked.length > 0;
          }
          let type = arg0;
          if (arg0 == null) {
            const tmpResult = channel(closure_3[36]);
            type = tmpResult.getKeyboardContextForType(tmp(tmp2[53]).KeyboardTypes.EXPRESSION).type;
          }
          const handleToggleKeyboard = memo2.handleToggleKeyboard;
          const obj2 = { type: channel(closure_3[53]).KeyboardTypes.EXPRESSION, context: obj3 };
          obj3 = { type, suggestedEmojis: tmp7 };
          tmp7 = undefined;
          if (tmp4) {
            tmp7 = unlocked;
          }
          handleToggleKeyboard(obj2);
        },
        handlePressSend() {
          const current = closure_1_20.chatInput.current;
          current.handleSend();
        },
        handleSelectionOrTextChange(nativeEvent) {
          let editId;
          let end;
          let start;
          let text;
          ({ start, end, text, editId } = nativeEvent.nativeEvent);
          closure_1_20.state.current.editId = editId;
          closure_1_20.state.current.selectionStart = start;
          closure_1_20.state.current.selectionEnd = end;
          const editId2 = closure_1_20.state.current.editId;
          const result = memo2.handleTextOrFocusChange(text, closure_1_20.state.current.focused);
          const result1 = memo2.trackEmojiSuggestionsExposureIfFocusedWithText(text);
          const current = closure_1_20.chatInputAppCommandManager.current;
          if (current != null) {
            current.updateState();
          }
          const current2 = tmp.chatInputAutocomplete.current;
          if (current2 != null) {
            const obj = { focused: closure_1_20.state.current.focused, text, selectionStart: start, selectionEnd: end };
            current2.setData(obj);
          }
          const current3 = tmp.chatInputEmojiSuggestions.current;
          if (current3 != null) {
            const obj2 = { focused: closure_1_20.state.current.focused, text, selectionStart: start, selectionEnd: end };
            current3.setData(obj2);
          }
          const current4 = tmp.chatInputSendButton.current;
          if (current4 != null) {
            current4.setHasText(text.trim().length > 0);
          }
          if (editId2 !== editId) {
            const current5 = tmp.chatInput.current;
            current5.handleTextChanged(text);
            const current6 = tmp.chatInputCharCounter.current;
            if (current6 != null) {
              const result2 = current6.onMessageLengthChanged(text.length);
            }
            const obj3 = channel(closure_3[64]);
            obj3.hideContextMenu();
          }
        },
        handleTapAction(nativeEvent) {
          let channelId;
          let chatInput;
          let optionName;
          const tapAction = nativeEvent.nativeEvent.tapAction;
          if ("tapAttachment" === tapAction.action) {
            let current = closure_1_20.chatInput.current;
            current.blur();
            const current2 = closure_1_20.chatInput.current;
            const openCommandAttachmentPreview = channel(closure_3[65]).openCommandAttachmentPreview;
            const tmp11 = channel(closure_3[65]);
            const applicationCommandManager = current2.getApplicationCommandManager();
            ({ channelId, optionName } = tapAction);
            let fn;
            if (closure_1_20.state.current.focused) {
              fn = () => {
                const current = chatInput.chatInput.current;
                return current.openSystemKeyboard();
              };
            }
            const result = openCommandAttachmentPreview(applicationCommandManager, channelId, optionName, fn);
          }
        },
        trackEmojiSuggestionsExposureIfFocusedWithText(text) {
          const focused = closure_1_20.state.current.focused && text.length > 0;
          if (focused) {
            const obj = channel(closure_3[24]);
            const result = obj.trackMobileEmojiSuggestionsExposure({ location: "ChatInputFocusedWithText" });
          }
        },
        handleTextOrFocusChange(text, focused) {
          if (text.length > 0) {
            if (!focused) {
              const obj2 = channel(closure_3[67]);
              const maxMessageLength = obj2.getMaxMessageLength();
              const tmp16 = closure_1_20.state.current.textPrev.length <= maxMessageLength && text.length > maxMessageLength;
              if (tmp16) {
                const obj3 = screenIndex(closure_3[52]);
                obj3.track(constants2.MESSAGE_LENGTH_LIMIT_REACHED, {});
              }
              closure_1_20.state.current.textPrev = closure_1_20.state.current.text;
              closure_1_20.state.current.text = text;
            }
            if (suppressed.isOpen()) {
              const obj = screenIndex(closure_3[66]);
              obj.hideNativeMenu();
            }
            const current2 = closure_1_20.chatInputActions.current;
            const tmp8 = closure_1_20;
            if (current2 != null) {
              current2.onDismissActions(focused);
            }
            const current3 = tmp8.chatInputRightActions.current;
            if (current3 != null) {
              current3.onDismissActions(focused);
            }
          }
          if (0 === text.length) {
            const current4 = closure_1_20.chatInputActions.current;
            const tmp21 = closure_1_20;
            if (current4 != null) {
              current4.onShowActions(focused);
            }
            const current = tmp21.chatInputRightActions.current;
            if (current != null) {
              current.onShowActions(focused);
            }
          }
        },
        handleTextFlushed(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          const current = closure_1_20.chatInputTextFlushedResponses.current;
          const text = nativeEvent.text;
          const value = current.get(nativeEvent.requestId);
          if (value != null) {
            value(text);
          }
        },
        handleToggleKeyboard(type) {
          if (suppressed.isOpen()) {
            const obj = screenIndex(closure_3[66]);
            obj.hideNativeMenu();
          }
          const tmp4 = channel;
          const tmp5 = closure_3;
          if (type.type !== channel(closure_3[53]).KeyboardTypes.SYSTEM) {
            type = type.type;
            const tmp4Result = tmp4(tmp5[36]);
            if (type !== tmp4Result.getKeyboardType()) {
              const current = closure_1_20.chatInput.current;
              current.openCustomKeyboard(type);
            }
          }
          const current2 = closure_1_20.chatInput.current;
          current2.openSystemKeyboard();
        }
      };
      let closure_0 = isMobileRTCV2Enabled(function*(arg0, value) {
        let c0;
        let c1;
        let c2;
        let c3;
        let closure_1;
        let closure_2;
        let mimeType;
        let obj2;
        let obj9;
        closure_0 = arg0;
        if (1 === mimeType) {
          if (arg0 === 1) {
            let c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (closure_1_20.state.current.focused) {
            if (closure_1_20.props.current.canUpload) {
              mimeType = 2;
              c4 = 1;
              const obj6 = { value: obj2.getImageDimensionsIfMissing(originalUri, c1, c2), done: false };
              obj2 = closure_0(closure_2_3[47]);
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const styles = value;
          const obj7 = { channelId: closure_1_20.props.current.channel.id, file: size, draftType: ChannelMessage.ChannelMessage };
          size = { uri: originalUri, originalUri, width: styles.width, height: styles.height, mimeType, platform: closure_0(closure_2_3[49]).UploadPlatform.REACT_NATIVE, id: obj9.v4() };
          const addFile = screenIndex(closure_2_3[48]).addFile;
          const tmp23 = screenIndex(closure_2_3[48]);
          obj9 = closure_0(closure_2_3[50]);
          addFile(obj7);
        }
        yield "HermesInternal";
        ({ url: c0, width: c1, height: c2, type: c3 } = closure_0.nativeEvent);
        return "flexDirection";
      });
      return obj;
    }, items17);
    const items18 = [tmp74Result32, mobileEmojiSuggestionsConfig.style, tmp63, tmp31];
    const items19 = [tmp27, tmp63];
    const memo3 = obj10.useMemo(() => {
      let tmp;
      if (closure_3) {
        if ("button" === mobileEmojiSuggestionsConfig.style) {
          const obj = { chatInputRef: null, chatInputStateRef: null, suppressed };
          ({ chatInput: obj.chatInputRef, state: obj.chatInputStateRef } = closure_20);
          tmp = obj;
        }
      }
      return tmp;
    }, items18);
    const callback2 = obj10.useCallback((nativeEvent) => {
      const layout = nativeEvent.nativeEvent.layout;
      const height = layout.height;
      const tmp = 0 !== height && 0 !== layout.width;
      if (tmp) {
        const tmp2 = closure_10;
        if (!tmp2) {
          const current = closure_20.chatInput.current;
          const result = current.updateChatInputContainerHeightDebounced(height);
        }
      }
    }, items19);
    const tmp70 = tmp6(14527)({ textFieldHeight: sharedValue1, textFieldMinHeight: sharedValue });
    registerViewTag = tmp70.registerViewTag;
    unregisterViewTag = tmp70.unregisterViewTag;
    ref = obj10.useRef(null);
    const items20 = [tmp63, registerViewTag, unregisterViewTag];
    const callback3 = obj10.useCallback((current) => {
      if (null != ref.current) {
        unregisterViewTag(ref.current);
        ref.current = null;
      }
      closure_20.chatInputNative.current = current;
      if (null != current) {
        const tmp5 = metroImportAll(current);
        if (null != tmp5) {
          ref.current = tmp5;
          registerViewTag(tmp5);
        }
      }
    }, items20);
    const items21 = [editable, tmp63];
    const callback4 = obj10.useCallback(() => true, []);
    const callback5 = obj10.useCallback(() => {
      const tmp = editable;
      if (tmp) {
        const current = closure_20.chatInput.current;
        current.openSystemKeyboard();
      }
    }, items21);
    let obj5 = { canUpload, channelId: channel.id, screenIndex };
    let tmp74Result = null;
    const tmp75 = closure_37(tmp6(14531), obj5);
    if (editable) {
      let obj6 = {
        ref: tmp63.chatInputActions,
        channel,
        onPressAction: memo2.handlePressAction,
        canStartThreads: canStartThread,
        isAppLauncherEnabled,
        keyboardType: tmp49,
        shouldPhotosButtonBeDisabled: !tmp78,
        canUpload,
        shouldShowGiftButton: result2,
        canPostPolls: tmp45,
        onPollsPress: null,
        onAttachPress: null,
        photosButtonExternalRef: ref1,
        onContextMenuOpen() {
            const tmp = isCoachmarkVisible;
            if (tmp) {
              dismissCoachmark(ContentDismissActionType.TAKE_ACTION);
            }
          }
      };
      tmp78 = canUpload;
      const tmp6Result = tmp6(14532);
      if (canUpload) {
        tmp78 = null == stateFromStores3;
      }
      if (!tmp78) {
        tmp78 = tmp45;
      }
      result2 = result3;
      if (null == threadCreationCallback) {
        const tmpResult53 = tmp(2183);
        result2 = tmpResult53.isPremiumGiftingSupported();
      }
      ({ handlePollsPress: obj30.onPollsPress, handleAttachPress: obj30.onAttachPress } = memo2);
      tmp74Result = tmp74(tmp6Result, obj6);
    }
    let obj7 = { style: items22, children: items23 };
    items22 = [tmp10.inputDefault, animatedStyle];
    const View = tmp6(1652).View;
    let obj8 = { accessibilityLabel, customKeyboard: tmp(14546).PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE, editable, onBeginFocus: null, onEndBlur: null, onChangeContentSize: null, onMaxHeightChanged: null, onSelectionOrTextChange: null, onTextFlushed: null, onPasteImage: null, onPasteCommand: null, onTapAction: null, onRequestSend: null, placeholder, ref: callback3, setNoExtractUI, shouldShowCursor: tmp49 !== tmp(1625).KeyboardTypes.MEDIA, verticalInset: 5 };
    ({ handleFocus: obj33.onBeginFocus, handleBlur: obj33.onEndBlur, handleChangeContentSize: obj33.onChangeContentSize, handleMaxHeightChanged: obj33.onMaxHeightChanged, handleSelectionOrTextChange: obj33.onSelectionOrTextChange, handleTextFlushed: obj33.onTextFlushed, handlePasteImage: obj33.onPasteImage, handlePasteCommand: obj33.onPasteCommand, handleTapAction: obj33.onTapAction, handlePressSend: obj33.onRequestSend } = memo2);
    const tmp6Result7 = tmp6(13701);
    items23 = [closure_37(tmp6Result7, obj8), ];
    let obj9 = { keyboardType: tmp49, onSelectKeyboard: memo2.handleToggleKeyboard, ref: tmp63.chatInputCover };
    items23[1] = closure_37(tmp6(14547), obj9);
    const tmp82 = closure_38(View, obj7);
    if (editable) {
      let obj11 = { ref: tmp63.chatInputSendButton, canSendVoiceMessage, channel, defaultValue: memo1, hasPendingAttachments: stateFromStores2, hasPendingEdit: null != stateFromStores, onSendMessage: memo2.handlePressSend, requireTextContent: result3 };
      const tmp6Result8 = tmp6(14548);
      if (stateFromStores2) {
        stateFromStores2 = canUpload;
      }
      tmp74Result18 = tmp74(tmp6Result8, obj11);
    } else {
      tmp74Result18 = null;
    }
    let obj12 = { collapsable: false, onLayout: callback2, style: items24, children: items25 };
    items24 = [tmp6(14554)({ isCreatingThread: tmp27 }), tmp10.overflowVisible, ];
    let floatingScrimOverlap = result3;
    if (null == threadCreationCallback) {
      floatingScrimOverlap = tmp10.floatingScrimOverlap;
    }
    items24[2] = floatingScrimOverlap;
    let tmp74Result19 = !result1;
    if (tmp74Result19) {
      let obj13 = { gradientHeight: tmp34, inline: false, scrimBase: token2 };
      tmp74Result19 = tmp74(tmp(14555).ChatInputScrimGradient, obj13);
    }
    items25 = [tmp74Result19, , , , , , , , , , , , , ];
    let tmp74Result20 = result1;
    if (tmp74Result20) {
      const tmpResult54 = tmp(1090);
      let hex2rgbResult = tmpResult54.hex2rgb(token2, 1);
      if (hex2rgbResult == null) {
        hex2rgbResult = token2;
      }
      let obj14 = { style: rect, pointerEvents: "none" };
      rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: hex2rgbResult };
      tmp74Result20 = tmp74(tmp85, obj14);
    }
    items25[1] = tmp74Result20;
    items25[2] = closure_37(tmp(14556).ChatInputAccessibilityDivider, {});
    let tmp74Result21 = null;
    if (tmp28) {
      let obj15 = { channel, hasInputText: tmp91 };
      let str = "";
      tmp91 = "" !== memo1;
      const tmp6Result9 = tmp6(14557);
      if (!tmp91) {
        let current = tmp63.chatInput.current;
        let text;
        if (current != null) {
          text = current.getText();
        }
        tmp91 = "" !== text;
      }
      tmp74Result21 = tmp74(tmp6Result9, obj15);
    }
    items25[3] = tmp74Result21;
    let obj16 = { style: tmp10.accessories, children: items26 };
    let tmp74Result22 = result1;
    if (tmp74Result22) {
      let obj17 = { gradientHeight: tmp35, inline: true, scrimBase: token2 };
      tmp74Result22 = tmp74(tmp(14555).ChatInputScrimGradient, obj17);
    }
    items26 = [tmp74Result22, , ];
    let tmp74Result23 = null;
    if (null == threadCreationCallback) {
      let obj18 = { channel, screenIndex };
      tmp74Result23 = tmp74(tmp6(14462), obj18);
    }
    items26[1] = tmp74Result23;
    let tmp74Result24 = null;
    const tmpResult55 = tmp(1377);
    if (tmpResult55.isIOS()) {
      let obj19 = { channelId: channel.id, screenIndex, onJumpToPresent };
      tmp74Result24 = tmp74(tmp6(14560), obj19);
    }
    items26[2] = tmp74Result24;
    items25[4] = closure_38(c7, obj16);
    let tmp74Result25 = null;
    if (isResourceChannel) {
      let obj20 = { channel };
      tmp74Result25 = tmp74(tmp6(14567), obj20, channel.id);
    }
    items25[5] = tmp74Result25;
    items25[6] = closure_37(tmp(14571).MemberActionsChatInputBannerGuardedOuter, { channel });
    items25[7] = closure_37(tmp(14574).DoubleTapToReactChatInputBanner, { channel });
    let tmp74Result26 = null;
    if (tmp29) {
      let obj21 = { channelId: channel.id };
      tmp74Result26 = tmp74(tmp6(14681), obj21);
    }
    items25[8] = tmp74Result26;
    let tmp74Result27 = null;
    if (tmp49 !== tmp(1625).KeyboardTypes.EXPRESSION) {
      let obj22 = { ref: tmp63.chatInputAutocomplete, analyticsLocations, channel, canMentionEveryone, keyboardType: tmp49, onChangeAutoCompleteVisibility: memo2.handleChangeAutoCompleteVisibility, commandsDisabled: tmp41, canOnlyUseTextCommands: null != stateFromStores1, chatInputRef: tmp63.chatInput, screenIndex };
      tmp74Result27 = tmp74(tmp6(14683), obj22);
    }
    items25[9] = tmp74Result27;
    let obj23 = { ref: tmp63.chatInputAppCommandManager, canOnlyUseTextCommands: tmp42, channel, chatInputRef: tmp63.chatInput, chatInputStateRef: tmp63.state, commandsDisabled: tmp41 };
    items25[10] = closure_37(tmp6(14708), obj23);
    const obj24 = { style: items27, onLayout: memo2.handleLayoutOfInputContainer, children: closure_38(tmp100, { children: items28 }) };
    items27 = [, ];
    ({ container: arr28[0], floatingContainer: arr28[1] } = tmp10);
    items28 = [tmp75, , , , ];
    const tmp6Result10 = tmp6(14710);
    items28[1] = closure_37(tmp6(14711), { channel });
    const items29 = [tmp10.floatingInputBox, , ];
    tmp100 = closure_39;
    if (floatingInputBoxPressed) {
      floatingInputBoxPressed = tmp10.floatingInputBoxPressed;
    }
    items29[1] = floatingInputBoxPressed;
    const obj25 = { style: items29, onStartShouldSetResponder: callback4, onResponderRelease: callback5, onLayout: callback, collapsable: false, accessibilityElementsHidden: tmp50, importantForAccessibility: str2, children: items30 };
    const tmp101 = result1 && tmp10.floatingInputBoxTyping;
    items29[2] = tmp101;
    str2 = undefined;
    if (tmp50) {
      str2 = "no-hide-descendants";
    }
    items30 = [, , ];
    const obj26 = { channel, chatInputRef: tmp63.chatInput, pendingEdit: stateFromStores, pendingReply: stateFromStores1 };
    items30[0] = closure_37(tmp6(14724), obj26);
    let tmp74Result28 = tmp74Result32 && "large" === mobileEmojiSuggestionsConfig.style;
    if (tmp74Result28) {
      let obj27 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel, suppressed: tmp31 };
      ({ chatInputEmojiSuggestions: obj54.ref, chatInput: obj54.chatInputRef, state: obj54.chatInputStateRef } = tmp63);
      tmp74Result28 = tmp74(tmp(14728).EmojiSuggestionBarLarge, obj27);
    }
    items30[1] = tmp74Result28;
    let obj28 = { style: tmp10.floatingMainContents, children: items31 };
    let tmp74Result29 = null;
    if (null != tmp74Result) {
      const obj29 = { style: obj31, children: tmp74Result };
      obj31 = { paddingBottom: result, paddingLeft: result };
      tmp74Result29 = tmp74(tmp85, obj29);
    }
    items31 = [tmp74Result29, , , , ];
    const obj32 = { style: items32, children: items33 };
    items32 = [tmp10.inputFlat, { paddingBottom: result }];
    items33 = [closure_37(tmp6(14732), {}), tmp82];
    items31[1] = closure_38(c7, obj32);
    let tmp74Result30 = null;
    if (editable) {
      const obj34 = { style: obj35, children: closure_37(tmp6Result11, obj36) };
      obj35 = { paddingBottom: result };
      obj36 = { ref: tmp63.chatInputRightActions, channel, keyboardType: tmp49, shouldShowGiftButton: result3, onPressAction: null, onPressExpression: null, suggestedExpressions: memo3, suggestedExpressionsRef: tmp63.chatInputEmojiSuggestions };
      tmp6Result11 = tmp6(14734);
      if (null == threadCreationCallback) {
        const tmpResult56 = tmp(2183);
        result3 = tmpResult56.isPremiumGiftingSupported();
      }
      ({ handlePressAction: obj61.onPressAction, handlePressExpression: obj61.onPressExpression } = memo2);
      tmp74Result30 = tmp74(tmp85, obj34);
    }
    items31[2] = tmp74Result30;
    items31[3] = tmp74Result18;
    const obj37 = { style: tmp10.characterCounter, analyticsLocations, ref: tmp63.chatInputCharCounter };
    items31[4] = closure_37(tmp6(14738), obj37);
    items30[2] = closure_38(c7, obj28);
    items28[2] = closure_38(c7, obj25);
    let tmp74Result31 = null != memo;
    if (tmp74Result31) {
      const obj38 = { style: memo };
      tmp74Result31 = tmp74(tmp6(14739), obj38);
    }
    items28[3] = tmp74Result31;
    if (tmp74Result32) {
      tmp74Result32 = "small" === mobileEmojiSuggestionsConfig.style;
    }
    if (tmp74Result32) {
      const obj39 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel, suppressed: tmp31, anchorTop: tmp20, onOccupiedHeightChange: callback1 };
      ({ chatInputEmojiSuggestions: obj65.ref, chatInput: obj65.chatInputRef, state: obj65.chatInputStateRef } = tmp63);
      tmp74Result32 = tmp74(tmp(14744).EmojiSuggestionBarSmall, obj39);
    }
    items28[4] = tmp74Result32;
    items25[11] = closure_37(tmp6Result10, obj24);
    let tmp74Result33 = null;
    if (null != refreshChatInputCoachmark) {
      const obj40 = { buttonRef: ref1 };
      const tmp6Result12 = tmp6(14485);
      const merged = Object.assign(refreshChatInputCoachmark);
      tmp74Result33 = tmp74(tmp6Result12, obj40);
    }
    items25[12] = tmp74Result33;
    items25[13] = closure_37(tmp6(14745), { buttonRef: ref1, isVisible: isCoachmarkVisible, onDismiss: dismissCoachmark });
    const tmp80Result = closure_38(c7, obj12);
    let tmp74Result34 = tmp80Result;
    if (null == threadCreationCallback) {
      const obj41 = { channel, screenIndex, canSendMessages: editable, canCreateThreads, onJumpToPresent, isReadonly: !editable, children: tmp80Result };
      tmp74Result34 = tmp74(tmp6(14750), obj41);
    }
    return tmp74Result34;
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroImportDefault, findNodeHandle: metroImportAll } = react_native);
let DiceRollStore = DiceRollStore_mod;
const useVoiceMessagesUIStore = VoiceMessagesUIStore.useVoiceMessagesUIStore;
const DraftType = DraftStore2.DraftType;
({ updateShowingAutoComplete: closure_19, updateSmallSuggestionBarHeight: closure_20, useChatIsAtBottom: closure_21, useChatShowingAutoComplete: closure_22 } = useChatBottomManagerUIStore);
({ CHAT_INPUT_HORIZONTAL_PADDING: closure_23, CHAT_INPUT_HORIZONTAL_PADDING_PARENT: closure_24, ChatInputActionType: closure_25 } = ChatInputConstants);
({ AnalyticEvents: closure_26, ChannelTypesSets: closure_27, ChatInputComponentViewedTypes: closure_28, ComponentActions: closure_29, MAX_UPLOAD_COUNT: closure_30, Permissions: closure_31 } = Constants);
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
({ InAppCameraUsedCameraPreviewTypes: closure_35, MediaKeyboardTarget: closure_36 } = MediaKeyboardConstants);
({ jsx: closure_37, jsxs: closure_38, Fragment: closure_39 } = Fragment);
const customChannelScoresByGuild = createStyles.createStyles((arg0, arg1) => {
  let num;
  let obj8;
  let rect;
  let BACKGROUND_BASE_LOW = arg0;
  const obj = { position: "relative", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: sidebars - closure_24, backgroundColor: BACKGROUND_BASE_LOW, borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
  if (arg0 == null) {
    BACKGROUND_BASE_LOW = tmp(575).colors.BACKGROUND_BASE_LOW;
  }
  const obj2 = { container: obj, inputDefault: { alignSelf: "stretch", marginLeft: 0, marginTop: 0 }, accessories: { position: "absolute", bottom: "100%", left: 0, right: 0 }, floatingContainer: { borderTopWidth: 0, borderColor: "transparent", borderRadius: nativeDefault.radii.none, backgroundColor: "transparent", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 0, overflow: "visible" }, floatingInputBox: { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" }, floatingInputBoxPressed: { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE }, floatingInputBoxTyping: { shadowOpacity: 0, elevation: 0 }, floatingMainContents: { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP }, inputFlat: { flex: 1, justifyContent: "center", marginLeft: num }, floatingScrimOverlap: obj8, overflowVisible: { overflow: "visible" }, characterCounter: rect };
  ({ borderTopWidth: 0, borderColor: "transparent", borderRadius: nativeDefault.radii.none, backgroundColor: "transparent", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 0, overflow: "visible" });
  ({ backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" });
  ({ backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE });
  ({ flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP });
  num = -6;
  const obj7 = PlatformUtils;
  if (obj7.isAndroid()) {
    num = -5;
  }
  obj8 = { marginTop: -arg1 / 2 };
  rect = { position: "absolute", top: tmp(575).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, right: tmp(575).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL };
  return obj2;
});
let closure_41 = { code: "(function ChatInputTsx1(){let[textFieldHeight]=this.__closure;return{minHeight:textFieldHeight.get()};})" };
ChatInput.displayName = "ChatInput";
const memoResult = react.memo(ChatInput);
let size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInput.tsx");

export default memoResult;
