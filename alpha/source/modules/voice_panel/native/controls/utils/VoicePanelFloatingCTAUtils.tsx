// Module ID: 19750
// Function ID: 19751
// Name: VoicePanelFloatingCTAUtils
// Dependencies: [32, 19, 17, 6953, 19751, 6966, 5092, 5098, 21, 5484, 11918, 19735, 8360, 563, 7965, 7906, 7902, 5489, 7924, 19752, 15450, 8043, 8391, 1113, 7483, 19753, 10912, 11885, 11883, 12816, 12828, 11886, 6274, 575, 7922, 6846, 7831, 11888, 12813, 7952, 6840, 19754, 9494, 11186, 5285, 7557, 5076, 19755, 10657, 5502, 2]
// Exports: useShouldShowFloatingCTA

// Module 19750 (VoicePanelFloatingCTAUtils)
import react_native from "react-native" /* 17 */;
import intl6 from "intl" /* 1113 */;
import dismissible_content from "dismissible_content" /* 5076 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 5098 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5285 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 6846 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6966 */;
import XSmallIcon from "XSmallIcon" /* 7483 */;
import speakOnStageDefault from "speakOnStage" /* 11888 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 19755 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6953 */;
import EventBannerStore from "EventBannerStore" /* 19751 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_12;
let tmp;
let unpackModuleId;
const getDeviceSpecificString2 = tmp(5502);
const SoundboardIcon = tmp(10657);
function useStageCTAProps(stateFromStores) {
  let Icon;
  let Icon2;
  let Stack;
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let obj4;
  let obj5;
  let obj9;
  let showControls;
  let tmp17;
  let tmp27;
  _require = stateFromStores;
  let obj = react;
  let tmp = showControls;
  const context = react.useContext(showControls(11918));
  showControls = context.showControls;
  const tmp4 = showControls(19735)(context.channelId);
  const obj2 = require("StageChannelUnifiedCallExperiment");
  const isStageUnifiedCall = obj2.useIsStageUnifiedCall(stateFromStores, "VoicePanelFloatingCTA");
  const tmp7 = showControls(11883)();
  let id;
  const useStageBlockedUsersCount = require("useStageBlockedUsersCount").useStageBlockedUsersCount;
  require("useStageBlockedUsersCount");
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const stageBlockedUsersCount = useStageBlockedUsersCount(id);
  let id1;
  const useStageIgnoredUsersCount = require("useStageBlockedUsersCount").useStageIgnoredUsersCount;
  require("useStageBlockedUsersCount");
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  const stageIgnoredUsersCount = useStageIgnoredUsersCount(id1);
  dependencyMap = tmp14;
  const items = [null != stateFromStores && isStageUnifiedCall && tmp4 && tmp7, showControls];
  const effect = obj.useEffect(() => {
    const tmp = closure_2;
    if (tmp) {
      showControls();
    }
  }, items);
  let tmp16;
  if (null != stateFromStores && isStageUnifiedCall && tmp4 && tmp7) {
    const obj3 = { label: intl.string(require("intl").t.Ul1RJQ), subLabel: tmp17, icon: closure_11(Icon, obj4), trailing: closure_12(Stack, obj5) };
    intl = tmp5(1113).intl;
    if (stageBlockedUsersCount > 0) {
      tmp17 = tmp(12828)(stageBlockedUsersCount, stageIgnoredUsersCount);
    }
    obj4 = { IconComponent: require("HandRequestSpeakIcon").HandRequestSpeakIcon, variant: "translucent" };
    Icon = tmp5(8043).RowButton.Icon;
    obj5 = { direction: "horizontal", spacing: tmp(575).space.PX_8, children: items1 };
    Stack = tmp5(6274).Stack;
    const obj6 = {
      size: "sm",
      variant: "secondary",
      icon: closure_11(require("XSmallIcon").XSmallIcon, {}),
      accessibilityLabel: intl2.string(require("intl").t["1YDv7a"]),
      onPress() {
          const obj = StageChannelActionCreators;
          return obj.audienceAckRequestToSpeak(stateFromStores, true);
        }
    };
    const IconButton = tmp5(7922).IconButton;
    intl2 = tmp5(1113).intl;
    items1 = [closure_11(IconButton, obj6), ];
    const obj7 = {
      size: "sm",
      variant: "primary",
      icon: closure_11(require("CheckmarkSmallIcon").CheckmarkSmallIcon, { color: "white" }),
      accessibilityLabel: intl3.string(require("intl").t.MpO0px),
      onPress() {
          return speakOnStageDefault(stateFromStores);
        }
    };
    const IconButton2 = tmp5(7922).IconButton;
    intl3 = tmp5(1113).intl;
    items1[1] = closure_11(IconButton2, obj7);
    tmp16 = obj3;
  }
  _require = stateFromStores;
  const tmp20 = tmp(19735)(obj.useContext(tmp(11918)).channelId);
  const tmp5Result3 = require("StageChannelUnifiedCallExperiment");
  const isStageUnifiedCall1 = tmp5Result3.useIsStageUnifiedCall(stateFromStores, "VoicePanelFloatingCTA");
  let id2;
  const useStageChannelStartEvent = require("useStageChannelConnectAction").useStageChannelStartEvent;
  require("useStageChannelConnectAction");
  if (stateFromStores != null) {
    id2 = stateFromStores.id;
  }
  const stageChannelStartEvent = useStageChannelStartEvent(id2);
  if (null != stateFromStores) {
    if (isStageUnifiedCall1) {
      if (tmp20) {
        if (tmp25) {
          if (!tmp26) {
            const obj8 = {
              label: intl4.string(require("intl").t.OYbHfv),
              subLabel: intl5.string(require("intl").t.yXwLMQ),
              icon: closure_11(Icon2, obj9),
              onPress() {
                          const obj = stateFromStores(closure_2[40]);
                          return obj.openStageChannelSettings(stateFromStores);
                        }
            };
            intl4 = tmp5(1113).intl;
            intl5 = tmp5(1113).intl;
            obj9 = { IconComponent: require("StageIcon").StageIcon, variant: "translucent" };
            Icon2 = tmp5(8043).RowButton.Icon;
            tmp27 = obj8;
          }
        }
      }
    }
  }
  if (tmp16 == null) {
    tmp16 = tmp27;
  }
  return tmp16;
}
function useFloatingCTAProps(stateFromStores) {
  let Icon;
  let Icon2;
  let channelId;
  let closure_0;
  let entity_type;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isDockEnabled;
  let name;
  let obj4;
  let obj5;
  let obj6;
  let obj8;
  let participants;
  let scheduled_start_time;
  let setShowFloatingCTA;
  let text;
  let tmp22;
  let tmp33;
  let tmp7Result10;
  let obj = react;
  let tmp = setShowFloatingCTA;
  let tmp3 = setShowFloatingCTA(11186)(react.useContext(setShowFloatingCTA(11918)).showFloatingCTA);
  _require = tmp3;
  setShowFloatingCTA = undefined;
  setShowFloatingCTA = react.useContext(setShowFloatingCTA(11918)).setShowFloatingCTA;
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
  const tmp5 = setShowFloatingCTA(5484)();
  let id1;
  const tmp6 = setShowFloatingCTA(19735)(react.useContext(setShowFloatingCTA(11918)).channelId);
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
  const tmpResult = tmp(7902);
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
          const obj3 = { onPress: callback, icon: closure_11(Icon, obj4), label: name, subLabel: "" + text + " \u2022 " + intl.formatToPlainString(require("intl").t.NywdIj, obj5), trailing: closure_11(Pressable, obj6) };
          text = getGuildScheduledEventHeaderProps(obj2).text;
          obj4 = { IconComponent: require("CalendarIcon").CalendarIcon, variant: "translucent" };
          Icon = tmp7(8043).RowButton.Icon;
          intl = tmp7(1113).intl;
          const _HermesInternal = HermesInternal;
          obj5 = { count: tmpResultResult };
          obj6 = { accessibilityRole: "button", accessibilityLabel: intl2.string(require("intl").t.cpT0Cq), onPress: tmp21, children: closure_11(require("XSmallIcon").XSmallIcon, { color: "interactive-icon-default" }) };
          intl2 = tmp7(1113).intl;
          tmp22 = obj3;
        }
      }
    }
  }
  _require = stateFromStores;
  const context = obj.useContext(tmp(11918));
  ({ channelId, isDockEnabled } = context);
  const items4 = [ChannelRTCStore];
  const tmp29 = tmp(19735)(channelId);
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
  if (!isDockEnabled) {
    if (null != stateFromStores) {
      if (!stateFromStores.isDM()) {
        if (tmp29) {
          if (stateFromStores1) {
            const obj7 = { label: intl3.string(require("intl").t.N4nebq), subLabel: intl4.string(require("intl").t.o2XPr2), icon: closure_11(Icon2, obj8), onPress: tmp32 };
            intl3 = tmp7(1113).intl;
            intl4 = tmp7(1113).intl;
            obj8 = { IconComponent: require("GroupPlusIcon").GroupPlusIcon, variant: "translucent" };
            Icon2 = tmp7(8043).RowButton.Icon;
            tmp33 = obj7;
          }
        }
      }
    }
  }
  if (memo == null) {
    memo = tmp22;
  }
  if (memo == null) {
    memo = tmp33;
  }
  return memo;
}
function getBadConnectionCTAProps(arg0) {
  let Icon;
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let obj2;
  let obj3;
  _require = arg0;
  let obj = {
    label: intl.string(require("intl").t.uv1tVh),
    subLabel: intl2.string(require("intl").t["gQ14+g"]),
    icon: closure_11(Icon, obj2),
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    trailing: closure_11(Pressable, obj3)
  };
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  obj2 = { IconComponent: require("CircleErrorIcon").CircleErrorIcon, variant: "translucent" };
  Icon = require("RowButton").RowButton.Icon;
  obj3 = {
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
    children: closure_11(require("XSmallIcon").XSmallIcon, { color: "interactive-icon-default" })
  };
  intl3 = require("intl").intl;
  return obj;
}
function handleSoundboardMobileFloatingCtaClose() {
  const obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
}
function CloseSoundboardMobileFloatingCtaIcon() {
  let intl;
  const obj = { accessibilityRole: "button", accessibilityLabel: intl.string(intl6.t.cpT0Cq), onPress: handleSoundboardMobileFloatingCtaClose, children: unpackModuleId(XSmallIcon.XSmallIcon, { color: "interactive-icon-default" }) };
  intl = intl6.intl;
  return unpackModuleId(Pressable, obj);
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
      icon: closure_11(SoundboardIcon.SoundboardIcon, { color: "interactive-icon-default" }),
      onPress() {
          if (null != _require) {
            const obj2 = { channel: tmp, analyticsSource: "SOUNDBOARD_MOBILE_FLOATING_CTA" };
            const obj = soundboard_SoundboardActionCreators;
            const result = obj.showSoundboardSoundPickerActionSheet(obj2);
          }
          const obj3 = DismissibleContentUnsafeUtils;
          const result1 = obj3.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
        },
      label: getDeviceSpecificString(obj2, intl6.t.IJgkPX),
      trailing: closure_11(CloseSoundboardMobileFloatingCtaIcon, {})
    };
    obj2 = { quest: intl6.t.XLlWUe };
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
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const OverrideFloatingCTA = { BAD_CONNECTION: "BAD_CONNECTION" };
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelFloatingCTAUtils.tsx");

export const FLOATING_CTA_HIDE_TIMEOUT = 5000;
export { OverrideFloatingCTA };
export { useStageCTAProps };
export function useShouldShowFloatingCTA(channelId) {
  let dismissableContent;
  let stateFromStores;
  _require = channelId;
  const tmp = dismissableContent(stateFromStores[41])(channelId);
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
  let tmp7 = null != useStageCTAProps(stateFromStores);
  useStageCTAProps(stateFromStores);
  const tmp6 = useFloatingCTAProps(stateFromStores);
  if (!tmp7) {
    tmp7 = null != memo;
  }
  if (!tmp7) {
    tmp7 = null != tmp6;
  }
  return tmp7;
}
export { useFloatingCTAProps };
export { getBadConnectionCTAProps };
export { getDismissableCTAProps };
