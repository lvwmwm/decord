// Module ID: 18704
// Function ID: 18705
// Name: ConjureVoiceChannelPinCard
// Dependencies: [19, 17, 4914, 4985, 1387, 21, 5043, 575, 18705, 5634, 1112, 4245, 18519, 7096, 6140, 6144, 5659, 6155, 5257, 11763, 5641, 2]
// Exports: default

// Module 18704 (ConjureVoiceChannelPinCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5257 */;
import Text_Text from "Text/Text" /* 5634 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11763 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 18519 */;
import useConjureVoiceChannelPin from "useConjureVoiceChannelPin" /* 18705 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import UserStore from "UserStore" /* 1387 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
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
  let obj = channels(18705);
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
    const tmp2Result = tmp2(7096);
    channelIconWithGuild = tmp2Result.getChannelIconWithGuild(selected, guild);
  }
  let obj2 = { variant: "body-sm/normal", color: "text-default", children: intl.string(selected(4245)["1vVBAw"]) };
  const Text = tmp2(5634).Text;
  intl = tmp2(1112).intl;
  const items = [closure_7(Text, obj2), , , ];
  const tmp9 = closure_9;
  if (channels.length > 0) {
    let stringResult;
    let obj3 = { hasIcons: null != channelIconWithGuild, children: closure_7(TableRow, obj4) };
    const TableRowGroup = tmp2(6140).TableRowGroup;
    TableRow = tmp2(6144).TableRow;
    if (null == selected) {
      const intl3 = tmp2(1112).intl;
      stringResult = intl3.string(tmp11(4245)["9+dfPT"]);
    } else {
      const tmp2Result2 = tmp2(5659);
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
          obj3 = { title: intl.string(_modDef4245.peOi1H) };
          ActionSheetActionCreators;
          tmp2 = ChannelPickerActionSheetDefault;
          intl = intl7.intl;
          showActionSheet(obj);
        }
    };
    tmp10Result = undefined;
    if (null != channelIconWithGuild) {
      const obj5 = { source: channelIconWithGuild };
      tmp10Result = tmp10(tmp2(6155).TableRowIcon, obj5);
    }
    tmp10Result4 = tmp10(TableRowGroup, obj3);
  } else {
    const obj6 = { variant: "body-sm/normal", color: "text-muted", children: intl2.string(selected(4245).JVUsIY) };
    const Text2 = tmp2(5634).Text;
    intl2 = tmp2(1112).intl;
    tmp10Result4 = tmp10(Text2, obj6);
  }
  items[1] = tmp10Result4;
  let tmp10Result5 = null;
  if (failed) {
    const obj7 = { variant: "body-sm/normal", color: "text-feedback-critical", children: intl4.string(selected(4245).d7EeAm) };
    const Text3 = tmp2(5634).Text;
    intl4 = tmp2(1112).intl;
    tmp10Result5 = tmp10(Text3, obj7);
  }
  items[2] = tmp10Result5;
  const obj8 = { style: tmp.actions, children: items1 };
  const obj9 = { variant: "secondary", size: "sm", text: intl5.string(selected(4245).Iw0l8o), disabled: pinning, onPress: skip };
  const Button = tmp2(5641).Button;
  intl5 = tmp2(1112).intl;
  items1 = [closure_7(Button, obj9), ];
  let tmp10Result6 = null;
  const tmp18 = guild;
  if (channels.length > 0) {
    const obj10 = { variant: "primary", size: "sm", text: intl6.string(selected(4245).FYI3qr), disabled: null == selected, loading: pinning, onPress: pin };
    const Button2 = tmp2(5641).Button;
    intl6 = tmp2(1112).intl;
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
  const obj2 = { variant: "body-xs/semibold", color: "text-muted", children: intl.string(_modDef4245.UGAfl9) };
  const Text = Text_Text.Text;
  intl = intl7.intl;
  const tmp7 = metroImportDefault(Text, obj2);
  const tmp8 = metroImportAll;
  const tmp9 = ConjureNativeCardSurfaceDefault;
  if (null != outcome) {
    let formatToPlainStringResult;
    const obj3 = { style: tmp.card, children: items };
    items = [tmp7, ];
    const Text2 = tmp2(5634).Text;
    if ("pinned" === outcome.status) {
      const intl3 = tmp2(1112).intl;
      const formatToPlainString = intl3.formatToPlainString;
      const gKe6Lw = tmp6(4245).gKe6Lw;
      if (pinnedName == null) {
        pinnedName = "";
      }
      const obj4 = { channelName: pinnedName };
      formatToPlainStringResult = formatToPlainString(gKe6Lw, obj4);
    } else {
      const intl2 = tmp2(1112).intl;
      formatToPlainStringResult = intl2.string(tmp6(4245)["+kpQ3v"]);
    }
    const obj5 = { variant: "body-sm/normal", color: "text-default", children: formatToPlainStringResult };
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
