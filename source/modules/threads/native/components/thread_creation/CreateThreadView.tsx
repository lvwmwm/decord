// Module ID: 15185
// Function ID: 114526
// Name: CreateThreadViewInner
// Dependencies: []

// Module 15185 (CreateThreadViewInner)
function CreateThreadViewInner(screenIndex) {
  const threadSettingsDraft = screenIndex.threadSettingsDraft;
  const arg1 = threadSettingsDraft;
  const parentChannel = screenIndex.parentChannel;
  const importDefault = parentChannel;
  const tmp = callback4();
  let obj = arg1(dependencyMap[10]);
  const privateThreadMode = obj.usePrivateThreadMode(parentChannel);
  const items = [parentChannel.id];
  const effect = importAllResult.useEffect(() => () => {
    lib(closure_2[11]).clearDraft(lib.id, closure_8.ThreadSettings);
    const obj = lib(closure_2[11]);
    lib(closure_2[11]).clearDraft(lib.id, closure_8.FirstThreadMessage);
  }, items);
  const tmp4 = callback(importAllResult.useState(null), 2);
  obj = { parentChannel, threadSettingsDraft, privateThreadMode, setNameError: tmp4[1] };
  const tmp5 = function useSubmitForm(parentChannel) {
    parentChannel = parentChannel.parentChannel;
    let threadSettingsDraft = parentChannel;
    threadSettingsDraft = parentChannel.threadSettingsDraft;
    parentChannel = threadSettingsDraft;
    const setNameError = parentChannel.setNameError;
    let tmp4Result;
    let obj = threadSettingsDraft(setNameError[26]);
    const navigation = obj.useNavigation();
    let closure_4 = tmp2.useRef(false);
    const tmp2 = null == threadSettingsDraft.parentMessageId;
    const items = [tmp2, navigation, , , ];
    ({ location: arr[2], parentMessageId: arr[3] } = threadSettingsDraft);
    items[4] = parentChannel;
    const callback = tmp2.useCallback((guild_id) => {
      if ("Message Shortcut" === threadSettingsDraft.location) {
        let obj = { channel_id: parentChannel.id };
        guild_id = undefined;
        if (null != parentChannel) {
          guild_id = parentChannel.guild_id;
        }
        obj.guild_id = guild_id;
        obj.original_message_id = threadSettingsDraft.parentMessageId;
        obj.action = "thread";
        obj = parentChannel(setNameError[28]);
        let guild_id1;
        if (null != parentChannel) {
          guild_id1 = parentChannel.guild_id;
        }
        const merged = Object.assign(obj.collectGuildAnalyticsMetadata(guild_id1));
        let obj1 = parentChannel(setNameError[28]);
        const merged1 = Object.assign(obj1.collectChannelAnalyticsMetadata(parentChannel));
        threadSettingsDraft(setNameError[27]).track(constants.MESSAGE_SHORTCUT_ACTION_SENT, obj);
        const obj6 = threadSettingsDraft(setNameError[27]);
      }
      if (null != navigation) {
        obj = { "Bool(true)": true, "Bool(true)": true, "Bool(false)": true, "Bool(false)": true };
        obj1 = {};
        ({ guild_id: obj5.guildId, id: obj5.channelId } = guild_id);
        obj1.showCreateThread = false;
        obj.params = obj1;
        navigation.navigate(obj);
      } else if (tmp2) {
        parentChannel(setNameError[29]).transitionToGuild(guild_id.guild_id, guild_id.id);
        const obj3 = parentChannel(setNameError[29]);
      }
    }, items);
    obj = { parentChannel, parentMessageId: threadSettingsDraft.parentMessageId, threadSettings: threadSettingsDraft, privateThreadMode: parentChannel.privateThreadMode };
    const _location = threadSettingsDraft.location;
    let str = "(unknown)";
    if (null != _location) {
      str = _location;
    }
    obj.location = str;
    obj.onThreadCreated = callback;
    obj.useDefaultThreadName = true;
    tmp4Result = parentChannel(setNameError[30])(obj);
    const items1 = [setNameError, , , , ];
    ({ parentMessageId: arr2[1], name: arr2[2] } = threadSettingsDraft);
    items1[3] = tmp4Result;
    items1[4] = parentChannel;
    return tmp2.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = navigation(tmp);
      return function() {
        return callback(...arguments);
      };
    }(), items1);
  }(obj);
  const tmp6 = importDefault(dependencyMap[12]);
  const tmp7 = importDefault(dependencyMap[14])();
  const ref = importAllResult.useRef(null);
  const ref1 = importAllResult.useRef(null);
  obj = { value: tmp6(importDefault(dependencyMap[13]).CREATE_THREAD).analyticsLocations };
  const items1 = [callback2(importDefault(dependencyMap[16]), { absolute: true }), ];
  const obj1 = { style: items2 };
  const items2 = [tmp.container, { marginBottom: importDefault(dependencyMap[15])({ 0: null, 9223372036854775807: null }).insets.bottom - tmp7.bottom }];
  const items3 = [callback2(closure_6, { style: tmp.expander }), , , , ];
  const obj3 = { style: tmp.containerContent };
  const obj4 = { style: tmp.options };
  const obj5 = { style: tmp.optionsInner };
  const isForumLikeChannelResult = parentChannel.isForumLikeChannel();
  const obj2 = { style: tmp.expander };
  const tmp11 = null != threadSettingsDraft.parentMessageId;
  const tmp12 = callback3;
  const tmp13 = callback3;
  const tmp14 = closure_6;
  const items4 = [callback2(closure_6, { style: tmp.threadIconContainer, children: callback2(arg1(dependencyMap[17]).ThreadIcon, { size: "lg" }) }), callback2(importDefault(dependencyMap[18]), { ref: ref1, chatInputRef: ref, threadSettingsDraft, threadNameError: tmp4[0], optional: tmp11 }), ];
  let tmp21 = null;
  if (!isForumLikeChannelResult) {
    tmp21 = null;
    if (null == threadSettingsDraft.parentMessageId) {
      tmp21 = null;
      if (privateThreadMode !== arg1(dependencyMap[10]).PrivateThreadMode.Disabled) {
        const obj7 = { style: tmp.optionPrivateThread };
        const obj8 = { 0: null, 0: null, disabled: privateThreadMode !== arg1(dependencyMap[10]).PrivateThreadMode.Enabled };
        const intl = arg1(dependencyMap[20]).intl;
        obj8.label = intl.string(arg1(dependencyMap[20]).t.F1zyvU);
        const intl2 = arg1(dependencyMap[20]).intl;
        obj8.subLabel = intl2.string(arg1(dependencyMap[20]).t.Wy5RIQ);
        obj8.value = arg1(dependencyMap[10]).getIsPrivate(threadSettingsDraft, privateThreadMode);
        obj8.onValueChange = function onValueChange(isPrivate) {
          const parentChannelId = threadSettingsDraft.parentChannelId;
          if (null != parentChannelId) {
            let obj = parentChannel(closure_2[11]);
            obj = { isPrivate };
            obj.changeThreadSettings(parentChannelId, obj);
          }
        };
        obj7.children = callback2(arg1(dependencyMap[19]).TableSwitchRow, obj8);
        tmp21 = callback2(closure_6, obj7);
        const obj19 = arg1(dependencyMap[10]);
      }
    }
  }
  items4[2] = tmp21;
  obj5.children = items4;
  const items5 = [callback3(closure_6, obj5), ];
  let tmp24 = null;
  if (null != threadSettingsDraft.parentMessageId) {
    const obj9 = { style: tmp.parentMessageContainer };
    const obj10 = { style: tmp.border };
    const items6 = [callback2(closure_6, obj10), ];
    const obj11 = { channelId: parentChannel.id, messageId: threadSettingsDraft.parentMessageId };
    items6[1] = callback2(arg1(dependencyMap[21]).ThreadCreationStarterMessage, obj11);
    obj9.children = items6;
    tmp24 = callback3(closure_6, obj9);
  }
  items5[1] = tmp24;
  obj4.children = items5;
  obj3.children = callback3(closure_6, obj4);
  items3[1] = callback2(closure_7, obj3);
  let tmp32 = null;
  if (parentChannel.rateLimitPerUser > 0) {
    const obj12 = { style: tmp.typingWrapper };
    const obj13 = { channel: parentChannel, hasTypingText: false, slowmodeType: SlowmodeType.CreateThread };
    obj12.children = callback2(importDefault(dependencyMap[22]), obj13);
    tmp32 = callback2(closure_6, obj12);
  }
  items3[2] = tmp32;
  items3[3] = callback2(importDefault(dependencyMap[23]), { ref, channel: parentChannel, onJumpToPresent: closure_12, screenIndex: screenIndex.screenIndex, secondaryTextFieldRef: ref1, threadCreationCallback: tmp5 });
  items3[4] = callback2(importDefault(dependencyMap[24]), { channelId: parentChannel.id });
  obj1.children = items3;
  items1[1] = tmp13(tmp14, obj1);
  obj.children = items1;
  return tmp12(arg1(dependencyMap[12]).AnalyticsLocationProvider, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[3]);
