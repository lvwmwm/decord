// Module ID: 15359
// Function ID: 117095
// Name: CreateThreadViewInner
// Dependencies: [5, 57, 31, 27, 4468, 6927, 653, 33, 4130, 689, 8022, 7018, 5462, 5482, 1557, 5160, 4662, 4631, 15360, 5502, 1212, 15362, 11402, 11128, 11701, 10427, 1457, 675, 4324, 1198, 9586, 15361, 3989, 2]

// Module 15359 (CreateThreadViewInner)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import importAllResult from "formSubmitError";
import get_ActivityIndicator from "expandLocation";
import { DraftType } from "_isNativeReflectConstruct";
import { SlowmodeType } from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_6;
let closure_7;
const require = arg1;
function CreateThreadViewInner(screenIndex) {
  let threadSettingsDraft = screenIndex.threadSettingsDraft;
  let parentChannel = screenIndex.parentChannel;
  const tmp = callback4();
  let obj = threadSettingsDraft(8022);
  const privateThreadMode = obj.usePrivateThreadMode(parentChannel);
  let items = [parentChannel.id];
  const effect = importAllResult.useEffect(() => () => {
    parentChannel(outer2_2[11]).clearDraft(outer1_1.id, outer2_8.ThreadSettings);
    const obj = parentChannel(outer2_2[11]);
    parentChannel(outer2_2[11]).clearDraft(outer1_1.id, outer2_8.FirstThreadMessage);
  }, items);
  const tmp4 = callback(importAllResult.useState(null), 2);
  obj = { parentChannel, threadSettingsDraft, privateThreadMode, setNameError: tmp4[1] };
  const tmp5 = (function useSubmitForm(parentChannel) {
    parentChannel = parentChannel.parentChannel;
    const threadSettingsDraft = parentChannel.threadSettingsDraft;
    const setNameError = parentChannel.setNameError;
    let c6;
    let obj = threadSettingsDraft(outer1_2[26]);
    const navigation = obj.useNavigation();
    let _slicedToArray = outer1_5.useRef(false);
    let closure_5 = tmp2;
    const items = [null == threadSettingsDraft.parentMessageId, navigation, , , ];
    ({ location: arr[2], parentMessageId: arr[3] } = threadSettingsDraft);
    items[4] = parentChannel;
    const callback = outer1_5.useCallback((guild_id) => {
      if ("Message Shortcut" === threadSettingsDraft.location) {
        let obj = { channel_id: parentChannel.id };
        guild_id = undefined;
        if (null != parentChannel) {
          guild_id = parentChannel.guild_id;
        }
        obj.guild_id = guild_id;
        obj.original_message_id = threadSettingsDraft.parentMessageId;
        obj.action = "thread";
        obj = threadSettingsDraft(outer2_2[28]);
        let guild_id1;
        if (null != parentChannel) {
          guild_id1 = parentChannel.guild_id;
        }
        const merged = Object.assign(obj.collectGuildAnalyticsMetadata(guild_id1));
        let obj1 = threadSettingsDraft(outer2_2[28]);
        const merged1 = Object.assign(obj1.collectChannelAnalyticsMetadata(parentChannel));
        parentChannel(outer2_2[27]).track(outer2_11.MESSAGE_SHORTCUT_ACTION_SENT, obj);
        const obj6 = parentChannel(outer2_2[27]);
      }
      if (null != navigation) {
        obj = { name: "channel", key: "new-thread", params: null, merge: true };
        obj1 = {};
        ({ guild_id: obj5.guildId, id: obj5.channelId } = guild_id);
        obj1.showCreateThread = false;
        obj.params = obj1;
        navigation.navigate(obj);
      } else if (closure_5) {
        threadSettingsDraft(outer2_2[29]).transitionToGuild(guild_id.guild_id, guild_id.id);
        const obj3 = threadSettingsDraft(outer2_2[29]);
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
    const tmp4Result = parentChannel(outer1_2[30])(obj);
    c6 = tmp4Result;
    const items1 = [setNameError, , , , ];
    ({ parentMessageId: arr2[1], name: arr2[2] } = threadSettingsDraft);
    items1[3] = tmp4Result;
    items1[4] = parentChannel;
    return outer1_5.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = outer2_3(tmp);
      return function() {
        return callback(...arguments);
      };
    })(), items1);
  })(obj);
  const tmp6 = parentChannel(5462);
  const tmp7 = parentChannel(1557)();
  const ref = importAllResult.useRef(null);
  const ref1 = importAllResult.useRef(null);
  obj = { value: tmp6(parentChannel(5482).CREATE_THREAD).analyticsLocations };
  let items1 = [callback2(parentChannel(4662), { absolute: true }), ];
  let obj1 = { style: items2 };
  items2 = [tmp.container, { marginBottom: parentChannel(5160)({ isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true }).insets.bottom - tmp7.bottom }];
  const items3 = [callback2(closure_6, { style: tmp.expander }), , , , ];
  let obj3 = { style: tmp.containerContent };
  const obj4 = { style: tmp.options };
  const obj5 = { style: tmp.optionsInner };
  const isForumLikeChannelResult = parentChannel.isForumLikeChannel();
  const obj2 = { style: tmp.expander };
  const tmp11 = null != threadSettingsDraft.parentMessageId;
  const tmp12 = callback3;
  const tmp13 = callback3;
  const tmp14 = closure_6;
  const items4 = [callback2(closure_6, { style: tmp.threadIconContainer, children: callback2(threadSettingsDraft(4631).ThreadIcon, { size: "lg" }) }), callback2(parentChannel(15360), { ref: ref1, chatInputRef: ref, threadSettingsDraft, threadNameError: tmp4[0], optional: tmp11 }), ];
  let tmp21 = null;
  if (!isForumLikeChannelResult) {
    tmp21 = null;
    if (null == threadSettingsDraft.parentMessageId) {
      tmp21 = null;
      if (privateThreadMode !== threadSettingsDraft(8022).PrivateThreadMode.Disabled) {
        const obj7 = { style: tmp.optionPrivateThread };
        const obj8 = { start: true, end: true, disabled: privateThreadMode !== threadSettingsDraft(8022).PrivateThreadMode.Enabled };
        const intl = threadSettingsDraft(1212).intl;
        obj8.label = intl.string(threadSettingsDraft(1212).t.F1zyvU);
        const intl2 = threadSettingsDraft(1212).intl;
        obj8.subLabel = intl2.string(threadSettingsDraft(1212).t.Wy5RIQ);
        obj8.value = threadSettingsDraft(8022).getIsPrivate(threadSettingsDraft, privateThreadMode);
        obj8.onValueChange = function onValueChange(isPrivate) {
          const parentChannelId = threadSettingsDraft.parentChannelId;
          if (null != parentChannelId) {
            let obj = parentChannel(outer1_2[11]);
            obj = { isPrivate };
            obj.changeThreadSettings(parentChannelId, obj);
          }
        };
        obj7.children = callback2(threadSettingsDraft(5502).TableSwitchRow, obj8);
        tmp21 = callback2(closure_6, obj7);
        const obj19 = threadSettingsDraft(8022);
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
    items6[1] = callback2(threadSettingsDraft(15362).ThreadCreationStarterMessage, obj11);
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
    obj12.children = callback2(parentChannel(11402), obj13);
    tmp32 = callback2(closure_6, obj12);
  }
  items3[2] = tmp32;
  items3[3] = callback2(parentChannel(11128), { ref, channel: parentChannel, onJumpToPresent: closure_12, screenIndex: screenIndex.screenIndex, secondaryTextFieldRef: ref1, threadCreationCallback: tmp5 });
  items3[4] = callback2(parentChannel(11701), { channelId: parentChannel.id });
  obj1.children = items3;
  items1[1] = tmp13(tmp14, obj1);
  obj.children = items1;
  return tmp12(threadSettingsDraft(5462).AnalyticsLocationProvider, obj);
}
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ AbortCodes: closure_10, AnalyticEvents: closure_11, NOOP: closure_12 } = ME);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
obj.containerContent = { flexGrow: 0 };
obj.expander = { flex: 1 };
_createForOfIteratorHelperLoose = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, alignSelf: "stretch", marginBottom: 16 };
obj.border = _createForOfIteratorHelperLoose;
obj.options = { marginHorizontal: 12 };
obj.optionsInner = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.optionPrivateThread = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj3 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.threadIconContainer = { width: require("_createForOfIteratorHelperLoose").space.PX_64, height: require("_createForOfIteratorHelperLoose").space.PX_64, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, borderRadius: require("_createForOfIteratorHelperLoose").radii.xxl, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
let obj4 = { width: require("_createForOfIteratorHelperLoose").space.PX_64, height: require("_createForOfIteratorHelperLoose").space.PX_64, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, borderRadius: require("_createForOfIteratorHelperLoose").radii.xxl, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
obj.typingWrapper = { borderBottomWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, justifyContent: "flex-end", flexDirection: "row", borderColor: require("_createForOfIteratorHelperLoose").colors.CHAT_BORDER };
obj.parentMessageContainer = { marginBottom: 16 };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj5 = { borderBottomWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, justifyContent: "flex-end", flexDirection: "row", borderColor: require("_createForOfIteratorHelperLoose").colors.CHAT_BORDER };
const memoResult = importAllResult.memo((arg0) => {
  let channelId;
  let screenIndex;
  ({ channelId, screenIndex } = arg0);
  const tmp = importDefault(10427)(channelId);
  let tmp2 = null;
  if (null != tmp) {
    const obj = { parentChannel: tmp.parentChannel, screenIndex, threadSettingsDraft: tmp.threadSettingsDraft };
    tmp2 = callback2(CreateThreadViewInner, obj);
  }
  return tmp2;
});
const result = require("result").fileFinishedImporting("modules/threads/native/components/thread_creation/CreateThreadView.tsx");

export const CreateThreadView = memoResult;
