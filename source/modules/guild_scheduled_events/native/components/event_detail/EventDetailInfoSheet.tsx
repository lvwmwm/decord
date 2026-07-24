// Module ID: 12231
// Function ID: 95629
// Name: closeGuildEventInfoActionSheet
// Dependencies: [31, 27, 4122, 1917, 1838, 4202, 1849, 1354, 8398, 482, 33, 4130, 689, 5052, 4098, 566, 8389, 8401, 8400, 8405, 10234, 4126, 1212, 1273, 3969, 7580, 4965, 8508, 2]
// Exports: default

// Module 12231 (closeGuildEventInfoActionSheet)
import result from "result";
import { View } from "GuildEventRecurrences";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { AGE_VERIFICATION_STAGE_CHANNEL_TYPES as closure_10 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { GUILD_EVENT_INFO_ACTION_SHEET_KEY as closure_11 } from "CREATE_GUILD_EVENT_MODAL_KEY";
import { Fonts } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let closure_12;
let closure_13;
let closure_14;
const require = arg1;
function closeGuildEventInfoActionSheet() {
  importDefault(4098).hideActionSheet(closure_11);
}
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.eventContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.eventHeader = { paddingTop: 19 };
const merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 20));
_createForOfIteratorHelperLoose.eventTitle = {};
let obj1 = {};
_createForOfIteratorHelperLoose.controlsContainer = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.eventTitleContainer = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj3 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.eventDescriptionContainer = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj4 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj5 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, 14));
_createForOfIteratorHelperLoose.guildTextStyle = obj5;
_createForOfIteratorHelperLoose.interestedContainer = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, flexDirection: "row" };
let obj6 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, flexDirection: "row" };
_createForOfIteratorHelperLoose.interestedIcon = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.ageVerificationContainer = { marginTop: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj7 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailInfoSheet.tsx");

export default function EventDetailInfoSheet(guildEvent) {
  let dependencyMap;
  let importDefault;
  let onLayout;
  let recurrenceId;
  let safeBottomPadding;
  guildEvent = guildEvent.guildEvent;
  ({ onCloseActionSheet: importDefault, recurrenceId, onRecurrencePress: dependencyMap } = guildEvent);
  ({ safeBottomPadding, onLayout } = guildEvent);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guildEvent(566);
  let items = [creatorMember];
  const React = obj.useStateFromStores(items, () => creatorMember.roleStyle);
  let obj1 = guildEvent(566);
  const items1 = [closure_8];
  const items2 = [guildEvent.channel_id];
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    let isConnectedResult = outer1_8.isConnected();
    if (isConnectedResult) {
      isConnectedResult = outer1_8.getChannelId() === guildEvent.channel_id;
    }
    return isConnectedResult;
  }, items2);
  let obj2 = guildEvent(8389);
  const result = obj2.recurrenceRuleFromServer(guildEvent.recurrence_rule);
  const items3 = [, ];
  ({ guild_id: arr4[0], id: arr4[1] } = guildEvent);
  const effect = React.useEffect(() => {
    const guildEventUserCounts = outer1_1(outer1_2[17]).getGuildEventUserCounts(guildEvent.guild_id, guildEvent.id, []);
    const obj = outer1_1(outer1_2[17]);
    const guildEventsForCurrentUser = outer1_1(outer1_2[17]).getGuildEventsForCurrentUser(guildEvent.guild_id);
  }, items3);
  let obj3 = guildEvent(566);
  const items4 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items4, () => null != outer1_7.getGuild(guildEvent.guild_id));
  let obj4 = guildEvent(566);
  const items5 = [closure_9, closure_6];
  const items6 = [guildEvent];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items5, () => {
    if (null != guildEvent.creator_id) {
      let obj = { creator: outer1_9.getUser(guildEvent.creator_id), creatorMember: outer1_6.getMember(guildEvent.guild_id, guildEvent.creator_id) };
    } else {
      obj = { creator: null, creatorMember: null };
    }
    return obj;
  }, items6);
  const creator = stateFromStoresObject.creator;
  creatorMember = stateFromStoresObject.creatorMember;
  obj = { style: items7, onLayout };
  items7 = [tmp.eventContainer, { paddingBottom: safeBottomPadding + 16 }];
  obj = { event: guildEvent, style: tmp.eventHeader, showUserCount: false, showEndDate: true, showCreator: false, recurrenceId };
  const items8 = [callback(guildEvent(8405).GuildEventCardHeader, obj), , , , , , , , , ];
  obj1 = { event: guildEvent, textStyle: tmp.eventTitle, style: tmp.eventTitleContainer };
  items8[1] = callback(guildEvent(8405).GuildEventCardTitle, obj1);
  obj2 = { event: guildEvent, textStyle: tmp.guildTextStyle };
  items8[2] = callback(guildEvent(8405).GuildEventCardSimpleGuildInfo, obj2);
  items8[3] = callback(guildEvent(8405).GuildEventSimpleLocation, { event: guildEvent });
  obj3 = { style: tmp.interestedContainer };
  obj4 = { size: "sm", style: tmp.interestedIcon };
  const items9 = [callback(guildEvent(10234).BellIcon, obj4), ];
  let obj5 = { variant: "text-sm/medium", color: "text-default" };
  const intl = guildEvent(1212).intl;
  obj5.children = intl.format(guildEvent(1212).t["+DLsD8"], { count: importDefault(8400)(guildEvent.guild_id, guildEvent.id, recurrenceId) });
  items9[1] = callback(guildEvent(4126).Text, obj5);
  obj3.children = items9;
  items8[4] = callback2(creator, obj3);
  let tmp10 = null != creator && stateFromStores1;
  if (tmp10) {
    const obj6 = { style: tmp.interestedContainer };
    const obj7 = { user: creator, guildId: guildEvent.guild_id, size: guildEvent(1273).AvatarSizes.XSMALL_20, style: tmp.interestedIcon };
    const items10 = [callback(guildEvent(1273).Avatar, obj7), ];
    const obj8 = { variant: "text-sm/medium", color: "text-default" };
    const intl2 = guildEvent(1212).intl;
    const obj9 = {
      usernameHook() {
          let obj = {};
          let tmp3 = "dot" === result;
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
            tmp3 = outer1_12(guildEvent(outer1_2[23]).RoleDot, obj);
          }
          const items = [tmp3, ];
          obj = {};
          let tmp13;
          if (null != creatorMember) {
            if ("username" === result) {
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
            nick = outer1_1(outer1_2[24]).getName(creator);
            const obj5 = outer1_1(outer1_2[24]);
          }
          obj.children = nick;
          items[1] = outer1_12(guildEvent(outer1_2[23]).LegacyText, obj);
          obj.children = items;
          return outer1_13(outer1_14, obj);
        }
    };
    obj8.children = intl2.format(guildEvent(1212).t["66DLFs"], obj9);
    items10[1] = callback(guildEvent(4126).Text, obj8);
    obj6.children = items10;
    tmp10 = callback2(creator, obj6);
  }
  items8[5] = tmp10;
  items8[6] = callback(guildEvent(8405).GuildEventCardDescription, { event: guildEvent, style: tmp.eventDescriptionContainer });
  let hasItem = set.has(guildEvent.entity_type);
  if (hasItem) {
    const obj11 = { noBackground: true };
    const items11 = [guildEvent(7580).DividerPosition.TOP, guildEvent(7580).DividerPosition.BOTTOM];
    obj11.divider = items11;
    obj11.onConfirmPress = function onConfirmPress() {
      return outer1_1(outer1_2[14]).hideAllActionSheets();
    };
    obj11.channelId = guildEvent.channel_id;
    obj11.style = tmp.ageVerificationContainer;
    hasItem = callback(importDefault(7580), obj11);
    const tmp20 = importDefault(7580);
  }
  items8[7] = hasItem;
  const obj12 = { direction: "horizontal", style: tmp.controlsContainer };
  const items12 = [
    callback(guildEvent(8405).GuildEventCardPrimaryAction, {
      event: guildEvent,
      onCloseAction() {
        outer1_16();
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
    tmp23 = callback(guildEvent(8405).GuildEventShareAction, obj14);
  }
  items12[1] = tmp23;
  items12[2] = callback(guildEvent(8405).GuildEventModeratorAction, { event: guildEvent, recurrenceId });
  obj12.children = items12;
  items8[8] = callback2(guildEvent(4965).ButtonGroup, obj12);
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
    tmp27 = callback(importDefault(8508), obj15);
  }
  items8[9] = tmp27;
  obj.children = items8;
  return callback2(creator, obj);
};
export { closeGuildEventInfoActionSheet };
