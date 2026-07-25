// Module ID: 8146
// Function ID: 65021
// Dependencies: [5, 1194, 5751, 1354, 653, 507, 4945, 1198, 8147, 4370, 686, 8152, 21, 2]

// Module 8146
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import ME from "ME";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ ENTITY_TYPES_REQUIRED_CHANNEL_ID: closure_6, ENTITY_TYPES_REQUIRED_ENTITY_METADATA: closure_7, GuildScheduledEventStatus: closure_8, MAX_RSVP_USER_DISPLAY_COUNT: closure_9 } = GUILD_EVENT_MAX_NAME_LENGTH);
({ Endpoints: closure_10, Routes: closure_11 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventsActionCreators.tsx");

export default {
  startEvent(arg0, arg1) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_10.GUILD_EVENT(arg1, arg0), body: obj };
    obj = { status: constants.ACTIVE, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  endEvent(arg0, arg1) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_10.GUILD_EVENT(arg1, arg0), body: obj };
    obj = { status: constants.COMPLETED, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  joinVoiceEvent(arg0, channelId) {
    const voiceChannel = importDefault(4945).selectVoiceChannel(channelId);
    const obj = importDefault(4945);
    require(1198) /* shouldNavigate */.transitionTo(closure_11.CHANNEL(arg0, channelId));
  },
  saveEvent(arg0, entityType) {
    let channelId = null;
    if (set.has(entityType.entityType)) {
      channelId = entityType.channelId;
    }
    let entityMetadata = null;
    if (set2.has(entityType.entityType)) {
      entityMetadata = entityType.entityMetadata;
    }
    if (null == entityType.image) {
      const image = entityType.image;
    } else {
      let obj = /^data:/;
    }
    obj = { name: entityType.name, description: entityType.description, image };
    ({ privacyLevel: obj2.privacy_level, scheduledStartTime: obj2.scheduled_start_time, scheduledEndTime: obj2.scheduled_end_time, entityType: obj2.entity_type } = entityType);
    obj.channel_id = channelId;
    obj.entity_metadata = entityMetadata;
    obj.recurrence_rule = require(8147) /* recurrenceRuleToServer */.recurrenceRuleToServer(entityType.recurrenceRule);
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_10.GUILD_EVENT(arg2, arg0), body: obj };
    const obj3 = require(8147) /* recurrenceRuleToServer */;
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    return HTTP.patch(obj);
  },
  createGuildEvent(first, id) {
    let obj = { name: first.name, description: first.description, image: first.image, privacy_level: first.privacyLevel, scheduled_start_time: first.scheduledStartTime, scheduled_end_time: first.scheduledEndTime, entity_type: first.entityType, channel_id: first.channelId, entity_metadata: first.entityMetadata, recurrence_rule: require(8147) /* recurrenceRuleToServer */.recurrenceRuleToServer(first.recurrenceRule) };
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_10.GUILD_EVENTS_FOR_GUILD(id), body: obj };
    const obj2 = require(8147) /* recurrenceRuleToServer */;
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  fetchGuildEvent(guildId, guildEventId) {
    let closure_0 = guildId;
    let closure_1 = guildEventId;
    return callback(async () => {
      let obj = callback(outer2_2[9]);
      obj = { url: outer2_10.GUILD_EVENT(outer1_0, outer1_1), rejectWithError: callback(outer2_2[5]).rejectWithMigratedError() };
      const body = yield obj.httpGetWithCountryCodeQuery(obj).body;
      const obj3 = callback(outer2_2[5]);
      callback2(outer2_2[10]).dispatch({ type: "FETCH_GUILD_EVENT", guildScheduledEvent: body });
      return body;
    })();
  },
  fetchGuildEventsForGuild(first) {
    let closure_0 = first;
    return callback(async () => {
      let obj = { url: outer2_10.GUILD_EVENTS_FOR_GUILD(outer1_0), rejectWithError: callback(outer2_2[5]).rejectWithMigratedError() };
      const obj2 = callback(outer2_2[5]);
      const body = yield callback(outer2_2[9]).httpGetWithCountryCodeQuery(obj).body;
      const obj3 = callback(outer2_2[9]);
      obj = { type: "FETCH_GUILD_EVENTS_FOR_GUILD", guildId: outer1_0, guildScheduledEvents: body };
      outer2_1(outer2_2[10]).dispatch(obj);
      return body;
    })();
  },
  fetchGuildEventUserCounts(arg0, arg1, found) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = found;
    return callback(async () => {
      obj = { url: outer2_10.GUILD_EVENT_USER_COUNTS(outer1_0, outer1_1), query: obj };
      obj = { guild_scheduled_event_exception_ids: outer1_2, rejectWithError: callback(507).rejectWithMigratedError() };
      const HTTP = callback(507).HTTP;
      const body = yield HTTP.get(obj).body;
      obj = { eventCount: body.guild_scheduled_event_count, recurrenceCounts: body.guild_scheduled_event_exception_counts };
      const obj3 = callback(507);
      callback2(686).dispatch({ type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS", guildId: outer1_0, eventId: outer1_1, counts: obj });
      return obj;
    })();
  },
  cancelGuildEvent(arg0, arg1) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_10.GUILD_EVENT(arg1, arg0), body: obj };
    obj = { status: constants.CANCELED, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  deleteGuildEvent(arg0, arg1) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_10.GUILD_EVENT(arg1, arg0), rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  getGuildEventsForCurrentUser(guild_id) {
    let closure_0 = guild_id;
    return callback(async () => {
      const HTTP = callback(outer2_2[5]).HTTP;
      let obj = { url: outer2_10.USER_GUILD_EVENTS, query: { guild_ids: items } };
      items = [outer1_0];
      obj.rejectWithError = callback(outer2_2[5]).rejectWithMigratedError();
      const obj2 = callback(outer2_2[5]);
      obj = { type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS", guildScheduledEventUsers: yield HTTP.get(obj).body, guildId: outer1_0 };
      outer2_1(outer2_2[10]).dispatch(obj);
    })();
  },
  createRsvpForGuildEvent(outer1_0, outer1_1, outer1_2, outer1_3) {
    let closure_0 = outer1_0;
    let closure_1 = outer1_1;
    let closure_2 = outer1_2;
    const callback = outer1_3;
    return callback(async () => {
      const id = outer2_4.getId();
      let obj = callback2(686);
      obj = { type: "GUILD_SCHEDULED_EVENT_USER_ADD", userId: id, guildId: outer1_2, guildEventId: outer1_0, guildEventExceptionId: outer1_1, response: outer1_3 };
      obj.dispatch(obj);
      const HTTP = callback(507).HTTP;
      obj = { url: outer2_10.USER_GUILD_EVENT(outer1_2, outer1_0, outer1_1), body: obj1, rejectWithError: callback(507).rejectWithMigratedError() };
      return yield HTTP.put(obj);
    })();
  },
  deleteRsvpForGuildEvent(outer1_0, outer1_1, outer1_2) {
    let closure_0 = outer1_0;
    let closure_1 = outer1_1;
    let closure_2 = outer1_2;
    return callback(async () => {
      const id = outer2_4.getId();
      const rsvp = outer2_5.getRsvp(outer1_0, outer1_1, id);
      if (null != rsvp) {
        let obj = callback2(686);
        obj = { type: "GUILD_SCHEDULED_EVENT_USER_REMOVE", userId: id, guildId: outer1_2, guildEventId: outer1_0, guildEventExceptionId: outer1_1, response: tmp3.response };
        obj.dispatch(obj);
        const HTTP = callback(507).HTTP;
        obj = { url: outer2_10.USER_GUILD_EVENT(outer1_2, outer1_0, outer1_1), rejectWithError: callback(507).rejectWithMigratedError() };
        return yield HTTP.del(obj);
      }
    })();
  },
  updateRsvp(arg0, arg1, arg2, arg3, arg4) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    const callback = arg3;
    let closure_4 = arg4;
    const self = this;
    return callback(async () => {
      if (null != obj.getExistingRsvp(outer1_0, outer1_1)) {
        yield outer1_5.deleteRsvpForGuildEvent(outer1_0, outer1_1, outer1_2);
        if (null != outer1_4) {
          outer1_4();
        }
      } else {
        yield outer1_5.createRsvpForGuildEvent(outer1_0, outer1_1, outer1_2, outer1_3);
        if (null != outer1_4) {
          outer1_4();
        }
      }
    })();
  },
  fetchUsersForGuildEvent(arg0, arg1, arg2) {
    let tmp = arg3;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (arg3 === undefined) {
      tmp = closure_9;
    }
    const callback = tmp;
    return callback(async () => {
      if (null != outer1_0) {
        if (null != outer1_2) {
          const HTTP = callback(507).HTTP;
          let obj = { url: outer2_10.GUILD_EVENT_USERS(outer1_2, outer1_0, outer1_1) };
          obj = { limit: outer1_3, with_member: true };
          obj.query = obj;
          obj.rejectWithError = callback(507).rejectWithMigratedError();
          const tmp15 = yield HTTP.get(obj);
          obj = callback2(686);
          const obj1 = { type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS", guildEventId: outer1_0, guildScheduledEventUsers: tmp15.body, guildId: outer1_2, guildEventExceptionId: outer1_1 };
          obj.dispatch(obj1);
          return tmp15.body.users;
        }
      }
      return [];
    })();
  },
  createGuildEventException(arg0, guild_id, id) {
    let is_canceled;
    let original_scheduled_start_time;
    let scheduled_end_time;
    let scheduled_start_time;
    ({ original_scheduled_start_time, scheduled_start_time, scheduled_end_time, is_canceled } = arg0);
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_10.GUILD_EVENT_EXCEPTIONS(guild_id, id), body: { original_scheduled_start_time, scheduled_start_time, scheduled_end_time, is_canceled }, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  updateGuildEventException(arg0, guild_id, id, event_exception_id) {
    let is_canceled;
    let scheduled_end_time;
    let scheduled_start_time;
    ({ scheduled_start_time, scheduled_end_time, is_canceled } = arg0);
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_10.GUILD_EVENT_EXCEPTION(guild_id, id, event_exception_id), body: { scheduled_start_time, scheduled_end_time, is_canceled }, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  deleteGuildEventException(guild_id, id, event_exception_id) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_10.GUILD_EVENT_EXCEPTION(guild_id, id, event_exception_id), rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  deleteRecurrence(guild_id, id, event_exception_id, arg3) {
    const self = this;
    if (null != arg3) {
      let obj = {};
      ({ scheduled_start_time: obj4.scheduled_start_time, scheduled_end_time: obj4.scheduled_end_time } = arg3);
      obj.is_canceled = true;
      return self.updateGuildEventException(obj, guild_id, id, event_exception_id);
    } else {
      obj = importDefault(21);
      obj = {};
      const _Date = Date;
      const date = new Date(obj.extractTimestamp(event_exception_id));
      obj.original_scheduled_start_time = date.toISOString();
      obj.is_canceled = true;
      return self.createGuildEventException(obj, guild_id, id);
    }
  }
};
