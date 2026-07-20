// Module ID: 8393
// Function ID: 66816
// Name: EditGuildEventChannelSelection
// Dependencies: []
// Exports: default

// Module 8393 (EditGuildEventChannelSelection)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ ChannelTypes: closure_9, Permissions: closure_10 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { container: { flexDirection: "column" } };
obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, backgroundColor: importDefault(dependencyMap[9]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
obj.channelSelectorButton = obj;
obj.channelIcon = { marginRight: 8 };
obj.channelTypeText = {};
obj.channelNameText = { flex: 1 };
let closure_13 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx");

export default function EditGuildEventChannelSelection(guild) {
  let channel;
  let channelType;
  guild = guild.guild;
  const arg1 = guild;
  ({ channelType, channel } = guild);
  const importDefault = channel;
  const guildEventId = guild.guildEventId;
  const importAll = guildEventId;
  ({ recurrenceId: closure_3, onChangeChannel: closure_4 } = guild);
  const tmp = callback2();
  let obj = arg1(dependencyMap[10]);
  const inputStyles = obj.useInputStyles({ hasLeadingIcon: true });
  let closure_5 = tmp3;
  let obj1 = arg1(dependencyMap[11]);
  let closure_6 = obj1.useGetEventChannelsByType(guild.id, channelType);
  let obj2 = arg1(dependencyMap[12]);
  let closure_7 = obj2.useChannelsUserCanStartStageIn(guild);
  const tmp4 = importDefault(dependencyMap[13])(channel);
  let obj3 = arg1(dependencyMap[14]);
  const items = [closure_5];
  let closure_8 = obj3.useStateFromStores(items, () => tmp3.can(constants.MANAGE_CHANNELS, guild));
  let obj4 = arg1(dependencyMap[14]);
  const items1 = [closure_8];
  const items2 = [guildEventId];
  const constants = obj4.useStateFromStores(items1, () => guildScheduledEvent.getGuildScheduledEvent(guildEventId), items2);
  if (null != channel) {
    let obj5 = arg1(dependencyMap[15]);
    let channelIcon = obj5.getChannelIcon(channel);
  } else {
    channelIcon = importDefault(dependencyMap[16]);
  }
  if (null != channel) {
    let obj6 = arg1(dependencyMap[15]);
    let LocationIcon = obj6.getChannelIconComponent(channel);
  } else {
    LocationIcon = arg1(dependencyMap[17]).LocationIcon;
  }
  const intl = arg1(dependencyMap[18]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[18]).t;
  if (channelType === constants.GUILD_STAGE_VOICE) {
    let stringResult = string(t.S7GjDz);
  } else {
    stringResult = string(t.7RYWCP);
  }
  obj = { style: items3 };
  const items3 = [tmp.container, guild.style];
  obj = { Promise: false, marginTop: false, flags: false, style: tmp.channelTypeText, children: stringResult };
  const items4 = [callback(arg1(dependencyMap[19]).Text, obj), ];
  obj1 = { accessibilityLabel: stringResult };
  const intl2 = arg1(dependencyMap[18]).intl;
  obj1.accessibilityHint = intl2.string(arg1(dependencyMap[18]).t.AaXbMD);
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
    let obj = guildEventId(paths[21]);
    const result = obj.dismissGlobalKeyboard();
    let tmp3 = null;
    const mapped = closure_6.map((id) => {
      const obj = { value: id.id, label: callback(closure_3[13]).computeChannelName(id, closure_7, closure_6, true) };
      return obj;
    });
    if (0 === length.length) {
      tmp3 = null;
      if (closure_8) {
        obj = {
          guildId: guild.id,
          onCreate(channel) {
                let obj = callback(closure_3[23]);
                obj = { channel };
                let tmp2;
                if (null != closure_9) {
                  tmp2 = closure_9;
                }
                obj.guildEvent = tmp2;
                obj.recurrenceId = closure_3;
                const result = obj.openCreateOrEditGuildEventModal(callback, obj);
              }
        };
        tmp3 = callback(channel(paths[22]), obj);
      }
    }
    obj = {};
    const obj3 = channel(paths[24]);
    const intl = guild(paths[18]).intl;
    const string = intl.string;
    const t = guild(paths[18]).t;
    if (tmp3) {
      let stringResult = string(t.S7GjDz);
    } else {
      stringResult = string(t.7RYWCP);
    }
    obj.title = stringResult;
    obj.items = mapped;
    obj.body = tmp3;
    obj.onItemSelect = function onItemSelect(arg0) {
      const found = closure_6.find((id) => id.id === id);
      if (null != found) {
        callback3(found);
      }
      callback2(closure_3[24]).hideActionSheet();
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
    obj3.openLazy(guild(paths[26])(paths[25], paths.paths), "SelectUpdatesChannel", obj);
  };
  if (null != LocationIcon) {
    obj3 = { style: tmp.channelIcon };
    let tmp21 = callback(LocationIcon, obj3);
  } else {
    obj4 = { source: channelIcon, style: tmp.channelIcon };
    tmp21 = callback(arg1(dependencyMap[27]).Icon, obj4);
  }
  const items6 = [tmp21, , ];
  obj5 = { style: tmp.channelNameText, children: tmp4 };
  items6[1] = callback(arg1(dependencyMap[19]).Text, obj5);
  obj6 = { source: importDefault(dependencyMap[28]) };
  items6[2] = callback(arg1(dependencyMap[27]).Icon, obj6);
  obj1.children = items6;
  items4[1] = closure_12(arg1(dependencyMap[20]).PressableOpacity, obj1);
  obj.children = items4;
  return closure_12(View, obj);
};
