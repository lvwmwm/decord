// Module ID: 11316
// Function ID: 11317
// Name: ChatInput
// Dependencies: [5, 32, 19, 17, 7203, 11317, 9384, 7097, 11318, 5201, 7098, 4472, 5200, 8838, 11320, 1086, 1490, 2048, 1381, 1615, 21, 4837, 588, 1370, 11321, 2027, 4654, 4535, 11322, 504, 6688, 6584, 7184, 4570, 4705, 8784, 11342, 11343, 7269, 11344, 11345, 6643, 1122, 1618, 11388, 11389, 5451, 8605, 5441, 1267, 4802, 1253, 1617, 5017, 8777, 11393, 11570, 10135, 4703, 1881, 11571, 9641, 7367, 11605, 10152, 8602, 11608, 11609, 4504, 11626, 11627, 11628, 11629, 11635, 11636, 1104, 11637, 11638, 11642, 11658, 11663, 11666, 11766, 11768, 11792, 11794, 11795, 11808, 11812, 11816, 11817, 11818, 11819, 11820, 2]

// Module 11316 (ChatInput)
import nativeDefault from "native" /* 588 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1122 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import EmojiConstants from "EmojiConstants" /* 1381 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1490 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import DraftStore2 from "DraftStore" /* 5201 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 6643 */;
import ThreadHooks from "ThreadHooks" /* 6688 */;
import VoiceMessagesUIStore from "VoiceMessagesUIStore" /* 11318 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 7203 */;
import DiceRollStore from "DiceRollStore" /* 11317 */;
import NativeMenuStore from "NativeMenuStore" /* 9384 */;
import PendingReplyStore from "PendingReplyStore" /* 7097 */;
import EditMessageStore from "EditMessageStore" /* 7098 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5200 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 8838 */;
import ChatInputConstants from "ChatInputConstants" /* 11320 */;
import Constants from "Constants" /* 1086 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1615 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import size_mod from "module_2" /* 2 */;