({ View: closure_6, ScrollView: closure_7 } = tmp2);
const DraftType = arg1(dependencyMap[4]).DraftType;
const SlowmodeType = arg1(dependencyMap[5]).SlowmodeType;
({ AbortCodes: closure_10, AnalyticEvents: closure_11, NOOP: closure_12 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[7]));
let obj1 = arg1(dependencyMap[8]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
obj.containerContent = { flexGrow: 0 };
obj.expander = { flex: 1 };
obj1 = { backgroundColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE };
obj.border = obj1;
obj.options = { marginHorizontal: 12 };
const tmp4 = arg1(dependencyMap[7]);
obj.optionsInner = { paddingBottom: importDefault(dependencyMap[9]).space.PX_16 };
const obj2 = { paddingBottom: importDefault(dependencyMap[9]).space.PX_16 };
obj.optionPrivateThread = { paddingTop: importDefault(dependencyMap[9]).space.PX_8 };
const obj3 = { paddingTop: importDefault(dependencyMap[9]).space.PX_8 };
obj.threadIconContainer = { width: importDefault(dependencyMap[9]).space.PX_64, height: importDefault(dependencyMap[9]).space.PX_64, marginTop: importDefault(dependencyMap[9]).space.PX_16, marginBottom: importDefault(dependencyMap[9]).space.PX_16, borderRadius: importDefault(dependencyMap[9]).radii.xxl, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
const obj4 = { width: importDefault(dependencyMap[9]).space.PX_64, height: importDefault(dependencyMap[9]).space.PX_64, marginTop: importDefault(dependencyMap[9]).space.PX_16, marginBottom: importDefault(dependencyMap[9]).space.PX_16, borderRadius: importDefault(dependencyMap[9]).radii.xxl, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
obj.typingWrapper = { borderBottomWidth: tmp2.StyleSheet.hairlineWidth, paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16, paddingVertical: importDefault(dependencyMap[9]).space.PX_4, justifyContent: "flex-end", flexDirection: "row", borderColor: importDefault(dependencyMap[9]).colors.CHAT_BORDER };
obj.parentMessageContainer = { marginBottom: 16 };
let closure_15 = obj1.createStyles(obj);
const obj5 = { borderBottomWidth: tmp2.StyleSheet.hairlineWidth, paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16, paddingVertical: importDefault(dependencyMap[9]).space.PX_4, justifyContent: "flex-end", flexDirection: "row", borderColor: importDefault(dependencyMap[9]).colors.CHAT_BORDER };
const memoResult = importAllResult.memo((arg0) => {
  let channelId;
  let screenIndex;
  ({ channelId, screenIndex } = arg0);
  const tmp = importDefault(dependencyMap[25])(channelId);
  let tmp2 = null;
  if (null != tmp) {
    const obj = { parentChannel: tmp.parentChannel, screenIndex, threadSettingsDraft: tmp.threadSettingsDraft };
    tmp2 = callback2(CreateThreadViewInner, obj);
  }
  return tmp2;
});
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/threads/native/components/thread_creation/CreateThreadView.tsx");

export const CreateThreadView = memoResult;
