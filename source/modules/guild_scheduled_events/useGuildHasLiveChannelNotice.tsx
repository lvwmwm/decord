// Module ID: 14885
// Function ID: 112110
// Name: useGuildHasLiveChannelNotice
// Dependencies: []
// Exports: useGuildHasLiveChannelNotice, useGuildLiveChannelNoticeInfo

// Module 14885 (useGuildHasLiveChannelNotice)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = arg1(dependencyMap[8]).GuildScheduledEventEntityTypes;
const Permissions = arg1(dependencyMap[9]).Permissions;
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx");

export const useGuildHasLiveChannelNotice = function useGuildHasLiveChannelNotice(id) {
  const first = importDefault(dependencyMap[10])(id)[0];
  id = undefined;
  if (null != first) {
    id = first.id;
  }
  const channel = channel.getChannel(id);
  const arg1 = channel;
  const items = [closure_5];
  const items1 = [channel];
  const stateFromStores = arg1(dependencyMap[11]).useStateFromStores(items, () => {
    let id;
    if (null != channel) {
      id = channel.id;
    }
    return stageInstanceByChannel.getStageInstanceByChannel(id);
  }, items1);
  const importDefault = stateFromStores;
  const obj = arg1(dependencyMap[11]);
  const guildActiveEvent = arg1(dependencyMap[12]).useGuildActiveEvent(id);
  const dependencyMap = guildActiveEvent;
  const obj2 = arg1(dependencyMap[12]);
  const items2 = [closure_10];
  const items3 = [stateFromStores, guildActiveEvent];
  const stateFromStoresObject = arg1(dependencyMap[11]).useStateFromStoresObject(items2, () => {
    let obj = {};
    obj = {};
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    obj.stageId = id;
    obj.isStageNoticeHidden = closure_10.isLiveChannelNoticeHidden(obj);
    obj = {};
    let id1;
    if (null != guildActiveEvent) {
      id1 = guildActiveEvent.id;
    }
    obj.eventId = id1;
    obj.isEventNoticeHidden = closure_10.isLiveChannelNoticeHidden(obj);
    return obj;
  }, items3);
  const isStageNoticeHidden = stateFromStoresObject.isStageNoticeHidden;
  if (null == guildActiveEvent) {
    return null != stateFromStores && !isStageNoticeHidden;
  }
};
export const useGuildLiveChannelNoticeInfo = function useGuildLiveChannelNoticeInfo(id) {
  const activeEventOrStageInstanceChannel = arg1(dependencyMap[13]).useActiveEventOrStageInstanceChannel(id);
  const arg1 = activeEventOrStageInstanceChannel;
  const obj = arg1(dependencyMap[13]);
  const items = [closure_8];
  const stateFromStores = arg1(dependencyMap[11]).useStateFromStores(items, () => {
    let canResult = null != activeEventOrStageInstanceChannel;
    if (canResult) {
      canResult = closure_8.can(constants2.CONNECT, activeEventOrStageInstanceChannel);
    }
    return canResult;
  });
  const importDefault = stateFromStores;
  const obj2 = arg1(dependencyMap[11]);
  const guildActiveEvent = arg1(dependencyMap[12]).useGuildActiveEvent(id);
  const obj3 = arg1(dependencyMap[12]);
  const items1 = [closure_5];
  const items2 = [activeEventOrStageInstanceChannel];
  const stateFromStores1 = arg1(dependencyMap[11]).useStateFromStores(items1, () => {
    let id;
    if (null != activeEventOrStageInstanceChannel) {
      id = activeEventOrStageInstanceChannel.id;
    }
    return entity_type.getStageInstanceByChannel(id);
  }, items2);
  const obj4 = arg1(dependencyMap[11]);
  id = undefined;
  if (null != activeEventOrStageInstanceChannel) {
    id = activeEventOrStageInstanceChannel.id;
  }
  const tmp6 = arg1(dependencyMap[14]).useActualStageSpeakerCount(id) > 0;
  const obj5 = arg1(dependencyMap[14]);
  const items3 = [closure_9];
  const stateFromStores2 = arg1(dependencyMap[11]).useStateFromStores(items3, () => {
    let tmp = null != activeEventOrStageInstanceChannel;
    if (tmp) {
      tmp = voiceStatesForChannel.getVoiceStatesForChannel(activeEventOrStageInstanceChannel).length > 0;
    }
    return tmp;
  });
  let dependencyMap = false;
  if (null != activeEventOrStageInstanceChannel) {
    if (null != stateFromStores1) {
      dependencyMap = tmp6;
      let flag = tmp6;
    }
    const items4 = [closure_4];
    const items5 = [activeEventOrStageInstanceChannel];
    const stateFromStores3 = arg1(dependencyMap[11]).useStateFromStores(items4, () => {
      let tmp = null != activeEventOrStageInstanceChannel;
      if (tmp) {
        tmp = stateFromStores4.getParticipantCount(activeEventOrStageInstanceChannel.id, activeEventOrStageInstanceChannel(stateFromStores2[15]).StageChannelParticipantNamedIndex.AUDIENCE) > 0;
      }
      return tmp;
    }, items5);
    const React = stateFromStores3;
    const obj7 = arg1(dependencyMap[11]);
    const items6 = [closure_6];
    const stateFromStores4 = arg1(dependencyMap[11]).useStateFromStores(items6, () => {
      let tmp = null != activeEventOrStageInstanceChannel;
      if (tmp) {
        tmp = allApplicationStreamsForChannel.getAllApplicationStreamsForChannel(activeEventOrStageInstanceChannel.id).length > 0;
      }
      return tmp;
    });
    closure_4 = stateFromStores4;
    let entity_type;
    if (null != guildActiveEvent) {
      entity_type = guildActiveEvent.entity_type;
    }
    closure_5 = entity_type;
    const items7 = [stateFromStores, entity_type, flag, stateFromStores3, stateFromStores4];
    return React.useMemo(() => ({ hasButton: tmp, hasSpeakers: stateFromStores2, hasAudience: stateFromStores3, hasStream: stateFromStores4 }), items7);
  }
  flag = false;
  if (tmp8) {
    dependencyMap = stateFromStores2;
    flag = stateFromStores2;
  }
};
