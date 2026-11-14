// Module ID: 19425
// Function ID: 19426
// Name: CreateThreadView
// Dependencies: [5, 32, 19, 17, 8725, 8792, 1072, 21, 5306, 575, 11164, 9004, 7918, 7937, 1630, 5913, 10271, 8071, 19426, 7954, 1113, 19428, 5916, 14595, 14568, 14965, 12019, 1503, 1256, 6067, 5500, 1099, 11163, 19427, 5501, 2]

// Module 19425 (CreateThreadView)
import nativeDefault from "native" /* 575 */;
import DraftStore from "DraftStore" /* 8725 */;
import SlowmodeStore from "SlowmodeStore" /* 8792 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 9004 */;
import useCreateThreadViewPropsDefault from "useCreateThreadViewProps" /* 12019 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let closure_3, errors, guild_id, navigation, v1;

let StyleSheet;
let c10;
let closure_12;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let unpackModuleId;
function CreateThreadViewInner(threadSettingsDraft) {
  let TableSwitchRow;
  let first;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj13;
  let obj18;
  let obj19;
  let obj9;
  let str;
  let tmp2Result;
  let tmp8;
  threadSettingsDraft = threadSettingsDraft.threadSettingsDraft;
  const parentChannel = threadSettingsDraft.parentChannel;
  const screenIndex = threadSettingsDraft.screenIndex;
  const tmp = closure_15();
  const tmp3 = dependencyMap;
  let obj = threadSettingsDraft(11164);
  const privateThreadMode = obj.usePrivateThreadMode(parentChannel);
  let obj2 = react;
  const items = [parentChannel.id];
  const effect = react.useEffect(() => {
    let user;
    return () => {
      const obj = parentChannel(dependencyMap[11]);
      obj.clearDraft(user.id, DraftType.ThreadSettings);
      const obj2 = parentChannel(dependencyMap[11]);
      obj2.clearDraft(user.id, DraftType.FirstThreadMessage);
    };
  }, items);
  [first, tmp8] = react.useState(null);
  let closure_2 = tmp8;
  let closure_6;
  let obj3 = threadSettingsDraft(1503);
  navigation = obj3.useNavigation();
  let closure_4 = react.useRef(false);
  let closure_5 = tmp10;
  const items1 = [tmp10, navigation, , , ];
  ({ location: arr2[2], parentMessageId: arr2[3] } = threadSettingsDraft);
  items1[4] = parentChannel;
  const callback = react.useCallback((guild_id) => {
    if ("Message Shortcut" === threadSettingsDraft.location) {
      const obj4 = { channel_id: parentChannel.id, guild_id, original_message_id: tmp.parentMessageId, action: "thread" };
      guild_id = undefined;
      const track = parentChannel(dependencyMap[28]).track;
      const MESSAGE_SHORTCUT_ACTION_SENT = constants.MESSAGE_SHORTCUT_ACTION_SENT;
      parentChannel(dependencyMap[28]);
      if (parentChannel != null) {
        guild_id = tmp26.guild_id;
      }
      let guild_id1;
      const collectGuildAnalyticsMetadata = threadSettingsDraft(dependencyMap[29]).collectGuildAnalyticsMetadata;
      threadSettingsDraft(dependencyMap[29]);
      if (parentChannel != null) {
        guild_id1 = tmp26.guild_id;
      }
      const merged = Object.assign(collectGuildAnalyticsMetadata(guild_id1));
      const obj = threadSettingsDraft(dependencyMap[29]);
      const merged1 = Object.assign(obj.collectChannelAnalyticsMetadata(tmp26));
      track(MESSAGE_SHORTCUT_ACTION_SENT, obj4);
    }
    const tmp14 = navigation;
    if (null != navigation) {
      ({ guild_id: obj3.guildId, id: obj3.channelId } = guild_id);
      const navigate = tmp14.navigate;
      const obj6 = { guildId: null, channelId: null, showCreateThread: false, screenKey: threadSettingsDraft(dependencyMap[30]).CREATE_THREAD_SCREEN_KEY };
      navigate("channel", obj6, { merge: true });
    } else {
      const tmp15 = closure_5;
      if (tmp15) {
        const obj2 = threadSettingsDraft(dependencyMap[31]);
        obj2.transitionToGuild(guild_id.guild_id, guild_id.id);
      }
    }
  }, items1);
  let obj4 = { parentChannel, parentMessageId: threadSettingsDraft.parentMessageId, threadSettings: threadSettingsDraft, privateThreadMode, location: str, onThreadCreated: callback, useDefaultThreadName: true };
  str = threadSettingsDraft.location;
  const tmp13 = parentChannel(11163);
  if (str == null) {
    str = "(unknown)";
  }
  const tmp13Result = tmp13(obj4);
  closure_6 = tmp13Result;
  const useCallback = obj2.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, arg1) => {
    let ref;
    closure_0 = arg0;
    const parentMessageId = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              if (!ref.current) {
                ref.current = true;
                closure_2(null);
                c5 = 1;
                if (null == parentMessageId.parentMessageId) {
                  const obj8 = closure_0(closure_2_2[33]);
                  closure_2(obj8.makeEmptyTitleError());
                  const obj9 = closure_0(closure_2_2[34]);
                  obj9.dismissKeyboard();
                  ref.current = false;
                  c5 = 0;
                  c7 = 3;
                  return { value: "HermesInternal", done: null };
                }
                v1 = 2;
                c7 = 1;
                const obj10 = { value: v1(tmp68, tmp69), done: false };
                return obj10;
              }
            }
          } else {
            if (1 === v1) {
              c5 = 0;
              closure_0 = ref;
              const body = closure_0.body;
              let code;
              if (body != null) {
                code = body.code;
              }
              if (code === constants.AUTOMOD_TITLE_BLOCKED) {
                const obj5 = closure_0(closure_2_2[33]);
                closure_2(obj5.makeAutomodViolationError(closure_0.body, closure_0));
                const obj6 = closure_0(closure_2_2[34]);
                obj6.dismissKeyboard();
              } else {
                const body3 = closure_0.body;
                let code1;
                if (body3 != null) {
                  code1 = body3.code;
                }
                let tmp21 = code1 === constants.INVALID_FORM_BODY;
                if (tmp21) {
                  const body2 = closure_0.body;
                  let name;
                  if (body2 != null) {
                    errors = body2.errors;
                    if (errors != null) {
                      name = errors.name;
                    }
                  }
                  tmp21 = null != name;
                }
                if (tmp21) {
                  const obj3 = closure_0(closure_2_2[33]);
                  closure_2(obj3.makeApiNameRequiredError());
                  const obj4 = closure_0(closure_2_2[34]);
                  obj4.dismissKeyboard();
                }
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              const obj = parentChannel(closure_2_2[11]);
              obj.saveDraft(closure_0.id, "", FirstThreadMessage.FirstThreadMessage);
              c5 = 0;
            }
            ref.current = false;
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp59) {
          if (0 === c5) {
            c7 = 3;
            throw tmp59;
          } else {
            v1 = 1;
          }
        }
      }
    })();
  });
  const items2 = [tmp8, , , , ];
  ({ parentMessageId: arr3[1], name: arr3[2] } = threadSettingsDraft);
  items2[3] = tmp13Result;
  items2[4] = parentChannel;
  const callback1 = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
  const tmp12Result = parentChannel(7918);
  const analyticsLocations = tmp12Result(tmp12(7937).CREATE_THREAD).analyticsLocations;
  const tmp17 = parentChannel(1630)();
  const insets = tmp12(5913)({ isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true }).insets;
  const isForumLikeChannelResult = parentChannel.isForumLikeChannel();
  const ref = obj2.useRef(null);
  const ref1 = obj2.useRef(null);
  let tmp21 = null != threadSettingsDraft.parentMessageId;
  let obj5 = { value: analyticsLocations, children: items3 };
  const AnalyticsLocationProvider = tmp2(7918).AnalyticsLocationProvider;
  items3 = [closure_13(tmp12(10271), { absolute: true }), ];
  const tmp24 = closure_6;
  let obj6 = { style: items4, children: items5 };
  items4 = [tmp.container, { marginBottom: insets.bottom - tmp17.bottom }];
  const obj7 = { style: tmp.expander };
  items5 = [closure_13(closure_6, obj7), , , , ];
  let obj8 = { style: tmp.containerContent, children: tmp22(tmp24, obj9) };
  obj9 = { style: tmp.options, children: items7 };
  let obj10 = { style: tmp.optionsInner, children: items6 };
  const obj11 = { style: tmp.threadIconContainer, children: closure_13(tmp2(8071).ThreadIcon, { size: "lg" }) };
  items6 = [closure_13(closure_6, obj11), closure_13(tmp12(19426), { ref: ref1, chatInputRef: ref, threadSettingsDraft, threadNameError: first, optional: tmp21 }), ];
  let tmp23Result = null;
  const tmp25 = closure_7;
  if (!isForumLikeChannelResult) {
    tmp23Result = null;
    if (null == threadSettingsDraft.parentMessageId) {
      tmp23Result = null;
      if (privateThreadMode !== threadSettingsDraft(11164).PrivateThreadMode.Disabled) {
        const obj12 = { style: tmp.optionPrivateThread, children: closure_13(TableSwitchRow, obj13) };
        obj13 = {
          start: true,
          end: true,
          disabled: privateThreadMode !== threadSettingsDraft(11164).PrivateThreadMode.Enabled,
          label: intl.string(threadSettingsDraft(1113).t.F1zyvU),
          subLabel: intl2.string(threadSettingsDraft(1113).t.Wy5RIQ),
          value: tmp2Result.getIsPrivate(threadSettingsDraft, privateThreadMode),
          onValueChange(isPrivate) {
                  const parentChannelId = threadSettingsDraft.parentChannelId;
                  if (null != parentChannelId) {
                    const obj2 = { isPrivate };
                    const obj = DraftActionCreatorsDefault;
                    obj.changeThreadSettings(parentChannelId, obj2);
                  }
                }
        };
        TableSwitchRow = tmp2(7954).TableSwitchRow;
        intl = tmp2(1113).intl;
        intl2 = tmp2(1113).intl;
        tmp2Result = threadSettingsDraft(11164);
        tmp23Result = tmp23(tmp24, obj12);
      }
    }
  }
  items6[2] = tmp23Result;
  items7 = [tmp22(tmp24, obj10), ];
  let tmp22Result = null;
  if (null != threadSettingsDraft.parentMessageId) {
    const obj14 = { style: tmp.parentMessageContainer, children: items8 };
    const obj15 = { style: tmp.border };
    items8 = [tmp23(tmp24, obj15), ];
    const obj16 = { channelId: parentChannel.id, messageId: threadSettingsDraft.parentMessageId };
    items8[1] = closure_13(threadSettingsDraft(19428).ThreadCreationStarterMessage, obj16);
    tmp22Result = tmp22(tmp24, obj14);
  }
  items7[1] = tmp22Result;
  items5[1] = closure_13(tmp25, obj8);
  let tmp23Result2 = null;
  if (parentChannel.rateLimitPerUser > 0) {
    const obj17 = { children: closure_13(tmp24, obj18) };
    obj18 = { style: tmp.typingWrapper, children: closure_13(parentChannel(14595), obj19) };
    const LayerScope = tmp2(5916).LayerScope;
    obj19 = { channel: parentChannel, hasTypingText: false, slowmodeType: SlowmodeType.CreateThread };
    tmp23Result2 = tmp23(LayerScope, obj17);
  }
  items5[2] = tmp23Result2;
  const obj20 = { ref, channel: parentChannel, onJumpToPresent, screenIndex, secondaryTextFieldRef: ref1, threadCreationCallback: callback1 };
  items5[3] = closure_13(parentChannel(14568), obj20);
  const obj21 = { channelId: parentChannel.id };
  items5[4] = closure_13(parentChannel(14965), obj21);
  items3[1] = closure_14(tmp24, obj6);
  return closure_14(AnalyticsLocationProvider, obj5);
}
({ View: metroRequire, ScrollView: metroImportDefault, StyleSheet } = react_native);
const DraftType = DraftStore.DraftType;
const SlowmodeType = SlowmodeStore.SlowmodeType;
({ AbortCodes: c10, AnalyticEvents: unpackModuleId, NOOP: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerContent: { flexGrow: 0 }, expander: { flex: 1 }, border: obj3, options: { marginHorizontal: 12 }, optionsInner: obj4, optionPrivateThread: obj5, threadIconContainer: size, typingWrapper: obj6, parentMessageContainer: { marginBottom: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, alignSelf: "stretch", marginBottom: 16 };
obj4 = { paddingBottom: nativeDefault.space.PX_16 };
obj5 = { paddingTop: nativeDefault.space.PX_8 };
size = { width: nativeDefault.space.PX_64, height: nativeDefault.space.PX_64, marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xxl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
obj6 = { borderBottomWidth: StyleSheet.hairlineWidth, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, justifyContent: "flex-end", flexDirection: "row", borderColor: nativeDefault.colors.CHAT_BORDER };
let closure_15 = createStyles(obj);
const memoResult = react.memo(function CreateThreadView(arg0) {
  let channelId;
  let screenIndex;
  ({ channelId, screenIndex } = arg0);
  const tmp = useCreateThreadViewPropsDefault(channelId);
  let tmp2 = null;
  if (null != tmp) {
    const obj = { parentChannel: tmp.parentChannel, screenIndex, threadSettingsDraft: tmp.threadSettingsDraft };
    tmp2 = map1(CreateThreadViewInner, obj);
  }
  return tmp2;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/threads/native/components/thread_creation/CreateThreadView.tsx");

export const CreateThreadView = memoResult;
