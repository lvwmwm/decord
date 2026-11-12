// Module ID: 13535
// Function ID: 13536
// Name: ConjureVoiceChannelPinCard
// Dependencies: [19, 17, 5114, 5185, 1385, 21, 5243, 575, 13536, 5866, 1113, 4079, 13107, 7968, 7680, 7379, 5891, 7387, 5489, 11898, 5873, 2]
// Exports: default

// Module 13535 (ConjureVoiceChannelPinCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5489 */;
import Text_Text from "Text/Text" /* 5866 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11898 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 13107 */;
import useConjureVoiceChannelPin from "useConjureVoiceChannelPin" /* 13536 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5114 */;
import RelationshipStore from "RelationshipStore" /* 5185 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
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
  let obj = channels(13536);
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
    const tmp2Result = tmp2(7968);
    channelIconWithGuild = tmp2Result.getChannelIconWithGuild(selected, guild);
  }
  let obj2 = { variant: "body-sm/normal", color: "text-default", children: intl.string(selected(4079)["1vVBAw"]) };
  const Text = tmp2(5866).Text;
  intl = tmp2(1113).intl;
  const items = [closure_7(Text, obj2), , , ];
  const tmp9 = closure_9;
  if (channels.length > 0) {
    let stringResult;
    let obj3 = { hasIcons: null != channelIconWithGuild, children: closure_7(TableRow, obj4) };
    const TableRowGroup = tmp2(7680).TableRowGroup;
    TableRow = tmp2(7379).TableRow;
    if (null == selected) {
      const intl3 = tmp2(1113).intl;
      stringResult = intl3.string(tmp11(4079)["9+dfPT"]);
    } else {
      const tmp2Result2 = tmp2(5891);
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
          obj3 = { title: intl.string(_modDef4079.peOi1H) };
          ActionSheetActionCreators;
          tmp2 = ChannelPickerActionSheetDefault;
          intl = intl7.intl;
          showActionSheet(obj);
        }
    };
    tmp10Result = undefined;
    if (null != channelIconWithGuild) {
      const obj5 = { source: channelIconWithGuild };
      tmp10Result = tmp10(tmp2(7387).TableRowIcon, obj5);
    }
    tmp10Result4 = tmp10(TableRowGroup, obj3);
  } else {
    const obj6 = { variant: "body-sm/normal", color: "text-muted", children: intl2.string(selected(4079).JVUsIY) };
    const Text2 = tmp2(5866).Text;
    intl2 = tmp2(1113).intl;
    tmp10Result4 = tmp10(Text2, obj6);
  }
  items[1] = tmp10Result4;
  let tmp10Result5 = null;
  if (failed) {
    const obj7 = { variant: "body-sm/normal", color: "text-feedback-critical", children: intl4.string(selected(4079).d7EeAm) };
    const Text3 = tmp2(5866).Text;
    intl4 = tmp2(1113).intl;
    tmp10Result5 = tmp10(Text3, obj7);
  }
  items[2] = tmp10Result5;
  const obj8 = { style: tmp.actions, children: items1 };
  const obj9 = { variant: "secondary", size: "sm", text: intl5.string(selected(4079).Iw0l8o), disabled: pinning, onPress: skip };
  const Button = tmp2(5873).Button;
  intl5 = tmp2(1113).intl;
  items1 = [closure_7(Button, obj9), ];
  let tmp10Result6 = null;
  const tmp18 = guild;
  if (channels.length > 0) {
    const obj10 = { variant: "primary", size: "sm", text: intl6.string(selected(4079).FYI3qr), disabled: null == selected, loading: pinning, onPress: pin };
    const Button2 = tmp2(5873).Button;
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
  const obj2 = { variant: "body-xs/semibold", color: "text-muted", children: intl.string(_modDef4079.UGAfl9) };
  const Text = Text_Text.Text;
  intl = intl7.intl;
  const tmp7 = metroImportDefault(Text, obj2);
  const tmp8 = metroImportAll;
  const tmp9 = ConjureNativeCardSurfaceDefault;
  if (null != outcome) {
    let formatToPlainStringResult;
    const obj3 = { style: tmp.card, children: items };
    items = [tmp7, ];
    const Text2 = tmp2(5866).Text;
    if ("pinned" === outcome.status) {
      const intl3 = tmp2(1113).intl;
      const formatToPlainString = intl3.formatToPlainString;
      const gKe6Lw = tmp6(4079).gKe6Lw;
      if (pinnedName == null) {
        pinnedName = "";
      }
      const obj4 = { channelName: pinnedName };
      formatToPlainStringResult = formatToPlainString(gKe6Lw, obj4);
    } else {
      const intl2 = tmp2(1113).intl;
      formatToPlainStringResult = intl2.string(tmp6(4079)["+kpQ3v"]);
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
