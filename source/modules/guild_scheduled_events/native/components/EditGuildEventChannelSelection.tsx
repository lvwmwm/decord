// Module ID: 8448
// Function ID: 67116
// Name: EditGuildEventChannelSelection
// Dependencies: [31, 27, 3758, 3767, 1849, 6758, 653, 33, 4130, 689, 5780, 8444, 8428, 4320, 566, 4593, 8430, 8431, 1212, 4126, 4660, 1820, 8449, 8409, 4098, 8426, 1934, 1273, 8427, 2]
// Exports: default

// Module 8448 (EditGuildEventChannelSelection)
import "result";
import { View } from "Button";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_9;
const require = arg1;
({ ChannelTypes: closure_9, Permissions: closure_10 } = ME);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flexDirection: "column" } };
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
_createForOfIteratorHelperLoose.channelSelectorButton = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.channelIcon = { marginRight: 8 };
_createForOfIteratorHelperLoose.channelTypeText = { flex: 1, marginBottom: 8 };
_createForOfIteratorHelperLoose.channelNameText = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx");

export default function EditGuildEventChannelSelection(guild) {
  let View;
  let channel;
  let channelType;
  let dependencyMap;
  guild = guild.guild;
  ({ channelType, channel } = guild);
  const guildEventId = guild.guildEventId;
  ({ recurrenceId: dependencyMap, onChangeChannel: View } = guild);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guild(5780);
  const inputStyles = obj.useInputStyles({ hasLeadingIcon: true });
  let _isNativeReflectConstruct = tmp3;
  let obj1 = guild(8444);
  let closure_6 = obj1.useGetEventChannelsByType(guild.id, channelType);
  let obj2 = guild(8428);
  let closure_7 = obj2.useChannelsUserCanStartStageIn(guild);
  const tmp4 = channel(4320)(channel);
  let obj3 = guild(566);
  const items = [_isNativeReflectConstruct];
  let closure_8 = obj3.useStateFromStores(items, () => tmp3.can(outer1_10.MANAGE_CHANNELS, guild));
  let obj4 = guild(566);
  const items1 = [closure_8];
  const items2 = [guildEventId];
  const constants = obj4.useStateFromStores(items1, () => guildScheduledEvent.getGuildScheduledEvent(guildEventId), items2);
  if (null != channel) {
    let obj5 = guild(4593);
    let channelIcon = obj5.getChannelIcon(channel);
  } else {
    channelIcon = channel(8430);
  }
  if (null != channel) {
    let obj6 = guild(4593);
    let LocationIcon = obj6.getChannelIconComponent(channel);
  } else {
    LocationIcon = guild(8431).LocationIcon;
  }
  let intl = guild(1212).intl;
  let string = intl.string;
  let t = guild(1212).t;
  if (channelType === constants.GUILD_STAGE_VOICE) {
    let stringResult = string(t.S7GjDz);
  } else {
    stringResult = string(t["7RYWCP"]);
  }
  obj = { style: items3 };
  items3 = [tmp.container, guild.style];
  obj = { style: tmp.channelTypeText, variant: "text-sm/semibold", color: "text-subtle", children: stringResult };
  const items4 = [callback(guild(4126).Text, obj), ];
  obj1 = { accessibilityLabel: stringResult };
  const intl2 = guild(1212).intl;
  obj1.accessibilityHint = intl2.string(guild(1212).t.AaXbMD);
  obj2 = {};
  let tmp17;
  if (null != tmp4) {
    tmp17 = tmp4;
  }
  obj2.text = tmp17;
  obj1.accessibilityValue = obj2;
  obj1.accessibilityRole = "button";
  const items5 = [, , ];
  ({ padding: arr6[0], radius: arr6[1] } = inputStyles);
  items5[2] = tmp.channelSelectorButton;
  obj1.style = items5;
  obj1.onPress = function onPress() {
    let obj = guildEventId(outer1_3[21]);
    let result = obj.dismissGlobalKeyboard();
    let tmp3 = null;
    const mapped = closure_6.map((id) => {
      const obj = { value: id.id, label: guild(outer2_3[13]).computeChannelName(id, closure_7, closure_6, true) };
      return obj;
    });
    if (0 === length.length) {
      tmp3 = null;
      if (closure_8) {
        obj = {
          guildId: guild.id,
          onCreate(channel) {
                let obj = guild(outer2_3[23]);
                obj = { channel };
                let tmp2;
                if (null != outer1_9) {
                  tmp2 = outer1_9;
                }
                obj.guildEvent = tmp2;
                obj.recurrenceId = outer1_3;
                const result = obj.openCreateOrEditGuildEventModal(outer1_0, obj);
              }
        };
        tmp3 = outer1_11(channel(outer1_3[22]), obj);
      }
    }
    obj = {};
    const obj3 = channel(outer1_3[24]);
    const intl = guild(outer1_3[18]).intl;
    const string = intl.string;
    const t = guild(outer1_3[18]).t;
    if (_isNativeReflectConstruct) {
      let stringResult = string(t.S7GjDz);
    } else {
      stringResult = string(t["7RYWCP"]);
    }
    obj.title = stringResult;
    obj.items = mapped;
    obj.body = tmp3;
    obj.onItemSelect = function onItemSelect(arg0) {
      let closure_0 = arg0;
      const found = outer1_6.find((id) => id.id === closure_0);
      if (null != found) {
        outer1_4(found);
      }
      channel(outer2_3[24]).hideActionSheet();
    };
    let id;
    if (null != channel) {
      id = channel.id;
    }
    let tmp13;
    if (null != id) {
      tmp13 = id;
    }
    obj.selectedItem = tmp13;
    obj.hasIcons = false;
    obj3.openLazy(guild(outer1_3[26])(outer1_3[25], outer1_3.paths), "SelectUpdatesChannel", obj);
  };
  if (null != LocationIcon) {
    obj3 = { style: tmp.channelIcon };
    let tmp21 = callback(LocationIcon, obj3);
  } else {
    obj4 = { source: channelIcon, style: tmp.channelIcon };
    tmp21 = callback(guild(1273).Icon, obj4);
  }
  const items6 = [tmp21, , ];
  obj5 = { style: tmp.channelNameText, variant: "text-md/medium", color: "interactive-text-active", children: tmp4 };
  items6[1] = callback(guild(4126).Text, obj5);
  obj6 = { source: channel(8427) };
  items6[2] = callback(guild(1273).Icon, obj6);
  obj1.children = items6;
  items4[1] = closure_12(guild(4660).PressableOpacity, obj1);
  obj.children = items4;
  return closure_12(View, obj);
};
