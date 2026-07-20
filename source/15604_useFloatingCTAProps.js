// Module ID: 15604
// Function ID: 119158
// Name: useFloatingCTAProps
// Dependencies: []
// Exports: useShouldShowFloatingCTA

// Module 15604 (useFloatingCTAProps)
function useFloatingCTAProps(stateFromStores) {
  const tmp = function useOverrideFloatingCTAProps(arg0) {
    const setShowFloatingCTA = React.useContext(setShowFloatingCTA(closure_2[10])).setShowFloatingCTA;
    const items = [setShowFloatingCTA, arg0];
    return React.useMemo(() => {
      let tmp = null;
      if (arg0 === constants.BAD_CONNECTION) {
        tmp = callback(() => callback(null));
      }
      return tmp;
    }, items);
  }(importDefault(dependencyMap[29])(React.useContext(importDefault(dependencyMap[10])).showFloatingCTA));
  let tmp2 = function useGuildEventControlsProps(id) {
    let entity_type;
    let name;
    let scheduled_start_time;
    const tmp = stateFromStores(tmp10[9])();
    let obj = imminentUpcomingGuildEvents(tmp10[12]);
    id = undefined;
    if (null != id) {
      id = id.id;
    }
    const imminentUpcomingGuildEvents = obj.useImminentUpcomingGuildEvents(id);
    let obj1 = imminentUpcomingGuildEvents(tmp10[13]);
    const items = [closure_7];
    const items1 = [imminentUpcomingGuildEvents];
    const stateFromStores = obj1.useStateFromStores(items, () => {
      const found = imminentUpcomingGuildEvents.find((id) => !eventDismissed.isEventDismissed(id.id));
      let tmp2 = null;
      if (null != found) {
        tmp2 = found;
      }
      return tmp2;
    }, items1);
    let obj2 = imminentUpcomingGuildEvents(tmp10[14]);
    let tmp7 = null != stateFromStores;
    const tmp2 = stateFromStores(tmp10[11])(React.useContext(stateFromStores(tmp10[10])).channelId);
    if (tmp7) {
      tmp7 = callback2(stateFromStores);
    }
    let obj3 = imminentUpcomingGuildEvents(tmp10[15]);
    const nextRecurrenceIdInEvent = obj3.getNextRecurrenceIdInEvent(stateFromStores);
    let tmp10;
    if (null != nextRecurrenceIdInEvent) {
      tmp10 = nextRecurrenceIdInEvent;
    }
    let guild_id;
    const canManageGuildEventResult = obj2.useManageResourcePermissions(id).canManageGuildEvent(stateFromStores);
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    let id1;
    if (null != stateFromStores) {
      id1 = stateFromStores.id;
    }
    const items2 = [stateFromStores, tmp10];
    const tmp11 = stateFromStores(tmp10[16]);
    [][0] = stateFromStores;
    const callback = React.useCallback(() => {
      if (null != stateFromStores) {
        stateFromStores(tmp10[17]).hideActionSheet();
        const obj = stateFromStores(tmp10[17]);
        const result = imminentUpcomingGuildEvents(tmp10[18]).openStartGuildEventModal(stateFromStores, tmp10);
        const obj2 = imminentUpcomingGuildEvents(tmp10[18]);
      }
    }, items2);
    if (tmp2) {
      if (null != stateFromStores) {
        if (canManageGuildEventResult) {
          if (!tmp7) {
            ({ scheduled_start_time, name, entity_type } = stateFromStores);
            let obj4 = imminentUpcomingGuildEvents(tmp10[20]);
            obj = { eventTimeData: imminentUpcomingGuildEvents(tmp10[15]).getEventTimeData(scheduled_start_time), isStage: entity_type === constants.STAGE_INSTANCE, theme: tmp, event: stateFromStores };
            obj = { onPress: callback };
            obj1 = { IconComponent: imminentUpcomingGuildEvents(tmp10[22]).CalendarIcon, variant: "translucent" };
            obj.icon = callback3(imminentUpcomingGuildEvents(tmp10[21]).RowButton.Icon, obj1);
            obj.label = name;
            const intl = imminentUpcomingGuildEvents(tmp10[23]).intl;
            obj2 = { count: tmp11Result };
            const _HermesInternal = HermesInternal;
            obj.subLabel = "" + obj4.getGuildScheduledEventHeaderProps(obj).text + " \u2022 " + intl.formatToPlainString(imminentUpcomingGuildEvents(tmp10[23]).t.NywdIj, obj2);
            obj3 = { accessibilityRole: "button" };
            const intl2 = imminentUpcomingGuildEvents(tmp10[23]).intl;
            obj3.accessibilityLabel = intl2.string(imminentUpcomingGuildEvents(tmp10[23]).t.cpT0Cq);
            obj3.onPress = tmp16;
            obj4 = { color: "interactive-icon-default" };
            obj3.children = callback3(imminentUpcomingGuildEvents(tmp10[24]).XSmallIcon, obj4);
            obj.trailing = callback3(closure_5, obj3);
            return obj;
          }
        }
      }
    }
  }(stateFromStores);
  let tmp3 = function useCallInviteProps(id) {
    let obj = id(closure_2[13]);
    const items = [closure_6];
    const stateFromStores = obj.useStateFromStores(items, () => {
      let id;
      if (null != arg0) {
        id = arg0.id;
      }
      let tmp3 = null != id;
      if (tmp3) {
        tmp3 = 1 === participants.getParticipants(arg0.id).length;
      }
      return tmp3;
    });
    id(closure_2[25]);
    if (null != id) {
      id = id.id;
    }
    let tmp5;
    if (null != id) {
      if (tmp) {
        if (stateFromStores) {
          obj = {};
          const intl = id(closure_2[23]).intl;
          obj.label = intl.string(id(closure_2[23]).t.N4nebq);
          const intl2 = id(closure_2[23]).intl;
          obj.subLabel = intl2.string(id(closure_2[23]).t.o2XPr2);
          obj = { IconComponent: id(closure_2[26]).GroupPlusIcon, variant: "translucent" };
          obj.icon = callback3(id(closure_2[21]).RowButton.Icon, obj);
          obj.onPress = tmp4;
          tmp5 = obj;
        }
      }
    }
    return tmp5;
  }(stateFromStores);
  if (null != tmp) {
    tmp2 = tmp;
  }
  if (null != tmp2) {
    tmp3 = tmp2;
  }
  return tmp3;
}
function getBadConnectionCTAProps(arg0) {
  const arg1 = arg0;
  let obj = {};
  const intl = arg1(dependencyMap[23]).intl;
  obj.label = intl.string(arg1(dependencyMap[23]).t.uv1tVh);
  const intl2 = arg1(dependencyMap[23]).intl;
  obj.subLabel = intl2.string(arg1(dependencyMap[23]).t.gQ14+g);
  obj = { IconComponent: arg1(dependencyMap[31]).CircleErrorIcon, variant: "translucent" };
  obj.icon = jsx(arg1(dependencyMap[21]).RowButton.Icon, obj);
  obj.onPress = function onPress() {
    let tmp;
    if (null != arg0) {
      tmp = arg0();
    }
    return tmp;
  };
  obj = { "Null": null, "Null": null, "Null": null };
  const intl3 = arg1(dependencyMap[23]).intl;
  obj.accessibilityLabel = intl3.string(arg1(dependencyMap[23]).t.cpT0Cq);
  obj.onPress = function onPress() {
    const result = arg0(closure_2[30]).UNSAFE_markDismissibleContentAsDismissed(arg0(closure_2[32]).DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA);
    if (null != arg0) {
      arg0();
    }
  };
  obj.children = jsx(arg1(dependencyMap[24]).XSmallIcon, { color: "interactive-icon-default" });
  obj.trailing = <Pressable {...obj} />;
  return obj;
}
function handleSoundboardMobileFloatingCtaClose() {
  const result = arg1(dependencyMap[30]).UNSAFE_markDismissibleContentAsDismissed(arg1(dependencyMap[32]).DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
}
function CloseSoundboardMobileFloatingCtaIcon() {
  const obj = { accessibilityRole: "button" };
  const intl = arg1(dependencyMap[23]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[23]).t.cpT0Cq);
  obj.onPress = handleSoundboardMobileFloatingCtaClose;
  obj.children = jsx(arg1(dependencyMap[24]).XSmallIcon, { color: "interactive-icon-default" });
  return <Pressable {...obj} />;
}
function getDismissableCTAProps(arg0) {
  let dismissableContent;
  ({ dismissableContent, channel: closure_0 } = arg0);
  if (arg1(dependencyMap[32]).DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA === dismissableContent) {
    return getBadConnectionCTAProps();
  } else if (arg1(dependencyMap[32]).DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA === dismissableContent) {
    let obj = {};
    obj = { color: "interactive-icon-default" };
    obj.icon = jsx(arg1(dependencyMap[34]).SoundboardIcon, obj);
    obj.onPress = function onPress() {
      if (null != callback) {
        let obj = callback(closure_2[33]);
        obj = { channel: tmp, analyticsSource: "SOUNDBOARD_MOBILE_FLOATING_CTA" };
        const result = obj.showSoundboardSoundPickerActionSheet(obj);
      }
      callback2();
    };
    obj = { quest: arg1(dependencyMap[23]).t.XLlWUe };
    obj.label = arg1(dependencyMap[35]).getDeviceSpecificString(obj, arg1(dependencyMap[23]).t.IJgkPX);
    obj.trailing = <CloseSoundboardMobileFloatingCtaIcon />;
    return obj;
  } else {
    const DONUT_MOBILE_NUX = arg1(dependencyMap[32]).DismissibleContent.DONUT_MOBILE_NUX;
    return null;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const Pressable = arg1(dependencyMap[2]).Pressable;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).isGuildScheduledEventActive;
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = arg1(dependencyMap[7]).GuildScheduledEventEntityTypes;
const jsx = arg1(dependencyMap[8]).jsx;
const obj = { BAD_CONNECTION: "BAD_CONNECTION" };
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelFloatingCTAUtils.tsx");

export const FLOATING_CTA_HIDE_TIMEOUT = 5000;
export const OverrideFloatingCTA = obj;
export const useShouldShowFloatingCTA = function useShouldShowFloatingCTA(channelId) {
  const arg1 = channelId;
  const tmp = importDefault(dependencyMap[27])(channelId);
  const first = callback(arg1(dependencyMap[28]).useGetDismissibleContent(tmp), 1)[0];
  const importDefault = first;
  const obj = arg1(dependencyMap[28]);
  const items = [closure_9];
  const stateFromStores = arg1(dependencyMap[13]).useStateFromStores(items, () => channel.getChannel(arg0));
  const dependencyMap = stateFromStores;
  const items1 = [first, stateFromStores];
  const memo = React.useMemo(() => callback({ dismissableContent: first, channel: stateFromStores }), items1);
  const obj2 = arg1(dependencyMap[13]);
  return null != memo || null != useFloatingCTAProps(stateFromStores);
};
export { useFloatingCTAProps };
export { getBadConnectionCTAProps };
export { getDismissableCTAProps };
