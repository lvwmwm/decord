// Module ID: 9197
// Function ID: 9198
// Name: EventDetailInfoSheet
// Dependencies: [19, 17, 5010, 4921, 4880, 5759, 1384, 4864, 8954, 1083, 21, 5009, 575, 6717, 5253, 504, 8959, 8957, 8956, 8972, 9189, 5619, 1114, 1188, 5063, 7946, 6761, 9077, 2]
// Exports: closeGuildEventInfoActionSheet, default

// Module 9197 (EventDetailInfoSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import native from "native" /* 1188 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 4864 */;
import UserUtilsDefault from "UserUtils" /* 5063 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import StageChannelAgeVerificationNoticeDefault from "StageChannelAgeVerificationNotice" /* 7946 */;
import GuildEventModalConstants from "GuildEventModalConstants" /* 8954 */;
import useGuildScheduledEventUserCountDefault from "useGuildScheduledEventUserCount" /* 8956 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 8957 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildStore from "GuildStore" /* 4880 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import TextStyles_mod from "TextStyles" /* 6717 */;
import size from "module_2" /* 2 */;

let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let react = react_mod;
const View = react_native.View;
const set = GuildScheduledEventsConstants.AGE_VERIFICATION_STAGE_CHANNEL_TYPES;
let closure_11 = GuildEventModalConstants.GUILD_EVENT_INFO_ACTION_SHEET_KEY;
const Fonts = Constants.Fonts;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { eventContainer: obj2, eventHeader: { paddingTop: 19 }, eventTitle: obj3, controlsContainer: obj4, eventTitleContainer: obj5, eventDescriptionContainer: obj6, guildTextStyle: obj7, interestedContainer: obj8, interestedIcon: obj9, ageVerificationContainer: { marginTop: 16 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 20));
obj4 = { paddingTop: nativeDefault.space.PX_16 };
obj5 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
obj6 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4 };
obj7 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 14));
obj8 = { paddingTop: nativeDefault.space.PX_8, flexDirection: "row" };
obj9 = { marginRight: nativeDefault.space.PX_8 };
let closure_15 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailInfoSheet.tsx");

