// Module ID: 14330
// Function ID: 14331
// Name: CreateGameInvitePostModal
// Dependencies: [32, 19, 17, 4858, 7823, 21, 5009, 575, 7320, 504, 6998, 14329, 5602, 14331, 5751, 5253, 11120, 1995, 1114, 6974, 7048, 5619, 3801, 7247, 7447, 7054, 6969, 7363, 13699, 5629, 2]
// Exports: default

// Module 14330 (CreateGameInvitePostModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl10 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import SlowmodeStore from "SlowmodeStore" /* 7823 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap, set;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
function CreateGameInvitePostContent(parentChannel) {
  let canSubmit;
  let hasTagRequiredError;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isSlowmodeEnabled;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let joined;
  let obj10;
  let obj11;
  let obj17;
  let onSave;
  let submit;
  let submitting;
  let tmp5;
  let tmp6;
  let voiceChatEnabled;
  let voiceToggleDisabled;
  parentChannel = parentChannel.parentChannel;
  let tags;
  dependencyMap = undefined;
  let noMicTag;
  const tmp = closure_11();
  let tmp2 = tags;
  let tmp3 = dependencyMap;
  const insets = tags(5602)({ includeKeyboardHeight: true }).insets;
  let availableTags = parentChannel.availableTags;
  if (availableTags == null) {
    availableTags = [];
  }
  [tmp5, tmp6] = noMicTag(react.useState(""), 2);
  const tmp4 = noMicTag(react.useState(""), 2);
  const tmp7 = noMicTag(react.useState([]), 2);
  tags = tmp7[0];
  dependencyMap = tmp7[1];
  let items = [tags];
  const memo = react.useMemo(() => {
    set = new Set(first.map((id) => id.id));
    return set;
  }, items);
  let obj = parentChannel(14331);
  let obj2 = {
    parentChannel,
    description: tmp5,
    appliedTagIds: memo,
    upload: NOOP_UPLOAD,
    onThreadCreated(channel) {
      const obj = parentChannel(onSave[14]);
      obj.transitionToThread(channel);
      const obj2 = parentChannel(onSave[11]);
      const result = obj2.closeCreateGameInvitePostModal();
    }
  };
  const createGameInvitePost = obj.useCreateGameInvitePost(obj2);
  noMicTag = createGameInvitePost.noMicTag;
  const items1 = [noMicTag];
  ({ voiceChatEnabled, voiceToggleDisabled, hasTagRequiredError, isSlowmodeEnabled, submitting, canSubmit, submit } = createGameInvitePost);
  const items2 = [parentChannel, tags];
  const callback = react.useCallback((arg0) => {
    let closure_0 = arg0;
    if (null != noMicTag) {
      onSave((arr) => {
        let id;
        const found = arr.filter((id) => id.id !== id.id);
        let tmp3 = found;
        if (!closure_0) {
          const items = [];
          items[HermesBuiltin.arraySpread(items, found, 0)] = noMicTag;
          tmp3 = items;
        }
        return tmp3;
      });
    }
  }, items1);
  const obj3 = { style: items3, children: items5 };
  items3 = [tmp.container, { paddingTop: insets.top }];
  const obj4 = { style: tmp.header, children: items4 };
  const callback1 = react.useCallback(() => {
    let intl;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj = { parentChannel, onSave, title: intl.string(intl10.t.HPu3kq), tags };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(11120, dependencyMap.paths);
    intl = intl10.intl;
    openLazy(tmp2, "ForumPostTagsActionSheet", obj);
  }, items2);
  const obj5 = {
    style: tmp.closeButton,
    accessibilityRole: "button",
    accessibilityLabel: intl.string(parentChannel(1114).t.cpT0Cq),
    onPress() {
      const obj = parentChannel(onSave[11]);
      return obj.closeCreateGameInvitePostModal();
    },
    children: closure_8(parentChannel(7048).XSmallIcon, {})
  };
  const PressableOpacity = parentChannel(6974).PressableOpacity;
  intl = parentChannel(1114).intl;
  items4 = [closure_8(PressableOpacity, obj5), ];
  const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(tmp2(3801).tOsHsu) };
  const Text = parentChannel(5619).Text;
  intl2 = parentChannel(1114).intl;
  items4[1] = closure_8(Text, obj6);
  items5 = [closure_9(View, obj4), , ];
  const obj7 = { style: tmp.body, children: items6 };
  const obj8 = { label: intl3.string(tmp2(3801)["/mEbGf"]), placeholder: intl4.string(tmp2(3801)["SU/IAE"]), value: tmp5, onChange: tmp6, maxLength: parentChannel(7447).GAME_INVITE_POST_MESSAGE_MAX_LENGTH, autoFocus: true };
  const TextArea = parentChannel(7247).TextArea;
  intl3 = parentChannel(1114).intl;
  intl4 = parentChannel(1114).intl;
  items6 = [closure_8(TextArea, obj8), , ];
  let tmp15Result = availableTags.length > 0;
  const TableRowGroup = parentChannel(7054).TableRowGroup;
  if (tmp15Result) {
    const obj9 = { label: intl5.string(parentChannel(1114).t.KM6lRG), subLabel: joined, arrow: true, trailing: closure_8(View, obj10), onPress: callback1 };
    const TableRow = tmp9(6969).TableRow;
    intl5 = tmp9(1114).intl;
    joined = undefined;
    if (tags.length > 0) {
      const mapped = tags.map((name) => name.name);
      joined = mapped.join(", ");
    }
    obj10 = { style: tmp.tagsTrailing, children: closure_8(parentChannel(5619).Text, obj11) };
    obj11 = { variant: "text-md/medium", color: "text-muted", children: tags.length };
    tmp15Result = tmp15(TableRow, obj9);
  }
  const obj12 = { hasIcons: false, children: items7 };
  items7 = [tmp15Result, ];
  const obj13 = { label: intl6.string(tmp2(3801).Xd2NFi), subLabel: intl7.string(tmp2(3801).G91SYQ), value: voiceChatEnabled, onValueChange: callback, disabled: voiceToggleDisabled };
  const TableSwitchRow = tmp9(7363).TableSwitchRow;
  intl6 = tmp9(1114).intl;
  intl7 = tmp9(1114).intl;
  items7[1] = closure_8(TableSwitchRow, obj13);
  items6[1] = closure_9(TableRowGroup, obj12);
  let tmp15Result3 = null;
  if (hasTagRequiredError) {
    const obj14 = { variant: "text-sm/medium", color: "text-feedback-critical", children: intl8.string(parentChannel(1114).t.xPfNQi) };
    const Text2 = tmp9(5619).Text;
    intl8 = tmp9(1114).intl;
    tmp15Result3 = tmp15(Text2, obj14);
  }
  items6[2] = tmp15Result3;
  items5[1] = closure_9(View, obj7);
  const obj15 = { style: items8, children: items9 };
  items8 = [tmp.footer, { marginBottom: insets.bottom }];
  let tmp15Result4 = null;
  if (isSlowmodeEnabled) {
    const obj16 = { style: tmp.slowmodeRow, children: closure_8(tmp2(13699), obj17) };
    obj17 = { channel: parentChannel, hasTypingText: false, slowmodeType: SlowmodeType.CreateThread };
    tmp15Result4 = tmp15(tmp14, obj16);
  }
  items9 = [tmp15Result4, ];
  const obj18 = { variant: "primary", size: "lg", grow: true, text: intl9.string(parentChannel(1114).t.CumH4u), loading: submitting, disabled: !canSubmit, onPress: submit };
  const Button = tmp9(5629).Button;
  intl9 = tmp9(1114).intl;
  items9[1] = closure_8(Button, obj18);
  items5[2] = closure_9(View, obj15);
  return closure_9(View, obj3);
}
const View = react_native.View;
const SlowmodeType = SlowmodeStore.SlowmodeType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
function NOOP_UPLOAD() {
  const error = new Error("Game invite posts do not support attachments");
  return reject(error);
}
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, closeButton: obj4, body: obj5, tagsTrailing: { flexDirection: "row", alignItems: "center", gap: 4 }, footer: obj6, slowmodeRow: obj7 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { height: 44, flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { position: "absolute", left: nativeDefault.space.PX_16 };
obj5 = { flex: 1, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj6 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, padding: nativeDefault.space.PX_16 };
obj7 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModal.tsx");

export default function CreateGameInvitePostModal(parentChannelId) {
  let obj4;
  parentChannelId = parentChannelId.parentChannelId;
  const analyticsLocations = useAnalyticsLocationsDefault(parentChannelId.analyticsLocations).analyticsLocations;
  let obj = parentChannelId(504);
  const items = [ChannelStore];
  const items1 = [parentChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(parentChannelId), items1);
  const obj3 = parentChannelId(6998);
  obj3.useNavigatorBackPressHandler(() => {
    const obj = parentChannelId(dependencyMap[11]);
    const result = obj.closeCreateGameInvitePostModal();
    return true;
  });
  let tmp4 = null;
  const tmp2 = parentChannelId;
  if (null != stateFromStores) {
    tmp4 = null;
    if (stateFromStores.isGameInvitesChannel()) {
      const obj2 = { value: analyticsLocations, children: closure_8(CreateGameInvitePostContent, obj4) };
      obj4 = { parentChannel: stateFromStores };
      const AnalyticsLocationProvider = tmp2(7320).AnalyticsLocationProvider;
      tmp4 = closure_8(AnalyticsLocationProvider, obj2);
    }
  }
  return tmp4;
};
