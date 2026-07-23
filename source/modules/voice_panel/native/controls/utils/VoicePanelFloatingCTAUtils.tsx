// Module ID: 15739
// Function ID: 121437
// Name: useFloatingCTAProps
// Dependencies: [57, 31, 27, 4143, 15740, 6758, 1348, 1354, 33, 4066, 10014, 15719, 8455, 624, 8402, 8346, 8356, 4098, 8365, 15741, 12202, 7498, 8461, 1212, 5119, 15742, 10195, 15743, 5803, 8277, 3946, 7507, 1334, 15744, 11561, 7066, 2]
// Exports: useShouldShowFloatingCTA

// Module 15739 (useFloatingCTAProps)
import _slicedToArray from "_slicedToArray";
import CircleErrorIcon from "CircleErrorIcon";
import { Pressable } from "useChannelFloatingCTAContent";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { isGuildScheduledEventActive as closure_8 } from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { GuildScheduledEventEntityTypes as closure_10 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { jsx } from "showSoundboardSoundPickerActionSheet";

const require = arg1;
function useFloatingCTAProps(stateFromStores) {
  let tmp = (function useOverrideFloatingCTAProps(arg0) {
    let closure_0 = arg0;
    const setShowFloatingCTA = outer1_4.useContext(outer1_1(outer1_2[10])).setShowFloatingCTA;
    const items = [setShowFloatingCTA, arg0];
    return outer1_4.useMemo(() => {
      let tmp = null;
      if (closure_0 === outer2_12.BAD_CONNECTION) {
        tmp = outer2_14(() => outer1_1(null));
      }
      return tmp;
    }, items);
  })(importDefault(8277)(React.useContext(importDefault(10014)).showFloatingCTA));
  let tmp2 = (function useGuildEventControlsProps(id) {
    let entity_type;
    let name;
    let scheduled_start_time;
    const tmp = outer1_1(outer1_2[9])();
    let obj = outer1_0(outer1_2[12]);
    id = undefined;
    if (null != id) {
      id = id.id;
    }
    const imminentUpcomingGuildEvents = obj.useImminentUpcomingGuildEvents(id);
    let obj1 = outer1_0(outer1_2[13]);
    const items = [outer1_7];
    const items1 = [imminentUpcomingGuildEvents];
    const stateFromStores = obj1.useStateFromStores(items, () => {
      const found = imminentUpcomingGuildEvents.find((id) => !outer3_7.isEventDismissed(id.id));
      let tmp2 = null;
      if (null != found) {
        tmp2 = found;
      }
      return tmp2;
    }, items1);
    let obj2 = outer1_0(outer1_2[14]);
    let tmp7 = null != stateFromStores;
    let tmp2 = outer1_1(outer1_2[11])(outer1_4.useContext(outer1_1(outer1_2[10])).channelId);
    if (tmp7) {
      tmp7 = outer1_8(stateFromStores);
    }
    let obj3 = outer1_0(outer1_2[15]);
    const nextRecurrenceIdInEvent = obj3.getNextRecurrenceIdInEvent(stateFromStores);
    let tmp10;
    if (null != nextRecurrenceIdInEvent) {
      tmp10 = nextRecurrenceIdInEvent;
    }
    let closure_2 = tmp10;
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
    const tmp11 = outer1_1(outer1_2[16]);
    [][0] = stateFromStores;
    const callback = outer1_4.useCallback(() => {
      if (null != stateFromStores) {
        outer2_1(outer2_2[17]).hideActionSheet();
        const obj = outer2_1(outer2_2[17]);
        const result = outer2_0(outer2_2[18]).openStartGuildEventModal(stateFromStores, closure_2);
        const obj2 = outer2_0(outer2_2[18]);
      }
    }, items2);
    if (tmp2) {
      if (null != stateFromStores) {
        if (canManageGuildEventResult) {
          if (!tmp7) {
            ({ scheduled_start_time, name, entity_type } = stateFromStores);
            let obj4 = outer1_0(outer1_2[20]);
            obj = { eventTimeData: outer1_0(outer1_2[15]).getEventTimeData(scheduled_start_time), isStage: entity_type === outer1_10.STAGE_INSTANCE, theme: tmp, event: stateFromStores };
            obj = { onPress: callback };
            obj1 = { IconComponent: outer1_0(outer1_2[22]).CalendarIcon, variant: "translucent" };
            obj.icon = outer1_11(outer1_0(outer1_2[21]).RowButton.Icon, obj1);
            obj.label = name;
            const intl = outer1_0(outer1_2[23]).intl;
            obj2 = { count: tmp11Result };
            const _HermesInternal = HermesInternal;
            obj.subLabel = "" + obj4.getGuildScheduledEventHeaderProps(obj).text + " \u2022 " + intl.formatToPlainString(outer1_0(outer1_2[23]).t.NywdIj, obj2);
            obj3 = { accessibilityRole: "button" };
            const intl2 = outer1_0(outer1_2[23]).intl;
            obj3.accessibilityLabel = intl2.string(outer1_0(outer1_2[23]).t.cpT0Cq);
            obj3.onPress = tmp16;
            obj4 = { color: "interactive-icon-default" };
            obj3.children = outer1_11(outer1_0(outer1_2[24]).XSmallIcon, obj4);
            obj.trailing = outer1_11(outer1_5, obj3);
            return obj;
          }
        }
      }
    }
  })(stateFromStores);
  let tmp3 = (function useCallInviteProps(id) {
    let closure_0 = id;
    let obj = outer1_0(outer1_2[13]);
    const items = [outer1_6];
    const stateFromStores = obj.useStateFromStores(items, () => {
      let id;
      if (null != user) {
        id = user.id;
      }
      let tmp3 = null != id;
      if (tmp3) {
        tmp3 = 1 === outer2_6.getParticipants(user.id).length;
      }
      return tmp3;
    });
    outer1_0(outer1_2[25]);
    if (null != id) {
      id = id.id;
    }
    let tmp5;
    if (null != id) {
      if (tmp) {
        if (stateFromStores) {
          obj = {};
          const intl = outer1_0(outer1_2[23]).intl;
          obj.label = intl.string(outer1_0(outer1_2[23]).t.N4nebq);
          const intl2 = outer1_0(outer1_2[23]).intl;
          obj.subLabel = intl2.string(outer1_0(outer1_2[23]).t.o2XPr2);
          obj = { IconComponent: outer1_0(outer1_2[26]).GroupPlusIcon, variant: "translucent" };
          obj.icon = outer1_11(outer1_0(outer1_2[21]).RowButton.Icon, obj);
          obj.onPress = tmp4;
          tmp5 = obj;
        }
      }
    }
    return tmp5;
  })(stateFromStores);
  if (null != tmp) {
    tmp2 = tmp;
  }
  if (null != tmp2) {
    tmp3 = tmp2;
  }
  return tmp3;
}
function getBadConnectionCTAProps(arg0) {
  const _require = arg0;
  let obj = {};
  const intl = _require(1212).intl;
  obj.label = intl.string(_require(1212).t.uv1tVh);
  const intl2 = _require(1212).intl;
  obj.subLabel = intl2.string(_require(1212).t["gQ14+g"]);
  obj = { IconComponent: _require(7507).CircleErrorIcon, variant: "translucent" };
  obj.icon = jsx(_require(7498).RowButton.Icon, { IconComponent: _require(7507).CircleErrorIcon, variant: "translucent" });
  obj.onPress = function onPress() {
    let tmp;
    if (null != callback) {
      tmp = callback();
    }
    return tmp;
  };
  obj = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: 4 };
  const intl3 = _require(1212).intl;
  obj.accessibilityLabel = intl3.string(_require(1212).t.cpT0Cq);
  obj.onPress = function onPress() {
    const result = callback(outer1_2[30]).UNSAFE_markDismissibleContentAsDismissed(callback(outer1_2[32]).DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA);
    if (null != callback) {
      callback();
    }
  };
  obj.children = jsx(_require(5119).XSmallIcon, { color: "interactive-icon-default" });
  obj.trailing = <Pressable accessibilityRole="button" accessibilityLabel={null} hitSlop={4} />;
  return obj;
}
function handleSoundboardMobileFloatingCtaClose() {
  const result = require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
}
function CloseSoundboardMobileFloatingCtaIcon() {
  const obj = { accessibilityRole: "button" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj.onPress = handleSoundboardMobileFloatingCtaClose;
  obj.children = jsx(require(5119) /* XSmallIcon */.XSmallIcon, { color: "interactive-icon-default" });
  return <Pressable accessibilityRole="button" />;
}
function getDismissableCTAProps(arg0) {
  let dismissableContent;
  let require;
  ({ dismissableContent, channel: require } = arg0);
  if (require(1334) /* DismissibleContent */.DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA === dismissableContent) {
    return getBadConnectionCTAProps();
  } else if (require(1334) /* DismissibleContent */.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA === dismissableContent) {
    let obj = {};
    obj = { color: "interactive-icon-default" };
    obj.icon = jsx(require(11561) /* SoundboardIcon */.SoundboardIcon, { color: "interactive-icon-default" });
    obj.onPress = function onPress() {
      if (null != closure_0) {
        let obj = outer1_0(outer1_2[33]);
        obj = { channel: tmp, analyticsSource: "SOUNDBOARD_MOBILE_FLOATING_CTA" };
        const result = obj.showSoundboardSoundPickerActionSheet(obj);
      }
      outer1_15();
    };
    obj = { quest: require(1212) /* getSystemLocale */.t.XLlWUe };
    obj.label = require(7066) /* getDeviceSpecificString */.getDeviceSpecificString(obj, require(1212) /* getSystemLocale */.t.IJgkPX);
    obj.trailing = <CloseSoundboardMobileFloatingCtaIcon />;
    return obj;
  } else {
    const DONUT_MOBILE_NUX = require(1334) /* DismissibleContent */.DismissibleContent.DONUT_MOBILE_NUX;
    return null;
  }
}
let obj = { BAD_CONNECTION: "BAD_CONNECTION" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelFloatingCTAUtils.tsx");

export const FLOATING_CTA_HIDE_TIMEOUT = 5000;
export const OverrideFloatingCTA = obj;
export const useShouldShowFloatingCTA = function useShouldShowFloatingCTA(channelId) {
  const _require = channelId;
  const tmp = first(stateFromStores[27])(channelId);
  first = callback(_require(stateFromStores[28]).useGetDismissibleContent(tmp), 1)[0];
  const obj = _require(stateFromStores[28]);
  const items = [closure_9];
  stateFromStores = _require(stateFromStores[13]).useStateFromStores(items, () => outer1_9.getChannel(closure_0));
  const items1 = [first, stateFromStores];
  const memo = React.useMemo(() => outer1_17({ dismissableContent: first, channel: stateFromStores }), items1);
  const obj2 = _require(stateFromStores[13]);
  return null != memo || null != useFloatingCTAProps(stateFromStores);
};
export { useFloatingCTAProps };
export { getBadConnectionCTAProps };
export { getDismissableCTAProps };
