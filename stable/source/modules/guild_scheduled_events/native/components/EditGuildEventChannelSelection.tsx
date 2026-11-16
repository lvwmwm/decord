// Module ID: 9135
// Function ID: 9136
// Name: EditGuildEventChannelSelection
// Dependencies: [19, 17, 5102, 5112, 1385, 6943, 1072, 21, 5170, 9131, 9117, 5808, 504, 8707, 9119, 9120, 1113, 5783, 7071, 2017, 9136, 9097, 5406, 9115, 2118, 1187, 9116, 2]
// Exports: default

// Module 9135 (EditGuildEventChannelSelection)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1113 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 2017 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import StageChannelUpsellDefault from "StageChannelUpsell" /* 9136 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import RelationshipStore from "RelationshipStore" /* 5112 */;
import UserStore from "UserStore" /* 1385 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6943 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let constants;

let c10;
let c9;
let closure_12;
let unpackModuleId;
const View = react_native.View;
({ ChannelTypes: c9, Permissions: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ container: { flexDirection: "column" }, channelTypeText: { flex: 1, marginBottom: 8 } });
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx");

export default function EditGuildEventChannelSelection(guild) {
  let Icon;
  let LocationIcon;
  let channel;
  let channelIcon;
  let channelType;
  let closure_9;
  let intl2;
  let items3;
  let items4;
  let obj9;
  let stringResult;
  let tmp11Result;
  let tmp12;
  guild = guild.guild;
  ({ channelType, channel } = guild);
  const guildEventId = guild.guildEventId;
  ({ recurrenceId: dependencyMap, onChangeChannel: View } = guild);
  constants = undefined;
  const style = guild.style;
  let tmp = closure_13();
  let tmp2 = channelType === constants.GUILD_STAGE_VOICE;
  let closure_5 = tmp2;
  let tmp3 = guild;
  let tmp4 = dependencyMap;
  let obj = guild(9131);
  let closure_6 = obj.useGetEventChannelsByType(guild.id, channelType);
  let obj2 = guild(9117);
  const length = obj2.useChannelsUserCanStartStageIn(guild);
  const tmp6 = channel(5808)(channel);
  let obj3 = guild(504);
  const items = [closure_5];
  let closure_8 = obj3.useStateFromStores(items, () => PermissionStore.can(constants.MANAGE_CHANNELS, guild));
  const items1 = [closure_8];
  const items2 = [guildEventId];
  const obj4 = guild(504);
  constants = obj4.useStateFromStores(items1, () => GuildScheduledEventStore.getGuildScheduledEvent(guildEventId), items2);
  if (null != channel) {
    const tmp3Result = tmp3(8707);
    channelIcon = tmp3Result.getChannelIcon(channel);
  } else {
    channelIcon = tmp5(9119);
  }
  if (null != channel) {
    const tmp3Result2 = tmp3(8707);
    LocationIcon = tmp3Result2.getChannelIconComponent(channel);
  } else {
    LocationIcon = tmp3(9120).LocationIcon;
  }
  let intl = tmp3(1113).intl;
  let string = intl.string;
  let t = tmp3(1113).t;
  if (tmp2) {
    stringResult = string(t.S7GjDz);
  } else {
    stringResult = string(t["7RYWCP"]);
  }
  const obj5 = { style: items3, children: items4 };
  items3 = [tmp.container, style];
  const tmp9 = closure_12;
  let tmp10 = View;
  items4 = [, ];
  const obj6 = { style: tmp.channelTypeText, variant: "body-sm/semibold", color: "text-subtle", children: stringResult };
  items4[0] = closure_11(tmp3(5783).Heading, obj6);
  const obj7 = {
    start: true,
    end: true,
    accessibilityLabel: stringResult,
    accessibilityHint: intl2.string(tmp3(1113).t.AaXbMD),
    accessibilityValue: { text: tmp12 },
    accessibilityRole: "button",
    onPress: function handleSelectChannel() {
      let id;
      let recurrenceId;
      let stringResult;
      const tmp = dependencyMap;
      let obj = KeyboardManagerUtilsAll;
      let result = obj.dismissGlobalKeyboard();
      let tmp4 = null;
      const mapped = closure_6.map((id) => {
        let obj2;
        const obj = { value: id.id, label: obj2.computeChannelName(id, length, closure_1_6, true) };
        obj2 = guild(recurrenceId[11]);
        return obj;
      });
      if (0 === length.length) {
        tmp4 = null;
        if (closure_8) {
          let obj2 = {
            guildId: guild.id,
            onCreate(channel) {
                  let tmp3;
                  const obj = { channel, guildEvent: tmp3, recurrenceId };
                  const openCreateOrEditGuildEventModal = guild(dependencyMap[21]).openCreateOrEditGuildEventModal;
                  guild(dependencyMap[21]);
                  const result = openCreateOrEditGuildEventModal(closure_1_0, obj);
                  tmp3 = closure_1_9;
                }
          };
          tmp4 = unpackModuleId(StageChannelUpsellDefault, obj2);
        }
      }
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const tmp10 = asyncRequire(9115, tmp.paths);
      const intl = intl3.intl;
      const string = intl.string;
      const t = intl3.t;
      if (closure_5) {
        stringResult = string(t.S7GjDz);
      } else {
        stringResult = string(t["7RYWCP"]);
      }
      const obj3 = {
        title: stringResult,
        items: mapped,
        body: tmp4,
        onItemSelect(arg0) {
          let closure_0 = arg0;
          const found = closure_1_6.find((id) => id.id === closure_0);
          if (null != found) {
            closure_1_4(found);
          }
          const obj = channel(dependencyMap[22]);
          obj.hideActionSheet();
        },
        selectedItem: id,
        hasIcons: false
      };
      id = undefined;
      if (channel != null) {
        id = channel.id;
      }
      openLazy(tmp10, "SelectUpdatesChannel", obj3);
    },
    icon: tmp11Result,
    label: closure_11(tmp3(5783).Text, { variant: "body-md/medium", color: "interactive-text-active", children: tmp6 }),
    trailing: closure_11(Icon, obj9),
    arrow: false
  };
  const TableRow = tmp3(7071).TableRow;
  intl2 = tmp3(1113).intl;
  tmp12 = tmp6;
  if (null != LocationIcon) {
    tmp11Result = tmp11(LocationIcon, {});
  } else {
    const obj8 = { source: channelIcon };
    tmp11Result = tmp11(tmp3(1187).Icon, obj8);
  }
  obj9 = { source: channel(9116) };
  Icon = tmp3(1187).Icon;
  items4[1] = closure_11(TableRow, obj7);
  return tmp9(tmp10, obj5);
};