export default function EventDetailInfoSheet(guildEvent) {
  let closure_3;
  let intl;
  let intl2;
  let items10;
  let items11;
  let items12;
  let items7;
  let items8;
  let items9;
  let obj17;
  let onLayout;
  let recurrenceId;
  let safeBottomPadding;
  guildEvent = guildEvent.guildEvent;
  ({ onCloseActionSheet: importDefault, recurrenceId, onRecurrencePress: dependencyMap } = guildEvent);
  let creatorMember;
  ({ safeBottomPadding, onLayout } = guildEvent);
  let tmp = closure_15();
  let tmp2 = guildEvent;
  let tmp3 = dependencyMap;
  let obj = guildEvent(504);
  let items = [creatorMember];
  react = obj.useStateFromStores(items, () => creatorMember.roleStyle);
  let obj2 = guildEvent(504);
  const items1 = [RTCConnectionStore];
  const items2 = [guildEvent.channel_id];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let isConnectedResult = RTCConnectionStore.isConnected();
    const obj = RTCConnectionStore;
    if (isConnectedResult) {
      isConnectedResult = obj.getChannelId() === guildEvent.channel_id;
    }
    return isConnectedResult;
  }, items2);
  let obj3 = guildEvent(8959);
  const result = obj3.recurrenceRuleFromServer(guildEvent.recurrence_rule);
  const items3 = [, ];
  ({ guild_id: arr4[0], id: arr4[1] } = guildEvent);
  const effect = react.useEffect(() => {
    const obj = GuildScheduledEventManagerDefault;
    const guildEventUserCounts = obj.getGuildEventUserCounts(guildEvent.guild_id, guildEvent.id, []);
    const obj2 = GuildScheduledEventManagerDefault;
    const guildEventsForCurrentUser = obj2.getGuildEventsForCurrentUser(guildEvent.guild_id);
  }, items3);
  const tmp8 = useGuildScheduledEventUserCountDefault(guildEvent.guild_id, guildEvent.id, recurrenceId);
  let obj4 = guildEvent(504);
  const items4 = [GuildStore];
  const stateFromStores1 = obj4.useStateFromStores(items4, () => null != GuildStore.getGuild(guildEvent.guild_id));
  let obj5 = guildEvent(504);
  const items5 = [UserStore, GuildMemberStore];
  const items6 = [guildEvent];
  const stateFromStoresObject = obj5.useStateFromStoresObject(items5, () => {
    let obj;
    if (null != guildEvent.creator_id) {
      obj = { creator: UserStore.getUser(guildEvent.creator_id), creatorMember: GuildMemberStore.getMember(guildEvent.guild_id, guildEvent.creator_id) };
      const obj2 = { creator: UserStore.getUser(guildEvent.creator_id), creatorMember: GuildMemberStore.getMember(guildEvent.guild_id, guildEvent.creator_id) };
    } else {
      obj = { creator: null, creatorMember: null };
    }
    return obj;
  }, items6);
  const creator = stateFromStoresObject.creator;
  creatorMember = stateFromStoresObject.creatorMember;
  let tmp11 = closure_13;
  const obj6 = { style: items7, onLayout, children: items8 };
  items7 = [tmp.eventContainer, ];
  const obj7 = { paddingBottom: safeBottomPadding + 16 };
  items7[1] = obj7;
  const tmp13 = closure_12;
  items8 = [, , , , , , , , , ];
  const obj8 = { event: guildEvent, style: tmp.eventHeader, showUserCount: false, showEndDate: true, showCreator: false, recurrenceId };
  items8[0] = closure_12(guildEvent(8972).GuildEventCardHeader, obj8);
  const obj9 = { event: guildEvent, textStyle: tmp.eventTitle, style: tmp.eventTitleContainer };
  items8[1] = closure_12(guildEvent(8972).GuildEventCardTitle, obj9);
  const obj10 = { event: guildEvent, textStyle: tmp.guildTextStyle };
  items8[2] = closure_12(guildEvent(8972).GuildEventCardSimpleGuildInfo, obj10);
  items8[3] = closure_12(guildEvent(8972).GuildEventSimpleLocation, { event: guildEvent });
  const obj11 = { style: tmp.interestedContainer, children: items9 };
  items9 = [, ];
  const obj12 = { size: "sm", style: tmp.interestedIcon };
  items9[0] = closure_12(guildEvent(9189).BellIcon, obj12);
  const obj13 = { variant: "text-sm/medium", color: "text-default", children: intl.format(guildEvent(1114).t["+DLsD8"], { count: tmp8 }) };
  const Text = guildEvent(5619).Text;
  intl = guildEvent(1114).intl;
  items9[1] = closure_12(Text, obj13);
  items8[4] = closure_13(creator, obj11);
  let tmp11Result = null != creator && stateFromStores1;
  if (tmp11Result) {
    const obj14 = { style: tmp.interestedContainer, children: items10 };
    const obj15 = { user: creator, guildId: guildEvent.guild_id, size: tmp2(1188).AvatarSizes.XSMALL_20, style: tmp.interestedIcon };
    const Avatar = tmp2(1188).Avatar;
    items10 = [tmp13(Avatar, obj15), ];
    const obj16 = { variant: "text-sm/medium", color: "text-default", children: intl2.format(tmp2(1114).t["66DLFs"], obj17) };
    const Text2 = tmp2(5619).Text;
    intl2 = tmp2(1114).intl;
    obj17 = {
      usernameHook: function renderUsername() {
          let nick;
          let tmp4 = "dot" === closure_3;
          const tmp = map1;
          const tmp2 = authStore3;
          const tmp3 = closure_3;
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
            tmp4 = authStore2(native.RoleDot, obj);
          }
          const items = [tmp4, ];
          let tmp14;
          const LegacyText = native.LegacyText;
          const tmp11 = authStore2;
          if (null != creatorMember) {
            if ("username" === tmp3) {
              if (null != creatorMember.colorString) {
                tmp14 = { color: creatorMember.colorString };
                const obj2 = { color: creatorMember.colorString };
              }
            }
          }
          const obj3 = { style: tmp14, children: nick };
          nick = undefined;
          if (creatorMember != null) {
            nick = tmp13.nick;
          }
          if (nick == null) {
            const obj4 = UserUtilsDefault;
            nick = obj4.getName(creator);
          }
          const obj5 = { children: items };
          items[1] = tmp11(LegacyText, obj3);
          return tmp(tmp2, obj5);
        }
    };
    items10[1] = tmp13(Text2, obj16);
    tmp11Result = tmp11(tmp12, obj14);
  }
  items8[5] = tmp11Result;
  const obj18 = { event: guildEvent, style: tmp.eventDescriptionContainer };
  items8[6] = tmp13(tmp2(8972).GuildEventCardDescription, obj18);
  let hasItem = set.has(guildEvent.entity_type);
  if (hasItem) {
    const obj19 = {
      noBackground: true,
      divider: items11,
      onConfirmPress() {
          const obj = ActionSheetActionCreatorsDefault;
          return obj.hideAllActionSheets();
        },
      channelId: guildEvent.channel_id,
      style: tmp.ageVerificationContainer
    };
    items11 = [, ];
    const tmp7Result = StageChannelAgeVerificationNoticeDefault;
    items11[0] = tmp2(7946).DividerPosition.TOP;
    items11[1] = tmp2(7946).DividerPosition.BOTTOM;
    hasItem = tmp13(tmp7Result, obj19);
  }
  items8[7] = hasItem;
  const obj20 = { direction: "horizontal", style: tmp.controlsContainer, children: items12 };
  const ButtonGroup = tmp2(6761).ButtonGroup;
  items12 = [, , ];
  const obj21 = {
    event: guildEvent,
    onCloseAction: function handleCloseAction() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(closure_11);
      if (importDefault != null) {
        importDefault();
      }
    },
    isConnected: stateFromStores,
    recurrenceId
  };
  items12[0] = tmp13(tmp2(8972).GuildEventCardPrimaryAction, obj21);
  let tmp13Result = null;
  if (stateFromStores1) {
    const obj22 = { event: guildEvent };
    tmp13Result = tmp13(tmp2(8972).GuildEventShareAction, obj22);
  }
  items12[1] = tmp13Result;
  items12[2] = tmp13(tmp2(8972).GuildEventModeratorAction, { event: guildEvent, recurrenceId });
  items8[8] = tmp11(ButtonGroup, obj20);
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
    tmp13Result2 = tmp13(tmp7(9077), obj23);
  }
  items8[9] = tmp13Result2;
  return tmp11(creator, obj6);
};
export function closeGuildEventInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(closure_11);
}
