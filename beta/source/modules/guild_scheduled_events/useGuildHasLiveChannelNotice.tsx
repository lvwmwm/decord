// Module ID: 15816
// Function ID: 15817
// Name: useGuildHasLiveChannelNotice
// Dependencies: [19, 5730, 2050, 4858, 2045, 4469, 4860, 15817, 2051, 1085, 15818, 504, 8943, 15819, 5743, 5737, 2]
// Exports: useGuildHasLiveChannelNotice, useGuildLiveChannelNoticeInfo

// Module 15816 (useGuildHasLiveChannelNotice)
import Constants from "Constants" /* 1085 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5737 */;
import react from "react" /* 19 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5730 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4860 */;
import LiveChannelNoticesStore from "LiveChannelNoticesStore" /* 15817 */;
import size from "module_2" /* 2 */;

let closure_11 = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx");

export const useGuildHasLiveChannelNotice = function useGuildHasLiveChannelNotice(id) {
  let guildActiveEvent;
  let stateFromStores;
  let tmp9;
  let tmp = guildActiveEvent;
  const first = stateFromStores(guildActiveEvent[10])(id)[0];
  id = undefined;
  const getChannel = ChannelStore.getChannel;
  if (first != null) {
    id = first.id;
  }
  const channel = getChannel(id);
  let obj = channel(tmp[11]);
  const items = [StageInstanceStore];
  const items1 = [channel];
  stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    const getStageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel;
    if (channel != null) {
      id = channel.id;
    }
    return getStageInstanceByChannel(id);
  }, items1);
  const obj2 = channel(tmp[12]);
  guildActiveEvent = obj2.useGuildActiveEvent(id);
  const items2 = [LiveChannelNoticesStore];
  const items3 = [stateFromStores, guildActiveEvent];
  const obj3 = channel(tmp[11]);
  const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
    let id1;
    let isLiveChannelNoticeHidden2;
    let id;
    const isLiveChannelNoticeHidden = LiveChannelNoticesStore.isLiveChannelNoticeHidden;
    const tmp = LiveChannelNoticesStore;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    const obj = { isStageNoticeHidden: isLiveChannelNoticeHidden({ stageId: id }), isEventNoticeHidden: isLiveChannelNoticeHidden2({ eventId: id1 }) };
    id1 = undefined;
    isLiveChannelNoticeHidden2 = tmp.isLiveChannelNoticeHidden;
    if (guildActiveEvent != null) {
      id1 = guildActiveEvent.id;
    }
    return obj;
  }, items3);
  const isStageNoticeHidden = stateFromStoresObject.isStageNoticeHidden;
  if (null != guildActiveEvent) {
    tmp9 = null != stateFromStores ? !isStageNoticeHidden : !stateFromStoresObject.isEventNoticeHidden;
  } else {
    tmp9 = null != stateFromStores && !isStageNoticeHidden;
  }
  return tmp9;
};
export const useGuildLiveChannelNoticeInfo = function useGuildLiveChannelNoticeInfo(id) {
  let activeEventOrStageInstanceChannel;
  let entity_type;
  let flag;
  let stateFromStores2;
  let stateFromStores4;
  const tmp = activeEventOrStageInstanceChannel;
  let tmp2 = stateFromStores2;
  const obj = activeEventOrStageInstanceChannel(stateFromStores2[13]);
  activeEventOrStageInstanceChannel = obj.useActiveEventOrStageInstanceChannel(id);
  const items = [PermissionStore];
  const obj2 = activeEventOrStageInstanceChannel(stateFromStores2[11]);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const canResult = null != activeEventOrStageInstanceChannel && PermissionStore.can(Permissions.CONNECT, tmp);
    return canResult;
  });
  const obj3 = activeEventOrStageInstanceChannel(stateFromStores2[12]);
  const guildActiveEvent = obj3.useGuildActiveEvent(id);
  const items1 = [entity_type];
  const items2 = [activeEventOrStageInstanceChannel];
  const obj4 = activeEventOrStageInstanceChannel(stateFromStores2[11]);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => {
    let id;
    const getStageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel;
    if (activeEventOrStageInstanceChannel != null) {
      id = activeEventOrStageInstanceChannel.id;
    }
    return getStageInstanceByChannel(id);
  }, items2);
  id = undefined;
  const useActualStageSpeakerCount = activeEventOrStageInstanceChannel(stateFromStores2[14]).useActualStageSpeakerCount;
  activeEventOrStageInstanceChannel(stateFromStores2[14]);
  if (activeEventOrStageInstanceChannel != null) {
    id = activeEventOrStageInstanceChannel.id;
  }
  const tmp9 = useActualStageSpeakerCount(id) > 0;
  const items3 = [SortedVoiceStateStore];
  const tmpResult = tmp(tmp2[11]);
  tmpResult.useStateFromStores(items3, () => {
    const tmp2 = null != activeEventOrStageInstanceChannel && SortedVoiceStateStore.getVoiceStatesForChannel(tmp).length > 0;
    return tmp2;
  });
  stateFromStores2 = false;
  if (null != activeEventOrStageInstanceChannel) {
    if (null != stateFromStores1) {
      stateFromStores2 = tmp9;
      flag = tmp9;
    }
    const items4 = [stateFromStores4];
    const items5 = [activeEventOrStageInstanceChannel];
    const tmpResult3 = tmp(tmp2[11]);
    const stateFromStores3 = tmpResult3.useStateFromStores(items4, () => {
      const tmp2 = null != activeEventOrStageInstanceChannel && StageChannelParticipantStore.getParticipantCount(tmp.id, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE) > 0;
      return tmp2;
    }, items5);
    const items6 = [ApplicationStreamingStore];
    const tmpResult4 = tmp(tmp2[11]);
    stateFromStores4 = tmpResult4.useStateFromStores(items6, () => {
      const tmp2 = null != activeEventOrStageInstanceChannel && ApplicationStreamingStore.getAllApplicationStreamsForChannel(tmp.id).length > 0;
      return tmp2;
    });
    entity_type = undefined;
    if (guildActiveEvent != null) {
      entity_type = guildActiveEvent.entity_type;
    }
    const items7 = [stateFromStores, entity_type, flag, stateFromStores3, stateFromStores4];
    return stateFromStores3.useMemo(() => ({ hasButton: entity_type === constants.EXTERNAL || stateFromStores, hasSpeakers: stateFromStores2, hasAudience: stateFromStores3, hasStream: stateFromStores4 }), items7);
  }
  flag = false;
  const tmp11 = null != activeEventOrStageInstanceChannel && null != guildActiveEvent;
  if (tmp11) {
    flag = stateFromStores2;
  }
};
