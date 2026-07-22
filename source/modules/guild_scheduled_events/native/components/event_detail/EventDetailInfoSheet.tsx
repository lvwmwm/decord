// Module ID: 12090
// Function ID: 93238
// Name: closeGuildEventInfoActionSheet
// Dependencies: []
// Exports: default

// Module 12090 (closeGuildEventInfoActionSheet)
function closeGuildEventInfoActionSheet() {
  importDefault(dependencyMap[14]).hideActionSheet(closure_11);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = arg1(dependencyMap[7]).AGE_VERIFICATION_STAGE_CHANNEL_TYPES;
let closure_11 = arg1(dependencyMap[8]).GUILD_EVENT_INFO_ACTION_SHEET_KEY;
const Fonts = arg1(dependencyMap[9]).Fonts;
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[10]));
let obj = arg1(dependencyMap[11]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[12]).space.PX_16 };
obj.eventContainer = obj;
obj.eventHeader = { paddingTop: 19 };
const obj1 = {};
const tmp2 = arg1(dependencyMap[10]);
const merged = Object.assign(importDefault(dependencyMap[13])(Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[12]).colors.MOBILE_TEXT_HEADING_PRIMARY, 20));
obj.eventTitle = obj1;
const importDefaultResult = importDefault(dependencyMap[13]);
obj.controlsContainer = { paddingTop: importDefault(dependencyMap[12]).space.PX_16 };
const obj2 = { paddingTop: importDefault(dependencyMap[12]).space.PX_16 };
obj.eventTitleContainer = { paddingTop: importDefault(dependencyMap[12]).space.PX_16, paddingBottom: importDefault(dependencyMap[12]).space.PX_8 };
const obj3 = { paddingTop: importDefault(dependencyMap[12]).space.PX_16, paddingBottom: importDefault(dependencyMap[12]).space.PX_8 };
obj.eventDescriptionContainer = { paddingTop: importDefault(dependencyMap[12]).space.PX_16, paddingBottom: importDefault(dependencyMap[12]).space.PX_4 };
const obj4 = { paddingTop: importDefault(dependencyMap[12]).space.PX_16, paddingBottom: importDefault(dependencyMap[12]).space.PX_4 };
const obj5 = {};
const merged1 = Object.assign(importDefault(dependencyMap[13])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[12]).colors.TEXT_SUBTLE, 14));
obj.guildTextStyle = obj5;
const importDefaultResult1 = importDefault(dependencyMap[13]);
obj.interestedContainer = { paddingTop: importDefault(dependencyMap[12]).space.PX_8, flexDirection: "row" };
const obj6 = { paddingTop: importDefault(dependencyMap[12]).space.PX_8, flexDirection: "row" };
obj.interestedIcon = { marginRight: importDefault(dependencyMap[12]).space.PX_8 };
obj.ageVerificationContainer = { marginTop: 16 };
let closure_15 = obj.createStyles(obj);
const obj7 = { marginRight: importDefault(dependencyMap[12]).space.PX_8 };
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailInfoSheet.tsx");

