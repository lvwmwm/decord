// Module ID: 8448
// Function ID: 67387
// Name: useGuildUpcomingEvents
// Dependencies: []
// Exports: default, useActiveEvent, useActiveEventsByChannel, useFirstActiveEventChannel, useGuildActiveEvent, useGuildChannelScheduledEvents, useGuildUpcomingEventsNotice, useImminentUpcomingGuildEvents

// Module 8448 (useGuildUpcomingEvents)
function useGuildUpcomingEvents(arg0) {
  const arg1 = arg0;
  const items = [closure_9, closure_4, closure_6];
  const items1 = [arg0];
  return arg1(dependencyMap[10]).useStateFromStoresArray(items, () => {
    const guildScheduledEventsByIndex = guildScheduledEventsByIndex.getGuildScheduledEventsByIndex(closure_8.GUILD_EVENT_UPCOMING(arg0));
    return guildScheduledEventsByIndex.filter((entity_type) => {
      if (entity_type.entity_type !== constants.NONE) {
        if (entity_type.status === constants2.SCHEDULED) {
          if (null == entity_type.channel_id) {
            return true;
          } else {
            return closure_6.can(constants3.VIEW_CHANNEL, channel.getChannel(entity_type.channel_id));
          }
        }
      }
      return false;
    });
  }, items1);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ isGuildScheduledEventActive: closure_7, StaticGuildEventIndexes: closure_8 } = arg1(dependencyMap[5]));
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[5]);
({ GuildScheduledEventEntityTypes: closure_11, GuildScheduledEventStatus: closure_12 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ GuildFeatures: closure_13, Permissions: closure_14 } = arg1(dependencyMap[8]));
let closure_15 = [];
let closure_16 = 15 * importDefault(dependencyMap[9]).Millis.MINUTE;
const tmp4 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEvents.tsx");

