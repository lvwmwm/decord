// Module ID: 8455
// Function ID: 67447
// Name: useGuildUpcomingEvents
// Dependencies: [57, 31, 1348, 1838, 3758, 6758, 8456, 1354, 653, 664, 566, 8346, 8457, 8352, 2]
// Exports: default, useActiveEvent, useActiveEventsByChannel, useFirstActiveEventChannel, useGuildActiveEvent, useGuildChannelScheduledEvents, useGuildUpcomingEventsNotice, useImminentUpcomingGuildEvents

// Module 8455 (useGuildUpcomingEvents)
import _slicedToArray from "_slicedToArray";
import result from "result";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import ME from "ME";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_7;
let closure_8;
const require = arg1;
function useGuildUpcomingEvents(arg0) {
  const _require = arg0;
  const items = [closure_9, closure_4, closure_6];
  const items1 = [arg0];
  return _require(566).useStateFromStoresArray(items, () => {
    const guildScheduledEventsByIndex = outer1_9.getGuildScheduledEventsByIndex(outer1_8.GUILD_EVENT_UPCOMING(closure_0));
    return guildScheduledEventsByIndex.filter((entity_type) => {
      if (entity_type.entity_type !== outer2_11.NONE) {
        if (entity_type.status === outer2_12.SCHEDULED) {
          if (null == entity_type.channel_id) {
            return true;
          } else {
            return outer2_6.can(outer2_14.VIEW_CHANNEL, outer2_4.getChannel(entity_type.channel_id));
          }
        }
      }
      return false;
    });
  }, items1);
}
({ isGuildScheduledEventActive: closure_7, StaticGuildEventIndexes: closure_8 } = _isNativeReflectConstruct);
({ GuildScheduledEventEntityTypes: closure_11, GuildScheduledEventStatus: closure_12 } = GUILD_EVENT_MAX_NAME_LENGTH);
({ GuildFeatures: closure_13, Permissions: closure_14 } = ME);
let closure_15 = [];
let closure_16 = 15 * require("set").Millis.MINUTE;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEvents.tsx");

