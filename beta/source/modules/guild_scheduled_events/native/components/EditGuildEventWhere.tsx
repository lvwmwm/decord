// Module ID: 9005
// Function ID: 9006
// Name: EditGuildEventWhere
// Dependencies: [32, 19, 2045, 4469, 6946, 2051, 1074, 21, 4836, 1115, 8983, 504, 1485, 9006, 8988, 4832, 5281, 1876, 8982, 4541, 8986, 9046, 4421, 9047, 9048, 2]
// Exports: default

// Module 9005 (EditGuildEventWhere)
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1876 */;
import _modDef4421 from "module_4421" /* 4421 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6946 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 8982 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let closure_8 = GuildScheduledEventStore.isGuildScheduledEventActive;
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: c9, GuildScheduledEventEntityTypes: c10 } = GuildScheduledEventsConstants);
({ Permissions: unpackModuleId, GuildSettingsSections: closure_12 } = Constants);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
let closure_16 = createStyles.createStyles({ channelSelection: { marginTop: 16 }, error: { paddingVertical: 8 }, text: { marginTop: 24 } });
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx");

export default function EditGuildEventWhere(guild) {
  let _undefined;
  let c4;
  let closure_5;
  let guildEventId;
  let initialGuildEvent;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let obj14;
  let obj5;
  let tmp10Result;
  let tmp8;
  guild = guild.guild;
  const guildEvent = guild.guildEvent;
  const onChange = guild.onChange;
  _slicedToArray = undefined;
  react = undefined;
  ({ guildEventId, initialGuildEvent } = guild);
  let tmp = closure_16();
  const ref = react.useRef(null);
  let tmp3 = guild;
  let tmp4 = ref;
  let obj = guild(ref[11]);
  const items = [ChannelStore];
  const items1 = [guildEvent.channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(guildEvent.channelId), items1);
  let obj2 = guild(ref[11]);
  const items2 = [PermissionStore];
  const items3 = [guild];
  let stateFromStores1 = obj2.useStateFromStores(items2, () => PermissionStore.can(unpackModuleId.MANAGE_ROLES, guild), items3);
  const tmp7 = _slicedToArray(react.useState(null), 2);
  [tmp8, c4] = tmp7;
  const obj3 = guild(ref[12]);
  react = obj3.useNavigation();
  const tmp11 = guildEvent;
  const tmp9 = closure_8(initialGuildEvent);
  ({
    guild,
    channel: stateFromStores,
    guildEventId,
    channelType: obj5.getChannelTypeFromEntity(guildEvent.entityType),
    onChangeChannel(handleSelectChannel) {
      _undefined(null);
      const obj = { channelId: handleSelectChannel.id };
      onChange(obj);
    },
    style: tmp.channelSelection
  });
  const tmp12 = guildEvent(ref[13]);
  obj5 = guild(ref[10]);
  if (guildEvent.entityType === constants.EXTERNAL) {
    const GuildEventLocation = tmp3(tmp4[14]).GuildEventLocation;
    const tmp3Result = tmp3(tmp4[10]);
    let str = tmp3Result.getLocationFromEventData(guildEvent);
    if (str == null) {
      str = "";
    }
    const obj6 = {
      location: str,
      onChange: function handleChangeEventLocation(location) {
          let obj2;
          _undefined(null);
          const obj = { entityMetadata: obj2 };
          obj2 = { location };
          onChange(obj);
        },
      onFocus() {
          const timerId = setTimeout(() => {
            if (null != ref.current) {
              const current = ref.current;
              current.scrollToEnd();
            }
          }, 100);
        }
    };
    tmp10Result = tmp10(GuildEventLocation, obj6);
  } else {
    tmp10Result = tmp13;
    if (null == stateFromStores) {
      tmp10Result = null;
    }
  }
  let tmp10Result2 = null;
  const tmp16 = closure_14;
  if (null != tmp8) {
    const obj7 = { style: tmp.error, variant: "text-sm/normal", color: "text-feedback-critical", children: tmp8 };
    tmp10Result2 = tmp10(tmp3(tmp4[15]).Text, obj7);
  }
  const obj8 = { children: items4 };
  items4 = [tmp10Result2, ];
  const obj9 = {
    text: intl.string(tmp3(tmp4[9]).t.PDTjLN),
    variant: "primary",
    onPress() {
      function assertGuildEventWhereIsValid(guildEvent) {
        const entityType = guildEvent.entityType;
        if (entityType === constants.NONE) {
          const _Error3 = Error;
          const intl3 = guild(ref[9]).intl;
          const self5 = this;
          const self6 = this;
          const error = new Error(intl3.string(guild(ref[9]).t.C4KzmQ));
          throw error;
        } else {
          if (entityType === constants.EXTERNAL) {
            const obj = guild(ref[10]);
            if (null == obj.getLocationFromEventData(guildEvent)) {
              const _Error2 = Error;
              const intl2 = tmp3(tmp4[9]).intl;
              const self3 = this;
              const self4 = this;
              const error1 = new Error(intl2.string(tmp3(tmp4[9]).t.q91szp));
              throw error1;
            }
          }
          if (null == tmp) {
            if (entityType !== constants.EXTERNAL) {
              const _Error = Error;
              const intl = guild(ref[9]).intl;
              const self = this;
              const self2 = this;
              const error2 = new Error(intl.string(guild(ref[9]).t["4LQwnw"]));
              throw error2;
            }
          }
        }
      }
      const tmp = dependencyMap;
      let obj = KeyboardManagerUtilsAll;
      const result = obj.dismissGlobalKeyboard();
      try {
        const tmp3 = _undefined;
        const tmp4 = null;
        _undefined(null);
        assertGuildEventWhereIsValid(guildEvent);
        closure_5.push(EditGuildEventUtils.EditGuildEventScreens.DETAILS);
      } catch (tmp11) {
        _undefined(tmp11.message);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(tmp11.message);
      }
    },
    disabled: null != tmp8
  };
  const Button = tmp3(tmp4[16]).Button;
  intl = tmp3(tmp4[9]).intl;
  items4[1] = closure_13(Button, obj9);
  const obj10 = { action: closure_15(tmp16, obj8), ref, children: items5 };
  const obj11 = { title: intl2.string(tmp3(tmp4[9]).t["DC+Qm8"]), subtitle: intl3.string(tmp3(tmp4[9]).t.IwmXLP) };
  const tmp11Result = tmp11(tmp4[20]);
  const tmp11Result2 = tmp11(tmp4[21]);
  intl2 = tmp3(tmp4[9]).intl;
  intl3 = tmp3(tmp4[9]).intl;
  items5 = [closure_13(tmp11Result2, obj11), , , , ];
  const obj12 = {
    guild,
    entityType: guildEvent.entityType,
    onChange(entityType) {
      _undefined(null);
      const obj = { entityType, scheduledEndTime: "a" };
      if (entityType === constants.EXTERNAL) {
        let obj2 = _modDef4421(guildEvent.scheduledStartTime);
        const tmp2 = importDefault;
        if (obj2 == null) {
          obj2 = tmp2(4421)();
        }
        const addResult = obj2.add(1, "hour");
        obj.scheduledEndTime = addResult.toISOString();
      }
      onChange(obj);
    },
    disabled: tmp9
  };
  items5[1] = closure_13(tmp3(tmp4[14]).GuildEventEntityTypeSelection, obj12);
  items5[2] = tmp10Result;
  items5[3] = set.has(guildEvent.entityType) && closure_13(tmp11(tmp4[23]), {});
  set.has(guildEvent.entityType) && closure_13(tmp11(tmp4[23]), {});
  if (stateFromStores1) {
    const obj13 = { style: tmp.text, variant: "text-sm/normal", color: "text-default", children: intl4.format(tmp3(tmp4[9]).t["K+DH2o"], obj14) };
    const Text = tmp3(tmp4[15]).Text;
    intl4 = tmp3(tmp4[9]).intl;
    obj14 = {
      onClick() {
          const obj = GuildSettingsActionCreatorsDefault;
          obj.open(guild.id, constants2.ROLES);
        }
    };
    stateFromStores1 = tmp10(Text, obj13);
  }
  items5[4] = stateFromStores1;
  return closure_15(tmp11Result, obj10);
};
