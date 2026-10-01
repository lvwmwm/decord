// Module ID: 9062
// Function ID: 9063
// Name: GuildEventCardComponents
// Dependencies: [5, 32, 19, 17, 502, 2045, 2108, 2067, 4469, 1372, 6946, 2051, 1074, 1085, 21, 4836, 576, 9063, 9065, 7363, 1115, 8976, 6610, 4527, 9066, 4776, 504, 8952, 7366, 4783, 9067, 9068, 8946, 5832, 6760, 9069, 5204, 8981, 5300, 5043, 1370, 1479, 1397, 9070, 9071, 1177, 5403, 4767, 8950, 8949, 9073, 5435, 4832, 9076, 9061, 4989, 8983, 9059, 9060, 5896, 2]
// Exports: GuildEventCardGuildInfo, GuildEventCardHeader, GuildEventCardImageHeader, GuildEventCardMetaInfo, GuildEventCardSimpleGuildInfo, GuildEventIndicateInterestAction, GuildEventModeratorAction, GuildEventShareAction, GuildEventSimpleLocation, useEventRsvpState

// Module 9062 (GuildEventCardComponents)
import nativeDefault from "native" /* 576 */;
import intl12 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import Text_Text from "Text/Text" /* 4832 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5043 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import AlertDefault from "Alert" /* 5300 */;
import GroupIcon from "GroupIcon" /* 5403 */;
import GuildIconDefault from "GuildIcon" /* 5896 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import ScheduleUtils from "ScheduleUtils" /* 8946 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 8976 */;
import guildEventDetailsParser from "guildEventDetailsParser" /* 9061 */;
import useCanInviteForGuildEventDefault from "useCanInviteForGuildEvent" /* 9063 */;
import ThrottledButtonDefault from "ThrottledButton" /* 9068 */;
import useGuildScheduledEventUserCountDefault from "useGuildScheduledEventUserCount" /* 9071 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 6946 */;
import Constants_mod from "Constants" /* 1074 */;
import Constants_mod2 from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, dependencyMap, importDefault;