export default function useGuildEvents(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [_createForOfIteratorHelperLoose, closure_9, closure_6, closure_4];
  const items1 = [arg1, arg0];
  return _require(566).useStateFromStoresArray(items, () => {
    const guild = outer1_5.getGuild(closure_0);
    if (null == guild) {
      let found = outer1_15;
    } else {
      if (null != closure_1) {
        let GUILD_EVENT_UPCOMINGResult = closure_1;
      } else {
        GUILD_EVENT_UPCOMINGResult = outer1_8.GUILD_EVENT_UPCOMING(guild.id);
      }
      const guildScheduledEventsByIndex = outer1_9.getGuildScheduledEventsByIndex(GUILD_EVENT_UPCOMINGResult);
      found = guildScheduledEventsByIndex.filter((channel_id) => {
        channel_id = channel_id.channel_id;
        if (null == channel_id) {
          return true;
        } else {
          return outer2_6.can(outer2_14.VIEW_CHANNEL, outer2_4.getChannel(channel_id));
        }
      });
    }
    return found;
  }, items1);
};
export const useActiveEvent = function useActiveEvent(id) {
  const _require = id;
  const items = [closure_9, closure_4, closure_6];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => {
    const channel = outer1_4.getChannel(closure_0);
    if (outer1_6.can(outer1_14.VIEW_CHANNEL, channel)) {
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      if (null == guild_id) {
        return null;
      } else {
        const guildScheduledEventsByIndex = outer1_9.getGuildScheduledEventsByIndex(outer1_8.CHANNEL_EVENT_ACTIVE(closure_0));
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
  const _require = arg0;
  const items = [closure_9];
  const items1 = [arg0];
  stateFromStoresArray = _require(stateFromStoresArray[10]).useStateFromStoresArray(items, () => outer1_9.getGuildScheduledEventsForGuild(closure_0), items1);
  const items2 = [stateFromStoresArray];
  return React.useMemo(() => {
    const map = new Map();
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
  const _require = arg0;
  const arr = useGuildUpcomingEvents(arg0);
  let obj = _require(arr[10]);
  const items = [closure_10];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => outer1_10.getAllEventDismissals());
  const items1 = [closure_10];
  const stateFromStoresObject1 = _require(arr[10]).useStateFromStoresObject(items1, () => outer1_10.getAllUpcomingNoticeSeenTimes());
  const obj2 = _require(arr[10]);
  const items2 = [closure_9];
  const items3 = [arr];
  const stateFromStoresObject2 = _require(arr[10]).useStateFromStoresObject(items2, () => {
    if (null == arr) {
      let reduced = {};
    } else {
      reduced = arr.reduce((arg0, id) => {
        let obj = callback(arr[11]);
        obj = {};
        const nextRecurrenceIdInEvent = obj.getNextRecurrenceIdInEvent(id);
        const merged = Object.assign(arg0);
        obj[id.id] = outer2_9.isInterestedInEventRecurrence(id.id, nextRecurrenceIdInEvent);
        return obj;
      }, {});
    }
    return reduced;
  }, items3);
  const obj3 = _require(arr[10]);
  const items4 = [_createForOfIteratorHelperLoose];
  const stateFromStores = _require(arr[10]).useStateFromStores(items4, () => outer1_5.getGuild(closure_0));
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
            let tmp13 = _require;
            let tmp14 = arr;
            let obj5 = _require(arr[12]);
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
  const _require = guild_id;
  const items = [closure_9, closure_4, closure_6];
  const items1 = [guild_id];
  return _require(566).useStateFromStores(items, () => {
    const guildScheduledEventsByIndex = outer1_9.getGuildScheduledEventsByIndex(outer1_8.GUILD_EVENT_ACTIVE(closure_0));
    return guildScheduledEventsByIndex.find((entity_type) => {
      if (entity_type.entity_type !== outer2_11.NONE) {
        if (outer2_7(entity_type)) {
          if (null == entity_type.channel_id) {
            return true;
          } else {
            return outer2_6.can(outer2_14.VIEW_CHANNEL, outer2_4.getChannel(entity_type.channel_id));
          }
        }
      }
      return false;
    });
  }, items1);
};
export const useGuildChannelScheduledEvents = function useGuildChannelScheduledEvents(id) {
  const _require = id;
  const items = [closure_9];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => outer1_9.getGuildScheduledEventsByIndex(outer1_8.CHANNEL_EVENT_UPCOMING(closure_0)), items1);
};
export const useFirstActiveEventChannel = function useFirstActiveEventChannel(id) {
  const _require = id;
  const items = [closure_4, closure_9];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => {
    const guildScheduledEventsByIndex = outer1_9.getGuildScheduledEventsByIndex(outer1_8.GUILD_EVENT_ACTIVE(closure_0));
    const found = guildScheduledEventsByIndex.find((channel_id) => null != outer2_4.getChannel(channel_id.channel_id));
    let channel_id;
    if (null != found) {
      channel_id = found.channel_id;
    }
    return outer1_4.getChannel(channel_id);
  }, items1);
};
export const useImminentUpcomingGuildEvents = function useImminentUpcomingGuildEvents(id) {
  let dependencyMap;
  let tmp2;
  const _require = id;
  [tmp2, dependencyMap] = stateFromStores(React.useState(() => Date.now()), 2);
  const effect = React.useEffect(() => {
    const interval = setInterval(() => {
      outer1_1(Date.now());
    }, outer1_16);
    return () => clearInterval(closure_0);
  }, []);
  const tmp = stateFromStores(React.useState(() => Date.now()), 2);
  let items = [closure_9];
  const items1 = [id, tmp2];
  stateFromStores = _require(566).useStateFromStores(items, () => {
    if (null == closure_0) {
      let items = [];
    } else {
      items = outer1_9.getGuildScheduledEventsByIndex(outer1_8.CHANNEL_EVENT_UPCOMING(closure_0));
    }
    return items;
  }, items1);
  const items2 = [stateFromStores];
  return React.useMemo(() => stateFromStores.filter((status) => {
    let endTime;
    let startTime;
    let toISOStringResult1;
    const eventSchedule = callback(outer2_1[13]).getEventSchedule(status);
    ({ startTime, endTime } = eventSchedule);
    const obj = callback(outer2_1[13]);
    const obj2 = callback(outer2_1[11]);
    if (null != endTime) {
      toISOStringResult1 = endTime.toISOString();
    }
    const eventTimeData = obj2.getEventTimeData(startTime.toISOString(), toISOStringResult1);
    let withinStartWindow = status.status !== outer2_12.ACTIVE;
    if (withinStartWindow) {
      withinStartWindow = eventTimeData.withinStartWindow;
    }
    if (withinStartWindow) {
      withinStartWindow = eventTimeData.diffMinutes < 15;
    }
    return withinStartWindow;
  }), items2);
};