const DraftStore = DraftStore2;
let channel, dependencyMap, set;

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
({ View: metroImportDefault, findNodeHandle: metroImportAll } = react_native);
let useVoiceMessagesUIStore = VoiceMessagesUIStore.useVoiceMessagesUIStore;
const DraftType = DraftStore2.DraftType;
({ updateShowingAutoComplete: closure_19, updateSmallSuggestionBarHeight: closure_20, useChatIsAtBottom: closure_21, useChatShowingAutoComplete: closure_22 } = useChatBottomManagerUIStore);
({ CHAT_INPUT_HORIZONTAL_PADDING: closure_23, CHAT_INPUT_HORIZONTAL_PADDING_PARENT: closure_24, ChatInputActionType: closure_25 } = ChatInputConstants);
({ AnalyticEvents: closure_26, ChannelTypesSets: closure_27, ChatInputComponentViewedTypes: closure_28, ComponentActions: closure_29, MAX_UPLOAD_COUNT: closure_30, Permissions: closure_31 } = Constants);
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
({ InAppCameraUsedCameraPreviewTypes: closure_35, MediaKeyboardTarget: closure_36 } = MediaKeyboardConstants);
({ jsx: closure_37, jsxs: closure_38, Fragment: closure_39 } = Fragment);
let closure_40 = createStyles.createStyles((arg0, arg1) => {
  let num;
  let BACKGROUND_BASE_LOW = arg0;
  const obj = { position: "relative", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: closure_23 - closure_24, backgroundColor: BACKGROUND_BASE_LOW, borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
  if (arg0 == null) {
    BACKGROUND_BASE_LOW = tmp(588).colors.BACKGROUND_BASE_LOW;
  }
  const obj2 = { container: obj, inputDefault: { alignSelf: "stretch", marginLeft: 0, marginTop: 0 }, accessories: { position: "absolute", bottom: "100%", left: 0, right: 0 }, floatingContainer: { borderTopWidth: 0, borderColor: "transparent", borderRadius: nativeDefault.radii.none, backgroundColor: "transparent", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 0, overflow: "visible" }, floatingInputBox: { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" }, floatingInputBoxPressed: { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE }, floatingInputBoxTyping: { shadowOpacity: 0, elevation: 0 }, floatingMainContents: { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP }, inputFlat: { flex: 1, justifyContent: "center", marginLeft: num }, floatingScrimOverlap: obj8, overflowVisible: { overflow: "visible" } };
  ({ borderTopWidth: 0, borderColor: "transparent", borderRadius: nativeDefault.radii.none, backgroundColor: "transparent", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 0, overflow: "visible" });
  ({ backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" });
  ({ backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE });
  ({ flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP });
  num = -6;
  const obj7 = PlatformUtils;
  if (obj7.isAndroid()) {
    num = -5;
  }
  return obj2;
});
const __initData = { code: "function ChatInputTsx1(){const{textFieldHeight}=this.__closure;return{minHeight:textFieldHeight.get()};}" };
const forwardRefResult = react.forwardRef((channel, ref) => {
  let _undefined;
  let accessibilityLabel;
  let c2;
  let c3;
  let canCreateThreads;
  let canMentionEveryone;
  let canSendVoiceMessage;
  let canUpload;
  let closure_13;
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
  let items29;
  let obj31;
  let obj37;
  let obj38;
  let onJumpToPresent;
  let placeholder;
  let rect;
  let result2;
  let secondaryTextFieldRef;
  let setNoExtractUI;
  let str2;
  let threadCreationCallback;
  let tmp18;
  let tmp56;
  let tmp68Result17;
  let tmp6Result11;
  let tmp72;
  let tmp85;
  let tmp94;
  let uploadLimit;
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  ({ threadCreationCallback, onJumpToPresent } = channel);
  c2 = undefined;
  dependencyMap = undefined;
  let closure_4;
  let stateFromStores;
  let stateFromStores1;
  editable = undefined;
  let sharedValue;
  let sharedValue1;
  let isCoachmarkVisible;
  let dismissCoachmark;
  useVoiceMessagesUIStore = undefined;
  let memo1;
  let registerViewTag;
  let unregisterViewTag;
  ref = undefined;
  let tmp = channel;
  let tmp2 = dependencyMap;
  ({ isResourceChannel, setNoExtractUI, secondaryTextFieldRef } = channel);
  let obj = channel(11321);
  const mobileEmojiSuggestionsConfig = obj.useMobileEmojiSuggestionsConfig({ location: "ChatInput" });
  const InlineEmojiSuggestionsEnabled = channel(2027).InlineEmojiSuggestionsEnabled;
  let tmp68Result30 = mobileEmojiSuggestionsConfig.enabled && InlineEmojiSuggestionsEnabled.useSetting();
  let tmpResult = tmp(4654);
  const gradientValue = tmpResult.useGradientValue(tmp(4654).GradientPercentage.END);
  let tmp6 = screenIndex;
  const tmpResult30 = tmp(4535);
  const token = tmpResult30.useToken(screenIndex(588).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const tmpResult31 = tmp(4535);
  let result = (tmpResult31.useToken(screenIndex(588).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT) - token) / 2;
  const tmpResult32 = tmp(4535);
  const token1 = tmpResult32.useToken(screenIndex(588).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  const tmp10 = closure_40(gradientValue, token1);
  const useToken = tmp(4535).useToken;
  let token2 = gradientValue;
  tmp(4535);
  if (gradientValue == null) {
    token2 = useToken(screenIndex(588).colors.BACKGROUND_BASE_LOWER);
  }
  const tmpResult34 = tmp(4535);
  const token3 = tmpResult34.useToken(tmp6(588).modules.mobile.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED);
  const tmpResult35 = tmp(4535);
  const token4 = tmpResult35.useToken(tmp6(588).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  let obj9 = stateFromStores1;
  const tmpResult36 = tmp(4535);
  const token5 = tmpResult36.useToken(tmp6(588).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM);
  let tmp16 = stateFromStores(stateFromStores1.useState(false), 2);
  [floatingInputBoxPressed, c2] = tmp16;
  [tmp18, c3] = stateFromStores(stateFromStores1.useState(0), 2);
  const items = [screenIndex];
  const tmp17 = stateFromStores(stateFromStores1.useState(0), 2);
  const callback = stateFromStores1.useCallback((nativeEvent) => {
    c3(nativeEvent.nativeEvent.layout.y);
  }, []);
  const items1 = [screenIndex];
  const callback1 = stateFromStores1.useCallback((arg0) => {
    closure_20(screenIndex, arg0);
  }, items);
  const effect = stateFromStores1.useEffect(() => () => {
    closure_2_20(screenIndex, 0);
  }, items1);
  closure_4 = tmp22;
  let tmp23 = channel.isPrivate() && !tmp22;
  const tmp24 = sharedValue1((channelId) => channelId.channelId === channel.id);
  const tmpResult37 = tmp(11322);
  const typingUserIdsForDisplay = tmpResult37.useTypingUserIdsForDisplay(channel.id, 1);
  const tmp26 = closure_22(screenIndex);
  const tmpResult38 = tmp(11322);
  let result1 = tmpResult38.hasTypingIndicatorContent(channel, typingUserIdsForDisplay, tmp26);
  const tmp28 = closure_21(screenIndex);
  let tmp29 = token1;
  if (tmp28) {
    tmp29 = token5;
  }
  let tmp30 = token4;
  if (tmp28) {
    tmp30 = token3;
  }
  const items2 = [unregisterViewTag];
  const tmpResult39 = tmp(504);
  stateFromStores = tmpResult39.useStateFromStores(items2, () => {
    let editingTextValue = null;
    if (!closure_4) {
      editingTextValue = EditMessageStore.getEditingTextValue(channel.id);
    }
    return editingTextValue;
  });
  const items3 = [dismissCoachmark];
  const tmpResult40 = tmp(504);
  stateFromStores1 = tmpResult40.useStateFromStores(items3, () => {
    let pendingReply;
    if (!closure_4) {
      pendingReply = PendingReplyStore.getPendingReply(channel.id);
    }
    return pendingReply;
  });
  const items4 = [UploadAttachmentStore];
  const tmpResult41 = tmp(504);
  let stateFromStores2 = tmpResult41.useStateFromStores(items4, () => {
    const tmp = closure_4;
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
    memo = obj9.useMemo(() => DraftStore.getDraft(channel.id, closure_4 ? DraftType.FirstThreadMessage : DraftType.ChannelMessage), items5);
  }
  const items6 = [ref];
  const items7 = [channel, tmp22];
  const tmpResult42 = tmp(504);
  const stateFromStoresObject = tmpResult42.useStateFromStoresObject(items6, () => {
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
    if (!closure_4) {
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
    const obj4 = { canMentionEveryone: tmp14, canUpload: (isPrivateResult || canResult) && !tmp13 && !closure_4, canSendVoiceMessage: isPrivateResult, editable: !tmp13, canCreateThreads: tmp6 };
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
  const analyticsLocations = tmp6(6584)().analyticsLocations;
  let tmp36 = tmp22 || null != stateFromStores;
  if (!tmp36) {
    const tmpResult43 = tmp(6688);
    tmp36 = !tmpResult43.getIsActiveChannelOrUnarchivableThread(channel);
  }
  const tmpResult44 = tmp(6688);
  let canStartThread = tmpResult44.useCanStartThread(channel);
  if (canStartThread) {
    const GUILD_THREADS_ONLY = constants.GUILD_THREADS_ONLY;
    canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
  }
  if (canStartThread) {
    canStartThread = !tmp22;
  }
  const tmpResult45 = tmp(7184);
  const tmp40 = tmpResult45.useCanPostPollsInChannel(channel) && null == threadCreationCallback;
  const tmpResult46 = tmp(4570);
  sharedValue = tmpResult46.useSharedValue(token);
  const tmpResult47 = tmp(4570);
  sharedValue1 = tmpResult47.useSharedValue(token);
  const items8 = [sharedValue1, token, sharedValue];
  const effect1 = obj9.useEffect(() => {
    const result = sharedValue.set(token);
    const result1 = sharedValue1.set(token);
  }, items8);
  const tmp44 = tmp6(4705)();
  const tmp45 = useVoiceMessagesUIStore((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  let result3 = !tmp22;
  let isAppLauncherEnabled = result3;
  if (null == threadCreationCallback) {
    const tmpResult48 = tmp(8784);
    isAppLauncherEnabled = tmpResult48.getIsAppLauncherEnabled(channel);
  }
  const items9 = [sharedValue];
  const tmpResult49 = tmp(504);
  const stateFromStores3 = tmpResult49.useStateFromStores(items9, () => ApplicationCommandStore.getActiveCommand(channel.id));
  let obj2 = { channel, isReadonly: !editable, isCreatingThread: tmp22 };
  let tmp49 = tmp6(11342)(obj2);
  ({ placeholder, accessibilityLabel } = tmp49);
  const tmpResult50 = tmp(4570);
  class Ze {
    constructor() {
      const obj = { minHeight: sharedValue1.get() };
      return obj;
    }
  }
  Ze.__closure = { textFieldHeight: sharedValue1 };
  Ze.__workletHash = 11048691841625;
  Ze.__initData = __initData;
  const animatedStyle = tmpResult50.useAnimatedStyle(Ze);
  ref = obj9.useRef(null);
  let obj3 = { disabled: !editable };
  const tmpResult51 = tmp(11343);
  const refreshChatInputCoachmark = tmpResult51.useRefreshChatInputCoachmark(obj3);
  const tmpResult52 = tmp(7269);
  const canUseScheduledMessages = tmpResult52.useCanUseScheduledMessages();
  const items10 = [memo1];
  const tmpResult53 = tmp(504);
  const stateFromStores4 = tmpResult53.useStateFromStores(items10, () => DraftStore.getDraft(channel.id, DraftType.ChannelMessage));
  let obj4 = { channel, draftText: stateFromStores4, isEligible: tmp56 };
  tmp56 = canUseScheduledMessages;
  const useScheduledMessageDraftCoachmarkState = tmp(11344).useScheduledMessageDraftCoachmarkState;
  tmp(11344);
  if (canUseScheduledMessages) {
    tmp56 = editable;
  }
  if (tmp56) {
    tmp56 = result3;
  }
  if (tmp56) {
    tmp56 = null == refreshChatInputCoachmark;
  }
  const scheduledMessageDraftCoachmarkState = useScheduledMessageDraftCoachmarkState(obj4);
  isCoachmarkVisible = scheduledMessageDraftCoachmarkState.isCoachmarkVisible;
  dismissCoachmark = scheduledMessageDraftCoachmarkState.dismissCoachmark;
  let obj5 = { chatInputProps: { analyticsLocations, canUpload, channel, defaultValue: memo, hasAttachmentsToUpload: stateFromStores2, pendingEdit: stateFromStores, pendingReply: stateFromStores1, screenIndex, secondaryTextFieldRef, threadCreationCallback }, chatInputTextFieldHeight: sharedValue1, ref };
  const tmp58 = tmp6(11345)(obj5);
  useVoiceMessagesUIStore = tmp58;
  const items11 = [tmp58];
  const effect2 = obj9.useEffect(() => {
    const current = closure_13.chatInput.current;
    current.setText(closure_13.props.current.defaultValue);
  }, items11);
  const items12 = [tmp58, channel, stateFromStores, stateFromStores1];
  const effect3 = obj9.useEffect(() => {
    const current = closure_13.propsPrev.current;
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
          current4.setText(closure_13.props.current.defaultValue);
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
  }, items12);
  const items13 = [tmp58];
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
    let ComponentDispatch = channel(c3[42]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants4.TEXTAREA_FOCUS, handleOpenKeyboard);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.TEXTAREA_FOCUS, handleOpenKeyboard);
    };
  }, items13);
  const items14 = [tmp58, sharedValue];
  memo1 = obj9.useMemo(() => {
    let ChannelMessage;
    let obj = {
      handleBlur(nativeEvent) {
        const obj = channel(c3[43]);
        const result = obj.setIsAnyChatInputFocused(false);
        const result1 = memo1.handleTextOrFocusChange(str, false);
        closure_1_13.state.current.focused = false;
        closure_1_2(false);
        const current = closure_1_13.chatInputCover.current;
        if (current != null) {
          current.focused(false);
        }
        const current2 = tmp3.chatInputAppCommandManager.current;
        if (current2 != null) {
          current2.updateState();
        }
        const current3 = tmp3.chatInputAutocomplete.current;
        if (current3 != null) {
          const obj2 = { focused: false, text: nativeEvent.nativeEvent.text, selectionStart: closure_1_13.state.current.selectionStart, selectionEnd: closure_1_13.state.current.selectionEnd };
          current3.setData(obj2);
        }
        const current4 = tmp3.chatInputEmojiSuggestions.current;
        if (current4 != null) {
          const obj3 = { focused: false, text: nativeEvent.nativeEvent.text, selectionStart: closure_1_13.state.current.selectionStart, selectionEnd: closure_1_13.state.current.selectionEnd };
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
        const obj = channel(c3[43]);
        const result = obj.setIsAnyChatInputFocused(true);
        closure_1_13.state.current.focused = true;
        closure_1_2(true);
        closure_1_13.state.current.selectionStart = start;
        closure_1_13.state.current.selectionEnd = end;
        const result1 = memo1.handleTextOrFocusChange(closure_1_13.state.current.text, true);
        const current = closure_1_13.chatInputAppCommandManager.current;
        if (current != null) {
          current.updateState();
        }
        const current2 = tmp2.chatInputCover.current;
        if (current2 != null) {
          current2.focused(true);
        }
        const current3 = tmp2.chatInputAutocomplete.current;
        if (current3 != null) {
          const obj2 = { focused: true, text: closure_1_13.state.current.text, selectionStart: start, selectionEnd: end };
          current3.setData(obj2);
        }
        const current4 = tmp2.chatInputEmojiSuggestions.current;
        if (current4 != null) {
          const obj3 = { focused: true, text: closure_1_13.state.current.text, selectionStart: start, selectionEnd: end };
          current4.setData(obj3);
        }
      },
      handleChangeContentSize(nativeEvent) {
        const height = nativeEvent.nativeEvent.height;
        closure_1_13.state.current.textFieldContentSize = height;
        const obj = channel(c3[44]);
        const tmp = closure_1_13;
        const tmp2 = channel;
        const tmp3 = c3;
        if (!obj.getIsChatInputHeightWorkletEnabled()) {
          const textFieldHeight = tmp.state.current.textFieldHeight;
          set = textFieldHeight.set;
          const tmp2Result = tmp2(tmp3[45]);
          const result = set(tmp2Result.getChatInputHeightAnimationTiming(height, sharedValue.get()));
        }
      },
      handleLayoutOfInputContainer(arg0) {
        const current = closure_1_13.chatInputAutocomplete.current;
        if (current != null) {
          current.setChatInputHeight(tmp.layout.height);
        }
      },
      handleLayout(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        const height = layout.height;
        const tmp = 0 !== height && 0 !== layout.width;
        if (tmp) {
          if (null == closure_1_13.props.current.threadCreationCallback) {
            const current = closure_1_13.chatInput.current;
            const result = current.updateChatInputContainerHeightDebounced(height);
          }
        }
      },
      handleMaxHeightChanged() {
        const obj = channel(c3[44]);
        const tmp = channel;
        const tmp2 = c3;
        if (!obj.getIsChatInputHeightWorkletEnabled()) {
          const textFieldContentSize = closure_1_13.state.current.textFieldContentSize;
          if (0 !== textFieldContentSize) {
            const textFieldHeight = closure_1_13.state.current.textFieldHeight;
            set = textFieldHeight.set;
            const tmpResult = tmp(tmp2[45]);
            const result = set(tmpResult.getChatInputHeightAnimationTiming(textFieldContentSize, sharedValue.get()));
          }
        }
      },
      handleChangeAutoCompleteVisibility(arg0) {
        closure_2_19(closure_1_13.props.current.screenIndex, arg0);
      },
      handlePasteCommand(arg0) {
        if (closure_1_13.state.current.focused) {
          const current = tmp2.chatInputAppCommandManager.current;
          if (current != null) {
            const applicationCommandManager = current.getApplicationCommandManager();
            if (applicationCommandManager != null) {
              applicationCommandManager.setPastedCommand(tmp, closure_1_13.props.current.channel);
            }
          }
        }
      },
      handlePasteImage: function() {
        return closure_0(...arguments);
      },
      handlePressAction(arg0, arg1, current2) {
        let name;
        let obj11;
        let obj18;
        if (constants.PHOTOS === arg1) {
          const obj20 = channel(c3[50]);
          const result = obj20.triggerHapticFeedback(channel(c3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj4 = { type: constants3.ADD_BUTTON, channel_id: closure_1_13.props.current.channel.id, guild_id: closure_1_13.props.current.channel.guild_id };
          const obj21 = screenIndex(c3[51]);
          obj21.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj4);
          const obj23 = channel(c3[34]);
          const keyboardType = obj23.getKeyboardType();
          const tmp49 = closure_1_13;
          if (keyboardType === channel(c3[52]).KeyboardTypes.APP_LAUNCHER) {
            const handleToggleKeyboard3 = memo1.handleToggleKeyboard;
            const obj5 = { type: channel(c3[52]).KeyboardTypes.APP_LAUNCHER };
            const result1 = handleToggleKeyboard3(obj5);
          } else {
            const tmp43Result = channel(c3[34]);
            const keyboardType1 = tmp43Result.getKeyboardType();
            if (keyboardType1 === channel(c3[52]).KeyboardTypes.MEDIA) {
              const current = tmp49.chatInputActions.current;
              if (current != null) {
                current.focusPhotosButton();
              }
            }
            const handleToggleKeyboard2 = memo1.handleToggleKeyboard;
            const obj8 = { type: channel(c3[52]).KeyboardTypes.MEDIA, context: obj11 };
            obj11 = { target: constants7.CHAT };
            const result2 = handleToggleKeyboard2(obj8);
          }
        } else {
          let tmp36 = current2;
          if (constants.APPS === arg1) {
            const obj12 = channel(c3[50]);
            const result3 = obj12.triggerHapticFeedback(channel(c3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj13 = channel(c3[53]);
            obj13.trackWithMetadata(constants2.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED);
            const obj15 = { type: constants3.APPS_BUTTON, channel_id: closure_1_13.props.current.channel.id, guild_id: closure_1_13.props.current.channel.guild_id };
            const obj14 = screenIndex(c3[51]);
            obj14.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj15);
            const obj16 = c2(c3[54]);
            const result4 = obj16.dismissNewActivityIndicator();
            const setAppLauncherA11yFocusReturnRef = channel(c3[55]).setAppLauncherA11yFocusReturnRef;
            const tmp30 = closure_1_13;
            if (tmp36 == null) {
              tmp36 = null;
            }
            const result5 = setAppLauncherA11yFocusReturnRef(tmp36);
            const handleToggleKeyboard = memo1.handleToggleKeyboard;
            const obj17 = { type: channel(c3[52]).KeyboardTypes.APP_LAUNCHER, context: obj18 };
            obj18 = { initialRouteName: constants5.HOME, initialSearchQuery: name };
            const tmp23Result = channel(c3[56]);
            const appDMApplication = tmp23Result.getAppDMApplication(tmp30.props.current.channel);
            name = undefined;
            if (appDMApplication != null) {
              name = appDMApplication.name;
            }
            handleToggleKeyboard(obj17);
          } else if (constants.ALL_PHOTOS === arg1) {
            const obj9 = channel(c3[50]);
            const result6 = obj9.triggerHapticFeedback(channel(c3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj19 = {
              channel: closure_1_13.props.current.channel,
              uploadLimit,
              onDismissKeyboard() {
                    const obj = closure_1_0(closure_1_3[58]);
                    return obj.dismissKeyboard();
                  },
              onRestoreKeyboard() {
                    const obj = { type: closure_0(_undefined[52]).KeyboardTypes.SYSTEM };
                    return closure_1_14.handleToggleKeyboard(obj);
                  },
              onSelectFiles(items) {
                    const obj = closure_0(_undefined[57]);
                    obj.addImagesFromPicker(closure_1_13.props.current.channel.id, items, closure_0(_undefined[48]).UploadOrigin.IMAGE_PICKER);
                  },
              draftType: registerViewTag.ChannelMessage
            };
            const obj10 = channel(c3[57]);
            obj10.handleViewAllDialog(obj19);
          } else if (constants.CAMERA === arg1) {
            const obj6 = channel(c3[50]);
            const result7 = obj6.triggerHapticFeedback(channel(c3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj22 = {
              channel: closure_1_13.props.current.channel,
              previewType: constants6.CAMERA_BUTTON,
              onDismissKeyboard() {
                    const obj = closure_1_0(closure_1_3[58]);
                    return obj.dismissKeyboard();
                  },
              onRestoreKeyboard() {
                    const obj = { type: closure_0(_undefined[52]).KeyboardTypes.SYSTEM };
                    return closure_1_14.handleToggleKeyboard(obj);
                  },
              onSelectFiles(items) {
                    const obj = closure_0(_undefined[57]);
                    obj.addImagesFromPicker(closure_1_13.props.current.channel.id, items, closure_0(_undefined[48]).UploadOrigin.IMAGE_PICKER);
                  }
            };
            const obj7 = channel(c3[57]);
            obj7.handleCameraDialog(obj22);
          } else if (constants.NITRO_GIFT === arg1) {
            let obj = screenIndex(c3[59]);
            const result8 = obj.markPotentialBadState();
            const obj2 = channel(c3[50]);
            const result9 = obj2.triggerHapticFeedback(channel(c3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj3 = channel(c3[23]);
            if (obj3.isAndroid()) {
              const tmp5Result = channel(c3[58]);
              tmp5Result.dismissKeyboard();
            }
            const tmp5Result2 = channel(c3[57]);
            tmp5Result2.handleSelectGift(closure_1_13.props.current.analyticsLocations, closure_1_13.chatInput, tmp36);
          } else if (constants.THREAD === arg1) {
            const obj27 = channel(c3[50]);
            const result10 = obj27.triggerHapticFeedback(channel(c3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj28 = channel(c3[57]);
            obj28.handleSelectThread(closure_1_13.props.current.channel, closure_1_13.chatInput);
          }
        }
      },
      handlePollsPress() {
        let obj = channel(c3[50]);
        const result = obj.triggerHapticFeedback(channel(c3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj2 = screenIndex(c3[51]);
        const obj3 = { type: constants3.POLLS, channel_id: closure_1_13.props.current.channel.id, guild_id: closure_1_13.props.current.channel.guild_id };
        obj2.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj3);
        const obj4 = channel(c3[58]);
        obj4.dismissKeyboard();
        const obj5 = channel(c3[60]);
        const obj6 = {
          channel: closure_1_13.props.current.channel,
          onCancel() {
            const obj = { type: closure_0(_undefined[52]).KeyboardTypes.SYSTEM };
            return closure_1_14.handleToggleKeyboard(obj);
          }
        };
        obj5.openCreatePollModal(obj6);
      },
      handleAttachPress() {
        let props;
        let obj = channel(c3[50]);
        const result = obj.triggerHapticFeedback(channel(c3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj2 = channel(c3[57]);
        const obj3 = {
          channel: closure_1_13.props.current.channel,
          uploadLimit,
          onDismissKeyboard() {
            const obj = closure_1_0(closure_1_3[58]);
            return obj.dismissKeyboard();
          },
          onRestoreKeyboard() {
            const obj = { type: closure_0(_undefined[52]).KeyboardTypes.SYSTEM };
            return closure_1_14.handleToggleKeyboard(obj);
          },
          onSelectFiles(items) {
            const obj = closure_0(_undefined[57]);
            obj.addImagesFromPicker(props.props.current.channel.id, items, closure_0(_undefined[48]).UploadOrigin.FILE_ATTACHMENT);
          }
        };
        obj2.handleAttachFile(obj3);
      },
      handlePressExpression(context) {
        const obj = channel(c3[61]);
        const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.ChatInputExpressionPressed);
        const obj2 = { type: channel(c3[52]).KeyboardTypes.EXPRESSION, context };
        memo1.handleToggleKeyboard(obj2);
      },
      handlePressSend() {
        const current = closure_1_13.chatInput.current;
        current.handleSend();
      },
      handleSelectionOrTextChange(nativeEvent) {
        let editId;
        let end;
        let start;
        let text;
        ({ start, end, text, editId } = nativeEvent.nativeEvent);
        closure_1_13.state.current.editId = editId;
        closure_1_13.state.current.selectionStart = start;
        closure_1_13.state.current.selectionEnd = end;
        const editId2 = closure_1_13.state.current.editId;
        const result = memo1.handleTextOrFocusChange(text, closure_1_13.state.current.focused);
        const current = closure_1_13.chatInputAppCommandManager.current;
        if (current != null) {
          current.updateState();
        }
        const current2 = tmp.chatInputAutocomplete.current;
        if (current2 != null) {
          const obj = { focused: closure_1_13.state.current.focused, text, selectionStart: start, selectionEnd: end };
          current2.setData(obj);
        }
        const current3 = tmp.chatInputEmojiSuggestions.current;
        if (current3 != null) {
          const obj2 = { focused: closure_1_13.state.current.focused, text, selectionStart: start, selectionEnd: end };
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
          const obj3 = channel(c3[62]);
          obj3.hideContextMenu();
        }
      },
      handleTapAction(nativeEvent) {
        let channelId;
        let chatInput;
        let optionName;
        const tapAction = nativeEvent.nativeEvent.tapAction;
        if ("tapAttachment" === tapAction.action) {
          let current = closure_1_13.chatInput.current;
          current.blur();
          const current2 = closure_1_13.chatInput.current;
          const openCommandAttachmentPreview = channel(c3[63]).openCommandAttachmentPreview;
          const tmp11 = channel(c3[63]);
          const applicationCommandManager = current2.getApplicationCommandManager();
          ({ channelId, optionName } = tapAction);
          let fn;
          if (closure_1_13.state.current.focused) {
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
            const obj2 = channel(c3[65]);
            const maxMessageLength = obj2.getMaxMessageLength();
            const tmp16 = closure_1_13.state.current.textPrev.length <= maxMessageLength && text.length > maxMessageLength;
            if (tmp16) {
              const obj3 = screenIndex(c3[51]);
              obj3.track(constants2.MESSAGE_LENGTH_LIMIT_REACHED, {});
            }
            closure_1_13.state.current.textPrev = closure_1_13.state.current.text;
            closure_1_13.state.current.text = text;
          }
          if (isCoachmarkVisible.isOpen()) {
            const obj = screenIndex(c3[64]);
            obj.hideNativeMenu();
          }
          const current2 = closure_1_13.chatInputActions.current;
          const tmp8 = closure_1_13;
          if (current2 != null) {
            current2.onDismissActions(focused);
          }
          const current3 = tmp8.chatInputRightActions.current;
          if (current3 != null) {
            current3.onDismissActions(focused);
          }
        }
        if (0 === text.length) {
          const current4 = closure_1_13.chatInputActions.current;
          const tmp21 = closure_1_13;
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
        const current = closure_1_13.chatInputTextFlushedResponses.current;
        const text = nativeEvent.text;
        const value = current.get(nativeEvent.requestId);
        if (value != null) {
          value(text);
        }
      },
      handleToggleKeyboard(type) {
        if (isCoachmarkVisible.isOpen()) {
          const obj = screenIndex(c3[64]);
          obj.hideNativeMenu();
        }
        const tmp4 = channel;
        const tmp5 = c3;
        if (type.type !== channel(c3[52]).KeyboardTypes.SYSTEM) {
          type = type.type;
          const tmp4Result = tmp4(tmp5[34]);
          if (type !== tmp4Result.getKeyboardType()) {
            const current = closure_1_13.chatInput.current;
            current.openCustomKeyboard(type);
          }
        }
        const current2 = closure_1_13.chatInput.current;
        current2.openSystemKeyboard();
      }
    };
    let closure_0 = closure_4(function*(arg0, value) {
      let c0;
      let c1;
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
        } else if (closure_1_13.state.current.focused) {
          if (closure_1_13.props.current.canUpload) {
            mimeType = 2;
            c4 = 1;
            const obj6 = { value: obj2.getImageDimensionsIfMissing(originalUri, c1, c2), done: false };
            obj2 = closure_0(_undefined[46]);
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
        const obj7 = { channelId: closure_1_13.props.current.channel.id, file: size, draftType: ChannelMessage.ChannelMessage };
        size = { uri: originalUri, originalUri, width: styles.width, height: styles.height, mimeType, platform: closure_0(_undefined[48]).UploadPlatform.REACT_NATIVE, id: obj9.v4() };
        const addFile = screenIndex(_undefined[47]).addFile;
        const tmp23 = screenIndex(_undefined[47]);
        obj9 = closure_0(_undefined[49]);
        addFile(obj7);
      }
      yield "IconComponent";
      ({ url: c0, width: c1, height: c2, type: c3 } = closure_0.nativeEvent);
      return "Reflect";
    });
    return obj;
  }, items14);
  const items15 = [tmp22, tmp58];
  const callback2 = obj9.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const height = layout.height;
    const tmp = 0 !== height && 0 !== layout.width;
    if (tmp) {
      const tmp2 = closure_4;
      if (!tmp2) {
        const current = closure_13.chatInput.current;
        const result = current.updateChatInputContainerHeightDebounced(height);
      }
    }
  }, items15);
  const tmp64 = tmp6(11388)({ textFieldHeight: sharedValue1, textFieldMinHeight: sharedValue });
  registerViewTag = tmp64.registerViewTag;
  unregisterViewTag = tmp64.unregisterViewTag;
  ref = obj9.useRef(null);
  const items16 = [tmp58, registerViewTag, unregisterViewTag];
  const callback3 = obj9.useCallback((current) => {
    if (null != ref.current) {
      unregisterViewTag(ref.current);
      ref.current = null;
    }
    closure_13.chatInputNative.current = current;
    if (null != current) {
      const tmp5 = metroImportAll(current);
      if (null != tmp5) {
        ref.current = tmp5;
        registerViewTag(tmp5);
      }
    }
  }, items16);
  const items17 = [editable, tmp58];
  const callback4 = obj9.useCallback(() => true, []);
  const callback5 = obj9.useCallback(() => {
    const tmp = editable;
    if (tmp) {
      const current = closure_13.chatInput.current;
      current.openSystemKeyboard();
    }
  }, items17);
  let obj6 = { canUpload, channelId: channel.id, screenIndex };
  let tmp68Result = null;
  const tmp69 = closure_37(tmp6(11608), obj6);
  if (editable) {
    let obj7 = {
      ref: tmp58.chatInputActions,
      channel,
      onPressAction: memo1.handlePressAction,
      canStartThreads: canStartThread,
      isAppLauncherEnabled,
      keyboardType: tmp44,
      shouldPhotosButtonBeDisabled: !tmp72,
      canUpload,
      shouldShowGiftButton: result2,
      canPostPolls: tmp40,
      onPollsPress: null,
      onAttachPress: null,
      photosButtonExternalRef: ref,
      onContextMenuOpen() {
          const tmp = isCoachmarkVisible;
          if (tmp) {
            dismissCoachmark(ContentDismissActionType.TAKE_ACTION);
          }
        }
    };
    tmp72 = canUpload;
    const tmp6Result = tmp6(11609);
    if (canUpload) {
      tmp72 = null == stateFromStores3;
    }
    if (!tmp72) {
      tmp72 = tmp40;
    }
    result2 = result3;
    if (null == threadCreationCallback) {
      const tmpResult55 = tmp(4504);
      result2 = tmpResult55.isPremiumGiftingSupported();
    }
    ({ handlePollsPress: obj32.onPollsPress, handleAttachPress: obj32.onAttachPress } = memo1);
    tmp68Result = tmp68(tmp6Result, obj7);
  }
  let obj8 = { style: items18, children: items19 };
  items18 = [tmp10.inputDefault, animatedStyle];
  const View = tmp6(4570).View;
  let obj10 = { accessibilityLabel, customKeyboard: tmp(11627).PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE, editable, onBeginFocus: null, onEndBlur: null, onChangeContentSize: null, onMaxHeightChanged: null, onSelectionOrTextChange: null, onTextFlushed: null, onPasteImage: null, onPasteCommand: null, onTapAction: null, onRequestSend: null, placeholder, ref: callback3, setNoExtractUI, shouldShowCursor: tmp44 !== tmp(1617).KeyboardTypes.MEDIA, verticalInset: 5 };
  ({ handleFocus: obj35.onBeginFocus, handleBlur: obj35.onEndBlur, handleChangeContentSize: obj35.onChangeContentSize, handleMaxHeightChanged: obj35.onMaxHeightChanged, handleSelectionOrTextChange: obj35.onSelectionOrTextChange, handleTextFlushed: obj35.onTextFlushed, handlePasteImage: obj35.onPasteImage, handlePasteCommand: obj35.onPasteCommand, handleTapAction: obj35.onTapAction, handlePressSend: obj35.onRequestSend } = memo1);
  const tmp6Result7 = tmp6(11626);
  items19 = [closure_37(tmp6Result7, obj10), ];
  let obj11 = { keyboardType: tmp44, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp58.chatInputCover };
  items19[1] = closure_37(tmp6(11628), obj11);
  const tmp76 = closure_38(View, obj8);
  if (editable) {
    let obj12 = { ref: tmp58.chatInputSendButton, canSendVoiceMessage, channel, defaultValue: memo, hasPendingAttachments: stateFromStores2, hasPendingEdit: null != stateFromStores, onSendMessage: memo1.handlePressSend, requireTextContent: result3 };
    const tmp6Result8 = tmp6(11629);
    if (stateFromStores2) {
      stateFromStores2 = canUpload;
    }
    tmp68Result17 = tmp68(tmp6Result8, obj12);
  } else {
    tmp68Result17 = null;
  }
  let obj13 = { collapsable: false, onLayout: callback2, style: items20, children: items21 };
  items20 = [tmp6(11635)({ isCreatingThread: tmp22 }), tmp10.overflowVisible, ];
  let floatingScrimOverlap = result3;
  if (null == threadCreationCallback) {
    floatingScrimOverlap = tmp10.floatingScrimOverlap;
  }
  items20[2] = floatingScrimOverlap;
  let tmp68Result18 = !result1;
  if (tmp68Result18) {
    let obj14 = { gradientHeight: tmp29, inline: false, scrimBase: token2 };
    tmp68Result18 = tmp68(tmp(11636).ChatInputScrimGradient, obj14);
  }
  items21 = [tmp68Result18, , , , , , , , , , , , , ];
  let tmp68Result19 = result1;
  if (tmp68Result19) {
    const tmpResult56 = tmp(1104);
    let hex2rgbResult = tmpResult56.hex2rgb(token2, 1);
    if (hex2rgbResult == null) {
      hex2rgbResult = token2;
    }
    let obj15 = { style: rect, pointerEvents: "none" };
    rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: hex2rgbResult };
    tmp68Result19 = tmp68(tmp79, obj15);
  }
  items21[1] = tmp68Result19;
  items21[2] = closure_37(tmp(11637).ChatInputAccessibilityDivider, {});
  let tmp68Result20 = null;
  if (tmp23) {
    let obj16 = { channel, hasInputText: tmp85 };
    let str = "";
    tmp85 = "" !== memo;
    const tmp6Result9 = tmp6(11638);
    if (!tmp85) {
      let current = tmp58.chatInput.current;
      let text;
      if (current != null) {
        text = current.getText();
      }
      tmp85 = "" !== text;
    }
    tmp68Result20 = tmp68(tmp6Result9, obj16);
  }
  items21[3] = tmp68Result20;
  let obj17 = { style: tmp10.accessories, children: items22 };
  let tmp68Result21 = result1;
  if (tmp68Result21) {
    let obj18 = { gradientHeight: tmp30, inline: true, scrimBase: token2 };
    tmp68Result21 = tmp68(tmp(11636).ChatInputScrimGradient, obj18);
  }
  items22 = [tmp68Result21, , ];
  let tmp68Result22 = null;
  if (null == threadCreationCallback) {
    let obj19 = { channel, screenIndex };
    tmp68Result22 = tmp68(tmp6(11322), obj19);
  }
  items22[1] = tmp68Result22;
  let tmp68Result23 = null;
  const tmpResult57 = tmp(1370);
  if (tmpResult57.isIOS()) {
    let obj20 = { channelId: channel.id, screenIndex, onJumpToPresent };
    tmp68Result23 = tmp68(tmp6(11642), obj20);
  }
  items22[2] = tmp68Result23;
  items21[4] = closure_38(editable, obj17);
  let tmp68Result24 = null;
  if (isResourceChannel) {
    let obj21 = { channel };
    tmp68Result24 = tmp68(tmp6(11658), obj21, channel.id);
  }
  items21[5] = tmp68Result24;
  items21[6] = closure_37(tmp(11663).MemberActionsChatInputBannerGuardedOuter, { channel });
  items21[7] = closure_37(tmp(11666).DoubleTapToReactChatInputBanner, { channel });
  let tmp68Result25 = null;
  if (tmp24) {
    let obj22 = { channelId: channel.id };
    tmp68Result25 = tmp68(tmp6(11766), obj22);
  }
  items21[8] = tmp68Result25;
  let tmp68Result26 = null;
  if (tmp44 !== tmp(1617).KeyboardTypes.EXPRESSION) {
    let obj23 = { ref: tmp58.chatInputAutocomplete, analyticsLocations, channel, canMentionEveryone, keyboardType: tmp44, onChangeAutoCompleteVisibility: memo1.handleChangeAutoCompleteVisibility, commandsDisabled: tmp36, canOnlyUseTextCommands: tmp37, chatInputRef: tmp58.chatInput, screenIndex };
    tmp68Result26 = tmp68(tmp6(11768), obj23);
  }
  items21[9] = tmp68Result26;
  const obj24 = { ref: tmp58.chatInputAppCommandManager, canOnlyUseTextCommands: null != stateFromStores1, channel, chatInputRef: tmp58.chatInput, chatInputStateRef: tmp58.state, commandsDisabled: tmp36 };
  items21[10] = closure_37(tmp6(11792), obj24);
  const obj25 = { style: items23, onLayout: memo1.handleLayoutOfInputContainer, children: closure_38(tmp94, { children: items24 }) };
  items23 = [, ];
  ({ container: arr24[0], floatingContainer: arr24[1] } = tmp10);
  items24 = [tmp69, , , ];
  const tmp6Result10 = tmp6(11794);
  items24[1] = closure_37(tmp6(11795), { channel });
  const items25 = [tmp10.floatingInputBox, , ];
  tmp94 = closure_39;
  if (floatingInputBoxPressed) {
    floatingInputBoxPressed = tmp10.floatingInputBoxPressed;
  }
  items25[1] = floatingInputBoxPressed;
  const obj26 = { style: items25, onStartShouldSetResponder: callback4, onResponderRelease: callback5, onLayout: callback, collapsable: false, accessibilityElementsHidden: tmp45, importantForAccessibility: str2, children: items26 };
  const tmp95 = result1 && tmp10.floatingInputBoxTyping;
  items25[2] = tmp95;
  str2 = undefined;
  if (tmp45) {
    str2 = "no-hide-descendants";
  }
  let obj27 = { channel, chatInputRef: tmp58.chatInput, pendingEdit: stateFromStores, pendingReply: stateFromStores1 };
  items26 = [closure_37(tmp6(11808), obj27), , ];
  let tmp68Result27 = tmp68Result30 && "large" === mobileEmojiSuggestionsConfig.style;
  if (tmp68Result27) {
    let obj28 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel, suppressed: tmp26 };
    ({ chatInputEmojiSuggestions: obj56.ref, chatInput: obj56.chatInputRef, state: obj56.chatInputStateRef } = tmp58);
    tmp68Result27 = tmp68(tmp(11812).EmojiSuggestionBarLarge, obj28);
  }
  items26[1] = tmp68Result27;
  let tmp68Result28 = null;
  const obj29 = { style: tmp10.floatingMainContents, children: items27 };
  if (null != tmp68Result) {
    const obj30 = { style: obj31, children: tmp68Result };
    obj31 = { paddingBottom: result, paddingLeft: result };
    tmp68Result28 = tmp68(tmp79, obj30);
  }
  items27 = [tmp68Result28, , , ];
  const obj33 = { style: items28, children: items29 };
  items28 = [tmp10.inputFlat, { paddingBottom: result }];
  items29 = [tmp76, ];
  const obj34 = { analyticsLocations, ref: tmp58.chatInputCharCounter };
  items29[1] = closure_37(tmp6(11816), obj34);
  items27[1] = closure_38(editable, obj33);
  let tmp68Result29 = null;
  if (editable) {
    const obj36 = { style: obj37, children: closure_37(tmp6Result11, obj38) };
    obj37 = { paddingBottom: result };
    obj38 = { ref: tmp58.chatInputRightActions, channel, keyboardType: tmp44, shouldShowGiftButton: result3, onPressAction: null, onPressExpression: null };
    tmp6Result11 = tmp6(11817);
    if (null == threadCreationCallback) {
      const tmpResult58 = tmp(4504);
      result3 = tmpResult58.isPremiumGiftingSupported();
    }
    ({ handlePressAction: obj64.onPressAction, handlePressExpression: obj64.onPressExpression } = memo1);
    tmp68Result29 = tmp68(tmp79, obj36);
  }
  items27[2] = tmp68Result29;
  items27[3] = tmp68Result17;
  items26[2] = closure_38(editable, obj29);
  items24[2] = closure_38(editable, obj26);
  if (tmp68Result30) {
    tmp68Result30 = "small" === mobileEmojiSuggestionsConfig.style;
  }
  if (tmp68Result30) {
    const obj39 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel, suppressed: tmp26, anchorTop: tmp18, onOccupiedHeightChange: callback1 };
    ({ chatInputEmojiSuggestions: obj66.ref, chatInput: obj66.chatInputRef, state: obj66.chatInputStateRef } = tmp58);
    tmp68Result30 = tmp68(tmp(11818).EmojiSuggestionBarSmall, obj39);
  }
  items24[3] = tmp68Result30;
  items21[11] = closure_37(tmp6Result10, obj25);
  let tmp68Result31 = null;
  if (null != refreshChatInputCoachmark) {
    const obj40 = { buttonRef: ref };
    const tmp6Result12 = tmp6(11343);
    const merged = Object.assign(refreshChatInputCoachmark);
    tmp68Result31 = tmp68(tmp6Result12, obj40);
  }
  items21[12] = tmp68Result31;
  items21[13] = closure_37(tmp6(11819), { buttonRef: ref, isVisible: isCoachmarkVisible, onDismiss: dismissCoachmark });
  const tmp74Result = closure_38(editable, obj13);
  let tmp68Result32 = tmp74Result;
  if (null == threadCreationCallback) {
    const obj41 = { channel, screenIndex, canSendMessages: editable, canCreateThreads, onJumpToPresent, isReadonly: !editable, children: tmp74Result };
    tmp68Result32 = tmp68(tmp6(11820), obj41);
  }
  return tmp68Result32;
});
forwardRefResult.displayName = "ChatInput";
const memoResult = react.memo(forwardRefResult);
let size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInput.tsx");

export default memoResult;
