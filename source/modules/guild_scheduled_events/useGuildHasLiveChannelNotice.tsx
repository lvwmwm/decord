// Module ID: 15059
// Function ID: 114676
// Name: useGuildHasLiveChannelNotice
// Dependencies: [31, 4951, 1353, 4149, 1348, 3758, 4203, 15060, 1354, 482, 15061, 566, 8499, 15062, 4963, 4957, 2]
// Exports: useGuildHasLiveChannelNotice, useGuildLiveChannelNoticeInfo

// Module 15059 (useGuildHasLiveChannelNotice)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { GuildScheduledEventEntityTypes as closure_11 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { Permissions } from "sum";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx");

export const useGuildHasLiveChannelNotice = function useGuildHasLiveChannelNotice(id) {
  const first = stateFromStores(guildActiveEvent[10])(id)[0];
  id = undefined;
  if (null != first) {
    id = first.id;
  }
  channel = channel.getChannel(id);
  const items = [closure_5];
  const items1 = [channel];
  stateFromStores = channel(guildActiveEvent[11]).useStateFromStores(items, () => {
    let id;
    if (null != channel) {
      id = channel.id;
    }
    return outer1_5.getStageInstanceByChannel(id);
  }, items1);
  let obj = channel(guildActiveEvent[11]);
  guildActiveEvent = channel(guildActiveEvent[12]).useGuildActiveEvent(id);
  const obj2 = channel(guildActiveEvent[12]);
  const items2 = [closure_10];
  const items3 = [stateFromStores, guildActiveEvent];
  const stateFromStoresObject = channel(guildActiveEvent[11]).useStateFromStoresObject(items2, () => {
    let obj = {};
    obj = {};
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    obj.stageId = id;
    obj.isStageNoticeHidden = outer1_10.isLiveChannelNoticeHidden(obj);
    obj = {};
    let id1;
    if (null != guildActiveEvent) {
      id1 = guildActiveEvent.id;
    }
    obj.eventId = id1;
    obj.isEventNoticeHidden = outer1_10.isLiveChannelNoticeHidden(obj);
    return obj;
  }, items3);
  const isStageNoticeHidden = stateFromStoresObject.isStageNoticeHidden;
  if (null == guildActiveEvent) {
    return null != stateFromStores && !isStageNoticeHidden;
  }
};
export const useGuildLiveChannelNoticeInfo = function useGuildLiveChannelNoticeInfo(id) {
  activeEventOrStageInstanceChannel = activeEventOrStageInstanceChannel(stateFromStores2[13]).useActiveEventOrStageInstanceChannel(id);
  const obj = activeEventOrStageInstanceChannel(stateFromStores2[13]);
  const items = [closure_8];
  const stateFromStores = activeEventOrStageInstanceChannel(stateFromStores2[11]).useStateFromStores(items, () => {
    let canResult = null != activeEventOrStageInstanceChannel;
    if (canResult) {
      canResult = outer1_8.can(outer1_12.CONNECT, activeEventOrStageInstanceChannel);
    }
    return canResult;
  });
  const obj2 = activeEventOrStageInstanceChannel(stateFromStores2[11]);
  const guildActiveEvent = activeEventOrStageInstanceChannel(stateFromStores2[12]).useGuildActiveEvent(id);
  const obj3 = activeEventOrStageInstanceChannel(stateFromStores2[12]);
  const items1 = [entity_type];
  const items2 = [activeEventOrStageInstanceChannel];
  const stateFromStores1 = activeEventOrStageInstanceChannel(stateFromStores2[11]).useStateFromStores(items1, () => {
    let id;
    if (null != activeEventOrStageInstanceChannel) {
      id = activeEventOrStageInstanceChannel.id;
    }
    return entity_type.getStageInstanceByChannel(id);
  }, items2);
  const obj4 = activeEventOrStageInstanceChannel(stateFromStores2[11]);
  id = undefined;
  if (null != activeEventOrStageInstanceChannel) {
    id = activeEventOrStageInstanceChannel.id;
  }
  const tmp6 = activeEventOrStageInstanceChannel(stateFromStores2[14]).useActualStageSpeakerCount(id) > 0;
  const obj5 = activeEventOrStageInstanceChannel(stateFromStores2[14]);
  const items3 = [closure_9];
  stateFromStores2 = activeEventOrStageInstanceChannel(stateFromStores2[11]).useStateFromStores(items3, () => {
    let tmp = null != activeEventOrStageInstanceChannel;
    if (tmp) {
      tmp = outer1_9.getVoiceStatesForChannel(activeEventOrStageInstanceChannel).length > 0;
    }
    return tmp;
  });
  stateFromStores2 = false;
  if (null != activeEventOrStageInstanceChannel) {
    if (null != stateFromStores1) {
      stateFromStores2 = tmp6;
      let flag = tmp6;
    }
    const items4 = [stateFromStores4];
    const items5 = [activeEventOrStageInstanceChannel];
    const stateFromStores3 = activeEventOrStageInstanceChannel(stateFromStores2[11]).useStateFromStores(items4, () => {
      let tmp = null != activeEventOrStageInstanceChannel;
      if (tmp) {
        tmp = stateFromStores4.getParticipantCount(activeEventOrStageInstanceChannel.id, activeEventOrStageInstanceChannel(stateFromStores2[15]).StageChannelParticipantNamedIndex.AUDIENCE) > 0;
      }
      return tmp;
    }, items5);
    const obj7 = activeEventOrStageInstanceChannel(stateFromStores2[11]);
    const items6 = [closure_6];
    stateFromStores4 = activeEventOrStageInstanceChannel(stateFromStores2[11]).useStateFromStores(items6, () => {
      let tmp = null != activeEventOrStageInstanceChannel;
      if (tmp) {
        tmp = outer1_6.getAllApplicationStreamsForChannel(activeEventOrStageInstanceChannel.id).length > 0;
      }
      return tmp;
    });
    entity_type = undefined;
    if (null != guildActiveEvent) {
      entity_type = guildActiveEvent.entity_type;
    }
    const items7 = [stateFromStores, entity_type, flag, stateFromStores3, stateFromStores4];
    return stateFromStores3.useMemo(() => ({ hasButton: tmp, hasSpeakers: stateFromStores2, hasAudience: stateFromStores3, hasStream: stateFromStores4 }), items7);
  }
  flag = false;
  if (tmp8) {
    flag = stateFromStores2;
  }
};
