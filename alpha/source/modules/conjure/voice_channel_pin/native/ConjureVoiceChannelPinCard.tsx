// Module ID: 12651
// Function ID: 12652
// Name: ConjureVoiceChannelPinCard
// Dependencies: [19, 17, 4885, 4956, 1383, 21, 5014, 575, 12652, 5624, 1113, 3868, 12477, 8603, 7060, 6975, 5652, 6983, 5258, 11200, 5634, 2]
// Exports: default

// Module 12651 (ConjureVoiceChannelPinCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11200 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 12477 */;
import useConjureVoiceChannelPin from "useConjureVoiceChannelPin" /* 12652 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
function ConjureVoiceChannelPinForm(projectId) {
  let TableRow;
  let c2;
  let channels;
  let failed;
  let guildId;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let obj4;
  let pin;
  let pinning;
  let skip;
  let tmp10Result;
  let tmp10Result4;
  channels = undefined;
  dependencyMap = undefined;
  projectId = projectId.projectId;
  let tmp2 = channels;
  const tmp = closure_10();
  let obj = channels(12652);
  const conjureVoiceChannelPinForm = obj.useConjureVoiceChannelPinForm(projectId);
  ({ guildId, channels } = conjureVoiceChannelPinForm);
  const selected = conjureVoiceChannelPinForm.selected;
  ({ setPicked: c2, pinning } = conjureVoiceChannelPinForm);
  let guild;
  ({ failed, pin, skip } = conjureVoiceChannelPinForm);
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  let channelIconWithGuild = null;
  if (null != selected) {
    const tmp2Result = tmp2(8603);
    channelIconWithGuild = tmp2Result.getChannelIconWithGuild(selected, guild);
  }
  let obj2 = { variant: "text-sm/normal", color: "text-default", children: intl.string(selected(3868)["1vVBAw"]) };
  const Text = tmp2(5624).Text;
  intl = tmp2(1113).intl;
  const items = [closure_7(Text, obj2), , , ];
  const tmp9 = closure_9;
  if (channels.length > 0) {
    let stringResult;
    let obj3 = { hasIcons: null != channelIconWithGuild, children: closure_7(TableRow, obj4) };
    const TableRowGroup = tmp2(7060).TableRowGroup;
    TableRow = tmp2(6975).TableRow;
    if (null == selected) {
      const intl3 = tmp2(1113).intl;
      stringResult = intl3.string(tmp11(3868)["9+dfPT"]);
    } else {
      const tmp2Result2 = tmp2(5652);
      stringResult = tmp2Result2.computeChannelName(selected, UserStore, RelationshipStore);
    }
    obj4 = {
      label: stringResult,
      icon: tmp10Result,
      arrow: true,
      disabled: pinning,
      onPress: function openPicker() {
          let intl;
          let obj2;
          let obj3;
          let tmp2;
          const obj = { content: metroImportDefault(tmp2, obj2), key: "conjure-voice-channel-pin", stackingBehavior: "stack" };
          const showActionSheet = ActionSheetActionCreators.showActionSheet;
          obj2 = {
            header: obj3,
            guild,
            channels,
            selectedChannel: selected,
            onSelect(id) {
              return closure_1_2(id.id);
            }
          };
          obj3 = { title: intl.string(_modDef3868.peOi1H) };
          ActionSheetActionCreators;
          tmp2 = ChannelPickerActionSheetDefault;
          intl = intl7.intl;
          showActionSheet(obj);
        }
    };
    tmp10Result = undefined;
    if (null != channelIconWithGuild) {
      const obj5 = { source: channelIconWithGuild };
      tmp10Result = tmp10(tmp2(6983).TableRowIcon, obj5);
    }
    tmp10Result4 = tmp10(TableRowGroup, obj3);
  } else {
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(selected(3868).JVUsIY) };
    const Text2 = tmp2(5624).Text;
    intl2 = tmp2(1113).intl;
    tmp10Result4 = tmp10(Text2, obj6);
  }
  items[1] = tmp10Result4;
  let tmp10Result5 = null;
  if (failed) {
    const obj7 = { variant: "text-sm/normal", color: "text-feedback-critical", children: intl4.string(selected(3868).d7EeAm) };
    const Text3 = tmp2(5624).Text;
    intl4 = tmp2(1113).intl;
    tmp10Result5 = tmp10(Text3, obj7);
  }
  items[2] = tmp10Result5;
  const obj8 = { style: tmp.actions, children: items1 };
  const obj9 = { variant: "secondary", size: "sm", text: intl5.string(selected(3868).Iw0l8o), disabled: pinning, onPress: skip };
  const Button = tmp2(5634).Button;
  intl5 = tmp2(1113).intl;
  items1 = [closure_7(Button, obj9), ];
  let tmp10Result6 = null;
  const tmp18 = guild;
  if (channels.length > 0) {
    const obj10 = { variant: "primary", size: "sm", text: intl6.string(selected(3868).FYI3qr), disabled: null == selected, loading: pinning, onPress: pin };
    const Button2 = tmp2(5634).Button;
    intl6 = tmp2(1113).intl;
    tmp10Result6 = tmp10(Button2, obj10);
  }
  const obj11 = { children: items };
  items1[1] = tmp10Result6;
  items[3] = closure_8(tmp18, obj8);
  return closure_8(tmp9, obj11);
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, actions: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", justifyContent: "flex-end", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/voice_channel_pin/native/ConjureVoiceChannelPinCard.tsx");

export default function ConjureVoiceChannelPinCard(projectId) {
  let intl;
  let items;
  let items1;
  let obj6;
  let outcome;
  let pinnedName;
  projectId = projectId.projectId;
  const tmp = closure_10();
  const obj = useConjureVoiceChannelPin;
  const conjureVoiceChannelPinOutcome = obj.useConjureVoiceChannelPinOutcome(projectId);
  ({ outcome, pinnedName } = conjureVoiceChannelPinOutcome);
  const obj2 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(_modDef3868.UGAfl9) };
  const Text = Text_Text.Text;
  intl = intl7.intl;
  const tmp7 = metroImportDefault(Text, obj2);
  const tmp8 = metroImportAll;
  const tmp9 = ConjureNativeCardSurfaceDefault;
  if (null != outcome) {
    let formatToPlainStringResult;
    const obj3 = { style: tmp.card, children: items };
    items = [tmp7, ];
    const Text2 = tmp2(5624).Text;
    if ("pinned" === outcome.status) {
      const intl3 = tmp2(1113).intl;
      const formatToPlainString = intl3.formatToPlainString;
      const gKe6Lw = tmp6(3868).gKe6Lw;
      if (pinnedName == null) {
        pinnedName = "";
      }
      const obj4 = { channelName: pinnedName };
      formatToPlainStringResult = formatToPlainString(gKe6Lw, obj4);
    } else {
      const intl2 = tmp2(1113).intl;
      formatToPlainStringResult = intl2.string(tmp6(3868)["+kpQ3v"]);
    }
    const obj5 = { variant: "text-sm/normal", color: "text-default", children: formatToPlainStringResult };
    items[1] = metroImportDefault(Text2, obj5);
    obj6 = obj3;
  } else {
    obj6 = { style: tmp.card, children: items1 };
    items1 = [tmp7, ];
    const obj7 = { projectId };
    items1[1] = metroImportDefault(ConjureVoiceChannelPinForm, obj7);
  }
  return tmp8(tmp9, obj6);
};
