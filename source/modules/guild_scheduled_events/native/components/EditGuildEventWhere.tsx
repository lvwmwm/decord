// Module ID: 8403
// Function ID: 66877
// Name: EditGuildEventWhere
// Dependencies: [57, 31, 1348, 3758, 6758, 1354, 653, 33, 4130, 1212, 8349, 566, 1456, 8404, 8371, 4126, 4543, 1820, 8345, 3843, 8369, 8436, 3712, 8437, 5459, 8438, 2]
// Exports: default

// Module 8403 (EditGuildEventWhere)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { isGuildScheduledEventActive as closure_8 } from "_isNativeReflectConstruct";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_9;
const require = arg1;
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: closure_9, GuildScheduledEventEntityTypes: closure_10 } = GUILD_EVENT_MAX_NAME_LENGTH);
({ Permissions: closure_11, GuildSettingsSections: closure_12 } = ME);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = _createForOfIteratorHelperLoose.createStyles({ channelSelection: { marginTop: 16 }, error: { paddingVertical: 8 }, text: { marginTop: 24 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx");

export default function EditGuildEventWhere(guild) {
  let guildEventId;
  let initialGuildEvent;
  guild = guild.guild;
  const guildEvent = guild.guildEvent;
  const onChange = guild.onChange;
  ({ guildEventId, initialGuildEvent } = guild);
  const tmp = callback4();
  const ref = React.useRef(null);
  let obj = guild(ref[11]);
  const items = [_isNativeReflectConstruct];
  const items1 = [guildEvent.channelId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(guildEvent.channelId), items1);
  let obj1 = guild(ref[11]);
  const items2 = [closure_7];
  const items3 = [guild];
  let stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_7.can(outer1_11.MANAGE_ROLES, guild), items3);
  const tmp5 = callback(React.useState(null), 2);
  const first = tmp5[0];
  callback = tmp5[1];
  let obj2 = guild(ref[12]);
  React = obj2.useNavigation();
  obj = { guild, channel: stateFromStores, guildEventId };
  guildEvent(ref[13]);
  let obj4 = guild(ref[10]);
  obj.channelType = obj4.getChannelTypeFromEntity(guildEvent.entityType);
  obj.onChangeChannel = function onChangeChannel(channelId) {
    callback(null);
    onChange({ channelId: channelId.id });
  };
  obj.style = tmp.channelSelection;
  if (guildEvent.entityType === constants.EXTERNAL) {
    obj = {};
    let obj6 = guild(ref[10]);
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
        if (null != outer1_3.current) {
          const current = outer1_3.current;
          current.scrollToEnd();
        }
      }, 100);
    };
    let tmp11Result = callback3(guild(ref[14]).GuildEventLocation, obj);
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
    obj2 = { style: tmp.error, variant: "text-sm/normal", color: "text-feedback-critical", children: first };
    tmp17 = callback3(guild(ref[15]).Text, obj2);
  }
  const items4 = [tmp17, ];
  const obj3 = {};
  let intl = guild(ref[9]).intl;
  obj3.text = intl.string(guild(ref[9]).t.PDTjLN);
  obj3.variant = "primary";
  obj3.onPress = function onPress() {
    const result = onChange(ref[17]).dismissGlobalKeyboard();
    callback(null);
    const entityType = guildEvent.entityType;
    if (entityType === outer1_10.NONE) {
      const _Error3 = Error;
      const intl3 = guild(ref[9]).intl;
      const error = new Error(intl3.string(guild(ref[9]).t.C4KzmQ));
      throw error;
    } else {
      if (entityType === outer1_10.EXTERNAL) {
        if (null == obj2.getLocationFromEventData(tmp3)) {
          const _Error2 = Error;
          const intl2 = guild(ref[9]).intl;
          const error1 = new Error(intl2.string(guild(ref[9]).t.q91szp));
          throw error1;
        }
        obj2 = guild(ref[10]);
      }
      if (null == tmp4) {
        if (entityType !== outer1_10.EXTERNAL) {
          const _Error = Error;
          const intl = guild(ref[9]).intl;
          const error2 = new Error(intl.string(guild(ref[9]).t["4LQwnw"]));
          throw error2;
        }
      }
      arr = arr.push(guild(ref[18]).EditGuildEventScreens.DETAILS);
    }
  };
  obj3.disabled = null != first;
  items4[1] = callback3(guild(ref[16]).Button, obj3);
  obj1.children = items4;
  const tmp15 = closure_15;
  const tmp16 = closure_14;
  const tmp7 = callback2(initialGuildEvent);
  obj4 = { action: closure_15(closure_14, obj1), ref };
  const tmp15Result = closure_15(closure_14, obj1);
  const tmp22 = closure_15;
  const obj5 = {};
  const tmp23 = guildEvent(ref[20]);
  let intl2 = guild(ref[9]).intl;
  obj5.title = intl2.string(guild(ref[9]).t["DC+Qm8"]);
  let intl3 = guild(ref[9]).intl;
  obj5.subtitle = intl3.string(guild(ref[9]).t.IwmXLP);
  const items5 = [callback3(guildEvent(ref[21]), obj5), , , , ];
  obj6 = {
    guild,
    entityType: guildEvent.entityType,
    onChange(entityType) {
      callback(null);
      const obj = { entityType, scheduledEndTime: undefined };
      if (entityType === outer1_10.EXTERNAL) {
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
  items5[1] = callback3(guild(ref[14]).GuildEventEntityTypeSelection, obj6);
  items5[2] = tmp11Result;
  let hasItem = set.has(guildEvent.entityType);
  if (hasItem) {
    hasItem = callback3(guildEvent(ref[23]), {});
  }
  items5[3] = hasItem;
  if (stateFromStores1) {
    const obj7 = { style: tmp.text, variant: "text-sm/normal", color: "text-default" };
    const intl4 = guild(ref[9]).intl;
    const obj8 = {
      onClick() {
          guildEvent(ref[25]).open(guild.id, outer1_12.ROLES);
        }
    };
    obj7.children = intl4.format(guild(ref[9]).t["K+DH2o"], obj8);
    stateFromStores1 = callback3(guild(ref[24]).TextWithIOSLinkWorkaround, obj7);
  }
  items5[4] = stateFromStores1;
  obj4.children = items5;
  return tmp22(tmp23, obj4);
};
