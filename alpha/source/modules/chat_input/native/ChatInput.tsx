// Module ID: 11630
// Function ID: 11631
// Name: ChatInput
// Dependencies: [5, 32, 19, 17, 7921, 11631, 9693, 7367, 11632, 7243, 7368, 4750, 7907, 9383, 11634, 1085, 1502, 2062, 1393, 1627, 21, 5092, 587, 1382, 11635, 2041, 4936, 4818, 11636, 504, 6971, 6851, 7897, 4850, 4987, 8512, 11658, 11659, 9293, 11660, 11661, 6923, 1121, 1630, 11705, 11706, 7768, 9262, 7758, 1279, 5057, 1265, 1629, 5107, 10853, 11710, 11905, 10022, 4985, 7757, 1893, 11906, 9427, 9363, 11927, 10039, 9259, 11930, 11931, 4782, 11949, 11950, 11951, 11952, 11958, 11959, 1103, 11960, 11961, 11964, 11980, 11983, 11986, 12090, 12092, 12117, 12119, 12120, 12133, 12137, 12142, 12144, 12145, 12146, 12151, 2]

// Module 11630 (ChatInput)
import nativeDefault from "native" /* 587 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import EmojiConstants from "EmojiConstants" /* 1393 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1502 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 6923 */;
import ThreadHooks from "ThreadHooks" /* 6971 */;
import DraftStore2 from "DraftStore" /* 7243 */;
import VoiceMessagesUIStore from "VoiceMessagesUIStore" /* 11632 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 7921 */;
import DiceRollStore from "DiceRollStore" /* 11631 */;
import NativeMenuStore from "NativeMenuStore" /* 9693 */;
import PendingReplyStore from "PendingReplyStore" /* 7367 */;
import EditMessageStore from "EditMessageStore" /* 7368 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7907 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9383 */;
import ChatInputConstants from "ChatInputConstants" /* 11634 */;
import Constants from "Constants" /* 1085 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1627 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
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
    let _undefined2;
    let accessibilityLabel;
    let c4;
    let c5;
    let canCreateThreads;
    let canMentionEveryone;
    let canSendVoiceMessage;
    let canUpload;
    let closure_3;
    let closure_6;
    let constants4;
    let constants5;
    let constants6;
    let constants7;
    let editable;
    let floatingInputBoxPressed;
    let isResourceChannel;
    let items18;
    let items19;
    let items20;
    let items21;
    let items22;
    let items23;
    let items24;
    let items26;
    let items27;
    let items28;
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
    let tmp18;
    let tmp67Result17;
    let tmp6Result11;
    let tmp71;
    let tmp84;
    let tmp93;
    let uploadLimit;
    channel = channel.channel;
    const screenIndex = channel.screenIndex;
    ({ threadCreationCallback, onJumpToPresent } = channel);
    dependencyMap = undefined;
    c4 = undefined;
    _slicedToArray = undefined;
    react = undefined;
    let suppressed;
    let stateFromStores;
    let stateFromStores1;
    editable = undefined;
    let sharedValue;
    let sharedValue1;
    let isCoachmarkVisible;
    let dismissCoachmark;
    let closure_16;
    let memo1;
    let registerViewTag;
    let unregisterViewTag;
    ref = undefined;
    let tmp = channel;
    let tmp2 = dependencyMap;
    ({ isResourceChannel, setNoExtractUI, secondaryTextFieldRef, ref } = channel);
    let obj = channel(11635);
    const mobileEmojiSuggestionsConfig = obj.useMobileEmojiSuggestionsConfig({ location: "ChatInput" });
    const InlineEmojiSuggestionsEnabled = channel(2041).InlineEmojiSuggestionsEnabled;
    let tmp67Result30 = mobileEmojiSuggestionsConfig.enabled && InlineEmojiSuggestionsEnabled.useSetting();
    dependencyMap = tmp67Result30;
    let tmpResult = tmp(4936);
    const gradientValue = tmpResult.useGradientValue(tmp(4936).GradientPercentage.END);
    let tmp6 = screenIndex;
    const tmpResult29 = tmp(4818);
    const token = tmpResult29.useToken(screenIndex(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
    const tmpResult30 = tmp(4818);
    let result = (tmpResult30.useToken(screenIndex(587).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT) - token) / 2;
    const tmpResult31 = tmp(4818);
    const token1 = tmpResult31.useToken(screenIndex(587).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
    const tmp10 = closure_40(gradientValue, token1);
    const useToken = tmp(4818).useToken;
    let token2 = gradientValue;
    tmp(4818);
    if (gradientValue == null) {
      token2 = useToken(screenIndex(587).colors.BACKGROUND_BASE_LOWER);
    }
    const tmpResult33 = tmp(4818);
    const token3 = tmpResult33.useToken(tmp6(587).modules.mobile.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED);
    const tmpResult34 = tmp(4818);
    const token4 = tmpResult34.useToken(tmp6(587).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
    let obj9 = react;
    const tmpResult35 = tmp(4818);
    const token5 = tmpResult35.useToken(tmp6(587).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM);
    let tmp16 = _slicedToArray(react.useState(false), 2);
    [floatingInputBoxPressed, c4] = tmp16;
    [tmp18, c5] = _slicedToArray(react.useState(0), 2);
    const items = [screenIndex];
    const tmp17 = _slicedToArray(react.useState(0), 2);
    const callback = react.useCallback((nativeEvent) => {
      _undefined2(nativeEvent.nativeEvent.layout.y);
    }, []);
    const items1 = [screenIndex];
    const callback1 = react.useCallback((arg0) => {
      ref(screenIndex, arg0);
    }, items);
    const effect = react.useEffect(() => () => {
      ref(screenIndex, 0);
    }, items1);
    react = tmp22;
    let tmp23 = channel.isPrivate() && !tmp22;
    const tmp24 = editable((channelId) => channelId.channelId === channel.id);
    const tmpResult36 = tmp(11636);
    const typingUserIdsForDisplay = tmpResult36.useTypingUserIdsForDisplay(channel.id, 1);
    const tmp26 = closure_22(screenIndex);
    suppressed = tmp26;
    const tmpResult37 = tmp(11636);
    let result1 = tmpResult37.hasTypingIndicatorContent(channel, typingUserIdsForDisplay, tmp26);
    const tmp28 = closure_21(screenIndex);
    let tmp29 = token1;
    if (tmp28) {
      tmp29 = token5;
    }
    let tmp30 = token4;
    if (tmp28) {
      tmp30 = token3;
    }
    const items2 = [closure_16];
    const tmpResult38 = tmp(504);
    stateFromStores = tmpResult38.useStateFromStores(items2, () => {
      let editingTextValue = null;
      if (!closure_6) {
        editingTextValue = EditMessageStore.getEditingTextValue(channel.id);
      }
      return editingTextValue;
    });
    const items3 = [sharedValue];
    const tmpResult39 = tmp(504);
    stateFromStores1 = tmpResult39.useStateFromStores(items3, () => {
      let pendingReply;
      if (!closure_6) {
        pendingReply = PendingReplyStore.getPendingReply(channel.id);
      }
      return pendingReply;
    });
    const items4 = [registerViewTag];
    const tmpResult40 = tmp(504);
    let stateFromStores2 = tmpResult40.useStateFromStores(items4, () => {
      const tmp = closure_6;
      if (tmp) {
        return false;
      } else {
        const uploads = UploadAttachmentStore.getUploads(channel.id, DraftType.ChannelMessage);
        return null != uploads && uploads.length > 0;
      }
    });
    const items5 = [channel.id, tmp22];
    let memo = stateFromStores;
    if (stateFromStores == null) {
      memo = obj9.useMemo(() => DraftStore.getDraft(channel.id, closure_6 ? DraftType.FirstThreadMessage : DraftType.ChannelMessage), items5);
    }
    const items6 = [memo1];
    const items7 = [channel, tmp22];
    const tmpResult41 = tmp(504);
    const stateFromStoresObject = tmpResult41.useStateFromStoresObject(items6, () => {
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
      if (!closure_6) {
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
      const obj4 = { canMentionEveryone: tmp14, canUpload: (isPrivateResult || canResult) && !tmp13 && !closure_6, canSendVoiceMessage: isPrivateResult, editable: !tmp13, canCreateThreads: tmp6 };
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
    }, items7);
    ({ canUpload, editable } = stateFromStoresObject);
    ({ canMentionEveryone, canSendVoiceMessage, canCreateThreads } = stateFromStoresObject);
    const analyticsLocations = tmp6(6851)().analyticsLocations;
    let tmp36 = tmp22 || null != stateFromStores;
    if (!tmp36) {
      const tmpResult42 = tmp(6971);
      tmp36 = !tmpResult42.getIsActiveChannelOrUnarchivableThread(channel);
    }
    const tmpResult43 = tmp(6971);
    let canStartThread = tmpResult43.useCanStartThread(channel);
    if (canStartThread) {
      const GUILD_THREADS_ONLY = constants.GUILD_THREADS_ONLY;
      canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
    }
    if (canStartThread) {
      canStartThread = !tmp22;
    }
    const tmpResult44 = tmp(7897);
    const tmp40 = tmpResult44.useCanPostPollsInChannel(channel) && null == threadCreationCallback;
    const tmpResult45 = tmp(4850);
    sharedValue = tmpResult45.useSharedValue(token);
    const tmpResult46 = tmp(4850);
    sharedValue1 = tmpResult46.useSharedValue(token);
    const items8 = [sharedValue1, token, sharedValue];
    const effect1 = obj9.useEffect(() => {
      const result = sharedValue.set(token);
      const result1 = sharedValue1.set(token);
    }, items8);
    const tmp44 = tmp6(4987)();
    const tmp45 = sharedValue1((startTimeMillis) => null != startTimeMillis.startTimeMillis);
    let result3 = !tmp22;
    let isAppLauncherEnabled = result3;
    if (null == threadCreationCallback) {
      const tmpResult47 = tmp(8512);
      isAppLauncherEnabled = tmpResult47.getIsAppLauncherEnabled(channel);
    }
    const items9 = [stateFromStores1];
    const tmpResult48 = tmp(504);
    const stateFromStores3 = tmpResult48.useStateFromStores(items9, () => ApplicationCommandStore.getActiveCommand(channel.id));
    let obj2 = { channel, isReadonly: !editable, isCreatingThread: tmp22 };
    let tmp49 = tmp6(11658)(obj2);
    ({ placeholder, accessibilityLabel } = tmp49);
    const tmpResult49 = tmp(4850);
    class Ze {
      constructor() {
        const obj = { minHeight: sharedValue1.get() };
        return obj;
      }
    }
    Ze.__closure = { textFieldHeight: sharedValue1 };
    Ze.__workletHash = 11048691841625;
    Ze.__initData = __initData;
    const animatedStyle = tmpResult49.useAnimatedStyle(Ze);
    const ref1 = obj9.useRef(null);
    let obj3 = { disabled: !editable };
    const tmpResult50 = tmp(11659);
    const refreshChatInputCoachmark = tmpResult50.useRefreshChatInputCoachmark(obj3);
    const tmpResult51 = tmp(9293);
    let canUseScheduledMessages = tmpResult51.useCanUseScheduledMessages();
    const useScheduledMessageDraftCoachmarkState = tmp(11660).useScheduledMessageDraftCoachmarkState;
    tmp(11660);
    if (canUseScheduledMessages) {
      canUseScheduledMessages = editable;
    }
    if (canUseScheduledMessages) {
      canUseScheduledMessages = result3;
    }
    if (canUseScheduledMessages) {
      canUseScheduledMessages = null == refreshChatInputCoachmark;
    }
    const scheduledMessageDraftCoachmarkState = useScheduledMessageDraftCoachmarkState({ isEligible: canUseScheduledMessages });
    isCoachmarkVisible = scheduledMessageDraftCoachmarkState.isCoachmarkVisible;
    dismissCoachmark = scheduledMessageDraftCoachmarkState.dismissCoachmark;
    let obj4 = { chatInputProps: { analyticsLocations, canUpload, channel, defaultValue: memo, hasAttachmentsToUpload: stateFromStores2, pendingEdit: stateFromStores, pendingReply: stateFromStores1, screenIndex, secondaryTextFieldRef, threadCreationCallback }, chatInputTextFieldHeight: sharedValue1, ref };
    const tmp56 = tmp6(11661)(obj4);
    closure_16 = tmp56;
    const items10 = [tmp56];
    const effect2 = obj9.useEffect(() => {
      const current = closure_16.chatInput.current;
      current.setText(closure_16.props.current.defaultValue);
    }, items10);
    const items11 = [tmp56, channel, stateFromStores, stateFromStores1];
    const effect3 = obj9.useEffect(() => {
      const current = closure_16.propsPrev.current;
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
            current4.setText(closure_16.props.current.defaultValue);
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
    }, items11);
    const items12 = [tmp56];
    const effect4 = obj9.useEffect(() => {
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
      let ComponentDispatch = channel(closure_3[42]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants4.TEXTAREA_FOCUS, handleOpenKeyboard);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants.TEXTAREA_FOCUS, handleOpenKeyboard);
      };
    }, items12);
    const items13 = [tmp56, sharedValue];
    memo1 = obj9.useMemo(() => {
      let ChannelMessage;
      let obj = {
        handleBlur(nativeEvent) {
          const obj = channel(closure_3[43]);
          const result = obj.setIsAnyChatInputFocused(false);
          const result1 = memo1.handleTextOrFocusChange(str, false);
          closure_1_16.state.current.focused = false;
          _undefined(false);
          const current = closure_1_16.chatInputCover.current;
          if (current != null) {
            current.focused(false);
          }
          const current2 = tmp3.chatInputAppCommandManager.current;
          if (current2 != null) {
            current2.updateState();
          }
          const current3 = tmp3.chatInputAutocomplete.current;
          if (current3 != null) {
            const obj2 = { focused: false, text: nativeEvent.nativeEvent.text, selectionStart: closure_1_16.state.current.selectionStart, selectionEnd: closure_1_16.state.current.selectionEnd };
            current3.setData(obj2);
          }
          const current4 = tmp3.chatInputEmojiSuggestions.current;
          if (current4 != null) {
            const obj3 = { focused: false, text: nativeEvent.nativeEvent.text, selectionStart: closure_1_16.state.current.selectionStart, selectionEnd: closure_1_16.state.current.selectionEnd };
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
          const obj = channel(closure_3[43]);
          const result = obj.setIsAnyChatInputFocused(true);
          closure_1_16.state.current.focused = true;
          _undefined(true);
          closure_1_16.state.current.selectionStart = start;
          closure_1_16.state.current.selectionEnd = end;
          const result1 = memo1.handleTextOrFocusChange(closure_1_16.state.current.text, true);
          const current = closure_1_16.chatInputAppCommandManager.current;
          if (current != null) {
            current.updateState();
          }
          const current2 = tmp2.chatInputCover.current;
          if (current2 != null) {
            current2.focused(true);
          }
          const current3 = tmp2.chatInputAutocomplete.current;
          if (current3 != null) {
            const obj2 = { focused: true, text: closure_1_16.state.current.text, selectionStart: start, selectionEnd: end };
            current3.setData(obj2);
          }
          const current4 = tmp2.chatInputEmojiSuggestions.current;
          if (current4 != null) {
            const obj3 = { focused: true, text: closure_1_16.state.current.text, selectionStart: start, selectionEnd: end };
            current4.setData(obj3);
          }
        },
        handleChangeContentSize(nativeEvent) {
          const height = nativeEvent.nativeEvent.height;
          closure_1_16.state.current.textFieldContentSize = height;
          const obj = channel(closure_3[44]);
          const tmp = closure_1_16;
          const tmp2 = channel;
          const tmp3 = closure_3;
          if (!obj.getIsChatInputHeightWorkletEnabled()) {
            const textFieldHeight = tmp.state.current.textFieldHeight;
            set = textFieldHeight.set;
            const tmp2Result = tmp2(tmp3[45]);
            const result = set(tmp2Result.getChatInputHeightAnimationTiming(height, sharedValue.get()));
          }
        },
        handleLayoutOfInputContainer(arg0) {
          const current = closure_1_16.chatInputAutocomplete.current;
          if (current != null) {
            current.setChatInputHeight(tmp.layout.height);
          }
        },
        handleLayout(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          const height = layout.height;
          const tmp = 0 !== height && 0 !== layout.width;
          if (tmp) {
            if (null == closure_1_16.props.current.threadCreationCallback) {
              const current = closure_1_16.chatInput.current;
              const result = current.updateChatInputContainerHeightDebounced(height);
            }
          }
        },
        handleMaxHeightChanged() {
          const obj = channel(closure_3[44]);
          const tmp = channel;
          const tmp2 = closure_3;
          if (!obj.getIsChatInputHeightWorkletEnabled()) {
            const textFieldContentSize = closure_1_16.state.current.textFieldContentSize;
            if (0 !== textFieldContentSize) {
              const textFieldHeight = closure_1_16.state.current.textFieldHeight;
              set = textFieldHeight.set;
              const tmpResult = tmp(tmp2[45]);
              const result = set(tmpResult.getChatInputHeightAnimationTiming(textFieldContentSize, sharedValue.get()));
            }
          }
        },
        handleChangeAutoCompleteVisibility(arg0) {
          unregisterViewTag(closure_1_16.props.current.screenIndex, arg0);
        },
        handlePasteCommand(arg0) {
          if (closure_1_16.state.current.focused) {
            const current = tmp2.chatInputAppCommandManager.current;
            if (current != null) {
              const applicationCommandManager = current.getApplicationCommandManager();
              if (applicationCommandManager != null) {
                applicationCommandManager.setPastedCommand(tmp, closure_1_16.props.current.channel);
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
            const obj20 = channel(closure_3[50]);
            const result = obj20.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj4 = { type: constants3.ADD_BUTTON, channel_id: closure_1_16.props.current.channel.id, guild_id: closure_1_16.props.current.channel.guild_id };
            const obj21 = screenIndex(closure_3[51]);
            obj21.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj4);
            const obj23 = channel(closure_3[34]);
            const keyboardType = obj23.getKeyboardType();
            const tmp49 = closure_1_16;
            if (keyboardType === channel(closure_3[52]).KeyboardTypes.APP_LAUNCHER) {
              const handleToggleKeyboard3 = memo1.handleToggleKeyboard;
              const obj5 = { type: channel(closure_3[52]).KeyboardTypes.APP_LAUNCHER };
              const result1 = handleToggleKeyboard3(obj5);
            } else {
              const tmp43Result = channel(closure_3[34]);
              const keyboardType1 = tmp43Result.getKeyboardType();
              if (keyboardType1 === channel(closure_3[52]).KeyboardTypes.MEDIA) {
                const current = tmp49.chatInputActions.current;
                if (current != null) {
                  current.focusPhotosButton();
                }
              }
              const handleToggleKeyboard2 = memo1.handleToggleKeyboard;
              const obj8 = { type: channel(closure_3[52]).KeyboardTypes.MEDIA, context: obj11 };
              obj11 = { target: constants7.CHAT };
              const result2 = handleToggleKeyboard2(obj8);
            }
          } else {
            let tmp36 = current2;
            if (constants.APPS === arg1) {
              const obj12 = channel(closure_3[50]);
              const result3 = obj12.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
              const obj13 = channel(closure_3[53]);
              obj13.trackWithMetadata(constants2.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED);
              const obj15 = { type: constants3.APPS_BUTTON, channel_id: closure_1_16.props.current.channel.id, guild_id: closure_1_16.props.current.channel.guild_id };
              const obj14 = screenIndex(closure_3[51]);
              obj14.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj15);
              const obj16 = mobileEmojiSuggestionsConfig(closure_3[54]);
              const result4 = obj16.dismissNewActivityIndicator();
              const setAppLauncherA11yFocusReturnRef = channel(closure_3[55]).setAppLauncherA11yFocusReturnRef;
              const tmp30 = closure_1_16;
              if (tmp36 == null) {
                tmp36 = null;
              }
              const result5 = setAppLauncherA11yFocusReturnRef(tmp36);
              const handleToggleKeyboard = memo1.handleToggleKeyboard;
              const obj17 = { type: channel(closure_3[52]).KeyboardTypes.APP_LAUNCHER, context: obj18 };
              obj18 = { initialRouteName: constants5.HOME, initialSearchQuery: name };
              const tmp23Result = channel(closure_3[56]);
              const appDMApplication = tmp23Result.getAppDMApplication(tmp30.props.current.channel);
              name = undefined;
              if (appDMApplication != null) {
                name = appDMApplication.name;
              }
              handleToggleKeyboard(obj17);
            } else if (constants.ALL_PHOTOS === arg1) {
              const obj9 = channel(closure_3[50]);
              const result6 = obj9.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
              const obj19 = {
                channel: closure_1_16.props.current.channel,
                uploadLimit,
                onDismissKeyboard() {
                      const obj = closure_1_0(closure_1_3[58]);
                      return obj.dismissKeyboard();
                    },
                onRestoreKeyboard() {
                      const obj = { type: closure_0(closure_2_3[52]).KeyboardTypes.SYSTEM };
                      return closure_1_17.handleToggleKeyboard(obj);
                    },
                onSelectFiles(items) {
                      const obj = closure_0(closure_2_3[57]);
                      obj.addImagesFromPicker(closure_1_16.props.current.channel.id, items, closure_0(closure_2_3[59]).UploadOrigin.IMAGE_PICKER);
                    },
                draftType: dismissCoachmark.ChannelMessage
              };
              const obj10 = channel(closure_3[57]);
              obj10.handleViewAllDialog(obj19);
            } else if (constants.CAMERA === arg1) {
              const obj6 = channel(closure_3[50]);
              const result7 = obj6.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
              const obj22 = {
                channel: closure_1_16.props.current.channel,
                previewType: constants6.CAMERA_BUTTON,
                onDismissKeyboard() {
                      const obj = closure_1_0(closure_1_3[58]);
                      return obj.dismissKeyboard();
                    },
                onRestoreKeyboard() {
                      const obj = { type: closure_0(closure_2_3[52]).KeyboardTypes.SYSTEM };
                      return closure_1_17.handleToggleKeyboard(obj);
                    },
                onSelectFiles(items) {
                      const obj = closure_0(closure_2_3[57]);
                      obj.addImagesFromPicker(closure_1_16.props.current.channel.id, items, closure_0(closure_2_3[59]).UploadOrigin.IMAGE_PICKER);
                    }
              };
              const obj7 = channel(closure_3[57]);
              obj7.handleCameraDialog(obj22);
            } else if (constants.NITRO_GIFT === arg1) {
              let obj = screenIndex(closure_3[60]);
              const result8 = obj.markPotentialBadState();
              const obj2 = channel(closure_3[50]);
              const result9 = obj2.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
              const obj3 = channel(closure_3[23]);
              if (obj3.isAndroid()) {
                const tmp5Result = channel(closure_3[58]);
                tmp5Result.dismissKeyboard();
              }
              const tmp5Result2 = channel(closure_3[57]);
              tmp5Result2.handleSelectGift(closure_1_16.props.current.analyticsLocations, closure_1_16.chatInput, tmp36);
            } else if (constants.THREAD === arg1) {
              const obj27 = channel(closure_3[50]);
              const result10 = obj27.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
              const obj28 = channel(closure_3[57]);
              obj28.handleSelectThread(closure_1_16.props.current.channel, closure_1_16.chatInput);
            }
          }
        },
        handlePollsPress() {
          let obj = channel(closure_3[50]);
          const result = obj.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj2 = screenIndex(closure_3[51]);
          const obj3 = { type: constants3.POLLS, channel_id: closure_1_16.props.current.channel.id, guild_id: closure_1_16.props.current.channel.guild_id };
          obj2.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj3);
          const obj4 = channel(closure_3[58]);
          obj4.dismissKeyboard();
          const obj5 = channel(closure_3[61]);
          const obj6 = {
            channel: closure_1_16.props.current.channel,
            onCancel() {
              const obj = { type: closure_0(closure_2_3[52]).KeyboardTypes.SYSTEM };
              return closure_1_17.handleToggleKeyboard(obj);
            }
          };
          obj5.openCreatePollModal(obj6);
        },
        handleAttachPress() {
          let props;
          let obj = channel(closure_3[50]);
          const result = obj.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj2 = channel(closure_3[57]);
          const obj3 = {
            channel: closure_1_16.props.current.channel,
            uploadLimit,
            onDismissKeyboard() {
              const obj = closure_1_0(closure_1_3[58]);
              return obj.dismissKeyboard();
            },
            onRestoreKeyboard() {
              const obj = { type: closure_0(closure_2_3[52]).KeyboardTypes.SYSTEM };
              return closure_1_17.handleToggleKeyboard(obj);
            },
            onSelectFiles(items) {
              const obj = closure_0(closure_2_3[57]);
              obj.addImagesFromPicker(props.props.current.channel.id, items, closure_0(closure_2_3[59]).UploadOrigin.FILE_ATTACHMENT);
            }
          };
          obj2.handleAttachFile(obj3);
        },
        handlePressExpression(arg0, unlocked) {
          let obj3;
          let tmp7;
          const obj = channel(closure_3[62]);
          const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.ChatInputExpressionPressed);
          let tmp4 = null != unlocked;
          if (tmp4) {
            tmp4 = unlocked.unlocked.length > 0 || unlocked.locked.length > 0;
          }
          let type = arg0;
          if (arg0 == null) {
            const tmpResult = channel(closure_3[34]);
            type = tmpResult.getKeyboardContextForType(tmp(tmp2[52]).KeyboardTypes.EXPRESSION).type;
          }
          const handleToggleKeyboard = memo1.handleToggleKeyboard;
          const obj2 = { type: channel(closure_3[52]).KeyboardTypes.EXPRESSION, context: obj3 };
          obj3 = { type, suggestedEmojis: tmp7 };
          tmp7 = undefined;
          if (tmp4) {
            tmp7 = unlocked;
          }
          handleToggleKeyboard(obj2);
        },
        handlePressSend() {
          const current = closure_1_16.chatInput.current;
          current.handleSend();
        },
        handleSelectionOrTextChange(nativeEvent) {
          let editId;
          let end;
          let start;
          let text;
          ({ start, end, text, editId } = nativeEvent.nativeEvent);
          closure_1_16.state.current.editId = editId;
          closure_1_16.state.current.selectionStart = start;
          closure_1_16.state.current.selectionEnd = end;
          const editId2 = closure_1_16.state.current.editId;
          const result = memo1.handleTextOrFocusChange(text, closure_1_16.state.current.focused);
          const current = closure_1_16.chatInputAppCommandManager.current;
          if (current != null) {
            current.updateState();
          }
          const current2 = tmp.chatInputAutocomplete.current;
          if (current2 != null) {
            const obj = { focused: closure_1_16.state.current.focused, text, selectionStart: start, selectionEnd: end };
            current2.setData(obj);
          }
          const current3 = tmp.chatInputEmojiSuggestions.current;
          if (current3 != null) {
            const obj2 = { focused: closure_1_16.state.current.focused, text, selectionStart: start, selectionEnd: end };
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
              const result1 = current6.onMessageLengthChanged(text.length);
            }
            const obj3 = channel(closure_3[63]);
            obj3.hideContextMenu();
          }
        },
        handleTapAction(nativeEvent) {
          let channelId;
          let chatInput;
          let optionName;
          const tapAction = nativeEvent.nativeEvent.tapAction;
          if ("tapAttachment" === tapAction.action) {
            let current = closure_1_16.chatInput.current;
            current.blur();
            const current2 = closure_1_16.chatInput.current;
            const openCommandAttachmentPreview = channel(closure_3[64]).openCommandAttachmentPreview;
            const tmp11 = channel(closure_3[64]);
            const applicationCommandManager = current2.getApplicationCommandManager();
            ({ channelId, optionName } = tapAction);
            let fn;
            if (closure_1_16.state.current.focused) {
              fn = () => {
                const current = chatInput.chatInput.current;
                return current.openSystemKeyboard();
              };
            }
            const result = openCommandAttachmentPreview(applicationCommandManager, channelId, optionName, fn);
          }
        },
        handleTextOrFocusChange(text, focused) {
          if (text.length > 0) {
            if (!focused) {
              const obj2 = channel(closure_3[66]);
              const maxMessageLength = obj2.getMaxMessageLength();
              const tmp16 = closure_1_16.state.current.textPrev.length <= maxMessageLength && text.length > maxMessageLength;
              if (tmp16) {
                const obj3 = screenIndex(closure_3[51]);
                obj3.track(constants2.MESSAGE_LENGTH_LIMIT_REACHED, {});
              }
              closure_1_16.state.current.textPrev = closure_1_16.state.current.text;
              closure_1_16.state.current.text = text;
            }
            if (token.isOpen()) {
              const obj = screenIndex(closure_3[65]);
              obj.hideNativeMenu();
            }
            const current2 = closure_1_16.chatInputActions.current;
            const tmp8 = closure_1_16;
            if (current2 != null) {
              current2.onDismissActions(focused);
            }
            const current3 = tmp8.chatInputRightActions.current;
            if (current3 != null) {
              current3.onDismissActions(focused);
            }
          }
          if (0 === text.length) {
            const current4 = closure_1_16.chatInputActions.current;
            const tmp21 = closure_1_16;
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
          const current = closure_1_16.chatInputTextFlushedResponses.current;
          const text = nativeEvent.text;
          const value = current.get(nativeEvent.requestId);
          if (value != null) {
            value(text);
          }
        },
        handleToggleKeyboard(type) {
          if (token.isOpen()) {
            const obj = screenIndex(closure_3[65]);
            obj.hideNativeMenu();
          }
          const tmp4 = channel;
          const tmp5 = closure_3;
          if (type.type !== channel(closure_3[52]).KeyboardTypes.SYSTEM) {
            type = type.type;
            const tmp4Result = tmp4(tmp5[34]);
            if (type !== tmp4Result.getKeyboardType()) {
              const current = closure_1_16.chatInput.current;
              current.openCustomKeyboard(type);
            }
          }
          const current2 = closure_1_16.chatInput.current;
          current2.openSystemKeyboard();
        }
      };
      let closure_0 = _undefined(function*(arg0, value) {
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
          } else if (closure_1_16.state.current.focused) {
            if (closure_1_16.props.current.canUpload) {
              mimeType = 2;
              c4 = 1;
              const obj6 = { value: obj2.getImageDimensionsIfMissing(originalUri, c1, c2), done: false };
              obj2 = closure_0(closure_2_3[46]);
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
          const obj7 = { channelId: closure_1_16.props.current.channel.id, file: size, draftType: ChannelMessage.ChannelMessage };
          size = { uri: originalUri, originalUri, width: styles.width, height: styles.height, mimeType, platform: closure_0(closure_2_3[48]).UploadPlatform.REACT_NATIVE, id: obj9.v4() };
          const addFile = screenIndex(closure_2_3[47]).addFile;
          const tmp23 = screenIndex(closure_2_3[47]);
          obj9 = closure_0(closure_2_3[49]);
          addFile(obj7);
        }
        yield "IconComponent";
        ({ url: c0, width: c1, height: c2, type: c3 } = closure_0.nativeEvent);
        return "Set";
      });
      return obj;
    }, items13);
    const items14 = [tmp67Result30, mobileEmojiSuggestionsConfig.style, tmp56, tmp26];
    const items15 = [tmp22, tmp56];
    const memo2 = obj9.useMemo(() => {
      let tmp;
      if (closure_3) {
        if ("button" === mobileEmojiSuggestionsConfig.style) {
          const obj = { chatInputRef: null, chatInputStateRef: null, suppressed };
          ({ chatInput: obj.chatInputRef, state: obj.chatInputStateRef } = closure_16);
          tmp = obj;
        }
      }
      return tmp;
    }, items14);
    const callback2 = obj9.useCallback((nativeEvent) => {
      const layout = nativeEvent.nativeEvent.layout;
      const height = layout.height;
      const tmp = 0 !== height && 0 !== layout.width;
      if (tmp) {
        const tmp2 = closure_6;
        if (!tmp2) {
          const current = closure_16.chatInput.current;
          const result = current.updateChatInputContainerHeightDebounced(height);
        }
      }
    }, items15);
    const tmp63 = tmp6(11705)({ textFieldHeight: sharedValue1, textFieldMinHeight: sharedValue });
    registerViewTag = tmp63.registerViewTag;
    unregisterViewTag = tmp63.unregisterViewTag;
    ref = obj9.useRef(null);
    const items16 = [tmp56, registerViewTag, unregisterViewTag];
    const callback3 = obj9.useCallback((current) => {
      if (null != ref.current) {
        unregisterViewTag(ref.current);
        ref.current = null;
      }
      closure_16.chatInputNative.current = current;
      if (null != current) {
        const tmp5 = metroImportAll(current);
        if (null != tmp5) {
          ref.current = tmp5;
          registerViewTag(tmp5);
        }
      }
    }, items16);
    const items17 = [editable, tmp56];
    const callback4 = obj9.useCallback(() => true, []);
    const callback5 = obj9.useCallback(() => {
      const tmp = editable;
      if (tmp) {
        const current = closure_16.chatInput.current;
        current.openSystemKeyboard();
      }
    }, items17);
    let obj5 = { canUpload, channelId: channel.id, screenIndex };
    let tmp67Result = null;
    const tmp68 = closure_37(tmp6(11930), obj5);
    if (editable) {
      let obj6 = {
        ref: tmp56.chatInputActions,
        channel,
        onPressAction: memo1.handlePressAction,
        canStartThreads: canStartThread,
        isAppLauncherEnabled,
        keyboardType: tmp44,
        shouldPhotosButtonBeDisabled: !tmp71,
        canUpload,
        shouldShowGiftButton: result2,
        canPostPolls: tmp40,
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
      tmp71 = canUpload;
      const tmp6Result = tmp6(11931);
      if (canUpload) {
        tmp71 = null == stateFromStores3;
      }
      if (!tmp71) {
        tmp71 = tmp40;
      }
      result2 = result3;
      if (null == threadCreationCallback) {
        const tmpResult53 = tmp(4782);
        result2 = tmpResult53.isPremiumGiftingSupported();
      }
      ({ handlePollsPress: obj30.onPollsPress, handleAttachPress: obj30.onAttachPress } = memo1);
      tmp67Result = tmp67(tmp6Result, obj6);
    }
    let obj7 = { style: items18, children: items19 };
    items18 = [tmp10.inputDefault, animatedStyle];
    const View = tmp6(4850).View;
    let obj8 = { accessibilityLabel, customKeyboard: tmp(11950).PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE, editable, onBeginFocus: null, onEndBlur: null, onChangeContentSize: null, onMaxHeightChanged: null, onSelectionOrTextChange: null, onTextFlushed: null, onPasteImage: null, onPasteCommand: null, onTapAction: null, onRequestSend: null, placeholder, ref: callback3, setNoExtractUI, shouldShowCursor: tmp44 !== tmp(1629).KeyboardTypes.MEDIA, verticalInset: 5 };
    ({ handleFocus: obj33.onBeginFocus, handleBlur: obj33.onEndBlur, handleChangeContentSize: obj33.onChangeContentSize, handleMaxHeightChanged: obj33.onMaxHeightChanged, handleSelectionOrTextChange: obj33.onSelectionOrTextChange, handleTextFlushed: obj33.onTextFlushed, handlePasteImage: obj33.onPasteImage, handlePasteCommand: obj33.onPasteCommand, handleTapAction: obj33.onTapAction, handlePressSend: obj33.onRequestSend } = memo1);
    const tmp6Result7 = tmp6(11949);
    items19 = [closure_37(tmp6Result7, obj8), ];
    let obj10 = { keyboardType: tmp44, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp56.chatInputCover };
    items19[1] = closure_37(tmp6(11951), obj10);
    const tmp75 = closure_38(View, obj7);
    if (editable) {
      let obj11 = { ref: tmp56.chatInputSendButton, canSendVoiceMessage, channel, defaultValue: memo, hasPendingAttachments: stateFromStores2, hasPendingEdit: null != stateFromStores, onSendMessage: memo1.handlePressSend, requireTextContent: result3 };
      const tmp6Result8 = tmp6(11952);
      if (stateFromStores2) {
        stateFromStores2 = canUpload;
      }
      tmp67Result17 = tmp67(tmp6Result8, obj11);
    } else {
      tmp67Result17 = null;
    }
    let obj12 = { collapsable: false, onLayout: callback2, style: items20, children: items21 };
    items20 = [tmp6(11958)({ isCreatingThread: tmp22 }), tmp10.overflowVisible, ];
    let floatingScrimOverlap = result3;
    if (null == threadCreationCallback) {
      floatingScrimOverlap = tmp10.floatingScrimOverlap;
    }
    items20[2] = floatingScrimOverlap;
    let tmp67Result18 = !result1;
    if (tmp67Result18) {
      let obj13 = { gradientHeight: tmp29, inline: false, scrimBase: token2 };
      tmp67Result18 = tmp67(tmp(11959).ChatInputScrimGradient, obj13);
    }
    items21 = [tmp67Result18, , , , , , , , , , , , , ];
    let tmp67Result19 = result1;
    if (tmp67Result19) {
      const tmpResult54 = tmp(1103);
      let hex2rgbResult = tmpResult54.hex2rgb(token2, 1);
      if (hex2rgbResult == null) {
        hex2rgbResult = token2;
      }
      let obj14 = { style: rect, pointerEvents: "none" };
      rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: hex2rgbResult };
      tmp67Result19 = tmp67(tmp78, obj14);
    }
    items21[1] = tmp67Result19;
    items21[2] = closure_37(tmp(11960).ChatInputAccessibilityDivider, {});
    let tmp67Result20 = null;
    if (tmp23) {
      let obj15 = { channel, hasInputText: tmp84 };
      let str = "";
      tmp84 = "" !== memo;
      const tmp6Result9 = tmp6(11961);
      if (!tmp84) {
        let current = tmp56.chatInput.current;
        let text;
        if (current != null) {
          text = current.getText();
        }
        tmp84 = "" !== text;
      }
      tmp67Result20 = tmp67(tmp6Result9, obj15);
    }
    items21[3] = tmp67Result20;
    let obj16 = { style: tmp10.accessories, children: items22 };
    let tmp67Result21 = result1;
    if (tmp67Result21) {
      let obj17 = { gradientHeight: tmp30, inline: true, scrimBase: token2 };
      tmp67Result21 = tmp67(tmp(11959).ChatInputScrimGradient, obj17);
    }
    items22 = [tmp67Result21, , ];
    let tmp67Result22 = null;
    if (null == threadCreationCallback) {
      let obj18 = { channel, screenIndex };
      tmp67Result22 = tmp67(tmp6(11636), obj18);
    }
    items22[1] = tmp67Result22;
    let tmp67Result23 = null;
    const tmpResult55 = tmp(1382);
    if (tmpResult55.isIOS()) {
      let obj19 = { channelId: channel.id, screenIndex, onJumpToPresent };
      tmp67Result23 = tmp67(tmp6(11964), obj19);
    }
    items22[2] = tmp67Result23;
    items21[4] = closure_38(suppressed, obj16);
    let tmp67Result24 = null;
    if (isResourceChannel) {
      let obj20 = { channel };
      tmp67Result24 = tmp67(tmp6(11980), obj20, channel.id);
    }
    items21[5] = tmp67Result24;
    items21[6] = closure_37(tmp(11983).MemberActionsChatInputBannerGuardedOuter, { channel });
    items21[7] = closure_37(tmp(11986).DoubleTapToReactChatInputBanner, { channel });
    let tmp67Result25 = null;
    if (tmp24) {
      let obj21 = { channelId: channel.id };
      tmp67Result25 = tmp67(tmp6(12090), obj21);
    }
    items21[8] = tmp67Result25;
    let tmp67Result26 = null;
    if (tmp44 !== tmp(1629).KeyboardTypes.EXPRESSION) {
      let obj22 = { ref: tmp56.chatInputAutocomplete, analyticsLocations, channel, canMentionEveryone, keyboardType: tmp44, onChangeAutoCompleteVisibility: memo1.handleChangeAutoCompleteVisibility, commandsDisabled: tmp36, canOnlyUseTextCommands: tmp37, chatInputRef: tmp56.chatInput, screenIndex };
      tmp67Result26 = tmp67(tmp6(12092), obj22);
    }
    items21[9] = tmp67Result26;
    let obj23 = { ref: tmp56.chatInputAppCommandManager, canOnlyUseTextCommands: tmp37, channel, chatInputRef: tmp56.chatInput, chatInputStateRef: tmp56.state, commandsDisabled: tmp36 };
    items21[10] = closure_37(tmp6(12117), obj23);
    const obj24 = { style: items23, onLayout: memo1.handleLayoutOfInputContainer, children: closure_38(tmp93, { children: items24 }) };
    items23 = [, ];
    ({ container: arr24[0], floatingContainer: arr24[1] } = tmp10);
    items24 = [tmp68, , , ];
    const tmp6Result10 = tmp6(12119);
    items24[1] = closure_37(tmp6(12120), { channel });
    const items25 = [tmp10.floatingInputBox, , ];
    tmp93 = closure_39;
    if (floatingInputBoxPressed) {
      floatingInputBoxPressed = tmp10.floatingInputBoxPressed;
    }
    items25[1] = floatingInputBoxPressed;
    const obj25 = { style: items25, onStartShouldSetResponder: callback4, onResponderRelease: callback5, onLayout: callback, collapsable: false, accessibilityElementsHidden: tmp45, importantForAccessibility: str2, children: items26 };
    const tmp94 = result1 && tmp10.floatingInputBoxTyping;
    items25[2] = tmp94;
    str2 = undefined;
    if (tmp45) {
      str2 = "no-hide-descendants";
    }
    items26 = [, , ];
    const obj26 = { channel, chatInputRef: tmp56.chatInput, pendingEdit: stateFromStores, pendingReply: stateFromStores1 };
    items26[0] = closure_37(tmp6(12133), obj26);
    let tmp67Result27 = tmp67Result30 && "large" === mobileEmojiSuggestionsConfig.style;
    if (tmp67Result27) {
      let obj27 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel, suppressed: tmp26 };
      ({ chatInputEmojiSuggestions: obj54.ref, chatInput: obj54.chatInputRef, state: obj54.chatInputStateRef } = tmp56);
      tmp67Result27 = tmp67(tmp(12137).EmojiSuggestionBarLarge, obj27);
    }
    items26[1] = tmp67Result27;
    let obj28 = { style: tmp10.floatingMainContents, children: items27 };
    let tmp67Result28 = null;
    if (null != tmp67Result) {
      const obj29 = { style: obj31, children: tmp67Result };
      obj31 = { paddingBottom: result, paddingLeft: result };
      tmp67Result28 = tmp67(tmp78, obj29);
    }
    items27 = [tmp67Result28, , , , ];
    const obj32 = { style: items28, children: tmp75 };
    items28 = [tmp10.inputFlat, { paddingBottom: result }];
    items27[1] = closure_37(suppressed, obj32);
    let tmp67Result29 = null;
    if (editable) {
      const obj34 = { style: obj35, children: closure_37(tmp6Result11, obj36) };
      obj35 = { paddingBottom: result };
      obj36 = { ref: tmp56.chatInputRightActions, channel, keyboardType: tmp44, shouldShowGiftButton: result3, onPressAction: null, onPressExpression: null, suggestedExpressions: memo2, suggestedExpressionsRef: tmp56.chatInputEmojiSuggestions };
      tmp6Result11 = tmp6(12142);
      if (null == threadCreationCallback) {
        const tmpResult56 = tmp(4782);
        result3 = tmpResult56.isPremiumGiftingSupported();
      }
      ({ handlePressAction: obj61.onPressAction, handlePressExpression: obj61.onPressExpression } = memo1);
      tmp67Result29 = tmp67(tmp78, obj34);
    }
    items27[2] = tmp67Result29;
    items27[3] = tmp67Result17;
    const obj37 = { style: tmp10.characterCounter, analyticsLocations, ref: tmp56.chatInputCharCounter };
    items27[4] = closure_37(tmp6(12144), obj37);
    items26[2] = closure_38(suppressed, obj28);
    items24[2] = closure_38(suppressed, obj25);
    if (tmp67Result30) {
      tmp67Result30 = "small" === mobileEmojiSuggestionsConfig.style;
    }
    if (tmp67Result30) {
      const obj38 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel, suppressed: tmp26, anchorTop: tmp18, onOccupiedHeightChange: callback1 };
      ({ chatInputEmojiSuggestions: obj64.ref, chatInput: obj64.chatInputRef, state: obj64.chatInputStateRef } = tmp56);
      tmp67Result30 = tmp67(tmp(12145).EmojiSuggestionBarSmall, obj38);
    }
    items24[3] = tmp67Result30;
    items21[11] = closure_37(tmp6Result10, obj24);
    let tmp67Result31 = null;
    if (null != refreshChatInputCoachmark) {
      const obj39 = { buttonRef: ref1 };
      const tmp6Result12 = tmp6(11659);
      const merged = Object.assign(refreshChatInputCoachmark);
      tmp67Result31 = tmp67(tmp6Result12, obj39);
    }
    items21[12] = tmp67Result31;
    items21[13] = closure_37(tmp6(12146), { buttonRef: ref1, isVisible: isCoachmarkVisible, onDismiss: dismissCoachmark });
    const tmp73Result = closure_38(suppressed, obj12);
    let tmp67Result32 = tmp73Result;
    if (null == threadCreationCallback) {
      const obj40 = { channel, screenIndex, canSendMessages: editable, canCreateThreads, onJumpToPresent, isReadonly: !editable, children: tmp73Result };
      tmp67Result32 = tmp67(tmp6(12151), obj40);
    }
    return tmp67Result32;
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroImportDefault, findNodeHandle: metroImportAll } = react_native);
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
const BottomSheet = createStyles.createStyles((arg0, arg1) => {
  let num;
  let obj8;
  let rect;
  let BACKGROUND_BASE_LOW = arg0;
  const obj = { position: "relative", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: closure_23 - closure_24, backgroundColor: BACKGROUND_BASE_LOW, borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
  if (arg0 == null) {
    BACKGROUND_BASE_LOW = tmp(587).colors.BACKGROUND_BASE_LOW;
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
  rect = { position: "absolute", top: tmp(587).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, right: tmp(587).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL };
  return obj2;
});
const __initData6 = { code: "function ChatInputTsx1(){const{textFieldHeight}=this.__closure;return{minHeight:textFieldHeight.get()};}" };
ChatInput.displayName = "ChatInput";
const memoResult = react.memo(ChatInput);
let size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInput.tsx");

export default memoResult;
