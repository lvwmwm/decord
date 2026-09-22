// Module ID: 9899
// Function ID: 9900
// Name: EventDetailInfoSheet
// Dependencies: [19, 17, 4749, 2105, 2064, 4780, 1372, 2048, 9790, 1085, 21, 4757, 576, 5743, 4724, 504, 9795, 9885, 9884, 9875, 9880, 4753, 1115, 1177, 4601, 8685, 5652, 9900, 2]
// Exports: closeGuildEventInfoActionSheet, default

// Module 9899 (EventDetailInfoSheet)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import UserUtilsDefault from "UserUtils" /* 4601 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import useGuildScheduledEventUserCountDefault from "useGuildScheduledEventUserCount" /* 9884 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9885 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import GuildStore from "GuildStore" /* 2064 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4780 */;
import UserStore from "UserStore" /* 1372 */;
import TextStyles_mod from "TextStyles" /* 5743 */;

require = fn;
const View = fn(17).View;
fn(2048).AGE_VERIFICATION_STAGE_CHANNEL_TYPES;
let closure_11 = fn(9790).GUILD_EVENT_INFO_ACTION_SHEET_KEY;
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { eventContainer: { paddingHorizontal: nativeDefault.space.PX_16 }, eventHeader: { paddingTop: 19 }, eventTitle: null, controlsContainer: null, eventTitleContainer: null, eventDescriptionContainer: null, guildTextStyle: null, interestedContainer: null, interestedIcon: null, ageVerificationContainer: null };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 20));
obj2.eventTitle = {};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = {};
obj2.controlsContainer = { paddingTop: nativeDefault.space.PX_16 };
let obj5 = { paddingTop: nativeDefault.space.PX_16 };
obj2.eventTitleContainer = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
let obj6 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
obj2.eventDescriptionContainer = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4 };
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 14));
obj2.guildTextStyle = {};
const obj7 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4 };
const obj8 = {};
obj2.interestedContainer = { paddingTop: nativeDefault.space.PX_8, flexDirection: "row" };
const obj9 = { paddingTop: nativeDefault.space.PX_8, flexDirection: "row" };
obj2.interestedIcon = { marginRight: nativeDefault.space.PX_8 };
obj2.ageVerificationContainer = { marginTop: 16 };
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailInfoSheet.tsx");

