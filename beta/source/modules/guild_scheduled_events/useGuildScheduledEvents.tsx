// Module ID: 8943
// Function ID: 8944
// Name: useGuildScheduledEvents
// Dependencies: [32, 19, 2045, 2067, 4469, 6946, 8944, 2051, 1074, 1091, 504, 8946, 8945, 8949, 2]
// Exports: default, getGuildActiveEvent, useActiveEvent, useActiveEventsByChannel, useFirstActiveEventChannel, useGuildActiveEvent, useGuildChannelScheduledEvents, useGuildUpcomingEvents, useGuildUpcomingEventsNotice, useImminentUpcomingGuildEvents

// Module 8943 (useGuildScheduledEvents)
import DurationsDefault from "Durations" /* 1091 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 6946 */;
import UpcomingEventNoticesStore from "UpcomingEventNoticesStore" /* 8944 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, map;

let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
const f87696 = () => {
  let constants3;
  guildScheduledEventsByIndex = guildScheduledEventsByIndex.getGuildScheduledEventsByIndex(closure_2_8.GUILD_EVENT_UPCOMING(closure_0));
  return guildScheduledEventsByIndex.filter((entity_type) => {
    if (entity_type.entity_type !== constants.NONE) {
      if (entity_type.status === constants2.SCHEDULED) {
        if (null == entity_type.channel_id) {
          return true;
        } else {
          basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
          const canBasicChannelResult = null != basicChannel && closure_1_6.canBasicChannel(constants3.VIEW_CHANNEL, basicChannel);
          return canBasicChannelResult;
        }
      }
    }
    return false;
  });
};
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
({ isGuildScheduledEventActive: metroImportDefault, StaticGuildEventIndexes: metroImportAll } = GuildScheduledEventStore);
GuildScheduledEventStore = GuildScheduledEventStore_mod;
({ GuildScheduledEventEntityTypes: unpackModuleId, GuildScheduledEventStatus: closure_12 } = GuildScheduledEventsConstants);
({ BasicPermissions: map1, GuildFeatures: closure_14 } = Constants);
let closure_15 = [];
let closure_16 = 15 * DurationsDefault.Millis.MINUTE;
let result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEvents.tsx");

export default function useGuildEvents(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildStore, GuildScheduledEventStore, PermissionStore, ChannelStore];
  const items1 = [arg1, arg0];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    let found;
    const guild = GuildStore.getGuild(closure_0);
    if (null == guild) {
      found = closure_15;
    } else {
      let GUILD_EVENT_UPCOMINGResult = closure_1;
      const getGuildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex;
      if (closure_1 == null) {
        GUILD_EVENT_UPCOMINGResult = metroImportAll.GUILD_EVENT_UPCOMING(guild.id);
      }
      const guildScheduledEventsByIndex = getGuildScheduledEventsByIndex(GUILD_EVENT_UPCOMINGResult);
      found = guildScheduledEventsByIndex.filter((channel_id) => {
        channel_id = channel_id.channel_id;
        if (null == channel_id) {
          return true;
        } else {
          basicChannel = basicChannel.getBasicChannel(channel_id);
          const canBasicChannelResult = null != basicChannel && closure_1_6.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
          return canBasicChannelResult;
        }
      });
    }
    return found;
  }, items1);
};
export const useActiveEvent = function useActiveEvent(id) {
  _require = id;
  const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const basicChannel = ChannelStore.getBasicChannel(id);
    const tmp = id;
    if (null != basicChannel) {
      if (PermissionStore.canBasicChannel(map1.VIEW_CHANNEL, basicChannel)) {
        let guild_id;
        if (basicChannel != null) {
          guild_id = basicChannel.guild_id;
        }
        if (null == guild_id) {
          return null;
        } else {
          const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.CHANNEL_EVENT_ACTIVE(tmp));
          let first = null;
          if (guildScheduledEventsByIndex.length > 0) {
            first = guildScheduledEventsByIndex[0];
          }
          return first;
        }
      }
    }
    return null;
  }, items1);
};
export const useActiveEventsByChannel = function useActiveEventsByChannel(arg0) {
  let closure_0;
  let stateFromStoresArray;
  _require = arg0;
  const items = [GuildScheduledEventStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => GuildScheduledEventStore.getGuildScheduledEventsForGuild(closure_0), items1);
  const items2 = [stateFromStoresArray];
  return react.useMemo(() => {
    map = new Map();
    const item = stateFromStoresArray.forEach((channel_id) => {
      channel_id = channel_id.channel_id;
      if (null != channel_id) {
        const result = map.set(channel_id, channel_id);
      }
    });
    return map;
  }, items2);
};
export const useGuildUpcomingEvents = function useGuildUpcomingEvents(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, f87696, items1);
};
export const useGuildUpcomingEventsNotice = function useGuildUpcomingEventsNotice(arg0) {
  let closure_0;
  let nextShownUpcomingEventNoticeType;
  let stateFromStoresArray;
  let tmp8;
  _require = arg0;
  let obj = require("get initialized");
  const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
  const items1 = [arg0];
  stateFromStoresArray = obj.useStateFromStoresArray(items, f87696, items1);
  let obj2 = require("get initialized");
  const items2 = [UpcomingEventNoticesStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => UpcomingEventNoticesStore.getAllEventDismissals());
  const items3 = [UpcomingEventNoticesStore];
  const obj3 = require("get initialized");
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items3, () => UpcomingEventNoticesStore.getAllUpcomingNoticeSeenTimes());
  const items4 = [GuildScheduledEventStore];
  const items5 = [stateFromStoresArray];
  const obj4 = require("get initialized");
  const stateFromStoresObject2 = obj4.useStateFromStoresObject(items4, () => {
    let interestedInEventRecurrence;
    let reduced;
    const arr = stateFromStoresArray;
    if (null == stateFromStoresArray) {
      reduced = {};
    } else {
      reduced = arr.reduce((acc, id) => {
        const obj2 = {};
        const obj = closure_1_0(stateFromStoresArray[11]);
        const nextRecurrenceIdInEvent = obj.getNextRecurrenceIdInEvent(id);
        const merged = Object.assign(acc);
        obj2[id.id] = interestedInEventRecurrence.isInterestedInEventRecurrence(id.id, nextRecurrenceIdInEvent);
        return obj2;
      }, {});
    }
    return reduced;
  }, items5);
  const items6 = [GuildStore];
  const obj5 = require("get initialized");
  const stateFromStores = obj5.useStateFromStores(items6, () => GuildStore.getGuild(closure_0));
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = !features.has(constants2.COMMUNITY);
  }
  if (hasItem) {
    const features2 = stateFromStores.features;
    hasItem = features2.has(constants2.INTERNAL_EMPLOYEE_ONLY);
  }
  if (null != stateFromStoresArray) {
    if (null != stateFromStoresObject2) {
      if (hasItem) {
        let num = 0;
        if (0 < stateFromStoresArray.length) {
          while (true) {
            tmp8 = stateFromStoresArray[num];
            let tmp9 = stateFromStoresObject[tmp8.id];
            let tmp10 = stateFromStoresObject1[tmp8.id];
            let flag = stateFromStoresObject2[tmp8.id];
            if (flag == null) {
              flag = false;
            }
            let obj6 = require("GuildScheduledEventUtils");
            nextShownUpcomingEventNoticeType = obj6.getNextShownUpcomingEventNoticeType(tmp8, tmp9, tmp10, flag);
            if (null != nextShownUpcomingEventNoticeType) {
              break;
            } else {
              num = num + 1;
            }
          }
          return { upcomingEvent: tmp8, noticeType: nextShownUpcomingEventNoticeType };
        }
      }
    }
  }
};
export const getGuildActiveEvent = function getGuildActiveEvent(guildId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = GuildScheduledEventStore;
  }
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = ChannelStore;
  }
  let closure_0 = tmp;
  let tmp2 = arg3;
  if (arg3 === undefined) {
    tmp2 = PermissionStore;
  }
  let closure_1 = tmp2;
  const guildScheduledEventsByIndex = obj.getGuildScheduledEventsByIndex(closure_8.GUILD_EVENT_ACTIVE(guildId));
  return guildScheduledEventsByIndex.find((entity_type) => {
    if (entity_type.entity_type !== constants.NONE) {
      if (closure_2_7(entity_type)) {
        if (null == entity_type.channel_id) {
          return true;
        } else {
          basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
          const canBasicChannelResult = null != basicChannel && closure_1.canBasicChannel(constants2.VIEW_CHANNEL, basicChannel);
          return canBasicChannelResult;
        }
      }
    }
    return false;
  });
};
export const useGuildActiveEvent = function useGuildActiveEvent(guild_id) {
  _require = guild_id;
  let obj = require("get initialized");
  const items = [GuildScheduledEventStore, ChannelStore, PermissionStore];
  const items1 = [guild_id];
  return obj.useStateFromStores(items, () => {
    const obj = GuildScheduledEventStore;
    if (GuildScheduledEventStore !== undefined) {
      if (ChannelStore !== undefined) {
        let closure_0 = tmp2;
        if (PermissionStore !== undefined) {
          let closure_1 = tmp3;
          const guildScheduledEventsByIndex = obj.getGuildScheduledEventsByIndex(metroImportAll.GUILD_EVENT_ACTIVE(tmp));
          return guildScheduledEventsByIndex.find((entity_type) => {
            if (entity_type.entity_type !== constants.NONE) {
              if (closure_2_7(entity_type)) {
                if (null == entity_type.channel_id) {
                  return true;
                } else {
                  basicChannel = basicChannel.getBasicChannel(entity_type.channel_id);
                  const canBasicChannelResult = null != basicChannel && closure_1.canBasicChannel(constants2.VIEW_CHANNEL, basicChannel);
                  return canBasicChannelResult;
                }
              }
            }
            return false;
          });
        }
      }
    }
  }, items1);
};
export const useGuildChannelScheduledEvents = function useGuildChannelScheduledEvents(id) {
  _require = id;
  const items = [GuildScheduledEventStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.CHANNEL_EVENT_UPCOMING(id)), items1);
};
export const useFirstActiveEventChannel = function useFirstActiveEventChannel(id) {
  _require = id;
  const items = [ChannelStore, GuildScheduledEventStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let channel;
    const guildScheduledEventsByIndex = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.GUILD_EVENT_ACTIVE(id));
    const found = guildScheduledEventsByIndex.find((channel_id) => null != channel.getChannel(channel_id.channel_id));
    let channel_id;
    const getChannel = ChannelStore.getChannel;
    if (found != null) {
      channel_id = found.channel_id;
    }
    return getChannel(channel_id);
  }, items1);
};
export const useImminentUpcomingGuildEvents = function useImminentUpcomingGuildEvents(id) {
  let stateFromStores;
  let tmp2;
  _require = id;
  const tmp = stateFromStores(react.useState(() => Date.now()), 2);
  [tmp2, dependencyMap] = tmp;
  const effect = react.useEffect(() => {
    let closure_0;
    const interval = setInterval(() => {
      closure_1_1(Date.now());
    }, closure_1_16);
    return () => clearInterval(closure_0);
  }, []);
  let obj = require("get initialized");
  let items = [GuildScheduledEventStore];
  const items1 = [id, tmp2];
  stateFromStores = obj.useStateFromStores(items, () => {
    let items;
    if (null == id) {
      items = [];
    } else {
      items = GuildScheduledEventStore.getGuildScheduledEventsByIndex(metroImportAll.CHANNEL_EVENT_UPCOMING(tmp));
    }
    return items;
  }, items1);
  const items2 = [stateFromStores];
  return react.useMemo(() => stateFromStores.filter((status) => {
    let endTime;
    let startTime;
    const obj = id(closure_1_1[13]);
    const eventSchedule = obj.getEventSchedule(status);
    ({ startTime, endTime } = eventSchedule);
    const getEventTimeData = id(closure_1_1[11]).getEventTimeData;
    let toISOStringResult1;
    id(closure_1_1[11]);
    const toISOStringResult = startTime.toISOString();
    if (endTime != null) {
      toISOStringResult1 = endTime.toISOString();
    }
    const eventTimeData = getEventTimeData(toISOStringResult, toISOStringResult1);
    let withinStartWindow = status.status !== constants.ACTIVE;
    const diffMinutes = eventTimeData.diffMinutes;
    if (withinStartWindow) {
      withinStartWindow = eventTimeData.withinStartWindow;
    }
    if (withinStartWindow) {
      withinStartWindow = diffMinutes < 15;
    }
    return withinStartWindow;
  }), items2);
};