export default function EventDetailInfoSheet(guildEvent) {
  let onLayout;
  let recurrenceId;
  let safeBottomPadding;
  guildEvent = guildEvent.guildEvent;
  const arg1 = guildEvent;
  ({ onCloseActionSheet: closure_1, recurrenceId, onRecurrencePress: closure_2 } = guildEvent);
  ({ safeBottomPadding, onLayout } = guildEvent);
  const tmp = callback3();
  let obj = arg1(dependencyMap[15]);
  const items = [creatorMember];
  const React = obj.useStateFromStores(items, () => creatorMember.roleStyle);
  let obj1 = arg1(dependencyMap[15]);
  const items1 = [closure_8];
  const items2 = [guildEvent.channel_id];
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    let isConnectedResult = closure_8.isConnected();
    if (isConnectedResult) {
      isConnectedResult = closure_8.getChannelId() === guildEvent.channel_id;
    }
    return isConnectedResult;
  }, items2);
  let obj2 = arg1(dependencyMap[16]);
  const result = obj2.recurrenceRuleFromServer(guildEvent.recurrence_rule);
  const items3 = [, ];
  ({ guild_id: arr4[0], id: arr4[1] } = guildEvent);
  const effect = React.useEffect(() => {
    const guildEventUserCounts = callback(closure_2[17]).getGuildEventUserCounts(guildEvent.guild_id, guildEvent.id, []);
    const obj = callback(closure_2[17]);
    const guildEventsForCurrentUser = callback(closure_2[17]).getGuildEventsForCurrentUser(guildEvent.guild_id);
  }, items3);
  let obj3 = arg1(dependencyMap[15]);
  const items4 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items4, () => null != guild.getGuild(guildEvent.guild_id));
  let obj4 = arg1(dependencyMap[15]);
  const items5 = [closure_9, closure_6];
  const items6 = [guildEvent];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items5, () => {
    if (null != guildEvent.creator_id) {
      let obj = { creator: user.getUser(guildEvent.creator_id), creatorMember: member.getMember(guildEvent.guild_id, guildEvent.creator_id) };
    } else {
      obj = { "Null": "o", "Null": "o" };
    }
    return obj;
  }, items6);
  const creator = stateFromStoresObject.creator;
  const View = creator;
  const creatorMember = stateFromStoresObject.creatorMember;
  obj = { style: items7, onLayout };
  const items7 = [tmp.eventContainer, { paddingBottom: safeBottomPadding + 16 }];
  obj = { event: guildEvent, style: tmp.eventHeader, recurrenceId };
  const items8 = [callback(arg1(dependencyMap[19]).GuildEventCardHeader, obj), , , , , , , , , ];
  obj1 = { event: guildEvent, textStyle: tmp.eventTitle, style: tmp.eventTitleContainer };
  items8[1] = callback(arg1(dependencyMap[19]).GuildEventCardTitle, obj1);
  obj2 = { event: guildEvent, textStyle: tmp.guildTextStyle };
  items8[2] = callback(arg1(dependencyMap[19]).GuildEventCardSimpleGuildInfo, obj2);
  items8[3] = callback(arg1(dependencyMap[19]).GuildEventSimpleLocation, { event: guildEvent });
  obj3 = { style: tmp.interestedContainer };
  obj4 = { size: "sm", style: tmp.interestedIcon };
  const items9 = [callback(arg1(dependencyMap[20]).BellIcon, obj4), ];
  const obj5 = {};
  const intl = arg1(dependencyMap[22]).intl;
  obj5.children = intl.format(arg1(dependencyMap[22]).t.+DLsD8, { count: importDefault(dependencyMap[18])(guildEvent.guild_id, guildEvent.id, recurrenceId) });
  items9[1] = callback(arg1(dependencyMap[21]).Text, obj5);
  obj3.children = items9;
  items8[4] = callback2(View, obj3);
  let tmp10 = null != creator && stateFromStores1;
  if (tmp10) {
    const obj6 = { style: tmp.interestedContainer };
    const obj7 = { user: creator, guildId: guildEvent.guild_id, size: arg1(dependencyMap[23]).AvatarSizes.XSMALL_20, style: tmp.interestedIcon };
    const items10 = [callback(arg1(dependencyMap[23]).Avatar, obj7), ];
    const obj8 = {};
    const intl2 = arg1(dependencyMap[22]).intl;
    const obj9 = {
      usernameHook() {
          let obj = {};
          let tmp3 = "dot" === closure_3;
          if (tmp3) {
            let colorString;
            if (null != creatorMember) {
              colorString = creatorMember.colorString;
            }
            tmp3 = null != colorString;
          }
          if (tmp3) {
            obj = { size: "small" };
            ({ colorString: obj2.color, colorStrings: obj2.colors } = creatorMember);
            tmp3 = callback3(guildEvent(closure_2[23]).RoleDot, obj);
          }
          const items = [tmp3, ];
          obj = {};
          let tmp13;
          if (null != creatorMember) {
            if ("username" === closure_3) {
              if (null != creatorMember.colorString) {
                const obj1 = { color: creatorMember.colorString };
                tmp13 = obj1;
              }
            }
          }
          obj.style = tmp13;
          let nick;
          if (null != creatorMember) {
            nick = creatorMember.nick;
          }
          if (null == nick) {
            nick = callback(closure_2[24]).getName(creator);
            const obj5 = callback(closure_2[24]);
          }
          obj.children = nick;
          items[1] = callback3(guildEvent(closure_2[23]).LegacyText, obj);
          obj.children = items;
          return closure_13(closure_14, obj);
        }
    };
    obj8.children = intl2.format(arg1(dependencyMap[22]).t.66DLFs, obj9);
    items10[1] = callback(arg1(dependencyMap[21]).Text, obj8);
    obj6.children = items10;
    tmp10 = callback2(View, obj6);
  }
  items8[5] = tmp10;
  items8[6] = callback(arg1(dependencyMap[19]).GuildEventCardDescription, { event: guildEvent, style: tmp.eventDescriptionContainer });
  let hasItem = set.has(guildEvent.entity_type);
  if (hasItem) {
    const obj11 = { noBackground: true };
    const items11 = [arg1(dependencyMap[25]).DividerPosition.TOP, arg1(dependencyMap[25]).DividerPosition.BOTTOM];
    obj11.divider = items11;
    obj11.onConfirmPress = function onConfirmPress() {
      return callback(closure_2[14]).hideAllActionSheets();
    };
    obj11.channelId = guildEvent.channel_id;
    obj11.style = tmp.ageVerificationContainer;
    hasItem = callback(importDefault(dependencyMap[25]), obj11);
    const tmp20 = importDefault(dependencyMap[25]);
  }
  items8[7] = hasItem;
  const obj12 = { direction: "horizontal", style: tmp.controlsContainer };
  const items12 = [
    callback(arg1(dependencyMap[19]).GuildEventCardPrimaryAction, {
      event: guildEvent,
      onCloseAction() {
        callback4();
        if (null != callback) {
          callback();
        }
      },
      isConnected: stateFromStores,
      recurrenceId
    }),
  ,

  ];
  let tmp23 = null;
  if (stateFromStores1) {
    const obj14 = { event: guildEvent };
    tmp23 = callback(arg1(dependencyMap[19]).GuildEventShareAction, obj14);
  }
  items12[1] = tmp23;
  items12[2] = callback(arg1(dependencyMap[19]).GuildEventModeratorAction, { event: guildEvent, recurrenceId });
  obj12.children = items12;
  items8[8] = callback2(arg1(dependencyMap[26]).ButtonGroup, obj12);
  let tmp27 = null != result;
  if (tmp27) {
    const obj15 = {
      guildId: guildEvent.guild_id,
      recurrenceRule: result,
      guildEventId: guildEvent.id,
      onRecurrencePress(arg0) {
          return callback2(arg0);
        },
      activeRecurrenceId: recurrenceId
    };
    tmp27 = callback(importDefault(dependencyMap[27]), obj15);
  }
  items8[9] = tmp27;
  obj.children = items8;
  return callback2(View, obj);
};
export { closeGuildEventInfoActionSheet };