export default function EventDetailInfoSheet(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  ({ onCloseActionSheet: importDefault, recurrenceId, onRecurrencePress: dependencyMap } = guildEvent);
  let creatorMember;
  ({ safeBottomPadding, onLayout } = guildEvent);
  const tmp = closure_15();
  let items = [creatorMember];
  noop = guildEvent(504).useStateFromStores(items, () => creatorMember.roleStyle);
  let obj = guildEvent(504);
  const items1 = [RTCConnectionStore];
  const items2 = [guildEvent.channel_id];
  const stateFromStores = guildEvent(504).useStateFromStores(items1, () => {
    let isConnectedResult = RTCConnectionStore.isConnected();
    if (isConnectedResult) {
      isConnectedResult = RTCConnectionStore.getChannelId() === guildEvent.channel_id;
    }
    return isConnectedResult;
  }, items2);
  let obj2 = guildEvent(504);
  const result = guildEvent(9795).recurrenceRuleFromServer(guildEvent.recurrence_rule);
  const items3 = [, ];
  ({ guild_id: arr4[0], id: arr4[1] } = guildEvent);
  const effect = noop.useEffect(() => {
    const guildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts(guildEvent.guild_id, guildEvent.id, []);
    const guildEventsForCurrentUser = GuildScheduledEventManagerDefault.getGuildEventsForCurrentUser(guildEvent.guild_id);
  }, items3);
  let obj3 = guildEvent(9795);
  const tmp8 = useGuildScheduledEventUserCountDefault(guildEvent.guild_id, guildEvent.id, recurrenceId);
  const items4 = [GuildStore];
  const stateFromStores1 = guildEvent(504).useStateFromStores(items4, () => null != GuildStore.getGuild(guildEvent.guild_id));
  let obj4 = guildEvent(504);
  const items5 = [UserStore, GuildMemberStore];
  const items6 = [guildEvent];
  const stateFromStoresObject = guildEvent(504).useStateFromStoresObject(items5, () => {
    if (null != guildEvent.creator_id) {
      const obj2 = { creator: UserStore.getUser(tmp.creator_id), creatorMember: GuildMemberStore.getMember(tmp.guild_id, tmp.creator_id) };
      let obj = obj2;
    } else {
      obj = { creator: null, creatorMember: null };
    }
    return obj;
  }, items6);
  const creator = stateFromStoresObject.creator;
  creatorMember = stateFromStoresObject.creatorMember;
  const obj6 = { style: null, onLayout, children: null };
  const items7 = [tmp.eventContainer, { paddingBottom: safeBottomPadding + 16 }];
  obj6.style = items7;
  const items8 = [closure_12(guildEvent(9875).GuildEventCardHeader, { event: guildEvent, style: tmp.eventHeader, showUserCount: false, showEndDate: true, showCreator: false, recurrenceId }), closure_12(guildEvent(9875).GuildEventCardTitle, { event: guildEvent, textStyle: tmp.eventTitle, style: tmp.eventTitleContainer }), closure_12(guildEvent(9875).GuildEventCardSimpleGuildInfo, { event: guildEvent, textStyle: tmp.guildTextStyle }), closure_12(guildEvent(9875).GuildEventSimpleLocation, { event: guildEvent }), , , , , , ];
  const obj11 = { style: tmp.interestedContainer, children: null };
  const items9 = [closure_12(guildEvent(9880).BellIcon, { size: "sm", style: tmp.interestedIcon }), ];
  const obj13 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = guildEvent(1115).intl;
  obj13.children = intl.format(guildEvent(1115).t["+DLsD8"], { count: tmp8 });
  items9[1] = closure_12(guildEvent(4753).Text, obj13);
  obj11.children = items9;
  items8[4] = closure_13(creator, obj11);
  let tmp11Result = null != creator && stateFromStores1;
  if (tmp11Result) {
    const obj14 = { style: tmp.interestedContainer, children: null };
    const obj15 = { user: creator, guildId: guildEvent.guild_id, size: tmp2(1177).AvatarSizes.XSMALL_20, style: tmp.interestedIcon };
    const items10 = [tmp13(tmp2(1177).Avatar, obj15), ];
    const obj16 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = tmp2(1115).intl;
    const obj17 = {
      usernameHook() {
          let tmp4 = "dot" === closure_3;
          if (tmp4) {
            let colorString;
            if (creatorMember != null) {
              colorString = creatorMember.colorString;
            }
            tmp4 = null != colorString;
          }
          if (tmp4) {
            const obj = { size: "small", color: null, colors: null };
            ({ colorString: obj.color, colorStrings: obj.colors } = creatorMember);
            tmp4 = closure_2_12(native.RoleDot, obj);
          }
          const items = [tmp4, ];
          let tmp14;
          if (null != creatorMember) {
            if ("username" === closure_3) {
              if (null != tmp13.colorString) {
                const obj2 = { color: tmp13.colorString };
                tmp14 = obj2;
              }
            }
          }
          const obj3 = { style: tmp14, children: null };
          let nick;
          if (creatorMember != null) {
            nick = tmp13.nick;
          }
          if (nick == null) {
            nick = UserUtilsDefault.getName(creator);
          }
          const obj5 = { children: null };
          obj3.children = nick;
          items[1] = closure_2_12(native.LegacyText, obj3);
          obj5.children = items;
          return map1(closure_2_14, obj5);
        }
    };
    obj16.children = intl2.format(tmp2(1115).t["66DLFs"], obj17);
    items10[1] = tmp13(tmp2(4753).Text, obj16);
    obj14.children = items10;
    tmp11Result = tmp11(tmp12, obj14);
  }
  items8[5] = tmp11Result;
  items8[6] = closure_12(guildEvent(9875).GuildEventCardDescription, { event: guildEvent, style: tmp.eventDescriptionContainer });
  let hasItem = set.has(guildEvent.entity_type);
  if (hasItem) {
    const obj19 = { noBackground: true, divider: null, onConfirmPress: null, channelId: null, style: null };
    const items11 = [tmp2(8685).DividerPosition.TOP, tmp2(8685).DividerPosition.BOTTOM];
    obj19.divider = items11;
    obj19.onConfirmPress = function onConfirmPress() {
      return ActionSheetActionCreatorsDefault.hideAllActionSheets();
    };
    obj19.channelId = guildEvent.channel_id;
    obj19.style = tmp.ageVerificationContainer;
    hasItem = tmp13(tmp7(8685), obj19);
    const tmp7Result = tmp7(8685);
  }
  items8[7] = hasItem;
  const obj20 = { direction: "horizontal", style: tmp.controlsContainer, children: null };
  const items12 = [
    closure_12(guildEvent(9875).GuildEventCardPrimaryAction, {
      event: guildEvent,
      onCloseAction() {
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_11);
        if (closure_1_1 != null) {
          closure_1_1();
        }
      },
      isConnected: stateFromStores,
      recurrenceId
    }),
  ,

  ];
  let tmp13Result = null;
  if (stateFromStores1) {
    const obj22 = { event: guildEvent };
    tmp13Result = tmp13(tmp2(9875).GuildEventShareAction, obj22);
  }
  items12[1] = tmp13Result;
  items12[2] = closure_12(guildEvent(9875).GuildEventModeratorAction, { event: guildEvent, recurrenceId });
  obj20.children = items12;
  items8[8] = closure_13(guildEvent(5652).ButtonGroup, obj20);
  let tmp13Result2 = null != result;
  if (tmp13Result2) {
    const obj23 = {
      guildId: guildEvent.guild_id,
      recurrenceRule: result,
      guildEventId: guildEvent.id,
      onRecurrencePress(arg0) {
          return dependencyMap(arg0);
        },
      activeRecurrenceId: recurrenceId
    };
    tmp13Result2 = tmp13(tmp7(9900), obj23);
  }
  items8[9] = tmp13Result2;
  obj6.children = items8;
  return closure_13(creator, obj6);
};
export const closeGuildEventInfoActionSheet = function closeGuildEventInfoActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(closure_11);
};