export default function useGuildEvents(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [closure_5, closure_9, closure_6, closure_4];
  const items1 = [arg1, arg0];
  return arg1(dependencyMap[10]).useStateFromStoresArray(items, () => {
    const guild = guild.getGuild(arg0);
    if (null == guild) {
      let found = closure_15;
    } else {
      if (null != arg1) {
        let GUILD_EVENT_UPCOMINGResult = arg1;
      } else {
        GUILD_EVENT_UPCOMINGResult = closure_8.GUILD_EVENT_UPCOMING(guild.id);
      }
      const guildScheduledEventsByIndex = guildScheduledEventsByIndex.getGuildScheduledEventsByIndex(GUILD_EVENT_UPCOMINGResult);
      found = guildScheduledEventsByIndex.filter((channel_id) => {
        channel_id = channel_id.channel_id;
        if (null == channel_id) {
          return true;
        } else {
          return closure_6.can(constants.VIEW_CHANNEL, channel.getChannel(channel_id));
        }
      });
    }
    return found;
  }, items1);
};
export const useActiveEvent = function useActiveEvent(id) {
  const arg1 = id;
  const items = [closure_9, closure_4, closure_6];
  const items1 = [id];
  return arg1(dependencyMap[10]).useStateFromStores(items, () => {
    const channel = channel.getChannel(arg0);
    if (closure_6.can(constants.VIEW_CHANNEL, channel)) {
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      if (null == guild_id) {
        return null;
      } else {
        const guildScheduledEventsByIndex = guildScheduledEventsByIndex.getGuildScheduledEventsByIndex(closure_8.CHANNEL_EVENT_ACTIVE(arg0));
        let first = null;
        if (guildScheduledEventsByIndex.length > 0) {
          first = guildScheduledEventsByIndex[0];
        }
        return first;
      }
    } else {
      return null;
    }
  }, items1);
};
export const useActiveEventsByChannel = function useActiveEventsByChannel(arg0) {
  const arg1 = arg0;
  const items = [closure_9];
  const items1 = [arg0];
  const stateFromStoresArray = arg1(dependencyMap[10]).useStateFromStoresArray(items, () => guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(arg0), items1);
  const dependencyMap = stateFromStoresArray;
  const items2 = [stateFromStoresArray];
  return React.useMemo(() => {
    const map = new Map();
    const arg0 = map;
    const item = stateFromStoresArray.forEach((channel_id) => {
      channel_id = channel_id.channel_id;
      if (null != channel_id) {
        const result = map.set(channel_id, channel_id);
      }
    });
    return map;
  }, items2);
};
export { useGuildUpcomingEvents };
export const useGuildUpcomingEventsNotice = function useGuildUpcomingEventsNotice(arg0) {
  let nextShownUpcomingEventNoticeType;
  let tmp8;
  const arg1 = arg0;
  const arr = useGuildUpcomingEvents(arg0);
  const dependencyMap = arr;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_10];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => store.getAllEventDismissals());
  const items1 = [closure_10];
  const stateFromStoresObject1 = arg1(dependencyMap[10]).useStateFromStoresObject(items1, () => store.getAllUpcomingNoticeSeenTimes());
  const obj2 = arg1(dependencyMap[10]);
  const items2 = [closure_9];
  const items3 = [arr];
  const stateFromStoresObject2 = arg1(dependencyMap[10]).useStateFromStoresObject(items2, () => {
    if (null == arr) {
      let reduced = {};
    } else {
      reduced = arr.reduce((arg0, id) => {
        let obj = callback(closure_1[11]);
        obj = {};
        const nextRecurrenceIdInEvent = obj.getNextRecurrenceIdInEvent(id);
        const merged = Object.assign(arg0);
        obj[id.id] = interestedInEventRecurrence.isInterestedInEventRecurrence(id.id, nextRecurrenceIdInEvent);
        return obj;
      }, {});
    }
    return reduced;
  }, items3);
  const obj3 = arg1(dependencyMap[10]);
  const items4 = [closure_5];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items4, () => guild.getGuild(arg0));
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = !features.has(constants.COMMUNITY);
  }
  if (hasItem) {
    const features2 = stateFromStores.features;
    hasItem = features2.has(constants.INTERNAL_EMPLOYEE_ONLY);
  }
  if (null != arr) {
    if (null != stateFromStoresObject2) {
      if (hasItem) {
        let num = 0;
        if (0 < arr.length) {
          while (true) {
            tmp8 = arr[num];
            let tmp9 = stateFromStoresObject[tmp8.id];
            let tmp10 = stateFromStoresObject1[tmp8.id];
            let tmp11 = stateFromStoresObject2[tmp8.id];
            let tmp12 = null != tmp11 && tmp11;
            let tmp13 = arg1;
            let tmp14 = dependencyMap;
            let obj5 = arg1(dependencyMap[12]);
            let tmp15 = obj5;
            let tmp16 = tmp8;
            let tmp17 = tmp9;
            let tmp18 = tmp10;
            let tmp19 = tmp12;
            nextShownUpcomingEventNoticeType = obj5.getNextShownUpcomingEventNoticeType(tmp8, tmp9, tmp10, tmp12);
            if (null != nextShownUpcomingEventNoticeType) {
              break;
            } else {
              num = num + 1;
            }
          }
          obj = { upcomingEvent: tmp8, noticeType: nextShownUpcomingEventNoticeType };
          return obj;
        }
      }
    }
  }
};
export const useGuildActiveEvent = function useGuildActiveEvent(guild_id) {
  const arg1 = guild_id;
  const items = [closure_9, closure_4, closure_6];
  const items1 = [guild_id];
  return arg1(dependencyMap[10]).useStateFromStores(items, () => {
    const guildScheduledEventsByIndex = guildScheduledEventsByIndex.getGuildScheduledEventsByIndex(closure_8.GUILD_EVENT_ACTIVE(arg0));
    return guildScheduledEventsByIndex.find((entity_type) => {
      if (entity_type.entity_type !== constants.NONE) {
        if (callback(entity_type)) {
          if (null == entity_type.channel_id) {
            return true;
          } else {
            return closure_6.can(constants2.VIEW_CHANNEL, channel.getChannel(entity_type.channel_id));
          }
        }
      }
      return false;
    });
  }, items1);
};
export const useGuildChannelScheduledEvents = function useGuildChannelScheduledEvents(id) {
  const arg1 = id;
  const items = [closure_9];
  const items1 = [id];
  return arg1(dependencyMap[10]).useStateFromStores(items, () => guildScheduledEventsByIndex.getGuildScheduledEventsByIndex(closure_8.CHANNEL_EVENT_UPCOMING(arg0)), items1);
};
export const useFirstActiveEventChannel = function useFirstActiveEventChannel(id) {
  const arg1 = id;
  const items = [closure_4, closure_9];
  const items1 = [id];
  return arg1(dependencyMap[10]).useStateFromStores(items, () => {
    const guildScheduledEventsByIndex = guildScheduledEventsByIndex.getGuildScheduledEventsByIndex(closure_8.GUILD_EVENT_ACTIVE(arg0));
    const found = guildScheduledEventsByIndex.find((channel_id) => null != channel.getChannel(channel_id.channel_id));
    let channel_id;
    if (null != found) {
      channel_id = found.channel_id;
    }
    return channel.getChannel(channel_id);
  }, items1);
};
export const useImminentUpcomingGuildEvents = function useImminentUpcomingGuildEvents(id) {
  let tmp2;
  const arg1 = id;
  [tmp2, closure_1] = callback(React.useState(() => Date.now()), 2);
  const effect = React.useEffect(() => {
    const interval = setInterval(() => {
      callback(Date.now());
    }, closure_16);
    return () => clearInterval(closure_0);
  }, []);
  const tmp = callback(React.useState(() => Date.now()), 2);
  const items = [closure_9];
  const items1 = [id, tmp2];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => {
    if (null == arg0) {
      let items = [];
    } else {
      items = guildScheduledEventsByIndex.getGuildScheduledEventsByIndex(closure_8.CHANNEL_EVENT_UPCOMING(arg0));
    }
    return items;
  }, items1);
  const callback = stateFromStores;
  const items2 = [stateFromStores];
  return React.useMemo(() => stateFromStores.filter((status) => {
    let endTime;
    let startTime;
    let toISOStringResult1;
    const eventSchedule = callback(closure_1[13]).getEventSchedule(status);
    ({ startTime, endTime } = eventSchedule);
    const obj = callback(closure_1[13]);
    const obj2 = callback(closure_1[11]);
    if (null != endTime) {
      toISOStringResult1 = endTime.toISOString();
    }
    const eventTimeData = obj2.getEventTimeData(startTime.toISOString(), toISOStringResult1);
    let withinStartWindow = status.status !== constants.ACTIVE;
    if (withinStartWindow) {
      withinStartWindow = eventTimeData.withinStartWindow;
    }
    if (withinStartWindow) {
      withinStartWindow = eventTimeData.diffMinutes < 15;
    }
    return withinStartWindow;
  }), items2);
};
