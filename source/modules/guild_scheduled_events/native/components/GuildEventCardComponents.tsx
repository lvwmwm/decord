// Module ID: 8354
// Function ID: 66540
// Name: useEventRsvpState
// Dependencies: []
// Exports: GuildEventCardGuildInfo, GuildEventCardHeader, GuildEventCardImageHeader, GuildEventCardMetaInfo, GuildEventCardSimpleGuildInfo, GuildEventIndicateInterestAction, GuildEventModeratorAction, GuildEventShareAction, GuildEventSimpleLocation

// Module 8354 (useEventRsvpState)
let Fonts;
function useEventRsvpState(event, recurrenceId) {
  recurrenceId = event;
  const importDefault = recurrenceId;
  const items = [closure_17];
  const items1 = [event.id, recurrenceId];
  const items2 = [
    recurrenceId(dependencyMap[26]).useStateFromStores(items, () => interestedInEventRecurrence.isInterestedInEventRecurrence(arg0.id, arg1), items1),
    (self) => {
      const result = self(closure_2[21]).handleGuildScheduledEventRsvp(self.id, arg1, self.guild_id);
    }
  ];
  return items2;
}
function usePrimaryActionButtonType(event, isConnected) {
  let channel_id;
  isConnected = event;
  ({ guild_id: closure_1, channel_id } = event);
  const dependencyMap = channel_id;
  const scheduled_start_time = event.scheduled_start_time;
  let closure_3 = scheduled_start_time;
  const items = [scheduled_start_time];
  const items1 = [closure_12];
  let stateFromStores = isConnected(dependencyMap[26]).useStateFromStores(items1, () => store.getGuild(closure_1));
  const obj = isConnected(dependencyMap[26]);
  const items2 = [closure_10];
  const items3 = [channel_id];
  const stateFromStores1 = isConnected(dependencyMap[26]).useStateFromStores(items2, () => channel.getChannel(channel_id), items3);
  const obj2 = isConnected(dependencyMap[26]);
  if (null != stateFromStores1) {
    stateFromStores = stateFromStores1;
  }
  const canManageGuildEventResult = isConnected(dependencyMap[27]).useManageResourcePermissions(stateFromStores).canManageGuildEvent(event);
  const obj3 = isConnected(dependencyMap[27]);
  const items4 = [closure_12];
  if (obj4.useStateFromStores(items4, () => null != store.getGuild(arg0.guild_id))) {
    if (callback3(event)) {
      let RSVP = obj12.ENDED;
    } else if (callback4(event)) {
      if (event.entity_type !== constants.EXTERNAL) {
        if (!isConnected) {
          const JOIN = tmp10.JOIN;
        }
      }
    } else {
      if (importAllResult.useMemo(() => arg0(channel_id[32]).getEventTimeData(scheduled_start_time), items).withinStartWindow) {
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
    tmp = closure_4(useEventRsvpState(event, global.recurrenceId), 2);
    first = tmp[0];
    str = "secondary";
    if (first) {
      str = "tertiary";
    }
    tmp3 = arg1;
    tmp4 = dependencyMap;
    if (first) {
      num2 = 29;
      BellIcon = tmp3(tmp4[29]).CheckmarkLargeIcon;
    } else {
      num = 30;
      BellIcon = tmp3(tmp4[30]).BellIcon;
    }
    obj = { accessibilityRole: "togglebutton", accessibilityState: { checked: first } };
    tmp5 = importDefault(dependencyMap[31]);
    intl = arg1(dependencyMap[20]).intl;
    obj.accessibilityLabel = "" + intl.string(arg1(dependencyMap[20]).t.DlcqlU) + ", " + event.name;
    obj.variant = str;
    obj.icon = jsx(BellIcon, { size: "sm" });
    intl2 = arg1(dependencyMap[20]).intl;
    obj.text = intl2.string(arg1(dependencyMap[20]).t.DlcqlU);
    obj.onPress = tmp[1];
    obj.grow = true;
    return jsx(tmp5, obj);
  }
}
class GuildEventJoinAndRSVPAction {
  constructor(arg0) {
    event = global.event;
    arg1 = event;
    importDefault = undefined;
    _handleJoinGuild = undefined;
    closure_3 = undefined;
    _handleJoinGuild = function _handleJoinGuild(importAllResult, arg1) {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _handleJoinGuild = obj;
      return obj(...arguments);
    };
    tmp = _handleJoinGuild(useEventRsvpState(event, global.recurrenceId), 2);
    importDefault = tmp[0];
    _handleJoinGuild = tmp[1];
    tmp2 = _handleJoinGuild(closure_5.useState(false), 2);
    closure_3 = tmp2[1];
    obj = { loading: tmp2[0], variant: "active" };
    tmp3 = importDefault(_handleJoinGuild[31]);
    intl = arg1(_handleJoinGuild[20]).intl;
    obj.text = intl.string(arg1(_handleJoinGuild[20]).t.VJlc0S);
    intl2 = arg1(_handleJoinGuild[20]).intl;
    obj.accessibilityLabel = "" + intl2.string(arg1(_handleJoinGuild[20]).t.VJlc0S) + ", " + event.name;
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
    tmp = importDefault(dependencyMap[44]);
    if (null != event) {
      guild_id = event.guild_id;
    }
    id = undefined;
    if (null != event) {
      id = event.id;
    }
    tmpResult = tmp(guild_id, id, global.recurrenceId);
    obj = {};
    intl = arg1(dependencyMap[20]).intl;
    obj.accessibilityLabel = "" + intl.formatToPlainString(arg1(dependencyMap[20]).t.+DLsD8, { count: tmpResult }) + ", " + event.name;
    obj.IconComponent = arg1(dependencyMap[46]).GroupIcon;
    obj.text = tmpResult.toLocaleString();
    return jsx(arg1(dependencyMap[45]).IconPill, obj);
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
    intl = arg1(dependencyMap[20]).intl;
    obj.accessibilityHint = intl.string(arg1(dependencyMap[20]).t.epxpiy);
    obj.accessibilityLabel = event.name;
    obj.onPress = onPress;
    items = [, ];
    items[0] = tmp.topicContainer;
    items[1] = style;
    obj.style = items;
    tmp4 = jsx;
    obj = { style: textStyle };
    num = undefined;
    if (condensed) {
      num = 1;
    }
    obj.lineClamp = num;
    obj.children = event.name;
    obj.children = tmp4(arg1(dependencyMap[52]).Text, obj);
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
            tmp6 = arg1;
            tmp7 = dependencyMap;
            num2 = 52;
            obj = {};
            obj.style = textStyle;
            obj.lineClamp = numberOfLines;
            num3 = 54;
            obj3 = arg1(dependencyMap[54]);
            obj1 = { "Bool(true)": true, "Null": true, "Null": true, "Null": true };
            obj1.guildId = event.guild_id;
            flag = true;
            obj.children = obj3.guildEventDetailsParser(description, true, obj1);
            obj.children = jsx(arg1(dependencyMap[52]).Text, obj);
            tmp2 = jsx(View, obj);
          }
        }
      }
    }
    return tmp2;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ View: closure_6, Image: closure_7, Pressable: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