let Fonts;
let closure_15;
let closure_16;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp2;
const getGuildEventImageDefault = tmp2(9070);
function usePrimaryActionButtonType(event, isConnected) {
  let JOIN_GUILD;
  let channel_id;
  _require = event;
  ({ guild_id: importDefault, channel_id } = event);
  const scheduled_start_time = event.scheduled_start_time;
  const items = [scheduled_start_time];
  const entity_type = event.entity_type;
  const withinStartWindow = react.useMemo(() => {
    const obj = ScheduleUtils;
    return obj.getEventTimeData(scheduled_start_time);
  }, items).withinStartWindow;
  let obj = require("get initialized");
  const items1 = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items1, () => GuildStore.getGuild(importDefault));
  const items2 = [ChannelStore];
  const items3 = [channel_id];
  const obj2 = require("get initialized");
  let stateFromStores1 = obj2.useStateFromStores(items2, () => ChannelStore.getChannel(channel_id), items3);
  const useManageResourcePermissions = require("useManageResourcePermissions").useManageResourcePermissions;
  require("useManageResourcePermissions");
  const tmp = _require;
  const tmp2 = channel_id;
  const tmp3 = GuildStore;
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  const canManageGuildEventResult = useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
  const items4 = [tmp3];
  const tmpResult = tmp(tmp2[26]);
  if (tmpResult.useStateFromStores(items4, () => null != GuildStore.getGuild(event.guild_id))) {
    let RSVP;
    if (closure_15(event)) {
      RSVP = obj14.ENDED;
    } else if (closure_16(event)) {
      let JOIN;
      if (entity_type === constants.EXTERNAL) {
        JOIN = canManageGuildEventResult ? tmp16.END : tmp16.STARTED;
      } else if (isConnected) {
        JOIN = canManageGuildEventResult ? tmp15.END : tmp15.CONNECTED;
      } else {
        JOIN = tmp15.JOIN;
      }
      RSVP = JOIN;
    } else {
      if (withinStartWindow) {
        if (canManageGuildEventResult) {
          RSVP = obj14.START;
        }
      }
      RSVP = obj14.RSVP;
    }
    JOIN_GUILD = RSVP;
  } else {
    JOIN_GUILD = obj14.JOIN_GUILD;
  }
  return JOIN_GUILD;
}
class GuildEventCardRSVPAction {
  constructor(arg0) {
    let BellIcon;
    let event;
    let first;
    let intl;
    let intl2;
    let recurrenceId;
    let tmp5;
    ({ event, recurrenceId } = arg0);
    const items = [GuildScheduledEventStore];
    const items1 = [event.id, recurrenceId];
    const items2 = [, ];
    const obj = event(504);
    items2[0] = obj.useStateFromStores(items, () => GuildScheduledEventStore.isInterestedInEventRecurrence(event.id, c1), items1);
    items2[1] = () => {
      const obj = GuildScheduledEventModalActionCreators;
      const result = obj.handleGuildScheduledEventRsvp(event.id, c1, event.guild_id);
    };
    [first, tmp5] = items2;
    let str = "secondary";
    if (first) {
      str = "tertiary";
    }
    if (first) {
      BellIcon = tmp(4783).CheckmarkLargeIcon;
    } else {
      BellIcon = tmp(9067).BellIcon;
    }
    const obj2 = { accessibilityRole: "togglebutton", accessibilityState: { checked: first }, accessibilityLabel: "" + intl.string(event(1115).t.DlcqlU) + ", " + event.name, variant: str, icon: closure_22(BellIcon, { size: "sm" }), text: intl2.string(event(1115).t.DlcqlU), onPress: tmp5, grow: true };
    const tmp6 = recurrenceId(9068);
    intl = tmp(1115).intl;
    intl2 = tmp(1115).intl;
    return closure_22(tmp6, obj2);
  }
}
class GuildEventJoinAndRSVPAction {
  constructor(event) {
    let c1;
    let c2;
    let intl;
    let intl2;
    event = event.event;
    const recurrenceId = event.recurrenceId;
    importDefault = undefined;
    dependencyMap = undefined;
    let obj = function _handleJoinGuild() {
      let guild_id;
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0;
        let v1;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c3;
          try {
            c4 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_2_3(true);
                c3 = 1;
                const obj5 = { source: constants.DIRECTORY_EVENTS };
                const obj2 = c1(closure_2[33]);
                c1 = 2;
                c4 = 1;
                const obj6 = { value: obj2.joinGuild(guild_id.guild_id, obj5), done: false };
                return obj6;
              }
            } else if (1 === tmp4) {
              c3 = 0;
              closure_128_3(false);
              throw closure_2;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_3(false);
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const obj7 = tmp(closure_2[34]);
              obj7.transitionToGuild(closure_128_0.guild_id);
              const tmp8 = closure_128_1 || closure_1_16(closure_128_0);
              if (!tmp8) {
                closure_128_2();
              }
              c3 = 0;
              closure_128_3(false);
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp29) {
            closure_2 = tmp29;
            if (0 === c3) {
              c4 = 3;
              throw tmp29;
            } else {
              c1 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    obj = event(504);
    const items = [GuildScheduledEventStore];
    const items1 = [event.id, recurrenceId];
    const items2 = [
      obj.useStateFromStores(items, () => GuildScheduledEventStore.isInterestedInEventRecurrence(event.id, c1), items1),
      () => {
        const obj = GuildScheduledEventModalActionCreators;
        const result = obj.handleGuildScheduledEventRsvp(event.id, c1, event.guild_id);
      }
    ];
    const tmp = obj(items2, 2);
    [c1, c2] = tmp;
    const tmp2 = obj(react.useState(false), 2);
    let closure_3 = tmp2[1];
    let obj2 = {
      loading: tmp2[0],
      variant: "active",
      text: intl.string(event(1115).t.VJlc0S),
      accessibilityLabel: "" + intl2.string(event(1115).t.VJlc0S) + ", " + event.name,
      onPress: function handleJoinGuild() {
        return obj(...arguments);
      },
      grow: true
    };
    const tmp3 = ThrottledButtonDefault;
    intl = event(1115).intl;
    intl2 = event(1115).intl;
    return closure_22(tmp3, obj2);
  }
}
class UserCountIconPill {
  constructor(event) {
    let intl;
    event = event.event;
    const recurrenceId = event.recurrenceId;
    let guild_id;
    const tmp2 = useGuildScheduledEventUserCountDefault;
    if (event != null) {
      guild_id = event.guild_id;
    }
    let id;
    if (event != null) {
      id = event.id;
    }
    const tmp2Result = tmp2(guild_id, id, recurrenceId);
    const obj = { accessibilityLabel: "" + intl.formatToPlainString(intl12.t["+DLsD8"], { count: tmp2Result }) + ", " + event.name, IconComponent: GroupIcon.GroupIcon, text: tmp2Result.toLocaleString() };
    const IconPill = native.IconPill;
    intl = intl12.intl;
    return authStore5(IconPill, obj);
  }
}
class GuildEventCardTitle {
  constructor(event) {
    let Text;
    let condensed;
    let intl;
    let items;
    let num;
    let obj2;
    let style;
    let textStyle;
    event = event.event;
    ({ style, textStyle, condensed, onPress } = event);
    const obj = { accessibilityRole: "button", accessibilityHint: intl.string(intl12.t.epxpiy), accessibilityLabel: event.name, onPress, style: items, children: authStore5(Text, obj2) };
    const tmp = styles();
    intl = intl12.intl;
    items = [tmp.topicContainer, style];
    obj2 = { variant: "text-md/bold", color: "mobile-text-heading-primary", style: textStyle, lineClamp: num, children: event.name };
    num = undefined;
    Text = Text_Text.Text;
    const tmp3 = metroImportAll;
    if (condensed) {
      num = 1;
    }
    return authStore5(tmp3, obj);
  }
}
class GuildEventCardDescription {
  constructor(event) {
    let Text;
    let condensed;
    let items;
    let numberOfLines;
    let obj2;
    let obj3;
    let obj4;
    let style;
    let textStyle;
    event = event.event;
    const description = event.description;
    const guild_id = event.guild_id;
    ({ style, textStyle, numberOfLines, condensed } = event);
    let tmp2 = null;
    if (null != description) {
      tmp2 = null;
      if (description.length > 0) {
        tmp2 = null;
        if (!condensed) {
          tmp2 = null;
          if (null != description) {
            const obj = { style: items, children: authStore5(Text, obj2) };
            items = [tmp.detailsContainer, style];
            obj2 = { variant: "text-md/medium", color: "text-subtle", style: textStyle, lineClamp: numberOfLines, children: obj3.guildEventDetailsParser(description, true, obj4) };
            Text = Text_Text.Text;
            obj4 = { guildId: guild_id, allowLinks: true, allowHeading: true, allowList: true };
            obj3 = guildEventDetailsParser;
            tmp2 = authStore5(metroRequire, obj);
          }
        }
      }
    }
    return tmp2;
  }
}
({ View: metroRequire, Image: metroImportDefault, Pressable: metroImportAll } = react_native);
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
({ isGuildEventEnded: closure_15, isGuildScheduledEventActive: closure_16 } = GuildScheduledEventStore);
GuildScheduledEventStore = GuildScheduledEventStore_mod;
const constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
let Constants = Constants_mod2;
({ Permissions: closure_19, JoinGuildSources: closure_20 } = Constants);
Constants = Constants_mod2;
({ Fonts, NOOP: closure_21 } = Constants);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = Fragment);
let createStyles = createStyles_mod;
let obj = { imageHeaderContainer: obj2, imageHeaderBanner: { width: "100%", aspectRatio: 2.5 }, headerContainer: { flexDirection: "row", alignItems: "center" }, dateContainer: { flexDirection: "row", alignItems: "center", flex: 1 }, dateIcon: obj3, newBadge: obj4, topicContainer: obj5, detailsContainer: obj6, channelContainer: obj7, channelIcon: obj8, channelText: obj9, guildInfoContainer: obj10, guildIcon: obj11, guildInfo: { flexDirection: "column" }, guildInfoChannelContainer: { flexDirection: "row", alignItems: "center" }, guildInfoChannelText: obj12, creatorAvatar: obj13 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { marginRight: nativeDefault.space.PX_8 };
obj4 = { paddingHorizontal: 4, paddingVertical: 2, marginEnd: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj5 = { paddingTop: nativeDefault.space.PX_8 };
obj6 = { paddingTop: nativeDefault.space.PX_8 };
obj7 = { flexDirection: "row", alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj8 = { marginRight: nativeDefault.space.PX_8 };
obj9 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18, flexShrink: 1 };
obj10 = { flexDirection: "row", alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj11 = { marginRight: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
obj12 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 12, lineHeight: 16 };
obj13 = { marginRight: nativeDefault.space.PX_8 };
const styles = createStyles(obj);
let obj14 = { RSVP: 0, [0]: "RSVP", JOIN: 1, [1]: "JOIN", START: 2, [2]: "START", STARTED: 3, [3]: "STARTED", CONNECTED: 4, [4]: "CONNECTED", END: 5, [5]: "END", ENDED: 6, [6]: "ENDED", JOIN_GUILD: 7, [7]: "JOIN_GUILD" };
const memoResult = react.memo(function GuildEventCardPrimaryAction(event) {
  let c3;
  let channel_id;
  let intl;
  let intl10;
  let intl11;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let recurrenceId;
  event = event.event;
  ({ onCloseAction: importDefault, recurrenceId } = event);
  c3 = undefined;
  channel_id = undefined;
  ({ guild_id: c3, channel_id } = event);
  const tmp = event;
  const isConnected = event.isConnected;
  let obj = event(recurrenceId[26]);
  const items = [ChannelStore];
  const items1 = [channel_id];
  const id = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
  let closure_6 = channel_id(require("useSelectStage")(), 2)[1];
  const tmp4 = usePrimaryActionButtonType(event, isConnected);
  const items2 = [PermissionStore];
  const obj2 = event(recurrenceId[26]);
  const stateFromStores = obj2.useStateFromStores(items2, () => PermissionStore.can(constants.CONNECT, id));
  if (obj14.ENDED === tmp4) {
    const obj3 = { variant: "secondary", text: intl10.string(tmp(recurrenceId[20]).t.Pj7Xrv), accessibilityLabel: "" + intl11.string(tmp(recurrenceId[20]).t.Pj7Xrv) + ", " + event.name, grow: true, disabled: true, onPress };
    const tmp3Result = require("ThrottledButton");
    intl10 = tmp(tmp2[20]).intl;
    intl11 = tmp(tmp2[20]).intl;
    const _HermesInternal6 = HermesInternal;
    return closure_22(tmp3Result, obj3);
  } else {
    function handleListenIn() {
      if (null != id) {
        if (event.entity_type === constants.STAGE_INSTANCE) {
          closure_6(c3, id.id);
        }
        const obj = PrivateChannelCallUtils;
        obj.openGuildVoiceModal(id);
        if (importDefault != null) {
          importDefault();
        }
      }
    }
    if (obj14.JOIN === tmp4) {
      let stringResult;
      const intl9 = tmp(tmp2[20]).intl;
      const string = intl9.string;
      const t = tmp(tmp2[20]).t;
      if (stateFromStores) {
        stringResult = string(t.ZYO5OK);
      } else {
        stringResult = string(t.TVBCKZ);
      }
      const _HermesInternal5 = HermesInternal;
      const obj4 = { variant: "active", text: stringResult, accessibilityLabel: "" + stringResult + ", " + event.name, onPress: handleListenIn, disabled: !stateFromStores, grow: true };
      const tmp3Result6 = require("ThrottledButton");
      return closure_22(tmp3Result6, obj4);
    } else if (obj14.CONNECTED === tmp4) {
      const obj5 = { variant: "active", text: intl7.string(tmp(recurrenceId[20]).t.aW2YlJ), accessibilityLabel: "" + intl8.string(tmp(recurrenceId[20]).t.aW2YlJ) + ", " + event.name, onPress: handleListenIn, grow: true };
      const tmp3Result7 = require("ThrottledButton");
      intl7 = tmp(tmp2[20]).intl;
      intl8 = tmp(tmp2[20]).intl;
      const _HermesInternal4 = HermesInternal;
      return closure_22(tmp3Result7, obj5);
    } else if (obj14.RSVP === tmp4) {
      const obj6 = { event, recurrenceId };
      return closure_22(GuildEventCardRSVPAction, obj6);
    } else if (obj14.START === tmp4) {
      const obj7 = {
        variant: "active",
        text: intl5.string(tmp(recurrenceId[20]).t.cK1GGY),
        accessibilityLabel: "" + intl6.string(tmp(recurrenceId[20]).t.cK1GGY) + ", " + event.name,
        onPress: function handleStartEvent() {
              if (importDefault != null) {
                tmp();
              }
              const obj = GuildScheduledEventModalActionCreators;
              const result = obj.openStartGuildEventModal(event, recurrenceId);
            },
        grow: true
      };
      const tmp3Result8 = require("ThrottledButton");
      intl5 = tmp(tmp2[20]).intl;
      intl6 = tmp(tmp2[20]).intl;
      const _HermesInternal3 = HermesInternal;
      return closure_22(tmp3Result8, obj7);
    } else if (obj14.STARTED === tmp4) {
      const obj8 = { variant: "secondary", text: intl3.string(tmp(recurrenceId[20]).t.Yz0V6O), accessibilityLabel: "" + intl4.string(tmp(recurrenceId[20]).t.Yz0V6O) + ", " + event.name, grow: true, disabled: true, onPress };
      const tmp3Result9 = require("ThrottledButton");
      intl3 = tmp(tmp2[20]).intl;
      intl4 = tmp(tmp2[20]).intl;
      const _HermesInternal2 = HermesInternal;
      return closure_22(tmp3Result9, obj8);
    } else if (obj14.END === tmp4) {
      const obj9 = {
        variant: "secondary",
        text: intl.string(tmp(recurrenceId[20]).t.qaYzPA),
        accessibilityLabel: "" + intl2.string(tmp(recurrenceId[20]).t.qaYzPA) + ", " + event.name,
        onPress: function handleEndEvent() {
              let intl;
              let intl2;
              let intl3;
              let intl4;
              let obj = {
                title: intl.string(intl12.t.qaYzPA),
                body: intl2.string(intl12.t.bnDQ7E),
                cancelText: intl3.string(intl12.t.gm1Vej),
                confirmText: intl4.string(intl12.t.p89ACt),
                onConfirm() {
                  const obj = require("GuildScheduledEventsActionCreators");
                  return obj.endEvent(event.id, event.guild_id);
                },
                confirmColor: AlertDefault.Colors.RED
              };
              const show = actions_AlertActionCreatorsDefault.show;
              actions_AlertActionCreatorsDefault;
              intl = intl12.intl;
              intl2 = intl12.intl;
              intl3 = intl12.intl;
              intl4 = intl12.intl;
              show(obj);
            },
        grow: true
      };
      const tmp3Result10 = require("ThrottledButton");
      intl = tmp(tmp2[20]).intl;
      intl2 = tmp(tmp2[20]).intl;
      const _HermesInternal = HermesInternal;
      return closure_22(tmp3Result10, obj9);
    } else if (obj14.JOIN_GUILD === tmp4) {
      const obj10 = { event, recurrenceId };
      return closure_22(GuildEventJoinAndRSVPAction, obj10);
    } else {
      const tmpResult = tmp(recurrenceId[40]);
      tmpResult.assertNever(tmp4);
    }
  }
});
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventCardComponents.tsx");

export const useGuildEventCardStyles = styles;
export const GuildEventShareAction = function GuildEventShareAction(event) {
  let closure_1;
  let closure_2;
  let intl;
  event = event.event;
  importDefault = undefined;
  const tmp3 = useCanInviteForGuildEventDefault(event);
  const tmp = importDefault;
  importDefault = tmp3;
  let obj2 = { guildId: event.guild_id, guildEventId: event.id };
  const obj = event(9065);
  dependencyMap = obj.SHARE_EVENT_DETAILS_LINK(obj2);
  const obj3 = {
    accessibilityLabel: "" + intl.string(event(1115).t.RDE0Sc) + ", " + event.name,
    onPress() {
      if (closure_1) {
        const tmpResult = GuildScheduledEventModalActionCreators;
        tmpResult.openShareEvent(event);
      } else {
        const tmpResult2 = ClipboardUtils;
        tmpResult2.copy(closure_2);
        const obj2 = ToastUtils;
        obj2.presentLinkCopied();
      }
    },
    icon: tmp(tmp3 ? 9066 : 4776),
    variant: "secondary"
  };
  const IconButton = event(7363).IconButton;
  intl = event(1115).intl;
  return closure_22(IconButton, obj3);
};
export const GuildEventModeratorAction = function GuildEventModeratorAction(event) {
  let intl;
  event = event.event;
  const recurrenceId = event.recurrenceId;
  let closure_3;
  const channel_id = event.channel_id;
  let obj = event(channel_id[26]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(event.guild_id));
  const items1 = [ChannelStore];
  const items2 = [channel_id];
  const obj2 = event(channel_id[26]);
  let stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channel_id), items2);
  const useManageResourcePermissions = event(channel_id[27]).useManageResourcePermissions;
  event(channel_id[27]);
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  closure_3 = useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
  const obj3 = {
    accessibilityLabel: "" + intl.string(event(channel_id[20]).t.HIgA5a) + ", " + event.name,
    onPress() {
      const obj = GuildScheduledEventModalActionCreators;
      return obj.showGuildEventModeratorActionSheet(event, closure_3, recurrenceId);
    },
    icon: recurrenceId(channel_id[28]),
    variant: "secondary"
  };
  const IconButton = tmp(tmp2[19]).IconButton;
  intl = tmp(tmp2[20]).intl;
  return closure_22(IconButton, obj3);
};
export const useEventRsvpState = function useEventRsvpState(id, arg1) {
  _require = id;
  let closure_1 = arg1;
  const items = [GuildScheduledEventStore];
  const items1 = [id.id, arg1];
  const items2 = [, ];
  const obj = require("get initialized");
  items2[0] = obj.useStateFromStores(items, () => GuildScheduledEventStore.isInterestedInEventRecurrence(event.id, c1), items1);
  items2[1] = () => {
    const obj = GuildScheduledEventModalActionCreators;
    const result = obj.handleGuildScheduledEventRsvp(event.id, c1, event.guild_id);
  };
  return items2;
};
export const GuildEventIndicateInterestAction = function GuildEventIndicateInterestAction(event) {
  let BellIcon;
  let c1;
  let first;
  let intl;
  let intl2;
  let tmp5;
  event = event.event;
  importDefault = null;
  let obj = event(504);
  const items = [GuildScheduledEventStore];
  const items1 = [event.id, null];
  const items2 = [
    obj.useStateFromStores(items, () => GuildScheduledEventStore.isInterestedInEventRecurrence(event.id, c1), items1),
    () => {
      const obj = GuildScheduledEventModalActionCreators;
      const result = obj.handleGuildScheduledEventRsvp(event.id, c1, event.guild_id);
    }
  ];
  [first, tmp5] = items2;
  let str = "secondary";
  if (first) {
    str = "tertiary";
  }
  if (first) {
    BellIcon = tmp(4783).CheckmarkLargeIcon;
  } else {
    BellIcon = tmp(9067).BellIcon;
  }
  const obj2 = { accessibilityRole: "togglebutton", accessibilityState: { checked: first }, accessibilityLabel: "" + intl.string(event(1115).t.DlcqlU) + ", " + event.name, variant: str, icon: closure_22(BellIcon, { size: "sm" }), text: intl2.string(event(1115).t.DlcqlU), onPress: tmp5, grow: true };
  const tmp6 = ThrottledButtonDefault;
  intl = tmp(1115).intl;
  intl2 = tmp(1115).intl;
  return closure_22(tmp6, obj2);
};
export const PrimaryActionType = obj14;
export { usePrimaryActionButtonType };
export { GuildEventCardRSVPAction };
export { GuildEventJoinAndRSVPAction };
export const GuildEventCardPrimaryAction = memoResult;
export const GuildEventCardImageHeader = function GuildEventCardImageHeader(event) {
  let c0;
  let obj;
  let obj3;
  let tmp5;
  event = event.event;
  c0 = undefined;
  const tmp = styles();
  let width = useWindowDimensionsDefault().width;
  [tmp5, c0] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  if (null == event.image) {
    return null;
  } else {
    if (tmp5 > 0) {
      width = tmp5;
    }
    const obj2 = { style: tmp.imageHeaderContainer, onLayout: tmp6, children: authStore5(metroImportDefault, obj3) };
    obj3 = { style: tmp.imageHeaderBanner, source: obj.makeSource(getGuildEventImageDefault(event, width)), resizeMode: "cover" };
    obj = AvatarUtils;
    return authStore5(metroRequire, obj2);
  }
};
export { UserCountIconPill };
export const GuildEventCardHeader = function GuildEventCardHeader(event) {
  let Text;
  let c1;
  let intl2;
  let items3;
  let items4;
  let obj12;
  let obj15;
  let recurrenceId;
  let shouldChangeTextColor;
  let showUserCount;
  let text;
  let tmp25Result;
  let tmp27;
  event = event.event;
  ({ recurrenceId, showUserCount } = event);
  if (showUserCount === undefined) {
    showUserCount = true;
  }
  let flag = event.showEndDate;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = event.isPreview;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = event.showCreator;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let flag4 = event.isNew;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = event.isActive;
  if (flag5 === undefined) {
    flag5 = false;
  }
  importDefault = undefined;
  let toISOStringResult1;
  let color;
  shouldChangeTextColor = undefined;
  const style = event.style;
  let tmp = styles();
  let tmp2 = importDefault;
  let id;
  const tmp4 = require("useTheme")();
  const tmp5 = require("useEventException");
  if (event != null) {
    id = event.id;
  }
  let obj = tmp5(recurrenceId, id);
  const entity_type = event.entity_type;
  if (obj == null) {
    obj = {};
  }
  const is_canceled = obj.is_canceled;
  const tmp7 = undefined !== is_canceled && is_canceled;
  const tmp8 = tmp2(toISOStringResult1[49])(event, recurrenceId);
  let toISOStringResult;
  if (tmp8 != null) {
    const startTime = tmp8.startTime;
    toISOStringResult = startTime.toISOString();
  }
  importDefault = toISOStringResult;
  let tmp10;
  if (flag) {
    toISOStringResult1 = undefined;
    if (tmp8 != null) {
      const endTime = tmp8.endTime;
      if (endTime != null) {
        toISOStringResult1 = endTime.toISOString();
      }
    }
    tmp10 = toISOStringResult1;
  }
  toISOStringResult1 = tmp10;
  const items = [toISOStringResult, tmp10];
  const memo = react.useMemo(() => {
    const obj = ScheduleUtils;
    return obj.getEventTimeData(c1, toISOStringResult1);
  }, items);
  const STAGE_INSTANCE = constants.STAGE_INSTANCE;
  let obj2 = event(tmp3[50]);
  const obj3 = { eventTimeData: memo, isStage: entity_type === STAGE_INSTANCE, theme: tmp4, event, isCanceled: tmp7, recurrenceId };
  const guildScheduledEventHeaderProps = obj2.getGuildScheduledEventHeaderProps(obj3);
  color = guildScheduledEventHeaderProps.color;
  ({ text, shouldChangeTextColor } = guildScheduledEventHeaderProps);
  const endDateTimeString = memo.endDateTimeString;
  let tmp15 = null;
  if (showUserCount) {
    const obj4 = { event, recurrenceId };
    const tmp18 = closure_22(UserCountIconPill, obj4);
    let tmp16Result = tmp18;
    const tmp16 = closure_22;
    if (!flag2) {
      const obj5 = {
        accessibilityRole: "button",
        onPress: function handleOpenRSVPList() {

            },
        children: tmp18
      };
      tmp16Result = tmp16(tmp13(tmp3[51]).PressableOpacity, obj5);
    }
    tmp15 = tmp16Result;
  }
  const items1 = [UserStore];
  const items2 = [event];
  const tmp13Result = event(toISOStringResult1[26]);
  const stateFromStores = tmp13Result.useStateFromStores(items1, () => UserStore.getUser(event.creator_id), items2);
  let formatResult = text;
  if (null != endDateTimeString && "" !== endDateTimeString) {
    const intl = tmp13(tmp3[20]).intl;
    const obj6 = {
      start: text,
      startHook(children) {
          let tmp2 = shouldChangeTextColor;
          const Text = Text_Text.Text;
          const tmp = authStore5;
          if (shouldChangeTextColor) {
            tmp2 = { color };
            const obj = { color };
          }
          const obj2 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp2, children };
          return tmp(Text, obj2);
        },
      end: endDateTimeString
    };
    formatResult = intl.format(tmp13(tmp3[20]).t.vHYgJW, obj6);
  }
  const obj7 = { style: items3, children: items4 };
  items3 = [tmp.headerContainer, style];
  const tmp23 = closure_23;
  if (flag4) {
    const obj8 = { containerStyle: tmp.newBadge, variant: "text-xs/bold" };
    tmp25Result = tmp25(tmp13(tmp3[45]).NewTag, obj8);
    tmp27 = tmp25;
  } else {
    const obj9 = { size: "sm", color, style: tmp.dateIcon };
    tmp25Result = tmp25(tmp13(tmp3[53]).CalendarIcon, obj9);
    tmp27 = tmp25;
  }
  items4 = [tmp25Result, , , ];
  const obj10 = { style: tmp.dateContainer, children: tmp27(Text, obj12) };
  Text = tmp13(tmp3[52]).Text;
  if (null != endDateTimeString && "" !== endDateTimeString) {
    obj12 = { variant: "text-sm/semibold", color: "text-default", children: formatResult };
    const obj11 = { variant: "text-sm/semibold", color: "text-default", children: formatResult };
  } else {
    let str2 = "text-subtle";
    if (flag5) {
      str2 = "text-strong";
    }
    obj12 = { variant: "text-sm/semibold", color: str2, style: shouldChangeTextColor, children: formatResult };
    if (shouldChangeTextColor) {
      shouldChangeTextColor = { color };
      const obj13 = { color };
    }
  }
  items4[1] = tmp27(closure_6, obj10);
  if (flag3) {
    flag3 = null != stateFromStores;
  }
  if (flag3) {
    obj14 = { accessible: true, accessibilityLabel: "" + intl2.formatToPlainString(event(toISOStringResult1[20]).t["+3iypQ"], obj15) + ", " + event.name, user: stateFromStores, guildId: event.guild_id, size: event(toISOStringResult1[45]).AvatarSizes.XSMALL_20, style: tmp.creatorAvatar };
    const Avatar = tmp13(tmp3[45]).Avatar;
    intl2 = tmp13(tmp3[20]).intl;
    const _HermesInternal = HermesInternal;
    obj15 = { username: stateFromStores.username };
    flag3 = tmp27(Avatar, obj14);
  }
  items4[2] = flag3;
  items4[3] = tmp15;
  return tmp23(closure_6, obj7);
};
export { GuildEventCardTitle };
export { GuildEventCardDescription };
export const GuildEventCardMetaInfo = function GuildEventCardMetaInfo(textStyle) {
  let condensed;
  let descriptionContainerStyle;
  let descriptionStyle;
  let event;
  let items;
  ({ event, condensed } = textStyle);
  const obj = { children: items };
  const obj2 = { event, textStyle: textStyle.titleStyle, style: textStyle.titleContainerStyle, condensed, onPress: textStyle.onTitlePress };
  ({ descriptionStyle, descriptionContainerStyle } = textStyle);
  items = [authStore5(GuildEventCardTitle, obj2), authStore5(GuildEventCardDescription, { event, textStyle: descriptionStyle, style: descriptionContainerStyle, condensed, numberOfLines: 3 })];
  return closure_23(closure_24, obj);
};
export const GuildEventSimpleLocation = function GuildEventSimpleLocation(event) {
  let combined;
  let items4;
  event = event.event;
  const tmp = styles();
  const channel_id = event.channel_id;
  let guild_id = event.guild_id;
  const items = [ChannelStore];
  const items1 = [channel_id];
  const obj = channel_id(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
  const items2 = [GuildMemberStore, AuthenticationStore];
  const items3 = [stateFromStores];
  const obj2 = channel_id(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let guild_id;
    const id = AuthenticationStore.getId();
    const isMember = GuildMemberStore.isMember;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return isMember(guild_id, id);
  }, items3);
  let tmp7 = stateFromStores(4989)(stateFromStores);
  const obj3 = channel_id(8983);
  const locationFromEvent = obj3.getLocationFromEvent(event);
  const tmp6 = stateFromStores;
  if (null == stateFromStores) {
    if (null == locationFromEvent) {
      return null;
    }
  }
  const tmp2Result = channel_id(9059);
  const eventLocationIconComponent = tmp2Result.getEventLocationIconComponent(event, stateFromStores, stateFromStores1);
  let tmp12 = null != eventLocationIconComponent;
  const obj4 = { style: tmp.channelContainer, children: items4 };
  const tmp10 = closure_23;
  const tmp11 = closure_6;
  if (tmp12) {
    const obj5 = { size: "sm", style: tmp.channelIcon };
    tmp12 = closure_22(eventLocationIconComponent, obj5);
  }
  items4 = [tmp12, ];
  const obj6 = { style: tmp.channelText, accessibilityLabel: combined, variant: "text-sm/medium", color: "text-default", children: tmp7 };
  const Text = tmp2(4832).Text;
  const tmp14 = closure_22;
  if (null != stateFromStores) {
    const obj7 = { channel: stateFromStores };
    combined = tmp6(9060)(obj7);
  } else if (null != locationFromEvent) {
    const intl = tmp2(1115).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl.string(tmp2(1115).t.gwSn4I) + ", " + locationFromEvent;
  }
  if (tmp7 == null) {
    let result = null;
    if (null != locationFromEvent) {
      const obj8 = { guildId: guild_id };
      const tmp2Result2 = channel_id(9061);
      result = tmp2Result2.guildEventLocationParser(locationFromEvent, true, obj8);
    }
    tmp7 = result;
  }
  items4[1] = tmp14(Text, obj6);
  return tmp10(tmp11, obj4);
};
export const GuildEventCardSimpleGuildInfo = function GuildEventCardSimpleGuildInfo(arg0) {
  let event;
  let items2;
  let items3;
  let obj5;
  let style;
  let textStyle;
  ({ event, style, textStyle } = arg0);
  const tmp = styles();
  const guild_id = event.guild_id;
  const items = [GuildStore];
  const items1 = [guild_id];
  const obj = guild_id(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guild_id), items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    const obj2 = { style: items2, children: items3 };
    items2 = [tmp.guildInfoContainer, style];
    const obj3 = { guild: stateFromStores, size: guild_id(5896).GuildIconSizes.XSMALL_20, style: tmp.guildIcon };
    const tmp10 = GuildIconDefault;
    items3 = [closure_22(tmp10, obj3), ];
    const obj4 = { style: tmp.guildInfo, children: closure_22(guild_id(4832).Text, obj5) };
    obj5 = { variant: "text-sm/semibold", style: textStyle, children: stateFromStores.name };
    items3[1] = closure_22(closure_6, obj4);
    tmp5 = closure_23(closure_6, obj2);
  }
  return tmp5;
};
export const GuildEventCardGuildInfo = function GuildEventCardGuildInfo(event) {
  let combined;
  let items6;
  let items7;
  let items8;
  event = event.event;
  let stateFromStores;
  const tmp = styles();
  const channel_id = event.channel_id;
  let guild_id = event.guild_id;
  const items = [ChannelStore];
  const items1 = [channel_id];
  const obj = channel_id(stateFromStores[26]);
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
  const items2 = [GuildStore];
  const items3 = [guild_id];
  const obj2 = channel_id(stateFromStores[26]);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildStore.getGuild(guild_id), items3);
  const items4 = [GuildMemberStore, AuthenticationStore];
  const items5 = [stateFromStores];
  const obj3 = channel_id(stateFromStores[26]);
  const stateFromStores2 = obj3.useStateFromStores(items4, () => {
    guild_id = undefined;
    const id = AuthenticationStore.getId();
    const isMember = GuildMemberStore.isMember;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return isMember(guild_id, id);
  }, items5);
  const tmp8 = guild_id(stateFromStores[55])(stateFromStores);
  if (null == stateFromStores1) {
    return null;
  } else {
    const tmp2Result = channel_id(stateFromStores[56]);
    const locationFromEvent = tmp2Result.getLocationFromEvent(event);
    let tmp13Result = null != stateFromStores || null != locationFromEvent;
    let tmp10 = tmp8;
    if (tmp8 == null) {
      let result = null;
      if (null != locationFromEvent) {
        const obj4 = { guildId: guild_id };
        const tmp2Result3 = channel_id(stateFromStores[54]);
        result = tmp2Result3.guildEventLocationParser(locationFromEvent, true, obj4);
      }
      tmp10 = result;
    }
    const tmp2Result4 = channel_id(stateFromStores[57]);
    const eventLocationIconSource = tmp2Result4.getEventLocationIconSource(event, stateFromStores, stateFromStores2);
    const obj5 = { style: tmp.guildInfoContainer, children: items6 };
    const obj6 = { guild: stateFromStores1, size: channel_id(stateFromStores[59]).GuildIconSizes.SMALL, style: tmp.guildIcon };
    const tmp7Result = guild_id(stateFromStores[59]);
    items6 = [closure_22(tmp7Result, obj6), ];
    const obj7 = { style: tmp.guildInfo, children: items7 };
    const obj8 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: stateFromStores1.name };
    items7 = [closure_22(tmp2(stateFromStores[52]).Text, obj8), ];
    if (tmp13Result) {
      const obj9 = { style: tmp.guildInfoChannelContainer, accessible: true, accessibilityLabel: combined, children: items8 };
      if (null != stateFromStores) {
        const obj10 = { channel: stateFromStores };
        combined = tmp7(tmp3[58])(obj10);
      } else if (null != locationFromEvent) {
        const intl = tmp2(tmp3[20]).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + intl.string(tmp2(tmp3[20]).t.gwSn4I) + ", " + locationFromEvent;
      }
      let tmp15Result = null != eventLocationIconSource;
      if (tmp15Result) {
        const obj11 = { source: eventLocationIconSource, size: channel_id(stateFromStores[45]).Icon.Sizes.EXTRA_SMALL, style: tmp.channelIcon, disableColor: true };
        const Icon = tmp2(tmp3[45]).Icon;
        tmp15Result = tmp15(Icon, obj11);
      }
      items8 = [tmp15Result, ];
      const obj12 = { style: tmp.guildInfoChannelText, variant: "text-xs/medium", color: "text-default", children: tmp10 };
      items8[1] = closure_22(channel_id(stateFromStores[52]).Text, obj12);
      tmp13Result = tmp13(tmp14, obj9);
    }
    items7[1] = tmp13Result;
    items6[1] = closure_23(closure_6, obj7);
    return closure_23(closure_6, obj5);
  }
};
