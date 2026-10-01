// Module ID: 9006
// Function ID: 9007
// Name: EditGuildEventChannelSelection
// Dependencies: [19, 17, 4469, 4479, 1372, 6946, 1074, 21, 4836, 576, 6039, 9004, 8990, 4989, 504, 5335, 8992, 8993, 1115, 4832, 5435, 1876, 9007, 8976, 4800, 8729, 1981, 1177, 8989, 2]
// Exports: default

// Module 9006 (EditGuildEventChannelSelection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1876 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import StageChannelUpsellDefault from "StageChannelUpsell" /* 9007 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6946 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let constants;

let c10;
let c9;
let closure_12;
let obj2;
let unpackModuleId;
const View = react_native.View;
({ ChannelTypes: c9, Permissions: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { container: { flexDirection: "column" }, channelSelectorButton: obj2, channelIcon: { marginRight: 8 }, channelTypeText: { flex: 1, marginBottom: 8 }, channelNameText: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
let closure_13 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx");

export default function EditGuildEventChannelSelection(guild) {
  let LocationIcon;
  let channel;
  let channelIcon;
  let channelType;
  let closure_9;
  let intl2;
  let items3;
  let items4;
  let items5;
  let items6;
  let stringResult;
  let tmp12Result;
  let tmp13;
  guild = guild.guild;
  ({ channelType, channel } = guild);
  const guildEventId = guild.guildEventId;
  ({ recurrenceId: dependencyMap, onChangeChannel: View } = guild);
  const style = guild.style;
  let tmp = closure_13();
  let tmp2 = guild;
  let tmp3 = dependencyMap;
  let obj = guild(6039);
  const inputStyles = obj.useInputStyles({ hasLeadingIcon: true });
  let closure_5 = tmp5;
  let obj2 = guild(9004);
  let closure_6 = obj2.useGetEventChannelsByType(guild.id, channelType);
  let obj3 = guild(8990);
  const length = obj3.useChannelsUserCanStartStageIn(guild);
  const tmp7 = channel(4989)(channel);
  const items = [closure_5];
  const obj4 = guild(504);
  let closure_8 = obj4.useStateFromStores(items, () => PermissionStore.can(constants.MANAGE_CHANNELS, guild));
  const items1 = [closure_8];
  const items2 = [guildEventId];
  const obj5 = guild(504);
  constants = obj5.useStateFromStores(items1, () => GuildScheduledEventStore.getGuildScheduledEvent(guildEventId), items2);
  if (null != channel) {
    const tmp2Result = tmp2(5335);
    channelIcon = tmp2Result.getChannelIcon(channel);
  } else {
    channelIcon = tmp6(8992);
  }
  if (null != channel) {
    const tmp2Result2 = tmp2(5335);
    LocationIcon = tmp2Result2.getChannelIconComponent(channel);
  } else {
    LocationIcon = tmp2(8993).LocationIcon;
  }
  let intl = tmp2(1115).intl;
  let string = intl.string;
  let t = tmp2(1115).t;
  if (channelType === constants.GUILD_STAGE_VOICE) {
    stringResult = string(t.S7GjDz);
  } else {
    stringResult = string(t["7RYWCP"]);
  }
  let tmp10 = closure_12;
  const obj6 = { style: items3, children: items4 };
  items3 = [tmp.container, style];
  items4 = [, ];
  const obj7 = { style: tmp.channelTypeText, variant: "text-sm/semibold", color: "text-subtle", children: stringResult };
  items4[0] = closure_11(tmp2(4832).Heading, obj7);
  const obj8 = {
    accessibilityLabel: stringResult,
    accessibilityHint: intl2.string(tmp2(1115).t.AaXbMD),
    accessibilityValue: { text: tmp13 },
    accessibilityRole: "button",
    style: items5,
    onPress() {
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
        obj2 = guild(recurrenceId[13]);
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
                  const openCreateOrEditGuildEventModal = guild(dependencyMap[23]).openCreateOrEditGuildEventModal;
                  guild(dependencyMap[23]);
                  const result = openCreateOrEditGuildEventModal(closure_1_0, obj);
                  tmp3 = closure_1_9;
                }
          };
          tmp4 = unpackModuleId(StageChannelUpsellDefault, obj2);
        }
      }
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const tmp10 = asyncRequire(8729, tmp.paths);
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
          const obj = channel(dependencyMap[24]);
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
    children: items6
  };
  const PressableOpacity = tmp2(5435).PressableOpacity;
  intl2 = tmp2(1115).intl;
  items5 = [, , ];
  ({ padding: arr6[0], radius: arr6[1] } = inputStyles);
  items5[2] = tmp.channelSelectorButton;
  const tmp11 = View;
  tmp13 = tmp7;
  if (null != LocationIcon) {
    const obj9 = { style: tmp.channelIcon };
    tmp12Result = tmp12(LocationIcon, obj9);
  } else {
    const obj10 = { source: channelIcon, style: tmp.channelIcon };
    tmp12Result = tmp12(tmp2(1177).Icon, obj10);
  }
  items6 = [tmp12Result, , ];
  const obj11 = { style: tmp.channelNameText, variant: "text-md/medium", color: "interactive-text-active", children: tmp7 };
  items6[1] = closure_11(tmp2(4832).Text, obj11);
  const obj12 = { source: channel(8989) };
  const Icon = tmp2(1177).Icon;
  items6[2] = closure_11(Icon, obj12);
  items4[1] = tmp10(PressableOpacity, obj8);
  return tmp10(tmp11, obj6);
};