const tmp2 = arg1(dependencyMap[3]);
({ isGuildEventEnded: closure_15, isGuildScheduledEventActive: closure_16 } = arg1(dependencyMap[10]));
let closure_17 = importDefault(dependencyMap[10]);
let closure_18 = arg1(dependencyMap[11]).GuildScheduledEventEntityTypes;
const tmp3 = arg1(dependencyMap[10]);
({ Permissions: closure_19, JoinGuildSources: closure_20 } = arg1(dependencyMap[12]));
const tmp4 = arg1(dependencyMap[12]);
({ Fonts, NOOP: closure_21 } = arg1(dependencyMap[13]));
const tmp5 = arg1(dependencyMap[13]);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = arg1(dependencyMap[14]));
let obj1 = arg1(dependencyMap[15]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_BASE_LOWEST };
obj.imageHeaderContainer = obj;
obj.imageHeaderBanner = {};
obj.headerContainer = {};
obj.dateContainer = {};
obj1 = { marginRight: importDefault(dependencyMap[16]).space.PX_8 };
obj.dateIcon = obj1;
const obj2 = { "Bool(false)": 1716649986, "Bool(false)": 28824941, "Bool(false)": 1095374929, backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_BRAND };
obj.newBadge = obj2;
const tmp6 = arg1(dependencyMap[14]);
obj.topicContainer = { paddingTop: importDefault(dependencyMap[16]).space.PX_8 };
const obj3 = { paddingTop: importDefault(dependencyMap[16]).space.PX_8 };
obj.detailsContainer = { paddingTop: importDefault(dependencyMap[16]).space.PX_8 };
const obj4 = { paddingTop: importDefault(dependencyMap[16]).space.PX_8 };
obj.channelContainer = { paddingTop: importDefault(dependencyMap[16]).space.PX_8 };
const obj5 = { paddingTop: importDefault(dependencyMap[16]).space.PX_8 };
obj.channelIcon = { marginRight: importDefault(dependencyMap[16]).space.PX_8 };
const obj6 = { marginRight: importDefault(dependencyMap[16]).space.PX_8 };
obj.channelText = { fontFamily: Fonts.PRIMARY_MEDIUM, color: importDefault(dependencyMap[16]).colors.TEXT_SUBTLE };
const obj7 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: importDefault(dependencyMap[16]).colors.TEXT_SUBTLE };
obj.guildInfoContainer = { paddingTop: importDefault(dependencyMap[16]).space.PX_8 };
const obj8 = { paddingTop: importDefault(dependencyMap[16]).space.PX_8 };
obj.guildIcon = { marginRight: importDefault(dependencyMap[16]).space.PX_8, borderRadius: importDefault(dependencyMap[16]).radii.sm };
obj.guildInfo = { flexDirection: "column" };
obj.guildInfoChannelContainer = {};
const obj9 = { marginRight: importDefault(dependencyMap[16]).space.PX_8, borderRadius: importDefault(dependencyMap[16]).radii.sm };
obj.guildInfoChannelText = { fontFamily: Fonts.PRIMARY_MEDIUM, color: importDefault(dependencyMap[16]).colors.TEXT_SUBTLE, fontSize: 12, lineHeight: 16 };
const obj10 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: importDefault(dependencyMap[16]).colors.TEXT_SUBTLE, fontSize: 12, lineHeight: 16 };
obj.creatorAvatar = { marginRight: importDefault(dependencyMap[16]).space.PX_8 };
const styles = obj1.createStyles(obj);
const obj12 = { RSVP: 0, [0]: "RSVP", JOIN: 1, [1]: "JOIN", START: 2, [2]: "START", STARTED: 3, [3]: "STARTED", CONNECTED: 4, [4]: "CONNECTED", END: 5, [5]: "END", ENDED: 6, [6]: "ENDED", JOIN_GUILD: 7, [7]: "JOIN_GUILD" };
const obj11 = { marginRight: importDefault(dependencyMap[16]).space.PX_8 };
const memoResult = importAllResult.memo(function GuildEventCardPrimaryAction(event) {
  let channel_id;
  let recurrenceId;
  event = event.event;
  const arg1 = event;
  ({ onCloseAction: closure_1, recurrenceId } = event);
  const dependencyMap = recurrenceId;
  let closure_3;
  let closure_5;
  let closure_6;
  function handleListenIn() {
    if (null != id) {
      if (event.entity_type === constants.STAGE_INSTANCE) {
        callback2(closure_3, id.id);
      }
      event(recurrenceId[39]).openGuildVoiceModal(id);
      if (null != callback) {
        callback();
      }
      const obj = event(recurrenceId[39]);
    }
  }
  ({ guild_id: closure_3, channel_id } = event);
  const callback2 = channel_id;
  let obj = arg1(dependencyMap[26]);
  const items = [closure_10];
  const items1 = [channel_id];
  closure_5 = obj.useStateFromStores(items, () => channel.getChannel(channel_id), items1);
  closure_6 = callback2(importDefault(dependencyMap[35])(), 2)[1];
  const tmp = usePrimaryActionButtonType(event, event.isConnected);
  let obj1 = arg1(dependencyMap[26]);
  const items2 = [closure_13];
  const stateFromStores = obj1.useStateFromStores(items2, () => closure_13.can(constants2.CONNECT, closure_5));
  if (obj12.ENDED === tmp) {
    obj = {};
    const intl10 = arg1(dependencyMap[20]).intl;
    obj.text = intl10.string(arg1(dependencyMap[20]).t.Pj7Xrv);
    const intl11 = arg1(dependencyMap[20]).intl;
    const _HermesInternal6 = HermesInternal;
    obj.accessibilityLabel = "" + intl11.string(arg1(dependencyMap[20]).t.Pj7Xrv) + ", " + event.name;
    obj.onPress = closure_21;
    return callback5(importDefault(dependencyMap[31]), obj);
  } else if (obj12.JOIN === tmp) {
    const intl9 = arg1(dependencyMap[20]).intl;
    const string = intl9.string;
    const t = arg1(dependencyMap[20]).t;
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
    return callback5(importDefault(dependencyMap[31]), obj);
  } else if (obj12.CONNECTED === tmp) {
    obj1 = { variant: "active" };
    const intl7 = arg1(dependencyMap[20]).intl;
    obj1.text = intl7.string(arg1(dependencyMap[20]).t.aW2YlJ);
    const intl8 = arg1(dependencyMap[20]).intl;
    const _HermesInternal4 = HermesInternal;
    obj1.accessibilityLabel = "" + intl8.string(arg1(dependencyMap[20]).t.aW2YlJ) + ", " + event.name;
    obj1.onPress = handleListenIn;
    obj1.grow = true;
    return callback5(importDefault(dependencyMap[31]), obj1);
  } else if (obj12.RSVP === tmp) {
    let obj2 = { event, recurrenceId };
    return callback5(GuildEventCardRSVPAction, obj2);
  } else if (obj12.START === tmp) {
    const obj3 = { variant: "active" };
    const intl5 = arg1(dependencyMap[20]).intl;
    obj3.text = intl5.string(arg1(dependencyMap[20]).t.cK1GGY);
    const intl6 = arg1(dependencyMap[20]).intl;
    const _HermesInternal3 = HermesInternal;
    obj3.accessibilityLabel = "" + intl6.string(arg1(dependencyMap[20]).t.cK1GGY) + ", " + event.name;
    obj3.onPress = function handleStartEvent() {
      if (null != callback) {
        callback();
      }
      const result = event(recurrenceId[21]).openStartGuildEventModal(event, recurrenceId);
    };
    obj3.grow = true;
    return callback5(importDefault(dependencyMap[31]), obj3);
  } else if (obj12.STARTED === tmp) {
    const obj4 = {};
    const intl3 = arg1(dependencyMap[20]).intl;
    obj4.text = intl3.string(arg1(dependencyMap[20]).t.Yz0V6O);
    const intl4 = arg1(dependencyMap[20]).intl;
    const _HermesInternal2 = HermesInternal;
    obj4.accessibilityLabel = "" + intl4.string(arg1(dependencyMap[20]).t.Yz0V6O) + ", " + event.name;
    obj4.onPress = closure_21;
    return callback5(importDefault(dependencyMap[31]), obj4);
  } else if (obj12.END === tmp) {
    const obj5 = { variant: "secondary" };
    const intl = arg1(dependencyMap[20]).intl;
    obj5.text = intl.string(arg1(dependencyMap[20]).t.qaYzPA);
    const intl2 = arg1(dependencyMap[20]).intl;
    const _HermesInternal = HermesInternal;
    obj5.accessibilityLabel = "" + intl2.string(arg1(dependencyMap[20]).t.qaYzPA) + ", " + event.name;
    obj5.onPress = function handleEndEvent() {
      let obj = callback(recurrenceId[36]);
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
        return callback(closure_2[37]).endEvent(closure_0.id, closure_0.guild_id);
      };
      obj.confirmColor = callback(recurrenceId[38]).Colors.RED;
      obj.show(obj);
    };
    obj5.grow = true;
    return callback5(importDefault(dependencyMap[31]), obj5);
  } else if (obj12.JOIN_GUILD === tmp) {
    const obj6 = { event, recurrenceId };
    return callback5(GuildEventJoinAndRSVPAction, obj6);
  } else {
    obj2 = arg1(dependencyMap[40]);
    obj2.assertNever(tmp);
  }
});
const result = arg1(dependencyMap[60]).fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventCardComponents.tsx");

