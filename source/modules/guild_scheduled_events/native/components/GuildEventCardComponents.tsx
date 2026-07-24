// Module ID: 8405
// Function ID: 66828
// Name: useEventRsvpState
// Dependencies: [5, 57, 31, 27, 1194, 1348, 1917, 1838, 3758, 1849, 6758, 1354, 653, 482, 33, 4130, 689, 8406, 8408, 7533, 1212, 8409, 5490, 3830, 12194, 4075, 566, 8446, 9008, 4082, 10234, 12227, 8390, 5048, 5737, 12228, 4471, 8388, 4561, 4341, 1327, 1450, 1392, 12226, 8400, 1273, 4646, 4066, 8395, 8396, 12229, 4660, 4126, 8505, 8495, 4320, 8393, 8493, 8494, 5513, 2]
// Exports: GuildEventCardGuildInfo, GuildEventCardHeader, GuildEventCardImageHeader, GuildEventCardMetaInfo, GuildEventCardSimpleGuildInfo, GuildEventIndicateInterestAction, GuildEventModeratorAction, GuildEventShareAction, GuildEventSimpleLocation

// Module 8405 (useEventRsvpState)
import closure_3 from "_isNativeReflectConstruct";
import getEventLocationIconSource from "getEventLocationIconSource";
import importAllResult from "useThrottledActionHandler";
import get_ActivityIndicator from "canManageResource";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_createForOfIteratorHelperLoose";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import { GuildScheduledEventEntityTypes as closure_18 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import ME from "ME";
import sum from "sum";
import jsxProd from "showTooManyUserGuildsAlert";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Fonts;
let closure_15;
let closure_16;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function useEventRsvpState(event, recurrenceId) {
  const _require = event;
  let closure_1 = recurrenceId;
  const items = [closure_17];
  const items1 = [event.id, recurrenceId];
  const items2 = [
    _require(566).useStateFromStores(items, () => outer1_17.isInterestedInEventRecurrence(event.id, closure_1), items1),
    () => {
      const result = event(outer1_2[21]).handleGuildScheduledEventRsvp(event.id, closure_1, event.guild_id);
    }
  ];
  return items2;
}
function usePrimaryActionButtonType(event, isConnected) {
  let channel_id;
  let importDefault;
  const _require = event;
  ({ guild_id: importDefault, channel_id } = event);
  const scheduled_start_time = event.scheduled_start_time;
  const items = [scheduled_start_time];
  const items1 = [closure_12];
  let stateFromStores = _require(channel_id[26]).useStateFromStores(items1, () => outer1_12.getGuild(closure_1));
  const obj = _require(channel_id[26]);
  const items2 = [closure_10];
  const items3 = [channel_id];
  const stateFromStores1 = _require(channel_id[26]).useStateFromStores(items2, () => outer1_10.getChannel(channel_id), items3);
  const obj2 = _require(channel_id[26]);
  if (null != stateFromStores1) {
    stateFromStores = stateFromStores1;
  }
  const canManageGuildEventResult = _require(channel_id[27]).useManageResourcePermissions(stateFromStores).canManageGuildEvent(event);
  const obj3 = _require(channel_id[27]);
  const items4 = [closure_12];
  if (obj4.useStateFromStores(items4, () => null != outer1_12.getGuild(event.guild_id))) {
    if (callback2(event)) {
      let RSVP = obj12.ENDED;
    } else if (callback3(event)) {
      if (event.entity_type !== constants.EXTERNAL) {
        if (!isConnected) {
          const JOIN = tmp10.JOIN;
        }
      }
    } else {
      if (importAllResult.useMemo(() => event(channel_id[32]).getEventTimeData(scheduled_start_time), items).withinStartWindow) {
        if (canManageGuildEventResult) {
          RSVP = obj12.START;
        }
      }
      RSVP = obj12.RSVP;
    }
  } else {
    return obj12.JOIN_GUILD;
  }
}
class GuildEventCardRSVPAction {
  constructor(arg0) {
    event = global.event;
    tmp = getEventLocationIconSource(useEventRsvpState(event, global.recurrenceId), 2);
    first = tmp[0];
    str = "secondary";
    if (first) {
      str = "tertiary";
    }
    tmp3 = closure_0;
    tmp4 = closure_2;
    if (first) {
      num2 = 29;
      BellIcon = require("CheckmarkLargeIcon").CheckmarkLargeIcon;
    } else {
      num = 30;
      BellIcon = require("BellIcon").BellIcon;
    }
    obj = { accessibilityRole: "togglebutton", accessibilityState: { checked: first } };
    tmp5 = require("useThrottledActionHandler");
    intl = require("getSystemLocale").intl;
    obj.accessibilityLabel = "" + intl.string(require("getSystemLocale").t.DlcqlU) + ", " + event.name;
    obj.variant = str;
    obj.icon = jsx(BellIcon, { size: "sm" });
    intl2 = require("getSystemLocale").intl;
    obj.text = intl2.string(require("getSystemLocale").t.DlcqlU);
    obj.onPress = tmp[1];
    obj.grow = true;
    return jsx(tmp5, obj);
  }
}
class GuildEventJoinAndRSVPAction {
  constructor(arg0) {
    event = global.event;
    recurrenceId = undefined;
    _handleJoinGuild = undefined;
    c3 = undefined;
    _handleJoinGuild = function _handleJoinGuild(closure_5, arg1) {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      return obj(...arguments);
    };
    tmp = _handleJoinGuild(useEventRsvpState(event, global.recurrenceId), 2);
    recurrenceId = tmp[0];
    _handleJoinGuild = tmp[1];
    tmp2 = _handleJoinGuild(closure_5.useState(false), 2);
    c3 = tmp2[1];
    obj = { loading: tmp2[0], variant: "active" };
    tmp3 = require("useThrottledActionHandler");
    intl = require("getSystemLocale").intl;
    obj.text = intl.string(require("getSystemLocale").t.VJlc0S);
    intl2 = require("getSystemLocale").intl;
    obj.accessibilityLabel = "" + intl2.string(require("getSystemLocale").t.VJlc0S) + ", " + event.name;
    obj.onPress = function handleJoinGuild() {
      return _handleJoinGuild(...arguments);
    };
    obj.grow = true;
    return jsx(tmp3, obj);
  }
}
class UserCountIconPill {
  constructor(arg0) {
    event = global.event;
    guild_id = undefined;
    tmp = require("useGuildScheduledEventUserCount");
    if (null != event) {
      guild_id = event.guild_id;
    }
    id = undefined;
    if (null != event) {
      id = event.id;
    }
    tmpResult = tmp(guild_id, id, global.recurrenceId);
    obj = {};
    intl = require("getSystemLocale").intl;
    obj.accessibilityLabel = "" + intl.formatToPlainString(require("getSystemLocale").t["+DLsD8"], { count: tmpResult }) + ", " + event.name;
    obj.IconComponent = require("GroupIcon").GroupIcon;
    obj.text = tmpResult.toLocaleString();
    return jsx(require("Button").IconPill, obj);
  }
}
class GuildEventCardTitle {
  constructor(arg0) {
    event = global.event;
    ({ style, textStyle, condensed, onPress } = global);
    obj = { accessibilityRole: "button" };
    tmp = isGuildEventEnded();
    tmp2 = jsx;
    tmp3 = Pressable;
    intl = require("getSystemLocale").intl;
    obj.accessibilityHint = intl.string(require("getSystemLocale").t.epxpiy);
    obj.accessibilityLabel = event.name;
    obj.onPress = onPress;
    items = [, ];
    items[0] = tmp.topicContainer;
    items[1] = style;
    obj.style = items;
    tmp4 = jsx;
    obj = { variant: "text-md/bold", color: "mobile-text-heading-primary" };
    obj.style = textStyle;
    num = undefined;
    if (condensed) {
      num = 1;
    }
    obj.lineClamp = num;
    obj.children = event.name;
    obj.children = tmp4(require("Text").Text, obj);
    return tmp2(tmp3, obj);
  }
}
class GuildEventCardDescription {
  constructor(arg0) {
    event = global.event;
    description = event.description;
    ({ style, textStyle, numberOfLines, condensed } = global);
    tmp2 = null;
    if (null != description) {
      num = 0;
      tmp2 = null;
      if (description.length > 0) {
        tmp2 = null;
        if (!condensed) {
          tmp2 = null;
          if (null != description) {
            tmp3 = jsx;
            tmp4 = View;
            obj = {};
            items = [, ];
            items[0] = tmp.detailsContainer;
            items[1] = style;
            obj.style = items;
            tmp5 = jsx;
            tmp6 = closure_0;
            tmp7 = closure_2;
            num2 = 52;
            obj = { variant: "text-md/medium", color: "text-subtle" };
            obj.style = textStyle;
            obj.lineClamp = numberOfLines;
            num3 = 54;
            obj3 = require("guildEventDetailsParser");
            obj1 = { guildId: null, allowLinks: true, allowHeading: true, allowList: true };
            obj1.guildId = event.guild_id;
            flag = true;
            obj.children = obj3.guildEventDetailsParser(description, true, obj1);
            obj.children = jsx(require("Text").Text, obj);
            tmp2 = jsx(View, obj);
          }
        }
      }
    }
    return tmp2;
  }
}
({ View: closure_6, Image: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
({ isGuildEventEnded: closure_15, isGuildScheduledEventActive: closure_16 } = _isNativeReflectConstruct);
({ Permissions: closure_19, JoinGuildSources: closure_20 } = ME);
({ Fonts, NOOP: closure_21 } = sum);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
obj.imageHeaderContainer = obj;
obj.imageHeaderBanner = { width: "100%", aspectRatio: 2.5 };
obj.headerContainer = { flexDirection: "row", alignItems: "center" };
obj.dateContainer = { flexDirection: "row", alignItems: "center", flex: 1 };
_createForOfIteratorHelperLoose = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.dateIcon = _createForOfIteratorHelperLoose;
let obj2 = { paddingHorizontal: 4, paddingVertical: 2, marginEnd: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
obj.newBadge = obj2;
obj.topicContainer = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj3 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.detailsContainer = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj5 = { flexDirection: "row", alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.channelContainer = obj5;
let obj4 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.channelIcon = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj7 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18, flexShrink: 1 };
obj.channelText = obj7;
let obj8 = { flexDirection: "row", alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.guildInfoContainer = obj8;
let obj6 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.guildIcon = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.guildInfo = { flexDirection: "column" };
obj.guildInfoChannelContainer = { flexDirection: "row", alignItems: "center" };
let obj9 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.guildInfoChannelText = { fontFamily: Fonts.PRIMARY_MEDIUM, color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, fontSize: 12, lineHeight: 16 };
let obj10 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, fontSize: 12, lineHeight: 16 };
obj.creatorAvatar = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
const styles = _createForOfIteratorHelperLoose.createStyles(obj);
let obj12 = { RSVP: 0, [0]: "RSVP", JOIN: 1, [1]: "JOIN", START: 2, [2]: "START", STARTED: 3, [3]: "STARTED", CONNECTED: 4, [4]: "CONNECTED", END: 5, [5]: "END", ENDED: 6, [6]: "ENDED", JOIN_GUILD: 7, [7]: "JOIN_GUILD" };
let obj11 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
const memoResult = importAllResult.memo(function GuildEventCardPrimaryAction(event) {
  let c3;
  let channel_id;
  let importDefault;
  let recurrenceId;
  event = event.event;
  ({ onCloseAction: importDefault, recurrenceId } = event);
  c3 = undefined;
  let closure_5;
  let closure_6;
  function handleListenIn() {
    if (null != id) {
      if (event.entity_type === outer1_18.STAGE_INSTANCE) {
        callback2(c3, id.id);
      }
      event(recurrenceId[39]).openGuildVoiceModal(id);
      if (null != callback) {
        callback();
      }
      const obj = event(recurrenceId[39]);
    }
  }
  ({ guild_id: c3, channel_id } = event);
  let obj = event(recurrenceId[26]);
  const items = [closure_10];
  const items1 = [channel_id];
  closure_5 = obj.useStateFromStores(items, () => outer1_10.getChannel(channel_id), items1);
  closure_6 = channel_id(importDefault(recurrenceId[35])(), 2)[1];
  const tmp = usePrimaryActionButtonType(event, event.isConnected);
  let obj1 = event(recurrenceId[26]);
  const items2 = [closure_13];
  const stateFromStores = obj1.useStateFromStores(items2, () => outer1_13.can(outer1_19.CONNECT, closure_5));
  if (obj12.ENDED === tmp) {
    obj = { variant: "secondary", text: null, accessibilityLabel: null, grow: true, disabled: true };
    const intl10 = event(recurrenceId[20]).intl;
    obj.text = intl10.string(event(recurrenceId[20]).t.Pj7Xrv);
    const intl11 = event(recurrenceId[20]).intl;
    const _HermesInternal6 = HermesInternal;
    obj.accessibilityLabel = "" + intl11.string(event(recurrenceId[20]).t.Pj7Xrv) + ", " + event.name;
    obj.onPress = closure_21;
    return callback4(importDefault(recurrenceId[31]), obj);
  } else if (obj12.JOIN === tmp) {
    const intl9 = event(recurrenceId[20]).intl;
    const string = intl9.string;
    const t = event(recurrenceId[20]).t;
    if (stateFromStores) {
      let stringResult = string(t.ZYO5OK);
    } else {
      stringResult = string(t.TVBCKZ);
    }
    obj = { variant: "active", text: stringResult };
    const _HermesInternal5 = HermesInternal;
    obj.accessibilityLabel = "" + stringResult + ", " + event.name;
    obj.onPress = handleListenIn;
    obj.disabled = !stateFromStores;
    obj.grow = true;
    return callback4(importDefault(recurrenceId[31]), obj);
  } else if (obj12.CONNECTED === tmp) {
    obj1 = { variant: "active" };
    const intl7 = event(recurrenceId[20]).intl;
    obj1.text = intl7.string(event(recurrenceId[20]).t.aW2YlJ);
    const intl8 = event(recurrenceId[20]).intl;
    const _HermesInternal4 = HermesInternal;
    obj1.accessibilityLabel = "" + intl8.string(event(recurrenceId[20]).t.aW2YlJ) + ", " + event.name;
    obj1.onPress = handleListenIn;
    obj1.grow = true;
    return callback4(importDefault(recurrenceId[31]), obj1);
  } else if (obj12.RSVP === tmp) {
    let obj2 = { event, recurrenceId };
    return callback4(GuildEventCardRSVPAction, obj2);
  } else if (obj12.START === tmp) {
    const obj3 = { variant: "active" };
    const intl5 = event(recurrenceId[20]).intl;
    obj3.text = intl5.string(event(recurrenceId[20]).t.cK1GGY);
    const intl6 = event(recurrenceId[20]).intl;
    const _HermesInternal3 = HermesInternal;
    obj3.accessibilityLabel = "" + intl6.string(event(recurrenceId[20]).t.cK1GGY) + ", " + event.name;
    obj3.onPress = function handleStartEvent() {
      if (null != callback) {
        callback();
      }
      const result = event(recurrenceId[21]).openStartGuildEventModal(event, recurrenceId);
    };
    obj3.grow = true;
    return callback4(importDefault(recurrenceId[31]), obj3);
  } else if (obj12.STARTED === tmp) {
    const obj4 = { variant: "secondary", text: null, accessibilityLabel: null, grow: true, disabled: true };
    let intl3 = event(recurrenceId[20]).intl;
    obj4.text = intl3.string(event(recurrenceId[20]).t.Yz0V6O);
    let intl4 = event(recurrenceId[20]).intl;
    const _HermesInternal2 = HermesInternal;
    obj4.accessibilityLabel = "" + intl4.string(event(recurrenceId[20]).t.Yz0V6O) + ", " + event.name;
    obj4.onPress = closure_21;
    return callback4(importDefault(recurrenceId[31]), obj4);
  } else if (obj12.END === tmp) {
    const obj5 = { variant: "secondary" };
    let intl = event(recurrenceId[20]).intl;
    obj5.text = intl.string(event(recurrenceId[20]).t.qaYzPA);
    let intl2 = event(recurrenceId[20]).intl;
    const _HermesInternal = HermesInternal;
    obj5.accessibilityLabel = "" + intl2.string(event(recurrenceId[20]).t.qaYzPA) + ", " + event.name;
    obj5.onPress = function handleEndEvent() {
      let obj = outer1_1(recurrenceId[36]);
      obj = {};
      const intl = event(recurrenceId[20]).intl;
      obj.title = intl.string(event(recurrenceId[20]).t.qaYzPA);
      const intl2 = event(recurrenceId[20]).intl;
      obj.body = intl2.string(event(recurrenceId[20]).t.bnDQ7E);
      const intl3 = event(recurrenceId[20]).intl;
      obj.cancelText = intl3.string(event(recurrenceId[20]).t.gm1Vej);
      const intl4 = event(recurrenceId[20]).intl;
      obj.confirmText = intl4.string(event(recurrenceId[20]).t.p89ACt);
      obj.onConfirm = function onConfirm() {
        return outer2_1(recurrenceId[37]).endEvent(outer1_0.id, outer1_0.guild_id);
      };
      obj.confirmColor = outer1_1(recurrenceId[38]).Colors.RED;
      obj.show(obj);
    };
    obj5.grow = true;
    return callback4(importDefault(recurrenceId[31]), obj5);
  } else if (obj12.JOIN_GUILD === tmp) {
    const obj6 = { event, recurrenceId };
    return callback4(GuildEventJoinAndRSVPAction, obj6);
  } else {
    obj2 = event(recurrenceId[40]);
    obj2.assertNever(tmp);
  }
});
let result = require("result").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventCardComponents.tsx");

export const useGuildEventCardStyles = styles;
export const GuildEventShareAction = function GuildEventShareAction(event) {
  event = event.event;
  const tmp2 = importDefault(8406)(event);
  importDefault = tmp2;
  let obj = event(8408);
  obj = { guildId: event.guild_id, guildEventId: event.id };
  const dependencyMap = obj.SHARE_EVENT_DETAILS_LINK(obj);
  obj = {};
  const intl = event(1212).intl;
  obj.accessibilityLabel = "" + intl.string(event(1212).t.RDE0Sc) + ", " + event.name;
  obj.onPress = function onPress() {
    if (closure_1) {
      let tmpResult = tmp(tmp2[21]);
      tmpResult.openShareEvent(event);
    } else {
      tmpResult = tmp(tmp2[22]);
      tmpResult.copy(closure_2);
      tmp(tmp2[23]).presentLinkCopied();
      const tmpResult1 = tmp(tmp2[23]);
    }
  };
  if (tmp2) {
    let tmp5 = 12194;
  } else {
    tmp5 = 4075;
  }
  obj.icon = importDefault(tmp5);
  obj.variant = "secondary";
  return closure_22(event(7533).IconButton, obj);
};
export const GuildEventModeratorAction = function GuildEventModeratorAction(event) {
  event = event.event;
  const recurrenceId = event.recurrenceId;
  let closure_3;
  const channel_id = event.channel_id;
  let obj = event(channel_id[26]);
  const items = [closure_12];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_12.getGuild(event.guild_id));
  const items1 = [closure_10];
  const items2 = [channel_id];
  const stateFromStores1 = event(channel_id[26]).useStateFromStores(items1, () => outer1_10.getChannel(channel_id), items2);
  const obj2 = event(channel_id[26]);
  if (null != stateFromStores1) {
    stateFromStores = stateFromStores1;
  }
  closure_3 = event(channel_id[27]).useManageResourcePermissions(stateFromStores).canManageGuildEvent(event);
  obj = {};
  const intl = event(channel_id[20]).intl;
  obj.accessibilityLabel = "" + intl.string(event(channel_id[20]).t.HIgA5a) + ", " + event.name;
  obj.onPress = function onPress() {
    return event(channel_id[21]).showGuildEventModeratorActionSheet(event, closure_3, recurrenceId);
  };
  obj.icon = recurrenceId(channel_id[28]);
  obj.variant = "secondary";
  return callback4(event(channel_id[19]).IconButton, obj);
};
export { useEventRsvpState };
export const GuildEventIndicateInterestAction = function GuildEventIndicateInterestAction(event) {
  event = event.event;
  const tmp = callback(useEventRsvpState(event, null), 2);
  const first = tmp[0];
  let str = "secondary";
  if (first) {
    str = "tertiary";
  }
  if (first) {
    let BellIcon = tmp3(4082).CheckmarkLargeIcon;
  } else {
    BellIcon = tmp3(10234).BellIcon;
  }
  const obj = { accessibilityRole: "togglebutton", accessibilityState: { checked: first } };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = "" + intl.string(require(1212) /* getSystemLocale */.t.DlcqlU) + ", " + event.name;
  obj.variant = str;
  obj.icon = callback4(BellIcon, { size: "sm" });
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl2.string(require(1212) /* getSystemLocale */.t.DlcqlU);
  obj.onPress = tmp[1];
  obj.grow = true;
  return callback4(importDefault(12227), obj);
};
export const PrimaryActionType = obj12;
export { usePrimaryActionButtonType };
export { GuildEventCardRSVPAction };
export { GuildEventJoinAndRSVPAction };
export const GuildEventCardPrimaryAction = memoResult;
export const GuildEventCardImageHeader = function GuildEventCardImageHeader(event) {
  event = event.event;
  let tmp = styles();
  let width = importDefault(1450)().width;
  const tmp2 = callback(importAllResult.useState(0), 2);
  const first = tmp2[0];
  const _require = tmp2[1];
  if (null == event.image) {
    return null;
  } else {
    if (first > 0) {
      width = first;
    }
    let obj = _require(1392);
    obj = { style: tmp.imageHeaderContainer, onLayout: tmp4 };
    obj = { style: tmp.imageHeaderBanner };
    obj.source = obj.makeSource(importDefault(12226)(event, width));
    obj.resizeMode = "cover";
    obj.children = callback4(closure_7, obj);
    return callback4(closure_6, obj);
  }
};
export { UserCountIconPill };
export const GuildEventCardHeader = function GuildEventCardHeader(event) {
  let recurrenceId;
  let shouldChangeTextColor;
  let showUserCount;
  let text;
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
  let importDefault;
  let dependencyMap;
  let color;
  shouldChangeTextColor = undefined;
  const tmp = styles();
  let id;
  let tmp2 = importDefault(4066)();
  if (null != event) {
    id = event.id;
  }
  let obj = importDefault(8395)(recurrenceId, id);
  if (null == obj) {
    obj = {};
  }
  const is_canceled = obj.is_canceled;
  const tmp6 = importDefault(8396)(event, recurrenceId);
  let toISOStringResult;
  if (null != tmp6) {
    const startTime = tmp6.startTime;
    toISOStringResult = startTime.toISOString();
  }
  importDefault = toISOStringResult;
  let tmp8;
  if (flag) {
    let toISOStringResult1;
    if (null != tmp6) {
      const endTime = tmp6.endTime;
      if (null != endTime) {
        toISOStringResult1 = endTime.toISOString();
      }
    }
    tmp8 = toISOStringResult1;
  }
  dependencyMap = tmp8;
  const items = [toISOStringResult, tmp8];
  const memo = importAllResult.useMemo(() => event(_undefined[32]).getEventTimeData(c1, _undefined), items);
  let obj2 = event(12229);
  obj = { eventTimeData: memo, isStage: event.entity_type === constants.STAGE_INSTANCE, theme: tmp2, event, isCanceled: undefined !== is_canceled && is_canceled, recurrenceId };
  const guildScheduledEventHeaderProps = obj2.getGuildScheduledEventHeaderProps(obj);
  color = guildScheduledEventHeaderProps.color;
  ({ text, shouldChangeTextColor } = guildScheduledEventHeaderProps);
  const endDateTimeString = memo.endDateTimeString;
  let tmp12 = null;
  if (showUserCount) {
    const obj1 = { event, recurrenceId };
    const tmp15 = callback4(UserCountIconPill, obj1);
    let tmp16 = tmp15;
    if (!flag2) {
      obj2 = {
        accessibilityRole: "button",
        onPress: function handleOpenRSVPList() {

            },
        children: tmp15
      };
      tmp16 = callback4(event(4660).PressableOpacity, obj2);
    }
    tmp12 = tmp16;
  }
  let obj6 = event(566);
  const items1 = [closure_14];
  const items2 = [event];
  const stateFromStores = obj6.useStateFromStores(items1, () => outer1_14.getUser(event.creator_id), items2);
  let tmp21 = null != endDateTimeString;
  if (tmp21) {
    tmp21 = "" !== endDateTimeString;
  }
  let formatResult = text;
  if (tmp21) {
    const intl = event(1212).intl;
    const obj3 = {
      start: text,
      startHook(children) {
          let obj = { variant: "text-sm/semibold", color: "text-subtle" };
          let tmp2 = shouldChangeTextColor;
          if (shouldChangeTextColor) {
            obj = { color };
            tmp2 = obj;
          }
          obj.style = tmp2;
          obj.children = children;
          return outer1_22(event(_undefined[52]).Text, obj);
        },
      end: endDateTimeString
    };
    formatResult = intl.format(event(1212).t.vHYgJW, obj3);
  }
  const obj4 = { style: items3 };
  items3 = [tmp.headerContainer, event.style];
  if (flag4) {
    const obj5 = { containerStyle: tmp.newBadge, variant: "text-xs/bold" };
    let tmp27Result = tmp27(tmp28(1273).NewTag, obj5);
  } else {
    obj6 = { size: "sm", color, style: tmp.dateIcon };
    tmp27Result = tmp27(tmp28(8505).CalendarIcon, obj6);
  }
  const items4 = [tmp27Result, , , ];
  const obj7 = { style: tmp.dateContainer };
  if (tmp21) {
    const obj8 = { variant: "text-sm/semibold", color: "text-default", children: formatResult };
    let obj9 = obj8;
  } else {
    obj9 = { variant: "text-sm/semibold" };
    let str6 = "text-subtle";
    if (flag5) {
      str6 = "text-strong";
    }
    obj9.color = str6;
    if (shouldChangeTextColor) {
      const obj10 = { color };
      shouldChangeTextColor = obj10;
    }
    obj9.style = shouldChangeTextColor;
    obj9.children = formatResult;
  }
  obj7.children = callback4(event(4126).Text, obj9);
  items4[1] = callback4(closure_6, obj7);
  if (flag3) {
    flag3 = null != stateFromStores;
  }
  if (flag3) {
    const obj11 = { accessible: true };
    const intl2 = event(1212).intl;
    const obj12 = { username: stateFromStores.username };
    const _HermesInternal = HermesInternal;
    obj11.accessibilityLabel = "" + intl2.formatToPlainString(event(1212).t["+3iypQ"], obj12) + ", " + event.name;
    obj11.user = stateFromStores;
    obj11.guildId = event.guild_id;
    obj11.size = event(1273).AvatarSizes.XSMALL_20;
    obj11.style = tmp.creatorAvatar;
    flag3 = callback4(event(1273).Avatar, obj11);
  }
  items4[2] = flag3;
  items4[3] = tmp12;
  obj4.children = items4;
  return closure_23(closure_6, obj4);
};
export { GuildEventCardTitle };
export { GuildEventCardDescription };
export const GuildEventCardMetaInfo = function GuildEventCardMetaInfo(textStyle) {
  let condensed;
  let descriptionContainerStyle;
  let descriptionStyle;
  let event;
  ({ event, condensed } = textStyle);
  let obj = {};
  obj = { event, textStyle: textStyle.titleStyle, style: textStyle.titleContainerStyle, condensed, onPress: textStyle.onTitlePress };
  ({ descriptionStyle, descriptionContainerStyle } = textStyle);
  const items = [callback4(GuildEventCardTitle, obj), callback4(GuildEventCardDescription, { event, textStyle: descriptionStyle, style: descriptionContainerStyle, condensed, numberOfLines: 3 })];
  obj.children = items;
  return callback5(closure_24, obj);
};
export const GuildEventSimpleLocation = function GuildEventSimpleLocation(event) {
  event = event.event;
  const tmp = styles();
  const channel_id = event.channel_id;
  let obj = channel_id(566);
  const items = [closure_10];
  const items1 = [channel_id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getChannel(channel_id), items1);
  let obj1 = channel_id(566);
  const items2 = [closure_11, closure_9];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let guild_id;
    const id = outer1_9.getId();
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return outer1_11.isMember(guild_id, id);
  }, items3);
  const tmp4 = stateFromStores(4320)(stateFromStores);
  let obj2 = channel_id(8393);
  const locationFromEvent = obj2.getLocationFromEvent(event);
  if (null == stateFromStores) {
    if (null == locationFromEvent) {
      return null;
    }
  }
  let tmp6 = locationFromEvent;
  if (null != tmp4) {
    tmp6 = tmp4;
  }
  let obj3 = channel_id(8493);
  const eventLocationIconComponent = obj3.getEventLocationIconComponent(event, stateFromStores, stateFromStores1);
  obj = { style: tmp.channelContainer };
  let tmp10 = null != eventLocationIconComponent;
  if (tmp10) {
    obj = { size: "sm", style: tmp.channelIcon };
    tmp10 = callback4(eventLocationIconComponent, obj);
  }
  const items4 = [tmp10, ];
  obj1 = { style: tmp.channelText };
  if (null != stateFromStores) {
    obj2 = { channel: stateFromStores };
    let combined = stateFromStores(8494)(obj2);
  } else if (null != locationFromEvent) {
    const intl = channel_id(1212).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl.string(channel_id(1212).t.gwSn4I) + ", " + locationFromEvent;
  }
  obj1.accessibilityLabel = combined;
  obj1.variant = "text-sm/medium";
  obj1.color = "text-default";
  let result = null;
  if (null != tmp6) {
    obj3 = { guildId: event.guild_id };
    result = channel_id(8495).guildEventDetailsParser(tmp6, true, obj3);
    const obj9 = channel_id(8495);
  }
  obj1.children = result;
  items4[1] = callback4(channel_id(4126).Text, obj1);
  obj.children = items4;
  return closure_23(closure_6, obj);
};
export const GuildEventCardSimpleGuildInfo = function GuildEventCardSimpleGuildInfo(arg0) {
  let event;
  let style;
  let textStyle;
  ({ event, style, textStyle } = arg0);
  const tmp = styles();
  const guild_id = event.guild_id;
  let obj = guild_id(566);
  const items = [closure_12];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_12.getGuild(guild_id), items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = {};
    const items2 = [tmp.guildInfoContainer, style];
    obj.style = items2;
    obj = { guild: stateFromStores, size: guild_id(5513).GuildIconSizes.XSMALL_20, style: tmp.guildIcon };
    const items3 = [callback4(importDefault(5513), obj), ];
    const obj1 = { style: tmp.guildInfo };
    const obj2 = { variant: "text-sm/semibold", style: textStyle, children: stateFromStores.name };
    obj1.children = callback4(guild_id(4126).Text, obj2);
    items3[1] = callback4(closure_6, obj1);
    obj.children = items3;
    tmp3 = callback5(closure_6, obj);
    const tmp9 = importDefault(5513);
  }
  return tmp3;
};
export const GuildEventCardGuildInfo = function GuildEventCardGuildInfo(event) {
  event = event.event;
  const tmp = styles();
  const channel_id = event.channel_id;
  let guild_id = event.guild_id;
  let obj = channel_id(stateFromStores[26]);
  const items = [closure_10];
  const items1 = [channel_id];
  stateFromStores = obj.useStateFromStores(items, () => outer1_10.getChannel(channel_id), items1);
  let obj1 = channel_id(stateFromStores[26]);
  const items2 = [closure_12];
  const items3 = [guild_id];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_12.getGuild(guild_id), items3);
  let obj2 = channel_id(stateFromStores[26]);
  const items4 = [closure_11, closure_9];
  const items5 = [stateFromStores];
  const stateFromStores2 = obj2.useStateFromStores(items4, () => {
    let guild_id;
    const id = outer1_9.getId();
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return outer1_11.isMember(guild_id, id);
  }, items5);
  const tmp5 = guild_id(stateFromStores[55])(stateFromStores);
  if (null == stateFromStores1) {
    return null;
  } else {
    const locationFromEvent = channel_id(stateFromStores[56]).getLocationFromEvent(event);
    let tmp18Result = null != stateFromStores || null != locationFromEvent;
    let tmp7 = locationFromEvent;
    if (null != tmp5) {
      tmp7 = tmp5;
    }
    let obj3 = channel_id(stateFromStores[57]);
    const eventLocationIconSource = obj3.getEventLocationIconSource(event, stateFromStores, stateFromStores2);
    obj = { style: tmp.guildInfoContainer };
    obj = { guild: stateFromStores1 };
    const obj13 = channel_id(stateFromStores[56]);
    const tmp12 = closure_6;
    obj.size = channel_id(stateFromStores[59]).GuildIconSizes.SMALL;
    obj.style = tmp.guildIcon;
    const items6 = [callback4(guild_id(stateFromStores[59]), obj), ];
    obj1 = { style: tmp.guildInfo };
    obj2 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: stateFromStores1.name };
    const items7 = [callback4(channel_id(stateFromStores[52]).Text, obj2), ];
    if (tmp18Result) {
      obj3 = { style: tmp.guildInfoChannelContainer, accessible: true };
      if (null != stateFromStores) {
        const obj4 = { channel: stateFromStores };
        let combined = guild_id(stateFromStores[58])(obj4);
      } else if (null != locationFromEvent) {
        const intl = channel_id(stateFromStores[20]).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + intl.string(channel_id(stateFromStores[20]).t.gwSn4I) + ", " + locationFromEvent;
      }
      obj3.accessibilityLabel = combined;
      let tmp26 = null != eventLocationIconSource;
      if (tmp26) {
        const obj5 = { source: eventLocationIconSource, size: channel_id(stateFromStores[45]).Icon.Sizes.EXTRA_SMALL, style: tmp.channelIcon, disableColor: true };
        tmp26 = callback4(channel_id(stateFromStores[45]).Icon, obj5);
      }
      const items8 = [tmp26, ];
      const obj6 = { style: tmp.guildInfoChannelText, variant: "text-xs/medium", color: "text-default", children: tmp7 };
      items8[1] = callback4(channel_id(stateFromStores[52]).Text, obj6);
      obj3.children = items8;
      tmp18Result = closure_23(closure_6, obj3);
      const tmp18 = closure_23;
      const tmp19 = closure_6;
    }
    items7[1] = tmp18Result;
    obj1.children = items7;
    items6[1] = closure_23(closure_6, obj1);
    obj.children = items6;
    return closure_23(tmp12, obj);
  }
};
