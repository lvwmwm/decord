// Module ID: 9892
// Function ID: 9893
// Name: EditGuildEventChannelSelection
// Dependencies: [19, 17, 4462, 4472, 1372, 7854, 1074, 21, 4827, 576, 6949, 9890, 9876, 4980, 504, 5325, 9878, 9879, 1115, 4823, 5425, 1875, 9893, 9862, 4794, 9619, 1980, 1177, 9875, 2]
// Exports: default

// Module 9892 (EditGuildEventChannelSelection)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1875 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import StageChannelUpsellDefault from "StageChannelUpsell" /* 9893 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4462 */;
import RelationshipStore from "RelationshipStore" /* 4472 */;
import UserStore from "UserStore" /* 1372 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7854 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ ChannelTypes: closure_9, Permissions: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { container: { flexDirection: "column" }, channelSelectorButton: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND }, channelIcon: { marginRight: 8 }, channelTypeText: { flex: 1, marginBottom: 8 }, channelNameText: { flex: 1 } };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx");

export default function EditGuildEventChannelSelection(guild) {
  guild = guild.guild;
  ({ channelType, channel } = guild);
  const guildEventId = guild.guildEventId;
  ({ recurrenceId: dependencyMap, onChangeChannel: View } = guild);
  let tmp = closure_13();
  const inputStyles = guild(6949).useInputStyles({ hasLeadingIcon: true });
  closure_5 = tmp5;
  let obj = guild(6949);
  closure_6 = guild(9890).useGetEventChannelsByType(guild.id, channelType);
  let obj2 = guild(9890);
  guild(9876).useChannelsUserCanStartStageIn(guild);
  const tmp7 = channel(4980)(channel);
  let obj3 = guild(9876);
  const items = [closure_5];
  closure_8 = guild(504).useStateFromStores(items, () => PermissionStore.can(constants2.MANAGE_CHANNELS, guild));
  let obj4 = guild(504);
  const items1 = [closure_8];
  const items2 = [guildEventId];
  constants = guild(504).useStateFromStores(items1, () => GuildScheduledEventStore.getGuildScheduledEvent(guildEventId), items2);
  if (null != channel) {
    let channelIcon = tmp2(5325).getChannelIcon(channel);
    const tmp2Result = tmp2(5325);
  } else {
    channelIcon = tmp6(9878);
  }
  if (null != channel) {
    let LocationIcon = tmp2(5325).getChannelIconComponent(channel);
    const tmp2Result2 = tmp2(5325);
  } else {
    LocationIcon = tmp2(9879).LocationIcon;
  }
  let intl = tmp2(1115).intl;
  let string = intl.string;
  let t = tmp2(1115).t;
  if (channelType === constants.GUILD_STAGE_VOICE) {
    let stringResult = string(t.S7GjDz);
  } else {
    stringResult = string(t["7RYWCP"]);
  }
  const obj6 = { style: null, children: null };
  const items3 = [tmp.container, guild.style];
  obj6.style = items3;
  const items4 = [closure_11(guild(4823).Heading, { style: tmp.channelTypeText, variant: "text-sm/semibold", color: "text-subtle", children: stringResult }), ];
  const obj8 = { accessibilityLabel: stringResult, accessibilityHint: null, accessibilityValue: null, accessibilityRole: "button", style: null, onPress: null, children: null };
  const intl2 = tmp2(1115).intl;
  obj8.accessibilityHint = intl2.string(guild(1115).t.AaXbMD);
  obj8.accessibilityValue = { text: tmp7 };
  const items5 = [, , ];
  ({ padding: arr6[0], radius: arr6[1] } = inputStyles);
  items5[2] = tmp.channelSelectorButton;
  obj8.style = items5;
  obj8.onPress = function onPress() {
    let result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    let tmp4 = null;
    const mapped = closure_6.map((id) => {
      const obj = { value: id.id, label: guild(recurrenceId[13]).computeChannelName(id, length, closure_1_6, true) };
      return obj;
    });
    if (0 === length.length) {
      tmp4 = null;
      if (closure_8) {
        let obj2 = {
          guildId: guild.id,
          onCreate(channel) {
                const obj2 = { channel, guildEvent, recurrenceId };
                const result = guild(9862).openCreateOrEditGuildEventModal(closure_1_0, obj2);
              }
        };
        tmp4 = closure_2_11(StageChannelUpsellDefault, obj2);
      }
    }
    const tmp = dependencyMap;
    const obj3 = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (closure_5) {
      let stringResult = string(t.S7GjDz);
    } else {
      stringResult = string(t["7RYWCP"]);
    }
    const obj4 = {
      title: stringResult,
      items: mapped,
      body: tmp4,
      onItemSelect(arg0) {
        closure_0 = arg0;
        const found = closure_1_6.find((id) => id.id === closure_0);
        if (null != found) {
          closure_1_4(found);
        }
        channel(4794).hideActionSheet();
      },
      selectedItem: null,
      hasIcons: false
    };
    let id;
    if (channel != null) {
      id = channel.id;
    }
    obj4.selectedItem = id;
    obj3.openLazy(asyncRequireImpl(9619, tmp.paths), "SelectUpdatesChannel", obj4);
  };
  if (null != LocationIcon) {
    const obj9 = { style: tmp.channelIcon };
    let tmp12Result = tmp12(LocationIcon, obj9);
  } else {
    const obj10 = { source: channelIcon, style: tmp.channelIcon };
    tmp12Result = tmp12(tmp2(1177).Icon, obj10);
  }
  const items6 = [tmp12Result, closure_11(guild(4823).Text, { style: tmp.channelNameText, variant: "text-md/medium", color: "interactive-text-active", children: tmp7 }), ];
  const obj11 = { style: tmp.channelNameText, variant: "text-md/medium", color: "interactive-text-active", children: tmp7 };
  const obj5 = guild(504);
  const obj7 = { style: tmp.channelTypeText, variant: "text-sm/semibold", color: "text-subtle", children: stringResult };
  const tmp11 = View;
  items6[2] = closure_11(guild(1177).Icon, { source: channel(9875) });
  obj8.children = items6;
  items4[1] = closure_12(guild(5425).PressableOpacity, obj8);
  obj6.children = items4;
  return closure_12(tmp11, obj6);
};