export const useGuildEventCardStyles = styles;
export const GuildEventShareAction = function GuildEventShareAction(event) {
  event = event.event;
  const arg1 = event;
  const tmp2 = importDefault(closure_2[17])(event);
  const importDefault = tmp2;
  let obj = arg1(closure_2[18]);
  obj = { guildId: event.guild_id, guildEventId: event.id };
  closure_2 = obj.SHARE_EVENT_DETAILS_LINK(obj);
  obj = {};
  const intl = arg1(closure_2[20]).intl;
  obj.accessibilityLabel = "" + intl.string(arg1(closure_2[20]).t.RDE0Sc) + ", " + event.name;
  obj.onPress = function onPress() {
    if (closure_2) {
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
    let tmp5 = tmp4[24];
  } else {
    tmp5 = tmp4[25];
  }
  obj.icon = importDefault(tmp5);
  obj.variant = "secondary";
  return closure_22(arg1(closure_2[19]).IconButton, obj);
};
export const GuildEventModeratorAction = function GuildEventModeratorAction(event) {
  event = event.event;
  const arg1 = event;
  const importDefault = event.recurrenceId;
  let closure_3;
  const channel_id = event.channel_id;
  const dependencyMap = channel_id;
  let obj = arg1(dependencyMap[26]);
  const items = [closure_12];
  let stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(event.guild_id));
  const items1 = [closure_10];
  const items2 = [channel_id];
  const stateFromStores1 = arg1(dependencyMap[26]).useStateFromStores(items1, () => channel.getChannel(channel_id), items2);
  const obj2 = arg1(dependencyMap[26]);
  if (null != stateFromStores1) {
    stateFromStores = stateFromStores1;
  }
  closure_3 = arg1(dependencyMap[27]).useManageResourcePermissions(stateFromStores).canManageGuildEvent(event);
  obj = {};
  const intl = arg1(dependencyMap[20]).intl;
  obj.accessibilityLabel = "" + intl.string(arg1(dependencyMap[20]).t.HIgA5a) + ", " + event.name;
  obj.onPress = function onPress() {
    return event(channel_id[21]).showGuildEventModeratorActionSheet(event, closure_3, recurrenceId);
  };
  obj.icon = importDefault(dependencyMap[28]);
  obj.variant = "secondary";
  return callback5(arg1(dependencyMap[19]).IconButton, obj);
};
export { useEventRsvpState };
export const GuildEventIndicateInterestAction = function GuildEventIndicateInterestAction(event) {
  event = event.event;
  const tmp = callback2(useEventRsvpState(event, null), 2);
  const first = tmp[0];
  let str = "secondary";
  if (first) {
    str = "tertiary";
  }
  if (first) {
    let BellIcon = tmp3(tmp4[29]).CheckmarkLargeIcon;
  } else {
    BellIcon = tmp3(tmp4[30]).BellIcon;
  }
  const obj = { accessibilityRole: "togglebutton", accessibilityState: { checked: first } };
  const intl = arg1(dependencyMap[20]).intl;
  obj.accessibilityLabel = "" + intl.string(arg1(dependencyMap[20]).t.DlcqlU) + ", " + event.name;
  obj.variant = str;
  obj.icon = callback5(BellIcon, { size: "sm" });
  const intl2 = arg1(dependencyMap[20]).intl;
  obj.text = intl2.string(arg1(dependencyMap[20]).t.DlcqlU);
  obj.onPress = tmp[1];
  obj.grow = true;
  return callback5(importDefault(dependencyMap[31]), obj);
};
export const PrimaryActionType = obj12;
export { usePrimaryActionButtonType };
export { GuildEventCardRSVPAction };
export { GuildEventJoinAndRSVPAction };
export const GuildEventCardPrimaryAction = memoResult;
export const GuildEventCardImageHeader = function GuildEventCardImageHeader(event) {
  event = event.event;
  const tmp = styles();
  let width = importDefault(dependencyMap[41])().width;
  const tmp2 = callback2(importAllResult.useState(0), 2);
  const first = tmp2[0];
  const callback = tmp2[1];
  if (null == event.image) {
    return null;
  } else {
    if (first > 0) {
      width = first;
    }
    let obj = callback(dependencyMap[42]);
    obj = { style: tmp.imageHeaderContainer, onLayout: tmp4 };
    obj = { style: tmp.imageHeaderBanner };
    obj.source = obj.makeSource(importDefault(dependencyMap[43])(event, width));
    obj.resizeMode = "cover";
    obj.children = callback5(closure_7, obj);
    return callback5(closure_6, obj);
  }
};
export { UserCountIconPill };
export const GuildEventCardHeader = function GuildEventCardHeader(event) {
  let recurrenceId;
  let shouldChangeTextColor;
  let showUserCount;
  let text;
  event = event.event;
  const arg1 = event;
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
  let closure_3;
  let closure_4;
  const tmp = styles();
  let id;
  const tmp2 = importDefault(dependencyMap[47])();
  if (null != event) {
    id = event.id;
  }
  let obj = importDefault(dependencyMap[48])(recurrenceId, id);
  if (null == obj) {
    obj = {};
  }
  const is_canceled = obj.is_canceled;
  const tmp6 = importDefault(dependencyMap[49])(event, recurrenceId);
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
  const memo = importAllResult.useMemo(() => event(tmp8[32]).getEventTimeData(toISOStringResult, tmp8), items);
  let obj2 = arg1(dependencyMap[50]);
  obj = { eventTimeData: memo, isStage: event.entity_type === constants.STAGE_INSTANCE, theme: tmp2, event, isCanceled: undefined !== is_canceled && is_canceled, recurrenceId };
  const guildScheduledEventHeaderProps = obj2.getGuildScheduledEventHeaderProps(obj);
  const color = guildScheduledEventHeaderProps.color;
  closure_3 = color;
  ({ text, shouldChangeTextColor } = guildScheduledEventHeaderProps);
  closure_4 = shouldChangeTextColor;
  const endDateTimeString = memo.endDateTimeString;
  let tmp12 = null;
  if (showUserCount) {
    const obj1 = { event, recurrenceId };
    const tmp15 = callback5(UserCountIconPill, obj1);
    let tmp16 = tmp15;
    if (!flag2) {
      obj2 = {
        accessibilityRole: "button",
        onPress: function handleOpenRSVPList() {

            },
        children: tmp15
      };
      tmp16 = callback5(arg1(dependencyMap[51]).PressableOpacity, obj2);
    }
    tmp12 = tmp16;
  }
  let obj6 = arg1(dependencyMap[26]);
  const items1 = [closure_14];
  const items2 = [event];
  const stateFromStores = obj6.useStateFromStores(items1, () => user.getUser(event.creator_id), items2);
  let tmp21 = null != endDateTimeString;
  if (tmp21) {
    tmp21 = "" !== endDateTimeString;
  }
  let formatResult = text;
  if (tmp21) {
    const intl = arg1(dependencyMap[20]).intl;
    const obj3 = {
      start: text,
      startHook(children) {
          let obj = {};
          let tmp2 = shouldChangeTextColor;
          if (shouldChangeTextColor) {
            obj = { color };
            tmp2 = obj;
          }
          obj.style = tmp2;
          obj.children = children;
          return closure_22(event(tmp8[52]).Text, obj);
        },
      end: endDateTimeString
    };
    formatResult = intl.format(arg1(dependencyMap[20]).t.vHYgJW, obj3);
  }
  const obj4 = { style: items3 };
  const items3 = [tmp.headerContainer, event.style];
  if (flag4) {
    const obj5 = { containerStyle: tmp.newBadge, variant: "text-xs/bold" };
    let tmp27Result = tmp27(tmp28(tmp29[45]).NewTag, obj5);
  } else {
    obj6 = { size: "sm", color, style: tmp.dateIcon };
    tmp27Result = tmp27(tmp28(tmp29[53]).CalendarIcon, obj6);
  }
  const items4 = [tmp27Result, , , ];
  const obj7 = { style: tmp.dateContainer };
  if (tmp21) {
    const obj8 = { children: formatResult };
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
  obj7.children = callback5(arg1(dependencyMap[52]).Text, obj9);
  items4[1] = callback5(closure_6, obj7);
  if (flag3) {
    flag3 = null != stateFromStores;
  }
  if (flag3) {
    const obj11 = { accessible: true };
    const intl2 = arg1(dependencyMap[20]).intl;
    const obj12 = { username: stateFromStores.username };
    const _HermesInternal = HermesInternal;
    obj11.accessibilityLabel = "" + intl2.formatToPlainString(arg1(dependencyMap[20]).t.+3iypQ, obj12) + ", " + event.name;
    obj11.user = stateFromStores;
    obj11.guildId = event.guild_id;
    obj11.size = arg1(dependencyMap[45]).AvatarSizes.XSMALL_20;
    obj11.style = tmp.creatorAvatar;
    flag3 = callback5(arg1(dependencyMap[45]).Avatar, obj11);
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
  const items = [callback5(GuildEventCardTitle, obj), callback5(GuildEventCardDescription, { event, textStyle: descriptionStyle, style: descriptionContainerStyle, condensed, numberOfLines: 3 })];
  obj.children = items;
  return callback6(closure_24, obj);
};
export const GuildEventSimpleLocation = function GuildEventSimpleLocation(event) {
  event = event.event;
  const tmp = styles();
  const channel_id = event.channel_id;
  const arg1 = channel_id;
  let obj = arg1(dependencyMap[26]);
  const items = [closure_10];
  const items1 = [channel_id];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channel_id), items1);
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[26]);
  const items2 = [closure_11, closure_9];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let guild_id;
    const id = id.getId();
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return member.isMember(guild_id, id);
  }, items3);
  const tmp4 = importDefault(dependencyMap[55])(stateFromStores);
  let obj2 = arg1(dependencyMap[56]);
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
  let obj3 = arg1(dependencyMap[57]);
  const eventLocationIconComponent = obj3.getEventLocationIconComponent(event, stateFromStores, stateFromStores1);
  obj = { style: tmp.channelContainer };
  let tmp10 = null != eventLocationIconComponent;
  if (tmp10) {
    obj = { size: "sm", style: tmp.channelIcon };
    tmp10 = callback5(eventLocationIconComponent, obj);
  }
  const items4 = [tmp10, ];
  obj1 = { style: tmp.channelText };
  if (null != stateFromStores) {
    obj2 = { channel: stateFromStores };
    let combined = importDefault(dependencyMap[58])(obj2);
  } else if (null != locationFromEvent) {
    const intl = arg1(dependencyMap[20]).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl.string(arg1(dependencyMap[20]).t.gwSn4I) + ", " + locationFromEvent;
  }
  obj1.accessibilityLabel = combined;
  obj1.variant = "text-sm/medium";
  obj1.color = "text-default";
  let result = null;
  if (null != tmp6) {
    obj3 = { guildId: event.guild_id };
    result = arg1(dependencyMap[54]).guildEventDetailsParser(tmp6, true, obj3);
    const obj9 = arg1(dependencyMap[54]);
  }
  obj1.children = result;
  items4[1] = callback5(arg1(dependencyMap[52]).Text, obj1);
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
  const arg1 = guild_id;
  let obj = arg1(dependencyMap[26]);
  const items = [closure_12];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guild_id), items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = {};
    const items2 = [tmp.guildInfoContainer, style];
    obj.style = items2;
    obj = { guild: stateFromStores, size: arg1(dependencyMap[59]).GuildIconSizes.XSMALL_20, style: tmp.guildIcon };
    const items3 = [callback5(importDefault(dependencyMap[59]), obj), ];
    const obj1 = { style: tmp.guildInfo };
    const obj2 = { variant: "text-sm/semibold", style: textStyle, children: stateFromStores.name };
    obj1.children = callback5(arg1(dependencyMap[52]).Text, obj2);
    items3[1] = callback5(closure_6, obj1);
    obj.children = items3;
    tmp3 = callback6(closure_6, obj);
    const tmp9 = importDefault(dependencyMap[59]);
  }
  return tmp3;
};
export const GuildEventCardGuildInfo = function GuildEventCardGuildInfo(event) {
  event = event.event;
  const tmp = styles();
  const channel_id = event.channel_id;
  const arg1 = channel_id;
  const guild_id = event.guild_id;
  const importDefault = guild_id;
  let obj = arg1(dependencyMap[26]);
  const items = [closure_10];
  const items1 = [channel_id];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channel_id), items1);
  const dependencyMap = stateFromStores;
  let obj1 = arg1(dependencyMap[26]);
  const items2 = [closure_12];
  const items3 = [guild_id];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => guild.getGuild(guild_id), items3);
  let obj2 = arg1(dependencyMap[26]);
  const items4 = [closure_11, closure_9];
  const items5 = [stateFromStores];
  const stateFromStores2 = obj2.useStateFromStores(items4, () => {
    let guild_id;
    const id = id.getId();
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return member.isMember(guild_id, id);
  }, items5);
  const tmp5 = importDefault(dependencyMap[55])(stateFromStores);
  if (null == stateFromStores1) {
    return null;
  } else {
    const locationFromEvent = arg1(dependencyMap[56]).getLocationFromEvent(event);
    let tmp18Result = null != stateFromStores || null != locationFromEvent;
    let tmp7 = locationFromEvent;
    if (null != tmp5) {
      tmp7 = tmp5;
    }
    let obj3 = arg1(dependencyMap[57]);
    const eventLocationIconSource = obj3.getEventLocationIconSource(event, stateFromStores, stateFromStores2);
    obj = { style: tmp.guildInfoContainer };
    obj = { guild: stateFromStores1 };
    const obj13 = arg1(dependencyMap[56]);
    const tmp12 = closure_6;
    obj.size = arg1(dependencyMap[59]).GuildIconSizes.SMALL;
    obj.style = tmp.guildIcon;
    const items6 = [callback5(importDefault(dependencyMap[59]), obj), ];
    obj1 = { style: tmp.guildInfo };
    obj2 = { children: stateFromStores1.name };
    const items7 = [callback5(arg1(dependencyMap[52]).Text, obj2), ];
    if (tmp18Result) {
      obj3 = { style: tmp.guildInfoChannelContainer, accessible: true };
      if (null != stateFromStores) {
        const obj4 = { channel: stateFromStores };
        let combined = importDefault(dependencyMap[58])(obj4);
      } else if (null != locationFromEvent) {
        const intl = arg1(dependencyMap[20]).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + intl.string(arg1(dependencyMap[20]).t.gwSn4I) + ", " + locationFromEvent;
      }
      obj3.accessibilityLabel = combined;
      let tmp26 = null != eventLocationIconSource;
      if (tmp26) {
        const obj5 = { source: eventLocationIconSource, size: arg1(dependencyMap[45]).Icon.Sizes.EXTRA_SMALL, style: tmp.channelIcon, disableColor: true };
        tmp26 = callback5(arg1(dependencyMap[45]).Icon, obj5);
      }
      const items8 = [tmp26, ];
      const obj6 = { style: tmp.guildInfoChannelText, children: tmp7 };
      items8[1] = callback5(arg1(dependencyMap[52]).Text, obj6);
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
