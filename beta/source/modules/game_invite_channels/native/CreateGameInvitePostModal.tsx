// Module ID: 12184
// Function ID: 12185
// Name: CreateGameInvitePostModal
// Dependencies: [32, 19, 17, 2051, 21, 4837, 588, 558, 576, 6584, 504, 12183, 5939, 6399, 12185, 4848, 4801, 10815, 1987, 1127, 5436, 5940, 4833, 3654, 6507, 6691, 5997, 5916, 6621, 5282, 2]

// Module 12184 (CreateGameInvitePostModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import intl9 from "intl" /* 1127 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6584 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, parentChannelId, set;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function CreateGameInvitePostContent(parentChannel) {
  let Button;
  let canSubmit;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let joined;
  let obj10;
  let obj11;
  let obj15;
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
  const tmp = closure_10();
  let tmp2 = tags;
  let tmp3 = dependencyMap;
  const insets = tags(6399)({ includeKeyboardHeight: true }).insets;
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
  let obj = parentChannel(12185);
  let obj2 = {
    parentChannel,
    description: tmp5,
    appliedTagIds: memo,
    upload: NOOP_UPLOAD,
    onThreadCreated(channel) {
      const obj = parentChannel(onSave[15]);
      obj.transitionToThread(channel);
      const obj2 = parentChannel(onSave[11]);
      const result = obj2.closeCreateGameInvitePostModal();
    }
  };
  const createGameInvitePost = obj.useCreateGameInvitePost(obj2);
  noMicTag = createGameInvitePost.noMicTag;
  const items1 = [noMicTag];
  ({ voiceChatEnabled, voiceToggleDisabled, submitting, canSubmit, submit } = createGameInvitePost);
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
    const obj = { parentChannel, onSave, title: intl.string(intl9.t.HPu3kq), tags };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(10815, dependencyMap.paths);
    intl = intl9.intl;
    openLazy(tmp2, "ForumPostTagsActionSheet", obj);
  }, items2);
  const obj5 = {
    style: tmp.closeButton,
    accessibilityRole: "button",
    accessibilityLabel: intl.string(parentChannel(1127).t.cpT0Cq),
    onPress() {
      const obj = parentChannel(onSave[11]);
      return obj.closeCreateGameInvitePostModal();
    },
    children: closure_7(parentChannel(5940).XSmallIcon, {})
  };
  const PressableOpacity = parentChannel(5436).PressableOpacity;
  intl = parentChannel(1127).intl;
  items4 = [closure_7(PressableOpacity, obj5), ];
  const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(tmp2(3654).tOsHsu) };
  const Text = parentChannel(4833).Text;
  intl2 = parentChannel(1127).intl;
  items4[1] = closure_7(Text, obj6);
  items5 = [closure_8(View, obj4), , ];
  const obj7 = { style: tmp.body, children: items6 };
  const obj8 = { label: intl3.string(tmp2(3654)["/mEbGf"]), placeholder: intl4.string(tmp2(3654)["SU/IAE"]), value: tmp5, onChange: tmp6, maxLength: parentChannel(6691).GAME_INVITE_POST_MESSAGE_MAX_LENGTH, autoFocus: true };
  const TextArea = parentChannel(6507).TextArea;
  intl3 = parentChannel(1127).intl;
  intl4 = parentChannel(1127).intl;
  items6 = [closure_7(TextArea, obj8), ];
  let tmp15Result = availableTags.length > 0;
  const TableRowGroup = parentChannel(5997).TableRowGroup;
  if (tmp15Result) {
    const obj9 = { label: intl5.string(parentChannel(1127).t.KM6lRG), subLabel: joined, arrow: true, trailing: closure_7(View, obj10), onPress: callback1 };
    const TableRow = tmp9(5916).TableRow;
    intl5 = tmp9(1127).intl;
    joined = undefined;
    if (tags.length > 0) {
      const mapped = tags.map((name) => name.name);
      joined = mapped.join(", ");
    }
    obj10 = { style: tmp.tagsTrailing, children: closure_7(parentChannel(4833).Text, obj11) };
    obj11 = { variant: "text-md/medium", color: "text-muted", children: tags.length };
    tmp15Result = tmp15(TableRow, obj9);
  }
  const obj12 = { hasIcons: false, children: items7 };
  items7 = [tmp15Result, ];
  const obj13 = { label: intl6.string(tmp2(3654).Xd2NFi), subLabel: intl7.string(tmp2(3654).G91SYQ), value: voiceChatEnabled, onValueChange: callback, disabled: voiceToggleDisabled };
  const TableSwitchRow = tmp9(6621).TableSwitchRow;
  intl6 = tmp9(1127).intl;
  intl7 = tmp9(1127).intl;
  items7[1] = closure_7(TableSwitchRow, obj13);
  items6[1] = closure_8(TableRowGroup, obj12);
  items5[1] = closure_8(View, obj7);
  const obj14 = { style: items8, children: closure_7(Button, obj15) };
  items8 = [tmp.footer, { marginBottom: insets.bottom }];
  obj15 = { variant: "primary", size: "lg", grow: true, text: intl8.string(parentChannel(1127).t.CumH4u), loading: submitting, disabled: !canSubmit, onPress: submit };
  Button = tmp9(5282).Button;
  intl8 = tmp9(1127).intl;
  items5[2] = closure_7(View, obj14);
  return closure_8(View, obj3);
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
function NOOP_UPLOAD() {
  const error = new Error("Game invite posts do not support attachments");
  return reject(error);
}
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, closeButton: obj4, body: obj5, tagsTrailing: { flexDirection: "row", alignItems: "center", gap: 4 }, footer: obj6 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { height: 44, flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { position: "absolute", left: nativeDefault.space.PX_16 };
obj5 = { flex: 1, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj6 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, padding: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((parentChannelId) => {
  let first;
  let tmp6;
  let tmp7;
  let tmp8;
  let obj = parentChannelId(576);
  const cResult = obj.c(10);
  parentChannelId = parentChannelId.parentChannelId;
  const analyticsLocations = useAnalyticsLocationsDefault(parentChannelId.analyticsLocations).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== parentChannelId) {
    const fn = function o() {
      return ChannelStore.getChannel(parentChannelId);
    };
    const items1 = [parentChannelId];
    cResult[1] = parentChannelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = parentChannelId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      const obj = parentChannelId(dependencyMap[11]);
      const result = obj.closeCreateGameInvitePostModal();
      return true;
    };
    cResult[4] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
  }
  const tmpResult2 = parentChannelId(5939);
  tmpResult2.useNavigatorBackPressHandler(tmp8);
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = null;
    if (stateFromStores.isGameInvitesChannel()) {
      let tmp11;
      if (cResult[5] !== stateFromStores) {
        const obj2 = { parentChannel: stateFromStores };
        const tmp14 = closure_7(CreateGameInvitePostContent, obj2);
        cResult[5] = stateFromStores;
        cResult[6] = tmp14;
        tmp11 = tmp14;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] === analyticsLocations) {
        let tmp15;
        if (cResult[8] === tmp11) {
          tmp15 = cResult[9];
        }
        tmp10 = tmp15;
      }
      const obj3 = { value: analyticsLocations, children: tmp11 };
      const tmp17 = closure_7(parentChannelId(6584).AnalyticsLocationProvider, obj3);
      cResult[7] = analyticsLocations;
      cResult[8] = tmp11;
      cResult[9] = tmp17;
      tmp15 = tmp17;
    }
  }
  return tmp10;
}) : ((parentChannelId) => {
  let obj4;
  parentChannelId = parentChannelId.parentChannelId;
  const analyticsLocations = useAnalyticsLocationsDefault(parentChannelId.analyticsLocations).analyticsLocations;
  let obj = parentChannelId(504);
  const items = [ChannelStore];
  const items1 = [parentChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(parentChannelId), items1);
  const obj3 = parentChannelId(5939);
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
      const obj2 = { value: analyticsLocations, children: closure_7(CreateGameInvitePostContent, obj4) };
      obj4 = { parentChannel: stateFromStores };
      const AnalyticsLocationProvider = tmp2(6584).AnalyticsLocationProvider;
      tmp4 = closure_7(AnalyticsLocationProvider, obj2);
    }
  }
  return tmp4;
});
let result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModal.tsx");

export default tmp4;
