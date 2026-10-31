// Module ID: 19159
// Function ID: 19160
// Name: VoicePanelFloatingCTAUtils
// Dependencies: [32, 19, 17, 6843, 19160, 6855, 4863, 4869, 21, 5253, 11222, 19144, 9090, 563, 9020, 8969, 8965, 5258, 8985, 19161, 9211, 8179, 9115, 1113, 7054, 19162, 10977, 19163, 7570, 8841, 5044, 7086, 4847, 19164, 14087, 5271, 2]
// Exports: useShouldShowFloatingCTA

// Module 19159 (VoicePanelFloatingCTAUtils)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl5 from "intl" /* 1113 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 4869 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5044 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6855 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 19164 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6843 */;
import EventBannerStore from "EventBannerStore" /* 19160 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const getDeviceSpecificString2 = tmp(5271);
const SoundboardIcon = tmp(14087);
function useFloatingCTAProps(stateFromStores) {
  let closure_0;
  let entity_type;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let name;
  let obj5;
  let participants;
  let scheduled_start_time;
  let setShowFloatingCTA;
  let text;
  let tmp22;
  let tmp32;
  let tmp7Result10;
  let obj = react;
  let tmp = setShowFloatingCTA;
  let tmp3 = setShowFloatingCTA(8841)(react.useContext(setShowFloatingCTA(11222)).showFloatingCTA);
  _require = tmp3;
  setShowFloatingCTA = undefined;
  setShowFloatingCTA = react.useContext(setShowFloatingCTA(11222)).setShowFloatingCTA;
  const items = [setShowFloatingCTA, tmp3];
  let memo = react.useMemo(() => {
    let tmp = null;
    if (closure_0 === obj.BAD_CONNECTION) {
      tmp = getBadConnectionCTAProps(() => setShowFloatingCTA(null));
    }
    return tmp;
  }, items);
  let imminentUpcomingGuildEvents;
  stateFromStores = undefined;
  let nextRecurrenceIdInEvent;
  const tmp5 = setShowFloatingCTA(5253)();
  let id1;
  const tmp6 = setShowFloatingCTA(19144)(react.useContext(setShowFloatingCTA(11222)).channelId);
  const useImminentUpcomingGuildEvents = require("useGuildScheduledEvents").useImminentUpcomingGuildEvents;
  require("useGuildScheduledEvents");
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  imminentUpcomingGuildEvents = useImminentUpcomingGuildEvents(id1);
  const items1 = [EventBannerStore];
  const items2 = [imminentUpcomingGuildEvents];
  const tmp7Result = require("useStateFromStores");
  stateFromStores = tmp7Result.useStateFromStores(items1, () => {
    let eventDismissed;
    let found = imminentUpcomingGuildEvents.find((id) => !eventDismissed.isEventDismissed(id.id));
    if (found == null) {
      found = null;
    }
    return found;
  }, items2);
  let tmp13 = null != stateFromStores;
  const tmp7Result7 = require("useManageResourcePermissions");
  const canManageGuildEventResult = tmp7Result7.useManageResourcePermissions(stateFromStores).canManageGuildEvent(stateFromStores);
  if (tmp13) {
    tmp13 = closure_8(stateFromStores);
  }
  const tmp7Result8 = require("ScheduleUtils");
  nextRecurrenceIdInEvent = tmp7Result8.getNextRecurrenceIdInEvent(stateFromStores);
  let guild_id;
  const tmpResult = tmp(8965);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let id2;
  if (stateFromStores != null) {
    id2 = stateFromStores.id;
  }
  const items3 = [stateFromStores, nextRecurrenceIdInEvent];
  [][0] = stateFromStores;
  const tmpResultResult = tmpResult(guild_id, id2, nextRecurrenceIdInEvent);
  const callback = obj.useCallback(() => {
    if (null != stateFromStores) {
      const obj = setShowFloatingCTA(dependencyMap[17]);
      obj.hideActionSheet();
      const obj2 = imminentUpcomingGuildEvents(dependencyMap[18]);
      const result = obj2.openStartGuildEventModal(tmp, nextRecurrenceIdInEvent);
    }
  }, items3);
  if (tmp6) {
    if (null != stateFromStores) {
      if (canManageGuildEventResult) {
        if (!tmp13) {
          ({ scheduled_start_time, name, entity_type } = stateFromStores);
          const STAGE_INSTANCE = constants.STAGE_INSTANCE;
          let obj2 = { eventTimeData: tmp7Result10.getEventTimeData(scheduled_start_time), isStage: entity_type === STAGE_INSTANCE, theme: tmp5, event: stateFromStores };
          const getGuildScheduledEventHeaderProps = require("GuildScheduledEventHeaderUtils").getGuildScheduledEventHeaderProps;
          require("GuildScheduledEventHeaderUtils");
          tmp7Result10 = require("ScheduleUtils");
          const obj3 = { onPress: callback, icon: null, label: name, subLabel: "" + text + " \u2022 " + intl.formatToPlainString(require("intl").t.NywdIj, obj5), trailing: null };
          text = getGuildScheduledEventHeaderProps(obj2).text;
          ({ IconComponent: require("CalendarIcon").CalendarIcon, variant: "translucent" });
          const Icon = tmp7(8179).RowButton.Icon;
          intl = tmp7(1113).intl;
          const _HermesInternal = HermesInternal;
          obj5 = { count: tmpResultResult };
          ({ accessibilityRole: "button", accessibilityLabel: intl2.string(require("intl").t.cpT0Cq), onPress: tmp21, children: null });
          intl2 = tmp7(1113).intl;
          tmp22 = obj3;
        }
      }
    }
  }
  _require = stateFromStores;
  const items4 = [ChannelRTCStore];
  const tmp28 = tmp(19144)(obj.useContext(tmp(11222)).channelId);
  const tmp7Result11 = require("useStateFromStores");
  const stateFromStores1 = tmp7Result11.useStateFromStores(items4, () => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    const tmp3 = null != id && 1 === participants.getParticipants(tmp.id).length;
    return tmp3;
  });
  require("useInviteMembersCallback");
  if (stateFromStores != null) {
    let id = stateFromStores.id;
  }
  if (null != stateFromStores) {
    if (!stateFromStores.isDM()) {
      if (tmp28) {
        if (stateFromStores1) {
          const obj7 = { label: intl3.string(require("intl").t.N4nebq), subLabel: intl4.string(require("intl").t.o2XPr2), icon: null, onPress: tmp31 };
          intl3 = tmp7(1113).intl;
          intl4 = tmp7(1113).intl;
          ({ IconComponent: require("GroupPlusIcon").GroupPlusIcon, variant: "translucent" });
          const Icon2 = tmp7(8179).RowButton.Icon;
          tmp32 = obj7;
        }
      }
    }
  }
  if (memo == null) {
    memo = tmp22;
  }
  if (memo == null) {
    memo = tmp32;
  }
  return memo;
}
function getBadConnectionCTAProps(arg0) {
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  _require = arg0;
  let obj = {
    label: intl.string(require("intl").t.uv1tVh),
    subLabel: intl2.string(require("intl").t["gQ14+g"]),
    icon: null,
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    trailing: null
  };
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  ({ IconComponent: require("CircleErrorIcon").CircleErrorIcon, variant: "translucent" });
  const Icon = require("RowButton").RowButton.Icon;
  ({
    accessibilityRole: "button",
    accessibilityLabel: intl3.string(require("intl").t.cpT0Cq),
    hitSlop: 4,
    onPress() {
      const VOICE_PANEL_BAD_CONNECTION_CTA = dismissible_content.DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA;
      const obj = DismissibleContentUnsafeUtils;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(VOICE_PANEL_BAD_CONNECTION_CTA);
      if (closure_0 != null) {
        closure_0();
      }
    },
    children: null
  });
  intl3 = require("intl").intl;
  return obj;
}
function handleSoundboardMobileFloatingCtaClose() {
  const obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
}
function CloseSoundboardMobileFloatingCtaIcon() {
  const intl = intl5.intl;
  return <Pressable accessibilityRole="button" accessibilityLabel={intl.string(intl5.t.cpT0Cq)} onPress={handleSoundboardMobileFloatingCtaClose}>{null}</Pressable>;
}
function getDismissableCTAProps(arg0) {
  let dismissableContent;
  let getDeviceSpecificString;
  let obj2;
  let require;
  ({ dismissableContent, channel: require } = arg0);
  const tmp = require;
  if (dismissible_content.DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA === dismissableContent) {
    return getBadConnectionCTAProps();
  } else if (dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA === dismissableContent) {
    let obj = {
      icon: jsx(SoundboardIcon.SoundboardIcon, { color: "interactive-icon-default" }),
      onPress() {
          if (null != _require) {
            const obj2 = { channel: tmp, analyticsSource: "SOUNDBOARD_MOBILE_FLOATING_CTA" };
            const obj = soundboard_SoundboardActionCreators;
            const result = obj.showSoundboardSoundPickerActionSheet(obj2);
          }
          const obj3 = DismissibleContentUnsafeUtils;
          const result1 = obj3.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
        },
      label: getDeviceSpecificString(obj2, intl5.t.IJgkPX),
      trailing: null
    };
    obj2 = { quest: intl5.t.XLlWUe };
    getDeviceSpecificString = getDeviceSpecificString2.getDeviceSpecificString;
    getDeviceSpecificString2;
    return obj;
  } else {
    const DONUT_MOBILE_NUX = dismissible_content.DismissibleContent.DONUT_MOBILE_NUX;
    return null;
  }
}
const Pressable = react_native.Pressable;
let closure_8 = GuildScheduledEventStore.isGuildScheduledEventActive;
const constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const jsx = Fragment.jsx;
const OverrideFloatingCTA = { BAD_CONNECTION: "BAD_CONNECTION" };
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelFloatingCTAUtils.tsx");

export const FLOATING_CTA_HIDE_TIMEOUT = 5000;
export { OverrideFloatingCTA };
export function useShouldShowFloatingCTA(channelId) {
  let dismissableContent;
  let stateFromStores;
  _require = channelId;
  const tmp = dismissableContent(stateFromStores[27])(channelId);
  let obj = require("useGetDismissibleContent");
  dismissableContent = _slicedToArray(obj.useGetDismissibleContent(tmp), 1)[0];
  const items = [ChannelStore];
  const obj2 = require("useStateFromStores");
  stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [dismissableContent, stateFromStores];
  const memo = react.useMemo(() => {
    const obj = { dismissableContent, channel: stateFromStores };
    return getDismissableCTAProps(obj);
  }, items1);
  const tmp5 = null != memo || null != useFloatingCTAProps(stateFromStores);
  return tmp5;
}
export { useFloatingCTAProps };
export { getBadConnectionCTAProps };
export { getDismissableCTAProps };
