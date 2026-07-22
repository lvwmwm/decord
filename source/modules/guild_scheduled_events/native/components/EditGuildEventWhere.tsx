// Module ID: 8397
// Function ID: 66840
// Name: EditGuildEventWhere
// Dependencies: []
// Exports: default

// Module 8397 (EditGuildEventWhere)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).isGuildScheduledEventActive;
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: closure_9, GuildScheduledEventEntityTypes: closure_10 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ Permissions: closure_11, GuildSettingsSections: closure_12 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = arg1(dependencyMap[7]));
const tmp4 = arg1(dependencyMap[7]);
let closure_16 = arg1(dependencyMap[8]).createStyles({ channelSelection: { marginTop: 16 }, error: { paddingVertical: 8 }, text: { marginTop: 24 } });
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx");

export default function EditGuildEventWhere(guild) {
  let guildEventId;
  let initialGuildEvent;
  guild = guild.guild;
  const arg1 = guild;
  const guildEvent = guild.guildEvent;
  const importDefault = guildEvent;
  const importAll = guild.onChange;
  ({ guildEventId, initialGuildEvent } = guild);
  const tmp = callback4();
  const ref = React.useRef(null);
  const dependencyMap = ref;
  let obj = arg1(dependencyMap[11]);
  const items = [closure_6];
  const items1 = [guildEvent.channelId];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(guildEvent.channelId), items1);
  let obj1 = arg1(dependencyMap[11]);
  const items2 = [closure_7];
  const items3 = [guild];
  let stateFromStores1 = obj1.useStateFromStores(items2, () => closure_7.can(constants2.MANAGE_ROLES, guild), items3);
  const tmp5 = callback(React.useState(null), 2);
  const first = tmp5[0];
  const callback = tmp5[1];
  let obj2 = arg1(dependencyMap[12]);
  const React = obj2.useNavigation();
  obj = { guild, channel: stateFromStores, guildEventId };
  importDefault(dependencyMap[13]);
  let obj4 = arg1(dependencyMap[10]);
  obj.channelType = obj4.getChannelTypeFromEntity(guildEvent.entityType);
  obj.onChangeChannel = function onChangeChannel(channelId) {
    callback(null);
    onChange({ channelId: channelId.id });
  };
  obj.style = tmp.channelSelection;
  if (guildEvent.entityType === constants.EXTERNAL) {
    obj = {};
    let obj6 = arg1(dependencyMap[10]);
    const locationFromEventData = obj6.getLocationFromEventData(guildEvent);
    let str = "";
    if (null != locationFromEventData) {
      str = locationFromEventData;
    }
    obj.location = str;
    obj.onChange = function handleChangeEventLocation(location) {
      callback(null);
      onChange({ entityMetadata: { location } });
    };
    obj.onFocus = function onFocus() {
      const timerId = setTimeout(() => {
        if (null != ref.current) {
          const current = ref.current;
          current.scrollToEnd();
        }
      }, 100);
    };
    let tmp11Result = callback3(arg1(dependencyMap[14]).GuildEventLocation, obj);
    const tmp11 = callback3;
  } else {
    tmp11Result = tmp9;
    if (null == stateFromStores) {
      tmp11Result = null;
    }
  }
  obj1 = {};
  let tmp17 = null;
  if (null != first) {
    obj2 = { "Null": "md", "Null": "background-brand", alignItems: "white", style: tmp.error, children: first };
    tmp17 = callback3(arg1(dependencyMap[15]).Text, obj2);
  }
  const items4 = [tmp17, ];
  const obj3 = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj3.text = intl.string(arg1(dependencyMap[9]).t.PDTjLN);
  obj3.variant = "primary";
  obj3.onPress = function onPress() {
    const result = onChange(ref[17]).dismissGlobalKeyboard();
    callback(null);
    const entityType = guildEvent.entityType;
    if (entityType === constants.NONE) {
      const _Error3 = Error;
      const intl3 = guild(ref[9]).intl;
      const error = new Error(intl3.string(guild(ref[9]).t.C4KzmQ));
      throw error;
    } else {
      if (entityType === constants.EXTERNAL) {
        if (null == obj2.getLocationFromEventData(tmp3)) {
          const _Error2 = Error;
          const intl2 = guild(ref[9]).intl;
          const error1 = new Error(intl2.string(guild(ref[9]).t.q91szp));
          throw error1;
        }
        const obj2 = guild(ref[10]);
      }
      if (null == tmp4) {
        if (entityType !== constants.EXTERNAL) {
          const _Error = Error;
          const intl = guild(ref[9]).intl;
          const error2 = new Error(intl.string(guild(ref[9]).t.4LQwnw));
          throw error2;
        }
      }
      const arr = arr.push(guild(ref[18]).EditGuildEventScreens.DETAILS);
    }
  };
  obj3.disabled = null != first;
  items4[1] = callback3(arg1(dependencyMap[16]).Button, obj3);
  obj1.children = items4;
  const tmp15 = closure_15;
  const tmp16 = closure_14;
  const tmp7 = callback2(initialGuildEvent);
  obj4 = { action: closure_15(closure_14, obj1), ref };
  const tmp15Result = closure_15(closure_14, obj1);
  const tmp22 = closure_15;
  const obj5 = {};
  const tmp23 = importDefault(dependencyMap[20]);
  const intl2 = arg1(dependencyMap[9]).intl;
  obj5.title = intl2.string(arg1(dependencyMap[9]).t.DC+Qm8);
  const intl3 = arg1(dependencyMap[9]).intl;
  obj5.subtitle = intl3.string(arg1(dependencyMap[9]).t.IwmXLP);
  const items5 = [callback3(importDefault(dependencyMap[21]), obj5), , , , ];
  obj6 = {
    guild,
    entityType: guildEvent.entityType,
    onChange(entityType) {
      callback(null);
      const obj = { entityType, scheduledEndTime: undefined };
      if (entityType === constants.EXTERNAL) {
        let obj2 = guildEvent(ref[22])(guildEvent.scheduledStartTime);
        if (null == obj2) {
          obj2 = guildEvent(ref[22])();
        }
        obj.scheduledEndTime = obj2.add(1, "hour").toISOString();
        const addResult = obj2.add(1, "hour");
      }
      onChange(obj);
    },
    disabled: tmp7
  };
  items5[1] = callback3(arg1(dependencyMap[14]).GuildEventEntityTypeSelection, obj6);
  items5[2] = tmp11Result;
  let hasItem = set.has(guildEvent.entityType);
  if (hasItem) {
    hasItem = callback3(importDefault(dependencyMap[23]), {});
  }
  items5[3] = hasItem;
  if (stateFromStores1) {
    const obj7 = { "Null": 1, "Null": "tail", alignItems: null, style: tmp.text };
    const intl4 = arg1(dependencyMap[9]).intl;
    const obj8 = {
      onClick() {
          guildEvent(ref[25]).open(guild.id, constants3.ROLES);
        }
    };
    obj7.children = intl4.format(arg1(dependencyMap[9]).t.K+DH2o, obj8);
    stateFromStores1 = callback3(arg1(dependencyMap[24]).TextWithIOSLinkWorkaround, obj7);
  }
  items5[4] = stateFromStores1;
  obj4.children = items5;
  return tmp22(tmp23, obj4);
};
